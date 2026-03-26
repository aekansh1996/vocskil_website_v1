"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone, Mail, Code as Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

const courseCategories = [
    {
        title: "Future Tech",
        items: [
            { name: "Artificial Intelligence", href: "/courses/ai" },
            { name: "Generative AI", href: "/courses/generative-ai" },
            { name: "Data Science", href: "/courses/data-science" },
            { name: "Machine Learning", href: "/courses/ml" },
        ]
    },
    {
        title: "Business & Digital",
        items: [
            { name: "Digital Marketing", href: "/courses/digital-marketing" },
            { name: "BFSI & Finance", href: "/courses/bfsi" },
            { name: "Retail & Sales", href: "/courses/retail" },
            { name: "Soft Skills", href: "/courses/soft-skills" },
        ]
    },
    {
        title: "Industry Specific",
        items: [
            { name: "NEP Skill Credits", href: "/nep-credits" },
            { name: "Govt Skill Schemes", href: "/government-projects" },
            { name: "CSR Projects", href: "/csr-projects" },
            { name: "Vocational Training", href: "/programs" },
        ]
    }
];

export function Navbar() {
    const { data: session, status } = useSession();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = React.useState(false);
    const [showMegaMenu, setShowMegaMenu] = React.useState(false);

    const isNoNavbarPage = pathname?.startsWith("/admin") || pathname?.includes("/learn");
    if (isNoNavbarPage) return null;

    return (
        <div className="flex flex-col w-full">
            {/* Top Bar for Corporate/B2B */}
            <div className="bg-slate-900 text-slate-300 text-xs py-2 hidden md:block">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center gap-6">
                        <Link href="/government-projects" className="hover:text-white transition-colors">Government Projects</Link>
                        <Link href="/csr-projects" className="hover:text-white transition-colors">CSR Projects</Link>
                        <Link href="/college-partnerships" className="hover:text-white transition-colors">College Partnerships</Link>
                    </div>
                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-2"><Phone className="h-3 w-3" /> +91 9082572306</span>
                        <span className="flex items-center gap-2"><Mail className="h-3 w-3" /> contact@vocskill.com</span>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
                <div className="container mx-auto flex h-20 items-center justify-between px-4">
                    <div className="flex items-center gap-10">
                        <Link href="/" className="flex items-center space-x-2">
                            <img src="/images/website_logo/Logo-01.png" alt="Vocskill Logo" className="h-16 w-auto" />
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden lg:flex items-center gap-6">
                            <Link href="/" className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors">
                                Home
                            </Link>

                            <Link href="/about-us" className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors">
                                About Us
                            </Link>

                            <Link href="/programs" className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors">
                                Programs
                            </Link>

                            <Link href="/government-projects" className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors">
                                Govt Projects
                            </Link>

                            <Link href="/csr-projects" className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors">
                                CSR Projects
                            </Link>

                            <Link href="/college-partnerships" className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors">
                                Colleges
                            </Link>

                            <Link href="/hire-candidates" className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors">
                                Hire
                            </Link>
                        </nav>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        {status === "authenticated" ? (
                            <>
                                {session?.user?.role === "ADMIN" && (
                                    <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 font-bold" asChild>
                                        <Link href="/admin">Admin Panel</Link>
                                    </Button>
                                )}
                                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6" asChild>
                                    <Link href="/dashboard">My Dashboard</Link>
                                </Button>
                            </>
                        ) : (
                            <>
                                <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 font-medium" asChild>
                                    <Link href="/login">Login</Link>
                                </Button>
                                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6" asChild>
                                    <Link href="/register">Get Started</Link>
                                </Button>
                            </>
                        )}
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
                                <Button variant="outline" className="w-full border-blue-200 text-blue-600" asChild>
                                    <Link href="/login">Login</Link>
                                </Button>
                                <Button className="w-full bg-blue-600 text-white" asChild>
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
