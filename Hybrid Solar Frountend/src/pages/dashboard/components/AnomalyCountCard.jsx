import { Card } from "@/components/ui/card";
import { useGetAnomalyStatsQuery } from "@/lib/redux/query";
import { AlertTriangle } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const AnomalyCountCard = () => {
  const { data: stats, isLoading, isError } = useGetAnomalyStatsQuery();

  if (isLoading) {
    return (
      <Card className="backdrop-blur-xl bg-gradient-to-br from-blue-900/70 via-blue-700/60 to-cyan-600/50 rounded-2xl p-5 border border-white/20">
        <Skeleton className="h-24 w-full bg-white/10" />
      </Card>
    );
  }

  const anomalyCount = isError ? 0 : (stats?.total || 0);

  return (
    <Card className="backdrop-blur-xl bg-gradient-to-br from-blue-900/70 via-blue-700/60 to-cyan-600/50 rounded-2xl p-5 border border-white/20">
      <div className="flex items-center gap-4">
        {/* Icon */}
        <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
          <AlertTriangle className="text-yellow-400" size={28} />
        </div>

        {/* Content */}
        <div className="flex-1">
          <p className="text-white/70 text-sm mb-1">Anomaly Count</p>
          <p className="text-white text-3xl font-bold">{anomalyCount}</p>
        </div>
      </div>
    </Card>
  );
};

export default AnomalyCountCard;
