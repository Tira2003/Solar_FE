import { useGetSolarUnitForUserQuery } from "@/lib/redux/query";
import DataChart from "./components/DataChart";
import WeatherCard from "./components/WeatherCard";
import EnergyForecastCard from "./components/EnergyForecastCard";
import AnomalyCountCard from "./components/AnomalyCountCard";
import PendingPaymentsCard from "./components/PendingPaymentsCard";
import HourlyGenerationChart from "./components/HourlyGenerationChart";
import { Filter, Download } from "lucide-react";

const DashboardPage = () => {
  const { data: solarUnit, isLoading: isLoadingSolarUnit, isError: isErrorSolarUnit, error: errorSolarUnit } = useGetSolarUnitForUserQuery();

  if (isLoadingSolarUnit) {
    return <div>Loading...</div>;
  }

  if (isErrorSolarUnit) {
    return <div>Error: {errorSolarUnit.message}</div>;
  }

  return (
    <main className="mt-4 px-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Overview</h1>
          <p className="text-gray-500 mt-1">
            Monitor your energy production and grid stability.
          </p>
        </div>
        
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Cards (2x2 grid) */}
        <div className="lg:col-span-1 space-y-6">
          {/* Top Row - Larger Cards */}
          <div className="space-y-6">
            <WeatherCard />
            <EnergyForecastCard />
          </div>
          
          
          <div className="grid grid-cols-2 gap-4">
            <AnomalyCountCard />
            <PendingPaymentsCard />
          </div>
        </div>

        {/* Right Column - Charts */}
        <div className="lg:col-span-2 space-y-6">
          <DataChart solarUnitId={solarUnit._id} />
          <HourlyGenerationChart solarUnitId={solarUnit._id} />
        </div>
      </div>
    </main>
  );
};

export default DashboardPage;

