import { prisma } from "@/lib/prisma";
import ExamInterface from "@/components/exams/ExamInterface";
import { notFound } from "next/navigation";

export default async function TestExamPage() {
    const exam = await prisma.exam.findUnique({
        where: { id: "test-exam-1" },
        include: { questions: true },
    });

    if (!exam) {
        return notFound();
    }

    // Parse questions options from JSON string to array
    const formattedExam = {
        ...exam,
        questions: exam.questions.map((q) => ({
            ...q,
            options: JSON.parse(q.options),
        })),
    };

    return (
        <div className="container mx-auto py-8">
            <ExamInterface exam={formattedExam} />
        </div>
    );
}
