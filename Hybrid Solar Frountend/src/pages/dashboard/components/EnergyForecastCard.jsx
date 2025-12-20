import { Card } from "@/components/ui/card";
import { CircularProgress } from "@/components/progress-09";
import { Zap } from "lucide-react";

const EnergyForecastCard = () => {
  // Mock data - in real implementation, this would come from an API
  const efficiency = 84;
  const solarEnergy = 4.2; // MWh
  const windEnergy = 2.8; // MWh

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
        <div className="grid grid-cols-2 gap-3">
          {/* Solar */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1.5 mb-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
              <span className="text-white/70 text-xs">Solar</span>
            </div>
            <div className="text-white text-lg font-bold">{solarEnergy} MWh</div>
          </div>

          {/* Wind */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1.5 mb-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-cyan-400"></div>
              <span className="text-white/70 text-xs">Wind</span>
            </div>
            <div className="text-white text-lg font-bold">{windEnergy} MWh</div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default EnergyForecastCard;
