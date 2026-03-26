"use client";

import { Target, Zap, TrendingUp, CheckCircle2 } from "lucide-react";

export function AboutSection() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
                            About VocSkill
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                            At the Intersection of Education, Employability, and Industry Readiness
                        </h2>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            VocSkill Educational Private Limited works by delivering outcome-driven training programs aligned with NSDC, NEP 2020, Sector Skill Councils, and industry requirements.
                        </p>
                        
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Operating Philosophy</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {[
                                    { label: "IDENTIFY", icon: Target, color: "bg-blue-500" },
                                    { label: "DEVELOP", icon: Zap, color: "bg-indigo-500" },
                                    { label: "UPSKILL", icon: TrendingUp, color: "bg-violet-500" },
                                    { label: "EXECUTE", icon: CheckCircle2, color: "bg-emerald-500" }
                                ].map((step, idx) => (
                                    <div key={idx} className="flex flex-col items-center gap-3">
                                        <div className={`${step.color} p-3 rounded-xl text-white shadow-lg`}>
                                            <step.icon className="h-6 w-6" />
                                        </div>
                                        <span className="text-xs font-bold text-slate-700">{step.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    <div className="relative">
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
                        <div className="relative bg-white p-2 rounded-3xl shadow-2xl border border-slate-100">
                            <img 
                                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2670&auto=format&fit=crop" 
                                alt="Professional training" 
                                className="rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
