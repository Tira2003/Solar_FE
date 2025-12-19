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

  if (!data || isError) {
    return (
      <Card className="rounded-2xl p-6 bg-white border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Hourly Generation Breakdown
        </h2>
        <p className="text-gray-500 text-sm mb-4">Detailed view per hour</p>
        <div className="h-64 flex items-center justify-center text-gray-400">
          No data available
        </div>
      </Card>
    );
  }

  // Transform data for the chart
  const chartData = data.slice(0, 8).map((record, index) => {
    // Create time labels (00:00, 04:00, 08:00, etc.)
    const hour = index * 4;
    const timeLabel = `${hour.toString().padStart(2, '0')}:00`;
    
    // Split energy between solar and wind (mock split for demonstration)
    const totalEnergy = record.totalEnergy || 0;
    const solarEnergy = totalEnergy * 0.6; // 60% solar
    const windEnergy = totalEnergy * 0.4;  // 40% wind
    
    return {
      time: timeLabel,
      solar: Math.round(solarEnergy * 10) / 10,
      wind: Math.round(windEnergy * 10) / 10,
    };
  });

  const chartConfig = {
    solar: {
      label: "Solar",
      color: "#3b82f6", // blue-500
    },
    wind: {
      label: "Wind",
      color: "#22d3ee", // cyan-400
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
      <ChartContainer config={chartConfig}>
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
            stackId="stack"
          />
          <Bar
            dataKey="wind"
            fill="var(--color-wind)"
            radius={[4, 4, 0, 0]}
            stackId="stack"
          />
        </BarChart>
      </ChartContainer>
    </Card>
  );
};

export default HourlyGenerationChart;
