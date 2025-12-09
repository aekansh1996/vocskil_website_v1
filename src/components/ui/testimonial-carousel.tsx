import React from 'react';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    image: string;
    content: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Priya Sharma",
        role: "Data Scientist",
        company: "Microsoft",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
        content: "The Generative AI course at Vocskill was a game-changer. The hands-on labs on LLM fine-tuning gave me the confidence to lead AI projects at work."
    },
    {
        id: 2,
        name: "Rahul Verma",
        role: "AI Engineer",
        company: "Adobe",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
        content: "Excellent curriculum! The focus on RAG and vector databases was exactly what I needed. The mentors are top-notch industry experts."
    },
    {
        id: 3,
        name: "Ananya Gupta",
        role: "Product Manager",
        company: "Flipkart",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
        content: "As a PM, understanding the capabilities of GenAI is crucial. This course demystified the tech and helped me spot high-impact use cases."
    }
];

export const TestimonialCarousel: React.FC = () => {
    return (
        <section className="py-20 bg-gray-900 text-white overflow-hidden">
            <div className="container mx-auto px-4 mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Learners Say</h2>
                <p className="text-gray-400">Join hundreds of professionals transforming their careers.</p>
            </div>

            {/* Simple horizontal scroll container for now, can be enhanced with a library later */}
            <div className="flex overflow-x-auto pb-8 gap-6 px-4 md:px-0 md:justify-center snap-x snap-mandatory hide-scrollbar">
                {testimonials.map((testimonial) => (
                    <div
                        key={testimonial.id}
                        className="flex-shrink-0 w-80 md:w-96 bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl snap-center hover:bg-white/10 transition-colors duration-300"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-12 h-12 rounded-full object-cover border-2 border-indigo-500"
                            />
                            <div>
                                <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                                <p className="text-sm text-gray-400">{testimonial.role} @ {testimonial.company}</p>
                            </div>
                        </div>
                        <p className="text-gray-300 italic leading-relaxed">"{testimonial.content}"</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
