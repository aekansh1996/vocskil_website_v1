import { Users, TrendingUp, Building2, HeartHandshake } from "lucide-react";

const stats = [
    {
        label: "Students Trained",
        value: "10,000+",
        icon: Users,
        color: "text-indigo-600"
    },
    {
        label: "Average Salary Hike",
        value: "77%",
        icon: TrendingUp,
        color: "text-green-600"
    },
    {
        label: "Hiring Partners",
        value: "500+",
        icon: Building2,
        color: "text-purple-600"
    },
    {
        label: "CSR Projects",
        value: "50+",
        icon: HeartHandshake,
        color: "text-orange-600"
    }
];

export function StatsBar() {
    return (
        <section className="bg-indigo-50 py-12 border-b border-indigo-100">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center text-center space-y-2 group hover:-translate-y-1 transition-transform duration-300">
                            <div className={`p-3 rounded-full bg-white shadow-sm ${stat.color}`}>
                                <stat.icon className="h-8 w-8" />
                            </div>
                            <p className="text-3xl md:text-4xl font-bold text-gray-900">{stat.value}</p>
                            <p className="text-sm md:text-base text-gray-600 uppercase tracking-wider font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
