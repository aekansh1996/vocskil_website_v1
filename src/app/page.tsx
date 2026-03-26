import { HeroSection } from "@/components/home/hero-section";
import { StatsBar } from "@/components/home/stats-bar";
import { AboutSection } from "@/components/home/AboutSection";
import { CoreFocusAreas } from "@/components/home/CoreFocusAreas";
import { PartnershipsGrid } from "@/components/home/PartnershipsGrid";
// Govt and CSR projects removed from homepage to focus on Colleges
import { ProgramsSection } from "@/components/home/programs-section";
import { CollegeBenefits } from "@/components/home/CollegeBenefits";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { StickyCTA } from "@/components/home/sticky-cta";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <StatsBar />
      <CollegeBenefits />
      <PartnershipsGrid />
      <ProgramsSection />
      <TestimonialsSection />
      <StickyCTA />
    </div>
  );
}
