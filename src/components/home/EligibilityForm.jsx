"use client";

import Select from "../common/Select2Field";
import { useEditableNumber } from "../../hooks/useEditableNumber";

const incomeTicks = ["1L", "2L", "3L", "4L", "5L", "6L"];

export default function EligibilityForm({ className = "" }) {
    const incomeField = useEditableNumber(200000, {
        min: 100000,
        max: 600000,
        format: (value) => value.toLocaleString("en-IN"),
    });
    const income = incomeField.value;

    return (
        <form
            className={`bg-glass-effect flex basis-[35%] flex-col gap-4.25 lg:rounded-[19px] bg-primary/20 backdrop-blur-lg px-5.5 py-8 lg:p-5.5 text-white max-[1023px]:w-full [@media(max-width:1023px)]:[&::before]:hidden ${className}`}
            action="mailto:info@payyouadvisory.com"
            method="post"
            encType="text/plain"
        >
            <h2 className="m-0 text-[18px] md:text-[22px] lg:text-[clamp(1.25rem,0.6336rem+0.722vw,1.5rem)] font-bold text-white">
                Instant Loan Eligibility Check
            </h2>
            <label className="relative flex flex-col text-[12px] md:text-[14px] lg:text-[clamp(0.875rem,0.5668rem+0.361vw,1rem)] text-[#EEE8E8] font-semibold">
                <span className="mb-2.5">Required Facility <em className="text-accent">*</em></span>
                <Select
                    className="text-[12px] md:text-[14px] lg:text-[clamp(0.875rem,0.5668rem+0.361vw,1rem)] block w-full rounded-full border-0 bg-white/90 py-3.25 pl-4.5 pr-10 text-[#4B5563]"
                    defaultValue="Personal Loan"
                    name="facility"
                >
                    <option>Personal Loan</option>
                    <option>Business Loan</option>
                    <option>Home Loan</option>
                    <option>Loan Against Property</option>
                    <option>Gold Loan</option>
                </Select>
            </label>
            <label className="relative text-sm font-semibold">
                Your Income{" "}
                <span className="float-right flex items-center gap-1 rounded border border-white px-2 py-1.5">
                    <span>₹</span>
                    <input
                        type="text"
                        inputMode="decimal"
                        aria-label="Your income"
                        value={incomeField.text}
                        onChange={(event) => incomeField.handleChange(event.target.value)}
                        onFocus={incomeField.handleFocus}
                        onBlur={incomeField.handleBlur}
                        className="w-16 bg-transparent text-white outline-none"
                    />
                </span>
                <input
                    className="range-slider mt-5 block w-full"
                    type="range"
                    min="100000"
                    max="600000"
                    value={income}
                    step="100000"
                    onChange={(event) => incomeField.setFromSlider(Number(event.target.value))}
                    style={{
                        "--range-progress": `${((income - 100000) / (600000 - 100000)) * 100}%`,
                    }}
                />
                <span className="flex justify-between text-[clamp(0.5625rem,0.3839rem+0.8929vw,0.8125rem)] md:text-[13px] lg:text-[clamp(0.75rem,0.4418rem+0.361vw,0.875rem)] text-white mt-[1.25em]">
                    {incomeTicks.map((tick) => (
                        <span key={tick}>{tick}</span>
                    ))}
                </span>
            </label>
            <label className="text-[12px] md:text-[14px] lg:text-[clamp(0.875rem,0.5668rem+0.361vw,1rem)] font-medium text-[#EEE8E8]">
                Mobile Number
                <input
                    className="mt-2.5 block w-full rounded-full border-0 bg-white/90 px-4.5 py-3.25 text-ink placeholder:text-[#4B5563] focus:ring-0 focus:outline-none"
                    name="mobile"
                    placeholder="+91 Enter Mobile Number"
                />
            </label>
            <button
                className="w-full rounded-full border-0 bg-primary py-[1.0666em] text-[12px] md:text-[14px] lg:text-[clamp(0.8125rem,0.5043rem+0.361vw,0.9375rem)] font-semibold text-white transition hover:bg-[#0e3a75] hover:shadow-[0_6px_14px_rgba(19,75,150,0.35)] cursor-pointer"
                type="submit"
            >
                CHECK FREE ELIGIBILITY
            </button>
            <p className="m-0 text-[12px] md:text-[14px] lg:text-[clamp(0.875rem,0.5668rem+0.361vw,1rem)] font-medium text-white lg:text-[#DADADA]">
                We charge zero processing fees and keep your credit score safe. No hidden charges.
            </p>
        </form>
    );
}