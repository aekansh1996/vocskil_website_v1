"use client";

import { useState } from "react";
import { ChevronRight, ChevronDown, PlayCircle, FileText, CheckCircle, ArrowLeft, ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CoursePlayer({ course }: { course: any }) {
    const [activeLesson, setActiveLesson] = useState(course.modules[0]?.lessons[0] || null);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({
        [course.modules[0]?.id]: true
    });

    const toggleModule = (id: string) => {
        setExpandedModules(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const getEmbedUrl = (url: string) => {
        if (!url) return "";
        if (url.includes("youtube.com") || url.includes("youtu.be")) {
            const videoId = url.split("v=")[1] || url.split("/").pop();
            return `https://www.youtube.com/embed/${videoId}`;
        }
        if (url.includes("vimeo.com")) {
            const videoId = url.split("/").pop();
            return `https://player.vimeo.com/video/${videoId}`;
        }
        return url;
    };

    return (
        <div className="flex flex-1 relative overflow-hidden">
            {/* Sidebar */}
            <div className={`
                ${sidebarOpen ? "w-80" : "w-0"} 
                transition-all duration-300 bg-slate-900 border-r border-slate-800 flex flex-col z-20
            `}>
                <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-950">
                    <h2 className="font-bold text-slate-100 line-clamp-1">{course.title}</h2>
                    <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(false)} className="text-slate-400 md:hidden">
                        <X className="h-4 w-4" />
                    </Button>
                </div>

                <div className="flex-1 overflow-y-auto custom-scrollbar">
                    {course.modules.map((module: any, mIdx: number) => (
                        <div key={module.id} className="border-b border-slate-800/50">
                            <button
                                onClick={() => toggleModule(module.id)}
                                className="w-full p-4 flex items-center justify-between hover:bg-slate-800/50 transition-colors text-left"
                            >
                                <div className="flex-1">
                                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">Chapter {mIdx + 1}</p>
                                    <p className="text-sm font-bold text-slate-200">{module.title}</p>
                                </div>
                                {expandedModules[module.id] ? <ChevronDown className="h-4 w-4 text-slate-500" /> : <ChevronRight className="h-4 w-4 text-slate-500" />}
                            </button>

                            {expandedModules[module.id] && (
                                <div className="bg-slate-950/50">
                                    {module.lessons?.map((lesson: any, lIdx: number) => (
                                        <button
                                            key={lesson.id}
                                            onClick={() => setActiveLesson(lesson)}
                                            className={`
                                                w-full px-6 py-3 flex items-start gap-3 transition-colors text-left
                                                ${activeLesson?.id === lesson.id ? "bg-indigo-600/20 text-indigo-400 border-r-2 border-indigo-500" : "text-slate-400 hover:bg-slate-800/30"}
                                            `}
                                        >
                                            <div className="mt-0.5">
                                                {activeLesson?.id === lesson.id ? <PlayCircle className="h-4 w-4" /> : <CheckCircle className="h-4 w-4 text-slate-700" />}
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-sm font-medium leading-tight">{lesson.title}</p>
                                                <div className="flex gap-2 mt-1">
                                                    {lesson.videoUrl && <Video className="h-3 w-3 text-slate-600" />}
                                                    {lesson.slidesUrl && <FileText className="h-3 w-3 text-slate-600" />}
                                                </div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="p-4 bg-slate-950 border-t border-slate-800">
                    <Button asChild variant="outline" className="w-full border-slate-700 text-slate-300 hover:bg-slate-800">
                        <Link href={`/dashboard/courses/${course.id}`}>Exit Learning</Link>
                    </Button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col bg-slate-950 relative overflow-hidden">
                {/* Top bar */}
                <div className="h-14 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 px-4 flex items-center justify-between z-10">
                    <div className="flex items-center gap-4">
                        {!sidebarOpen && (
                            <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(true)} className="text-slate-400">
                                <Menu className="h-5 w-5" />
                            </Button>
                        )}
                        <h3 className="text-slate-200 font-semibold truncate max-w-md">{activeLesson?.title || "Welcome to the Course"}</h3>
                    </div>

                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" className="text-slate-400 hover:text-slate-200">
                            <ArrowLeft className="h-4 w-4 mr-2" /> Prev
                        </Button>
                        <Button variant="default" size="sm">
                            Next <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto">
                    {activeLesson ? (
                        <div className="max-w-5xl mx-auto p-4 md:p-8 space-y-8">
                            {/* Video Player */}
                            {activeLesson.videoUrl && (
                                <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-2xl border border-slate-800">
                                    <iframe
                                        src={getEmbedUrl(activeLesson.videoUrl)}
                                        className="w-full h-full"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            )}

                            {/* Multimedia Links */}
                            <div className="flex flex-wrap gap-4">
                                {activeLesson.slidesUrl && (
                                    <a
                                        href={activeLesson.slidesUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-emerald-600/10 text-emerald-400 rounded-xl border border-emerald-500/30 hover:bg-emerald-600/20 transition-all font-bold text-sm"
                                    >
                                        <FileText className="h-4 w-4" /> View Course Slides
                                    </a>
                                )}
                            </div>

                            {/* Text Content */}
                            <div className="bg-slate-900/50 rounded-2xl p-6 md:p-8 border border-slate-800/50 prose prose-invert max-w-none">
                                <h1 className="text-2xl md:text-3xl font-bold text-slate-100 mb-6">{activeLesson.title}</h1>
                                <div className="text-slate-300 space-y-4 whitespace-pre-wrap leading-relaxed">
                                    {activeLesson.content || "No details provided for this lesson."}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="flex items-center justify-center h-full text-slate-500 flex-col gap-4">
                            <PlayCircle className="h-16 w-16 opacity-20" />
                            <p>Select a lesson from the sidebar to begin learning.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function Video({ className }: { className?: string }) {
    return <PlayCircle className={className} />;
}
