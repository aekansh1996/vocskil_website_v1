import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Careers at Vocskill | Join Our Team",
    description: "Explore career opportunities at Vocskill. Join us in our mission to transform education and skill development.",
};

export default function JobsPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-8">Career Opportunities</h1>
            <p className="text-muted-foreground mb-12">
                Join our team and help shape the future of education.
            </p>
            <div className="space-y-6">
                {[
                    { title: "Senior Instructor - Management", type: "Full-time", location: "Remote" },
                    { title: "Marketing Specialist", type: "Full-time", location: "Hybrid" },
                    { title: "Student Counselor", type: "Part-time", location: "On-site" }
                ].map((job, i) => (
                    <div key={i} className="flex items-center justify-between border p-6 rounded-xl hover:bg-muted/50 transition-colors">
                        <div>
                            <h3 className="text-xl font-bold">{job.title}</h3>
                            <div className="flex gap-4 text-sm text-muted-foreground mt-2">
                                <span>{job.type}</span>
                                <span>•</span>
                                <span>{job.location}</span>
                            </div>
                        </div>
                        <Button variant="outline">Apply Now</Button>
                    </div>
                ))}
            </div>
        </div>
    );
}
