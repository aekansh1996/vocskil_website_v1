import { CourseHero } from "@/components/course/course-hero";
import { HybridFeature } from "@/components/course/hybrid-feature";
import { Curriculum } from "@/components/course/curriculum";
import { ToolsGrid } from "@/components/course/tools-grid";
import { InstructorCard } from "@/components/course/instructor-card";
import { StickyCTA } from "@/components/home/sticky-cta";
import { CareerImpact } from "@/components/home/career-impact";

const modules = [
    {
        title: "HR Fundamentals & Recruitment",
        topics: [
            "Introduction to HRM",
            "Talent Acquisition Lifecycle",
            "Sourcing Strategies (LinkedIn, Portals)",
            "Screening & Interviewing Techniques"
        ],
        duration: "3 Weeks"
    },
    {
        title: "Payroll & Compensation",
        topics: [
            "Payroll Processing & Compliance",
            "CTC Structure Design",
            "Taxation & Statutory Deductions (PF, ESIC)",
            "Compensation & Benefits Planning"
        ],
        duration: "3 Weeks"
    },
    {
        title: "Performance Management & L&D",
        topics: [
            "Performance Appraisal Systems",
            "KPIs & KRAs Setting",
            "Learning & Development Strategies",
            "Employee Engagement"
        ],
        duration: "3 Weeks"
    },
    {
        title: "HR Analytics & Operations",
        topics: [
            "HR Metrics & Analytics",
            "HRIS Tools & Automation",
            "Employee Onboarding & Exit Process",
            "Labor Laws & Compliance"
        ],
        duration: "3 Weeks"
    },
    {
        title: "Capstone & Soft Skills",
        topics: [
            "HR Policy Formulation Project",
            "Conflict Resolution",
            "Business Communication",
            "Mock HR Interviews"
        ],
        duration: "2 Weeks"
    }
];

const tools = [
    { name: "Excel", logo: "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg" },
    { name: "LinkedIn", logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" },
    { name: "Naukri", logo: "https://static.naukimg.com/s/4/100/i/naukri_Logo.png" }, // Placeholder or text if not available
    { name: "Zoho People", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Zoho_Corporation_logo.png" },
];

export default function HRManagementCoursePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <CourseHero
                title="Human Resource Management"
                description="Become a strategic HR professional. Learn recruitment, payroll, analytics, and compliance with practical training."
                badge="Interactive"
                duration="3 Months"
                mode="Hybrid (Online + Offline)"
                nextBatch="Starts Tomorrow"
                category="Management & HR"
                students={800}
                rating={4.7}
                image="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2670&auto=format&fit=crop"
                price={29999}
                courseId="hr-mgmt-001"
            />
            <HybridFeature />
            <Curriculum modules={modules} />
            <ToolsGrid tools={tools} />
            <CareerImpact />
            <InstructorCard
                name="Anjali Desai"
                role="HR Director"
                company="Infosys"
                bio="Anjali has 15+ years of experience in HR leadership. She specializes in talent management and organizational development, helping companies build high-performance cultures."
                image="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2561&auto=format&fit=crop"
                linkedin="https://linkedin.com"
            />
            <StickyCTA />
        </div>
    );
}

