"use client";

import { AboutSection } from "@/components/home/AboutSection";
import { CoreFocusAreas } from "@/components/home/CoreFocusAreas";

export default function AboutUsPage() {
    return (
        <main className="min-h-screen">
            <div className="bg-blue-600 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold mb-6">About VocSkill</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        A national skill development and training organization dedicated to creating job-ready youth across India.
                    </p>
                </div>
            </div>
            
            <AboutSection />
            <CoreFocusAreas />
            
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl font-bold text-slate-900">Our Mission</h2>
                            <p className="text-xl text-slate-600 leading-relaxed">
                                Our mission is to bridge the employability gap by providing quality vocational training and industry-aligned certifications that empower students with real-world skills.
                            </p>
                            <p className="text-xl text-slate-600 leading-relaxed">
                                Through government partnerships and corporate CSR, we aim to reach 1 million students by 2030, transforming the workforce of India.
                            </p>
                        </div>
                        <div className="bg-slate-100 rounded-3xl h-96 flex items-center justify-center border-4 border-white shadow-xl overflow-hidden">
                           <img src="https://images.unsplash.com/photo-1524178232363-1fb28f74b0ea?q=80&w=2670&auto=format&fit=crop" alt="Learning" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
