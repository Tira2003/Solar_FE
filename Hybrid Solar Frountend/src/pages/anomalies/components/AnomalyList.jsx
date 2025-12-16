import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { 
  AlertTriangle, 
  AlertCircle, 
  Info, 
  CheckCircle2, 
  Clock, 
  Zap,
  ThermometerSun,
  CloudRain,
  Activity
} from "lucide-react";
import { useAcknowledgeAnomalyMutation, useResolveAnomalyMutation } from "@/lib/redux/query";
import { useState } from "react";

const SEVERITY_CONFIG = {
  CRITICAL: {
    color: "bg-red-100 text-red-800 border-red-200",
    icon: AlertTriangle,
    iconColor: "text-red-600",
  },
  HIGH: {
    color: "bg-orange-100 text-orange-800 border-orange-200",
    icon: AlertCircle,
    iconColor: "text-orange-600",
  },
  MEDIUM: {
    color: "bg-yellow-100 text-yellow-800 border-yellow-200",
    icon: AlertCircle,
    iconColor: "text-yellow-600",
  },
  LOW: {
    color: "bg-blue-100 text-blue-800 border-blue-200",
    icon: Info,
    iconColor: "text-blue-600",
  },
};

const TYPE_CONFIG = {
  COMPLETE_FAILURE: {
    label: "Complete Failure",
    icon: Zap,
    description: "Panel producing no energy",
  },
  DEGRADATION: {
    label: "Performance Degradation",
    icon: ThermometerSun,
    description: "Below expected output",
  },
  WEATHER_RELATED: {
    label: "Weather Impact",
    icon: CloudRain,
    description: "Weather-related reduction",
  },
  SENSOR_MALFUNCTION: {
    label: "Sensor Issue",
    icon: Activity,
    description: "Sensor data anomaly",
  },
};

const STATUS_CONFIG = {
  ACTIVE: {
    color: "bg-red-50 border-red-200",
    badge: "bg-red-500 text-white",
    label: "Active",
  },
  ACKNOWLEDGED: {
    color: "bg-yellow-50 border-yellow-200",
    badge: "bg-yellow-500 text-white",
    label: "Acknowledged",
  },
  RESOLVED: {
    color: "bg-green-50 border-green-200",
    badge: "bg-green-500 text-white",
    label: "Resolved",
  },
};

const AnomalyCard = ({ anomaly, onAcknowledge, onResolve, isLoading }) => {
  const severityConfig = SEVERITY_CONFIG[anomaly.severity] || SEVERITY_CONFIG.MEDIUM;
  const typeConfig = TYPE_CONFIG[anomaly.anomalyType] || TYPE_CONFIG.DEGRADATION;
  const statusConfig = STATUS_CONFIG[anomaly.status] || STATUS_CONFIG.ACTIVE;
  
  const SeverityIcon = severityConfig.icon;
  const TypeIcon = typeConfig.icon;

  return (
    <Card className={`p-4 ${statusConfig.color} transition-all hover:shadow-md`}>
      <div className="flex items-start justify-between gap-4">
        {/* Left: Icon and Info */}
        <div className="flex items-start gap-3">
          <div className={`p-2 rounded-lg ${severityConfig.color}`}>
            <SeverityIcon className={`w-5 h-5 ${severityConfig.iconColor}`} />
          </div>
          
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-gray-900">{typeConfig.label}</h3>
              <Badge className={severityConfig.color}>{anomaly.severity}</Badge>
              <Badge className={statusConfig.badge}>{statusConfig.label}</Badge>
            </div>
            
            <p className="text-sm text-gray-600 mb-2">{anomaly.description}</p>
            
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>Detected: {format(new Date(anomaly.detectedAt), "MMM d, yyyy HH:mm")}</span>
              </div>
              {anomaly.affectedPeriod && (
                <div className="flex items-center gap-1">
                  <span>Period: {format(new Date(anomaly.affectedPeriod.start), "MMM d")} - {format(new Date(anomaly.affectedPeriod.end), "MMM d")}</span>
                </div>
              )}
              <div className="flex items-center gap-1">
                <span>Confidence: {(anomaly.confidence * 100).toFixed(0)}%</span>
              </div>
            </div>
            
            {anomaly.recommendation && (
              <p className="text-sm text-blue-700 mt-2 bg-blue-50 p-2 rounded">
                💡 {anomaly.recommendation}
              </p>
            )}
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex flex-col gap-2">
          {anomaly.status === "ACTIVE" && (
            <Button
              size="sm"
              variant="outline"
              onClick={() => onAcknowledge(anomaly._id)}
              disabled={isLoading}
            >
              Acknowledge
            </Button>
          )}
          {anomaly.status !== "RESOLVED" && (
            <Button
              size="sm"
              variant="default"
              onClick={() => onResolve(anomaly._id)}
              disabled={isLoading}
              className="bg-green-600 hover:bg-green-700"
            >
              <CheckCircle2 className="w-4 h-4 mr-1" />
              Resolve
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

const AnomalyList = ({ anomalies = [], isLoading = false }) => {
  const [acknowledgeAnomaly, { isLoading: isAcknowledging }] = useAcknowledgeAnomalyMutation();
  const [resolveAnomaly, { isLoading: isResolving }] = useResolveAnomalyMutation();

  const handleAcknowledge = async (id) => {
    try {
      await acknowledgeAnomaly(id).unwrap();
    } catch (error) {
      console.error("Failed to acknowledge anomaly:", error);
    }
  };

  const handleResolve = async (id) => {
    try {
      await resolveAnomaly({ id }).unwrap();
    } catch (error) {
      console.error("Failed to resolve anomaly:", error);
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="p-4 animate-pulse">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-gray-200 rounded-lg" />
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-200 rounded w-1/3" />
                <div className="h-3 bg-gray-200 rounded w-2/3" />
                <div className="h-3 bg-gray-200 rounded w-1/2" />
              </div>
            </div>
          </Card>
        ))}
      </div>
    );
  }

  if (anomalies.length === 0) {
    return (
      <Card className="p-8 text-center">
        <CheckCircle2 className="w-12 h-12 mx-auto text-green-500 mb-4" />
        <h3 className="text-lg font-semibold text-gray-900 mb-2">No Anomalies Detected</h3>
        <p className="text-gray-600">Your solar system is performing normally. Keep up the great work!</p>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {anomalies.map((anomaly) => (
        <AnomalyCard
          key={anomaly._id}
          anomaly={anomaly}
          onAcknowledge={handleAcknowledge}
          onResolve={handleResolve}
          isLoading={isAcknowledging || isResolving}
        />
      ))}
    </div>
  );
};

export default AnomalyList;
