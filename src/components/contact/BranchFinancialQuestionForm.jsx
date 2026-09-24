"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Select from "../common/Select2Field";
import CallUsIcon from "../../../public/icons/CallUsIcon";
import EmailUsIcon from "../../../public/icons/EmailUsIcon";
import WhatsappIcon from "../../../public/icons/WhatsappIcon";
import VisitOfficeIcon from "../../../public/icons/VisitOfficeIcon";
import TimingIcon from "../../../public/icons/TimingIcon";
import AddressIcon from "../../../public/icons/AddressIcon";
import PincodeIcon from "../../../public/icons/PincodeIcon";
import IfscCodeIcon from "../../../public/icons/IfscCodeIcon";
import ServicesOfferedIcon from "../../../public/icons/ServicesOfferedIcon";

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

// Same across every branch — this is the firm's own service line-up, not something that
// varies branch to branch (matches the "Services Offered" row in the Figma design).
const DEFAULT_SERVICES_OFFERED =
  "Personal Loan, Home Loan, Business Loan, Loan Against Property, Vehicle Loan, Working Capital, Loan Refinancing, Financial Advisory, Credit Assistance";

// Tailwind's own arbitrary `[@media(min-width:A)_and_(max-width:B)]:` variants aren't
// reliably ordered relative to the unprefixed base utility in this project's build (same
// pitfall hit earlier in Footer.jsx) — even non-overlapping bounded ranges ended up losing
// to the base `grid-cols-1` at every width. Deciding the column count in JS via matchMedia
// (same pattern as FinancialSolutions.jsx's useResponsiveTier) sidesteps the CSS cascade
// entirely instead of fighting it.
function useSingleColumnInfoGrid() {
  const [singleColumn, setSingleColumn] = useState(false);

  useEffect(() => {
    const mqMobile = window.matchMedia("(max-width: 767px)");
    const mqMidRange = window.matchMedia("(min-width: 1024px) and (max-width: 1400px)");

    function update() {
      setSingleColumn(mqMobile.matches || mqMidRange.matches);
    }

    update();
    mqMobile.addEventListener("change", update);
    mqMidRange.addEventListener("change", update);
    return () => {
      mqMobile.removeEventListener("change", update);
      mqMidRange.removeEventListener("change", update);
    };
  }, []);

  return singleColumn;
}

// Purpose-built for the per-branch contact page (app/contact-us/branch/[slug]) per its own
// Figma design — a distinct "Branch Details" info grid (call/email/whatsapp/branch code/
// timing/address/pincode/IFSC/services) next to the enquiry form and a map, rather than the
// icon-row + highlights layout the main Contact Us page's FinancialQuestionForm uses. Kept
// as its own component (instead of reworked into FinancialQuestionForm) so the main Contact
// Us page's layout is untouched.
export default function BranchFinancialQuestionForm({
  city,
  phone,
  whatsapp,
  email,
  branchCode,
  timing,
  address,
  pincode,
  ifscCode,
  servicesOffered = DEFAULT_SERVICES_OFFERED,
  mapQuery,
}) {
  const [message, setMessage] = useState("");
  const singleColumn = useSingleColumnInfoGrid();

  const details = [
    [CallUsIcon, "Call us", phone, `tel:${phone.replace(/\s+/g, "")}`],
    [EmailUsIcon, "Email Us", email, `mailto:${email}`],
    [WhatsappIcon, "Whatsapp", whatsapp, `https://wa.me/${whatsapp.replace(/[^0-9]/g, "")}`],
    [VisitOfficeIcon, "Branch Code", branchCode],
    [TimingIcon, "Timing", timing],
    [AddressIcon, "Address", address, undefined, true, true],
    [PincodeIcon, "Pincode", pincode],
    [IfscCodeIcon, "IFSC Code", ifscCode],
    [ServicesOfferedIcon, "Services Offered", servicesOffered, undefined, true],
  ];

  return (
    <section className="px-[4%] secGap">
      <div className="mx-auto max-w-(--content-width) rounded-2xl md:rounded-4xl bg-primary py-[clamp(2rem,0.7482rem+1.4599vw,2.5rem)] px-[clamp(1.25rem,0.2464rem+2.9197vw,3.75rem)]">
        <div className="grid gap-10 lg:grid-cols-[1fr_50.2%]">
          <div className="text-white">
            <span className="inline-block rounded-full bg-white px-4 py-1.5 text-[11px] font-semibold text-primary md:text-[13px]">
              BRANCH DETAILS
            </span>
            <h2 className="mt-[0.3809em] text-[clamp(1.5rem,1.2794rem+0.9804vw,1.75rem)] md:text-[36px] lg:text-[clamp(2rem,0.4589rem+1.8051vw,2.625rem)] font-medium leading-tight">
              {city} <strong className="font-bold">Branch</strong>
            </h2>
            <p className="mt-[0.75em] text-[12px] md:text-[14px] lg:text-[clamp(0.875rem,0.5668rem+0.361vw,1rem)] max-w-[55ch] leading-relaxed text-white">
              Get personalised financial guidance from our {city} team and find the
              right loan solution for your needs.
            </p>

            <div className={`mt-[clamp(0.9375rem,0.397rem+1.1275vw,1.75rem)] grid ${singleColumn ? "grid-cols-1" : "grid-cols-2"} gap-x-3 lg:gap-x-6 gap-y-8 rounded-2xl bg-glass-effect bg-white/5 border border-white/15 backdrop-blur-xs p-5 md:p-6`}>
              {details.map(([Icon, label, value, href, fullWidth, isHtml]) => (
                <div
                  key={label}
                  className={`flex items-start gap-3 ${fullWidth && !singleColumn ? "col-span-2" : ""}`}
                >
                  <span className="flex h-10 [@media(max-width:1700px)]:h-8 w-10 [@media(max-width:1700px)]:w-8 bg-glass-effect shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10">
                    <Icon size={20} className={"[@media(max-width:1700px)]:w-4 [@media(max-width:1700px)]:h-4"} />
                  </span>
                  <span className="flex min-w-0 flex-col">
                    <span className="text-[12px] md:text-[14px] lg:text-[clamp(0.875rem,0.5668rem+0.361vw,1rem)] text-white">
                      {label}
                    </span>
                    {href ? (
                      <a
                        href={href}
                        className="text-[12px] md:text-[14px] lg:text-[clamp(0.875rem,0.5668rem+0.361vw,1rem)] font-semibold text-white transition hover:underline"
                      >
                        {value}
                      </a>
                    ) : isHtml ? (
                      <span
                        className="text-[12px] md:text-[14px] lg:text-[clamp(0.875rem,0.5668rem+0.361vw,1rem)] font-semibold leading-snug text-white"
                        dangerouslySetInnerHTML={{ __html: value }}
                      />
                    ) : (
                      <span className="text-[12px] md:text-[14px] lg:text-[clamp(0.875rem,0.5668rem+0.361vw,1rem)] font-semibold leading-snug text-white">
                        {value}
                      </span>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6 rounded-3xl bg-[rgba(255,255,255,0.02)] bg-glass-effect backdrop-blur-sm shadow-[0px_16px_32px_rgba(0,0,0,0.25098)] p-5 md:p-8">
            <form
              className="flex flex-col"
              action={`mailto:${email}`}
              method="post"
              encType="text/plain"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="grid gap-2 text-[12px] md:text-[14px] lg:text-[clamp(0.8125rem,0.3502rem+0.5415vw,1rem)] font-medium text-white">
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
                <label className="grid gap-2 text-[12px] md:text-[14px] lg:text-[clamp(0.8125rem,0.3502rem+0.5415vw,1rem)] font-medium text-white">
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
                <label className="grid gap-2 text-[12px] md:text-[14px] lg:text-[clamp(0.8125rem,0.3502rem+0.5415vw,1rem)] font-medium text-white">
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
                <label className="grid gap-2 text-[12px] md:text-[14px] lg:text-[clamp(0.8125rem,0.3502rem+0.5415vw,1rem)] font-medium text-white">
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

            {mapQuery ? (
              <div className="overflow-hidden rounded-2xl border border-white/30">
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
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
