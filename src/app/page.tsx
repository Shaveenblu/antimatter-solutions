import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <main className="min-h-screen">
        <Navigation />
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}