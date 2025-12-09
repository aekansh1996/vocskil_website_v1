import { CourseHero } from "@/components/course/course-hero";
import { HybridFeature } from "@/components/course/hybrid-feature";
import { Curriculum } from "@/components/course/curriculum";
import { ToolsGrid } from "@/components/course/tools-grid";
import { InstructorCard } from "@/components/course/instructor-card";
import { StickyCTA } from "@/components/home/sticky-cta";
import { CareerImpact } from "@/components/home/career-impact";

const modules = [
    {
        title: "Excel for Finance",
        topics: [
            "Advanced Excel Functions",
            "Data Analysis & Formatting",
            "Macros & VBA Basics",
            "Building Dynamic Charts"
        ],
        duration: "2 Weeks"
    },
    {
        title: "Financial Statement Analysis",
        topics: [
            "Understanding P&L, Balance Sheet, Cash Flow",
            "Ratio Analysis",
            "Forecasting Financial Statements",
            "Common Size Analysis"
        ],
        duration: "3 Weeks"
    },
    {
        title: "Financial Modeling",
        topics: [
            "Building 3-Statement Models",
            "DCF (Discounted Cash Flow) Valuation",
            "Sensitivity & Scenario Analysis",
            "Comparable Company Analysis (Comps)"
        ],
        duration: "4 Weeks"
    },
    {
        title: "M&A and Project Finance",
        topics: [
            "Mergers & Acquisitions Modeling",
            "LBO (Leveraged Buyout) Basics",
            "Project Finance Modeling",
            "Pitch Deck Creation"
        ],
        duration: "3 Weeks"
    },
    {
        title: "Capstone & Career Prep",
        topics: [
            "Full-scale Valuation Project",
            "Equity Research Report Writing",
            "Mock Interviews (Investment Banking)",
            "Resume Building"
        ],
        duration: "2 Weeks"
    }
];

const tools = [
    { name: "Excel", logo: "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg" },
    { name: "PowerPoint", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg" },
    { name: "Bloomberg", logo: "https://upload.wikimedia.org/wikipedia/commons/6/63/Bloomberg_L.P._logo.svg" },
    { name: "PowerBI", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
];

export default function FinancialModelingCoursePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <CourseHero
                title="Financial Modeling & Valuation"
                description="Master the art of financial modeling, valuation, and equity research. Prepare for careers in Investment Banking and Corporate Finance."
                badge="Certification"
                duration="3 Months"
                mode="Hybrid (Online + Offline)"
                nextBatch="Starts 1st Sep"
                category="Finance & Banking"
                students={800}
                rating={4.7}
                image="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574&auto=format&fit=crop"
                price={4999}
                courseId="financial-modeling-001"
            />
            <HybridFeature />
            <Curriculum modules={modules} />
            <ToolsGrid tools={tools} />
            <CareerImpact />
            <InstructorCard
                name="Amit Kapoor"
                role="Investment Banker"
                company="J.P. Morgan"
                bio="Amit brings 8+ years of experience in Investment Banking and Private Equity. He has executed deals worth over $500M and is passionate about teaching finance."
                image="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574&auto=format&fit=crop"
                linkedin="https://linkedin.com"
            />
            <StickyCTA />
        </div>
    );
}
