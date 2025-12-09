import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { BookOpen, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await auth();

    if (!session) {
        redirect("/login");
    }

    return (
        <div className="flex min-h-screen bg-slate-50">
            <header className="fixed top-0 w-full bg-white border-b border-slate-200 z-50">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/dashboard" className="font-bold text-xl text-indigo-600">
                        Vocskill Learning
                    </Link>

                    <div className="flex items-center gap-4">
                        <span className="text-sm text-slate-600">Welcome, {session.user.name}</span>
                        <form action={async () => {
                            "use server";
                            // await signOut();
                        }}>
                            <Button variant="ghost" size="sm" className="text-slate-500 hover:text-red-600">
                                <LogOut className="h-4 w-4 mr-2" />
                                Sign Out
                            </Button>
                        </form>
                    </div>
                </div>
            </header>

            <main className="flex-1 container mx-auto px-4 pt-24 pb-12">
                {children}
            </main>
        </div>
    );
}
