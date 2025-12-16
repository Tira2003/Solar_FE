import { useUser } from "@clerk/clerk-react";
import { useGetAdminDashboardStatsQuery } from "@/lib/redux/query";
import StatCard from "./components/dashboard/StatCard";
import EnergyGenerationChart from "./components/dashboard/EnergyGenerationChart";
import TabDataSection from "./components/dashboard/TabDataSection";
import {
  Zap,
  Wrench,
  Power,
  AlertTriangle,
  Users,
  FileText,
} from "lucide-react";

/**
 * AdminDashboardPage
 * Main admin dashboard displaying system overview, energy generation,
 * solar unit status, and actionable lists
 */
export default function AdminDashboardPage() {
  const { user } = useUser();
  const { data: stats, isLoading, isError } = useGetAdminDashboardStatsQuery();

  if (isLoading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
          <p className="text-gray-500">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex h-96 items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-red-500 font-semibold">
            Failed to load dashboard
          </p>
          <p className="text-gray-500 mt-2">
            Please try refreshing the page
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="space-y-6">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {user?.firstName || "Admin"}!
          </h1>
          <p className="mt-1 text-gray-500">
            Manage and analyze your solar energy performance
          </p>
        </div>

      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Energy Generation Chart */}
        <div className="lg:col-span-1">
          <EnergyGenerationChart />
        </div>

        {/* Right Column - Stats Cards */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Solar Unit Status Cards */}
            <StatCard
              title="Active Units"
              subtitle="Solar Units"
              value={stats?.solarUnits?.active ?? 0}
              variant="active"
              icon={Zap}
            />
            <StatCard
              title="Maintenance"
              subtitle="Solar Units"
              value={stats?.solarUnits?.maintenance ?? 0}
              variant="maintenance"
              icon={Wrench}
            />
            <StatCard
              title="Inactive Units"
              subtitle="Solar Units"
              value={stats?.solarUnits?.inactive ?? 0}
              variant="inactive"
              icon={Power}
            />
            
            {/* Anomalies Card */}
            <StatCard
              title="Active Anomalies"
              subtitle="System Alerts"
              value={stats?.anomalies?.total ?? 0}
              variant="warning"
              icon={AlertTriangle}
            />
            
            {/* Users Card */}
            <StatCard
              title="Total Users"
              subtitle="Registered"
              value={stats?.users?.total ?? 0}
              variant="info"
              icon={Users}
            />
            
            {/* Pending Invoices Card */}
            <StatCard
              title="Pending Invoices"
              subtitle="Billing"
              value={stats?.invoices?.pending ?? 0}
              variant="default"
              icon={FileText}
            />
          </div>
        </div>
      </div>

      {/* Tabbed Data Section */}
      <TabDataSection
        invoiceCount={stats?.invoices?.pending ?? 0}
        anomalyCount={stats?.anomalies?.critical ?? 0}
      />
    </main>
  );
}
