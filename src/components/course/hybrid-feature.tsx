"use client";

import { Monitor, Users, ArrowRightLeft, CheckCircle2 } from "lucide-react";

export function HybridFeature() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                        The <span className="text-indigo-600">Hybrid</span> Advantage
                    </h2>
                    <p className="text-lg text-slate-600">
                        Get the best of both worlds. Flexible online learning for concepts, and intense offline labs for hands-on mastery.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
                    {/* Online Card */}
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center relative group hover:shadow-lg transition-all duration-300">
                        <div className="h-16 w-16 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Monitor className="h-8 w-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Live Online</h3>
                        <p className="text-slate-500 text-sm mb-4">Weekdays (Mon-Thu)</p>
                        <ul className="text-left space-y-2 text-sm text-slate-600">
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                                <span>Concept Theory</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                                <span>Doubt Solving</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                                <span>Recorded Sessions</span>
                            </li>
                        </ul>
                    </div>

                    {/* Connector */}
                    <div className="hidden md:flex flex-col items-center justify-center text-indigo-200">
                        <ArrowRightLeft className="h-12 w-12" />
                        <span className="text-xs font-bold uppercase tracking-widest mt-2 text-indigo-400">Seamless</span>
                    </div>

                    {/* Offline Card */}
                    <div className="bg-indigo-600 p-8 rounded-2xl shadow-xl text-center relative transform md:scale-110 z-10">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                            Game Changer
                        </div>
                        <div className="h-16 w-16 mx-auto bg-white/10 text-white rounded-full flex items-center justify-center mb-6">
                            <Users className="h-8 w-8" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Offline Labs</h3>
                        <p className="text-indigo-200 text-sm mb-4">Weekends (Sat-Sun)</p>
                        <ul className="text-left space-y-2 text-sm text-indigo-100">
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5" />
                                <span>Hands-on Projects</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5" />
                                <span>Peer Networking</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5" />
                                <span>Instructor Guidance</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
