import PageLayout from "@/components/PageLayout";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyDKOSection from "@/components/home/WhyDKOSection";
import VentasSection from "@/components/home/VentasSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import AlliesSection from "@/components/home/AlliesSection";
import CTASection from "@/components/home/CTASection";

const Index = () => (
  <PageLayout>
    <HeroSection />
    <WhyDKOSection />
    <ServicesSection />
    <VentasSection />
    <ProjectsSection />
    <AlliesSection />
    <CTASection />
  </PageLayout>
);

export default Index;
