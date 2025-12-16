import { Card } from "@/components/ui/card";
import { useMemo } from "react";
import { format, subDays, parseISO, startOfDay } from "date-fns";

// Severity color map for the chart
const SEVERITY_COLORS = {
  CRITICAL: "#ef4444", // red-500
  HIGH: "#f97316",     // orange-500
  MEDIUM: "#eab308",   // yellow-500
  LOW: "#3b82f6",      // blue-500
};

const TYPE_LABELS = {
  COMPLETE_FAILURE: "Failure",
  DEGRADATION: "Degradation",
  WEATHER_RELATED: "Weather",
  SENSOR_MALFUNCTION: "Sensor",
};

const AnomalyChart = ({ anomalies = [], days = 30 }) => {
  // Process anomalies into chart data
  const chartData = useMemo(() => {
    // Create date buckets for the last N days
    const buckets = {};
    for (let i = 0; i < days; i++) {
      const date = format(subDays(new Date(), i), "yyyy-MM-dd");
      buckets[date] = {
        date,
        CRITICAL: 0,
        HIGH: 0,
        MEDIUM: 0,
        LOW: 0,
        total: 0,
      };
    }

    // Fill in anomaly counts
    anomalies.forEach((anomaly) => {
      const date = format(new Date(anomaly.detectedAt), "yyyy-MM-dd");
      if (buckets[date]) {
        buckets[date][anomaly.severity] += 1;
        buckets[date].total += 1;
      }
    });

    // Convert to array and reverse for chronological order
    return Object.values(buckets).reverse();
  }, [anomalies, days]);

  // Calculate statistics
  const stats = useMemo(() => {
    const severityCounts = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
    const typeCounts = {};

    anomalies.forEach((anomaly) => {
      severityCounts[anomaly.severity] = (severityCounts[anomaly.severity] || 0) + 1;
      typeCounts[anomaly.anomalyType] = (typeCounts[anomaly.anomalyType] || 0) + 1;
    });

    return { severityCounts, typeCounts };
  }, [anomalies]);

  // Find max value for scaling
  const maxValue = Math.max(...chartData.map((d) => d.total), 1);

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Anomaly Timeline</h3>
          <p className="text-sm text-gray-500">Last {days} days activity</p>
        </div>
        
        {/* Legend */}
        <div className="flex items-center gap-4">
          {Object.entries(SEVERITY_COLORS).map(([severity, color]) => (
            <div key={severity} className="flex items-center gap-1">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: color }}
              />
              <span className="text-xs text-gray-600">{severity}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bar Chart */}
      <div className="relative h-40 flex items-end gap-1">
        {chartData.map((day, index) => {
          const barHeight = day.total > 0 ? (day.total / maxValue) * 100 : 0;
          
          return (
            <div
              key={day.date}
              className="flex-1 flex flex-col items-center justify-end group relative"
            >
              {/* Stacked bar */}
              <div
                className="w-full rounded-t transition-all hover:opacity-80 cursor-pointer"
                style={{ height: `${barHeight}%`, minHeight: day.total > 0 ? "4px" : "0" }}
              >
                {/* Stack segments by severity */}
                {day.CRITICAL > 0 && (
                  <div
                    className="w-full rounded-t"
                    style={{
                      backgroundColor: SEVERITY_COLORS.CRITICAL,
                      height: `${(day.CRITICAL / day.total) * 100}%`,
                    }}
                  />
                )}
                {day.HIGH > 0 && (
                  <div
                    className="w-full"
                    style={{
                      backgroundColor: SEVERITY_COLORS.HIGH,
                      height: `${(day.HIGH / day.total) * 100}%`,
                    }}
                  />
                )}
                {day.MEDIUM > 0 && (
                  <div
                    className="w-full"
                    style={{
                      backgroundColor: SEVERITY_COLORS.MEDIUM,
                      height: `${(day.MEDIUM / day.total) * 100}%`,
                    }}
                  />
                )}
                {day.LOW > 0 && (
                  <div
                    className="w-full rounded-b"
                    style={{
                      backgroundColor: SEVERITY_COLORS.LOW,
                      height: `${(day.LOW / day.total) * 100}%`,
                    }}
                  />
                )}
              </div>

              {/* Tooltip */}
              {day.total > 0 && (
                <div className="absolute bottom-full mb-2 hidden group-hover:block z-10">
                  <div className="bg-gray-900 text-white text-xs rounded px-2 py-1 whitespace-nowrap">
                    <div className="font-semibold">{format(parseISO(day.date), "MMM d")}</div>
                    <div>{day.total} anomal{day.total === 1 ? "y" : "ies"}</div>
                    {day.CRITICAL > 0 && <div className="text-red-300">Critical: {day.CRITICAL}</div>}
                    {day.HIGH > 0 && <div className="text-orange-300">High: {day.HIGH}</div>}
                    {day.MEDIUM > 0 && <div className="text-yellow-300">Medium: {day.MEDIUM}</div>}
                    {day.LOW > 0 && <div className="text-blue-300">Low: {day.LOW}</div>}
                  </div>
                </div>
              )}

              {/* Date label (show every 7th day) */}
              {index % 7 === 0 && (
                <span className="text-xs text-gray-400 mt-1 absolute -bottom-5">
                  {format(parseISO(day.date), "M/d")}
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Summary Stats */}
      <div className="mt-10 pt-4 border-t grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* By Severity */}
        <div className="text-center">
          <div className="text-2xl font-bold text-red-600">{stats.severityCounts.CRITICAL}</div>
          <div className="text-xs text-gray-500">Critical</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-orange-600">{stats.severityCounts.HIGH}</div>
          <div className="text-xs text-gray-500">High</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-yellow-600">{stats.severityCounts.MEDIUM}</div>
          <div className="text-xs text-gray-500">Medium</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600">{stats.severityCounts.LOW}</div>
          <div className="text-xs text-gray-500">Low</div>
        </div>
      </div>

      {/* By Type */}
      {Object.keys(stats.typeCounts).length > 0 && (
        <div className="mt-4 pt-4 border-t">
          <h4 className="text-sm font-medium text-gray-700 mb-2">By Type</h4>
          <div className="flex flex-wrap gap-2">
            {Object.entries(stats.typeCounts).map(([type, count]) => (
              <div
                key={type}
                className="bg-gray-100 rounded-full px-3 py-1 text-sm"
              >
                <span className="font-medium">{TYPE_LABELS[type] || type}</span>
                <span className="ml-1 text-gray-600">({count})</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </Card>
  );
};

export default AnomalyChart;
