"use client";

const partners = [
    { name: "NSDC", subtitle: "National Skill Development Corporation" },
    { name: "Skill India", subtitle: "Mission" },
    { name: "Sector Skill Councils", subtitle: "Industry Aligned" },
    { name: "State Skill Missions", subtitle: "MSSDS etc." },
    { name: "Govt Departments", subtitle: "Institutional Partners" },
    { name: "CSR Foundations", subtitle: "Corporate Partners" },
    { name: "Colleges & Universities", subtitle: "Educational Partners" }
];

export function PartnershipsGrid() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-6">Government & Institutional Partnerships</h2>
                    <p className="text-xl text-slate-600">
                        Collaborating with national and state-level organizations to scale skill development across India.
                    </p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                    {partners.map((partner, idx) => (
                        <div 
                            key={idx} 
                            className="flex flex-col items-center justify-center p-6 border border-slate-100 rounded-xl bg-slate-50/50 hover:bg-white hover:shadow-lg transition-all duration-300 group"
                        >
                            <div className="h-12 flex items-center justify-center mb-4">
                                {/* Using text for logos as placeholders for now */}
                                <span className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider text-center">
                                    {partner.name}
                                </span>
                            </div>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter text-center">
                                {partner.subtitle}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
