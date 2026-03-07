import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PlusCircle, FileText, Settings, Link2, Clock } from "lucide-react";
import { ShareExamButton } from "@/components/admin/ShareExamButton";

export default async function AdminExamsPage() {
    const exams = await prisma.exam.findMany({
        include: {
            course: true,
            _count: { select: { questions: true, attempts: true } }
        }
    });

    const allCourses = await prisma.course.findMany({
        select: { id: true, title: true }
    });

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Manage Exams</h1>
                    <p className="text-slate-500 mt-2">Create and monitor professional exams for your courses.</p>
                </div>
                <Button asChild>
                    <Link href="/admin/exams/new">
                        <PlusCircle className="h-4 w-4 mr-2" />
                        Create New Exam
                    </Link>
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(exams as any[]).map((exam) => (
                    <Card key={exam.id} className="hover:shadow-md transition-shadow">
                        <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                                <CardTitle className="text-xl font-bold">{exam.title}</CardTitle>
                                {exam.course ? (
                                    <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-1 rounded uppercase">
                                        {exam.course.title}
                                    </span>
                                ) : (
                                    <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-1 rounded uppercase italic">
                                        Independent
                                    </span>
                                )}
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="grid grid-cols-3 gap-2 text-sm">
                                    <div className="p-3 bg-indigo-50/50 rounded-lg border border-indigo-100/50">
                                        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-1">Questions</p>
                                        <p className="font-bold text-lg text-indigo-700">{exam._count.questions}</p>
                                    </div>
                                    <div className="p-3 bg-emerald-50/50 rounded-lg border border-emerald-100/50">
                                        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-1">Duration</p>
                                        <p className="font-bold text-lg text-emerald-700">{exam.duration}m</p>
                                    </div>
                                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                                        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-1">Attempts</p>
                                        <p className="font-bold text-lg text-slate-700">{exam._count.attempts}</p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between py-2 border-y border-slate-100">
                                    <div className="flex items-center gap-2">
                                        <div className={`h-2 w-2 rounded-full ${exam.isPublic ? "bg-emerald-500 animate-pulse" : "bg-slate-300"}`} />
                                        <span className={`text-xs font-bold uppercase tracking-wider ${exam.isPublic ? "text-emerald-600" : "text-slate-400"}`}>
                                            {exam.isPublic ? "Active & Public" : "Draft / Private"}
                                        </span>
                                    </div>
                                    {exam.isPublic && <ShareExamButton examId={exam.id} />}
                                </div>

                                <div className="flex gap-2">
                                    <Button asChild variant="outline" className="flex-1">
                                        <Link href={`/admin/exams/${exam.id}/questions`}>
                                            <FileText className="h-4 w-4 mr-2" />
                                            Questions
                                        </Link>
                                    </Button>
                                    <Button asChild variant="ghost" size="icon" className="h-8 w-8 text-slate-500 hover:text-indigo-600">
                                        <Link href={`/admin/exams/${exam.id}/questions`}>
                                            <Pencil className="h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {exams.length === 0 && (
                <div className="text-center py-20 bg-white rounded-2xl border-2 border-dashed border-slate-200">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FileText className="h-8 w-8 text-slate-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">No exams yet</h3>
                    <p className="text-slate-500 max-w-xs mx-auto mt-2 mb-6">Create your first proctored exam to start certifying your students.</p>
                    <Button asChild>
                        <Link href="/admin/exams/new">Create First Exam</Link>
                    </Button>
                </div>
            )}
        </div>
    );
}
