import { notFound } from "next/navigation";
import ContactHero from "../../../../components/contact/ContactHero";
import BranchFinancialQuestionForm from "../../../../components/contact/BranchFinancialQuestionForm";
import NextStepBanner from "../../../../components/contact/NextStepBanner";
import { branches } from "../../../../data/branches";

export function generateStaticParams() {
  return branches.map((branch) => ({ slug: branch.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const branch = branches.find((item) => item.slug === slug);
  return { title: branch ? `${branch.city} Branch - Contact Us` : "Contact Us" };
}

export default async function BranchContactPage({ params }) {
  const { slug } = await params;
  const branch = branches.find((item) => item.slug === slug);

  if (!branch) {
    notFound();
  }

  return (
    <>
      <ContactHero
        title={`${branch.city} Branch - Contact Us`}
        subtitle={`Connect with our ${branch.city} team for personalised financial guidance and assistance with your financial needs.`}
      />
      <BranchFinancialQuestionForm
        city={branch.city}
        phone={branch.phone}
        whatsapp={branch.whatsapp}
        email={branch.email}
        branchCode={branch.branchCode}
        timing={branch.timing}
        address={branch.address}
        pincode={branch.pincode}
        ifscCode={branch.ifscCode}
        mapQuery={branch.mapQuery}
      />
      <NextStepBanner variant="light" />
    </>
  );
}
