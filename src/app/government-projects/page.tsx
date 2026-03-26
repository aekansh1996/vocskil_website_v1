"use client";

import { GovtProjects } from "@/components/home/GovtProjects";
import { PartnershipsGrid } from "@/components/home/PartnershipsGrid";
import { CheckCircle2, Calendar, Users, MapPin, Award } from "lucide-react";

const govtDetails = [
    {
        year: "2024-2025",
        projects: [
            { name: "PMKVY 4.0 Skill Hub Project", owner: "NSDC - MSDE", target: 240, location: "National", highlights: "Industry-aligned, Demand-driven job roles" },
            { name: "DPC Mumbai Suburban (Hiray)", owner: "State Govt", target: 120, location: "Mumbai Suburban", highlights: "District Planning Committee Initiatives" },
            { name: "DPC Mumbai (Hinduja)", owner: "State Govt", target: 90, location: "Mumbai City", highlights: "Localized Skill Development" },
            { name: "DPC Thane (BVIMSR)", owner: "State Govt", target: 30, location: "Thane", highlights: "Academic Partnership for DPC" }
        ]
    },
    {
        year: "2023-2024",
        projects: [
            { name: "PMKUVA (MSSDS) - CGSSC", owner: "State Govt (MSSDS)", target: 240, location: "Maharashtra", highlights: "State-wide implementation" },
            { name: "DPC Thane", owner: "State Govt Thane-DPC", target: 60, location: "Thane", highlights: "District Skill Development" },
            { name: "Eklavya Kaushal (Minority Ministry)", owner: "SAVVM", target: 60, location: "Maharashtra", highlights: "Inclusive growth initiative" },
            { name: "Apprenticeship in BFSI Sector", owner: "SSC BFSI", target: "Ongoing", location: "Pan India", highlights: "Corporate bridge program" }
        ]
    },
    {
        year: "2022-2023",
        projects: [
            { name: "PMKUVA (MSSDS) - MESC", owner: "State Govt (MSSDS)", target: 90, location: "Maharashtra", highlights: "Media & Entertainment Sector" },
            { name: "PMKUVA (MSSDS) - BFSI", owner: "State Govt (MSSDS)", target: 60, location: "Maharashtra", highlights: "Banking & Finance Sector" }
        ]
    }
];

export default function GovtProjectsPage() {
    return (
        <main className="min-h-screen">
            {/* Hero */}
            <div className="bg-slate-900 text-white py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-5xl font-extrabold mb-6 tracking-tight">NSDC Training Partner</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        VocSkill works at the forefront of India's skill missions, delivering high-impact training under PMKVY 4.0, MSSDS, and Minority Ministry initiatives.
                    </p>
                </div>
            </div>
            
            <GovtProjects />
            
            {/* Detailed Project List */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">Project Portfolio & Impact</h2>
                    
                    <div className="space-y-16">
                        {govtDetails.map((group, i) => (
                            <div key={i} className="space-y-8">
                                <div className="flex items-center gap-4">
                                    <div className="h-px bg-slate-200 flex-1"></div>
                                    <span className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold shadow-lg">{group.year}</span>
                                    <div className="h-px bg-slate-200 flex-1"></div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {group.projects.map((proj, idx) => (
                                        <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all duration-300 group">
                                            <div className="flex justify-between items-start mb-6">
                                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{proj.name}</h3>
                                                <Award className="h-6 w-6 text-blue-600" />
                                            </div>
                                            <div className="grid grid-cols-2 gap-4 mb-6">
                                                <div className="flex items-center gap-2 text-sm text-slate-500">
                                                    <Users className="h-4 w-4" /> Target: <span className="font-bold text-slate-900">{proj.target}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-sm text-slate-500">
                                                    <MapPin className="h-4 w-4" /> {proj.location}
                                                </div>
                                            </div>
                                            <p className="text-sm text-slate-600 mb-4 bg-white p-4 rounded-xl border border-slate-100 italic">
                                                "{proj.highlights}"
                                            </p>
                                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Scheme Owner: {proj.owner}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <PartnershipsGrid />

            {/* Case Note */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto bg-white p-12 rounded-3xl shadow-2xl border border-slate-100">
                        <h2 className="text-3xl font-bold text-slate-900 mb-8">PMKVY 4.0 – Skill Hub Initiative</h2>
                        <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
                            <p>
                                Under the Pradhan Mantri Kaushal Vikas Yojana (PMKVY) 4.0 – Skill Hub Initiative implemented by the Ministry of Skill Development & Entrepreneurship (MSDE), Government of India, and executed through NSDC, our institute successfully completed the allocated training targets for the financial year.
                            </p>
                            <p className="mt-4">
                                We were allotted 240 training targets for industry-aligned, demand-driven job roles. The project was implemented in accordance with PMKVY 4.0 guidelines and NEP 2020 objectives, integrating vocational skill development with practical, employment-oriented training.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                                <div className="flex items-center gap-2 font-medium text-slate-900"><CheckCircle2 className="h-5 w-5 text-emerald-500" /> AEBAS Attendance Systems</div>
                                <div className="flex items-center gap-2 font-medium text-slate-900"><CheckCircle2 className="h-5 w-5 text-emerald-500" /> SSC Certified Trainers</div>
                                <div className="flex items-center gap-2 font-medium text-slate-900"><CheckCircle2 className="h-5 w-5 text-emerald-500" /> On-the-Job Training (OJT)</div>
                                <div className="flex items-center gap-2 font-medium text-slate-900"><CheckCircle2 className="h-5 w-5 text-emerald-500" /> Skill India Digital Integration</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
