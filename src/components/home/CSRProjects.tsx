"use client";

import { Award, Briefcase, Heart } from "lucide-react";

const corporatePartners = [
    "Cognizant Tech4All", "Barclays Life Skills", "Havells Maharath", 
    "Edubridge", "PCI Hunar", "Generations India", 
    "ICICI BFSI Training", "Citi Bank", "Yes Bank", 
    "Samsung Retail", "Infosys Employability", "LG Retail", 
    "ITC Field Sales", "P&G Gillette Safalta"
];

export function CSRProjects() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                            <Heart className="h-4 w-4" /> CSR & Corporate Projects
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                            Enabling Corporate Social Responsibility Through Skill Impact
                        </h2>
                        <p className="text-xl text-slate-600 leading-relaxed mb-8">
                            We partner with leading corporate foundations to design and implement nationwide placement-linked skill development programs for underprivileged youth.
                        </p>
                        
                        <div className="flex gap-4">
                            <div className="flex items-center gap-3">
                                <div className="bg-blue-100 p-2 rounded-lg"><Award className="h-6 w-6 text-blue-600" /></div>
                                <span className="text-sm font-bold text-slate-700">Audit Ready Reporting</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="bg-green-100 p-2 rounded-lg"><Briefcase className="h-6 w-6 text-green-600" /></div>
                                <span className="text-sm font-bold text-slate-700">End-to-End Execution</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {corporatePartners.map((item, idx) => (
                            <div key={idx} className="p-4 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-center">
                                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="bg-slate-900 text-white p-12 rounded-3xl relative overflow-hidden">
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl"></div>
                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-2">Want to launch a CSR Skill Project?</h3>
                            <p className="text-slate-400">Join our network of corporate partners making a real difference.</p>
                        </div>
                        <button className="bg-white text-slate-900 px-10 py-4 rounded-xl font-bold hover:bg-amber-500 hover:text-white transition-all duration-300">
                            Partner with VocSkill
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
