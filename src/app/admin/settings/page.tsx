import { Settings as SettingsIcon } from "lucide-react";

export default function AdminSettingsPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-slate-900">System Settings</h1>
            </div>

            <div className="bg-white p-12 rounded-2xl shadow-sm border border-slate-200 text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <SettingsIcon className="h-8 w-8 text-slate-400" />
                </div>
                <h3 className="text-lg font-bold text-slate-800">Advanced Settings</h3>
                <p className="text-slate-500 max-w-sm mx-auto mt-2">
                    System configuration and platform adjustments will appear here. Currently managed via environment variables.
                </p>
            </div>
        </div>
    );
}
