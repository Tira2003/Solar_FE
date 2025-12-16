import { useGetAdminCriticalAnomaliesQuery } from "@/lib/redux/query";

/**
 * CriticalAnomaliesList Component
 * Displays a list of critical and high severity anomalies for admin dashboard
 */
export function CriticalAnomaliesList() {
  const { data: anomalies, isLoading, isError } = useGetAdminCriticalAnomaliesQuery({ limit: 10 });

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getSeverityStyles = (severity) => {
    switch (severity) {
      case "CRITICAL":
        return "bg-red-100 text-red-700";
      case "HIGH":
        return "bg-orange-100 text-orange-700";
      case "MEDIUM":
        return "bg-amber-100 text-amber-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusStyles = (status) => {
    switch (status) {
      case "ACTIVE":
        return "bg-red-50 text-red-600";
      case "ACKNOWLEDGED":
        return "bg-blue-50 text-blue-600";
      case "RESOLVED":
        return "bg-green-50 text-green-600";
      default:
        return "bg-gray-50 text-gray-600";
    }
  };

  const formatAnomalyType = (type) => {
    if (!type) return "Unknown";
    return type
      .replace(/_/g, " ")
      .toLowerCase()
      .replace(/^\w/, (c) => c.toUpperCase());
  };

  if (isLoading) {
    return (
      <div className="flex h-48 items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-red-500 border-t-transparent" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex h-48 items-center justify-center text-red-500">
        Failed to load anomalies
      </div>
    );
  }

  if (!anomalies || anomalies.length === 0) {
    return (
      <div className="flex h-48 flex-col items-center justify-center text-gray-500">
        <svg className="h-12 w-12 mb-2 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p>No critical anomalies</p>
        <p className="text-sm text-gray-400">All systems running smoothly</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200 text-left text-sm font-medium text-gray-500">
            <th className="pb-3 pr-4">Type</th>
            <th className="pb-3 pr-4">Solar Unit</th>
            <th className="pb-3 pr-4">Severity</th>
            <th className="pb-3 pr-4">Status</th>
            <th className="pb-3">Detected At</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {anomalies.map((anomaly) => (
            <tr key={anomaly._id} className="text-sm hover:bg-gray-50 transition-colors">
              <td className="py-3 pr-4">
                <span className="font-medium text-gray-900">
                  {formatAnomalyType(anomaly.type)}
                </span>
              </td>
              <td className="py-3 pr-4">
                <div>
                  <p className="text-gray-700">{anomaly.solarUnit?.serialNumber || "N/A"}</p>
                  {anomaly.solarUnit?.capacity && (
                    <p className="text-xs text-gray-500">{anomaly.solarUnit.capacity} kW</p>
                  )}
                </div>
              </td>
              <td className="py-3 pr-4">
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getSeverityStyles(
                    anomaly.severity
                  )}`}
                >
                  {anomaly.severity}
                </span>
              </td>
              <td className="py-3 pr-4">
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusStyles(
                    anomaly.status
                  )}`}
                >
                  {anomaly.status}
                </span>
              </td>
              <td className="py-3 text-gray-600">{formatDate(anomaly.detectedAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CriticalAnomaliesList;
