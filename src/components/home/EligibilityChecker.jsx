"use client";

import Image from "next/image";
import { useState } from "react";
import { Check } from "lucide-react";
import Select from "../common/Select";

const steps = ["Profile", "Income", "Loan Details", "Eligibility"];

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
  "Multiple loan options",
  "Quick & easy application",
  "Best interest rates",
  "Trusted lender network",
  "100+ partners for your needs",
];

const cities = [
  "Pune & PCMC (Local Doorstep Branch)",
  "Mumbai",
  "Pimpri-Chinchwad",
  "Nashik",
  "Bengaluru",
  "Delhi NCR",
];

export default function EligibilityChecker() {
  const [step, setStep] = useState(0);
  const [selectedProfile, setSelectedProfile] = useState("salaried");
  const [city, setCity] = useState(cities[0]);

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(103.18deg,#6F1212_1.14%,#B52024_58.49%,#F74C4A_100%)] secGap px-[4%]">
      <div className="relative mx-auto max-w-(--content-width)">
        <div className="grid grid-cols-[0.65fr_0.65fr_1fr] items-start gap-8 max-[1024px]:grid-cols-1">
          <h2 className="text-[28px] md:text-[38px] lg:text-[clamp(2.125rem,1.2679rem+1.3393vw,2.875rem)] font-semibold leading-tight text-white">
            Smart Loans
            <br />
            Expert Guidance
            <br />
            All In One Place
          </h2>
          <ul className="flex flex-col gap-3 pt-2 text-[14px] md:text-[16px] lg:text-[clamp(0.875rem,0.5893rem+0.4464vw,1.125rem)] font-semibold text-white">
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

        <div className="relative mt-4 md:mt-5 lg:mt-8 overflow-hidden rounded-[24px] bg-[#FBFDFF]/30 backdrop-blur-lg shadow-[0px_10px_28px_rgba(6,43,90,0.141176)]">
          <div className="relative p-8 max-[480px]:p-5">
            <span className="inline-block rounded-full bg-white px-4 py-1.5 text-[11px] md:text-[13px] lg:text-[clamp(0.75rem,0.4418rem+0.361vw,0.875rem)] font-semibold text-accent">
              INSTANT PRE-QUALIFICATION CHECK
            </span>
            <h3 className="mt-4 text-[26px] md:text-[32px] lg:text-[clamp(1.75rem,0.2089rem+1.8051vw,2.375rem)] font-medium text-white">
              Check Your <strong className="font-bold">Loan Eligibility</strong>
            </h3>
            <p className="mt-1 text-[12px] md:text-[14px] lg:text-[clamp(0.875rem,0.5668rem+0.361vw,1rem)] text-white">
              Find out your maximum loan sanction capacity across 25+ banks in
              under 60 seconds with zero credit score impact.
            </p>

            <div className="mt-8 flex items-center">
              {steps.map((label, index) => (
                <div
                  key={label}
                  className="flex flex-1 items-center last:flex-none"
                >
                  <div className="relative flex flex-col items-center gap-2">
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold border-2 border-accent transition ${
                        index <= step
                          ? "bg-[#b11f24] text-white"
                          : "bg-white text-accent"
                      }`}
                    >
                      {index + 1}
                    </span>
                    <span
                      className={`mt-1 absolute top-full left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] md:text-[13px] lg:text-[clamp(0.75rem,0.4418rem+0.361vw,0.875rem)] font-medium text-white`}
                    >
                      {label}
                    </span>
                  </div>
                  {index < steps.length - 1 ? (
                    <span
                      className={`h-1 flex-1 transition ${index < step ? "bg-accent" : "bg-white"}`}
                    />
                  ) : null}
                </div>
              ))}
            </div>

            {step === 0 ? (
              <>
                <p className="mt-10 mb-3 text-[11px] md:text-[13px] lg:text-[clamp(0.75rem,0.4418rem+0.361vw,0.875rem)] font-bold text-white/80">
                  What is your employment or business profile?
                </p>
                <div className="grid grid-cols-4 gap-4 max-[1024px]:grid-cols-2 max-[480px]:grid-cols-1">
                  {profiles.map(({ key, title, subtitle }) => {
                    const isActive = selectedProfile === key;
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setSelectedProfile(key)}
                        className={`flex items-start justify-between gap-2 rounded-[14px] border-2 p-4 text-left transition ${
                          isActive
                            ? "border-accent bg-accent text-white"
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
                  <label className="mt-6 block mb-3 md:mb-0 text-[11px] md:text-[13px] lg:text-[clamp(0.75rem,0.4418rem+0.361vw,0.875rem)] font-bold text-white/80 w-full md:w-fit">
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
                      onClick={() => setStep(1)}
                      className="rounded-full w-full bg-accent px-10 py-3.5 text-[12px] md:text-[14px] lg:text-[clamp(0.8125rem,0.5043rem+0.361vw,0.9375rem)] font-semibold text-center text-white transition hover:-translate-y-0.5 hover:shadow-[0_8px_18px_rgba(122,16,21,0.4)]"
                    >
                      Continue to Income
                    </button>
                  </div>
                </div>
              </>
            ) : null}

            {step === 1 ? (
              <StepPlaceholder
                title="Tell us about your income"
                description="Add your monthly or annual income details so we can match you with the most suitable lenders."
                onBack={() => setStep(0)}
                onNext={() => setStep(2)}
                nextLabel="Continue to Loan Details"
              />
            ) : null}

            {step === 2 ? (
              <StepPlaceholder
                title="A few loan details"
                description="Tell us the loan amount and tenure you're looking for, and any existing obligations."
                onBack={() => setStep(1)}
                onNext={() => setStep(3)}
                nextLabel="Check Eligibility"
              />
            ) : null}

            {step === 3 ? (
              <div className="mt-8 rounded-[14px] bg-[#f1f8f2] p-6 text-center">
                <p className="text-sm font-semibold text-[#10192b]">
                  You&apos;re pre-qualified!
                </p>
                <p className="mt-2 text-2xl font-bold text-[#134b96]">
                  Up to ₹18,50,000
                </p>
                <p className="mt-2 text-xs text-[#5f6a7b]">
                  Based on the details provided. Final offer may vary by lender.
                </p>
                <button
                  type="button"
                  onClick={() => setStep(0)}
                  className="mt-5 rounded-full bg-gradient-to-r from-[#7a1015] to-[#5c0e12] px-6 py-3 text-xs font-bold text-white transition"
                >
                  Start Over
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepPlaceholder({ title, description, onBack, onNext, nextLabel }) {
  return (
    <div className="mt-8">
      <div className="rounded-[14px] border border-dashed border-[#dce1e7] p-6 text-center">
        <p className="text-sm font-bold text-[#10192b]">{title}</p>
        <p className="mt-2 text-xs leading-relaxed text-[#5f6a7b]">
          {description}
        </p>
      </div>
      <div className="flex justify-end gap-3 flex-wrap mt-5">
        <button
          type="button"
          onClick={onBack}
          className="rounded-full border border-[#dce1e7] px-8 py-3.5 text-sm font-bold text-white transition hover:border-[#134b96] hover:text-[#134b96] w-full md:w-fit"
        >
          Back
        </button>
        <button
          type="button"
          onClick={onNext}
          className="rounded-full bg-accent px-10 py-3.5 text-sm font-bold text-white transition w-full md:w-fit"
        >
          {nextLabel}
        </button>
      </div>
    </div>
  );
}
