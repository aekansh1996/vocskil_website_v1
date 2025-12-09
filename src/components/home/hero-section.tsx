"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

export function HeroSection() {
    const [text, setText] = useState("Upskill Yourself");
    const phrases = ["Upskill Yourself", "Transform Your Career", "Get Hired"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % phrases.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setText(phrases[index]);
    }, [index]);

    return (
        <section className="relative bg-gradient-to-r from-indigo-50 via-white to-indigo-50 pt-20 pb-32 lg:pt-32 lg:pb-48 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8 animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 font-medium text-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                            </span>
                            New Batches Starting Soon
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-slate-900">
                            In this Fast‑Moving World <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 transition-all duration-500 block h-[1.2em]">
                                {text}
                            </span>
                            with Vocskill
                        </h1>

                        <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
                            Join India's most trusted ed-tech platform for live interactive learning in Management, Finance, and Analytics.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg px-8 py-6 rounded-xl shadow-lg shadow-indigo-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <Link href="/contact-us">
                                    Enquire Now <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-indigo-600 text-lg px-8 py-6 rounded-xl">
                                <Link href="/programs">Explore Courses</Link>
                            </Button>
                        </div>

                        <div className="flex items-center gap-6 text-sm font-medium text-slate-500 pt-4">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5 text-green-500" />
                                <span>100% Placement Assist</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5 text-green-500" />
                                <span>Live Projects</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative hidden lg:block">
                        <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-2xl opacity-20 animate-pulse"></div>
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop"
                            alt="Students learning"
                            className="relative rounded-2xl shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500"
                        />

                        {/* Floating Badge */}
                        <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-xl shadow-xl border border-slate-100 animate-bounce-slow">
                            <div className="flex items-center gap-4">
                                <div className="bg-green-100 p-3 rounded-full">
                                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-slate-900">10k+</p>
                                    <p className="text-sm text-slate-500">Careers Transformed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Trust Strip */}
            <div className="absolute bottom-0 w-full bg-white/50 backdrop-blur-sm border-t border-indigo-50 py-6">
                <div className="container mx-auto px-4">
                    <p className="text-center text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-4">Curriculum Aligned with Industry Leaders</p>
                    <div className="flex justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholder for Logos - using text for now as requested */}
                        <span className="text-xl font-bold text-slate-400">Google</span>
                        <span className="text-xl font-bold text-slate-400">Microsoft</span>
                        <span className="text-xl font-bold text-slate-400">Amazon</span>
                        <span className="text-xl font-bold text-slate-400">NISM</span>
                        <span className="text-xl font-bold text-slate-400">HubSpot</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
