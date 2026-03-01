"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Trash2 } from "lucide-react";

export default function NewExamForm({ courses }: { courses: any[] }) {
    const [title, setTitle] = useState("");
    const [courseId, setCourseId] = useState("");
    const [passingScore, setPassingScore] = useState(70);
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState(60);
    const [isPublic, setIsPublic] = useState(false);
    const [customFields, setCustomFields] = useState([{ label: "Full Name", type: "text", required: true }]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const res = await fetch("/api/admin/exams", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    title,
                    courseId: courseId || null,
                    passingScore,
                    description,
                    duration,
                    isPublic,
                    customFields
                }),
            });

            if (res.ok) {
                const data = await res.json();
                router.push(`/admin/exams/${data.id}/questions`);
            } else {
                alert("Failed to create exam");
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Card className="shadow-lg border-slate-200">
            <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Exam Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full p-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none"
                            placeholder="e.g. Final Certification Exam"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Associated Course</label>
                        <select
                            value={courseId}
                            onChange={(e) => setCourseId(e.target.value)}
                            className="w-full p-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none bg-white font-medium"
                        >
                            <option value="">-- Independent Exam (No Course) --</option>
                            {courses.map((course) => (
                                <option key={course.id} value={course.id}>
                                    {course.title}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">Passing Score (%)</label>
                            <input
                                type="number"
                                value={passingScore}
                                onChange={(e) => setPassingScore(parseInt(e.target.value))}
                                className="w-full p-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none"
                                min="0"
                                max="100"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">Duration (Minutes)</label>
                            <input
                                type="number"
                                value={duration}
                                onChange={(e) => setDuration(parseInt(e.target.value))}
                                className="w-full p-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none"
                                min="1"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <input
                            id="isPublic"
                            type="checkbox"
                            checked={isPublic}
                            onChange={(e) => setIsPublic(e.target.checked)}
                            className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <div className="space-y-0.5">
                            <label htmlFor="isPublic" className="text-sm font-bold text-slate-900">Make Link Publically Shareable</label>
                            <p className="text-xs text-slate-500">Anyone with the link can take this exam without a persistent account.</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Information Required from Students</label>
                            <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() => setCustomFields([...customFields, { label: "", type: "text", required: true }])}
                                className="text-xs"
                            >
                                <Plus className="h-3 w-3 mr-1" /> Add Field
                            </Button>
                        </div>
                        <div className="space-y-3">
                            {customFields.map((field, idx) => (
                                <div key={idx} className="flex gap-2 items-center animate-in slide-in-from-left-2 duration-200">
                                    <input
                                        type="text"
                                        value={field.label}
                                        onChange={(e) => {
                                            const newFields = [...customFields];
                                            newFields[idx].label = e.target.value;
                                            setCustomFields(newFields);
                                        }}
                                        className="flex-1 p-2 text-sm rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none"
                                        placeholder="e.g. Roll Number, Email, etc."
                                    />
                                    <select
                                        value={field.type}
                                        onChange={(e) => {
                                            const newFields = [...customFields];
                                            newFields[idx].type = e.target.value;
                                            setCustomFields(newFields);
                                        }}
                                        className="p-2 text-sm rounded-lg border border-slate-200 bg-white"
                                    >
                                        <option value="text">Text</option>
                                        <option value="number">Number</option>
                                        <option value="email">Email</option>
                                    </select>
                                    {idx > 0 && (
                                        <button
                                            type="button"
                                            onClick={() => setCustomFields(customFields.filter((_, i) => i !== idx))}
                                            className="text-slate-400 hover:text-red-500 transition-colors"
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Description (Optional)</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full p-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none min-h-[100px]"
                            placeholder="Provide details about the exam format and rules..."
                        />
                    </div>

                    <Button type="submit" className="w-full py-6 text-lg font-bold" disabled={isSubmitting}>
                        {isSubmitting ? "Creating..." : "Save & Add Questions"}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
