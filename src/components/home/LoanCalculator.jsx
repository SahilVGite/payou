"use client";

import { useMemo, useState } from "react";
import {
  CalendarRange,
  IndianRupee,
  Percent,
  TrendingUp,
} from "lucide-react";
import LoansTabIcon from "../../../public/icons/LoansTabIcon";
import Dropdown from "../common/Dropdown";
import { useEditableNumber } from "../../hooks/useEditableNumber";

const tabs = [
  { label: "Personal Loan EMI Calculator", icon: LoansTabIcon },
  { label: "Home Loan EMI Calculator", icon: TrendingUp },
  { label: "Business Loan EMI Calculator", icon: TrendingUp },
  { label: "Loan Eligibility Calculator", icon: TrendingUp },
];

const formatInr = (value) => `₹${Math.round(value).toLocaleString("en-IN")}`;

export default function LoanCalculator() {
  const [activeTab, setActiveTab] = useState(tabs[0].label);
  const principalField = useEditableNumber(2500000, {
    min: 200000,
    max: 50000000,
    format: (value) => value.toLocaleString("en-IN"),
  });
  const rateField = useEditableNumber(10.5, { min: 6.5, max: 20, decimals: 1, format: (value) => value.toFixed(1) });
  const tenureField = useEditableNumber(10, { min: 1, max: 30 });
  const principal = principalField.value;
  const rate = rateField.value;
  const tenure = tenureField.value;

  const { emi, totalInterest, totalAmount, principalPercent, interestPercent } =
    useMemo(() => {
      const monthlyRate = rate / 12 / 100;
      const months = tenure * 12;
      const factor = Math.pow(1 + monthlyRate, months);
      const monthlyEmi = (principal * monthlyRate * factor) / (factor - 1);
      const total = monthlyEmi * months;
      const interest = total - principal;
      return {
        emi: monthlyEmi,
        totalInterest: interest,
        totalAmount: total,
        principalPercent: Math.round((principal / total) * 100),
        interestPercent: Math.round((interest / total) * 100),
      };
    }, [principal, rate, tenure]);

  return (
    <section className="px-[4%] secGap">
      <div className="mx-auto max-w-(--content-width)">
        <h2 className="mb-2 md:mb-3 text-left md:text-center text-[clamp(1.5rem,1.2794rem+0.9804vw,1.75rem)] md:text-[36px] lg:text-[clamp(2rem,0.4589rem+1.8051vw,2.625rem)] leading-tight text-ink">
          Plan Your Loan with{" "}
          <strong className="font-bold text-primary">Confidence</strong>
        </h2>
        <p className="mx-auto mb-(--sec-gap) text-left md:text-center text-[16px] md:text-[16px] lg:text-[20px] text-[#4B5563]">
          Calculate your EMI, interest, and total repayment instantly to choose
          a loan that fits your budget.
        </p>

        <div className="mb-4 lg:hidden">
          <Dropdown
            value={activeTab}
            onChange={setActiveTab}
            options={tabs.map(({ label }) => label)}
            className="rounded-full border border-white/40 bg-primary/10 py-3.25 pl-4.5 pr-4.5 text-[12px] md:text-[14px] font-semibold text-[#10192b] backdrop-blur-lg"
            ariaLabel="Choose a calculator"
          />
        </div>

        <div className="relative hidden max-w-[90%] [@media(min-width:1500px)]:max-w-[85%] z-10 mx-auto -mb-5 [@media(min-width:1500px)]:justify-center overflow-hidden overflow-x-auto rounded-[14px] bg-[#E1E7F1]/70 backdrop-blur-sm px-2 shadow-[0_10px_24px_rgba(16,25,43,0.1)] lg:flex">
          <div className="flex w-fit justify-evenly gap-1">
            {tabs.map(({ label, icon: Icon }) => {
              const isActive = activeTab === label;
              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => setActiveTab(label)}
                  className={`relative flex items-center gap-2 rounded-full px-4 lg:px-[] py-4 text-[12px] md:text-[14px] lg:text-[clamp(0.8125rem,0.5043rem+0.361vw,0.9375rem)] font-bold uppercase tracking-wide whitespace-nowrap cursor-pointer transition ${
                    isActive
                      ? "text-primary "
                      : "text-[#092B49] hover:text-primary"
                  }`}
                >
                  <Icon size={18} />
                  {label}
                  {isActive ? (
                    <span className="absolute inset-x-4 bottom-0 h-0.75 rounded-full bg-[#134b96]" />
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-4xl bg-primary pt-16">
          <div className="grid grid-cols-[1.15fr_48%] gap-10 px-[clamp(0.9375rem,-0.375rem+6.5625vw,7.5rem)] pb-10 max-[1024px]:grid-cols-1 max-[480px]:px-6">
            <div>
              <h3 className="mb-8 text-[clamp(1.5rem,1.2794rem+0.9804vw,1.75rem)] md:text-[36px] lg:text-[clamp(2rem,0.4589rem+1.8051vw,2.625rem)] tracking-[-1px] text-white">
                Flexible Online{" "}
                <strong className="font-bold">Loan Calculator</strong>
              </h3>

              <div className="lg:max-w-[523px]">
                <div className="mb-7">
                  <div className="mb-3 flex items-center justify-between text-[14px] md:text-[16px] lg:text-[clamp(0.9375rem,0.4752rem+0.5415vw,1.125rem)] font-medium text-white">
                    <span className="flex items-center gap-2">
                      <IndianRupee
                        size={16}
                        className="text-white font-inter"
                      />
                      Loan Principal Amount
                    </span>
                    <span className="flex items-center gap-1 rounded-md bg-white px-3 py-1 font-cairo font-bold text-[#0F172A]">
                      <span className="text-[13px] md:text-[14px] lg:text-[15px]">₹</span>
                      <input
                        type="text"
                        inputMode="decimal"
                        aria-label="Loan principal amount"
                        value={principalField.text}
                        onChange={(event) => principalField.handleChange(event.target.value)}
                        onFocus={principalField.handleFocus}
                        onBlur={principalField.handleBlur}
                        className="w-20 md:w-24 bg-transparent text-[13px] md:text-[14px] lg:text-[15px] outline-none"
                      />
                    </span>
                  </div>
                  <input
                    type="range"
                    min="200000"
                    max="50000000"
                    step="50000"
                    value={principal}
                    onChange={(event) => principalField.setFromSlider(Number(event.target.value))}
                    className="range-slider range-slider--dark w-full"
                    style={{
                      "--range-progress": `${((principal - 200000) / (50000000 - 200000)) * 100}%`,
                    }}
                  />
                  <div className="mt-1.5 flex justify-between text-[12px] md:text-[14px] lg:text-[clamp(0.8125rem,0.5043rem+0.361vw,0.9375rem)] text-white/75">
                    <span>₹2 Lakhs</span>
                    <span>₹1 Crore</span>
                    <span>₹5 Crore</span>
                  </div>
                </div>

                <div className="mb-7">
                  <div className="mb-3 flex items-center justify-between text-[14px] md:text-[16px] lg:text-[clamp(0.9375rem,0.4752rem+0.5415vw,1.125rem)] font-medium text-white">
                    <span className="flex items-center gap-2">
                      <Percent size={15} className="text-white/70" />
                      Interest Rate (% per annum)
                    </span>
                    <span className="flex items-center gap-1 rounded-md bg-white px-3 py-1 font-cairo font-bold text-[#0F172A]">
                      <input
                        type="text"
                        inputMode="decimal"
                        aria-label="Interest rate percentage"
                        value={rateField.text}
                        onChange={(event) => rateField.handleChange(event.target.value)}
                        onFocus={rateField.handleFocus}
                        onBlur={rateField.handleBlur}
                        className="w-10 bg-transparent text-[13px] md:text-[14px] lg:text-[15px] outline-none"
                      />
                      <span className="text-[13px] md:text-[14px] lg:text-[15px]">%</span>
                    </span>
                  </div>
                  <input
                    type="range"
                    min="6.5"
                    max="20"
                    step="0.1"
                    value={rate}
                    onChange={(event) => rateField.setFromSlider(Number(event.target.value))}
                    className="range-slider range-slider--dark w-full"
                    style={{
                      "--range-progress": `${((rate - 6.5) / (20 - 6.5)) * 100}%`,
                    }}
                  />
                  <div className="mt-1.5 flex justify-between text-[12px] md:text-[14px] lg:text-[clamp(0.8125rem,0.5043rem+0.361vw,0.9375rem)] text-white/75">
                    <span>6.5% (Prime Home)</span>
                    <span>11.5% (SME Business)</span>
                    <span>20% (Unsecured)</span>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="mb-3 flex items-center justify-between text-[14px] md:text-[16px] lg:text-[clamp(0.9375rem,0.4752rem+0.5415vw,1.125rem)] font-medium text-white">
                    <span className="flex items-center gap-2">
                      <CalendarRange size={15} className="text-white/70" />
                      Loan Duration / Tenure
                    </span>
                    <span className="flex items-center gap-1 rounded-md bg-white px-3 py-1 font-cairo font-bold text-[#0F172A]">
                      <input
                        type="text"
                        inputMode="numeric"
                        aria-label="Loan duration in years"
                        value={tenureField.text}
                        onChange={(event) => tenureField.handleChange(event.target.value)}
                        onFocus={tenureField.handleFocus}
                        onBlur={tenureField.handleBlur}
                        className="w-6 bg-transparent text-[13px] md:text-[14px] lg:text-[15px] outline-none"
                      />
                      <span className="text-[13px] md:text-[14px] lg:text-[15px]">{tenure === 1 ? "Year" : "Years"}</span>
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    step="1"
                    value={tenure}
                    onChange={(event) => tenureField.setFromSlider(Number(event.target.value))}
                    className="range-slider range-slider--dark w-full"
                    style={{
                      "--range-progress": `${((tenure - 1) / (30 - 1)) * 100}%`,
                    }}
                  />
                  <div className="mt-1.5 flex justify-between text-[12px] md:text-[14px] lg:text-[clamp(0.8125rem,0.5043rem+0.361vw,0.9375rem)] text-white/75">
                    <span>1 Year</span>
                    <span>15 Years</span>
                    <span>30 Years</span>
                  </div>
                </div>

                <div className="rounded-xl bg-white/6 p-4 text-[11px] md:text-[12px] lg:text-[13px] text-white/75">
                  PayYou Advantage: We negotiate with partner banks to waive
                  processing fees and match your profile with sub-vented
                  floating interest schemes.
                </div>
              </div>
            </div>

            <div className="bg-glass-effect flex flex-col text-white rounded-3xl bg-white/2 shadow-[0px_16px_32px_rgba(0,0,0,0.25098)] py-4 md:py-7 px-4 md:px-8">
              <p className="text-[11px] md:text-[12px] lg:text-[13px] font-semibold uppercase tracking-[0.08em] text-white">
                Estimated Monthly Outgo
              </p>
              <p className="mt-1">
                <span className="text-[22px] md:text-[34px] lg:text-[40px] font-semibold text-white">
                  {formatInr(emi)}
                </span>
                <span className="ml-1 text-[12px] md:text-[14px] lg:text-[clamp(0.875rem,0.5668rem+0.361vw,1rem)] font-semibold text-[#D6E2F5]">
                  /month
                </span>
              </p>

              <div className="mt-6 flex justify-between text-[14px] md:text-[16px] lg:text-[clamp(0.9375rem,0.4752rem+0.5415vw,1.125rem)] text-white/75">
                <span>Principal ({principalPercent}%)</span>
                <span>Interest ({interestPercent}%)</span>
              </div>
              <div className="relative mt-2">
                <div className="h-2 w-full overflow-hidden rounded-full bg-white/15">
                  <div
                    className="h-full bg-accent"
                    style={{ width: `${principalPercent}%` }}
                  />
                </div>
                <svg
                  className="absolute top-full -translate-x-1/2"
                  style={{ left: `${principalPercent}%` }}
                  width="10"
                  height="8"
                  viewBox="0 0 10 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.91603 3.99766L4.99903 1.66406L2.08203 3.99766M4.99903 1.66406V6.33126"
                    stroke="#B11F24"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div className="mt-7 flex flex-col gap-4 text-[14px] md:text-[16px] lg:text-[clamp(0.9375rem,0.4752rem+0.5415vw,1.125rem)] text-white/75 font-medium">
                <div className="flex justify-between">
                  <span className="">Principal Amount:</span>
                  <span className="">{formatInr(principal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="">Total Interest Payable:</span>
                  <span className="">{formatInr(totalInterest)}</span>
                </div>
              </div>

              <div className="mt-4 flex justify-between border-t border-white pt-4 text-[14px] md:text-[16px] lg:text-[clamp(0.9375rem,0.4752rem+0.5415vw,1.125rem)] font-bold">
                <span>Total Amount (P + I):</span>
                <span>{formatInr(totalAmount)}</span>
              </div>

              <div className="mt-auto flex flex-col gap-4 pt-8">
                <button
                  type="button"
                  className="w-full rounded-full bg-accent py-[0.9333em] text-[12px] md:text-[14px] lg:text-[clamp(0.8125rem,0.5043rem+0.361vw,0.9375rem)] font-semibold uppercase tracking-wide text-white shadow-[0_5px_10px_rgba(177,31,36,0.25)] cursor-pointer transition hover:-translate-y-0.5 hover:bg-[#961a1e]"
                >
                  Apply For This Loan EMI
                </button>
                <div className="flex gap-2.5">
                  <button
                    type="button"
                    className="flex-1 rounded-full border border-white bg-white/12 py-[0.8em] text-[12px] md:text-[14px] lg:text-[clamp(0.8125rem,0.5043rem+0.361vw,0.9375rem)] font-semibold uppercase tracking-wide text-white cursor-pointer transition hover:bg-white hover:text-[#0e3153]"
                  >
                    View Schedule
                  </button>
                  <button
                    type="button"
                    className="flex-1 rounded-full border border-white bg-white/12 py-[0.8em] text-[12px] md:text-[14px] lg:text-[clamp(0.8125rem,0.5043rem+0.361vw,0.9375rem)] font-semibold uppercase tracking-wide text-white cursor-pointer transition hover:bg-white hover:text-[#0e3153]"
                  >
                    Share Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
