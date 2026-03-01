"use client";

import { useEffect, useRef, useState } from "react";

export default function ProctoringComponent() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [tabSwitchCount, setTabSwitchCount] = useState(0);

    useEffect(() => {
        // Request webcam access
        async function setupWebcam() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
                setHasPermission(true);
            } catch (err) {
                console.error("Error accessing webcam:", err);
                setHasPermission(false);
            }
        }

        setupWebcam();

        // Tab switching detection
        const handleVisibilityChange = () => {
            if (document.visibilityState === "hidden") {
                setTabSwitchCount((prev) => prev + 1);
                console.warn("Tab switch detected!");
                // You could also trigger a warning UI here
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            document.removeEventListener("visibilitychange", handleVisibilityChange);
            // Stop the stream when component unmounts
            if (videoRef.current && videoRef.current.srcObject) {
                const stream = videoRef.current.srcObject as MediaStream;
                stream.getTracks().forEach(track => track.stop());
            }
        };
    }, []);

    if (hasPermission === false) {
        return (
            <div className="p-4 bg-red-100 text-red-700 rounded-lg border border-red-200">
                Warning: Webcam access is required for this exam. Please enable it in your browser settings.
            </div>
        );
    }

    return (
        <div className="fixed bottom-4 right-4 w-48 h-36 rounded-xl overflow-hidden shadow-2xl border-2 border-primary-500 bg-black z-50">
            <video
                ref={videoRef}
                autoPlay
                muted
                playsInline
                className="w-full h-full object-cover"
            />
            <div className="absolute top-2 left-2 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-red-500/80 backdrop-blur-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span className="text-[10px] font-medium text-white uppercase tracking-wider">Rec</span>
            </div>
            {tabSwitchCount > 0 && (
                <div className="absolute bottom-2 left-2 right-2 px-2 py-1 rounded bg-black/60 backdrop-blur-sm text-[9px] text-yellow-300 border border-yellow-500/30">
                    Tab switched: {tabSwitchCount} times
                </div>
            )}
        </div>
    );
}
