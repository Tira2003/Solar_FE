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
    <section className="py-16 md:py-24 bg-gradient-to-b from-blue-900 to-blue-600 text-primary-foreground relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-20 md:w-40 h-20 md:h-40 rounded-full border-2 border-primary-foreground" />
        <div className="absolute bottom-20 right-20 w-32 md:w-60 h-32 md:h-60 rounded-full border-2 border-primary-foreground" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 md:w-96 h-48 md:h-96 rounded-full border border-primary-foreground" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 px-3 md:px-4 py-2 border border-blue-50 rounded-full mb-4 md:mb-6">
            <Leaf className="w-4 h-4" />
            <span className="text-xs md:text-sm">Our Collective Impact</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-4 px-2">
            Together, We're Making a Difference
          </h2>
          <p className="text-sm md:text-base opacity-80 max-w-2xl mx-auto px-2">
            Every Hybrid Energy installation contributes to a cleaner planet. 
            Here's the environmental impact our community has achieved together.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-foreground/10 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                <stat.icon className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="mb-2">
                <span className="text-2xl md:text-4xl font-bold">{stat.value}</span>
                <span className="text-base md:text-xl ml-1 opacity-80">{stat.unit}</span>
              </div>
              <h3 className="text-base md:text-lg font-semibold mb-2">{stat.label}</h3>
              <p className="text-xs md:text-sm opacity-70">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 md:mt-16 text-center">
          <p className="text-sm md:text-lg opacity-80 mb-4 px-2">
            Your home can contribute to these numbers. Join the clean energy revolution today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 bg-primary-foreground/10 rounded-2xl sm:rounded-full px-4 md:px-6 py-3">
            <span className="text-xs md:text-sm">Average household impact per year:</span>
            <div className="flex items-center gap-2 sm:gap-4">
              <span className="font-semibold text-sm md:text-base">6.5 tons CO₂ saved</span>
              <span className="text-xs md:text-sm opacity-70 hidden sm:inline">•</span>
              <span className="font-semibold text-sm md:text-base">~100 trees equivalent</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnvironmentalImpactSection;