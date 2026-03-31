import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Ticker from "@/components/Ticker";
import PainSection from "@/components/sections/PainSection";
import EnemySection from "@/components/sections/EnemySection";
import MechanismSection from "@/components/sections/MechanismSection";
import ForWhoSection from "@/components/sections/ForWhoSection";
import ResultsSection from "@/components/sections/ResultsSection";
import ModulesSection from "@/components/sections/ModulesSection";
import AuthoritySection from "@/components/sections/AuthoritySection";
import OfferSection from "@/components/sections/OfferSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <Hero />
    <Ticker />
    <PainSection />
    <EnemySection />
    <MechanismSection />
    <ForWhoSection />
    <ResultsSection />
    <ModulesSection />
    <AuthoritySection />
    <OfferSection />
    <FAQSection />
    <FinalCTA />
    <Footer />
  </div>
);

export default Index;
