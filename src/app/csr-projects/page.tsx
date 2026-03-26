"use client";

import { CSRProjects } from "@/components/home/CSRProjects";
import { CheckCircle2, Building2, Users, Globe, Layers } from "lucide-react";

const csrPortfolio = [
    {
        year: "2025-2026",
        projects: [
            { partner: "Mahindra", scheme: "EV Skills", agency: "Centum", target: 350 },
            { partner: "LG", scheme: "Retail Promotor Phase 4", agency: "ESSC", target: 140 },
            { partner: "Ericsson", scheme: "ITI Pimpri", agency: "ESSC/Teamlease", target: 140 },
            { partner: "Ericsson", scheme: "ITI Aundh", agency: "ESSC/Teamlease", target: 210 },
            { partner: "NMMC", scheme: "Municipal Corp Project", agency: "Dezaview", target: 60 },
            { partner: "Jio-BP", scheme: "IT Skills", agency: "TIEF/Dezaview", target: 112 },
            { partner: "AWS", scheme: "Re/start Program", agency: "Gen-Next/Mapping", target: 60 }
        ]
    },
    {
        year: "2024-2025",
        projects: [
            { partner: "Havells", scheme: "Maharath (RPL)", agency: "ESSC", target: 677 },
            { partner: "LG", scheme: "Retail Promotor Phase 1", agency: "ESSC", target: 96 },
            { partner: "LG", scheme: "Retail Promotor Phase 2", agency: "ESSC", target: 39 }
        ]
    },
    {
        year: "2023-2024",
        projects: [
            { partner: "Barclays", scheme: "Employability Skills", agency: "Dezaview", target: 1747 },
            { partner: "Cognizant", scheme: "Tech4all", agency: "Lokbharti", target: 180 },
            { partner: "Infosys", scheme: "Employability Skills (Centum)", agency: "Centum", target: 468 },
            { partner: "Infosys", scheme: "Employability Skills (LearnIT)", agency: "LearnIT", target: 300 },
            { partner: "Samsung", scheme: "DOST-2", agency: "ESSC", target: "Pan-India" },
            { partner: "Atos", scheme: "Gen-AI Training", agency: "Edubridge", target: 41 }
        ]
    }
];

export default function CSRProjectsPage() {
    return (
        <main className="min-h-screen">
            <div className="bg-amber-600 text-white py-24 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full rotate-45 -ml-48"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-5xl font-bold mb-6">Corporate Social Responsibility</h1>
                    <p className="text-xl text-amber-50 max-w-2xl mx-auto leading-relaxed">
                        Helping leading corporates achieve their ESG goals through high-impact, placement-linked skill training projects across India.
                    </p>
                </div>
            </div>
            
            <CSRProjects />
            
            {/* Corporate Summary Cards */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-16">Our CSR Implementation Experience</h2>
                    
                    <div className="grid grid-cols-1 gap-12">
                        {csrPortfolio.map((period, idx) => (
                            <div key={idx} className="space-y-8">
                                <div className="bg-slate-900 text-white px-8 py-3 rounded-2xl inline-block font-bold shadow-lg">
                                    Financial Year {period.year}
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {period.projects.map((proj, pIdx) => (
                                        <div key={pIdx} className="bg-slate-50 border border-slate-100 p-6 rounded-2xl hover:border-amber-500/50 hover:shadow-xl transition-all group">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="bg-amber-100 p-3 rounded-xl group-hover:bg-amber-600 group-hover:text-white transition-colors">
                                                    <Building2 className="h-6 w-6" />
                                                </div>
                                                <h3 className="font-bold text-lg text-slate-800">{proj.partner}</h3>
                                            </div>
                                            <p className="text-sm font-bold text-amber-600 mb-2 uppercase tracking-tight">{proj.scheme}</p>
                                            <div className="space-y-2 mt-4 pt-4 border-t border-slate-200">
                                                <p className="text-xs text-slate-500 font-medium flex items-center gap-2">
                                                    <Users className="h-3 w-3" /> Target: <span className="text-slate-900 font-bold">{proj.target} Trainees</span>
                                                </p>
                                                <p className="text-xs text-slate-500 font-medium flex items-center gap-2 uppercase tracking-widest">
                                                    <Layers className="h-3 w-3" /> Agency: {proj.agency}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Verification Stats */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-sm uppercase tracking-widest font-bold">
                         <div className="space-y-4">
                             <div className="text-amber-500 text-4xl">100%</div>
                             <div>Audit Compliance</div>
                         </div>
                         <div className="space-y-4">
                             <div className="text-amber-500 text-4xl">5000+</div>
                             <div>CSR Alumni Reach</div>
                         </div>
                         <div className="space-y-4">
                             <div className="text-amber-500 text-4xl">Pan-India</div>
                             <div>Delivery Network</div>
                         </div>
                         <div className="space-y-4">
                             <div className="text-amber-500 text-4xl">Real-time</div>
                             <div>Project Reporting</div>
                         </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
