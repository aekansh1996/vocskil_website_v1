"use client";

import { CollegeBenefits } from "@/components/home/CollegeBenefits";
import { GraduationCap, BookOpen, CheckCircle2, Calendar, Users } from "lucide-react";

const partnersList = [
    { name: "Raheja College", type: "Integrated Skill Hub" },
    { name: "KBP College", type: "NSDC Skill Center" },
    { name: "St Andrew's College", type: "Add-on Certifications" },
    { name: "DMTIMS", type: "Management Specializations" },
    { name: "Patkar Verde College", type: "Persona Development" },
    { name: "Indira Gandhi College", type: "Tech Lab Partner" },
    { name: "Mithibai College", type: "Academic Partner" },
    { name: "Indira Institute (IIBM)", type: "Skills Partner" },
    { name: "SIES Sion West", type: "Workshop Partner" },
    { name: "KLE College", type: "Certification Partner" },
    { name: "JSM College", type: "Vocational Partner" },
    { name: "Vishwaniketan College", type: "Strategic Partner" }
];

const comprehensiveData = [
    {
        college: "Raheja College of Science and Commerce",
        years: "2021 - 2026",
        highlights: "5000+ Students Impacted",
        courses: [
            "Digital Marketing", "Financial Modelling", "Graphic Design", "GST & Tally", 
            "Content Writing", "Web Designing", "Ethical Hacking", "Cyber Security", 
            "Entrepreneurship, Innovation and Design Thinking", "Business Analytics", 
            "Fintech & Blockchain", "Brand Marketing", "Search Engine Optimization",
            "Graphics and Animation", "Investment Analysis", "Cybersecurity in Banking",
            "AI In Digital Marketing", "IOT Data Analytics", "Social Media Marketing",
            "AI In Presentation Skills", "Generative AI Agents", "CDME"
        ]
    },
    {
        college: "KBP College (Vashi)",
        years: "2023 - 2026",
        highlights: "Commerce, BBI & Economics Depts",
        courses: [
            "Stock Market & Investment Management", "Power BI", "Mutual Funds", 
            "HR Analytics", "GST & Taxation", "Fintech & Blockchain", 
            "Competancy Mapping", "AI in Digital Marketing", "Advance Excel",
            "AI in Economics"
        ]
    },
    {
        college: "St Andrew's College",
        years: "2022 - 2026",
        highlights: "Arts, Science & Commerce",
        courses: [
            "Business Analytics", "Content Writing", "Corporate Banking", 
            "Ethical Hacking & Cybersecurity", "Fintech & Blockchain", 
            "Advance Excel with Chat GPT"
        ]
    },
    {
        college: "DMTIMS",
        years: "2023 - 2026",
        highlights: "Post-Graduate Focus",
        courses: [
            "HR Analytics", "Financial Modeling", "Digital Marketing", 
            "Business Analytics", "Advance Excel", "AI in Digital Marketing", 
            "Design Thinking & Entrepreneurship"
        ]
    },
    {
        college: "Indira Gandhi College (Ghansoli)",
        years: "2024 - 2026",
        highlights: "Future Tech Skills",
        courses: [
            "AR/VR", "IOT", "Deep Learning", "AWS & Azure-Cloud Computing", "Power BI"
        ]
    },
    {
        college: "SIES - Sion West",
        years: "2021 - 2022",
        highlights: "Business Analytics Focused",
        courses: ["Business Analytics"]
    },
    {
        college: "Patkar Verde College of Art and Science",
        years: "2022 - 2023",
        highlights: "788+ Students Impacted",
        courses: ["Persona Blooming"]
    },
    {
        college: "Indira Institute (IIBM)",
        years: "2023 - 2024",
        highlights: "Sales & Entrepreneurship",
        courses: ["Sales Training", "Design Thinking & Entrepreneurship", "Advance Excel"]
    },
    {
        college: "Mithibai College",
        years: "2025 - 2026",
        highlights: "AI & Analytics Focused",
        courses: ["AI in Economics", "Business Analytics"]
    },
    {
        college: "KLE College",
        years: "2025 - 2026",
        highlights: "Data Visualization Lab",
        courses: ["Power BI"]
    },
    {
        college: "JSM College",
        years: "2022 - 2023",
        highlights: "Digital Transformation",
        courses: ["Digital Marketing"]
    }
];

export default function CollegePartnershipsPage() {
    return (
        <main className="min-h-screen">
            <div className="bg-indigo-600 text-white py-24 relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-5xl font-bold mb-6">Institutional Excellence Unit</h1>
                    <p className="text-xl text-indigo-100 max-w-2xl mx-auto leading-relaxed">
                        VocSkill's Higher Education division partners with India's leading colleges to implement NEP 2020-compliant industry certifications.
                    </p>
                </div>
            </div>
            
            <CollegeBenefits />
            
            {/* Detailed Course Matrix */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">Comprehensive Partnership Track Record</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                        {comprehensiveData.map((item, idx) => (
                            <div key={idx} className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm hover:border-indigo-200 hover:shadow-xl transition-all group">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-indigo-600 p-4 rounded-2xl text-white">
                                            <GraduationCap className="h-8 w-8" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-slate-900 leading-tight">{item.college}</h3>
                                            <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs mt-1">
                                                <Calendar className="h-3 w-3" /> {item.years}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2">
                                        <Users className="h-4 w-4" /> {item.highlights}
                                    </div>
                                </div>
                                
                                <div className="space-y-4">
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Courses Implemented:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {item.courses.map((course, cIdx) => (
                                            <span key={cIdx} className="bg-slate-50 text-slate-700 px-3 py-2 rounded-lg text-xs font-semibold border border-slate-100 group-hover:bg-indigo-50 group-hover:border-indigo-100 transition-colors">
                                                {course}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                
                                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-widest">
                                    <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Authorized Implementation Partner
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Logo Cloud Section */}
            <section className="py-24 bg-slate-50 border-y border-slate-100">
                <div className="container mx-auto px-4">
                     <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-12">Our Collaboration Network</p>
                    <div className="flex flex-wrap justify-center gap-x-12 gap-y-10 items-center">
                        {partnersList.map((partner, i) => (
                            <div key={i} className="flex flex-col items-center gap-2 group">
                                <span className="text-sm font-bold text-slate-600 group-hover:text-indigo-600 transition-colors">{partner.name}</span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{partner.type}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
