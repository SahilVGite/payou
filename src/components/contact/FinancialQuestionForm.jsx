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

const DEFAULT_PHONE = "+91 84248 12345";
const DEFAULT_WHATSAPP = "+91 84248 12345";
const DEFAULT_EMAIL = "care@payyouadvisory.com";
const DEFAULT_OFFICE_LABEL = "Baner, Pune, Maharashtra";

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

export default function FinancialQuestionForm({
  phone = DEFAULT_PHONE,
  whatsapp = DEFAULT_WHATSAPP,
  email = DEFAULT_EMAIL,
  officeLabel = DEFAULT_OFFICE_LABEL,
  officeHref = "#office-locations",
  mapQuery,
  gridCards = false,
}) {
  const [message, setMessage] = useState("");

  const channels = [
    [CallUsIcon, "Call us", phone, `tel:${phone.replace(/\s+/g, "")}`],
    [EmailUsIcon, "Email Us", email, `mailto:${email}`],
    [WhatsappIcon, "Whatsapp", whatsapp, `https://wa.me/${whatsapp.replace(/[^0-9]/g, "")}`],
    [VisitOfficeIcon, "Visit our office", officeLabel, officeHref],
  ];

  return (
    <section className="px-[4%] secGap">
      <div className="mx-auto max-w-(--content-width) rounded-2xl md:rounded-4xl bg-primary py-[clamp(2rem,0.7482rem+1.4599vw,2.5rem)] px-[clamp(1.25rem,0.2464rem+2.9197vw,3.75rem)]">
        <div className="grid gap-10 lg:grid-cols-[1fr_50.2%]">
          <div className="text-white">
            <span className="inline-block rounded-full bg-white px-4 py-1.5 text-[11px] font-semibold text-primary md:text-[13px]">
              GET EXPERT GUIDANCE
            </span>
            <h2 className="mt-[0.3809em] text-[clamp(1.5rem,1.2794rem+0.9804vw,1.75rem)] md:text-[36px] lg:text-[clamp(2rem,0.4589rem+1.8051vw,2.625rem)] font-medium leading-tight">
              Have a <strong className="font-bold">Financial Question?</strong>
            </h2>
            <p className="mt-[0.75em] text-[12px] md:text-[14px] lg:text-[clamp(0.875rem,0.5668rem+0.361vw,1rem)] max-w-[55ch] leading-relaxed text-white">
              Get personalized advice from our loan experts. We'll help you find
              the right solution for your needs.
            </p>

            {mapQuery ? (
              <div className="mt-[clamp(0.9375rem,0.397rem+1.1275vw,1.75rem)] overflow-hidden rounded-2xl border border-white/30">
                <iframe
                  title="Branch location"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`}
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="block w-full"
                />
              </div>
            ) : (
              <div className="mt-[clamp(0.9375rem,0.397rem+1.1275vw,1.75rem)] grid grid-cols-2 gap-4">
                {highlights.map(([Icon, label], index) => (
                  <div
                    key={`${label}-${index}`}
                    className="flex items-center gap-2.5 text-[clamp(0.75rem,0.5294rem+0.9804vw,1rem)] md:text-[16px] lg:text-[clamp(0.8125rem,0.042rem+0.9025vw,1.125rem)] font-semibold text-white"
                  >
                    <span className="flex h-10 [@media(max-width:1700px)]:h-8 w-10 [@media(max-width:1700px)]:w-8 bg-glass-effect shrink-0 items-center justify-center rounded-full backdrop-blur-xs bg-white/10">
                      <Icon size={20} className={"[@media(max-width:1700px)]:w-4 [@media(max-width:1700px)]:h-4"} />
                    </span>
                    {label}
                  </div>
                ))}
              </div>
            )}

            <div className={`mt-[clamp(0.9375rem,0.397rem+1.1275vw,1.75rem)] gap-3 ${gridCards ? "grid grid-cols-1 [@media(min-width:1024px)_and_(max-width:1500px)]:grid-cols-1 md:grid-cols-2" : "flex flex-col"}`}>
              {channels.map(([Icon, label, value, href]) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 rounded-2xl bg-[rgba(255,255,255,0.08)] backdrop-blur-xs border border-white/30 px-5 py-2.5 [@media(min-width:1700px)]:py-3.5 transition hover:bg-white/15"
                >
                  <span className="flex h-10 [@media(max-width:1700px)]:h-8 w-10 [@media(max-width:1700px)]:w-8 bg-glass-effect backdrop-blur-xs shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Icon size={20} className={"[@media(max-width:1700px)]:w-4 [@media(max-width:1700px)]:h-4"} />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-[12px] md:text-[14px] lg:text-[clamp(0.875rem,0.5668rem+0.361vw,1rem)] text-white">
                      {label}
                    </span>
                    <span className="text-[12px] md:text-[14px] lg:text-[clamp(0.875rem,0.5668rem+0.361vw,1rem)] font-semibold text-white">
                      {value}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <form
            className="flex flex-col rounded-3xl bg-[rgba(255,255,255,0.02)] bg-glass-effect backdrop-blur-sm shadow-[0px_16px_32px_rgba(0,0,0,0.25098)] p-5 md:p-8"
            action={`mailto:${email}`}
            method="post"
            encType="text/plain"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="grid gap-2 text-[12px] md:text-[14px] lg:text-[clamp(0.8125rem,0.3502rem+0.5415vw,1rem)] font-medium text-[#EEE8E8]">
                <span className="flex">
                  Full Name <span className="text-accent">*</span>
                </span>
                <input
                  required
                  name="name"
                  placeholder="Enter your name"
                  className="rounded-full bg-white px-4 py-3 text-[clamp(0.5625rem,0.3839rem+0.8929vw,0.8125rem)] md:text-[13px] lg:text-[clamp(0.75rem,0.4418rem+0.361vw,0.875rem)] text-ink outline-none placeholder:text-[#4B5563]"
                />
              </label>
              <label className="grid gap-2 text-[12px] md:text-[14px] lg:text-[clamp(0.8125rem,0.3502rem+0.5415vw,1rem)] font-medium text-[#EEE8E8]">
                <span className="flex">
                  Mobile Number <span className="text-accent">*</span>
                </span>
                <span className="flex items-center gap-2 rounded-full bg-white px-4 py-3">
                  <span className="text-[12px] md:text-[14px] lg:text-[clamp(0.8125rem,0.3502rem+0.5415vw,1rem)] text-ink">
                    +91
                  </span>
                  <input
                    required
                    type="tel"
                    name="mobile"
                    placeholder="Enter Mobile Number"
                    className="w-full text-[clamp(0.5625rem,0.3839rem+0.8929vw,0.8125rem)] md:text-[13px] lg:text-[clamp(0.75rem,0.4418rem+0.361vw,0.875rem)] text-ink outline-none placeholder:text-[#4B5563]"
                  />
                </span>
              </label>
              <label className="grid gap-2 text-[12px] md:text-[14px] lg:text-[clamp(0.8125rem,0.3502rem+0.5415vw,1rem)] font-medium text-[#EEE8E8]">
                <span className="flex">
                  Email Address <span className="text-accent">*</span>
                </span>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Enter email address"
                  className="rounded-full bg-white px-4 py-3 text-[clamp(0.5625rem,0.3839rem+0.8929vw,0.8125rem)] md:text-[13px] lg:text-[clamp(0.75rem,0.4418rem+0.361vw,0.875rem)] text-ink outline-none placeholder:text-[#4B5563]"
                />
              </label>
              <label className="grid gap-2 text-[12px] md:text-[14px] lg:text-[clamp(0.8125rem,0.3502rem+0.5415vw,1rem)] font-medium text-[#EEE8E8]">
                <span className="flex">
                  Select Service <span className="text-accent">*</span>
                </span>
                <Select
                  required
                  name="service"
                  defaultValue=""
                  className="w-full rounded-full bg-white px-4 py-3 text-[clamp(0.5625rem,0.3839rem+0.8929vw,0.8125rem)] md:text-[13px] lg:text-[clamp(0.75rem,0.4418rem+0.361vw,0.875rem)] text-ink outline-none"
                  chevronClassName="text-[#4B5563]"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </Select>
              </label>
            </div>

            <label className="mt-[1.5em] flex min-h-0 flex-1 flex-col gap-2 text-[12px] md:text-[14px] lg:text-[clamp(0.8125rem,0.3502rem+0.5415vw,1rem)] font-medium text-white">
              <span className="flex">
                Message <span className="text-accent">*</span>
              </span>
              <span className="relative flex flex-1">
                <textarea
                  required
                  name="message"
                  rows={4}
                  maxLength={500}
                  placeholder="Tell us how we can help you"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className="w-full grow shrink-0 resize-none rounded-2xl bg-white px-4 py-3 text-[clamp(0.5625rem,0.3839rem+0.8929vw,0.8125rem)] md:text-[13px] lg:text-[clamp(0.75rem,0.4418rem+0.361vw,0.875rem)] text-ink outline-none placeholder:text-[#4B5563]"
                />
                <span className="pointer-events-none absolute bottom-3 right-4 text-[clamp(0.5625rem,0.3839rem+0.8929vw,0.8125rem)] md:text-[13px] lg:text-[clamp(0.75rem,0.4418rem+0.361vw,0.875rem)] text-[#4B5563]">
                  {message.length}/500
                </span>
              </span>
            </label>

            <label className="mt-[1.5em] flex items-start gap-3 text-[clamp(0.5625rem,0.3839rem+0.8929vw,0.8125rem)] md:text-[13px] lg:text-[clamp(0.75rem,0.4418rem+0.361vw,0.875rem)] leading-relaxed text-white/85">
              <span className="relative mt-0.5 h-4 lg:h-[clamp(1.125rem,0.3545rem+0.9025vw,1.4375rem)] w-4 lg:w-[clamp(1.125rem,0.3545rem+0.9025vw,1.4375rem)] shrink-0">
                <input
                  required
                  type="checkbox"
                  name="consent"
                  className="peer absolute inset-0 h-full w-full cursor-pointer opacity-0"
                />
                <span className="pointer-events-none absolute inset-0 rounded-[5px] border-2 border-white peer-focus-visible:ring-2 peer-focus-visible:ring-white peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-primary" />
                <span className="pointer-events-none absolute inset-0 hidden items-center justify-center text-[15px] font-bold leading-none text-white peer-checked:flex">
                  ✓
                </span>
              </span>
              <span className="">
                I agree to be connected by PayYou Advisory. I accept the{" "}
                <Link href="/" className="underline text-[#7EB6FF]">
                  Privacy Policy
                </Link>{" "}
                and consent to receive communication.
              </span>
            </label>

            <button
              type="submit"
              className="mt-[1.5em] w-full rounded-full bg-accent py-[0.7em] [@media(min-width:1700px)]:py-[0.8411em] text-[clamp(0.75rem,0.5294rem+0.9804vw,1rem)] md:text-[16px] lg:text-[clamp(0.9375rem,0.6875rem+0.3125vw,1.0625rem)] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#961a1e]"
            >
              SEND MESSAGE
            </button>
            <p className="mt-[1.5em] text-center text-[10px] md:text-[12px] text-[#EEE8E8]">
              Your information is safe with us. We respect your privacy
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
