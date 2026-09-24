import Image from "next/image";
import ShieldCheckIcon from "../../../public/icons/ShieldCheckIcon";
import CircleXIcon from "../../../public/icons/CircleXIcon";

const PayYouAdvisory = [
  "Simultaneous comparison across 25+ lenders, banks & NBFCs for the best rate",
  "Smart matching algorithm for a sanction success rate above 95%",
  "A dedicated Relationship Manager handles your paperwork end-to-end",
  "Completely free advisory — you never pay us a fee",
  "Digital pre-approval with disbursal in as little as 24–48 hours",
];

const traditionalBankVisit = [
  "Single-bank offer, no rate comparison",
  "No fallback if one bank rejects your application",
  "Self-managed paperwork and follow-ups",
  "Standard fees apply, rarely negotiated",
  "Longer, branch-dependent disbursal timelines",
];

const stats = [
  "25+ Banks & NBFCs",
  "₹500+ Crore Loans Disbursed",
  "Bank-Grade Data Security",
  "No Advisory Fees, Ever",
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden secGap px-[4%] bg-[#E6E9EF]">
      <div className="absolute inset-0">
        <Image
          src="/images/Why_Borrowers_Choose_bg.png"
          alt="Happy family with their advisor"
          fill
          className="object-cover object-bottom-left [@media(min-width:1280px)]:object-bottom-right"
          priority={false}
        />
      </div>

      <div className="relative mx-auto max-w-(--content-width)">
        <h2 className="mb-2.5 text-[clamp(1.5rem,1.2794rem+0.9804vw,1.75rem)] md:text-[36px] lg:text-[clamp(2rem,0.4589rem+1.8051vw,2.625rem)] text-ink">
          What Makes {" "}
          <strong className="font-bold text-primary">PayYouAdvisory Different?</strong>
        </h2>
        <p className="mb-5 lg:mb-8 text-[clamp(0.875rem,0.6544rem+0.9804vw,1.125rem)] md:text-[18px] lg:text-[clamp(1rem,0.3836rem+0.722vw,1.25rem)] text-[#334155] max-w-full lg:max-w-[70%]">
          PayYouAdvisory assists eligible applicants to negotiate waivers on institutional processing fees and preferential interest rate spreads across Indian public and private sector banks.
        </p>

        <div className="grid grid-cols-[1fr_1fr_28%] gap-6 max-[1100px]:grid-cols-1">
          <div className="bg-glass-effect rounded-2xl bg-primary/15 p-7 shadow-[0px_8px_18px_rgba(0,46,102,0.14902)] backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-[18px] md:text-[20px] lg:text-[24px] font-semibold text-primary">
                PayYou Advisory
              </h3>
              <span className="rounded-[9px] bg-accent py-[0.625em] px-[1.5em] text-[8px] font-bold text-white">
                RECOMMENDED
              </span>
            </div>
            <ul className="mt-6 flex flex-col">
              {PayYouAdvisory.map((point, index) => (
                <li
                  key={point}
                  className={`flex items-center gap-3 text-[12px] md:text-[14px] lg:text-[clamp(0.8125rem,0.5043rem+0.361vw,0.9375rem)] font-medium text-ink`}
                >
                  <div className="flex w-full items-center gap-3">
                    <span className="mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-white lg:h-[27px] lg:w-[27px]">
                      <ShieldCheckIcon size={20} />
                    </span>
                    <span
                      className={`flex-1 py-3 ${index !== PayYouAdvisory.length - 1 ? "border-b border-white/18" : ""}`}
                    >
                      {point}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-glass-effect rounded-[18px] bg-[rgba(78,88,104,0.15)] p-7 shadow-[7px_14px_18px_rgba(0,46,102,0.14902)] backdrop-blur-sm">
            <h3 className="text-[18px] md:text-[20px] lg:text-[24px] font-semibold text-[#333333]">
              Traditional Bank Visit
            </h3>
            <ul className="mt-6 flex flex-col">
              {traditionalBankVisit.map((point, index) => (
                <li
                  key={point}
                  className={`flex items-start gap-3 text-[12px] md:text-[14px] lg:text-[clamp(0.8125rem,0.5043rem+0.361vw,0.9375rem)] font-medium text-ink`}
                >
                  <div className="flex w-full items-center gap-3">
                    <span className="mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-white lg:h-[27px] lg:w-[27px]">
                      <CircleXIcon size={20} />
                    </span>
                    <span
                      className={`flex-1 py-3 ${index !== traditionalBankVisit.length - 1 ? "border-b border-[#B5BBC1]" : ""}`}
                    >
                      {point}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-4 gap-5 max-[950px]:grid-cols-2">
          {stats.map((label) => (
            <div
              key={label}
              className="bg-glass-effect content-center rounded-xl bg-[rgba(248,245,240,0.12)] text-center shadow-[2px_2px_4px_rgba(0,0,0,0.25)] backdrop-blur-sm"
            >
              <p className="m-0 text-[16px] md:text-[20px] lg:text-[clamp(1.125rem,0.5086rem+0.722vw,1.375rem)] font-semibold text-ink py-[1.3636em] px-[1.5em]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
