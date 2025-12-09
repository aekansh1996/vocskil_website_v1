import { CourseHero } from "@/components/course/course-hero";
import { HybridFeature } from "@/components/course/hybrid-feature";
import { Curriculum } from "@/components/course/curriculum";
import { ToolsGrid } from "@/components/course/tools-grid";
import { InstructorCard } from "@/components/course/instructor-card";
import { StickyCTA } from "@/components/home/sticky-cta";
import { CareerImpact } from "@/components/home/career-impact";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Data Analytics with Python Course | Vocskill",
    description: "Launch your career as a Data Analyst. Learn Python, SQL, Excel, and PowerBI with hands-on projects in our Hybrid program.",
};


const modules = [
    {
        title: "Data Analysis Fundamentals",
        topics: [
            "Introduction to Data Analytics",
            "Excel for Data Analysis (Advanced Formulas, Pivot Tables)",
            "Statistics for Data Science",
            "Data Cleaning & Preprocessing"
        ],
        duration: "3 Weeks"
    },
    {
        title: "Python for Data Science",
        topics: [
            "Python Basics & Data Structures",
            "NumPy & Pandas for Data Manipulation",
            "Exploratory Data Analysis (EDA)",
            "Data Visualization with Matplotlib & Seaborn"
        ],
        duration: "4 Weeks"
    },
    {
        title: "SQL & Databases",
        topics: [
            "Relational Databases & SQL Basics",
            "Advanced SQL Queries (Joins, Subqueries)",
            "Database Design & Normalization",
            "Connecting Python with SQL"
        ],
        duration: "3 Weeks"
    },
    {
        title: "Data Visualization & BI",
        topics: [
            "Introduction to Tableau / PowerBI",
            "Creating Interactive Dashboards",
            "Storytelling with Data",
            "Business Intelligence Best Practices"
        ],
        duration: "3 Weeks"
    },
    {
        title: "Capstone Project",
        topics: [
            "Real-world Data Analysis Project",
            "Predictive Modeling Basics",
            "Final Presentation",
            "Resume & Interview Prep"
        ],
        duration: "2 Weeks"
    }
];

const tools = [
    { name: "Python", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
    { name: "Excel", logo: "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg" },
    { name: "SQL", logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" },
    { name: "Tableau", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png" },
    { name: "PowerBI", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
    { name: "Pandas", logo: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg" },
];

export default function DataAnalyticsCoursePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <CourseHero
                title="Data Analytics with Python"
                description="Launch your career as a Data Analyst. Learn Python, SQL, Excel, and PowerBI with hands-on projects in our Hybrid program."
                badge="Job Ready"
                duration="5 Months"
                mode="Hybrid (Online + Offline)"
                nextBatch="Starts Tomorrow"
                category="Data Science & Analytics"
                students={1500}
                rating={4.9}
                image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
                price={4999}
                courseId="data-analytics-001"
            />
            <HybridFeature />
            <Curriculum modules={modules} />
            <ToolsGrid tools={tools} />
            <CareerImpact />
            <InstructorCard
                name="Rohit Verma"
                role="Senior Data Analyst"
                company="Microsoft"
                bio="Rohit is a data enthusiast with extensive experience in analytics and visualization. He mentors students to bridge the gap between theoretical knowledge and industry application."
                image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2670&auto=format&fit=crop"
                linkedin="https://linkedin.com"
            />
            <StickyCTA />
        </div>
    );
}
