import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Filter, X, ChevronDown } from "lucide-react";
import Dropdown, { DropdownItem } from "@/components/dropdown";

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

  const getSelectedLabel = (options, value) => {
    const option = options.find(opt => opt.value === value);
    return option ? option.label : options[0].label;
  };

  return (
    <Card className="p-4 mb-6">
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2 text-gray-700">
          <Filter className="w-4 h-4" />
          <span className="font-medium">Filters</span>
        </div>

        {/* Severity Filter */}
        <Dropdown
          trigger={
            <button className="px-3 py-2 border border-blue-200 rounded-lg text-sm bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center gap-2 min-w-[140px] justify-between transition-colors">
              <span>{getSelectedLabel(SEVERITY_OPTIONS, filters.severity)}</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          }
          width="w-48"
        >
          {SEVERITY_OPTIONS.map((option) => (
            <DropdownItem
              key={option.value}
              onClick={() => onFilterChange({ ...filters, severity: option.value })}
            >
              {option.label}
            </DropdownItem>
          ))}
        </Dropdown>

        {/* Type Filter */}
        <Dropdown
          trigger={
            <button className="px-3 py-2 border border-blue-200 rounded-lg text-sm bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center gap-2 min-w-[160px] justify-between transition-colors">
              <span>{getSelectedLabel(TYPE_OPTIONS, filters.type)}</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          }
          width="w-56"
        >
          {TYPE_OPTIONS.map((option) => (
            <DropdownItem
              key={option.value}
              onClick={() => onFilterChange({ ...filters, type: option.value })}
            >
              {option.label}
            </DropdownItem>
          ))}
        </Dropdown>

        {/* Status Filter */}
        <Dropdown
          trigger={
            <button className="px-3 py-2 border border-blue-200 rounded-lg text-sm bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center gap-2 min-w-[140px] justify-between transition-colors">
              <span>{getSelectedLabel(STATUS_OPTIONS, filters.status)}</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          }
          width="w-48"
        >
          {STATUS_OPTIONS.map((option) => (
            <DropdownItem
              key={option.value}
              onClick={() => onFilterChange({ ...filters, status: option.value })}
            >
              {option.label}
            </DropdownItem>
          ))}
        </Dropdown>

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
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  Active: {stats.byStatus.active}
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-blue-400" />
                  Acknowledged: {stats.byStatus.acknowledged}
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-cyan-500" />
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
