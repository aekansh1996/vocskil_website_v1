"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Star, Users, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const courses = [
    {
        id: "generative-ai",
        title: "Generative AI & Machine Learning",
        category: "Technology",
        rating: 4.9,
        students: "1.2k",
        duration: "6 Months",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2532&auto=format&fit=crop",
        tags: ["Trending", "Bestseller"],
        description: "Master LLMs, RAG, and build your own AI applications."
    },
    {
        id: "digital-marketing",
        title: "Advanced Digital Marketing",
        category: "Marketing",
        rating: 4.8,
        students: "3.5k",
        duration: "4 Months",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        tags: ["Popular"],
        description: "Become a complete digital marketer with SEO, SEM, and Social Media expertise."
    },
    {
        id: "data-analytics",
        title: "Data Analytics with Python",
        category: "Analytics",
        rating: 4.7,
        students: "2.1k",
        duration: "5 Months",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
        tags: ["Job Ready"],
        description: "Learn to analyze data, create visualizations, and drive business decisions."
    },
    {
        id: "financial-modeling",
        title: "Financial Modeling & Valuation",
        category: "Finance",
        rating: 4.9,
        students: "1.8k",
        duration: "3 Months",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2626&auto=format&fit=crop",
        tags: ["Certification"],
        description: "Master Excel, financial statements, and valuation techniques."
    },
    {
        id: "hr-management",
        title: "Human Resource Management",
        category: "HR",
        rating: 4.6,
        students: "900+",
        duration: "3 Months",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2684&auto=format&fit=crop",
        tags: ["Interactive"],
        description: "Learn recruitment, payroll, and core HR functions."
    },
    {
        id: "full-stack-development",
        title: "Full Stack Web Development",
        category: "Technology",
        rating: 4.8,
        students: "5k+",
        duration: "8 Months",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2672&auto=format&fit=crop",
        tags: ["High Salary"],
        description: "Become a MERN stack developer and build scalable web applications."
    }
];

export default function ProgramsPage() {
    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Header */}
            <div className="bg-slate-900 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Explore Our Programs</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Industry-designed courses to help you upskill and transform your career.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 -mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course) => (
                        <div key={course.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col">
                            {/* Image */}
                            <div className="relative h-56 overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                                    style={{ backgroundImage: `url('${course.image}')` }}
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                                <div className="absolute top-4 left-4 flex gap-2">
                                    {course.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1 bg-white/95 backdrop-blur-sm text-xs font-bold text-indigo-600 rounded-full shadow-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-xs font-bold text-indigo-500 uppercase tracking-wider bg-indigo-50 px-2 py-1 rounded">{course.category}</span>
                                    <div className="flex items-center gap-1 text-amber-500 text-sm font-bold">
                                        <Star className="h-4 w-4 fill-current" /> {course.rating}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                                    {course.title}
                                </h3>

                                <p className="text-slate-600 mb-6 line-clamp-2">
                                    {course.description}
                                </p>

                                <div className="flex items-center gap-6 text-sm text-gray-500 mb-8 mt-auto border-t border-gray-100 pt-4">
                                    <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-indigo-400" /> {course.duration}</span>
                                    <span className="flex items-center gap-2"><Users className="h-4 w-4 text-indigo-400" /> {course.students}</span>
                                </div>

                                <Button asChild size="lg" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white transition-all shadow-lg shadow-indigo-200">
                                    <Link href={`/courses/${course.id}`}>
                                        View Program Details <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
