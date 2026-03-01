import { prisma } from "@/lib/prisma";
import NewExamForm from "@/components/admin/NewExamForm";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function NewExamPage() {
    const allCourses = await prisma.course.findMany();


    return (
        <div className="max-w-2xl mx-auto py-8">
            <h1 className="text-3xl font-bold mb-6">Create New Professional Exam</h1>
            <NewExamForm courses={allCourses} />
        </div>
    );
}
