"use client";

import Link from "next/link";
import {
    BarChart3,
    Megaphone,
    TrendingUp,
    Users,
    Briefcase,
    Code2,
    ArrowRight,
    LineChart
} from "lucide-react";

const categories = [
    {
        title: "Data Science & Analytics",
        icon: BarChart3,
        count: "12+ Courses",
        color: "text-blue-600",
        bg: "bg-blue-50",
        href: "/courses/data-science"
    },
    {
        title: "Digital Marketing",
        icon: Megaphone,
        count: "8+ Courses",
        color: "text-orange-600",
        bg: "bg-orange-50",
        href: "/courses/digital-marketing"
    },
    {
        title: "Finance & Banking",
        icon: TrendingUp,
        count: "15+ Courses",
        color: "text-green-600",
        bg: "bg-green-50",
        href: "/courses/finance"
    },
    {
        title: "Human Resources",
        icon: Users,
        count: "6+ Courses",
        color: "text-purple-600",
        bg: "bg-purple-50",
        href: "/courses/hr"
    },
    {
        title: "Management",
        icon: Briefcase,
        count: "10+ Courses",
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        href: "/courses/management"
    },
    {
        title: "Technology & AI",
        icon: Code2,
        count: "20+ Courses",
        color: "text-red-600",
        bg: "bg-red-50",
        href: "/courses/technology"
    }
];

export function CategoriesSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                        Explore Top <span className="text-indigo-600">Categories</span>
                    </h2>
                    <p className="text-lg text-slate-600">
                        Discover career-transforming programs across high-growth domains.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category, index) => (
                        <Link
                            key={index}
                            href={category.href}
                            className="group p-8 rounded-2xl border border-slate-100 hover:border-indigo-100 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className={`h-14 w-14 rounded-xl ${category.bg} ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <category.icon className="h-7 w-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                                {category.title}
                            </h3>
                            <div className="flex items-center justify-between">
                                <p className="text-slate-500 font-medium">{category.count}</p>
                                <div className="h-8 w-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                                    <ArrowRight className="h-4 w-4" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
