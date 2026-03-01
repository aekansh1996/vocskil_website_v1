import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Award, User, Calendar, ExternalLink } from "lucide-react";

export default async function AdminCertificatesPage() {
    const certificates = await prisma.certificate.findMany({
        include: {
            user: true,
            course: true,
        },
        orderBy: { issuedAt: "desc" }
    });

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-slate-900">Issued Certificates</h1>
                <p className="text-slate-500 mt-2">Monitor and manage certificates earned by your students.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                            <th className="px-6 py-4 text-sm font-semibold text-slate-700 uppercase tracking-wider">Student</th>
                            <th className="px-6 py-4 text-sm font-semibold text-slate-700 uppercase tracking-wider">Course</th>
                            <th className="px-6 py-4 text-sm font-semibold text-slate-700 uppercase tracking-wider">Date Issued</th>
                            <th className="px-6 py-4 text-sm font-semibold text-slate-700 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-4 text-sm font-semibold text-slate-700 uppercase tracking-wider text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {certificates.map((cert) => (
                            <tr key={cert.id} className="hover:bg-slate-50/50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xs">
                                            {cert.user.name?.charAt(0) || "S"}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-slate-900">{cert.user.name}</p>
                                            <p className="text-xs text-slate-500">{cert.user.email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <p className="text-sm font-medium text-slate-700">{cert.course.title}</p>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2 text-sm text-slate-500">
                                        <Calendar className="h-3.5 w-3.5" />
                                        {new Date(cert.issuedAt).toLocaleDateString()}
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                        Active
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <Button variant="ghost" size="sm" className="text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 font-semibold">
                                        <ExternalLink className="h-4 w-4 mr-2" />
                                        View PDF
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {certificates.length === 0 && (
                    <div className="p-12 text-center">
                        <Award className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                        <p className="text-slate-500 font-medium">No certificates issued yet.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
