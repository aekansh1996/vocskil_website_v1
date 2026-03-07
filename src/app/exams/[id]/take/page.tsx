import { prisma } from "@/lib/prisma";
export const dynamic = 'force-dynamic';
import { notFound } from "next/navigation";
import ExamInterface from "@/components/exams/ExamInterface";

export default async function TakeExamPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const exam = await prisma.exam.findUnique({
        where: { id },
        include: { questions: true },
    });

    if (!exam || !(exam as any).isPublic) {
        return notFound();
    }

    // Parse questions options from JSON string to array
    const formattedExam = {
        ...exam,
        questions: exam.questions.map((q) => ({
            ...q,
            options: q.options ? JSON.parse(q.options) : [],
        })),
    };

    return (
        <div className="min-h-screen bg-slate-50 py-12">
            <div className="container mx-auto px-4">
                <ExamInterface exam={formattedExam as any} />
            </div>
        </div>
    );
}
