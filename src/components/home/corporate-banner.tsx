"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Building, Users2, ArrowRight } from "lucide-react";

export function CorporateBanner() {
    return (
        <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
                    {/* Corporate Training */}
                    <div className="flex flex-col gap-6 p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                        <div className="h-14 w-14 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                            <Building className="h-7 w-7" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-3">Corporate Training</h3>
                            <p className="text-slate-300 mb-6 leading-relaxed">
                                Upskill your workforce with our customized training programs. Tailored curriculums in Data, Finance, and Leadership to meet your business goals.
                            </p>
                            <Button asChild variant="outline" className="border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white w-fit">
                                <Link href="/corporate-training">
                                    Explore Solutions <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Hire Talent */}
                    <div className="flex flex-col gap-6 p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                        <div className="h-14 w-14 rounded-xl bg-green-500/20 text-green-400 flex items-center justify-center">
                            <Users2 className="h-7 w-7" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-3">Hire Top Talent</h3>
                            <p className="text-slate-300 mb-6 leading-relaxed">
                                Access our pool of 10,000+ job-ready graduates. Pre-screened candidates in Analytics, Digital Marketing, and Finance available for immediate joining.
                            </p>
                            <Button asChild variant="outline" className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white w-fit">
                                <Link href="/hire-from-us">
                                    Start Hiring <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
