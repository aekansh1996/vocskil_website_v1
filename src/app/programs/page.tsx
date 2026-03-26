"use client";

import { ProgramsSection } from "@/components/home/programs-section";

export default function ProgramsPage() {
    return (
        <main className="min-h-screen">
            <div className="bg-slate-100 py-24 border-b border-slate-200">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold text-slate-900 mb-6">Our Training Programs</h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        From Artificial Intelligence to Soft Skills, our industry-aligned certifications are designed for the modern workforce.
                    </p>
                </div>
            </div>
            
            <ProgramsSection />
            
            <section className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8">Looking for a customized training program for your institution?</h2>
                    <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">We design bespoke curriculum and labs tailored to your specific requirements.</p>
                    <button className="bg-blue-600 text-white px-12 py-5 rounded-xl font-bold hover:bg-blue-700 transition-all">
                        Talk to an Expert
                    </button>
                </div>
            </section>
        </main>
    );
}
