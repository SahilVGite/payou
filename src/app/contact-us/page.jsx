import OurOfficesCards from "@/components/contact/OurOfficesCards";
import FinancialQuestionForm from "../../components/contact/FinancialQuestionForm";
import GrievanceDispute from "../../components/contact/GrievanceDispute";
import NextStepBanner from "../../components/contact/NextStepBanner";
import OfficeLocations from "../../components/contact/OfficeLocations";
import { Phone } from "lucide-react";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import PageBanner from "@/components/common/PageBanner";

export const metadata = {
  // `absolute` skips the root layout's "%s | Pay You Advisory" title template.
  title: {
    absolute: "Contact PayYou Advisory | Loan Advisor & DSA Partner in Pune",
  },
  description:
    "Contact PayYou Advisory — Pune's trusted loan DSA partner. Free eligibility check for Personal Loan, Home Loan, Business Loan & LAP. Call us today!",
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "PayYou Advisory",
  url: "https://payyouadvisory.com/contact-us",
  telephone: "+91-9175535507",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Office No. 3, 4, 5, 6, Vishal Arcade, Chapekar Chowk, Opp. to Sonigara Jwellers, Pimpri Chinchwad (Municipal Corporation), Haveli, Pune",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    postalCode: "411033",
    addressCountry: "IN",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "09:30",
    closes: "18:30",
  },
  areaServed: ["Pune", "Maharashtra", "India"],
  serviceType: [
    "Loan Advisory",
    "Home Loan Consultant",
    "Personal Loan DSA",
    "Business Loan Consultant",
    "Finance Consultant Pune",
  ],
};

export default function ContactUsPage({
  breadcrumbs = [{ label: "Contact us", icon: Phone }],
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Breadcrumbs items={breadcrumbs} />
      <PageBanner
        title={
          <>
            Talk to Your <span>Loan Advisory Team</span>
          </>
        }
        subtitle="Have a question about a loan, insurance, or investment? Reach out, and we'll help you find the right answer, fast."
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
