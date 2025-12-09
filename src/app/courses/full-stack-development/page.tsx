import { CourseHero } from "@/components/course/course-hero";
import { HybridFeature } from "@/components/course/hybrid-feature";
import { Curriculum } from "@/components/course/curriculum";
import { ToolsGrid } from "@/components/course/tools-grid";
import { InstructorCard } from "@/components/course/instructor-card";
import { StickyCTA } from "@/components/home/sticky-cta";
import { CareerImpact } from "@/components/home/career-impact";

const modules = [
    {
        title: "Frontend Development (React)",
        topics: [
            "HTML5, CSS3, JavaScript (ES6+)",
            "React.js Fundamentals (Hooks, Context)",
            "State Management (Redux/Zustand)",
            "Tailwind CSS & Responsive Design"
        ],
        duration: "8 Weeks"
    },
    {
        title: "Backend Development (Node.js)",
        topics: [
            "Node.js & Express.js",
            "RESTful API Design",
            "Authentication & Authorization (JWT)",
            "Middleware & Error Handling"
        ],
        duration: "6 Weeks"
    },
    {
        title: "Database Management",
        topics: [
            "MongoDB & Mongoose (NoSQL)",
            "PostgreSQL (SQL Basics)",
            "Database Design & Indexing",
            "Aggregation Pipelines"
        ],
        duration: "4 Weeks"
    },
    {
        title: "DevOps & Deployment",
        topics: [
            "Git & GitHub Version Control",
            "Docker & Containerization",
            "CI/CD Pipelines",
            "Deploying on AWS/Vercel"
        ],
        duration: "4 Weeks"
    },
    {
        title: "Capstone Project",
        topics: [
            "Full Stack E-commerce App",
            "Real-time Chat Application",
            "Code Review & Optimization",
            "Mock Technical Interviews"
        ],
        duration: "4 Weeks"
    }
];

const tools = [
    { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "Node.js", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
    { name: "MongoDB", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" },
    { name: "Express", logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" },
    { name: "Tailwind", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    { name: "Git", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" },
];

export default function FullStackCoursePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <CourseHero
                title="Full Stack Web Development"
                description="Become a complete MERN Stack Developer. Build scalable web applications from scratch with our intensive Hybrid program."
                badge="High Salary"
                duration="8 Months"
                mode="Hybrid (Online + Offline)"
                nextBatch="Starts 5th Sep"
                category="Full Stack Development"
                students={1800}
                rating={4.9}
                image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=400&auto=format&fit=crop"
                price={4999}
                courseId="full-stack-001"
            />
            <HybridFeature />
            <Curriculum modules={modules} />
            <ToolsGrid tools={tools} />
            <CareerImpact />
            <InstructorCard
                name="Vikram Singh"
                role="Tech Lead"
                company="Swiggy"
                bio="Vikram is a Full Stack expert with 9+ years of experience building scalable systems. He loves coding and mentoring the next generation of developers."
                image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2574&auto=format&fit=crop"
                linkedin="https://linkedin.com"
            />
            <StickyCTA />
        </div>
    );
}
