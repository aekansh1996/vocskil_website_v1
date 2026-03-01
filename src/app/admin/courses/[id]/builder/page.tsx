import { prisma } from "@/lib/prisma";
import CourseBuilder from "@/components/admin/CourseBuilder";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default async function CourseBuilderPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const course = await prisma.course.findUnique({
        where: { id },
    });

    if (!course) return notFound();

    return (
        <div className="max-w-5xl mx-auto py-8">
            <div className="mb-8 flex items-center gap-4">
                <Link href="/admin/courses" className="p-2 hover:bg-slate-100 rounded-full transition-all text-slate-500">
                    <ChevronLeft className="h-6 w-6" />
                </Link>
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Course Builder</h1>
                    <p className="text-slate-500">Structure your curriculum for: <span className="font-bold text-slate-700">{course.title}</span></p>
                </div>
            </div>

            <CourseBuilder courseId={course.id} />
        </div>
    );
}
