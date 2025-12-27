import gal1 from './assests/gal1.jpg';
import gal2 from './assests/gal2.jpg';
import gal3 from './assests/gal3.jpg';

export default function TechGallery() {
    return (
        <section className="px-4 md:px-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mx-auto">Cutting-Edge Technology</h1>
            <p className="text-base md:text-lg text-muted-foreground text-center mt-4 max-w-lg mx-auto px-2">We use only the highest quality equipment to ensure maximum efficiency
                 and longevity for your solar system.</p>
            
            <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-6 md:h-[400px] w-full max-w-5xl mt-8 md:mt-10 mx-auto">
                <div className="relative group flex-grow transition-all h-[280px] md:h-[400px] md:w-56 duration-500 md:hover:w-full rounded-xl overflow-hidden">
                    <img className="h-full w-full object-cover object-center"
                        src={gal1}
                        alt="Solar Technology 1" />
                    <div
                        className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 text-white bg-gradient-to-t from-blue-600/90 via-blue-500/50 to-transparent md:bg-blue-500/80 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-xl md:text-3xl font-semibold">Advanced Solar Panels</h1>
                        <p className="text-xs md:text-sm mt-2">High-efficiency photovoltaic systems designed for maximum energy conversion and durability.</p>
                        <p className="text-xs md:text-sm font-semibold mt-1">Efficiency: 22.5% </p>
                        <p className="text-xs md:text-sm font-semibold">Warranty: 25 Years</p>
                    </div>
                </div>
                <div className="relative group flex-grow transition-all h-[280px] md:h-[400px] md:w-56 duration-500 md:hover:w-full rounded-xl overflow-hidden">
                    <img className="h-full w-full object-cover object-right"
                        src={gal2}
                        alt="Solar Technology 2" />
                    <div
                        className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 text-white bg-gradient-to-t from-blue-600/90 via-blue-500/50 to-transparent md:bg-blue-500/80 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-xl md:text-3xl font-semibold">Smart Inverters</h1>
                        <p className="text-xs md:text-sm mt-2">High-performance inverters with AI-powered optimization for maximum efficiency.</p>
                        <p className="text-xs md:text-sm font-semibold mt-1">Efficiency: 98.2% </p>
                        <p className="text-xs md:text-sm font-semibold">Warranty: 12 Years</p>            
                    </div>
                </div>
                <div className="relative group flex-grow transition-all h-[280px] md:h-[400px] md:w-56 duration-500 md:hover:w-full rounded-xl overflow-hidden">
                    <img className="h-full w-full object-cover object-center"
                        src={gal3}
                        alt="Solar Technology 3" />
                    <div
                        className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 text-white bg-gradient-to-t from-blue-600/90 via-blue-500/50 to-transparent md:bg-blue-500/80 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-xl md:text-3xl font-semibold">Premium Installation</h1>
                        <p className="text-xs md:text-sm mt-2">Professional installation services ensuring optimal placement and system integration.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}