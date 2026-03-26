"use client";

import { CheckCircle2, ChevronRight, Globe, Layout, Lightbulb, Users, Zap, Shield } from "lucide-react";

const benefits = [
    {
        title: "NEP 2020 Skill Credit Compliance",
        icon: Layout,
        desc: "Seamlessly integrate skill credits into your academic curriculum."
    },
    {
        title: "NSDC Aligned Certification",
        icon: Shield,
        desc: "Nationally recognized certificates for your students."
    },
    {
        title: "Industry Trainers",
        icon: Users,
        desc: "Learn directly from professionals with actual industry expertise."
    },
    {
        title: "Curriculum Customization",
        icon: Lightbulb,
        desc: "Tailored programs based on student backgrounds and local industry needs."
    },
    {
        title: "Faculty Development Programs",
        icon: Zap,
        desc: "Upskill your institution's teaching staff with modern tools."
    },
    {
        title: "Internship & Placement Support",
        icon: Globe,
        desc: "Direct connections with hiring partners for student careers."
    },
    {
        title: "End-to-End Implementation",
        icon: CheckCircle2,
        desc: "We handle the entire process from labs to certification."
    }
];

export function CollegeBenefits() {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                        Institutional Partnerships
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        Why Colleges Partner With VocSkill
                    </h2>
                    <p className="text-xl text-slate-600">
                        Transforming institutions into industry-focused skill hubs with comprehensive end-to-end support.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((item, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
                            <div className="bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                                <item.icon className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight">{item.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed mb-6">
                                {item.desc}
                            </p>
                            <div className="flex items-center gap-1 text-xs font-bold text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                LEARN MORE <ChevronRight className="h-4 w-4" />
                            </div>
                        </div>
                    ))}
                    <div className="lg:col-span-1 bg-gradient-to-br from-indigo-600 to-blue-700 p-8 rounded-2xl text-white flex flex-col justify-center">
                        <h3 className="text-2xl font-bold mb-4">Create a Skill Lab at your College</h3>
                        <p className="text-indigo-100 mb-8">Join the network of 100+ partner colleges scaling youth employability.</p>
                        <button className="bg-white text-indigo-600 font-bold py-3 px-6 rounded-xl text-sm hover:bg-indigo-50 transition-colors">
                            Request Collaboration
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
