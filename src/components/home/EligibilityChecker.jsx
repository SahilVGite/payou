"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Check } from "lucide-react";
import Select from "../common/Select2Field";

const steps = ["Your Profile", "Income Details", "Loan Requirement", "Your Eligibility"];

const profiles = [
  {
    key: "salaried",
    title: "Salaried Professional",
    subtitle: "Working in Private Ltd, MNC, PSU, Govt",
  },
  {
    key: "business",
    title: "Business Owner / SME",
    subtitle: "Proprietorship, Partnership, Pvt Ltd",
  },
  {
    key: "self-employed",
    title: "Self-Employed Professional",
    subtitle: "Doctor, CA, Architect, Lawyer",
  },
  {
    key: "trader",
    title: "Trader / Manufacturer",
    subtitle: "Industrial unit, Wholesaler, Retailer",
  },
];

const highlights = [
  "Compare loans across 25+ lenders",
  "Simple, paperless application",
  "Competitive, negotiated rates",
  "RBI-regulated bank & NBFC network",
  "End-to-end advisory support",
];

const cities = [
  "Pune & PCMC (Local Doorstep Branch)",
  "Mumbai",
  "Pimpri-Chinchwad",
  "Nashik",
  "Bengaluru",
  "Delhi NCR",
];

const incomeFrequencies = ["Monthly", "Annual"];
const loanTypes = ["Personal Loan", "Business Loan", "Home Loan", "Loan Against Property", "Gold Loan"];
const loanTenures = ["1 Year", "3 Years", "5 Years", "7 Years", "10 Years", "15 Years", "20 Years"];

// Shared with the Step 1 city dropdown (same pill shape, border, and text sizing) so every
// field across all four steps reads as the same form, not a different component per step.
const fieldClassName =
  "mt-2.5 block w-full rounded-full border border-[#dce1e7] bg-white py-3 pl-[18px] pr-[18px] text-ink text-[12px] md:text-[14px] lg:text-[clamp(0.8125rem,0.5043rem+0.361vw,0.9375rem)] focus:border-[#dce1e7] focus:ring-0 focus:outline-none placeholder:text-[#8b93a1]";
const selectFieldClassName =
  "mt-2.5 block w-full rounded-full border border-[#dce1e7] bg-white py-3 pl-[18px] pr-10 text-ink text-[12px] md:text-[14px] lg:text-[clamp(0.8125rem,0.5043rem+0.361vw,0.9375rem)] focus:border-[#dce1e7] focus:ring-0 focus:outline-none";
const labelClassName =
  "block text-[clamp(0.5625rem,0.3839rem+0.8929vw,0.8125rem)] md:text-[13px] lg:text-[clamp(0.75rem,0.4418rem+0.361vw,0.875rem)] font-bold text-white/80";
const continueButtonClassName =
  "rounded-full w-full md:w-fit bg-primary px-10 py-[0.9333em] text-[12px] md:text-[14px] lg:text-[clamp(0.8125rem,0.5043rem+0.361vw,0.9375rem)] font-semibold text-center text-white cursor-pointer transition hover:-translate-y-0.5 hover:shadow-[0_8px_18px_rgba(19,75,150,0.4)]";
const backButtonClassName =
  "rounded-full w-full md:w-fit border border-[#dce1e7] px-8 py-[0.9333em] text-[12px] md:text-[14px] lg:text-[clamp(0.8125rem,0.5043rem+0.361vw,0.9375rem)] font-semibold text-white cursor-pointer transition hover:border-[#134b96] hover:text-[#134b96]";

// Simple, clearly-labelled client-side estimates only — no backend/API involved. A common
// personal-loan eligibility rule of thumb (income multiple) and the standard EMI formula,
// just enough for Step 4 to feel connected to what was entered instead of a static number.
function estimateEligibleAmount(monthlyIncome) {
  if (!monthlyIncome || monthlyIncome <= 0) return 1850000;
  return Math.round((monthlyIncome * 40) / 1000) * 1000;
}

function estimateEmi(principal, tenureLabel) {
  const tenureYears = parseInt(tenureLabel, 10) || 5;
  const months = tenureYears * 12;
  const monthlyRate = 10.5 / 12 / 100;
  if (!principal || !months) return 0;
  const emi = (principal * monthlyRate * (1 + monthlyRate) ** months) / ((1 + monthlyRate) ** months - 1);
  return Math.round(emi);
}

function FormField({ label, error, children }) {
  return (
    <label className={labelClassName}>
      {label}
      {children}
      {error ? <span className="mt-1.5 block text-[11px] font-semibold text-accent ">{error}</span> : null}
    </label>
  );
}

export default function EligibilityChecker() {
  const [step, setStep] = useState(0);
  const [selectedProfile, setSelectedProfile] = useState("salaried");
  const [city, setCity] = useState(cities[0]);

  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [incomeFrequency, setIncomeFrequency] = useState(incomeFrequencies[0]);
  const [existingEmi, setExistingEmi] = useState("");
  const [additionalIncome, setAdditionalIncome] = useState("");

  const [loanType, setLoanType] = useState(loanTypes[0]);
  const [loanAmount, setLoanAmount] = useState("");
  const [loanTenure, setLoanTenure] = useState(loanTenures[2]);
  const [loanPurpose, setLoanPurpose] = useState("");

  const [errors, setErrors] = useState({});

  const goToStep = (nextStep) => {
    setErrors({});
    setStep(nextStep);
  };

  const handleContinueFromIncome = () => {
    const nextErrors = {};
    const parsedIncome = Number(monthlyIncome);
    if (!monthlyIncome || Number.isNaN(parsedIncome) || parsedIncome <= 0) {
      nextErrors.monthlyIncome = "Please enter your income.";
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) setStep(2);
  };

  const handleContinueFromLoanRequirement = () => {
    const nextErrors = {};
    const parsedAmount = Number(loanAmount);
    if (!loanAmount || Number.isNaN(parsedAmount) || parsedAmount <= 0) {
      nextErrors.loanAmount = "Please enter the loan amount you need.";
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) setStep(3);
  };

  const handleStartOver = () => {
    setStep(0);
    setSelectedProfile("salaried");
    setCity(cities[0]);
    setMonthlyIncome("");
    setIncomeFrequency(incomeFrequencies[0]);
    setExistingEmi("");
    setAdditionalIncome("");
    setLoanType(loanTypes[0]);
    setLoanAmount("");
    setLoanTenure(loanTenures[2]);
    setLoanPurpose("");
    setErrors({});
  };

  const normalizedMonthlyIncome =
    incomeFrequency === "Annual" ? Number(monthlyIncome) / 12 : Number(monthlyIncome);
  const eligibleAmount = estimateEligibleAmount(normalizedMonthlyIncome);
  const requestedAmount = Number(loanAmount) || 0;
  const displayAmount = requestedAmount > 0 ? Math.min(eligibleAmount, requestedAmount) : eligibleAmount;
  const indicativeEmi = estimateEmi(displayAmount, loanTenure);

  return (
    <section className="relative overflow-hidden bg-primary secGap px-[4%]">
      <div className="relative mx-auto max-w-(--content-width)">
        <div className="grid grid-cols-[0.85fr_0.85fr_1fr] items-start gap-8 max-[1024px]:grid-cols-1">
          <h2 className="text-[28px] md:text-[38px] lg:text-[clamp(2.125rem,1.2679rem+1.3393vw,2.875rem)] font-semibold leading-tight text-white">
            Compare Loans
            <br />
            Get Expert Advice
            <br />
            Apply With Ease
          </h2>
          <ul className="flex flex-col gap-2 pt-2 text-[14px] md:text-[16px] lg:text-[clamp(0.875rem,0.5893rem+0.4464vw,1.125rem)] font-medium text-white">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span aria-hidden="true">&bull;</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="relative h-full w-full max-[1024px]:hidden">
            {/* <Image
              src="/images/home-loan-2.png"
              alt="Happy couple"
              fill
              className="object-contain object-top"
            /> */}
            <img src="/images/home-loan-2.png" alt="Happy couple" className="absolute top-0 w-[80%] h-auto" />
          </div>
        </div>

        <div className="bg-glass-effect relative mt-(--sec-gap) md:mt-5 lg:mt-8 overflow-hidden rounded-3xl bg-[#FBFDFF]/30 backdrop-blur-lg shadow-[0px_10px_28px_rgba(6,43,90,0.141176)]">
          <div className="relative p-8 max-[480px]:p-5">
            <span className="inline-block rounded-full bg-white px-4 py-1.5 text-[clamp(0.5625rem,0.3839rem+0.8929vw,0.8125rem)] md:text-[13px] lg:text-[clamp(0.75rem,0.4418rem+0.361vw,0.875rem)] font-semibold text-primary">
              60-Second Loan Check
            </span>
            <h3 className="mt-4 text-[clamp(1.375rem,1.2857rem+0.4464vw,1.5rem)] md:text-[30px] lg:text-[clamp(1.75rem,0.2089rem+1.8051vw,2.375rem)] font-medium text-white">
              Check Your <strong className="font-bold">Loan Eligibility</strong>
            </h3>
            <p className="mt-1 text-[12px] md:text-[14px] lg:text-[clamp(0.875rem,0.5668rem+0.361vw,1rem)] text-white">
              Get an instant estimate of your eligible loan options across 25+ lenders — no paperwork, no CIBIL score impact.
            </p>

            <div className="mt-8 flex items-center">
              {steps.map((label, index) => (
                <div
                  key={label}
                  className="flex flex-1 items-center last:flex-none"
                >
                  <div className="relative flex flex-col items-center gap-2">
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold border-2 border-primary transition ${
                        index <= step
                          ? "bg-primary text-white"
                          : "bg-white text-primary"
                      }`}
                    >
                      {index + 1}
                    </span>
                    <span
                      className={`mt-1 absolute top-full left-1/2 -translate-x-1/2 text-center text-[clamp(0.5625rem,0.3839rem+0.8929vw,0.8125rem)] md:text-[13px] lg:text-[clamp(0.625rem,0.5497rem+0.219vw,0.8125rem)] leading-[1.1em] font-medium text-white`}
                    >
                      {label}
                    </span>
                  </div>
                  {index < steps.length - 1 ? (
                    <span
                      className={`h-1 flex-1 transition ${index < step ? "bg-primary" : "bg-white"}`}
                    />
                  ) : null}
                </div>
              ))}
            </div>

            {step === 0 ? (
              <>
                <p className="mt-10 mb-3 text-[clamp(0.5625rem,0.3839rem+0.8929vw,0.8125rem)] md:text-[13px] lg:text-[clamp(0.75rem,0.4418rem+0.361vw,0.875rem)] font-bold text-white/80">
                  What&apos;s your current work profile?
                </p>
                <div className="grid grid-cols-4 gap-4 max-[1024px]:grid-cols-2 max-[480px]:grid-cols-1">
                  {profiles.map(({ key, title, subtitle }) => {
                    const isActive = selectedProfile === key;
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setSelectedProfile(key)}
                        className={`flex items-center justify-between gap-2 rounded-[14px] border-2 p-4 text-left cursor-pointer transition ${
                          isActive
                            ? "border-primary bg-primary text-white"
                            : "border-[#D6DFEC] bg-white text-[#10192b]"
                        }`}
                      >
                        <span>
                          <span className="block text-[12px] md:text-[14px] lg:text-[clamp(0.8125rem,0.5043rem+0.361vw,0.9375rem)] font-semibold">
                            {title}
                          </span>
                          <span
                            className={`mt-1 block text-[10px] md:text-[12px] lg:text-[clamp(0.6875rem,0.3793rem+0.361vw,0.8125rem)] ${isActive ? "text-white/80" : "text-[#5f6a7b]"}`}
                          >
                            {subtitle}
                          </span>
                        </span>
                        <span
                          className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 ${
                            isActive ? "border-white" : "border-[#c7ccd4]"
                          }`}
                        >
                          {isActive ? (
                            <span className="h-1.5 w-1.5 rounded-full bg-white" />
                          ) : null}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="flex justify-between items-end flex-wrap">
                  <label className="mt-6 block mb-3 md:mb-0 text-[clamp(0.5625rem,0.3839rem+0.8929vw,0.8125rem)] md:text-[13px] lg:text-[clamp(0.75rem,0.4418rem+0.361vw,0.875rem)] font-bold text-white/80 w-full md:w-fit">
                    Your Current City / Base Location
                    <Select
                      className="mt-2.5 block w-full rounded-full border border-[#dce1e7] bg-white py-3 pl-[18px] pr-10 text-ink text-[12px] md:text-[14px] lg:text-[clamp(0.8125rem,0.5043rem+0.361vw,0.9375rem)] focus:border-[#dce1e7] focus:ring-0 focus:outline-none lg:min-w-120"
                      value={city}
                      onChange={(event) => setCity(event.target.value)}
                    >
                      {cities.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </Select>
                  </label>

                  <div className="flex justify-end w-full md:w-fit">
                    <button
                      type="button"
                      onClick={() => goToStep(1)}
                      className="rounded-full w-full bg-primary px-10 py-[0.9333em] text-[12px] md:text-[14px] lg:text-[clamp(0.8125rem,0.5043rem+0.361vw,0.9375rem)] font-semibold text-center text-white cursor-pointer transition hover:-translate-y-0.5 hover:shadow-[0_8px_18px_rgba(122,16,21,0.4)]"
                    >
                      Continue to Income
                    </button>
                  </div>
                </div>
              </>
            ) : null}

            {step === 1 ? (
              <div className="mt-10">
                <p className="mb-3 text-[clamp(0.5625rem,0.3839rem+0.8929vw,0.8125rem)] md:text-[13px] lg:text-[clamp(0.75rem,0.4418rem+0.361vw,0.875rem)] font-bold text-white/80">
                  What&apos;s your income details?
                </p>
                <div className="grid grid-cols-2 gap-x-6 gap-y-5 max-[640px]:grid-cols-1">
                  <FormField label="Monthly / Annual Income (₹)" error={errors.monthlyIncome}>
                    <input
                      type="number"
                      inputMode="decimal"
                      min="0"
                      placeholder="e.g. 45,000"
                      value={monthlyIncome}
                      onChange={(event) => setMonthlyIncome(event.target.value)}
                      className={fieldClassName}
                    />
                  </FormField>
                  <FormField label="Income Frequency">
                    <Select
                      className={selectFieldClassName}
                      value={incomeFrequency}
                      onChange={(event) => setIncomeFrequency(event.target.value)}
                    >
                      {incomeFrequencies.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </Select>
                  </FormField>
                  <FormField label="Existing Monthly EMI / Obligations (₹)">
                    <input
                      type="number"
                      inputMode="decimal"
                      min="0"
                      placeholder="e.g. 5,000 (0 if none)"
                      value={existingEmi}
                      onChange={(event) => setExistingEmi(event.target.value)}
                      className={fieldClassName}
                    />
                  </FormField>
                  <FormField label="Additional Income (Optional) (₹)">
                    <input
                      type="number"
                      inputMode="decimal"
                      min="0"
                      placeholder="e.g. 10,000"
                      value={additionalIncome}
                      onChange={(event) => setAdditionalIncome(event.target.value)}
                      className={fieldClassName}
                    />
                  </FormField>
                </div>
                <div className="flex justify-end gap-3 flex-wrap mt-6">
                  <button type="button" onClick={() => goToStep(0)} className={backButtonClassName}>
                    Back
                  </button>
                  <button type="button" onClick={handleContinueFromIncome} className={continueButtonClassName}>
                    Continue to Loan Requirement
                  </button>
                </div>
              </div>
            ) : null}

            {step === 2 ? (
              <div className="mt-10">
                <p className="mb-3 text-[clamp(0.5625rem,0.3839rem+0.8929vw,0.8125rem)] md:text-[13px] lg:text-[clamp(0.75rem,0.4418rem+0.361vw,0.875rem)] font-bold text-white/80">
                  What&apos;s your loan requirement?
                </p>
                <div className="grid grid-cols-2 gap-x-6 gap-y-5 max-[640px]:grid-cols-1">
                  <FormField label="Loan Type">
                    <Select
                      className={selectFieldClassName}
                      value={loanType}
                      onChange={(event) => setLoanType(event.target.value)}
                    >
                      {loanTypes.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </Select>
                  </FormField>
                  <FormField label="Required Loan Amount (₹)" error={errors.loanAmount}>
                    <input
                      type="number"
                      inputMode="decimal"
                      min="0"
                      placeholder="e.g. 5,00,000"
                      value={loanAmount}
                      onChange={(event) => setLoanAmount(event.target.value)}
                      className={fieldClassName}
                    />
                  </FormField>
                  <FormField label="Preferred Loan Tenure">
                    <Select
                      className={selectFieldClassName}
                      value={loanTenure}
                      onChange={(event) => setLoanTenure(event.target.value)}
                    >
                      {loanTenures.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </Select>
                  </FormField>
                  <FormField label="Loan Purpose (Optional)">
                    <input
                      type="text"
                      placeholder="e.g. Home renovation, business expansion"
                      value={loanPurpose}
                      onChange={(event) => setLoanPurpose(event.target.value)}
                      className={fieldClassName}
                    />
                  </FormField>
                </div>
                <div className="flex justify-end gap-3 flex-wrap mt-6">
                  <button type="button" onClick={() => goToStep(1)} className={backButtonClassName}>
                    Back
                  </button>
                  <button type="button" onClick={handleContinueFromLoanRequirement} className={continueButtonClassName}>
                    Check Eligibility
                  </button>
                </div>
              </div>
            ) : null}

            {step === 3 ? (
              <div className="mt-14 rounded-[14px] bg-[#f1f8f2] p-6 text-center">
                <span className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#134b96]">
                  <Check size={24} className="text-white" />
                </span>
                <p className="text-sm font-semibold text-[#10192b]">
                  Your loan eligibility is ready.
                </p>
                <p className="mt-2 text-2xl font-bold text-[#134b96]">
                  Up to ₹{displayAmount.toLocaleString("en-IN")}
                </p>
                <div className="mt-4 grid grid-cols-2 gap-4 max-[480px]:grid-cols-1 max-w-md mx-auto text-left">
                  <div className="rounded-[14px] bg-white p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-[#5f6a7b]">Loan Tenure</p>
                    <p className="mt-1 text-sm font-bold text-[#10192b]">{loanTenure}</p>
                  </div>
                  <div className="rounded-[14px] bg-white p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-[#5f6a7b]">Indicative EMI</p>
                    <p className="mt-1 text-sm font-bold text-[#10192b]">₹{indicativeEmi.toLocaleString("en-IN")}/mo</p>
                  </div>
                </div>
                <p className="mt-4 max-w-md mx-auto text-xs text-[#5f6a7b]">
                  This is an indicative estimate. Your final loan amount, interest rate, and tenure are subject to verification by the partner lender.
                </p>
                <div className="mt-5 flex justify-center gap-3 flex-wrap">
                  <button
                    type="button"
                    onClick={handleStartOver}
                    className="rounded-full border border-primary px-10 py-[0.9333em] text-[12px] md:text-[14px] lg:text-[clamp(0.8125rem,0.5043rem+0.361vw,0.9375rem)] font-semibold text-center text-primary cursor-pointer transition hover:bg-primary hover:text-white"
                  >
                    Start Over
                  </button>
                  <Link
                    href="/contact-us"
                    className="rounded-full bg-primary px-10 py-[0.9333em] text-[12px] md:text-[14px] lg:text-[clamp(0.8125rem,0.5043rem+0.361vw,0.9375rem)] font-semibold text-center text-white cursor-pointer transition hover:-translate-y-0.5 hover:shadow-[0_8px_18px_rgba(122,16,21,0.4)]"
                  >
                    Explore Loan Options
                  </Link>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
