"use client";

import { Building2, Handshake, Info, Users } from "lucide-react";

export default function PartnerWithUsPage() {
    return (
        <main className="min-h-screen">
            <div className="bg-blue-600 text-white py-24">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold mb-6">Partner With VocSkill</h1>
                    <p className="text-xl text-blue-50 max-w-2xl mx-auto leading-relaxed">
                        Join our mission to transform skill development across India through government, CSR, and institutional collaborations.
                    </p>
                </div>
            </div>
            
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
                        <div className="space-y-8">
                            <h2 className="text-4xl font-bold text-slate-900 leading-tight">Scale your impact with a trusted implementation partner.</h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Whether you are a government department looking for implementation, a corporate with CSR goals, or a college aiming for better employability, we have the framework to support your vision.
                            </p>
                            
                            <div className="space-y-4">
                                {[
                                    "NSDC & SSC Aligned Training Frameworks",
                                    "Robust Monitoring & Reporting Systems",
                                    "Pan-India Implementation Capability",
                                    "Outcome-Driven Training Methodology"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                        <div className="bg-blue-50 p-1 rounded-full"><Handshake className="h-4 w-4 text-blue-600" /></div>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-sm relative">
                            <h3 className="text-2xl font-bold text-slate-900 mb-8">Partnership Inquiry</h3>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase">Your Name</label>
                                        <input type="text" className="w-full border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-blue-500" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase">Organization Type</label>
                                        <select className="w-full border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-blue-500 bg-white">
                                            <option>College / Institution</option>
                                            <option>Government Department</option>
                                            <option>Corporate / CSR</option>
                                            <option>NGO Partner</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase">Email Address</label>
                                    <input type="email" className="w-full border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-blue-500" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase">Message / Proposal</label>
                                    <textarea className="w-full border border-slate-200 rounded-xl p-3 h-32 focus:outline-none focus:border-blue-500"></textarea>
                                </div>
                                <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-blue-700 transition">Submit Inquiry</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
