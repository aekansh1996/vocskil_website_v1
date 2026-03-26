"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Star, Users } from "lucide-react";
import Link from "next/link";

const categories = [
    "AI & Data Science", 
    "Generative AI", 
    "Digital Marketing", 
    "BFSI & Finance", 
    "Engineering", 
    "Design", 
    "Retail & Sales", 
    "Soft Skills"
];

const deliveryFormats = [
    { name: "Hybrid Training", icon: Clock },
    { name: "On-campus Skill Labs", icon: Users },
    { name: "Bootcamps & Workshops", icon: Star },
    { name: "Semester Skill Credits", icon: Clock },
    { name: "Certification Programs", icon: Star }
];

const courses = [
    {
        id: "ai-data-science",
        title: "Artificial Intelligence & Data Science",
        category: "AI & Data Science",
        rating: 4.9,
        students: "2.5k+",
        duration: "6 Months",
        image: "https://images.unsplash.com/photo-1555255707-c07966488bc7?q=80&w=2670&auto=format&fit=crop",
        tags: ["In Demand"]
    },
    {
        id: "generative-ai",
        title: "Generative AI Professional",
        category: "Generative AI",
        rating: 5.0,
        students: "1.8k+",
        duration: "3 Months",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2532&auto=format&fit=crop",
        tags: ["Hot"]
    },
    {
        id: "digital-marketing",
        title: "Digital Marketing Strategy",
        category: "Digital Marketing",
        rating: 4.8,
        students: "4k+",
        duration: "4 Months",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        tags: ["Growth"]
    },
    {
        id: "bfsi-finance",
        title: "BFSI & Investment Banking",
        category: "BFSI & Finance",
        rating: 4.9,
        students: "3k+",
        duration: "5 Months",
        image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=2671&auto=format&fit=crop",
        tags: ["Corporate"]
    }
];

export function ProgramsSection() {
    const [activeCategory, setActiveCategory] = useState("AI & Data Science");

    const filteredCourses = activeCategory === "AI & Data Science" && courses.length > 0
        ? courses.filter(c => c.category === "AI & Data Science")
        : courses.filter(course => course.category === activeCategory);

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold mb-6 text-slate-900">Programs Offered</h2>
                    <p className="text-xl text-slate-600">
                        Industry-aligned certification programs designed for the future of work.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${activeCategory === category
                                ? "bg-blue-600 text-white shadow-lg scale-105"
                                : "bg-slate-50 text-slate-500 hover:bg-slate-100 border border-slate-200"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {filteredCourses.length > 0 ? filteredCourses.map((course) => (
                        <div key={course.id} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                            <div className="relative h-48 overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                                    style={{ backgroundImage: `url('${course.image}')` }}
                                />
                                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors" />
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-2">{course.category}</span>
                                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2">
                                    {course.title}
                                </h3>
                                <div className="flex items-center gap-4 text-xs font-medium text-slate-500 mb-6 mt-auto">
                                    <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {course.duration}</span>
                                    <span className="flex items-center gap-1"><Users className="h-4 w-4" /> {course.students}</span>
                                </div>
                                <Button asChild variant="outline" className="w-full border-slate-200 text-slate-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                    <Link href={`/courses/${course.id}`}>Learn Plan</Link>
                                </Button>
                            </div>
                        </div>
                    )) : (
                        <div className="col-span-full py-12 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-300">
                             <p className="text-slate-400 font-medium">More programs in this category coming soon.</p>
                        </div>
                    )}
                </div>

                <div className="bg-slate-50 p-12 rounded-3xl overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 -mr-32 -mt-32"></div>
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center uppercase tracking-widest">Delivery Formats</h3>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                            {deliveryFormats.map((format, i) => (
                                <div key={i} className="flex flex-col items-center gap-4 text-center">
                                    <div className="bg-white p-4 rounded-2xl shadow-sm text-blue-600">
                                        <format.icon className="h-8 w-8" />
                                    </div>
                                    <span className="text-sm font-bold text-slate-700">{format.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <Button asChild variant="outline" size="lg" className="border-indigo-200 text-indigo-600 hover:bg-indigo-50">
                        <Link href="/programs">View All Programs</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
