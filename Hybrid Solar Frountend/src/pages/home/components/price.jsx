import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

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
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No hidden fees, no surprises. You only pay for the clean energy your system produces.
          </p>
        </div>

        {/* Main pricing card */}
        <div className="max-w-lg mx-auto mb-16">
          <Card className="border-2 border-primary relative overflow-hidden">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl">Pay As You Generate</CardTitle>
              <CardDescription>The smarter way to go solar</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="mb-6">
                <span className="text-5xl font-bold text-foreground">$0</span>
                <span className="text-muted-foreground ml-2">upfront</span>
              </div>
              <p className="text-muted-foreground mb-6">
                Then pay only <span className="font-semibold text-foreground">$0.08 - $0.12/kWh</span> for energy generated
              </p>
              <ul className="text-left space-y-3">
                {[
                  "Free installation & equipment",
                  "Real-time monitoring dashboard",
                  "AI-powered anomaly detection",
                  "24/7 customer support",
                  "Free maintenance for life",
                  "25-year performance guarantee",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" size="lg">
                Get Your Free Quote
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Comparison table */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Hybrid Energy vs Traditional Solar
          </h3>
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <div className="grid grid-cols-3 bg-muted/50 p-4 font-semibold text-foreground">
              <div>Feature</div>
              <div className="text-center">Traditional Solar</div>
              <div className="text-center text-primary">Hybrid Energy</div>
            </div>
            {comparisonData.map((row, index) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 p-4 ${index % 2 === 0 ? "bg-background" : "bg-muted/20"}`}
              >
                <div className="text-foreground font-medium">{row.feature}</div>
                <div className="text-center text-muted-foreground">{row.traditional}</div>
                <div className="text-center text-primary font-medium">{row.hybrid}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;