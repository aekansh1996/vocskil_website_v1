import { Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const team = [
    {
        name: "Aditya Kumar",
        role: "Founder & CEO",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2670&auto=format&fit=crop",
        bio: "Ex-Google, IIM Alumnus with 10+ years in EdTech."
    },
    {
        name: "Sarah Jenkins",
        role: "Head of Curriculum",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop",
        bio: "PhD in Education, passionate about curriculum design."
    },
    {
        name: "Rajesh Singh",
        role: "Lead Instructor - Data Science",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop",
        bio: "Data Scientist at Amazon, 8+ years of industry experience."
    },
    {
        name: "Emily Chen",
        role: "Head of Student Success",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop",
        bio: "Dedicated to ensuring every student achieves their career goals."
    }
];

export function TeamSection() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Meet Our Team</h2>
                    <p className="text-lg text-slate-600">
                        We are a diverse team of educators, technologists, and industry experts working together to transform education.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, index) => (
                        <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                                    <div className="flex gap-4 text-white">
                                        <Link href="#" className="hover:text-indigo-400 transition-colors"><Linkedin className="h-5 w-5" /></Link>
                                        <Link href="#" className="hover:text-indigo-400 transition-colors"><Twitter className="h-5 w-5" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                                <p className="text-indigo-600 font-medium text-sm mb-3">{member.role}</p>
                                <p className="text-slate-500 text-sm">{member.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
