import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const session = await auth();
    if (!session?.user || session.user.role !== "ADMIN") {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const { title, courseId, passingScore, description, duration, isPublic, customFields } = await req.json();

        const exam = await prisma.exam.create({
            data: {
                title,
                courseId,
                passingScore: passingScore || 70,
                description,
                duration: duration || 60,
                isPublic: !!isPublic,
                customFields: customFields ? JSON.stringify(customFields) : null,
            } as any,
        });

        return NextResponse.json(exam);
    } catch (error) {
        console.error("Create exam error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
