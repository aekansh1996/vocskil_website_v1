import { prisma } from "@/lib/prisma";
import { Users } from "lucide-react";

export const dynamic = 'force-dynamic';

export default async function AdminUsersPage() {
    const users = await prisma.user.findMany({
        orderBy: { createdAt: 'desc' },
        take: 100
    });

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-slate-900">Student Registrations</h1>
                <div className="bg-white px-4 py-2 rounded-lg border border-slate-200">
                    <span className="text-sm text-slate-500 font-medium">Total: {users.length}</span>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                            <th className="px-6 py-4 font-medium text-slate-900">Name</th>
                            <th className="px-6 py-4 font-medium text-slate-900">Email</th>
                            <th className="px-6 py-4 font-medium text-slate-900">Phone</th>
                            <th className="px-6 py-4 font-medium text-slate-900">College</th>
                            <th className="px-6 py-4 font-medium text-slate-900">Joined</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                        {users.map((user) => (
                            <tr key={user.id} className="hover:bg-slate-50 transition-colors">
                                <td className="px-6 py-4 font-medium text-slate-900">{user.name || 'N/A'}</td>
                                <td className="px-6 py-4 text-slate-600">{user.email}</td>
                                <td className="px-6 py-4 text-slate-600">{user.phone || 'N/A'}</td>
                                <td className="px-6 py-4 text-slate-600">{user.college || 'N/A'}</td>
                                <td className="px-6 py-4 text-slate-500 text-xs">
                                    {new Date(user.createdAt).toLocaleDateString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
