import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import PriceCard from "./price_card";

const comparisonData = [
  { feature: "Upfront installation cost", traditional: "$15,000 - $25,000", hybrid: "$0" },
  { feature: "Monthly payment", traditional: "Fixed loan payment", hybrid: "Only pay for what you generate" },
  { feature: "Maintenance", traditional: "Your responsibility", hybrid: "Included free" },
  { feature: "Monitoring", traditional: "Basic or none", hybrid: "24/7 AI-powered monitoring" },
  { feature: "Support", traditional: "Limited", hybrid: "24/7 expert support" },
  { feature: "Performance guarantee", traditional: "Varies", hybrid: "100% guaranteed" },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No hidden fees, no surprises. You only pay for the clean energy your system produces.
          </p>
        </div>

        {/* Two-column layout: Comparison table on left, Price card on right */}
        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
          
          {/* Left side - Comparison table */}
          <div className="flex flex-col justify-center">
            <div className="bg-white rounded-xl border border-border overflow-hidden shadow-lg">
              <div className="grid grid-cols-3 bg-blue-100 p-4 font-semibold text-foreground">
                <div>Feature</div>
                <div className="text-center">Traditional Solar</div>
                <div className="text-center text-blue-600">Hybrid Energy</div>
              </div>
              {comparisonData.map((row, index) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-3 p-4 ${index % 2 === 0 ? "bg-white" : "bg-blue-50/30"}`}
                >
                  <div className="text-foreground font-medium">{row.feature}</div>
                  <div className="text-center text-muted-foreground text-sm">{row.traditional}</div>
                  <div className="text-center text-blue-600 font-medium text-sm">{row.hybrid}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Price Card */}
          <div className="flex items-center justify-center">
            <PriceCard />
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;