import { Link } from 'react-router';
import houseImage from './assests/house.png';
import LightRays from './lightrays';
import Button2 from '../../../components/home/ui/button2';
import Button1 from '../../../components/home/ui/button1';
import PulseBeams from './PulseBeams';
import { TextEffect } from '../../../../components/motion-primitives/text-effect.jsx';

function HeroSection() {
  return (
    <section id="home" className="relative w-full overflow-hidden">
      <div className="absolute inset-0 h-auto min-h-screen md:h-[128vh]">
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] md:w-[150%] h-full"
          style={{
            background: 'linear-gradient(180deg, #1e1e99 0%, #2a4dd0 25%, #3b82f6 50%, #60a5fa 75%, #93c5fd 100%)',
            borderRadius: '0 0 50% 50%',
          }}
        ></div>
      </div>

      <div className="absolute inset-0 h-auto min-h-screen md:h-[140vh] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px]"></div>
      </div>

      <div 
        className="absolute inset-0 h-auto min-h-screen md:h-[128vh] overflow-hidden hidden md:block"
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

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen md:min-h-[600px] lg:min-h-[720px] px-4 md:px-6 pt-24 md:pt-32 pb-8 md:pb-5">
        <div className="flex items-center gap-2 px-3 md:px-4 py-2 mb-6 md:mb-8 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full shadow-sm">
          <span className="flex items-center justify-center w-5 h-5 md:w-6 md:h-6 bg-white/20 rounded-md">
            <svg className="w-3 h-3 md:w-3.5 md:h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </span>
          <span className="text-sm font-medium text-white"></span>
          <span className="text-xs md:text-sm text-white/80">Powering 10,000+ homes nationwide</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center text-white leading-tight tracking-tight mb-4 md:mb-6 max-w-4xl px-2">
          <TextEffect preset='fade-in-blur' speedReveal={1.1} speedSegment={0.3} per="word" as="span" className="inline">
            Clean Energy for Your
          </TextEffect>
          <br />
          <TextEffect preset='fade-in-blur' speedReveal={1.1} speedSegment={0.3} per="word" delay={0.5} as="span" className="inline">
            Home, Zero Hassle
          </TextEffect>
        </h1>

        <p className="text-base md:text-lg lg:text-xl text-white/80 text-center max-w-3xl mb-8 md:mb-10 leading-relaxed px-2">
          <TextEffect preset='fade' speedReveal={1} speedSegment={1} per="word" delay={1} as="span">
            Get solar panels installed at no upfront cost. Pay only for the energy you generate. Real-time monitoring, AI-powered maintenance, and 24/7 support included.
          </TextEffect>
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4">
          <Link
            to="/sign-up"
            className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-3.5 bg-white text-gray-900 text-base font-medium rounded-xl hover:bg-gray-100 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 no-underline text-center"
          >
            Sign Up
          </Link> 

         <a href="#contact" className="w-full sm:w-auto"><Button2>Get Solar</Button2></a>
        </div>
      </div>

      <div className="relative z-10 flex justify-center px-4 md:px-6 pb-8 md:pb-16" style={{ bottom: '-8px' }}>
        <div className="relative w-full sm:w-[90%] md:w-[80%] max-w-xl md:max-w-2xl lg:max-w-3xl">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none hidden md:flex" style={{ transform: 'scale(1.2)' }}>
            <PulseBeams />
          </div>
          
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