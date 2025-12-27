import { useGetSolarUnitForUserQuery } from "@/lib/redux/query";
import DataChart from "./components/DataChart";
import WeatherCard from "./components/WeatherCard";
import EnergyForecastCard from "./components/EnergyForecastCard";
import AnomalyCountCard from "./components/AnomalyCountCard";
import PendingPaymentsCard from "./components/PendingPaymentsCard";
import HourlyGenerationChart from "./components/HourlyGenerationChart";
import { Filter, Download } from "lucide-react";
import Loader from "@/components/loader";
import ErrorPage from "@/components/ErrorPage";

const DashboardPage = () => {
  const { data: solarUnit, isLoading: isLoadingSolarUnit, isError: isErrorSolarUnit, error: errorSolarUnit } = useGetSolarUnitForUserQuery();

  if (isLoadingSolarUnit) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader />
      </div>
    );
  }

  if (isErrorSolarUnit) {
    return (
      <ErrorPage 
        title="Unable to Load Dashboard"
        message="We couldn't retrieve your solar unit data. Please check your connection and try again."
        errorDetails={errorSolarUnit?.data?.message || errorSolarUnit?.message}
      />
    );
  }

  return (
    <main className="mt-2 md:mt-4 px-3 md:px-6 pb-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 md:mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Overview</h1>
          <p className="text-gray-500 mt-0.5 md:mt-1 text-sm md:text-base">
            Monitor your energy production and grid stability.
          </p>
        </div>
        
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        <div className="lg:col-span-1 space-y-4 md:space-y-6">
          <div className="space-y-4 md:space-y-6">
            <WeatherCard />
            <EnergyForecastCard />
          </div>
          
          
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <AnomalyCountCard />
            <PendingPaymentsCard />
          </div>
        </div>

        <div className="lg:col-span-2 space-y-4 md:space-y-6">
          <DataChart solarUnitId={solarUnit._id} />
          <HourlyGenerationChart solarUnitId={solarUnit._id} />
        </div>
      </div>
    </main>
  );
};

export default DashboardPage;

