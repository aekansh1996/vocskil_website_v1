import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Priya Sharma",
        role: "HR Executive at Deloitte",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop",
        content: "The HR Analytics course at Vocskill was a game-changer for my career. The practical approach and mentorship helped me land my dream job."
    },
    {
        name: "Rahul Verma",
        role: "Data Analyst at Amazon",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop",
        content: "I was skeptical about online learning, but Vocskill's interactive sessions and project-based learning made it easy to master complex data concepts."
    },
    {
        name: "Anjali Gupta",
        role: "Digital Marketer at Zomato",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop",
        content: "The Digital Marketing program is comprehensive and up-to-date. I learned strategies that I could immediately apply in my current role."
    }
];

export function TestimonialsSection() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">What Our Students Say</h2>
                    <p className="text-lg text-gray-600">
                        Hear from our alumni who have transformed their careers with Vocskill.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 relative">
                            <Quote className="absolute top-8 right-8 h-8 w-8 text-indigo-100 fill-current" />

                            <div className="flex items-center gap-1 text-amber-500 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-current" />
                                ))}
                            </div>

                            <p className="text-gray-600 mb-8 italic relative z-10">
                                &quot;{testimonial.content}&quot;
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-200">
                                    <img src={testimonial.image} alt={testimonial.name} className="h-full w-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
