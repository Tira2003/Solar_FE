import { useGetSolarUnitForUserQuery, useGetAnomaliesQuery, useGetAnomalyStatsQuery, useTriggerSyncAndDetectMutation } from "@/lib/redux/query";
import DataCard from "./components/DataCard";
import AnomalyList from "./components/AnomalyList";
import AnomalyChart from "./components/AnomalyChart";
import AnomalyFilters from "./components/AnomalyFilters";
import AnomalyStatsCard from "./components/AnomalyStatsCard";
import { useUser } from "@clerk/clerk-react";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertTriangle, BarChart3, Activity, RefreshCw } from "lucide-react";
import Loader from "@/components/loader";

const AnomaliesPage = () => {
  const { user, isLoaded } = useUser();
  const [filters, setFilters] = useState({ type: "", severity: "", status: "" });
  const [activeTab, setActiveTab] = useState("detected");

  const { data: solarUnit, isLoading: isLoadingSolarUnit, isError: isErrorSolarUnit, error: errorSolarUnit } = useGetSolarUnitForUserQuery();
  
  // Fetch anomalies from backend with filters
  const { data: anomalies, isLoading: isLoadingAnomalies, refetch: refetchAnomalies } = useGetAnomaliesQuery(filters);
  
  // Fetch anomaly stats
  const { data: stats, isLoading: isLoadingStats, refetch: refetchStats } = useGetAnomalyStatsQuery();

  // Manual trigger for sync and detect
  const [triggerSyncAndDetect, { isLoading: isSyncing }] = useTriggerSyncAndDetectMutation();

  const handleSyncAndDetect = async () => {
    try {
      console.log("Triggering sync and detect...");
      await triggerSyncAndDetect().unwrap();
      console.log("Sync and detect completed, refetching data...");
      refetchAnomalies();
      refetchStats();
    } catch (error) {
      console.error("Sync and detect failed:", error);
      alert("Sync and detect failed. Check the console for details.");
    }
  };

  if (isLoadingSolarUnit) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader />
      </div>
    );
  }

  if (isErrorSolarUnit) {
    return (
      <main className="mt-4 p-4">
        <Card className="p-8 text-center border-red-200 bg-red-50">
          <AlertTriangle className="w-12 h-12 mx-auto text-red-500 mb-4" />
          <h3 className="text-lg font-semibold text-red-800 mb-2">Error Loading Data</h3>
          <p className="text-red-600">{errorSolarUnit?.message || "Failed to load solar unit data"}</p>
        </Card>
      </main>
    );
  }

  return (
    <main className="mt-4 p-4">
      {/* Page Header */}
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h1 className="text-4xl font-bold text-foreground">{user?.firstName}'s Anomaly Dashboard</h1>
          <p className="text-gray-600 mt-2">
            Monitor and manage anomalies detected in your solar energy system
          </p>
        </div>
        <Button
          onClick={handleSyncAndDetect}
          disabled={isSyncing}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          <RefreshCw className={`w-4 h-4 mr-2 ${isSyncing ? 'animate-spin' : ''}`} />
          {isSyncing ? 'Syncing...' : 'Sync & Detect'}
        </Button>
      </div>

      {/* Stats Overview */}
      <AnomalyStatsCard stats={stats} isLoading={isLoadingStats} />

      {/* Main Content with Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="detected" className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            Backend Detected Anomalies
          </TabsTrigger>
          <TabsTrigger value="analysis" className="flex items-center gap-2">
            <Activity className="w-4 h-4" />
            Local Analysis
          </TabsTrigger>
          <TabsTrigger value="chart" className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4" />
            Visualization
          </TabsTrigger>
        </TabsList>

        {/* Backend Detected Anomalies Tab */}
        <TabsContent value="detected">
          <AnomalyFilters 
            filters={filters} 
            onFilterChange={setFilters}
            stats={stats}
          />
          <AnomalyList 
            anomalies={anomalies || []} 
            isLoading={isLoadingAnomalies} 
          />
        </TabsContent>

        {/* Local Analysis Tab (Original DataCard) */}
        <TabsContent value="analysis">
          <Card className="p-4 mb-4 bg-blue-50 border-blue-200">
            <p className="text-sm text-blue-800">
              <strong>Local Analysis:</strong> This view analyzes your energy generation data locally using window-based detection algorithms. 
              It provides real-time insights without storing anomalies to the database.
            </p>
          </Card>
          {solarUnit && <DataCard solarUnitId={solarUnit._id} />}
        </TabsContent>

        {/* Chart Visualization Tab */}
        <TabsContent value="chart">
          <AnomalyChart anomalies={anomalies || []} days={30} />
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default AnomaliesPage;