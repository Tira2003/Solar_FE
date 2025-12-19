import { Card, CardContent, CardHeader } from '@/components/home/ui/card'
import { Home, Activity, Zap, Wallet } from 'lucide-react'

export default function Features() {
    return (
        <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">How It Works</h2>
                    <p className="mt-4">Going solar has never been easier. Four simple steps to clean, affordable energy.</p>
                </div>
                <div
                    className="@min-4xl:max-w-full @min-4xl:grid-cols-4 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">
                    <Card className="group shadow-zinc-950/5 ">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Home className="size-6 text-primary" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6  text-2xl font-medium">Free Assessment</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm">
                                We evaluate your home's solar potential and design a custom system tailored to your energy needs.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Zap className="size-6 text-primary" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6 text-2xl font-medium">Professional Installation</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm">Our certified technicians install your solar panels with zero upfront cost. 
                                Takes just 1-2 days.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Activity className="size-6 text-primary" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6 text-2xl font-medium">Real-Time Monitoring</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm">
                                Track your energy production 24/7 through our smart dashboard. 
                                AI detects issues before they happen.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Wallet className="size-6 text-primary" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6 text-2xl  font-medium">Pay As You Generate</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm">
                                
                                Only pay for the clean energy your system produces. No hidden fees, no surprises.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}

const CardDecorator = ({
    children
}) => (
    <div
        className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
        <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-50" />

        <div
            className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">{children}</div>
    </div>
)
