"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, UserCircle2, ClipboardList } from "lucide-react";

export default function ExamIntakeForm({ exam }: { exam: any }) {
    const customFields = exam.customFields ? JSON.parse(exam.customFields) : [];
    const [formData, setFormData] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // In a real app, we'd save this to session or a temporary record
        // For now, we'll pass it as a query param or just proceed to the exam
        // We'll use localStorage to keep it simple for the proctored exam component to pick up
        localStorage.setItem(`exam_intake_${exam.id}`, JSON.stringify(formData));

        // Redirect to the actual exam taking interface
        router.push(`/exams/${exam.id}/take`);
    };

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
            <Card className="max-w-xl w-full shadow-2xl border-none overflow-hidden rounded-[2.5rem]">
                <div className="bg-indigo-600 p-8 text-white">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-white/20 p-2 rounded-xl backdrop-blur-sm">
                            <ClipboardList className="h-6 w-6" />
                        </div>
                        <span className="text-xs font-black uppercase tracking-[0.2em] opacity-80">Certification Exam</span>
                    </div>
                    <h1 className="text-3xl font-bold mb-2">{exam.title}</h1>
                    <p className="text-indigo-100 opacity-90">{exam.description || "Please provide your details to begin the examination."}</p>
                </div>

                <CardContent className="p-8">
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                            <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase mb-1">
                                <Clock className="h-3 w-3" /> Duration
                            </div>
                            <p className="text-slate-900 font-bold">{exam.duration} Minutes</p>
                        </div>
                        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                            <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase mb-1">
                                <UserCircle2 className="h-3 w-3" /> Questions
                            </div>
                            <p className="text-slate-900 font-bold">{exam._count.questions} Multiple Choice</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">Student Information</h3>

                        {customFields.map((field: any, idx: number) => (
                            <div key={idx} className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">
                                    {field.label} {field.required && <span className="text-red-500">*</span>}
                                </label>
                                <input
                                    type={field.type || "text"}
                                    required={field.required}
                                    onChange={(e) => setFormData({ ...formData, [field.label]: e.target.value })}
                                    className="w-full p-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-300"
                                    placeholder={`Enter your ${field.label.toLowerCase()}...`}
                                />
                            </div>
                        ))}

                        <div className="pt-4">
                            <Button
                                type="submit"
                                disabled={loading}
                                className="w-full py-8 text-lg font-black bg-indigo-600 hover:bg-slate-900 shadow-xl shadow-indigo-200 rounded-2xl transition-all"
                            >
                                {loading ? "PREPARING EXAM..." : "START EXAMINATION"}
                            </Button>
                            <p className="text-center text-[10px] text-slate-400 mt-4 font-bold uppercase tracking-widest">
                                By starting, you agree to the proctoring and exam terms.
                            </p>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
