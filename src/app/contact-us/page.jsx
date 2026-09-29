import OurOfficesCards from "@/components/contact/OurOfficesCards";
import FinancialQuestionForm from "../../components/contact/FinancialQuestionForm";
import GrievanceDispute from "../../components/contact/GrievanceDispute";
import NextStepBanner from "../../components/contact/NextStepBanner";
import OfficeLocations from "../../components/contact/OfficeLocations";
import { Phone } from "lucide-react";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import PageBanner from "@/components/common/PageBanner";

export const metadata = { title: "Contact Us" };

export default function ContactUsPage({
  breadcrumbs = [{ label: "Contact us", icon: Phone }],
}) {
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <PageBanner
        title={<><span>Contact Us</span></>}
        subtitle="Connect with us through any of our support channels and our team will ensure you receive timely and helpful assistance."
        image="/images/contactBanner.png"
        imageAlt="Contact us"
      />
      <FinancialQuestionForm />
      <OurOfficesCards />
      <GrievanceDispute />
      <NextStepBanner />
      <OfficeLocations />
    </>
  );
}
