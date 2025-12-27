import { SettingsTab } from "./components/SettingsTab";
import { Settings } from "lucide-react";

export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg shadow-blue-500/25">
              <Settings className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
              <p className="text-gray-500 mt-1">
                Configure system preferences and admin settings
              </p>
            </div>
          </div>
        </div>

        {/* Settings Content */}
        <SettingsTab />
      </div>
    </main>
  );
}
