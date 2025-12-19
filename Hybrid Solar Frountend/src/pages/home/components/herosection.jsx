import houseImage from './assests/house.png';
import LightRays from './lightrays';

import PulseBeams from './PulseBeams';

function HeroSection() {
  return (
    <section id="home" className="relative w-full overflow-hidden">
      {/* Blue Gradient Background - extends beyond viewport with curve at bottom */}
      <div className="absolute inset-0 h-[128vh]">
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-full"
          style={{
            background: 'linear-gradient(180deg, #1e1e99 0%, #2a4dd0 25%, #3b82f6 50%, #60a5fa 75%, #93c5fd 100%)',
            borderRadius: '0 0 50% 50%',
          }}
        ></div>
      </div>

      {/* Background Pattern - on top of gradient */}
      <div className="absolute inset-0 h-[140vh] overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      {/* Light Rays Effect */}
      <div 
        className="absolute inset-0 h-[128vh] overflow-hidden"
        style={{
          clipPath: 'ellipse(75% 100% at 50% 0%)',
        }}
      >
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.5}
          rayLength={3}
          followMouse={true}
          fadeDistance={1.2}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
        />
      </div>

      {/* Content - Text Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-145 px-6 pt-32 pb-5">
        {/* Badge */}
        <div className="flex items-center gap-2 px-4 py-2 mb-8 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full shadow-sm">
          <span className="flex items-center justify-center w-6 h-6 bg-white/20 rounded-md">
            <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </span>
          <span className="text-sm font-medium text-white"></span>
          <span className="text-sm text-white/80">Powering 10,000+ homes nationwide</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl  text-center text-white leading-tight tracking-tight mb-6 max-w-4xl">
          Clean Energy for Your 
          <br />
          <span className="text-white">
            Home, Zero Hassle
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/80 text-center max-w-3xl mb-10 leading-relaxed">
          Get solar panels installed at no upfront cost. Pay only for the energy you generate.   
          <br className="hidden md:block" />
          Real-time monitoring, AI-powered maintenance, and 24/7 support included.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#trial"
            className="px-8 py-3.5 bg-white text-gray-900 text-base font-medium rounded-xl hover:bg-gray-100 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 no-underline"
          >
            Sign Up
          </a> 

          <a
            href="#trial"
            className="px-8 py-3.5 bg-white text-gray-900 text-base font-medium rounded-xl hover:bg-gray-100 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 no-underline"
          >
            Get Solar
          </a> 
        </div>
      </div>

      {/* House Image Section with Gradient Beams - positioned below text content */}
      <div className="relative z-10 flex justify-center px-6 pb-16" style={{ bottom: '-8px' }}>
        {/* Container for house and beams */}
        <div className="relative w-[80%] max-w-xl md:max-w-2xl lg:max-w-3xl">
          
          {/* Gradient Beams - positioned behind the house */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ transform: 'scale(1.2)' }}>
            <PulseBeams />
          </div>
          
          {/* House Image - on top of beams */}
          <img 
            src={houseImage} 
            alt="Modern House with Solar Panels" 
            className="relative z-10 w-full h-auto object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;