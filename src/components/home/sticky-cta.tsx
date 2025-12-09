"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, PhoneCall, Download } from "lucide-react";

export function StickyCTA() {
    const [isVisible, setIsVisible] = useState(false);
    const [isClosed, setIsClosed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!isVisible || isClosed) return null;

    return (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 animate-in slide-in-from-bottom-5 duration-300">
            <div className="bg-white p-4 rounded-xl shadow-2xl border border-indigo-100 relative max-w-xs">
                <button
                    onClick={() => setIsClosed(true)}
                    className="absolute -top-2 -right-2 bg-slate-900 text-white rounded-full p-1 hover:bg-slate-700"
                >
                    <X className="h-3 w-3" />
                </button>

                <p className="font-bold text-slate-900 mb-1">Get Free Career Guide</p>
                <p className="text-xs text-slate-600 mb-3">Download our comprehensive guide to kickstart your career in 2024.</p>

                <div className="flex gap-2">
                    <Button size="sm" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                        <Download className="h-3 w-3 mr-2" /> Download
                    </Button>
                    <Button size="sm" variant="outline" className="w-full border-indigo-200 text-indigo-600 hover:bg-indigo-50">
                        <PhoneCall className="h-3 w-3 mr-2" /> Call Us
                    </Button>
                </div>
            </div>
        </div>
    );
}
