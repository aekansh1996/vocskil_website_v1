import { Target, Lightbulb, Rocket, Users } from "lucide-react";

export function MissionVision() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Mission */}
                    <div className="bg-indigo-50 rounded-3xl p-10 border border-indigo-100 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Target className="h-32 w-32 text-indigo-600" />
                        </div>
                        <div className="relative z-10">
                            <div className="h-14 w-14 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mb-6">
                                <Rocket className="h-8 w-8" />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                To empower individuals with the practical skills and industry knowledge they need to succeed in the global workforce. We strive to make high-quality education accessible, affordable, and relevant to the current job market.
                            </p>
                        </div>
                    </div>

                    {/* Vision */}
                    <div className="bg-orange-50 rounded-3xl p-10 border border-orange-100 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Lightbulb className="h-32 w-32 text-orange-600" />
                        </div>
                        <div className="relative z-10">
                            <div className="h-14 w-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6">
                                <Users className="h-8 w-8" />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Vision</h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                To be the world's leading platform for career transformation, creating a future where every individual has the opportunity to realize their full potential through continuous learning and skill development.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
