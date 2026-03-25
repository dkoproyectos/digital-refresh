import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyDKOSection from "@/components/home/WhyDKOSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import AlliesSection from "@/components/home/AlliesSection";
import CTASection from "@/components/home/CTASection";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <ServicesSection />
      <WhyDKOSection />
      <ProjectsSection />
      <AlliesSection />
      <CTASection />
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default Index;
