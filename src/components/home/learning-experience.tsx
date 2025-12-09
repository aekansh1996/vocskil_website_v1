"use client";

import { Video, FolderGit2, UserCheck, Briefcase, CheckCircle2 } from "lucide-react";

const features = [
    {
        title: "Live Interactive Classes",
        description: "Learn directly from industry experts in real-time. Ask doubts, participate in polls, and engage with peers.",
        icon: Video,
        color: "text-blue-600",
        bg: "bg-blue-100"
    },
    {
        title: "Capstone Projects",
        description: "Build a portfolio of real-world projects. Apply your learning to solve actual business problems.",
        icon: FolderGit2,
        color: "text-orange-600",
        bg: "bg-orange-100"
    },
    {
        title: "1:1 Mentorship",
        description: "Get personalized guidance from dedicated mentors in offline sessions. Regular feedback to track your progress.",
        icon: UserCheck,
        color: "text-green-600",
        bg: "bg-green-100"
    },
    {
        title: "Career Assistance",
        description: "Resume building, mock interviews, and guaranteed job referrals to our network of 500+ hiring partners.",
        icon: Briefcase,
        color: "text-purple-600",
        bg: "bg-purple-100"
    }
];

export function LearningExperience() {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="inline-block px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 font-semibold text-sm mb-6">
                            The Vocskill Advantage
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
                            Experience Learning Like <br />
                            <span className="text-indigo-600">Never Before</span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-10 max-w-lg">
                            We don't just teach; we transform. Our curriculum is designed to make you job-ready from day one.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {features.map((feature, index) => (
                                <div key={index} className="flex flex-col gap-4 group">
                                    <div className={`h-14 w-14 rounded-2xl ${feature.bg} ${feature.color} flex items-center justify-center transition-transform group-hover:scale-110 duration-300`}>
                                        <feature.icon className="h-7 w-7" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-3xl blur-3xl opacity-20"></div>
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-white">
                            <img
                                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2670&auto=format&fit=crop"
                                alt="Learning Experience"
                                className="w-full h-full object-cover"
                            />

                            {/* Overlay Card */}
                            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur p-6 rounded-xl shadow-lg border border-slate-100">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <p className="font-bold text-slate-900">Next Batch</p>
                                        <p className="text-xs text-slate-500">Starts in 3 days</p>
                                    </div>
                                    <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                                        Filling Fast
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-sm text-slate-600">
                                        <CheckCircle2 className="h-4 w-4 text-indigo-600" />
                                        <span>Weekend & Weekday Batches</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-slate-600">
                                        <CheckCircle2 className="h-4 w-4 text-indigo-600" />
                                        <span>EMI Options Available</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
