import { CourseHero } from "@/components/course/course-hero";
import { HybridFeature } from "@/components/course/hybrid-feature";
import { Curriculum } from "@/components/course/curriculum";
import { ToolsGrid } from "@/components/course/tools-grid";
import { InstructorCard } from "@/components/course/instructor-card";
import { StickyCTA } from "@/components/home/sticky-cta";
import { CareerImpact } from "@/components/home/career-impact";
import { Metadata } from "next";

import { PartnerLogos } from "@/components/ui/partner-logos";
import { TestimonialCarousel } from "@/components/ui/testimonial-carousel";

export const metadata: Metadata = {
    title: "Generative AI & Machine Learning Course | Vocskill",
    description: "Master Generative AI, LLMs, and Machine Learning with our industry-leading hybrid program. Learn from experts and build real-world AI applications.",
};


const modules = [
    {
        title: "Python & AI Fundamentals",
        topics: [
            "Python Programming: Data Structures, Functions, OOP",
            "NumPy & Pandas for Data Analysis",
            "Data Visualization with Matplotlib & Seaborn",
            "Introduction to Artificial Intelligence & Machine Learning"
        ],
        duration: "3 Weeks"
    },
    {
        title: "Deep Learning & NLP",
        topics: [
            "Neural Networks & Backpropagation",
            "TensorFlow & Keras Frameworks",
            "Natural Language Processing (NLP) Basics",
            "Text Preprocessing, Tokenization, Embeddings (Word2Vec, GloVe)"
        ],
        duration: "4 Weeks"
    },
    {
        title: "Generative AI & LLMs",
        topics: [
            "Introduction to Generative Models (GANs, VAEs)",
            "Transformer Architecture (Attention Mechanism)",
            "Large Language Models (GPT-3, GPT-4, Llama 2)",
            "Prompt Engineering Best Practices"
        ],
        duration: "4 Weeks"
    },
    {
        title: "Advanced GenAI: RAG & Fine-Tuning",
        topics: [
            "Retrieval Augmented Generation (RAG) with LangChain",
            "Vector Databases (Pinecone, ChromaDB)",
            "Fine-tuning LLMs (PEFT, LoRA)",
            "Building AI Agents with AutoGPT"
        ],
        duration: "3 Weeks"
    },
    {
        title: "Capstone Project (Hybrid Lab)",
        topics: [
            "End-to-end GenAI Application Development",
            "Deployment on Cloud (AWS/Azure)",
            "Project Presentation & Code Review",
            "Mock Interviews & Resume Building"
        ],
        duration: "2 Weeks"
    }
];

const tools = [
    { name: "Python", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
    { name: "TensorFlow", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg" },
    { name: "PyTorch", logo: "https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg" },
    { name: "OpenAI", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
    { name: "LangChain", logo: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4" },
    { name: "HuggingFace", logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
];

export default function GenerativeAICoursePage() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">




            <div id="enroll" className="scroll-mt-20">
                <CourseHero
                    title="Master Generative AI & LLMs"
                    description="Become a GenAI expert with our industry-leading Hybrid program. Learn to build, fine-tune, and deploy LLM applications like ChatGPT."
                    badge="Most Popular Course 2024"
                    duration="4 Months"
                    mode="Hybrid (Online + Offline)"
                    nextBatch="Starts Tomorrow"
                    category="AI & Machine Learning"
                    students={1200}
                    rating={4.8}
                    image="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2532&auto=format&fit=crop"
                    price={4999}
                    courseId="gen-ai-001"
                />
            </div>

            <PartnerLogos />

            {/* Pricing Section - Glassmorphism */}
            <section className="py-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 z-0"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto bg-white/30 backdrop-blur-md border border-white/50 rounded-2xl p-8 shadow-xl text-center">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Limited Time Offer</h2>
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <p className="text-2xl font-medium text-gray-500 line-through">₹23,600</p>
                            <p className="text-5xl font-extrabold text-indigo-600">₹4,999</p>
                        </div>
                        <p className="text-gray-600 mb-8">Get full access to the hybrid program, live mentorship, and career support.</p>
                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-10 rounded-full shadow-lg transform transition hover:scale-105">
                            Secure Your Spot
                        </button>
                    </div>
                </div>
            </section>

            {/* Why Hybrid Learning */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Hybrid Learning?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-gray-50 transition">
                            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-6">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m2 0a2 2 0 100-4 2 2 0 000 4zm-8 0a2 2 0 100-4 2 2 0 000 4z" /></svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Live Labs & Mentorship</h3>
                            <p className="text-gray-600">Hands‑on labs with real‑time guidance from industry experts.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-gray-50 transition">
                            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-6">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" /></svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Flexible Schedule</h3>
                            <p className="text-gray-600">Attend in‑person sessions or join online live streams.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-gray-50 transition">
                            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-6">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Career‑Ready Projects</h3>
                            <p className="text-gray-600">Build a portfolio of AI solutions that employers love.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trainer Focus */}
            <section className="py-16 bg-indigo-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Trainers: Practitioners, Not Just Theorists</h2>
                    <p className="max-w-3xl mx-auto text-xl text-indigo-100 leading-relaxed">Dr. Arjun Mehta and his team spend 70% of class time on live coding, debugging, and one‑on‑one problem solving. You’ll get personal feedback on every project, ensuring you master the concepts and can apply them in real‑world scenarios.</p>
                </div>
            </section>

            {/* Future‑Proof Your Career */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Future‑Proof Your Career</h2>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                        <div className="md:w-1/2">
                            <p className="text-lg text-gray-600 mb-6">AI is reshaping every industry. Our hybrid program equips you with the skills that companies are actively hiring for – from prompt engineering to building production‑grade LLM services.</p>
                            <ul className="space-y-4">
                                {[
                                    "Hands‑on projects that mimic real‑world AI pipelines.",
                                    "Mentor‑driven code reviews and interview prep.",
                                    "Access to exclusive AI toolkits and cloud credits.",
                                    "Placement assistance with top tech firms."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-700">
                                        <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="md:w-1/2">
                            <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop" alt="Future career" className="rounded-2xl shadow-2xl transform hover:scale-105 transition duration-500" />
                        </div>
                    </div>
                </div>
            </section>

            <HybridFeature />
            <Curriculum modules={modules} />
            <ToolsGrid tools={tools} />
            <CareerImpact />

            <div className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Meet Your Instructor</h2>
                    <InstructorCard
                        name="Dr. Arjun Mehta"
                        role="Lead AI Scientist"
                        company="Google DeepMind"
                        bio="Dr. Arjun has over 12 years of experience in AI research and development. He has published 20+ papers in top conferences and led the development of large-scale NLP models at Google."
                        image="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop"
                        linkedin="https://linkedin.com"
                    />
                </div>
            </div>

            <TestimonialCarousel />
            <StickyCTA />
        </div>
    );
}
