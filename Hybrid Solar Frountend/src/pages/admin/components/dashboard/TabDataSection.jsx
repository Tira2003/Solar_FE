import { useState } from "react";
import { cn } from "@/lib/utils";
import PendingInvoicesList from "./PendingInvoicesList";
import CriticalAnomaliesList from "./CriticalAnomaliesList";

/**
 * TabDataSection Component
 * Tabbed container for switching between pending invoices and critical anomalies
 */
export function TabDataSection({ invoiceCount = 0, anomalyCount = 0 }) {
  const [activeTab, setActiveTab] = useState("invoices");

  const tabs = [
    {
      id: "invoices",
      label: "Pending Invoices",
      count: invoiceCount,
      color: "amber",
    },
    {
      id: "anomalies",
      label: "Critical Anomalies",
      count: anomalyCount,
      color: "red",
    },
  ];

  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
      {/* Tab Header */}
      <div className="flex items-center border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "relative flex items-center gap-2 px-6 py-4 text-sm font-medium transition-all",
              activeTab === tab.id
                ? "text-blue-600 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-blue-600"
                : "text-gray-500 hover:text-gray-700"
            )}
          >
            {tab.label}
            {tab.count > 0 && (
              <span
                className={cn(
                  "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
                  tab.color === "amber"
                    ? "bg-amber-100 text-amber-700"
                    : "bg-red-100 text-red-700"
                )}
              >
                {tab.count}
              </span>
            )}
          </button>
        ))}
        
        {/* Header actions */}
        <div className="ml-auto flex items-center gap-2 px-4">
          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
            See All
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-5">
        {activeTab === "invoices" ? (
          <PendingInvoicesList />
        ) : (
          <CriticalAnomaliesList />
        )}
      </div>
    </div>
  );
}

export default TabDataSection;
