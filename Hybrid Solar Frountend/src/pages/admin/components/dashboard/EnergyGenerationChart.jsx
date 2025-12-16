import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useGetAdminEnergyGenerationQuery } from "@/lib/redux/query";

/**
 * EnergyGenerationChart Component
 * Displays bar chart of energy generation with day/week/month toggle
 */
export function EnergyGenerationChart() {
  const [groupBy, setGroupBy] = useState("day");
  const [limit, setLimit] = useState(7);

  const { data: energyData, isLoading, isError } = useGetAdminEnergyGenerationQuery({
    groupBy,
    limit,
  });

  const handleGroupByChange = (newGroupBy) => {
    setGroupBy(newGroupBy);
    switch (newGroupBy) {
      case "month":
        setLimit(12);
        break;
      case "week":
        setLimit(12);
        break;
      default:
        setLimit(7);
    }
  };

  const formatLabel = (value) => {
    if (groupBy === "day") {
      const date = new Date(value);
      return date.toLocaleDateString("en-US", { weekday: "short" });
    } else if (groupBy === "week") {
      return value.replace(/^\d{4}-W/, "W");
    } else {
      const date = new Date(value + "-01");
      return date.toLocaleDateString("en-US", { month: "short" });
    }
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Energy Generation
          </h3>
          <p className="text-sm text-gray-500">
            Track all solar units energy production
          </p>
        </div>
        <div className="flex gap-1 rounded-lg bg-gray-100 p-1">
          {["day", "week", "month"].map((period) => (
            <button
              key={period}
              onClick={() => handleGroupByChange(period)}
              className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
                groupBy === period
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {period.charAt(0).toUpperCase() + period.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="h-64">
        {isLoading ? (
          <div className="flex h-full items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
          </div>
        ) : isError ? (
          <div className="flex h-full items-center justify-center text-red-500">
            Failed to load energy data
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={energyData || []}
              margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="date"
                tickFormatter={formatLabel}
                tick={{ fill: "#6b7280", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: "#6b7280", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(value) => `${value} kWh`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
                }}
                formatter={(value) => [`${value} kWh`, "Energy"]}
                labelFormatter={(label) => `Date: ${label}`}
              />
              <Bar
                dataKey="energy"
                fill="#3b82f6"
                radius={[4, 4, 0, 0]}
                maxBarSize={50}
              />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>

      {energyData && energyData.length > 0 && (
        <div className="mt-4 flex items-center justify-between border-t pt-4">
          <div>
            <p className="text-2xl font-bold text-gray-900">
              {energyData.reduce((sum, d) => sum + d.energy, 0).toFixed(1)} kWh
            </p>
            <p className="text-sm text-gray-500">Total generated</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default EnergyGenerationChart;
