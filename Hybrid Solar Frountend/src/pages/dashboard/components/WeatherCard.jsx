import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetWeatherForSolarUnitQuery } from "@/lib/redux/query";
import { Cloud, CloudRain, Sun, Wind, Droplets } from "lucide-react";
import { CircularProgress } from "@/components/progress-09";

const WeatherCard = () => {
  const { data: weather, isLoading, isError, error } =
    useGetWeatherForSolarUnitQuery();

  if (isLoading) {
    return (
      <div className="w-full max-w-md mx-auto p-6">
        <Skeleton className="h-96 w-full rounded-3xl" />
      </div>
    );
  }

  if (isError || !weather) {
    const errorMessage = error?.data?.message || error?.message || "Unable to load weather data";
    
    return (
      <div className="w-full max-w-md mx-auto p-6">
        <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl">
          <p className="text-white text-center">{errorMessage}</p>
        </div>
      </div>
    );
  }

  const current = weather.current;

  // Determine solar impact
  const getSolarImpact = () => {
    if (current.weatherCode >= 80) {
      return { efficiency: 10, icon: CloudRain };
    }
    if (current.weatherCode >= 50) {
      return { efficiency: 30, icon: CloudRain };
    }
    if (current.weatherCode >= 45) {
      return { efficiency: 25, icon: Cloud };
    }
    if (current.cloudCover >= 80) {
      return { efficiency: 35, icon: Cloud };
    }
    if (current.cloudCover >= 50) {
      return { efficiency: 65, icon: Cloud };
    }
    if (current.cloudCover >= 20) {
      return { efficiency: 85, icon: Sun };
    }
    return { efficiency: 95, icon: Sun };
  };

  const solarImpact = getSolarImpact();
  const SolarIcon = solarImpact.icon;

  return (
    <div>
      <div className="w-full max-w-sm">
        {/* Main Card */}
        <div className="backdrop-blur-xl bg-gradient-to-br from-blue-900/70 via-blue-700/60 to-cyan-600/50 rounded-2xl p-5 border border-white/20 ">
          {/* Header */}
          <div className="flex items-center justify-between mb-5">
            <div>
              <h1 className="text-white text-lg font-semibold mb-0.5">
                Energy & Weather
              </h1>
              <p className="text-white text-base font-semibold">Forecast</p>
            </div>
            <button className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium border border-white/30">
              Today
            </button>
          </div>

          {/* Main Stats */}
          <div className="flex items-center justify-between mb-5">
            {/* Temperature */}
            <div>
              <div className="text-7xl  text-white mb-1">
                {Math.round(current.temperature)}°C
              </div>
            </div>

            {/* Solar Output */}
            <div className="flex flex-col items-center">
              <CircularProgress
                value={solarImpact.efficiency}
                size={90}
                strokeWidth={10}
                showLabel
                className="stroke-white/25"
                progressClassName="stroke-yellow-400"
                labelClassName="text-xl  text-white"
                renderLabel={(value) => `${value}%`}
              />
              <div className="text-white text-center mt-2">
                <div className="text-sm font-bold opacity-80">Solar Energy Output</div>
              </div>
            </div>
          </div>

          {/* Weather Metrics Grid */}
          <div className="backdrop-blur-md bg-white/10 rounded-xl p-4 border border-white/20">
            <div className="grid grid-cols-2 gap-4">
              {/* Humidity */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                  <Droplets className="text-white" size={16} />
                </div>
                <div>
                  <div className="text-white/70 text-xs">Humidity</div>
                  <div className="text-white text-sm font-semibold">
                    {current.humidity}%
                  </div>
                </div>
              </div>

              {/* Precipitation */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                  <CloudRain className="text-white" size={16} />
                </div>
                <div>
                  <div className="text-white/70 text-xs">Precipitation</div>
                  <div className="text-white text-sm font-semibold">
                    {current.precipitation.toFixed(1)}mm
                  </div>
                </div>
              </div>

              {/* Cloud Cover */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                  <Cloud className="text-white" size={16} />
                </div>
                <div>
                  <div className="text-white/70 text-xs">Cloud Cover</div>
                  <div className="text-white text-sm font-semibold">
                    {current.cloudCover}%
                  </div>
                </div>
              </div>

              {/* Wind Speed */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                  <Wind className="text-white" size={16} />
                </div>
                <div>
                  <div className="text-white/70 text-xs">Wind Speed</div>
                  <div className="text-white text-sm font-semibold">
                    {Math.round(current.windSpeed)} km/h
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
