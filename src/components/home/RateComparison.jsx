"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import Dropdown from "../common/Dropdown";
import { POPUPS, usePopup } from "../popup/PopupProvider";

const filters = ["All", "PERSONAL LOAN", "HOME LOAN", "BUSINESS LOAN", "LAP"];

const sbi = {
  name: "State Bank of India (SBI)",
  highlight: { text: "Lowest Secured ROI", tone: "blue" },
  facility: "Home Loan",
  rate: "8.30% - 9.15%",
  fee: "0.17% (Max ₹5,000)",
  speed: "48 - 72 Hours",
};
const hdfc = {
  name: "HDFC Bank",
  highlight: { text: "Fastest Disbursal", tone: "red" },
  facility: "Personal Loan",
  rate: "10.49% - 14.50%",
  fee: "Up to 1.50%",
  speed: "24 Hours Instant",
};
const icici = {
  name: "ICICI Bank",
  highlight: { text: "Pro-Approved Offers", tone: "blue" },
  facility: "Personal Loan",
  rate: "10.65% - 15.00%",
  fee: "0.99% - 1.99%",
  speed: "24 Hours",
};
const bajaj = {
  name: "Bajaj Finserv",
  highlight: { text: "Collateral-Free MSME", tone: "blue" },
  facility: "Business Loan",
  rate: "12.50% - 18.00%",
  fee: "1.50% - 2.50%",
  speed: "24 - 48 Hours",
};
const tataCapital = {
  name: "Tata Capital",
  highlight: { text: "Minimal Paperwork", tone: "red" },
  facility: "Lap",
  rate: "12.99% - 17.50%",
  fee: "1.25% - 2.00%",
  speed: "48 Hours",
};

// Same lender lineup is shown under every filter pill, matching the design.
const lenders = [sbi, hdfc, icici, bajaj, tataCapital, bajaj, sbi, hdfc, icici, bajaj].map((lender, index) => ({
  ...lender,
  id: `${lender.name}-${index}`,
}));

// Cards shown on mobile/tablet before "View all" — keeps the stacked layout from turning the
// full list into a long scroll.
const MOBILE_CARD_LIMIT = 4;

const toneClasses = {
  blue: "text-primary",
  red: "text-accent",
};

export default function RateComparison() {
  const [activeFilter, setActiveFilter] = useState("All");
  const { openPopup } = usePopup();
  // Same contact-number popup as the site's APPLY NOW CTAs, tagged with the lender and loan
  // type the visitor picked so the team knows which offer they're after.
  const openApplyPopup = (lender) =>
    openPopup(POPUPS.CONTACT_NUMBER, {
      source: { page: "Home", section: `Rate Comparison – ${lender.name} (${lender.facility})`, button: "APPLY" },
    });
  const [showAllCards, setShowAllCards] = useState(false);

  const changeFilter = (filter) => {
    setActiveFilter(filter);
    setShowAllCards(false);
  };

  const visibleLenders =
    activeFilter === "All"
      ? lenders
      : lenders.filter((lender) => lender.facility.toUpperCase() === activeFilter.toUpperCase());
  const cardLenders = showAllCards ? visibleLenders : visibleLenders.slice(0, MOBILE_CARD_LIMIT);
  const hiddenCardCount = visibleLenders.length - MOBILE_CARD_LIMIT;

  return (
    <section className="secGap px-[4%]" style={{ backgroundImage: "url('/images/Indias_Top_Lenders_Bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="mx-auto max-w-(--content-width)">
        <h2 className="mb-2.5 text-[clamp(1.5rem,1.2794rem+0.9804vw,1.75rem)] md:text-[36px] lg:text-[clamp(2rem,0.4589rem+1.8051vw,2.625rem)] tracking-[-1px] text-ink">
          Best Interest Rate Comparison Across{" "}
          <strong className="font-bold text-primary">India&apos;s Top Lenders</strong>
        </h2>
        <p className="mb-[2.7em] text-[clamp(0.875rem,0.6544rem+0.9804vw,1.125rem)] md:text-[18px] lg:text-[clamp(1rem,0.3836rem+0.722vw,1.25rem)] text-[#4B5563]">
          With our financial solutions, we compare loan options across banks and NBFCs on rate, fees, and speed.
        </p>

        <div className="mb-4 lg:hidden">
          <Dropdown
            value={activeFilter}
            onChange={changeFilter}
            options={filters}
            className="rounded-full border border-white/40 bg-primary/10 py-3.25 pl-4.5 pr-4.5 text-[12px] md:text-[14px] font-semibold text-[#10192b] backdrop-blur-lg"
            ariaLabel="Filter lenders"
          />
        </div>

        <div className="mb-4 hidden gap-3 overflow-x-auto lg:flex">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => changeFilter(filter)}
              className={`rounded-[10px] px-[2.5714em] py-[1.1428em] text-[clamp(0.5625rem,0.3839rem+0.8929vw,0.8125rem)] md:text-[13px] lg:text-[clamp(0.75rem,0.4418rem+0.361vw,0.875rem)] font-semibold text-white tracking-wide whitespace-nowrap cursor-pointer transition ${
                activeFilter === filter
                  ? "bg-accent shadow-[0_6px_14px_rgba(177,31,36,0.28)]"
                  : "bg-[#134b96] hover:bg-primary"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Below lg (same breakpoint where the filter pills become a dropdown) each lender is a
            stacked card instead of a table row, so the 6 columns never need horizontal scrolling. */}
        <div className="grid gap-2.5 sm:grid-cols-2 lg:hidden">
          {cardLenders.map((lender) => (
            <div
              key={lender.id}
              className="rounded-[14px] border border-[#dce1e7] bg-white/60 px-3.5 py-3 shadow-[0_6px_18px_rgba(16,25,43,0.08)] backdrop-blur-sm"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="m-0 text-[14px] md:text-[15px] font-bold leading-snug text-[#4B5563]">{lender.name}</p>
                  <span className="mt-1 inline-block rounded-full bg-primary/10 px-2 py-0.5 text-[10px] md:text-[11px] font-semibold text-primary">
                    {lender.facility}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => openApplyPopup(lender)}
                  className="inline-flex shrink-0 items-center gap-1 rounded-full bg-primary px-4 py-1.5 text-[12px] md:text-[13px] font-bold text-white transition hover:bg-primary cursor-pointer"
                >
                  <CheckCircle2 size={15} />
                  Apply
                </button>
              </div>
              <dl className="m-0 mt-2.5 grid grid-cols-3 gap-2 border-t border-[#A6B6CB]/50 pt-2.5">
                <div>
                  <dt className="text-[10px] md:text-[11px] font-semibold uppercase tracking-wide text-[#4B5563]">Interest Rate</dt>
                  <dd className="m-0 mt-1 text-[11px] md:text-[13px] font-medium text-accent">{lender.rate}</dd>
                </div>
                <div>
                  <dt className="text-[10px] md:text-[11px] font-semibold uppercase tracking-wide text-[#4B5563]">Processing Fee</dt>
                  <dd className="m-0 mt-1 text-[11px] md:text-[13px] font-medium text-ink">{lender.fee}</dd>
                </div>
                <div>
                  <dt className="text-[10px] md:text-[11px] font-semibold uppercase tracking-wide text-[#4B5563]">Sanction Speed</dt>
                  <dd className="m-0 mt-1 text-[11px] md:text-[13px] font-medium text-primary">{lender.speed}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
        {hiddenCardCount > 0 ? (
          <div className="mt-4 text-center lg:hidden">
            <button
              type="button"
              onClick={() => setShowAllCards((open) => !open)}
              aria-expanded={showAllCards}
              className="rounded-full border border-primary px-6 py-2 text-[12px] md:text-[14px] font-semibold uppercase tracking-wide text-primary transition hover:bg-primary hover:text-white cursor-pointer"
            >
              {showAllCards ? "Show less" : `View all ${visibleLenders.length} lenders`}
            </button>
          </div>
        ) : null}

        <div className="hidden overflow-hidden rounded-[18px] border border-[#dce1e7] bg-white/8 shadow-[0_10px_30px_rgba(16,25,43,0.08)] lg:block">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[820px] border-collapse text-left">
              <thead>
                <tr className="bg-primary/15 text-[12px] md:text-[16px] lg:text-[clamp(0.9375rem,0.4752rem+0.5415vw,1.125rem)] font-semibold uppercase tracking-wide leading-[1.2] md:whitespace-nowrap text-[#10192C]">
                  <th className="px-[clamp(0.75rem,-0.75rem+1.875vw,1.5rem)] py-[clamp(0.5rem,-0.5rem+1.25vw,1rem)]">Lender Name</th>
                  <th className="px-[clamp(0.75rem,-0.75rem+1.875vw,1.5rem)] py-[clamp(0.5rem,-0.5rem+1.25vw,1rem)]">Facility Type</th>
                  <th className="px-[clamp(0.75rem,-0.75rem+1.875vw,1.5rem)] py-[clamp(0.5rem,-0.5rem+1.25vw,1rem)]">Starting Interest Rate</th>
                  <th className="px-[clamp(0.75rem,-0.75rem+1.875vw,1.5rem)] py-[clamp(0.5rem,-0.5rem+1.25vw,1rem)]">Standard Processing Fee</th>
                  <th className="px-[clamp(0.75rem,-0.75rem+1.875vw,1.5rem)] py-[clamp(0.5rem,-0.5rem+1.25vw,1rem)]">Sanction Speed</th>
                  <th className="px-[clamp(0.75rem,-0.75rem+1.875vw,1.5rem)] py-[clamp(0.5rem,-0.5rem+1.25vw,1rem)] text-right">Instant Action</th>
                </tr>
              </thead>
              <tbody>
                {visibleLenders.map((lender, index) => (
                  <tr
                    key={lender.id}
                    className={`border-t border-[#A6B6CB]/50 transition hover:bg-[#f5f8fc]`}
                  >
                    <td className="px-[clamp(0.75rem,-0.75rem+1.875vw,1.5rem)] py-[clamp(0.5rem,-0.5rem+1.25vw,1rem)]">
                      <span className="flex flex-wrap items-center gap-2.5">
                        <span className="text-[12px] md:text-[14px] lg:text-[clamp(0.875rem,0.5668rem+0.361vw,1rem)] font-bold text-[#4B5563] md:whitespace-nowrap">{lender.name}</span>
                        {/* <span className={`inline-block rounded-sm px-[0.5833em] py-[0.3333em] text-[10px] md:text-[12px] bg-white font-medium whitespace-nowrap ${toneClasses[lender.highlight.tone]}`}>
                          {lender.highlight.text}
                        </span> */}
                      </span>
                    </td>
                    <td className="px-[clamp(0.75rem,-0.75rem+1.875vw,1.5rem)] py-[clamp(0.5rem,-0.5rem+1.25vw,1rem)] text-[clamp(0.5625rem,0.3839rem+0.8929vw,0.8125rem)] md:text-[13px] lg:text-[clamp(0.75rem,0.4418rem+0.361vw,0.875rem)] font-medium text-[#10192C]">{lender.facility}</td>
                    <td className="px-[clamp(0.75rem,-0.75rem+1.875vw,1.5rem)] py-[clamp(0.5rem,-0.5rem+1.25vw,1rem)] text-[clamp(0.5625rem,0.3839rem+0.8929vw,0.8125rem)] md:text-[13px] lg:text-[clamp(0.75rem,0.4418rem+0.361vw,0.875rem)] text-accent">{lender.rate}</td>
                    <td className="px-[clamp(0.75rem,-0.75rem+1.875vw,1.5rem)] py-[clamp(0.5rem,-0.5rem+1.25vw,1rem)] text-[clamp(0.5625rem,0.3839rem+0.8929vw,0.8125rem)] md:text-[13px] lg:text-[clamp(0.75rem,0.4418rem+0.361vw,0.875rem)] font-medium text-ink">{lender.fee}</td>
                    <td className="px-[clamp(0.75rem,-0.75rem+1.875vw,1.5rem)] py-[clamp(0.5rem,-0.5rem+1.25vw,1rem)] text-[clamp(0.5625rem,0.3839rem+0.8929vw,0.8125rem)] md:text-[13px] lg:text-[clamp(0.75rem,0.4418rem+0.361vw,0.875rem)] font-medium text-primary">{lender.speed}</td>
                    <td className="px-[clamp(0.75rem,-0.75rem+1.875vw,1.5rem)] py-[clamp(0.5rem,-0.5rem+1.25vw,1rem)] text-right">
                      <button
                        type="button"
                        onClick={() => openApplyPopup(lender)}
                        className="inline-flex items-center gap-1.5 rounded-full bg-primary px-[3.3333em] py-[0.6666em] text-[12px] md:text-[14px] lg:text-[clamp(0.8125rem,0.5043rem+0.361vw,0.9375rem)] font-bold text-white transition hover:bg-primary cursor-pointer"
                      >
                        <CheckCircle2 size={18} />
                        Apply
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
