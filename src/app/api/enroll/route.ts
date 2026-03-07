import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
    try {
        const session = await getServerSession(authOptions);

        if (!session?.user) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        const { courseId } = await req.json();

        if (!courseId) {
            return NextResponse.json({ message: "Course ID is required" }, { status: 400 });
        }

        // Check if user is already enrolled
        const existingEnrollment = await prisma.enrollment.findUnique({
            where: {
                userId_courseId: {
                    userId: (session.user as any).id,
                    courseId: courseId,
                },
            },
        });

        if (existingEnrollment) {
            return NextResponse.json({ message: "Already enrolled" }, { status: 400 });
        }

        // Create enrollment
        await prisma.enrollment.create({
            data: {
                userId: (session.user as any).id,
                courseId: courseId,
            },
        });

        return NextResponse.json({ message: "Enrolled successfully" });
    } catch (error) {
        console.error("[ENROLL_ERROR]", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
