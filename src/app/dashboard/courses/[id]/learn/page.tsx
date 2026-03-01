import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { redirect, notFound } from "next/navigation";
import CoursePlayer from "@/components/learning/CoursePlayer";

export default async function CourseLearnPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const session = await auth();
    if (!session?.user) redirect("/login");

    const course = await prisma.course.findUnique({
        where: { id },
        include: {
            modules: {
                orderBy: { order: "asc" } as any,
                include: {
                    lessons: {
                        orderBy: { order: "asc" } as any
                    }
                }
            }
        }
    });

    if (!course) return notFound();

    // Check enrollment
    const enrollment = await prisma.enrollment.findUnique({
        where: {
            userId_courseId: {
                userId: session.user.id as string,
                courseId: course.id
            }
        } as any
    });

    if (!enrollment && session.user.role !== "ADMIN") {
        redirect(`/dashboard`);
    }

    return (
        <div className="h-screen flex flex-col overflow-hidden bg-slate-950">
            <CoursePlayer course={course} />
        </div>
    );
}
