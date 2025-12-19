import HeroSection from './components/herosection';
import FeaturesSection from '@/components/home/features-8';
import MagicBento from '@/components/home/grid';
import DashboardFeature from './components/dashboard_feature';
import Testimonil from './components/testimonil';
import Footer from '@/components/home/fotter';
import Features from '@/components/home/features-1';
import EnvironmentalImpactSection from './components/environment_impact';
import ProjectGallery from './components/project_gallery';
import FAQSection from './components/faqsection';
import ContactSection from './components/contact';
import PricingSection from './components/price';

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      
      <HeroSection />
      <Features />
      <FeaturesSection />
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
      <EnvironmentalImpactSection />
      <ProjectGallery />
      <Testimonil />
      <PricingSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default HomePage;
