import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";
import { redirect } from "next/navigation";
import Link from "next/link";
import {
    LayoutDashboard,
    BookOpen,
    Users,
    Settings,
    LogOut,
    FileText,
    Award,
    Globe,
    Bell,
    Search,
    User as UserIcon,
    ChevronDown,
    Plus,
    Menu
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getServerSession(authOptions);
    const sessionUser = session?.user as any;

    if (!session || session.user.role !== "ADMIN") {
        redirect("/login");
    }

    const navigation = [
        { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
        { name: 'Courses', href: '/admin/courses', icon: BookOpen },
        { name: 'Exams', href: '/admin/exams', icon: FileText },
        { name: 'Certificates', href: '/admin/certificates', icon: Award },
        { name: 'Users', href: '/admin/users', icon: Users },
        { name: 'Settings', href: '/admin/settings', icon: Settings },
    ];

    return (
        <div className="flex h-screen bg-[#f0f2f5] overflow-hidden">
            {/* Sidebar */}
            <aside className="w-64 bg-[#1e1e2d] text-slate-300 hidden lg:flex flex-col shadow-2xl z-30">
                <div className="h-16 flex items-center px-6 bg-[#1b1b28] border-b border-white/5">
                    <Link href="/admin" className="flex items-center gap-2 font-black text-xl text-white tracking-tighter">
                        <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
                            <LayoutDashboard className="h-5 w-5" />
                        </div>
                        VOCSKILL <span className="text-indigo-400 font-normal">CMS</span>
                    </Link>
                </div>

                <div className="flex-1 py-6 px-4 space-y-8 overflow-y-auto">
                    <div>
                        <p className="px-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Main Menu</p>
                        <nav className="space-y-1">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-white/5 hover:text-white rounded-xl transition-all group"
                                >
                                    <item.icon className="h-5 w-5 group-hover:text-indigo-400 transition-colors" />
                                    <span className="text-sm font-medium">{item.name}</span>
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div>
                        <p className="px-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Quick Actions</p>
                        <div className="space-y-1 px-4">
                            <Button asChild variant="ghost" className="w-full justify-start text-slate-400 hover:bg-white/5 hover:text-white h-10 px-0">
                                <Link href="/admin/courses/new">
                                    <Plus className="h-4 w-4 mr-2" /> Add New Course
                                </Link>
                            </Button>
                            <Button asChild variant="ghost" className="w-full justify-start text-slate-400 hover:bg-white/5 hover:text-white h-10 px-0">
                                <Link href="/">
                                    <Globe className="h-4 w-4 mr-2" /> Visit Website
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="p-4 bg-[#1b1b28] border-t border-white/5">
                    <div className="bg-white/5 rounded-2xl p-4 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 border border-indigo-500/30">
                            <UserIcon className="h-5 w-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-xs font-bold text-white truncate">{sessionUser.name || 'Admin'}</p>
                            <p className="text-[10px] text-slate-500 truncate">System Administrator</p>
                        </div>
                        <form action="/api/auth/signout" method="POST">
                            <button type="submit" className="text-slate-500 hover:text-red-400 transition-colors">
                                <LogOut className="h-4 w-4" />
                            </button>
                        </form>
                    </div>
                </div>
            </aside>

            {/* Content Area */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                {/* Header */}
                <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 z-20">
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon" className="lg:hidden">
                            <Menu className="h-5 w-5" />
                        </Button>
                        <div className="relative hidden md:block">
                            <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search everything..."
                                className="pl-10 pr-4 py-2 bg-slate-100 rounded-full text-sm border-none focus:ring-2 focus:ring-indigo-500 outline-none w-64 transition-all focus:w-80"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon" className="relative text-slate-500">
                            <Bell className="h-5 w-5" />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                        </Button>
                        <div className="h-8 w-[1px] bg-slate-200 mx-2"></div>
                        <Button variant="ghost" className="gap-2 px-2 text-slate-700 font-semibold">
                            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                                {sessionUser.name?.[0] || 'A'}
                            </div>
                            <span className="hidden sm:block text-sm">{sessionUser.name || 'Admin'}</span>
                            <ChevronDown className="h-4 w-4 text-slate-400" />
                        </Button>
                    </div>
                </header>

                {/* Main Content */}
                <main className="flex-1 overflow-y-auto p-4 md:p-8">
                    <div className="max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
