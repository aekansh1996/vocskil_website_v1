import { CheckCircle, Award, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const features = [
    {
        title: "Industry-Relevant Curriculum",
        description: "Our courses are designed by industry experts to ensure you learn what matters most.",
        icon: BookOpen
    },
    {
        title: "Hands-on Projects",
        description: "Gain practical experience by working on real-world projects and case studies.",
        icon: CheckCircle
    },
    {
        title: "Expert Mentorship",
        description: "Get guidance from experienced professionals who have walked the path before you.",
        icon: Users
    },
    {
        title: "Recognized Certification",
        description: "Earn certificates that are valued by top employers across the globe.",
        icon: Award
    }
];

export function WhyChooseUs() {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                            <img
                                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2670&auto=format&fit=crop"
                                alt="Students learning"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-100 rounded-full -z-10 blur-3xl opacity-50" />
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-100 rounded-full -z-10 blur-3xl opacity-50" />

                        <div className="absolute bottom-8 right-8 bg-white p-6 rounded-xl shadow-lg max-w-xs hidden md:block animate-bounce-slow">
                            <div className="flex items-center gap-4 mb-2">
                                <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                    <CheckCircle className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900">95% Success Rate</p>
                                    <p className="text-xs text-slate-500">in career transitions</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                            Why Choose <span className="text-blue-600">Vocskill?</span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-8">
                            We are dedicated to bridging the gap between education and employability. Our mission is to empower you with the skills needed to thrive in the modern workforce.
                        </p>

                        <div className="space-y-8">
                            {features.map((feature, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="shrink-0 h-12 w-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600">
                                        <feature.icon className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                                        <p className="text-slate-600">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Button asChild size="lg" className="mt-10 bg-blue-600 hover:bg-blue-700 text-white px-8">
                            <Link href="/about-us">Learn More About Us</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
