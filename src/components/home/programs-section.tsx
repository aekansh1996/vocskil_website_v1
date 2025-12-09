"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Star, Users } from "lucide-react";
import Link from "next/link";

const categories = ["Top Courses", "Generative AI", "Marketing", "Analytics", "Finance", "HR"];

const courses = [
    {
        id: "generative-ai",
        title: "Generative AI & Machine Learning",
        category: "Generative AI",
        rating: 4.9,
        students: "1.2k",
        duration: "6 Months",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2532&auto=format&fit=crop",
        tags: ["Trending", "Bestseller"]
    },
    {
        id: "digital-marketing",
        title: "Advanced Digital Marketing",
        category: "Marketing",
        rating: 4.8,
        students: "3.5k",
        duration: "4 Months",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        tags: ["Popular"]
    },
    {
        id: "data-analytics",
        title: "Data Analytics with Python",
        category: "Analytics",
        rating: 4.7,
        students: "2.1k",
        duration: "5 Months",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
        tags: ["Job Ready"]
    },
    {
        id: "financial-modeling",
        title: "Financial Modeling & Valuation",
        category: "Finance",
        rating: 4.9,
        students: "1.8k",
        duration: "3 Months",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2626&auto=format&fit=crop",
        tags: ["Certification"]
    },
    {
        id: "hr-management",
        title: "Human Resource Management",
        category: "HR",
        rating: 4.6,
        students: "900+",
        duration: "3 Months",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2684&auto=format&fit=crop",
        tags: ["Interactive"]
    },
    {
        id: "full-stack-development",
        title: "Full Stack Web Development",
        category: "Top Courses",
        rating: 4.8,
        students: "5k+",
        duration: "8 Months",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2672&auto=format&fit=crop",
        tags: ["High Salary"]
    }
];

export function ProgramsSection() {
    const [activeCategory, setActiveCategory] = useState("Top Courses");

    const filteredCourses = activeCategory === "Top Courses"
        ? courses
        : courses.filter(course => course.category === activeCategory);

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Programs</h2>
                    <p className="text-lg text-gray-600">
                        Explore our industry-relevant courses designed to help you master in-demand skills.
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                                ? "bg-indigo-600 text-white shadow-md transform scale-105"
                                : "bg-white text-gray-600 hover:bg-indigo-50 border border-gray-200"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Course Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredCourses.map((course) => (
                        <div key={course.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                                    style={{ backgroundImage: `url('${course.image}')` }}
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                                <div className="absolute top-4 left-4 flex gap-2">
                                    {course.tags.map((tag, i) => (
                                        <span key={i} className="px-2 py-1 bg-white/90 backdrop-blur-sm text-xs font-bold text-indigo-600 rounded-md shadow-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-xs font-bold text-orange-500 uppercase tracking-wider">{course.category}</span>
                                    <div className="flex items-center gap-1 text-amber-500 text-sm font-bold">
                                        <Star className="h-4 w-4 fill-current" /> {course.rating}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                                    {course.title}
                                </h3>

                                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6 mt-auto">
                                    <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {course.duration}</span>
                                    <span className="flex items-center gap-1"><Users className="h-4 w-4" /> {course.students}</span>
                                </div>

                                <Button asChild className="w-full bg-indigo-600 hover:bg-indigo-700 text-white transition-colors">
                                    <Link href={`/courses/${course.id}`}>
                                        View Course <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    ))}
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
