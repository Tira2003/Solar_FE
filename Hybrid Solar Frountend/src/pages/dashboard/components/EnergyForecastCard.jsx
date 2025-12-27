import { Card } from "@/components/ui/card";
import { CircularProgress } from "@/components/progress-09";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetWeatherForSolarUnitQuery, useGetSolarUnitForUserQuery, useGetEnergyGenerationRecordsBySolarUnitQuery } from "@/lib/redux/query";

const EnergyForecastCard = () => {
  const { data: weather, isLoading: isLoadingWeather } = useGetWeatherForSolarUnitQuery();
  const { data: solarUnit, isLoading: isLoadingSolarUnit } = useGetSolarUnitForUserQuery();
  const { data: energyData, isLoading: isLoadingEnergy } = useGetEnergyGenerationRecordsBySolarUnitQuery(
    { id: solarUnit?._id, groupBy: "date", limit: 7 },
    { skip: !solarUnit?._id }
  );

  const calculateEfficiency = () => {
    if (!weather?.current) return 50; 
    
    const current = weather.current;
    if (current.weatherCode >= 80) return 10; 
    if (current.weatherCode >= 50) return 30;  // Light rain
    if (current.weatherCode >= 45) return 25;  // Fog
    if (current.cloudCover >= 80) return 35;
    if (current.cloudCover >= 50) return 65;
    if (current.cloudCover >= 20) return 85;
    
    return 95; 
  };

  const calculateSolarForecast = () => {
    if (!energyData || energyData.length === 0) return 0;
    
    const totalEnergy = energyData.reduce((sum, record) => sum + (record.totalEnergy || 0), 0);
    const avgDailyEnergy = totalEnergy / energyData.length;
    
    const efficiency = calculateEfficiency();
    const forecastedEnergy = (avgDailyEnergy * efficiency) / 100;
    
    const forecastMWh = forecastedEnergy / 1000;
    
    return Math.round(forecastMWh * 100) / 100; 
  };

  const isLoading = isLoadingWeather || isLoadingSolarUnit || isLoadingEnergy;

  if (isLoading) {
    return (
      <Card className="backdrop-blur-xl bg-gradient-to-br from-blue-900/70 via-blue-700/60 to-cyan-600/50 rounded-2xl p-4 border border-white/20">
        <Skeleton className="h-64 w-full bg-white/20" />
      </Card>
    );
  }

  const efficiency = calculateEfficiency();
  const solarEnergy = calculateSolarForecast();

  return (
    <Card className="backdrop-blur-xl bg-gradient-to-br from-blue-900/70 via-blue-700/60 to-cyan-600/50 rounded-2xl p-4 border border-white/20">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white text-base font-semibold">Generation Forecast</h2>
        <button className="px-2.5 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium border border-white/30">
          Today
        </button>
      </div>

      {/* Radial Chart */}
      <div className="flex flex-col items-center mb-6">
        <CircularProgress
          value={efficiency}
          size={140}
          strokeWidth={12}
          showLabel
          className="stroke-white/25"
          progressClassName="stroke-cyan-400"
          labelClassName="text-2xl font-bold text-white"
          renderLabel={(value) => (
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold">{value}%</span>
              <span className="text-xs opacity-80">Efficiency</span>
            </div>
          )}
        />
      </div>

      {/* Energy Breakdown */}
      <div className="backdrop-blur-md bg-white/10 rounded-xl p-3 border border-white/20">
        <div className="flex flex-col items-center">
          {/* Solar */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1.5 mb-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
              <span className="text-white/70 text-xs">Solar Forecast</span>
            </div>
            <div className="text-white text-lg font-bold">
              {solarEnergy > 0 ? `${solarEnergy} MWh` : 'No data'}
            </div>
            <span className="text-white/50 text-xs mt-1">Based on 7-day average</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default EnergyForecastCard;

