"use client";

import { 
    BookOpen, 
    GraduationCap, 
    Briefcase, 
    Building2, 
    Award, 
    School, 
    Rocket 
} from "lucide-react";

const focusAreas = [
    {
        title: "Skill Development & Vocational Training",
        icon: BookOpen,
        color: "bg-blue-50 text-blue-600"
    },
    {
        title: "NEP 2020 Skill Credit Programs",
        icon: GraduationCap,
        color: "bg-indigo-50 text-indigo-600"
    },
    {
        title: "Government Skill Schemes",
        icon: Building2,
        color: "bg-emerald-50 text-emerald-600"
    },
    {
        title: "CSR Skill Training & Placement Projects",
        icon: Briefcase,
        color: "bg-amber-50 text-amber-600"
    },
    {
        title: "Industry Certification Programs",
        icon: Award,
        color: "bg-violet-50 text-violet-600"
    },
    {
        title: "College Integrated Skill Centers",
        icon: School,
        color: "bg-rose-50 text-rose-600"
    },
    {
        title: "Employability & Career Enhancement",
        icon: Rocket,
        color: "bg-cyan-50 text-cyan-600"
    }
];

export function CoreFocusAreas() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-6">Core Focus Areas</h2>
                    <p className="text-xl text-slate-600">
                        Bridging the gap between traditional education and industry requirements through specialized training domains.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {focusAreas.map((area, idx) => (
                        <div 
                            key={idx} 
                            className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1"
                        >
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300 ${area.color}`}>
                                <area.icon className="h-7 w-7" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 leading-tight">
                                {area.title}
                            </h3>
                        </div>
                    ))}
                    {/* Placeholder for an 8th card to keep grid balanced or call to action */}
                    <div className="bg-blue-600 p-8 rounded-2xl shadow-lg flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
                        <h3 className="text-xl font-bold text-white leading-tight">
                            Partner with us for customized skill solutions.
                        </h3>
                        <button className="text-white font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                            Get in Touch <span className="text-xl">→</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
