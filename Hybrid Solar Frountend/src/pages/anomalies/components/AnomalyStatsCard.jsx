import { Card } from "@/components/ui/card";
import { AlertTriangle, AlertCircle, CheckCircle2, Clock } from "lucide-react";

const AnomalyStatsCard = ({ stats, isLoading }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[1, 2, 3, 4].map((i) => (
          <Card key={i} className="p-4 animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-16 mb-2" />
            <div className="h-4 bg-gray-200 rounded w-24" />
          </Card>
        ))}
      </div>
    );
  }

  const statCards = [
    {
      label: "Active Anomalies",
      value: stats?.byStatus?.active || 0,
      icon: AlertTriangle,
      color: "text-red-600",
      bgColor: "bg-red-50 border-red-200",
    },
    {
      label: "Acknowledged",
      value: stats?.byStatus?.acknowledged || 0,
      icon: Clock,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50 border-yellow-200",
    },
    {
      label: "Resolved",
      value: stats?.byStatus?.resolved || 0,
      icon: CheckCircle2,
      color: "text-green-600",
      bgColor: "bg-green-50 border-green-200",
    },
    {
      label: "Critical Issues",
      value: stats?.bySeverity?.critical || 0,
      icon: AlertCircle,
      color: "text-red-600",
      bgColor: "bg-red-50 border-red-200",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {statCards.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.label} className={`p-4 border ${stat.bgColor}`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
              <Icon className={`w-8 h-8 ${stat.color}`} />
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default AnomalyStatsCard;
