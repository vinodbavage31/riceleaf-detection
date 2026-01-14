import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DiseasesSection from "@/components/DiseasesSection";
import StatsSection from "@/components/StatsSection";
import MethodologySection from "@/components/MethodologySection";
import TechStackSection from "@/components/TechStackSection";
import PredictionSection from "@/components/PredictionSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <DiseasesSection />
      <PredictionSection />
      <StatsSection />
      <section id="methodology">
        <MethodologySection />
      </section>
      <TechStackSection />
      <FooterSection />
    </main>
  );
};

export default Index;
