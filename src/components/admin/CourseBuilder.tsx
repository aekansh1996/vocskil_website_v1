"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    PlusCircle,
    GripVertical,
    Video,
    FileText,
    Link as LinkIcon,
    ChevronDown,
    ChevronRight,
    Trash2,
    Edit3
} from "lucide-react";

export default function CourseBuilder({ courseId }: { courseId: string }) {
    const [modules, setModules] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({});
    const [showAddModule, setShowAddModule] = useState(false);
    const [newModuleTitle, setNewModuleTitle] = useState("");
    const [activeLessonForm, setActiveLessonForm] = useState<string | null>(null);

    useEffect(() => {
        fetchModules();
    }, []);

    const fetchModules = async () => {
        const res = await fetch(`/api/admin/courses/${courseId}/modules`);
        const data = await res.json();
        setModules(data);
        setIsLoading(false);
    };

    const toggleModule = (id: string) => {
        setExpandedModules(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const handleAddModule = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await fetch(`/api/admin/courses/${courseId}/modules`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title: newModuleTitle, order: modules.length }),
        });
        if (res.ok) {
            fetchModules();
            setNewModuleTitle("");
            setShowAddModule(false);
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <div>
                    <h2 className="text-xl font-bold text-slate-800">Curriculum Structure</h2>
                    <p className="text-slate-500 text-sm">Add chapters and lessons to your course.</p>
                </div>
                <Button onClick={() => setShowAddModule(true)} className="bg-indigo-600 hover:bg-indigo-700">
                    <PlusCircle className="h-4 w-4 mr-2" />
                    New Chapter
                </Button>
            </div>

            {showAddModule && (
                <Card className="border-2 border-dashed border-indigo-200 bg-indigo-50/30">
                    <CardContent className="p-6">
                        <form onSubmit={handleAddModule} className="flex gap-4">
                            <input
                                autoFocus
                                type="text"
                                value={newModuleTitle}
                                onChange={(e) => setNewModuleTitle(e.target.value)}
                                className="flex-1 p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none"
                                placeholder="Enter chapter title (e.g. Introduction to React)..."
                                required
                            />
                            <Button type="submit">Add Chapter</Button>
                            <Button type="button" variant="ghost" onClick={() => setShowAddModule(false)}>Cancel</Button>
                        </form>
                    </CardContent>
                </Card>
            )}

            <div className="space-y-4">
                {modules.map((module, mIdx) => (
                    <div key={module.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                        <div
                            className="p-4 flex items-center gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
                            onClick={() => toggleModule(module.id)}
                        >
                            <GripVertical className="h-4 w-4 text-slate-300 cursor-grab" />
                            <button className="text-slate-400">
                                {expandedModules[module.id] ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                            </button>
                            <span className="font-bold text-slate-700 flex-1">Chapter {mIdx + 1}: {module.title}</span>
                            <div className="flex gap-2">
                                <Button size="sm" variant="ghost" className="text-slate-400" onClick={(e) => {
                                    e.stopPropagation();
                                    setActiveLessonForm(module.id);
                                }}>
                                    <PlusCircle className="h-4 w-4 mr-2" />
                                    Add Lesson
                                </Button>
                                <Button size="icon" variant="ghost" className="text-slate-300 hover:text-red-500">
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>

                        {expandedModules[module.id] && (
                            <div className="bg-slate-50 border-t border-slate-100 p-4 space-y-3">
                                {module.lessons?.map((lesson: any, lIdx: number) => (
                                    <div key={lesson.id} className="bg-white p-4 rounded-xl border border-slate-200 flex items-center gap-4 hover:shadow-sm transition-shadow">
                                        <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-xs">
                                            {lIdx + 1}
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-semibold text-slate-800">{lesson.title}</p>
                                            <div className="flex gap-3 mt-1">
                                                {lesson.videoUrl && <span className="flex items-center text-[10px] text-indigo-500 font-bold uppercase"><Video className="h-3 w-3 mr-1" /> Video</span>}
                                                {lesson.slidesUrl && <span className="flex items-center text-[10px] text-emerald-500 font-bold uppercase"><FileText className="h-3 w-3 mr-1" /> Slides</span>}
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button size="icon" variant="ghost" className="text-slate-300">
                                                <Edit3 className="h-4 w-4" />
                                            </Button>
                                            <Button size="icon" variant="ghost" className="text-slate-300 hover:text-red-500">
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                ))}

                                {activeLessonForm === module.id ? (
                                    <LessonForm
                                        moduleId={module.id}
                                        onCancel={() => setActiveLessonForm(null)}
                                        onSuccess={() => {
                                            setActiveLessonForm(null);
                                            fetchModules();
                                        }}
                                        order={module.lessons?.length || 0}
                                    />
                                ) : (
                                    <Button
                                        variant="outline"
                                        className="w-full border-dashed border-2 py-8 rounded-xl text-slate-500 hover:bg-indigo-50 hover:border-indigo-300 hover:text-indigo-600 transition-all"
                                        onClick={() => setActiveLessonForm(module.id)}
                                    >
                                        <PlusCircle className="h-4 w-4 mr-2" />
                                        Add New Lesson to Chapter {mIdx + 1}
                                    </Button>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {modules.length === 0 && !isLoading && (
                <div className="text-center py-20 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
                    <p className="text-slate-500">No chapters added yet. Get started by adding your first chapter.</p>
                </div>
            )}
        </div>
    );
}

function LessonForm({ moduleId, onCancel, onSuccess, order }: { moduleId: string, onCancel: () => void, onSuccess: () => void, order: number }) {
    const [formData, setFormData] = useState({
        title: "",
        videoUrl: "",
        slidesUrl: "",
        content: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        const res = await fetch(`/api/admin/modules/${moduleId}/lessons`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...formData, order }),
        });
        if (res.ok) {
            onSuccess();
        }
        setIsSubmitting(false);
    };

    return (
        <Card className="border-2 border-indigo-100 shadow-lg">
            <CardHeader className="bg-indigo-50/50">
                <CardTitle className="text-lg font-bold text-indigo-900">Add New Lesson</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase">Lesson Title</label>
                        <input
                            autoFocus
                            type="text"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none"
                            placeholder="e.g. Getting Started with JSX"
                            required
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-1"><Video className="h-3 w-3" /> Video URL (YouTube/Vimeo)</label>
                            <input
                                type="url"
                                value={formData.videoUrl}
                                onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })}
                                className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none"
                                placeholder="https://youtube.com/..."
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-1"><LinkIcon className="h-3 w-3" /> Slides Link</label>
                            <input
                                type="url"
                                value={formData.slidesUrl}
                                onChange={(e) => setFormData({ ...formData, slidesUrl: e.target.value })}
                                className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none"
                                placeholder="https://docs.google.com/presentation/..."
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase">Lesson Content (Markdown)</label>
                        <textarea
                            value={formData.content}
                            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                            className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none min-h-[100px]"
                            placeholder="Additional notes, instructions, or course content..."
                        />
                    </div>
                    <div className="flex gap-4 pt-2">
                        <Button type="submit" disabled={isSubmitting} className="flex-1">
                            {isSubmitting ? "Creating..." : "Save Lesson"}
                        </Button>
                        <Button type="button" variant="ghost" onClick={onCancel}>Cancel</Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}
