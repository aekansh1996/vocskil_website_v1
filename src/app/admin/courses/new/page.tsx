"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CreateCoursePage() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/admin/courses", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    title,
                    description,
                    price: parseFloat(price),
                }),
            });

            if (res.ok) {
                router.push("/admin/courses");
                router.refresh();
            }
        } catch (error) {
            console.error("Failed to create course", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto">
            <div className="mb-8">
                <Link href="/admin/courses" className="inline-flex items-center text-sm text-slate-500 hover:text-slate-900 mb-4">
                    <ArrowLeft className="h-4 w-4 mr-1" />
                    Back to Courses
                </Link>
                <h1 className="text-3xl font-bold text-slate-900">Create New Course</h1>
                <p className="text-slate-500 mt-2">Fill in the details to create a new course.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                <div className="space-y-2">
                    <label htmlFor="title" className="text-sm font-medium text-slate-900">Course Title</label>
                    <input
                        id="title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="e.g. Advanced React Patterns"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="description" className="text-sm font-medium text-slate-900">Description</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="flex min-h-[120px] w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="Brief description of the course..."
                        required
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="price" className="text-sm font-medium text-slate-900">Price ($)</label>
                    <input
                        id="price"
                        type="number"
                        min="0"
                        step="0.01"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="49.99"
                        required
                    />
                </div>

                <div className="pt-4 flex justify-end gap-4">
                    <Button type="button" variant="outline" asChild>
                        <Link href="/admin/courses">Cancel</Link>
                    </Button>
                    <Button type="submit" disabled={loading} className="bg-indigo-600 hover:bg-indigo-700 text-white">
                        {loading ? "Creating..." : "Create Course"}
                    </Button>
                </div>
            </form>
        </div>
    );
}
