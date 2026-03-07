import { prisma } from "@/lib/prisma";
export const dynamic = 'force-dynamic';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, DollarSign, TrendingUp, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

async function getStats() {
    const totalUsers = await prisma.user.count({ where: { role: "STUDENT" } });
    const totalCourses = await prisma.course.count();
    const totalEnrollments = await prisma.enrollment.count();
    // Mock revenue calculation
    const totalRevenue = totalEnrollments * 499; // Assuming avg price

    return { totalUsers, totalCourses, totalEnrollments, totalRevenue };
}

export default async function AdminDashboard() {
    const stats = await getStats();

    return (
        <div className="space-y-10 pb-16">
            {/* Welcome Banner */}
            <div className="bg-indigo-600 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl shadow-indigo-200">
                <div className="relative z-10 max-w-2xl">
                    <h1 className="text-4xl font-black tracking-tight mb-4">Welcome to Vocskill Admin</h1>
                    <p className="text-indigo-100 text-lg leading-relaxed mb-6">
                        Manage your students, courses, and certifications from one professional dashboard.
                        Start by building your curriculum or launching a new exam.
                    </p>
                    <div className="flex gap-4">
                        <Button asChild className="bg-white text-indigo-600 hover:bg-slate-50 font-bold px-6 py-6 rounded-2xl h-auto">
                            <Link href="/admin/courses/new">
                                <Plus className="h-5 w-5 mr-2" /> Create New Course
                            </Link>
                        </Button>
                        <Button asChild variant="outline" className="border-indigo-400 text-white hover:bg-white/10 font-bold px-6 py-6 rounded-2xl h-auto">
                            <Link href="/admin/exams">
                                View Active Exams
                            </Link>
                        </Button>
                    </div>
                </div>
                {/* Decorative circles */}
                <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-indigo-500 rounded-full opacity-20 transform scale-150"></div>
                <div className="absolute bottom-[-30px] right-[100px] w-32 h-32 bg-indigo-400 rounded-full opacity-10"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card className="border-none shadow-sm rounded-3xl hover:shadow-md transition-all">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Students</CardTitle>
                        <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                            <Users className="h-4 w-4" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-black text-slate-900">{stats.totalUsers}</div>
                        <p className="text-xs text-emerald-500 font-bold mt-1 flex items-center gap-1">
                            <TrendingUp className="h-3 w-3" /> +12.5% <span className="text-slate-400 font-normal ml-1 mt-[1px]">vs last month</span>
                        </p>
                    </CardContent>
                </Card>

                <Card className="border-none shadow-sm rounded-3xl hover:shadow-md transition-all">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-xs font-bold text-slate-500 uppercase tracking-wider">Active Courses</CardTitle>
                        <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                            <BookOpen className="h-4 w-4" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-black text-slate-900">{stats.totalCourses}</div>
                        <p className="text-xs text-slate-400 font-medium mt-1">2 new courses added this week</p>
                    </CardContent>
                </Card>

                <Card className="border-none shadow-sm rounded-3xl hover:shadow-md transition-all">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-xs font-bold text-slate-500 uppercase tracking-wider">Enrollments</CardTitle>
                        <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                            <TrendingUp className="h-4 w-4" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-black text-slate-900">{stats.totalEnrollments}</div>
                        <p className="text-xs text-emerald-500 font-bold mt-1 flex items-center gap-1">
                            <TrendingUp className="h-3 w-3" /> +18.2% <span className="text-slate-400 font-normal ml-1 mt-[1px]">vs last month</span>
                        </p>
                    </CardContent>
                </Card>

                <Card className="border-none shadow-sm rounded-3xl hover:shadow-md transition-all">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Revenue</CardTitle>
                        <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600">
                            <DollarSign className="h-4 w-4" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-black text-slate-900">${stats.totalRevenue.toLocaleString()}</div>
                        <p className="text-xs text-emerald-500 font-bold mt-1 flex items-center gap-1">
                            <TrendingUp className="h-3 w-3" /> +24% <span className="text-slate-400 font-normal ml-1 mt-[1px]">vs last month</span>
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
