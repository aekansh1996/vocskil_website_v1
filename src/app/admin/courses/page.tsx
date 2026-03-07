"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus, Pencil, Trash } from "lucide-react";
import { useRouter } from "next/navigation";

type CourseWithCounts = {
    id: string;
    title: string;
    price: number;
    published: boolean;
    _count: {
        modules: number;
        enrollments: number;
    };
};

export default function CoursesPage() {
    const [courses, setCourses] = useState<CourseWithCounts[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchCourses = async () => {
        setIsLoading(true);
        try {
            const res = await fetch("/api/admin/courses");
            const data = await res.json();
            setCourses(data);
        } catch (error) {
            console.error("Failed to fetch courses:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchCourses();
    }, []);

    const handleDelete = async (id: string) => {
        if (!window.confirm("Are you sure you want to delete this course?")) return;

        try {
            const res = await fetch(`/api/admin/courses/${id}`, { method: "DELETE" });
            if (res.ok) {
                fetchCourses();
            } else {
                alert("Failed to delete course");
            }
        } catch (error) {
            console.error("Delete error:", error);
            alert("An error occurred while deleting");
        }
    };

    if (isLoading) return <div className="p-8 text-center text-slate-500 font-medium">Loading courses...</div>;

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-slate-900">Courses</h1>
                <Button asChild>
                    <Link href="/admin/courses/new">
                        <Plus className="h-4 w-4 mr-2" />
                        Create Course
                    </Link>
                </Button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                            <th className="px-6 py-4 font-medium text-slate-900">Title</th>
                            <th className="px-6 py-4 font-medium text-slate-900">Price</th>
                            <th className="px-6 py-4 font-medium text-slate-900">Status</th>
                            <th className="px-6 py-4 font-medium text-slate-900">Modules</th>
                            <th className="px-6 py-4 font-medium text-slate-900">Enrollments</th>
                            <th className="px-6 py-4 font-medium text-slate-900 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                        {courses.map((course: CourseWithCounts) => (
                            <tr key={course.id} className="hover:bg-slate-50 transition-colors">
                                <td className="px-6 py-4 font-medium text-slate-900">{course.title}</td>
                                <td className="px-6 py-4 text-slate-600">${course.price}</td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${course.published ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}>
                                        {course.published ? "Published" : "Draft"}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-slate-600">{course._count.modules}</td>
                                <td className="px-6 py-4 text-slate-600">{course._count.enrollments}</td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <Button asChild variant="outline" size="sm" className="text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 font-semibold">
                                            <Link href={`/admin/courses/${course.id}/builder`}>
                                                Course Builder
                                            </Link>
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-8 w-8 text-slate-500 hover:text-red-600"
                                            onClick={async () => {
                                                if (window.confirm('Are you sure you want to delete this course?')) {
                                                    const res = await fetch(`/api/admin/courses/${course.id}`, { method: 'DELETE' });
                                                    if (res.ok) window.location.reload();
                                                }
                                            }}
                                        >
                                            <Trash className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {courses.length === 0 && (
                            <tr>
                                <td colSpan={6} className="px-6 py-12 text-center text-slate-500">
                                    No courses found. Create your first course to get started.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
