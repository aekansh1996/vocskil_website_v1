"use client";

interface Tool {
    name: string;
    logo: string; // URL or placeholder
}

interface ToolsGridProps {
    tools: Tool[];
}

export function ToolsGrid({ tools }: ToolsGridProps) {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                        Tools You Will <span className="text-indigo-600">Master</span>
                    </h2>
                    <p className="text-lg text-slate-600">
                        Hands-on experience with the latest industry-standard tools and frameworks.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                    {tools.map((tool, index) => (
                        <div key={index} className="flex flex-col items-center gap-3 group">
                            <div className="h-20 w-20 bg-white border border-slate-100 rounded-2xl shadow-sm flex items-center justify-center p-4 group-hover:shadow-md group-hover:border-indigo-100 transition-all duration-300">
                                <img src={tool.logo} alt={tool.name} className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300" />
                            </div>
                            <span className="text-sm font-medium text-slate-500 group-hover:text-indigo-600 transition-colors">{tool.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
