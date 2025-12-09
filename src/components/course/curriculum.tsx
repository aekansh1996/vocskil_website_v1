"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, BookOpen, Clock } from "lucide-react";

interface Module {
    title: string;
    topics: string[];
    duration?: string;
}

interface CurriculumProps {
    modules: Module[];
}

export function Curriculum({ modules }: CurriculumProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                        Course <span className="text-indigo-600">Curriculum</span>
                    </h2>
                    <p className="text-lg text-slate-600">
                        A comprehensive roadmap designed to make you an expert.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-4">
                    {modules.map((module, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-xl border transition-all duration-300 ${openIndex === index ? "border-indigo-200 shadow-md" : "border-slate-200 hover:border-indigo-100"
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${openIndex === index ? "bg-indigo-100 text-indigo-600" : "bg-slate-100 text-slate-500"
                                        }`}>
                                        <BookOpen className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className={`font-bold text-lg ${openIndex === index ? "text-indigo-900" : "text-slate-700"}`}>
                                            Module {index + 1}: {module.title}
                                        </h3>
                                        {module.duration && (
                                            <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                                                <Clock className="h-3 w-3" /> {module.duration}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                {openIndex === index ? (
                                    <ChevronUp className="h-5 w-5 text-indigo-600" />
                                ) : (
                                    <ChevronDown className="h-5 w-5 text-slate-400" />
                                )}
                            </button>

                            {openIndex === index && (
                                <div className="px-6 pb-6 pl-[4.5rem]">
                                    <ul className="space-y-2">
                                        {module.topics.map((topic, i) => (
                                            <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                                                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0"></span>
                                                {topic}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
