import gal1 from './assests/gal1.jpg';
import gal2 from './assests/gal2.jpg';
import gal3 from './assests/gal3.jpg';

export default function TechGallery() {
    return (
        <>
            
            <h1 className="text-5xl font-semibold text-center mx-auto">Cutting-Edge Technology</h1>
            <p className="text-lg text-muted-foreground text-center mt-4 max-w-lg mx-auto">We use only the highest quality equipment to ensure maximum efficiency
                 and longevity for your solar system.</p>
            
            <div className="flex items-center gap-6 h-[400px] w-full max-w-5xl mt-10 mx-auto ">
                <div className="relative group flex-grow transition-all w-56 h-[400px] duration-500 hover:w-full">
                    <img className="h-full w-full object-cover object-center"
                        src={gal1}
                        alt="Solar Technology 1" />
                    <div
                        className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-blue-500/80 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-3xl">Advanced Solar Panels</h1>
                        <p className="text-sm">High-efficiency photovoltaic systems designed for maximum energy conversion and durability.</p>
                        <p className="text-sm font-semibold">Efficiency: 22.5% </p>
                        <p className="text-sm font-semibold">Warranty: 25 Years</p>
                       
            
                    </div>
                </div>
                <div className="relative group flex-grow transition-all w-56 h-[400px] duration-500 hover:w-full">
                    <img className="h-full w-full object-cover object-right"
                        src={gal2}
                        alt="Solar Technology 2" />
                    <div
                        className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-blue-500/80 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-3xl">Smart Inverters</h1>
                        <p className="text-sm">High-performance inverters with AI-powered optimization for maximum efficiency.</p>
                        <p className="text-sm font-semibold">Efficiency: 98.2% </p>
                        <p className="text-sm font-semibold">Warranty: 12 Years</p>            
                    </div>
                </div>
                <div className="relative group flex-grow transition-all w-56 h-[400px] duration-500 hover:w-full">
                    <img className="h-full w-full object-cover object-center"
                        src={gal3}
                        alt="Solar Technology 3" />
                    <div
                        className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-blue-500/80 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-3xl">Premium Installation</h1>
                        <p className="text-sm">Professional installation services ensuring optimal placement and system integration.</p>
            
                    </div>
                </div>
            </div>
        </>
    );
}