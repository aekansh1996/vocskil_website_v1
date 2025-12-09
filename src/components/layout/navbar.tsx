"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone, Mail, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const courseCategories = [
    {
        title: "Data Science & Analytics",
        items: [
            { name: "Data Science with Python", href: "/courses/data-science" },
            { name: "Business Analytics", href: "/courses/business-analytics" },
            { name: "AI & Machine Learning", href: "/courses/ai-ml" },
            { name: "Tableau & PowerBI", href: "/courses/tableau-powerbi" },
        ]
    },
    {
        title: "Finance & Banking",
        items: [
            { name: "Financial Modeling", href: "/courses/financial-modeling" },
            { name: "Investment Banking", href: "/courses/investment-banking" },
            { name: "CFA Level 1 Prep", href: "/courses/cfa-prep" },
            { name: "Corporate Banking", href: "/courses/corporate-banking" },
        ]
    },
    {
        title: "Digital Marketing",
        items: [
            { name: "Advanced Digital Marketing", href: "/courses/digital-marketing" },
            { name: "Social Media Marketing", href: "/courses/social-media" },
            { name: "SEO & Content Strategy", href: "/courses/seo-content" },
            { name: "Performance Marketing", href: "/courses/performance-marketing" },
        ]
    },
    {
        title: "Management & HR",
        items: [
            { name: "Human Resource Management", href: "/courses/hr-management" },
            { name: "Project Management", href: "/courses/project-management" },
            { name: "Supply Chain Management", href: "/courses/supply-chain" },
            { name: "Soft Skills & Communication", href: "/courses/soft-skills" },
        ]
    }
];

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [showMegaMenu, setShowMegaMenu] = React.useState(false);

    return (
        <div className="flex flex-col w-full">
            {/* Top Bar for Corporate/B2B */}
            <div className="bg-slate-900 text-slate-300 text-xs py-2 hidden md:block">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center gap-6">
                        <Link href="/corporate-training" className="hover:text-white transition-colors">Corporate Training</Link>
                        <Link href="/hire-from-us" className="hover:text-white transition-colors">Hire From Us</Link>
                        <Link href="/become-mentor" className="hover:text-white transition-colors">Become a Mentor</Link>
                    </div>
                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-2"><Phone className="h-3 w-3" /> 908-257-2306</span>
                        <span className="flex items-center gap-2"><Mail className="h-3 w-3" /> contact@vocskill.com</span>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
                <div className="container mx-auto flex h-20 items-center justify-between px-4">
                    <div className="flex items-center gap-12">
                        <Link href="/" className="flex items-center space-x-2">
                            <img src="/images/website_logo/Logo-01.png" alt="Vocskill Logo" className="h-20 w-auto" />
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center gap-8">
                            <Link href="/" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
                                Home
                            </Link>

                            {/* Mega Menu Trigger */}
                            <div
                                className="relative group"
                                onMouseEnter={() => setShowMegaMenu(true)}
                                onMouseLeave={() => setShowMegaMenu(false)}
                            >
                                <button className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors py-6">
                                    Explore Courses <ChevronDown className="h-4 w-4" />
                                </button>

                                {/* Mega Menu Dropdown */}
                                {showMegaMenu && (
                                    <div className="absolute top-full left-0 w-[600px] bg-white shadow-xl rounded-xl border border-slate-100 p-6 animate-in fade-in slide-in-from-top-2 duration-200">
                                        <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                                            <Link href="/courses/generative-ai" className="group block p-3 rounded-lg hover:bg-indigo-50 transition-colors">
                                                <div className="font-bold text-slate-900 group-hover:text-indigo-600">Generative AI & Machine Learning</div>
                                                <div className="text-xs text-slate-500">Master GenAI & LLMs</div>
                                            </Link>
                                            <Link href="/courses/digital-marketing" className="group block p-3 rounded-lg hover:bg-indigo-50 transition-colors">
                                                <div className="font-bold text-slate-900 group-hover:text-indigo-600">Advanced Digital Marketing</div>
                                                <div className="text-xs text-slate-500">SEO, SEM & Social Media</div>
                                            </Link>
                                            <Link href="/courses/data-analytics" className="group block p-3 rounded-lg hover:bg-indigo-50 transition-colors">
                                                <div className="font-bold text-slate-900 group-hover:text-indigo-600">Data Analytics with Python</div>
                                                <div className="text-xs text-slate-500">Data Viz & Insights</div>
                                            </Link>
                                            <Link href="/courses/financial-modeling" className="group block p-3 rounded-lg hover:bg-indigo-50 transition-colors">
                                                <div className="font-bold text-slate-900 group-hover:text-indigo-600">Financial Modeling & Valuation</div>
                                                <div className="text-xs text-slate-500">Excel & Valuation</div>
                                            </Link>
                                            <Link href="/courses/hr-management" className="group block p-3 rounded-lg hover:bg-indigo-50 transition-colors">
                                                <div className="font-bold text-slate-900 group-hover:text-indigo-600">Human Resource Management</div>
                                                <div className="text-xs text-slate-500">Recruitment & Payroll</div>
                                            </Link>
                                            <Link href="/courses/full-stack-development" className="group block p-3 rounded-lg hover:bg-indigo-50 transition-colors">
                                                <div className="font-bold text-slate-900 group-hover:text-indigo-600">Full Stack Web Development</div>
                                                <div className="text-xs text-slate-500">MERN Stack</div>
                                            </Link>
                                        </div>

                                        <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center bg-indigo-50 -mx-6 -mb-6 p-4 rounded-b-xl">
                                            <div>
                                                <p className="font-bold text-slate-900 text-sm">Not sure what to choose?</p>
                                                <p className="text-xs text-slate-600">Get a free career counselling session</p>
                                            </div>
                                            <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                                                Book Free Session
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <Link href="/blog" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
                                Blog
                            </Link>
                            <Link href="/about-us" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
                                About Us
                            </Link>
                        </nav>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <Button variant="ghost" className="text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 font-medium" asChild>
                            <Link href="/login">Login</Link>
                        </Button>
                        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6" asChild>
                            <Link href="/register">Get Started</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-slate-600"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Nav */}
                {isOpen && (
                    <div className="md:hidden border-t bg-white h-[calc(100vh-80px)] overflow-y-auto">
                        <div className="container mx-auto flex flex-col gap-4 p-6">
                            <Link href="/" className="text-lg font-medium text-slate-900" onClick={() => setIsOpen(false)}>Home</Link>

                            <div className="py-2">
                                <p className="text-sm font-bold text-indigo-600 uppercase tracking-wider mb-4">Programs</p>
                                {courseCategories.map((cat, idx) => (
                                    <div key={idx} className="mb-6">
                                        <p className="font-medium text-slate-900 mb-2">{cat.title}</p>
                                        <ul className="pl-4 space-y-2 border-l-2 border-slate-100">
                                            {cat.items.map((item, i) => (
                                                <li key={i}>
                                                    <Link href={item.href} className="text-sm text-slate-600" onClick={() => setIsOpen(false)}>
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            <Link href="/blog" className="text-lg font-medium text-slate-900" onClick={() => setIsOpen(false)}>Blog</Link>
                            <Link href="/about-us" className="text-lg font-medium text-slate-900" onClick={() => setIsOpen(false)}>About Us</Link>
                            <Link href="/contact-us" className="text-lg font-medium text-slate-900" onClick={() => setIsOpen(false)}>Contact Us</Link>

                            <div className="pt-6 border-t border-slate-100 flex flex-col gap-3">
                                <Button variant="outline" className="w-full border-indigo-200 text-indigo-600" asChild>
                                    <Link href="/login">Login</Link>
                                </Button>
                                <Button className="w-full bg-indigo-600 text-white" asChild>
                                    <Link href="/register">Get Started</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </header>
        </div>
    );
}
