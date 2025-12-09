import Image from "next/image";

const partners: string[] = [
    // "10.png", "20.png", "21.png", "23.png", "26.png", "37.png",
    // "41.png", "43.png", "45.png", "47.png", "52.png", "53.png"
];

export function PartnersSection() {
    return (
        <section className="py-12 bg-white border-b">
            <div className="container mx-auto px-4">
                <p className="text-center text-muted-foreground font-medium mb-8 uppercase tracking-widest text-sm">
                    We&apos;ve Partnered with 500+ Companies
                </p>

                <div className="relative overflow-hidden">
                    <div className="flex space-x-12 animate-marquee whitespace-nowrap">
                        {/* First set of logos */}
                        {partners.map((logo, index) => (
                            <div key={`logo-1-${index}`} className="relative h-12 w-32 shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                                <Image
                                    src={`/images/logo/${logo}`}
                                    alt={`Partner ${index + 1}`}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        ))}
                        {/* Duplicate set for seamless loop */}
                        {partners.map((logo, index) => (
                            <div key={`logo-2-${index}`} className="relative h-12 w-32 shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                                <Image
                                    src={`/images/logo/${logo}`}
                                    alt={`Partner ${index + 1}`}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
