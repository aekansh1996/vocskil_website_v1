"use client";

import { Mail, Phone, MapPin, Globe, Clock } from "lucide-react";

export default function ContactUsPage() {
    return (
        <main className="min-h-screen">
            <div className="bg-slate-900 text-white py-24">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Have a question about our programs or partnership opportunities? Our team is here to help.
                    </p>
                </div>
            </div>
            
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-8">Get in Touch</h2>
                                <div className="space-y-8">
                                    <div className="flex gap-6 items-start">
                                        <div className="bg-blue-50 p-4 rounded-2xl text-blue-600">
                                            <Phone className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900 mb-1">Phone</p>
                                            <p className="text-slate-600">+91 9082572306</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6 items-start">
                                        <div className="bg-blue-50 p-4 rounded-2xl text-blue-600">
                                            <Mail className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900 mb-1">Email</p>
                                            <p className="text-slate-600">contact@vocskill.com</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6 items-start">
                                        <div className="bg-blue-50 p-4 rounded-2xl text-blue-600">
                                            <MapPin className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900 mb-1">Address</p>
                                            <p className="text-slate-600 leading-relaxed max-w-xs">
                                                Bharati Vidyapeeth Institute of Management Studies and Research, Sector- 8, CBD Belapur, Navi Mumbai, 400614
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                     <div className="bg-blue-600 w-3 h-3 rounded-full animate-pulse"></div>
                                     <div>
                                         <p className="font-bold text-slate-900 uppercase text-xs tracking-widest">Support Active</p>
                                         <p className="text-sm text-slate-500 flex items-center gap-1"><Clock className="h-3 w-3" /> 10:00 AM - 07:00 PM</p>
                                     </div>
                                </div>
                                <div className="flex gap-3">
                                    {/* Social icons placeholder */}
                                    <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 cursor-pointer transition-colors leading-none font-bold italic">in</div>
                                    <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 cursor-pointer transition-colors leading-none font-bold italic">tw</div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-white p-12 rounded-3xl border border-slate-100 shadow-2xl shadow-slate-200/50">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700">First Name</label>
                                        <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-blue-500 focus:bg-white transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700">Last Name</label>
                                        <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-blue-500 focus:bg-white transition-all" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">Email Address</label>
                                    <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-blue-500 focus:bg-white transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">Subject</label>
                                    <select className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-blue-500 focus:bg-white transition-all">
                                        <option>Program Inquiry</option>
                                        <option>Partnership Proposal</option>
                                        <option>CSR Collaboration</option>
                                        <option>Placement Support</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">Your Message</label>
                                    <textarea className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 h-40 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"></textarea>
                                </div>
                                <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-blue-700 transition-all transform active:scale-[0.98]">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
