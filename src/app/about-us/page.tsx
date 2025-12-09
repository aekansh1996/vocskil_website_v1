import { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { MissionVision } from "@/components/about/mission-vision";
import { TeamSection } from "@/components/about/team-section";
import { StatsBar } from "@/components/home/stats-bar";
import { StickyCTA } from "@/components/home/sticky-cta";
import { PartnersSection } from "@/components/home/partners-section";

export const metadata: Metadata = {
    title: "About Us | Vocskill",
    description: "Learn about Vocskill's mission to bridge the gap between education and employment through industry-led skill development.",
};

export default function AboutUsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <AboutHero />
            <StatsBar />
            <MissionVision />
            <TeamSection />
            <PartnersSection />
            <StickyCTA />
        </div>
    );
}
