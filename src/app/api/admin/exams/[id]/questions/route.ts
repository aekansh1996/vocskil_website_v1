import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { NextResponse } from "next/server";

export async function POST(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const session = await auth();
    if (!session?.user || session.user.role !== "ADMIN") {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const { text, options, correctAnswer, type } = await req.json();

        const question = await (prisma.question as any).create({
            data: {
                text,
                type: type || "MCQ",
                options: options ? JSON.stringify(options) : null,
                correctAnswer,
                examId: id,
            },
        });

        return NextResponse.json(question);
    } catch (error: any) {
        console.error("Create question error:", error);
        return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
    }
}

export async function GET(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const session = await auth();
    if (!session?.user || session.user.role !== "ADMIN") {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const questions = await prisma.question.findMany({
            where: { examId: id },
        });

        return NextResponse.json(questions.map(q => ({
            ...q,
            options: q.options ? JSON.parse(q.options) : []
        })));
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
export async function DELETE(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const session = await auth();
    if (!session?.user || session.user.role !== "ADMIN") {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const questionId = searchParams.get("questionId");

    if (!questionId) {
        return NextResponse.json({ error: "Question ID is required" }, { status: 400 });
    }

    try {
        await prisma.question.delete({
            where: { id: questionId, examId: id },
        });

        return NextResponse.json({ message: "Question deleted" });
    } catch (error) {
        console.error("Delete question error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
