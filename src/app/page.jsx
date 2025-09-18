import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesOverview from "@/components/ServicesOverview";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CallToActionSection from "@/components/CallToActionSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import TrackingPixels from "@/components/TrackingPixels";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <TrackingPixels />
      <Header />
      <HeroSection />
      <ServicesOverview />
      <WhyChooseUs />
      <TestimonialsSection />
      <CallToActionSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}