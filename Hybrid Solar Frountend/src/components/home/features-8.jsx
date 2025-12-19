import { Card, CardContent } from '@/Components/home/card2'
import { Shield, Users } from 'lucide-react'
import { Activity,Headphones, TrendingUp, Zap,  } from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Real-Time Monitoring",
    description: "Track every watt produced with our intuitive dashboard. See your savings accumulate in real-time.",
  },
  {
    icon: Shield,
    title: "AI Anomaly Detection",
    description: "Our AI continuously monitors your system health and detects issues before they become problems.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our expert support team is always available to help. Get answers whenever you need them.",
  },
  {
    icon: TrendingUp,
    title: "Performance Guarantee",
    description: "We guarantee your system will perform as promised, or we'll make it right.",
  },
  {
    icon: Zap,
    title: "Zero Upfront Cost",
    description: "No installation fees, no hidden charges. Start generating clean energy immediately.",
  },

];

export default function FeaturesSection() {
    const Icon0 = features[0].icon;
    const Icon1 = features[1].icon;
    const Icon2 = features[2].icon;
    const Icon3 = features[3].icon;
    const Icon4 = features[4].icon;

    return (
        <section className="bg-gray-50 py-16 md:py-32 dark:bg-transparent">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center mb-16">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
                        Why Choose Hybrid Energy
                    </h2>
                    <p className="mt-4">
                        We've reimagined solar energy to be smarter, simpler, and more affordable than ever.
                    </p>
                </div>
                
                <div className="relative">
                    <div className="relative z-10 grid grid-cols-6 gap-3">
                        <Card className="relative col-span-full flex overflow-hidden lg:col-span-2">
                            <CardContent className="relative m-auto size-fit pt-6">
                                <div className="flex flex-col items-center text-center space-y-4">
                                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                                        <Icon0 className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white">
                                        {features[0].title}
                                    </h3>
                                    <p className="text-white text-sm">
                                        {features[0].description}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card
                            className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2">
                            <CardContent className="pt-6">
                                <div className="flex flex-col items-center text-center space-y-4">
                                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                                        <Icon1 className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white">
                                        {features[1].title}
                                    </h3>
                                    <p className="text-white text-sm">
                                        {features[1].description}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card
                            className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2">
                            <CardContent className="pt-6">
                                <div className="flex flex-col items-center text-center space-y-4">
                                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                                        <Icon2 className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white">
                                        {features[2].title}
                                    </h3>
                                    <p className="text-white text-sm">
                                        {features[2].description}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card
                            className="card variant-outlined relative col-span-full overflow-hidden lg:col-span-3">
                            <CardContent className="pt-6">
                                <div className="flex flex-row items-start gap-4">
                                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Icon3 className="w-7 h-7 text-white" />
                                    </div>
                                    <div className="flex flex-col space-y-2">
                                        <h3 className="text-xl font-semibold text-white">
                                            {features[3].title}
                                        </h3>
                                        <p className="text-white text-sm">
                                            {features[3].description}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card
                            className="card variant-outlined relative col-span-full overflow-hidden lg:col-span-3">
                            <CardContent className="pt-6">
                                <div className="flex flex-row items-start gap-4">
                                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Icon4 className="w-7 h-7 text-white" />
                                    </div>
                                    <div className="flex flex-col space-y-2">
                                        <h3 className="text-xl font-semibold text-white">
                                            {features[4].title}
                                        </h3>
                                        <p className="text-white text-sm ">
                                            {features[4].description}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}