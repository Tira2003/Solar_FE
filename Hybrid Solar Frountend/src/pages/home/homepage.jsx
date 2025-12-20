import HeroSection from './components/herosection';
import FeaturesSection from '@/components/home/features-8';
import DashboardFeature from './components/dashboard_feature';
import Testimonil from './components/testimonil';
import Footer from '@/components/home/fotter';
import Features from '@/components/home/features-1';
import EnvironmentalImpactSection from './components/environment_impact';
import ProjectGallery from './components/project_gallery';
import FAQSection from './components/faqsection';
import ContactSection from './components/contact';
import PricingSection from './components/price';
import TechGallery from './components/tech_gallery';

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      
      <HeroSection />
      <Features />
      <FeaturesSection />
      <TechGallery />
      <DashboardFeature />
      
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
