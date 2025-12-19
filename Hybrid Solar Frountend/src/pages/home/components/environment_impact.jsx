import { Leaf, TreeDeciduous, Factory, Droplets } from "lucide-react";

const stats = [
  {
    icon: Factory,
    value: "2.5M",
    unit: "tons",
    label: "CO₂ Emissions Prevented",
    description: "Equivalent to taking 540,000 cars off the road for a year",
  },
  {
    icon: TreeDeciduous,
    value: "41M",
    unit: "trees",
    label: "Trees Equivalent",
    description: "The carbon absorption of 41 million trees planted",
  },
  {
    icon: Droplets,
    value: "892M",
    unit: "gallons",
    label: "Water Saved",
    description: "Compared to traditional electricity generation",
  },
  {
    icon: Leaf,
    value: "3.8B",
    unit: "kWh",
    label: "Clean Energy Generated",
    description: "Powering homes with 100% renewable energy",
  },
];

const EnvironmentalImpactSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-900 to-blue-600 text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full border-2 border-primary-foreground" />
        <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full border-2 border-primary-foreground" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-primary-foreground" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 border border-blue-50 rounded-full mb-6">
            <Leaf className="w-4 h-4" />
            <span className="text-sm">Our Collective Impact</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">
            Together, We're Making a Difference
          </h2>
          <p className="text-small opacity-80 max-w-2xl mx-auto">
            Every Hybrid Energy installation contributes to a cleaner planet. 
            Here's the environmental impact our community has achieved together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors"
            >
              <div className="w-12 h-12 bg-primary-foreground/10 rounded-lg flex items-center justify-center mb-4">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="mb-2">
                <span className="text-4xl font-bold">{stat.value}</span>
                <span className="text-xl ml-1 opacity-80">{stat.unit}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{stat.label}</h3>
              <p className="text-sm opacity-70">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg opacity-80 mb-4">
            Your home can contribute to these numbers. Join the clean energy revolution today.
          </p>
          <div className="inline-flex items-center gap-4 bg-primary-foreground/10 rounded-full px-6 py-3">
            <span className="text-sm">Average household impact per year:</span>
            <span className="font-semibold">6.5 tons CO₂ saved</span>
            <span className="text-sm opacity-70">•</span>
            <span className="font-semibold">~100 trees equivalent</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnvironmentalImpactSection;