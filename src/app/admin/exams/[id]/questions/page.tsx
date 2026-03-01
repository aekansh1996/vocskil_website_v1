import { prisma } from "@/lib/prisma";
import QuestionsManager from "@/components/admin/QuestionsManager";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default async function ExamQuestionsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const exam = await prisma.exam.findUnique({
        where: { id },
        include: { course: true }
    });

    if (!exam) return notFound();

    return (
        <div className="max-w-4xl mx-auto py-8">
            <div className="mb-8 flex items-center gap-4">
                <Link href="/admin/exams" className="p-2 hover:bg-slate-100 rounded-full transition-all text-slate-500">
                    <ChevronLeft className="h-6 w-6" />
                </Link>
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">{exam.title}</h1>
                    <p className="text-slate-500">
                        {exam.courseId ? (
                            <>Associated Course: <span className="font-bold text-slate-700">{(exam as any).course.title}</span></>
                        ) : (
                            <span className="italic">Independent Assessment</span>
                        )}
                    </p>
                </div>
            </div>

            <QuestionsManager examId={exam.id} />
        </div>
    );
}
