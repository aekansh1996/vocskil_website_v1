import { HeroSection } from "@/components/home/hero-section";
import { StatsBar } from "@/components/home/stats-bar";
import { ProgramsSection } from "@/components/home/programs-section";
import { LearningExperience } from "@/components/home/learning-experience";
import { CareerImpact } from "@/components/home/career-impact";
import { CorporateBanner } from "@/components/home/corporate-banner";
import { PartnersSection } from "@/components/home/partners-section";
import { StickyCTA } from "@/components/home/sticky-cta";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { WhyChooseUs } from "@/components/home/why-choose-us";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <StatsBar />
      <ProgramsSection />
      <WhyChooseUs />
      <LearningExperience />
      <CareerImpact />
      <TestimonialsSection />
      <CorporateBanner />
      <PartnersSection />
      <StickyCTA />
    </div>
  );
}
