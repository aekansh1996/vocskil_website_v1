"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [college, setCollege] = useState("");
    const [course, setCourse] = useState("");
    const [studentId, setStudentId] = useState("");
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setIsSubmitting(true);

        try {
            const res = await fetch("/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password, phone, college, course, studentId }),
            });

            if (res.ok) {
                router.push("/login");
            } else {
                const data = await res.json();
                setError(data.message);
            }
        } catch (err) {
            setError("An error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-screen">
            <div className="w-full max-w-2xl space-y-8 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Create an Account</h1>
                    <p className="text-gray-500 mt-3 text-lg">Join Vocskill and start your professional journey today.</p>
                </div>

                {error && (
                    <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm font-medium text-center">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Basic Info */}
                    <div className="space-y-2 col-span-1">
                        <label htmlFor="name" className="text-sm font-semibold text-gray-700">Full Name *</label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="flex h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-sm transition-all focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                            placeholder="John Doe"
                            required
                        />
                    </div>
                    <div className="space-y-2 col-span-1">
                        <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address *</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-sm transition-all focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                            placeholder="name@example.com"
                            required
                        />
                    </div>

                    <div className="space-y-2 col-span-1">
                        <label htmlFor="phone" className="text-sm font-semibold text-gray-700">Mobile Number *</label>
                        <input
                            id="phone"
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="flex h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-sm transition-all focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                            placeholder="+91 98765 43210"
                            required
                        />
                    </div>
                    <div className="space-y-2 col-span-1">
                        <label htmlFor="password" className="text-sm font-semibold text-gray-700">Password *</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="flex h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-sm transition-all focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                            required
                            placeholder="••••••••"
                        />
                    </div>

                    {/* Educational Info */}
                    <div className="space-y-2 col-span-1">
                        <label htmlFor="college" className="text-sm font-semibold text-gray-700">College Name</label>
                        <input
                            id="college"
                            type="text"
                            value={college}
                            onChange={(e) => setCollege(e.target.value)}
                            className="flex h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-sm transition-all focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                            placeholder="e.g. ABC Institute of Technology"
                        />
                    </div>
                    <div className="space-y-2 col-span-1">
                        <label htmlFor="studentId" className="text-sm font-semibold text-gray-700">Student ID / Roll No</label>
                        <input
                            id="studentId"
                            type="text"
                            value={studentId}
                            onChange={(e) => setStudentId(e.target.value)}
                            className="flex h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-sm transition-all focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                            placeholder="e.g. 2024-STUD-001"
                        />
                    </div>

                    <div className="space-y-2 col-span-2">
                        <label htmlFor="course" className="text-sm font-semibold text-gray-700">Interested Course</label>
                        <input
                            id="course"
                            type="text"
                            value={course}
                            onChange={(e) => setCourse(e.target.value)}
                            className="flex h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-sm transition-all focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                            placeholder="e.g. Data Science, Web Development"
                        />
                    </div>

                    <Button
                        type="submit"
                        className="w-full col-span-2 h-14 text-lg font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.01] transition-all active:scale-[0.99]"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Creating Account..." : "Sign Up"}
                    </Button>
                </form>

                <div className="text-center text-sm font-medium text-gray-600">
                    Already have an account?{" "}
                    <Link href="/login" className="text-primary font-bold hover:underline">Sign in</Link>
                </div>
            </div>
        </div>
    );
}
