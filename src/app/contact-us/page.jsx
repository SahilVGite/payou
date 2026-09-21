import ContactHero from "../../components/contact/ContactHero";
import FinancialQuestionForm from "../../components/contact/FinancialQuestionForm";
import GrievanceDispute from "../../components/contact/GrievanceDispute";
import NextStepBanner from "../../components/contact/NextStepBanner";
import OfficeLocations from "../../components/contact/OfficeLocations";

export const metadata = { title: "Contact Us" };

export default function ContactUsPage() {
  return (
    <>
      <ContactHero />
      <FinancialQuestionForm />
      <GrievanceDispute />
      <NextStepBanner />
      <OfficeLocations />
    </>
  );
}