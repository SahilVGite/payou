import HeroSection from "../components/home/HeroSection";
import FinancialSolutions from "../components/home/FinancialSolutions";
import LoanCalculator from "../components/home/LoanCalculator";
import EligibilityChecker from "../components/home/EligibilityChecker";
import RateComparison from "../components/home/RateComparison";
import FourSteps from "../components/home/FourSteps";
import WhyChooseUs from "../components/home/WhyChooseUs";
import PartnerLogos from "../components/home/PartnerLogos";
import Testimonials from "../components/home/Testimonials";
import GoalsCta from "../components/home/GoalsCta";
import FaqSection from "../components/home/FaqSection";
import StickyWhatsapp from "@/components/common/StickyWhatsapp";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FinancialSolutions />
      <LoanCalculator />
      <EligibilityChecker />
      <RateComparison />
      <FourSteps />
      <WhyChooseUs />
      <PartnerLogos />
      <Testimonials />
      <GoalsCta />
      <FaqSection />
      <StickyWhatsapp />
    </>
  );
}
