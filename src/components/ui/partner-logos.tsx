import React from 'react';

const partners = [
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
    { name: "OpenAI", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" }, // Placeholder if available or just text
];

export const PartnerLogos: React.FC = () => {
    return (
        <section className="py-10 bg-white border-b border-gray-100">
            <div className="container mx-auto px-4">
                <p className="text-center text-gray-500 text-sm font-semibold uppercase tracking-wider mb-8">
                    Our Alumni Work At
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    {partners.map((partner) => (
                        <img
                            key={partner.name}
                            src={partner.logo}
                            alt={`${partner.name} logo`}
                            className="h-8 md:h-10 object-contain hover:scale-110 transition-transform duration-300"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
