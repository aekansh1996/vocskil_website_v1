import React from 'react';

interface HeroVideoProps {
    videoUrl?: string; // Optional for now, can fallback to a default or placeholder
    title: string;
    subtitle: string;
    ctaText: string;
    ctaLink: string;
    price?: string;
}

export const HeroVideo: React.FC<HeroVideoProps> = ({
    videoUrl = "https://assets.mixkit.co/videos/preview/mixkit-artificial-intelligence-neural-network-loop-31497-large.mp4", // Placeholder video
    title,
    subtitle,
    ctaText,
    ctaLink,
    price
}) => {
    return (
        <div className="relative h-[600px] w-full overflow-hidden">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />

            {/* Content */}
            <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center text-white">
                <div className="max-w-2xl animate-fade-in-up">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
                        {title}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light">
                        {subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                        <a
                            href={ctaLink}
                            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(79,70,229,0.5)] hover:shadow-[0_0_30px_rgba(79,70,229,0.7)] transform hover:-translate-y-1"
                        >
                            {ctaText} {price && `- ${price}`}
                        </a>
                        {/* Optional secondary CTA or trust signal could go here */}
                    </div>
                </div>
            </div>
        </div>
    );
};
