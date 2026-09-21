import { CheckCircle2 } from "lucide-react";
import SecureBadgeIcon from "../../../public/icons/SecureBadgeIcon";
import DigitalKycIcon from "../../../public/icons/DigitalKycIcon";
import InstantApprovalIcon from "../../../public/icons/InstantApprovalIcon";

const steps = [
  {
    number: "01",
    icon: SecureBadgeIcon,
    title: "Check Eligibility & Offers",
    description: "Share basic details and instantly view personalized loan offers from 50+ banks and NBFCs.",
    tag: "Soft Credit Check",
  },
  {
    number: "02",
    icon: DigitalKycIcon,
    title: "Digital KYC & Paperless Upload",
    description: "Complete your KYC and upload documents online — no branch visits, no endless paperwork.",
    tag: "100% Paperless",
  },
  {
    number: "03",
    icon: InstantApprovalIcon,
    title: "Instant Sanction & Approval",
    description: "Get your loan sanctioned quickly with rates locked in and zero surprises.",
    tag: "Rate Guaranteed",
  },
  {
    number: "04",
    icon: SecureBadgeIcon,
    title: "Direct Account Disbursal",
    description: "Approved funds are credited directly to your bank account, fast and securely.",
    tag: "Express Credit",
  },
];

export default function FourSteps() {
  return (
    <section
      className="secGap px-[4%]"
      style={{ backgroundImage: "url('/images/fourSimpleStepsBg.png')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="mx-auto max-w-(--content-width)">
        <h2 className="mb-2.5 text-center text-[clamp(1.5rem,1.2794rem+0.9804vw,1.75rem)] md:text-[36px] lg:text-[clamp(2rem,0.4589rem+1.8051vw,2.625rem)] text-ink">
          From Application to Bank Disbursal in <strong className="font-bold text-primary">4 Simple Steps</strong>
        </h2>
        <p className="mx-auto text-center text-[clamp(0.875rem,0.6544rem+0.9804vw,1.125rem)] md:text-[18px] lg:text-[clamp(1rem,0.3836rem+0.722vw,1.25rem)] text-[#4B5563] mb-[3.8em]">
          Engineered for frictionless speed. No physical queues, no branch visits, and zero endless document notarizations.
        </p>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ number, icon: Icon, title, description, tag }) => (
            <div
              key={number}
              className="flex flex-col rounded-[18px] bg-[#E3E5EA]/35 px-6 py-8 shadow-[0px_10px_30px_-8px_rgba(0,0,0,0.21),inset_0px_10px_15px_-10px_rgba(0,0,0,0.1)] backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(16,25,43,0.14),inset_0px_10px_15px_-10px_rgba(0,0,0,0.15)]"
            >
              <span className="text-[18px] md:text-[22px] lg:text-[clamp(1.25rem,0.3254rem+1.083vw,1.625rem)] font-bold text-primary mb-[0.7692em]">{number}</span>
              <Icon size={44} color="#134b96" className="" id={`four-steps-${number}`} />
              <h3 className="mt-[1em] text-[clamp(0.875rem,0.6544rem+0.9804vw,1.125rem)] md:text-[18px] lg:text-[clamp(1rem,0.3836rem+0.722vw,1.25rem)] font-bold text-primary">{title}</h3>
              <p className="mt-[0.1041em] flex-1 text-[12px] md:text-[14px] lg:text-[clamp(0.875rem,0.5668rem+0.361vw,1rem)] font-medium text-[#4B5563]/56">{description}</p>
              <span className="mt-4 flex items-center gap-1.5 border-t border-primary/16 pt-4 text-[12px] md:text-[14px] lg:text-[clamp(0.8125rem,0.5043rem+0.361vw,0.9375rem)] font-semibold text-primary">
                <CheckCircle2 size={18} />
                {tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
