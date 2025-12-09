"use client";

import { Linkedin } from "lucide-react";
import Link from "next/link";

interface InstructorProps {
    name: string;
    role: string;
    company: string;
    bio: string;
    image: string;
    linkedin?: string;
}

export function InstructorCard({ name, role, company, bio, image, linkedin }: InstructorProps) {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                        Learn from the <span className="text-indigo-600">Best</span>
                    </h2>
                    <p className="text-lg text-slate-600">
                        Mentorship from industry practitioners who have built scalable AI systems.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                    <div className="shrink-0 relative">
                        <div className="absolute inset-0 bg-indigo-600 rounded-full blur-2xl opacity-20"></div>
                        <img
                            src={image}
                            alt={name}
                            className="relative h-48 w-48 rounded-full object-cover border-4 border-white shadow-lg"
                        />
                    </div>
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold text-slate-900 mb-1">{name}</h3>
                        <p className="text-indigo-600 font-medium mb-4">{role} at {company}</p>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            {bio}
                        </p>
                        {linkedin && (
                            <Link
                                href={linkedin}
                                target="_blank"
                                className="inline-flex items-center gap-2 text-slate-500 hover:text-[#0077b5] transition-colors font-medium"
                            >
                                <Linkedin className="h-5 w-5" />
                                Connect on LinkedIn
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
