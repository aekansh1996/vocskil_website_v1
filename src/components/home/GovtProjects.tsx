"use client";

import { CheckCircle2, Flag, Shield, Users } from "lucide-react";

const projects = [
    { title: "PMKVY 4.0 Skill Hub Project", des: "National Level Implementation" },
    { title: "MSSDS PMKUVA Projects", des: "State Skill Missions" },
    { title: "District Planning Committee Projects", des: "Local Level Reach" },
    { title: "Minority Ministry – Eklavya Project", des: "Inclusive Development" },
    { title: "Central Apprenticeship Programs", des: "Bridge to Jobs" },
    { title: "CSR Skill Projects – Havells Maharath", des: "Corporate Implementation" }
];

const highlights = [
    "AEBAS Attendance Tracking",
    "SSC Certification Compliance",
    "OJT (On-the-Job) Training",
    "Third Party Assessments",
    "Placement Linked Programs"
];

export function GovtProjects() {
    return (
        <section className="py-24 bg-blue-900 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-800 rounded-full blur-3xl opacity-50 -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-900 rounded-full blur-3xl opacity-50 -ml-48 -mb-48"></div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-blue-800/50 text-blue-200 px-4 py-2 rounded-full text-sm font-semibold mb-8">
                            <Flag className="h-4 w-4" /> Major Government Projects
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                            Implementation Partner for National & State Initiatives
                        </h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                            {projects.map((project, idx) => (
                                <div key={idx} className="bg-blue-800/30 p-6 rounded-2xl border border-blue-700/50 hover:bg-blue-800/50 transition-colors">
                                    <h3 className="font-bold text-lg mb-1">{project.title}</h3>
                                    <p className="text-blue-300 text-sm">{project.des}</p>
                                </div>
                            ))}
                        </div>
                        
                        <div className="flex flex-wrap gap-4">
                            {highlights.map((h, i) => (
                                <div key={i} className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 rounded-lg text-sm font-medium">
                                    <CheckCircle2 className="h-4 w-4 text-emerald-400" /> {h}
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="space-y-8 lg:pt-20">
                        <div className="bg-gradient-to-br from-indigo-800 to-blue-800 p-10 rounded-3xl border border-blue-700 shadow-2xl">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <Shield className="h-8 w-8 text-blue-300" /> Collaboration Ecosystem
                            </h3>
                            <ul className="space-y-6">
                                {[
                                    { title: "NSDC Aligned", text: "Curriculum and assessment following national standards." },
                                    { title: "Skill India Mission", text: "Contributing to the national priority of scaling skills." },
                                    { title: "State Missions", text: "Active partner for MSSDS and other state-level missions." }
                                ].map((item, idx) => (
                                    <li key={idx} className="flex gap-4">
                                        <div className="mt-1 text-blue-400 font-bold text-xl">0{idx+1}</div>
                                        <div>
                                            <h4 className="font-bold text-lg">{item.title}</h4>
                                            <p className="text-blue-200/80">{item.text}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <div className="flex items-center gap-6 p-8 bg-white/5 rounded-2xl border border-white/10">
                            <div className="bg-blue-600 p-4 rounded-xl">
                                <Users className="h-10 w-10 text-white" />
                            </div>
                            <div>
                                <p className="text-3xl font-bold">1 Million+</p>
                                <p className="text-blue-300">Target Reach by 2030</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
