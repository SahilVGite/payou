"use client";

import { useState } from "react";
import Link from "next/link";
import Select from "../common/Select";
import LoanGuidanceIcon from "../../../public/icons/LoanGuidanceIcon";
import InterestRateEnquiryIcon from "../../../public/icons/InterestRateEnquiryIcon";
import ApplicationSupportIcon from "../../../public/icons/ApplicationSupportIcon";
import CallUsIcon from "../../../public/icons/CallUsIcon";
import EmailUsIcon from "../../../public/icons/EmailUsIcon";
import WhatsappIcon from "../../../public/icons/WhatsappIcon";
import VisitOfficeIcon from "../../../public/icons/VisitOfficeIcon";

const highlights = [
  [LoanGuidanceIcon, "Loan Guidance"],
  [InterestRateEnquiryIcon, "Interest Rate Enquiry"],
  [ApplicationSupportIcon, "Application Support"],
  [ApplicationSupportIcon, "Application Support"],
];

const channels = [
  [CallUsIcon, "Call us", "+91 84248 12345", "tel:+918424812345"],
  [EmailUsIcon, "Email Us", "care@payyouadvisory.com", "mailto:care@payyouadvisory.com"],
  [WhatsappIcon, "Whatsapp", "+91 84248 12345", "https://wa.me/918424812345"],
  [VisitOfficeIcon, "Visit our office", "Baner, Pune, Maharashtra", "#office-locations"],
];

const services = [
  "Personal Loan",
  "Business Loan",
  "Home Loan",
  "Loan Against Property",
  "Gold Loan",
  "Insurance",
  "Investments",
  "Other",
];

export default function FinancialQuestionForm() {
  const [message, setMessage] = useState("");

  return (
    <section className="px-[4%] secGap">
      <div className="mx-auto max-w-(--content-width) rounded-[28px] bg-primary p-6 md:p-10 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="text-white">
            <span className="inline-block rounded-full bg-white px-4 py-1.5 text-[11px] font-bold text-primary md:text-[13px]">
              GET EXPERT GUIDANCE
            </span>
            <h2 className="mt-4 text-[28px] font-medium leading-tight md:text-[34px]">
              Have a <strong className="font-bold">Financial Question?</strong>
            </h2>
            <p className="mt-3 text-[14px] leading-relaxed text-white/80 md:text-[15px]">
              Get personalized advice from our loan experts. We&apos;ll help you find the right solution for your needs.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-4">
              {highlights.map(([Icon, label], index) => (
                <div key={`${label}-${index}`} className="flex items-center gap-2.5 text-[13px] font-semibold md:text-[14px]">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15">
                    <Icon size={18} />
                  </span>
                  {label}
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-3">
              {channels.map(([Icon, label, value, href]) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-3 rounded-2xl bg-white/10 px-5 py-3.5 transition hover:bg-white/15"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
                    <Icon size={20} />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-[12px] text-white/75">{label}</span>
                    <span className="text-[14px] font-bold md:text-[15px]">{value}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <form
            className="rounded-[22px] bg-white/10 p-5 md:p-8"
            action="mailto:care@payyouadvisory.com"
            method="post"
            encType="text/plain"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-[13px] font-semibold text-white">
                Full Name <span className="text-[#ff8c7a]">*</span>
                <input
                  required
                  name="name"
                  placeholder="Enter your name"
                  className="rounded-full bg-white px-4 py-3 text-[13px] text-ink outline-none placeholder:text-[#8b93a1]"
                />
              </label>
              <label className="grid gap-2 text-[13px] font-semibold text-white">
                Mobile Number <span className="text-[#ff8c7a]">*</span>
                <span className="flex items-center gap-2 rounded-full bg-white px-4 py-3">
                  <span className="text-[13px] text-[#8b93a1]">+91</span>
                  <input
                    required
                    type="tel"
                    name="mobile"
                    placeholder="Enter Mobile Number"
                    className="w-full text-[13px] text-ink outline-none placeholder:text-[#8b93a1]"
                  />
                </span>
              </label>
              <label className="grid gap-2 text-[13px] font-semibold text-white">
                Email Address <span className="text-[#ff8c7a]">*</span>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Enter email address"
                  className="rounded-full bg-white px-4 py-3 text-[13px] text-ink outline-none placeholder:text-[#8b93a1]"
                />
              </label>
              <label className="grid gap-2 text-[13px] font-semibold text-white">
                Select Service <span className="text-[#ff8c7a]">*</span>
                <Select
                  required
                  name="service"
                  defaultValue=""
                  className="w-full rounded-full bg-white px-4 py-3 text-[13px] text-ink outline-none"
                  chevronClassName="text-[#8b93a1]"
                >
                  <option value="" disabled>Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </Select>
              </label>
            </div>

            <label className="mt-5 grid gap-2 text-[13px] font-semibold text-white">
              Message <span className="text-[#ff8c7a]">*</span>
              <span className="relative block">
                <textarea
                  required
                  name="message"
                  rows={4}
                  maxLength={500}
                  placeholder="Tell us how we can help you"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className="w-full resize-none rounded-2xl bg-white px-4 py-3 text-[13px] text-ink outline-none placeholder:text-[#8b93a1]"
                />
                <span className="pointer-events-none absolute bottom-3 right-4 text-[11px] text-[#8b93a1]">
                  {message.length}/500
                </span>
              </span>
            </label>

            <label className="mt-4 flex items-start gap-2 text-[12px] leading-relaxed text-white/85">
              <input required type="checkbox" name="consent" className="mt-0.5 h-4 w-4 shrink-0 rounded border-white/60 bg-transparent" />
              I agree to be connected by PayYou Advisory. I accept the{" "}
              <Link href="/privacy-policy" className="underline">Privacy Policy</Link> and consent to receive communication.
            </label>

            <button
              type="submit"
              className="mt-5 w-full rounded-full bg-accent py-3.5 text-[13px] font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#961a1e]"
            >
              SEND MESSAGE
            </button>
            <p className="mt-3 text-center text-[11px] text-white/70">
              Your information is safe with us. We respect your privacy
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
