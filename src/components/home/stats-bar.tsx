import { Users, GraduationCap, Handshake } from "lucide-react";

const stats = [
    {
        label: "Colleges Partnered",
        value: "65+",
        icon: GraduationCap,
        color: "text-blue-600"
    },
    {
        label: "Students Trained",
        value: "5000+",
        icon: Users,
        color: "text-indigo-600"
    },
    {
        label: "Industry Partners",
        value: "100+",
        icon: Handshake,
        color: "text-emerald-600"
    }
];

export function StatsBar() {
    return (
        <section className="bg-white py-16 border-b border-slate-100">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center gap-12 md:gap-24 lg:gap-32">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center text-center space-y-4 group">
                            <div className={`p-4 rounded-2xl bg-slate-50 shadow-sm ${stat.color} group-hover:bg-white group-hover:shadow-md transition-all duration-300`}>
                                <stat.icon className="h-10 w-10" />
                            </div>
                            <div className="space-y-1">
                                <p className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">{stat.value}</p>
                                <p className="text-sm md:text-base text-slate-500 font-bold uppercase tracking-widest">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
