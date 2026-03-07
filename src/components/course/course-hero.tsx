"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, MapPin, MonitorPlay, Clock, Users, Star, CheckCircle2 } from "lucide-react";
import { EnquiryModal } from "@/components/ui/enquiry-modal";

interface CourseHeroProps {
    title: string;
    description: string;
    badge?: string;
    duration: string;
    mode: string; // This prop is not used in the new JSX, but keeping it for now
    nextBatch: string; // This prop is used in the new JSX, but with a hardcoded value "Starts Tomorrow"
    category: string; // New prop
    students: number; // New prop
    rating: number; // New prop
    image: string; // New prop
    price: number;
    courseId: string; // New prop for payment
}

export function CourseHero({ title, description, badge, duration, mode, nextBatch, category, students, rating, image, price, courseId }: CourseHeroProps) {
    const [loading, setLoading] = useState(false);
    const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

    const handleEnroll = async () => {
        setLoading(true);
        try {
            // Check if user is logged in
            const res = await fetch("/api/auth/session");
            const session = await res.json();

            if (!session?.user) {
                window.location.href = "/login?callbackUrl=" + window.location.pathname;
                return;
            }

            // Indirectly enroll - since user wants free courses, 
            // we'll assume a direct enrollment API exists or should be called.
            // For now, redirecting to a placeholder or showing success.
            const enrollRes = await fetch("/api/enroll", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ courseId }),
            });

            if (enrollRes.ok) {
                window.location.href = "/dashboard";
            } else {
                const data = await enrollRes.json();
                alert(data.message || "Enrollment failed. Please try again.");
            }
        } catch (error) {
            console.error("Enrollment failed", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <section className="relative bg-slate-900 py-20 lg:py-28 overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2670&auto=format&fit=crop"
                        alt="Course Background"
                        className="w-full h-full object-cover opacity-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/50"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-medium text-xs mb-6">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                                </span>
                                {category}
                            </div>

                            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                {title}
                            </h1>

                            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                                {description}
                            </p>

                            <div className="flex flex-wrap gap-4 mb-8">
                                <div className="flex items-center gap-2 text-slate-300 bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700">
                                    <Clock className="h-5 w-5 text-indigo-400" />
                                    <span>{duration}</span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-300 bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700">
                                    <Users className="h-5 w-5 text-indigo-400" />
                                    <span>{students} Enrolled</span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-300 bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700">
                                    <Star className="h-5 w-5 text-yellow-400" />
                                    <span>{rating} Rating</span>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    size="lg"
                                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 h-12 text-lg"
                                    onClick={handleEnroll}
                                    disabled={loading}
                                >
                                    {loading ? "Enrolling..." : "Enroll Now"}
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-8 h-12 text-lg"
                                    onClick={() => setIsEnquiryOpen(true)}
                                >
                                    Enquire Now
                                </Button>
                            </div>
                        </div>

                        {/* Right Side - Course Preview Card */}
                        <div className="hidden lg:block relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-30"></div>
                            <div className="relative bg-slate-800 rounded-xl overflow-hidden border border-slate-700 shadow-2xl">
                                <div className="aspect-video bg-slate-900 relative group cursor-pointer">
                                    <img
                                        src={image}
                                        alt={title}
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="h-16 w-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center">
                                                <svg className="w-6 h-6 text-indigo-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-center mb-4">
                                        <div>
                                            <p className="text-slate-400 text-sm">Course Fee</p>
                                            <p className="text-2xl font-bold text-white">₹{price.toLocaleString()}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-slate-400 text-sm">Next Batch</p>
                                            <p className="text-white font-medium">Starts Tomorrow</p>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2 text-slate-300 text-sm">
                                            <CheckCircle2 className="h-4 w-4 text-green-400" />
                                            <span>Live Interactive Sessions</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-slate-300 text-sm">
                                            <CheckCircle2 className="h-4 w-4 text-green-400" />
                                            <span>Lifetime Access to Recordings</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-slate-300 text-sm">
                                            <CheckCircle2 className="h-4 w-4 text-green-400" />
                                            <span>Placement Assistance</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <EnquiryModal
                isOpen={isEnquiryOpen}
                onClose={() => setIsEnquiryOpen(false)}
                courseName={title}
            />
        </>
    );
}
