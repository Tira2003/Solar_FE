import { Card } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Legend } from "recharts";
import { useGetEnergyGenerationRecordsBySolarUnitQuery } from "@/lib/redux/query";
import { Skeleton } from "@/components/ui/skeleton";

const HourlyGenerationChart = ({ solarUnitId }) => {
  const { data, isLoading, isError } =
    useGetEnergyGenerationRecordsBySolarUnitQuery({
      id: solarUnitId,
      groupBy: "hour",
      limit: 24,
    });

  if (isLoading) {
    return (
      <Card className="rounded-2xl p-6 bg-white border border-gray-200">
        <Skeleton className="h-80 w-full" />
      </Card>
    );
  }

  if (!data || data.length === 0 || isError) {
    return (
      <Card className="rounded-2xl p-6 bg-white border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Hourly Generation Breakdown
        </h2>
        <p className="text-gray-500 text-sm mb-4">Detailed view per hour</p>
        <div className="h-64 flex flex-col items-center justify-center text-gray-400 bg-gray-50 rounded-lg">
          <svg 
            className="w-16 h-16 mb-4 text-gray-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" 
            />
          </svg>
          <p className="text-gray-500 font-medium">No Generation Data Available</p>
          <p className="text-gray-400 text-sm mt-1">Data will appear once energy generation is recorded</p>
        </div>
      </Card>
    );
  }

  // Transform data for the chart
  const chartData = data.map((record) => {
    // Backend returns _id.hour (0-23) and totalEnergy
    const hour = record._id?.hour ?? 0;
    const timeLabel = `${hour.toString().padStart(2, '0')}:00`;
    const totalEnergy = record.totalEnergy || 0;
    
    return {
      time: timeLabel,
      hour: hour,
      solar: Math.round(totalEnergy * 10) / 10,
    };
  }).sort((a, b) => a.hour - b.hour); // Sort by hour ascending

  const chartConfig = {
    solar: {
      label: "Solar",
      color: "#3b82f6", // blue-500
    },
    
  };

  return (
    <Card className="rounded-2xl p-6 bg-white border border-gray-200">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-1">
          Hourly Generation Breakdown
        </h2>
        <p className="text-gray-500 text-sm">Detailed view per hour</p>
      </div>

      {/* Chart */}
      <div className="h-64 overflow-hidden">
        <ChartContainer config={chartConfig} className="h-full w-full">
        <BarChart
          data={chartData}
          margin={{
            left: 20,
            right: 20,
            top: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="time"
            tickLine={false}
            axisLine={true}
            tickMargin={8}
          />
          <YAxis
            tickLine={false}
            axisLine={true}
            tickMargin={8}
            label={{ value: "kWh", angle: -90, position: "insideLeft" }}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Legend 
            wrapperStyle={{ paddingTop: "20px" }}
            iconType="circle"
          />
          <Bar
            dataKey="solar"
            fill="var(--color-solar)"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ChartContainer>
      </div>
    </Card>
  );
};

export default HourlyGenerationChart;
