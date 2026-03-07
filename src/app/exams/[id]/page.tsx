import { prisma } from "@/lib/prisma";
export const dynamic = 'force-dynamic';
import { notFound } from "next/navigation";
import ExamIntakeForm from "@/components/exams/ExamIntakeForm";

export default async function PublicExamPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const exam = await prisma.exam.findUnique({
        where: { id },
        include: {
            _count: {
                select: { questions: true }
            }
        }
    });

    if (!exam || !(exam as any).isPublic) {
        return notFound();
    }

    return <ExamIntakeForm exam={exam} />;
}
