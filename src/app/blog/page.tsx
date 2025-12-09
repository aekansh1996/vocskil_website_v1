import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Vocskill Blog | Insights & Career Advice",
    description: "Read the latest insights, career advice, and industry trends from the Vocskill team.",
};

export default function BlogPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-8">Latest News & Insights</h1>
            <p className="text-muted-foreground">
                Stay updated with the latest trends in education and career development.
            </p>
            <div className="mt-12 space-y-8">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="flex gap-6 border p-6 rounded-xl">
                        <div className="h-32 w-48 bg-muted rounded-lg shrink-0" />
                        <div>
                            <h3 className="text-xl font-bold mb-2">Blog Post Title {i}</h3>
                            <p className="text-muted-foreground">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
