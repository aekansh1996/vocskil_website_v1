"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ShieldCheck } from "lucide-react";
import { usePathname } from "next/navigation";

export function Footer() {
    const pathname = usePathname();
    const isNoFooterPage = pathname?.startsWith("/admin") || pathname?.includes("/learn");
    if (isNoFooterPage) return null;

    return (
        <footer className="bg-white text-slate-600 pt-16 pb-8 border-t border-slate-100">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* About */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-blue-600">VocSkill</h3>
                        <p className="text-slate-500 leading-relaxed text-sm">
                            VocSkill Educational Private Limited is a government-recognized skill development and training organization working across colleges, government projects, and corporate CSR initiatives to create job-ready youth.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <Link href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Facebook className="h-5 w-5" /></Link>
                            <Link href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Twitter className="h-5 w-5" /></Link>
                            <Link href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Instagram className="h-5 w-5" /></Link>
                            <Link href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Linkedin className="h-5 w-5" /></Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-slate-900 mb-6">Explore</h4>
                        <ul className="space-y-3">
                            <li><Link href="/about-us" className="text-slate-500 hover:text-blue-600 transition-colors text-sm">About Us</Link></li>
                            <li><Link href="/programs" className="text-slate-500 hover:text-blue-600 transition-colors text-sm">Our Programs</Link></li>
                            <li><Link href="/government-projects" className="text-slate-500 hover:text-blue-600 transition-colors text-sm">Government Projects</Link></li>
                            <li><Link href="/csr-projects" className="text-slate-500 hover:text-blue-600 transition-colors text-sm">CSR Projects</Link></li>
                            <li><Link href="/college-partnerships" className="text-slate-500 hover:text-blue-600 transition-colors text-sm">College Partnerships</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="font-bold text-slate-900 mb-6">Partners</h4>
                        <ul className="space-y-3">
                            <li><Link href="/partner-with-us" className="text-slate-500 hover:text-blue-600 transition-colors text-sm">Partner With Us</Link></li>
                            <li><Link href="/hire-candidates" className="text-slate-500 hover:text-blue-600 transition-colors text-sm">Hire Skilled Talent</Link></li>
                            <li><Link href="/contact-us" className="text-slate-500 hover:text-blue-600 transition-colors text-sm">Contact Support</Link></li>
                            <li><Link href="/blog" className="text-slate-500 hover:text-blue-600 transition-colors text-sm">Blog & News</Link></li>
                            <li><Link href="/faqs" className="text-slate-500 hover:text-blue-600 transition-colors text-sm">Common FAQs</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-slate-900 mb-6">Get in Touch</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-indigo-600 shrink-0 mt-1" />
                                <span className="text-slate-500">Bharati Vidyapeeth Institute of Management Studies and Research, Bharati Vidyapeeth University, Sector- 8, CBD Belapur, Navi Mumbai., Maharashtra, 400614</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-blue-600 shrink-0" />
                                <span className="text-slate-500">+91 9082572306</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-indigo-600 shrink-0" />
                                <span className="text-slate-500">contact@vocskill.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Accreditations */}
                <div className="border-t border-slate-100 py-8 mb-8">
                    <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">Accredited & Recognized By</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="h-8 w-8 text-slate-600" />
                            <span className="font-bold text-slate-600">ISO 9001:2015</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="h-8 w-8 text-slate-600" />
                            <span className="font-bold text-slate-600">Startup India</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="h-8 w-8 text-slate-600" />
                            <span className="font-bold text-slate-600">MSME Registered</span>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-slate-500">
                        © {new Date().getFullYear()} Vocskill. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-slate-500">
                        <Link href="/privacy-policy" className="hover:text-indigo-600 transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-indigo-600 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
