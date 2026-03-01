import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { NextResponse } from "next/server";
import { generateCertificate, sendCertificateEmail } from "@/lib/certificate-service";
import { syncExamAttemptToFirestore, syncCertificateToFirestore } from "@/lib/db";

export async function POST(
    req: Request,
    { params }: { params: { id: string } }
) {
    const session = await auth();
    const { answers, proctoringData, studentInfo } = await req.json();
    const examId = params.id;

    try {
        const exam = await prisma.exam.findUnique({
            where: { id: examId },
            include: { questions: true },
        }) as any;

        if (!exam) {
            return NextResponse.json({ error: "Exam not found" }, { status: 404 });
        }

        // Check authorization: Either session or public link
        if (!session?.user?.email && !exam.isPublic) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        let userId = "";
        let userEmail = "";
        let userName = "Guest Student";

        if (session?.user?.email) {
            const user = await prisma.user.findUnique({
                where: { email: session.user.email },
            });
            if (user) {
                userId = user.id;
                userEmail = user.email;
                userName = user.name || "Student";
            }
        } else if (exam.isPublic && studentInfo) {
            // Find or create a guest user based on email provided in studentInfo
            userEmail = studentInfo.Email || studentInfo.email || `guest_${Date.now()}@example.com`;
            userName = studentInfo["Full Name"] || studentInfo.name || studentInfo.Name || "Guest Student";

            let guestUser = await prisma.user.findUnique({ where: { email: userEmail } });

            if (!guestUser) {
                guestUser = await prisma.user.create({
                    data: {
                        email: userEmail,
                        name: userName,
                        password: "guest_no_password", // Placeholder
                        role: "STUDENT"
                    }
                });
            }
            userId = guestUser.id;
        }

        if (!userId) {
            return NextResponse.json({ error: "User context not found" }, { status: 400 });
        }

        // Grading logic
        let score = 0;
        exam.questions.forEach((question: any) => {
            const userAnswer = (answers[question.id] || "").toString().trim();
            const correctAnswer = (question.correctAnswer || "").toString().trim();

            if (question.type === "SHORT_ANSWER") {
                if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
                    score += 1;
                }
            } else {
                // MCQ or TRUE_FALSE
                if (userAnswer === correctAnswer) {
                    score += 1;
                }
            }
        });

        const percentage = (score / exam.questions.length) * 100;
        const passed = percentage >= exam.passingScore;

        const attempt = await prisma.examAttempt.create({
            data: {
                userId: userId,
                examId: exam.id,
                score: Math.round(percentage),
                passed,
                proctoringData: JSON.stringify({
                    ...proctoringData,
                    studentInfo: studentInfo // Store the intake info in proctoring data
                }),
            },
        });

        // Sync attempt to Firestore
        await syncExamAttemptToFirestore({
            userId: userId,
            userEmail: userEmail,
            examId: exam.id,
            examTitle: exam.title,
            score: Math.round(percentage),
            passed,
            createdAt: new Date().toISOString()
        });

        // If passed, trigger certificate generation
        if (passed) {
            try {
                const targetId = exam.courseId || exam.id;
                const isCourse = !!exam.courseId;

                const pdfBuffer = await generateCertificate(userId, targetId, isCourse);

                await prisma.certificate.create({
                    data: {
                        userId: userId,
                        courseId: exam.courseId || null,
                        examId: exam.id,
                        pdfUrl: "sent_via_email",
                    } as any
                });

                await sendCertificateEmail(userEmail, userName, exam.title, pdfBuffer);

                await syncCertificateToFirestore({
                    userId: userId,
                    userEmail: userEmail,
                    courseId: exam.courseId,
                    courseTitle: exam.title,
                    issuedAt: new Date().toISOString()
                });
            } catch (certError) {
                console.error("Certificate generation/sending failed:", certError);
            }
        }

        return NextResponse.json({
            attemptId: attempt.id,
            score: Math.round(percentage),
            passed,
        });
    } catch (error) {
        console.error("Exam submission error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
