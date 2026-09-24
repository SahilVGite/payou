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

const formatInr = (value) => `₹${Math.round(value).toLocaleString("en-IN")}`;
const formatWhole = (value) => Math.round(value).toLocaleString("en-IN");
const formatOneDecimal = (value) => value.toFixed(1);

// Every field slot below drives the same reusable <SliderField> UI (icon + label, editable
// value box, range slider, min/mid/max ticks) — only these config values change per
// calculator, so the four tabs stay visually identical while showing different fields.
const calculatorConfig = {
  "Personal Loan EMI Calculator": {
    type: "emi",
    headingLead: "Flexible ",
    headingBold: "Personal Loan Calculator",
    resultLabel: "Estimated Monthly Outgo",
    fields: [
      {
        key: "amount",
        label: "Loan Principal Amount",
        ariaLabel: "Loan principal amount",
        icon: IndianRupee,
        prefix: "₹",
        min: 50000,
        max: 5000000,
        step: 5000,
        default: 500000,
        format: formatWhole,
        inputWidthClass: "w-20 md:w-24",
        ticks: ["₹50K", "₹25L", "₹50L"],
      },
      {
        key: "rate",
        label: "Interest Rate (% per annum)",
        ariaLabel: "Interest rate percentage",
        icon: Percent,
        suffix: "%",
        min: 8,
        max: 30,
        step: 0.1,
        decimals: 1,
        default: 12,
        format: formatOneDecimal,
        inputWidthClass: "w-10",
        ticks: ["8%", "19%", "30%"],
      },
      {
        key: "tenure",
        label: "Loan Duration / Tenure",
        ariaLabel: "Loan duration in years",
        icon: CalendarRange,
        suffix: (value) => (value === 1 ? "Year" : "Years"),
        min: 1,
        max: 7,
        step: 1,
        default: 3,
        inputWidthClass: "w-6",
        ticks: ["1 Year", "4 Years", "7 Years"],
      },
    ],
  },
  "Home Loan EMI Calculator": {
    type: "emi",
    headingLead: "Flexible ",
    headingBold: "Home Loan Calculator",
    resultLabel: "Estimated Monthly Outgo",
    fields: [
      {
        key: "amount",
        label: "Home Loan Amount",
        ariaLabel: "Home loan amount",
        icon: IndianRupee,
        prefix: "₹",
        min: 500000,
        max: 50000000,
        step: 50000,
        default: 3000000,
        format: formatWhole,
        inputWidthClass: "w-20 md:w-24",
        ticks: ["₹5L", "₹2.5Cr", "₹5Cr"],
      },
      {
        key: "rate",
        label: "Interest Rate (% per annum)",
        ariaLabel: "Interest rate percentage",
        icon: Percent,
        suffix: "%",
        min: 6,
        max: 15,
        step: 0.1,
        decimals: 1,
        default: 8.5,
        format: formatOneDecimal,
        inputWidthClass: "w-10",
        ticks: ["6%", "10.5%", "15%"],
      },
      {
        key: "tenure",
        label: "Loan Duration / Tenure",
        ariaLabel: "Loan duration in years",
        icon: CalendarRange,
        suffix: (value) => (value === 1 ? "Year" : "Years"),
        min: 5,
        max: 30,
        step: 1,
        default: 20,
        inputWidthClass: "w-6",
        ticks: ["5 Years", "17 Years", "30 Years"],
      },
    ],
  },
  "Business Loan EMI Calculator": {
    type: "emi",
    headingLead: "Flexible ",
    headingBold: "Business Loan Calculator",
    resultLabel: "Estimated Monthly Outgo",
    fields: [
      {
        key: "amount",
        label: "Business Loan Amount",
        ariaLabel: "Business loan amount",
        icon: IndianRupee,
        prefix: "₹",
        min: 100000,
        max: 100000000,
        step: 50000,
        default: 2000000,
        format: formatWhole,
        inputWidthClass: "w-20 md:w-24",
        ticks: ["₹1L", "₹5Cr", "₹10Cr"],
      },
      {
        key: "rate",
        label: "Interest Rate (% per annum)",
        ariaLabel: "Interest rate percentage",
        icon: Percent,
        suffix: "%",
        min: 8,
        max: 24,
        step: 0.1,
        decimals: 1,
        default: 14,
        format: formatOneDecimal,
        inputWidthClass: "w-10",
        ticks: ["8%", "16%", "24%"],
      },
      {
        key: "tenure",
        label: "Loan Duration / Tenure",
        ariaLabel: "Loan duration in years",
        icon: CalendarRange,
        suffix: (value) => (value === 1 ? "Year" : "Years"),
        min: 1,
        max: 15,
        step: 1,
        default: 5,
        inputWidthClass: "w-6",
        ticks: ["1 Year", "8 Years", "15 Years"],
      },
    ],
  },
  "Loan Eligibility Calculator": {
    type: "eligibility",
    headingLead: "Check Your ",
    headingBold: "Loan Eligibility",
    resultLabel: "Estimated Loan Eligibility",
    fields: [
      {
        key: "income",
        label: "Monthly Net Income",
        ariaLabel: "Monthly net income",
        icon: IndianRupee,
        prefix: "₹",
        min: 20000,
        max: 1000000,
        step: 5000,
        default: 75000,
        format: formatWhole,
        inputWidthClass: "w-20 md:w-24",
        ticks: ["₹20K", "₹5L", "₹10L"],
      },
      {
        key: "existingEmi",
        label: "Existing Monthly EMI / Obligations",
        ariaLabel: "Existing monthly EMI",
        icon: IndianRupee,
        prefix: "₹",
        min: 0,
        max: 500000,
        step: 1000,
        default: 10000,
        format: formatWhole,
        inputWidthClass: "w-16 md:w-20",
        ticks: ["₹0", "₹2.5L", "₹5L"],
      },
      {
        key: "rate",
        label: "Expected Interest Rate (% per annum)",
        ariaLabel: "Expected interest rate percentage",
        icon: Percent,
        suffix: "%",
        min: 6,
        max: 24,
        step: 0.1,
        decimals: 1,
        default: 10.5,
        format: formatOneDecimal,
        inputWidthClass: "w-10",
        ticks: ["6%", "15%", "24%"],
      },
      {
        key: "tenure",
        label: "Preferred Loan Tenure",
        ariaLabel: "Preferred loan tenure in years",
        icon: CalendarRange,
        suffix: (value) => (value === 1 ? "Year" : "Years"),
        min: 1,
        max: 30,
        step: 1,
        default: 15,
        inputWidthClass: "w-6",
        ticks: ["1 Year", "15 Years", "30 Years"],
      },
      {
        key: "foir",
        label: "FOIR (Max EMI Ratio)",
        ariaLabel: "Fixed obligation to income ratio percentage",
        icon: Percent,
        suffix: "%",
        min: 30,
        max: 70,
        step: 1,
        default: 50,
        inputWidthClass: "w-8",
        ticks: ["30%", "50%", "70%"],
      },
    ],
  },
};

const tabs = [
  { label: "Personal Loan EMI Calculator", icon: LoansTabIcon },
  { label: "Home Loan EMI Calculator", icon: TrendingUp },
  { label: "Business Loan EMI Calculator", icon: TrendingUp },
  { label: "Loan Eligibility Calculator", icon: TrendingUp },
];

// Standard reducing-balance EMI. Handles 0% interest (a straight-line split) so nothing
// divides by zero.
function calculateEmi(principal, annualRate, tenureYears) {
  const months = tenureYears * 12;
  const monthlyRate = annualRate / 12 / 100;
  const emi =
    monthlyRate === 0
      ? principal / months
      : (principal * monthlyRate * (1 + monthlyRate) ** months) /
        ((1 + monthlyRate) ** months - 1);
  const totalAmount = emi * months;
  const totalInterest = totalAmount - principal;
  const principalPercent = totalAmount > 0 ? Math.round((principal / totalAmount) * 100) : 0;
  const interestPercent = totalAmount > 0 ? 100 - principalPercent : 0;
  return { emi, totalAmount, totalInterest, principalPercent, interestPercent };
}

// Reverse EMI formula: how much principal a given affordable EMI can support. FOIR caps
// how much of income can go to EMIs; whatever's left after existing obligations is what a
// new loan's EMI is allowed to be. Never lets eligibility go negative.
function calculateEligibility({ income, existingEmi, rate, tenureYears, foir }) {
  const months = tenureYears * 12;
  const monthlyRate = rate / 12 / 100;
  const maxAffordableEmi = Math.max(0, income * (foir / 100) - existingEmi);
  if (maxAffordableEmi <= 0) {
    return { eligiblePrincipal: 0, maxAffordableEmi: 0, totalInterest: 0, totalRepayment: 0 };
  }
  const eligiblePrincipal =
    monthlyRate === 0
      ? maxAffordableEmi * months
      : (maxAffordableEmi * ((1 + monthlyRate) ** months - 1)) /
        (monthlyRate * (1 + monthlyRate) ** months);
  const totalRepayment = maxAffordableEmi * months;
  const totalInterest = totalRepayment - eligiblePrincipal;
  return { eligiblePrincipal, maxAffordableEmi, totalInterest, totalRepayment };
}

// One field = one icon/label row + editable value box + range slider + min/mid/max ticks —
// exactly the existing visual pattern, just parameterized so every tab's fields (different
// icons, ranges, prefixes/suffixes) render through this single implementation.
function SliderField({ field, editable, isLast }) {
  const Icon = field.icon;
  const suffix = typeof field.suffix === "function" ? field.suffix(editable.value) : field.suffix;

  return (
    <div className={isLast ? "mb-6" : "mb-7"}>
      <div className="mb-3 flex items-center justify-between text-[14px] md:text-[16px] lg:text-[clamp(0.9375rem,0.4752rem+0.5415vw,1.125rem)] font-medium text-white">
        <span className="flex items-center gap-2">
          <Icon size={16} className="text-white font-inter" />
          {field.label}
        </span>
        <span className="flex items-center gap-1 rounded-md bg-white px-3 py-1 font-cairo font-bold text-[#0F172A]">
          {field.prefix ? (
            <span className="text-[13px] md:text-[14px] lg:text-[15px]">{field.prefix}</span>
          ) : null}
          <input
            type="text"
            inputMode="decimal"
            aria-label={field.ariaLabel}
            value={editable.text}
            onChange={(event) => editable.handleChange(event.target.value)}
            onFocus={editable.handleFocus}
            onBlur={editable.handleBlur}
            className={`${field.inputWidthClass} bg-transparent text-[13px] md:text-[14px] lg:text-[15px] outline-none`}
          />
          {suffix ? (
            <span className="text-[13px] md:text-[14px] lg:text-[15px]">{suffix}</span>
          ) : null}
        </span>
      </div>
      <input
        type="range"
        min={field.min}
        max={field.max}
        step={field.step}
        value={editable.value}
        onChange={(event) => editable.setFromSlider(Number(event.target.value))}
        className="range-slider range-slider--dark w-full"
        style={{
          "--range-progress": `${((editable.value - field.min) / (field.max - field.min)) * 100}%`,
        }}
      />
      <div className="mt-1.5 flex justify-between text-[12px] md:text-[14px] lg:text-[clamp(0.8125rem,0.5043rem+0.361vw,0.9375rem)] text-white/75">
        {field.ticks.map((tick) => (
          <span key={tick}>{tick}</span>
        ))}
      </div>
    </div>
  );
}

// Holds every field's live state + the calculation for whichever calculator is active.
// Mounted with `key={activeTab}` by the parent so switching tabs remounts this fresh —
// each calculator gets its own defaults instead of inheriting stale values (or an
// out-of-range slider position) left over from a different tab's fields.
function CalculatorPanel({ config }) {
  const [f0, f1, f2, f3, f4] = config.fields;
  const noopField = { min: 0, max: 1, step: 1, default: 0 };
  // Always exactly 5 useEditableNumber calls regardless of tab (React requires a stable
  // hook count) — unused slots fall back to an inert 0-1 range that nothing ever reads.
  const field0 = useEditableNumber((f0 ?? noopField).default, {
    min: (f0 ?? noopField).min,
    max: (f0 ?? noopField).max,
    decimals: f0?.decimals || 0,
    format: f0?.format,
  });
  const field1 = useEditableNumber((f1 ?? noopField).default, {
    min: (f1 ?? noopField).min,
    max: (f1 ?? noopField).max,
    decimals: f1?.decimals || 0,
    format: f1?.format,
  });
  const field2 = useEditableNumber((f2 ?? noopField).default, {
    min: (f2 ?? noopField).min,
    max: (f2 ?? noopField).max,
    decimals: f2?.decimals || 0,
    format: f2?.format,
  });
  const field3 = useEditableNumber((f3 ?? noopField).default, {
    min: (f3 ?? noopField).min,
    max: (f3 ?? noopField).max,
    decimals: f3?.decimals || 0,
    format: f3?.format,
  });
  const field4 = useEditableNumber((f4 ?? noopField).default, {
    min: (f4 ?? noopField).min,
    max: (f4 ?? noopField).max,
    decimals: f4?.decimals || 0,
    format: f4?.format,
  });
  const editables = [field0, field1, field2, field3, field4];

  const result = useMemo(() => {
    if (config.type === "eligibility") {
      const [income, existingEmi, rate, tenure, foir] = editables.map((e) => e.value);
      const { eligiblePrincipal, maxAffordableEmi, totalInterest, totalRepayment } =
        calculateEligibility({ income, existingEmi, rate, tenureYears: tenure, foir });
      const principalPercent =
        totalRepayment > 0 ? Math.round((eligiblePrincipal / totalRepayment) * 100) : 0;
      return {
        headline: eligiblePrincipal,
        principalLabel: "Maximum Affordable EMI",
        principalValue: maxAffordableEmi,
        secondaryRows: [
          ["Interest Rate", `${rate.toFixed(1)}%`],
          ["Tenure", `${tenure} ${tenure === 1 ? "Year" : "Years"}`],
        ],
        totalInterest,
        totalLabel: "Estimated Total Repayment",
        totalAmount: totalRepayment,
        principalPercent,
        interestPercent: 100 - principalPercent,
      };
    }
    const [amount, rate, tenure] = editables.map((e) => e.value);
    const { emi, totalAmount, totalInterest, principalPercent, interestPercent } = calculateEmi(
      amount,
      rate,
      tenure,
    );
    return {
      headline: emi,
      principalLabel: "Principal Amount",
      principalValue: amount,
      secondaryRows: [],
      totalInterest,
      totalLabel: "Total Amount (P + I)",
      totalAmount,
      principalPercent,
      interestPercent,
    };
    // `editables` (used above) is a fresh array every render, so listing it here would make
    // this recompute unconditionally, defeating the memo — the real inputs are each field's
    // own `.value`, listed individually instead.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config.type, field0.value, field1.value, field2.value, field3.value, field4.value]);

  const isEligibility = config.type === "eligibility";

  return (
    <div className="grid grid-cols-[1.15fr_48%] gap-10 px-[clamp(0.9375rem,-0.375rem+6.5625vw,7.5rem)] pb-10 max-[1024px]:grid-cols-1 max-[480px]:px-6">
      <div>
        <h3 className="mb-8 text-[clamp(1.5rem,1.2794rem+0.9804vw,1.75rem)] md:text-[36px] lg:text-[clamp(2rem,0.4589rem+1.8051vw,2.625rem)] tracking-[-1px] text-white">
          {config.headingLead}
          <strong className="font-bold">{config.headingBold}</strong>
        </h3>

        <div className="lg:max-w-[523px]">
          {config.fields.map((field, index) => (
            <SliderField
              key={field.key}
              field={field}
              editable={editables[index]}
              isLast={index === config.fields.length - 1}
            />
          ))}

          <div className="rounded-xl bg-white/6 p-4 text-[11px] md:text-[12px] lg:text-[13px] text-white/75">
            PayYou Advantage: We negotiate with partner banks to waive
            processing fees and match your profile with sub-vented
            floating interest schemes.
          </div>
        </div>
      </div>

      <div className="bg-glass-effect flex flex-col text-white rounded-3xl bg-white/2 shadow-[0px_16px_32px_rgba(0,0,0,0.25098)] py-4 md:py-7 px-4 md:px-8">
        <p className="text-[11px] md:text-[12px] lg:text-[13px] font-semibold uppercase tracking-[0.08em] text-white">
          {config.resultLabel}
        </p>
        <p className="mt-1">
          <span className="text-[22px] md:text-[34px] lg:text-[40px] font-semibold text-white">
            {formatInr(result.headline)}
          </span>
          {isEligibility ? null : (
            <span className="ml-1 text-[12px] md:text-[14px] lg:text-[clamp(0.875rem,0.5668rem+0.361vw,1rem)] font-semibold text-[#D6E2F5]">
              /month
            </span>
          )}
        </p>

        <div className="mt-6 flex justify-between text-[14px] md:text-[16px] lg:text-[clamp(0.9375rem,0.4752rem+0.5415vw,1.125rem)] text-white/75">
          <span>Principal ({result.principalPercent}%)</span>
          <span>Interest ({result.interestPercent}%)</span>
        </div>
        <div className="relative mt-2">
          <div className="h-2 w-full overflow-hidden rounded-full bg-white/15">
            <div
              className="h-full bg-accent"
              style={{ width: `${result.principalPercent}%` }}
            />
          </div>
          <svg
            className="absolute top-full -translate-x-1/2"
            style={{ left: `${result.principalPercent}%` }}
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
            <span>{result.principalLabel}:</span>
            <span>{formatInr(result.principalValue)}</span>
          </div>
          {result.secondaryRows.map(([label, value]) => (
            <div className="flex justify-between" key={label}>
              <span>{label}:</span>
              <span>{value}</span>
            </div>
          ))}
          <div className="flex justify-between">
            <span>Total Interest Payable:</span>
            <span>{formatInr(result.totalInterest)}</span>
          </div>
        </div>

        <div className="mt-4 flex justify-between border-t border-white pt-4 text-[14px] md:text-[16px] lg:text-[clamp(0.9375rem,0.4752rem+0.5415vw,1.125rem)] font-bold">
          <span>{result.totalLabel}:</span>
          <span>{formatInr(result.totalAmount)}</span>
        </div>

        <div className="mt-auto flex flex-col gap-4 pt-8">
          <button
            type="button"
            className="w-full rounded-full bg-accent py-[0.9333em] text-[12px] md:text-[14px] lg:text-[clamp(0.8125rem,0.5043rem+0.361vw,0.9375rem)] font-semibold uppercase tracking-wide text-white shadow-[0_5px_10px_rgba(177,31,36,0.25)] cursor-pointer transition hover:-translate-y-0.5 hover:bg-[#961a1e]"
          >
            {isEligibility ? "Apply For This Loan" : "Apply For This Loan EMI"}
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
  );
}

export default function LoanCalculator() {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  return (
    <section className="px-[4%] secGap">
      <div className="mx-auto max-w-(--content-width)">
        <h2 className="mb-2 md:mb-3 text-left md:text-center text-[clamp(1.5rem,1.2794rem+0.9804vw,1.75rem)] md:text-[36px] lg:text-[clamp(2rem,0.4589rem+1.8051vw,2.625rem)] leading-tight text-ink">
          Know Your EMI{" "}
          <strong className="font-bold text-primary">Before You Apply</strong>
        </h2>
        <p className="mx-auto mb-(--sec-gap) text-left md:text-center text-[16px] md:text-[16px] lg:text-[20px] text-[#4B5563]">
          Use our free loan EMI calculators to plan your principal, interest, and tenure.  With our redundant loan advisory services you get no surprises later.
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
          <CalculatorPanel key={activeTab} config={calculatorConfig[activeTab]} />
        </div>
      </div>
    </section>
  );
}
