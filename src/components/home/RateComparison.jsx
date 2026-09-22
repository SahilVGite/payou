"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import Dropdown from "../common/Dropdown";

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

const toneClasses = {
  blue: "text-primary",
  red: "text-accent",
};

export default function RateComparison() {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleLenders =
    activeFilter === "All"
      ? lenders
      : lenders.filter((lender) => lender.facility.toUpperCase() === activeFilter.toUpperCase());

  return (
    <section className="secGap px-[4%]" style={{ backgroundImage: "url('/images/Indias_Top_Lenders_Bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="mx-auto max-w-(--content-width)">
        <h2 className="mb-2.5 text-[clamp(1.5rem,1.2794rem+0.9804vw,1.75rem)] md:text-[36px] lg:text-[clamp(2rem,0.4589rem+1.8051vw,2.625rem)] tracking-[-1px] text-ink">
          Live Interest Rate Comparison Across{" "}
          <strong className="font-bold text-primary">India&apos;s Top Lenders</strong>
        </h2>
        <p className="mb-[2.7em] text-[clamp(0.875rem,0.6544rem+0.9804vw,1.125rem)] md:text-[18px] lg:text-[clamp(1rem,0.3836rem+0.722vw,1.25rem)] text-[#4B5563]">
          Compare public &amp; private banks, with PayYouAdvisory securing fee waivers and preferential rates for
          eligible applicants.
        </p>

        <div className="mb-4 lg:hidden">
          <Dropdown
            value={activeFilter}
            onChange={setActiveFilter}
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
              onClick={() => setActiveFilter(filter)}
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

        <div className="overflow-hidden rounded-[18px] border border-[#dce1e7] bg-white/8 shadow-[0_10px_30px_rgba(16,25,43,0.08)]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[820px] border-collapse text-left">
              <thead>
                <tr className="bg-primary/15 text-[14px] md:text-[16px] lg:text-[clamp(0.9375rem,0.4752rem+0.5415vw,1.125rem)] font-semibold uppercase tracking-wide whitespace-nowrap text-[#10192C]">
                  <th className="px-6 py-4">Lender Name</th>
                  <th className="px-6 py-4">Facility Type</th>
                  <th className="px-6 py-4">Starting Interest Rate</th>
                  <th className="px-6 py-4">Standard Processing Fee</th>
                  <th className="px-6 py-4">Sanction Speed</th>
                  <th className="px-6 py-4 text-right">Instant Action</th>
                </tr>
              </thead>
              <tbody>
                {visibleLenders.map((lender, index) => (
                  <tr
                    key={lender.id}
                    className={`border-t border-[#A6B6CB]/50 transition hover:bg-[#f5f8fc]`}
                  >
                    <td className="px-6 py-4">
                      <span className="flex flex-wrap items-center gap-2.5">
                        <span className="text-[12px] md:text-[14px] lg:text-[clamp(0.875rem,0.5668rem+0.361vw,1rem)] font-bold text-[#4B5563] whitespace-nowrap">{lender.name}</span>
                        <span className={`inline-block rounded-sm px-[0.5833em] py-[0.3333em] text-[10px] md:text-[12px] bg-white font-medium whitespace-nowrap ${toneClasses[lender.highlight.tone]}`}>
                          {lender.highlight.text}
                        </span>
                      </span>
                    </td>
                    <td className="px-6 py-4 text-[clamp(0.5625rem,0.3839rem+0.8929vw,0.8125rem)] md:text-[13px] lg:text-[clamp(0.75rem,0.4418rem+0.361vw,0.875rem)] font-medium text-[#10192C]">{lender.facility}</td>
                    <td className="px-6 py-4 text-[clamp(0.5625rem,0.3839rem+0.8929vw,0.8125rem)] md:text-[13px] lg:text-[clamp(0.75rem,0.4418rem+0.361vw,0.875rem)] text-accent">{lender.rate}</td>
                    <td className="px-6 py-4 text-[clamp(0.5625rem,0.3839rem+0.8929vw,0.8125rem)] md:text-[13px] lg:text-[clamp(0.75rem,0.4418rem+0.361vw,0.875rem)] font-medium text-ink">{lender.fee}</td>
                    <td className="px-6 py-4 text-[clamp(0.5625rem,0.3839rem+0.8929vw,0.8125rem)] md:text-[13px] lg:text-[clamp(0.75rem,0.4418rem+0.361vw,0.875rem)] font-medium text-primary">{lender.speed}</td>
                    <td className="px-6 py-4 text-right">
                      <button
                        type="button"
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
