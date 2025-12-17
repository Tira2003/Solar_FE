
import HeroSection from './components/herosection';
import FeaturesSection from '@/Components/home/features-8';
import MagicBento from '@/Components/home/grid';
import DashboardFeature from './components/dashboard_feature';
import Testimonil from './components/testimonil';
import Masonry from '@/Components/home/Masonry';
import CountUp from '@/Components/home/CountUp';
import Footer from '@/Components/home/fotter';
import Features from '@/Components/home/features-1';
import gallery1 from './components/assests/gallery1.jpg';
import gallery2 from './components/assests/gallery2.jpg';
import gallery3 from './components/assests/gallery3.jpg';
import gallery4 from './components/assests/gallery4.jpg';
import gallery5 from './components/assests/gallery5.jpg';
import gallery6 from './components/assests/gallery6.jpg';
import gallery7 from './components/assests/gallery7.jpg';
import gallery8 from './components/assests/gallery8.jpg';
import gallery9 from './components/assests/gallery9.jpg';
import gallery10 from './components/assests/gallery10.jpg';

const galleryItems = [
  {
    id: "1",
    img: gallery1,
    
    height: 400,
  },
  {
    id: "2",
    img: gallery2,
   
    height: 300,
  },
  {
    id: "3",
    img: gallery3,
    
    height: 200,
  },
  {
    id: "4",
    img: gallery4,
   
    height: 300,
  },
  {
    id: "5",
    img: gallery5,
    
    height: 400,
  },
  {
    id: "6",
    img: gallery6,
    
    height: 300,
  },
    {
    id: "7",
    img: gallery7,
   
    height: 400,
  },
    {
    id: "8",
    img: gallery8,

    height: 400,
  },
    {
    id: "9",
    img: gallery9,

    height: 600,
  },
    {
    id: "10",
    img: gallery10,
    
    height: 600,
  },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      
      <HeroSection />
      <FeaturesSection />
      <Features />
      
      <DashboardFeature />
      <section className="py-16 md:py-24  flex justify-center">
        <MagicBento 
          textAutoHide={true}
          enableStars={false}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={false}
          enableMagnetism={false}
          clickEffect={false}
          spotlightRadius={300}
          particleCount={0}
          glowColor="3, 82, 251"
        />

      </section>
      
      {/* Gallery Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center mb-12">Our Projects</h2>
        <div className="relative" style={{ minHeight: '600px' }}>
          {/* CountUp centered in the middle of the gallery */}
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none mt-84">
              {/* Inner glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/10 to-transparent"></div>
              <div className="relative flex items-center">
                <CountUp
                  from={400}
                  to={1000}
                  separator=","
                  direction="up"
                  duration={1}
                  className="text-5xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent drop-shadow-lg"
                />
                <p className="text-5xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent drop-shadow-lg">+</p>
              </div>
            
          </div>
          
          <Masonry
            items={galleryItems}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={0.95}
            blurToFocus={true}
            colorShiftOnHover={false}
          />
        </div>
      </section>

      <Testimonil />
      <Footer />
    </div>
  );
}

export default HomePage;
