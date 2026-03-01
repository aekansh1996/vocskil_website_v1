"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link2, Check } from "lucide-react";

export function ShareExamButton({ examId }: { examId: string }) {
    const [copied, setCopied] = useState(false);

    const copyLink = () => {
        const link = `${window.location.origin}/exams/${examId}`;
        navigator.clipboard.writeText(link);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <Button
            variant="outline"
            size="sm"
            onClick={copyLink}
            className={copied ? "text-emerald-600 border-emerald-200 bg-emerald-50" : "text-slate-600"}
        >
            {copied ? (
                <>
                    <Check className="h-4 w-4 mr-2" />
                    Copied
                </>
            ) : (
                <>
                    <Link2 className="h-4 w-4 mr-2" />
                    Copy Link
                </>
            )}
        </Button>
    );
}
