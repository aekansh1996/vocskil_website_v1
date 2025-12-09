"use client";

import { TrendingUp, Building2, Award, Briefcase } from "lucide-react";

const successStories = [
    {
        name: "Aditya Kumar",
        role: "Data Analyst",
        company: "Amazon",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop",
        before: "Fresher (B.Tech)",
        after: "Data Analyst at Amazon",
        hike: "120%",
        quote: "Vocskill's practical approach helped me crack the Amazon interview in the first attempt."
    },
    {
        name: "Sneha Patel",
        role: "Digital Marketing Manager",
        company: "Zomato",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop",
        before: "Sales Executive",
        after: "Marketing Manager at Zomato",
        hike: "85%",
        quote: "Transitioning from Sales to Marketing seemed impossible until I joined Vocskill."
    },
    {
        name: "Rahul Sharma",
        role: "Financial Analyst",
        company: "Deloitte",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop",
        before: "B.Com Graduate",
        after: "Analyst at Deloitte",
        hike: "150%",
        quote: "The financial modeling course gave me the exact skills required for the Big 4."
    }
];

const stats = [
    { label: "Highest Package", value: "18 LPA", icon: Award, color: "text-yellow-600", bg: "bg-yellow-50" },
    { label: "Average Hike", value: "77%", icon: TrendingUp, color: "text-green-600", bg: "bg-green-50" },
    { label: "Hiring Partners", value: "500+", icon: Building2, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Career Transitions", value: "10k+", icon: Briefcase, color: "text-indigo-600", bg: "bg-indigo-50" },
];

export function CareerImpact() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                        Real Stories, <span className="text-indigo-600">Real Impact</span>
                    </h2>
                    <p className="text-lg text-slate-600">
                        See how professionals are transforming their careers with Vocskill.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
                            <div className={`h-12 w-12 rounded-full ${stat.bg} ${stat.color} flex items-center justify-center mb-3`}>
                                <stat.icon className="h-6 w-6" />
                            </div>
                            <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                            <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Success Stories Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {successStories.map((story, index) => (
                        <div key={index} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className="p-6 pb-0 flex items-center gap-4">
                                <img src={story.image} alt={story.name} className="h-16 w-16 rounded-full object-cover border-2 border-indigo-100" />
                                <div>
                                    <h4 className="font-bold text-slate-900 text-lg">{story.name}</h4>
                                    <p className="text-indigo-600 font-medium text-sm">{story.role}</p>
                                    <p className="text-slate-400 text-xs">@{story.company}</p>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="bg-slate-50 rounded-xl p-4 mb-6 border border-slate-100">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-xs font-semibold text-slate-400 uppercase">Before</span>
                                        <span className="text-xs font-semibold text-indigo-600 uppercase">After</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm font-medium text-slate-700">
                                        <span>{story.before}</span>
                                        <ArrowRight className="h-4 w-4 text-slate-300" />
                                        <span className="text-indigo-700">{story.after}</span>
                                    </div>
                                    <div className="mt-3 pt-3 border-t border-slate-200 flex justify-between items-center">
                                        <span className="text-xs font-semibold text-slate-500">Salary Hike</span>
                                        <span className="text-sm font-bold text-green-600 bg-green-50 px-2 py-1 rounded-md">
                                            {story.hike} 🚀
                                        </span>
                                    </div>
                                </div>
                                <p className="text-slate-600 italic text-sm leading-relaxed">
                                    &quot;{story.quote}&quot;
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ArrowRight({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    )
}
