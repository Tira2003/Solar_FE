import { cn } from "@/lib/utils";

/**
 * StatCard Component
 * Displays a statistic with title, value, optional trend indicator, and icon
 */
export function StatCard({
  title,
  subtitle,
  value,
  trend,
  trendLabel,
  icon: Icon,
  variant = "default",
  className,
}) {
  const variantStyles = {
    default: "bg-white border-gray-200",
    active: "bg-emerald-50 border-emerald-200",
    maintenance: "bg-amber-50 border-amber-200",
    inactive: "bg-gray-50 border-gray-300",
    warning: "bg-red-50 border-red-200",
    info: "bg-blue-50 border-blue-200",
  };

  const iconStyles = {
    default: "text-gray-600 bg-gray-100",
    active: "text-emerald-600 bg-emerald-100",
    maintenance: "text-amber-600 bg-amber-100",
    inactive: "text-gray-600 bg-gray-200",
    warning: "text-red-600 bg-red-100",
    info: "text-blue-600 bg-blue-100",
  };

  const trendPositive = trend > 0;
  const trendNegative = trend < 0;

  return (
    <div
      className={cn(
        "relative rounded-xl border p-5 shadow-sm transition-all hover:shadow-md",
        variantStyles[variant],
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          {subtitle && (
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
              {subtitle}
            </p>
          )}
          <h3 className="text-sm font-medium text-gray-700">{title}</h3>
        </div>
        {Icon && (
          <div className={cn("rounded-lg p-2", iconStyles[variant])}>
            <Icon className="h-5 w-5" />
          </div>
        )}
      </div>

      <div className="mt-3">
        <p className="text-3xl font-bold text-gray-900">{value}</p>
      </div>

      {(trend !== undefined || trendLabel) && (
        <div className="mt-2 flex items-center gap-1 text-sm">
          {trend !== undefined && (
            <span
              className={cn(
                "flex items-center font-medium",
                trendPositive && "text-emerald-600",
                trendNegative && "text-red-600",
                !trendPositive && !trendNegative && "text-gray-500"
              )}
            >
              {trendPositive && "↑"}
              {trendNegative && "↓"}
              {Math.abs(trend)}%
            </span>
          )}
          {trendLabel && <span className="text-gray-500">{trendLabel}</span>}
        </div>
      )}
    </div>
  );
}

export default StatCard;
