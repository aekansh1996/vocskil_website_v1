import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowRight, PlayCircle } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

async function getFreeCourses() {
    return await prisma.course.findMany({
        where: {
            price: 0,
            published: true
        },
        take: 4,
        include: {
            _count: {
                select: { modules: true }
            }
        }
    });
}

export async function FreeCoursesSection() {
    const freeCourses = await getFreeCourses();

    if (freeCourses.length === 0) return null;

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-3 flex items-center gap-2">
                            <PlayCircle className="h-4 w-4" />
                            Limited Time Offer
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                            Start Learning for <span className="text-indigo-600">Free</span> Today
                        </h3>
                        <p className="text-slate-500 mt-4 text-lg">
                            Explore our collection of complimentary courses designed to give you a head start in your career. No credit card required.
                        </p>
                    </div>
                    <Button variant="outline" className="border-indigo-200 text-indigo-600 hover:bg-indigo-50 font-bold px-6 py-6 rounded-2xl hidden md:flex" asChild>
                        <Link href="/courses">View All Courses <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {freeCourses.map((course) => (
                        <Card key={course.id} className="group border-none shadow-sm hover:shadow-xl transition-all duration-500 rounded-[2rem] overflow-hidden bg-white">
                            <CardHeader className="p-0 relative aspect-video overflow-hidden">
                                <img
                                    src={course.image || "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80"}
                                    alt={course.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-emerald-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
                                        Free Course
                                    </span>
                                </div>
                            </CardHeader>
                            <CardContent className="p-6">
                                <div className="flex items-center gap-2 text-slate-400 text-xs font-bold mb-3">
                                    <BookOpen className="h-3 w-3" />
                                    {course._count.modules} Modules
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2 mb-3">
                                    {course.title}
                                </h4>
                                <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed">
                                    {course.description || "Master new skills with this comprehensive free course from Vocskill."}
                                </p>
                            </CardContent>
                            <CardFooter className="p-6 pt-0">
                                <Button className="w-full bg-slate-900 hover:bg-indigo-600 text-white font-bold py-6 rounded-2xl group/btn transition-all duration-300" asChild>
                                    <Link href={`/courses/${course.id}`}>
                                        Enroll Now
                                        <ArrowRight className="ml-2 h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <div className="mt-12 md:hidden">
                    <Button className="w-full bg-white border border-indigo-100 text-indigo-600 hover:bg-slate-50 font-bold py-6 rounded-2xl shadow-sm" asChild>
                        <Link href="/courses">View All Courses</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
