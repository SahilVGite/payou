"use client";

import Link from "next/link";
import { useState } from "react";
import { Handshake, ShieldCheck, Timer, Users } from "lucide-react";
import Select from "../common/Select";

const stats = [
    [Handshake, "25+", "Leading Partners"],
    [ShieldCheck, "100%", "Customer Satisfaction"],
    [Timer, "5", "Years of Experience"],
    [Users, "100+", "Loan Processed"],
];

const incomeTicks = ["1L", "2L", "3L", "4L", "5L", "6L"];

export default function HeroSection() {
    const [income, setIncome] = useState(200000);

    return (
        <section className="relative bg-[radial-gradient(19.33%_167.96%_at_50%_50%,rgba(255,255,255,0.25)_0%,rgba(19,75,150,0.25)_180%)]">
            <div className="relative min-h-[80dvh] secGap flex flex-col justify-center bg-white">
                <video
                    className="absolute inset-0 h-full w-full object-cover lg:object-contain object-bottom lg:max-w-[80%] [@media(min-width:1650px)]:max-w-full mx-auto"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/videos/hero-family.mp4"
                >
                    <source src="/videos/hero-family.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(19,75,150,0.4)_0%,rgba(19,75,150,0.4)_100%)] max-[1023px]:backdrop-blur-sm lg:bg-[radial-gradient(19.33%_167.96%_at_50%_50%,rgba(255,255,255,0.25)_0%,rgba(19,75,150,0.25)_100%)]" />
                <div className="relative w-full mx-auto flex items-center justify-between gap-[6%] px-[5%] max-[1023px]:flex-col max-[800px]:justify-center">
                    <div className="flex-1 pb-12 max-[800px]:pb-4 w-full">
                        <h1 className="m-0 text-[clamp(1.375rem,1.2857rem+0.4464vw,1.5rem)] md:text-[30px] lg:text-[clamp(1.75rem,0.2089rem+1.8051vw,2.375rem)] font-medium leading-[1.34] text-white lg:text-ink">
                            Compare, Apply &amp; Get Fast
                            <br />
                            Loan Disbursal with India&apos;s
                            <br />
                            <strong className="font-bold text-accent">
                                Trusted DSA Partner
                            </strong>
                        </h1>
                        <p className="my-[1em] md:my-[1.3333em] text-[14px] md:text-[16px] lg:text-[clamp(0.9375rem,0.4752rem+0.5415vw,1.125rem)] leading-relaxed text-white lg:text-ink max-[800px]:text-[15px]">
                            PayYouAdvisory is an authorized partner for
                            <br className="max-[480px]:hidden" /> 50+
                            RBI-regulated banks &amp; NBFCs, offering
                            <br className="max-[480px]:hidden" /> competitive
                            rates from 8.30% p.a.
                        </p>
                        <div className="flex gap-2 md:gap-4.5 max-[480px]:flex-col">
                            <Link
                                href="/contact-us"
                                className="rounded-full bg-[#b11f24] px-[3em] py-[0.8em] text-center text-[12px] md:text-[14px] lg:text-[clamp(0.8125rem,0.5043rem+0.361vw,0.9375rem)] font-semibold text-white shadow-[0_5px_10px_rgba(177,31,36,0.25)] transition hover:-translate-y-0.5 hover:bg-[#961a1e] hover:shadow-[0_8px_16px_rgba(177,31,36,0.32)]"
                            >
                                APPLY NOW
                            </Link>
                            <Link
                                href="/contact-us"
                                className="rounded-full bg-[#134b96] px-[1.7333em] py-[0.8em] text-center text-[12px] md:text-[14px] lg:text-[clamp(0.8125rem,0.5043rem+0.361vw,0.9375rem)] font-semibold text-white shadow-[0_5px_10px_rgba(19,75,150,0.23)] transition hover:-translate-y-0.5 hover:bg-[#0e3a75] hover:shadow-[0_8px_16px_rgba(19,75,150,0.3)]"
                            >
                                TALK TO LOAN ADVISOR
                            </Link>
                        </div>
                    </div>
                    <form
                        className="flex basis-[35%] flex-col gap-[17px] rounded-[19px] bg-primary/20 backdrop-blur-lg p-[22px] text-white max-[1023px]:w-full border border-white/20"
                        action="mailto:info@payyouadvisory.com"
                        method="post"
                        encType="text/plain"
                    >
                        <h2 className="m-0 text-[18px] md:text-[22px] lg:text-[clamp(1.25rem,0.6336rem+0.722vw,1.5rem)] font-bold text-white">
                            Instant Pre-Approval Finder
                        </h2>
                        <label className="relative text-[12px] md:text-[14px] lg:text-[clamp(0.875rem,0.5668rem+0.361vw,1rem)] text-[#EEE8E8] font-semibold">
                            Required Facility <em className="text-accent">*</em>
                            <Select
                                className="mt-2.5 text-[12px] md:text-[14px] lg:text-[clamp(0.875rem,0.5668rem+0.361vw,1rem)] block w-full rounded-full border-0 bg-white/90 py-[13px] pl-[18px] pr-10 text-[#4B5563]"
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
                            <output className="float-right rounded border border-white px-2 py-1.5">
                                ₹ {income.toLocaleString("en-IN")}
                            </output>
                            <input
                                className="range-slider mt-5 block w-full"
                                type="range"
                                min="100000"
                                max="600000"
                                value={income}
                                step="100000"
                                onChange={(event) =>
                                    setIncome(Number(event.target.value))
                                }
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
                        <label className="text-[12px] md:text-[14px] lg:text-[clamp(0.875rem,0.5668rem+0.361vw,1rem)] font-medium text-[#EEE8E8]]">
                            Mobile Number
                            <input
                                className="mt-2.5 block w-full rounded-full border-0 bg-white/90 px-[18px] py-[13px] text-ink placeholder:text-[#4B5563] focus:ring-0 focus:outline-none"
                                name="mobile"
                                placeholder="+91 Enter Mobile Number"
                            />
                        </label>
                        <button
                            className="w-full rounded-full border-0 bg-primary py-[1.0666em] text-[12px] md:text-[14px] lg:text-[clamp(0.8125rem,0.5043rem+0.361vw,0.9375rem)] font-semibold text-white transition hover:bg-[#0e3a75] hover:shadow-[0_6px_14px_rgba(19,75,150,0.35)]"
                            type="submit"
                        >
                            CHECK FREE ELIGIBILITY
                        </button>
                        <p className="m-0 text-[12px] md:text-[14px] lg:text-[clamp(0.875rem,0.5668rem+0.361vw,1rem)] font-medium text-[#DADADA]">
                            Zero processing fees payable to advisory. Free soft
                            check without CIBIL score hit.
                        </p>
                    </form>
                </div>
            </div>
            <div className="[@media(max-width:1023px)]:py-(--sec-gap) px-[4%] lg:absolute lg:-bottom-12 lg:inset-x-0 z-10 mx-auto grid max-w-290 grid-cols-4 gap-5 max-[1024px]:grid-cols-2">
                {stats.map(([Icon, value, label]) => (
                    <div
                        key={label}
                        className="text-center flex items-center justify-center gap-4 rounded-xl bg-primary/08 lg:bg-white/55 backdrop-blur-lg px-3 md:px-4 py-4 md:py-5 shadow-[2px_2px_4px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(16,25,43,0.18)]"
                    >
                        <div>
                            <p className="m-0 text-2xl font-bold text-[#10192b]">
                                {value}
                            </p>
                            <p className="m-0 text-[clamp(0.5625rem,0.3839rem+0.8929vw,0.8125rem)] md:text-[13px] lg:text-[clamp(0.75rem,0.4418rem+0.361vw,0.875rem)] uppercase tracking-wider text-[#4B5563]">
                                {label}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
