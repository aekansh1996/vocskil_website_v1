"use client";

import { Briefcase, CheckCircle2, Globe, Users } from "lucide-react";

export default function HireCandidatesPage() {
    return (
        <main className="min-h-screen">
            <div className="bg-emerald-600 text-white py-24">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold mb-6">Hire Skilled Candidates</h1>
                    <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
                        Access a pool of industry-ready, certified professionals trained through VocSkill's high-impact programs.
                    </p>
                </div>
            </div>
            
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        {[
                            { title: "Pre-Screened Talent", icon: Users, desc: "Every candidate undergoes rigorous assessment before certification." },
                            { title: "Industry-Aligned Skills", icon: Briefcase, desc: "Trained in the latest tools and technologies demanded by top firms." },
                            { title: "Zero Hiring Cost", icon: Globe, desc: "Connect with our placement cell for direct access to our alumni network." }
                        ].map((item, i) => (
                            <div key={i} className="p-8 bg-slate-50 rounded-2xl border border-slate-100 group hover:bg-emerald-50 transition-colors">
                                <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-emerald-600 shadow-sm">
                                    <item.icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                                <p className="text-slate-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-slate-900 text-white rounded-3xl p-12 overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl"></div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                            <div>
                                <h2 className="text-3xl font-bold mb-6">Our Placement Partners</h2>
                                <p className="text-slate-400 mb-8">Join the network of 500+ companies hiring from VocSkill across diverse industry sectors.</p>
                                <div className="flex flex-wrap gap-4">
                                     {["Finance", "IT", "Retail", "Manufacturing", "Banking", "Design"].map((cat, i) => (
                                         <span key={i} className="px-4 py-2 bg-white/10 rounded-lg text-xs font-bold uppercase tracking-widest">{cat}</span>
                                     ))}
                                </div>
                            </div>
                            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                                <h3 className="text-xl font-bold mb-6">Post a Requirement</h3>
                                <form className="space-y-4">
                                    <input type="text" placeholder="Company Name" className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-sm focus:outline-none focus:border-emerald-500" />
                                    <input type="email" placeholder="Professional Email" className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-sm focus:outline-none focus:border-emerald-500" />
                                    <textarea placeholder="Job Roles & Requirements" className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-sm h-32 focus:outline-none focus:border-emerald-500"></textarea>
                                    <button className="w-full bg-emerald-500 text-white font-bold py-3 rounded-lg hover:bg-emerald-600 transition-colors">Send Requirement</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
