import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Filter, X } from "lucide-react";

const SEVERITY_OPTIONS = [
  { value: "", label: "All Severities" },
  { value: "CRITICAL", label: "Critical" },
  { value: "HIGH", label: "High" },
  { value: "MEDIUM", label: "Medium" },
  { value: "LOW", label: "Low" },
];

const TYPE_OPTIONS = [
  { value: "", label: "All Types" },
  { value: "COMPLETE_FAILURE", label: "Complete Failure" },
  { value: "DEGRADATION", label: "Degradation" },
  { value: "WEATHER_RELATED", label: "Weather Related" },
  { value: "SENSOR_MALFUNCTION", label: "Sensor Malfunction" },
];

const STATUS_OPTIONS = [
  { value: "", label: "All Status" },
  { value: "ACTIVE", label: "Active" },
  { value: "ACKNOWLEDGED", label: "Acknowledged" },
  { value: "RESOLVED", label: "Resolved" },
];

const AnomalyFilters = ({ filters, onFilterChange, stats }) => {
  const hasActiveFilters = filters.type || filters.severity || filters.status;

  const handleClearFilters = () => {
    onFilterChange({ type: "", severity: "", status: "" });
  };

  return (
    <Card className="p-4 mb-6">
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2 text-gray-700">
          <Filter className="w-4 h-4" />
          <span className="font-medium">Filters</span>
        </div>

        {/* Severity Filter */}
        <select
          value={filters.severity || ""}
          onChange={(e) => onFilterChange({ ...filters, severity: e.target.value })}
          className="px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {SEVERITY_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {/* Type Filter */}
        <select
          value={filters.type || ""}
          onChange={(e) => onFilterChange({ ...filters, type: e.target.value })}
          className="px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {TYPE_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {/* Status Filter */}
        <select
          value={filters.status || ""}
          onChange={(e) => onFilterChange({ ...filters, status: e.target.value })}
          className="px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {STATUS_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClearFilters}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-4 h-4 mr-1" />
            Clear
          </Button>
        )}

        {/* Stats Summary */}
        {stats && (
          <div className="ml-auto flex items-center gap-4 text-sm text-gray-600">
            {stats.byStatus && (
              <>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  Active: {stats.byStatus.active}
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-yellow-500" />
                  Acknowledged: {stats.byStatus.acknowledged}
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  Resolved: {stats.byStatus.resolved}
                </span>
              </>
            )}
          </div>
        )}
      </div>
    </Card>
  );
};

export default AnomalyFilters;
