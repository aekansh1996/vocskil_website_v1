// DEPLOY FIX - FORCE NEW COMMIT V2
import { PrismaClient } from "@prisma/client";
import { auth } from "@/auth";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";

const prisma = new PrismaClient();


type EnrollmentWithCourse = {
    course: {
        id: string;
        title: string;
        _count: {
            modules: number;
        };
    };
};

export default async function DashboardPage() {
    const session = await auth();

    if (!session?.user?.email) return null;

    const user = await prisma.user.findUnique({
        where: { email: session.user.email },
        include: {
            enrollments: {
                include: {
                    course: {
                        include: {
                            _count: { select: { modules: true } }
                        }
                    }
                }
            }
        }
    });

    const enrolledCourses = user?.enrollments.map((e: EnrollmentWithCourse) => e.course) || [];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-slate-900">My Learning</h1>
                <p className="text-slate-500 mt-2">Continue where you left off.</p>
            </div>

            {enrolledCourses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {enrolledCourses.map((course: any) => (
                        <Card key={course.id} className="overflow-hidden hover:shadow-md transition-shadow">
                            <div className="h-40 bg-slate-200 relative">
                                {/* Placeholder for course image */}
                                <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                                    Course Image
                                </div>
                            </div>
                            <CardHeader>
                                <CardTitle className="line-clamp-1">{course.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex justify-between text-sm text-slate-500 mb-4">
                                    <span>{course._count.modules} Modules</span>
                                    <span>0% Complete</span>
                                </div>
                                <Button asChild className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                                    <Link href={`/dashboard/courses/${course.id}`}>
                                        <PlayCircle className="h-4 w-4 mr-2" />
                                        Continue Learning
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            ) : (
                <div className="text-center py-12 bg-white rounded-xl border border-slate-200">
                    <h3 className="text-lg font-medium text-slate-900 mb-2">No courses yet</h3>
                    <p className="text-slate-500 mb-6">You haven't enrolled in any courses yet.</p>
                    <Button asChild>
                        <Link href="/courses">Browse Courses</Link>
                    </Button>
                </div>
            )}
        </div>
    );
}
