import { CourseHero } from "@/components/course/course-hero";
import { HybridFeature } from "@/components/course/hybrid-feature";
import { Curriculum } from "@/components/course/curriculum";
import { ToolsGrid } from "@/components/course/tools-grid";
import { InstructorCard } from "@/components/course/instructor-card";
import { StickyCTA } from "@/components/home/sticky-cta";
import { CareerImpact } from "@/components/home/career-impact";

const modules = [
    {
        title: "Digital Marketing Fundamentals",
        topics: [
            "Introduction to Digital Marketing & Branding",
            "Customer Persona & Journey Mapping",
            "Website Planning & Creation (WordPress)",
            "Content Marketing Strategy"
        ],
        duration: "2 Weeks"
    },
    {
        title: "Search Engine Optimization (SEO)",
        topics: [
            "Keyword Research & Competitor Analysis",
            "On-Page & Off-Page SEO",
            "Technical SEO & Site Audits",
            "Local SEO & Google My Business"
        ],
        duration: "3 Weeks"
    },
    {
        title: "Social Media Marketing (SMM)",
        topics: [
            "Facebook & Instagram Marketing (Meta Ads)",
            "LinkedIn Marketing for B2B",
            "Twitter & Pinterest Strategies",
            "Influencer Marketing"
        ],
        duration: "3 Weeks"
    },
    {
        title: "Performance Marketing & Analytics",
        topics: [
            "Google Ads (Search, Display, Video)",
            "Google Analytics 4 (GA4)",
            "Email Marketing & Automation",
            "Conversion Rate Optimization (CRO)"
        ],
        duration: "4 Weeks"
    },
    {
        title: "Capstone Project & Certification",
        topics: [
            "Live Campaign Execution",
            "Budgeting & ROI Analysis",
            "Freelancing & Agency Management",
            "Mock Interviews"
        ],
        duration: "2 Weeks"
    }
];

const tools = [
    { name: "Google Ads", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg" },
    { name: "Google Analytics", logo: "https://upload.wikimedia.org/wikipedia/commons/7/77/Google_Analytics_logo.svg" },
    { name: "Meta Ads", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
    { name: "WordPress", logo: "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg" },
    { name: "Semrush", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Semrush_logo.svg" },
    { name: "Canva", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg" },
];

export default function DigitalMarketingCoursePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <CourseHero
                title="Advanced Digital Marketing"
                description="Master SEO, Social Media, and Performance Marketing with our comprehensive Hybrid program. Become a certified digital marketer."
                badge="Bestseller"
                duration="4 Months"
                mode="Hybrid (Online + Offline)"
                nextBatch="Starts Tomorrow"
                category="Digital Marketing"
                students={2000}
                rating={4.8}
                image="https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=2670&auto=format&fit=crop"
                price={4999}
                courseId="digital-marketing-001"
            />
            <HybridFeature />
            <Curriculum modules={modules} />
            <ToolsGrid tools={tools} />
            <CareerImpact />
            <InstructorCard
                name="Priya Sharma"
                role="Digital Marketing Head"
                company="Nykaa"
                bio="Priya is a seasoned digital marketer with 10+ years of experience. She has led successful campaigns for top brands like Nykaa and Myntra, driving millions in revenue."
                image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop"
                linkedin="https://linkedin.com"
            />
            <StickyCTA />
        </div>
    );
}
