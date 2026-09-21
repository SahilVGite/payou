"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowDown,
  ChevronDown,
  Clock3,
  Handshake,
  Lock,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Users,
} from "lucide-react";
import FacebookIcon from "../../../public/icons/FacebookIcon";
import GlobeIcon from "../../../public/icons/GlobeIcon";
import InstagramIcon from "../../../public/icons/InstagramIcon";
import LinkedinIcon from "../../../public/icons/LinkedinIcon";
import YouTubeIcon from "../../../public/icons/YouTubeIcon";
import Collapse from "../common/Collapse";
import { footerCategories } from "../../data/navigation";

const quickLinks = [
  ["About Us", "/about-us"],
  ["FAQ", "/faq"],
  ["Contact Us", "/contact-us"],
  ["Blog", "/blog"],
  ["Privacy Policy", "/privacy-policy"],
  ["Disclaimer", "/privacy-policy"],
  ["Terms & Conditions", "/privacy-policy"],
];
const partners = [
  "SBI",
  "Yes Bank",
  "Kotak Mahindra",
  "Bajaj Finance",
  "Tata Capital",
  "L&T Finance",
  "HDFC Bank",
  "ICICI Bank",
];
const footerTabs = ["LOANS", "ACCOUNTS", "INSURANCE", "INVESTMENTS", "CALCULATORS"];

export default function Footer() {
  const [activeTab, setActiveTab] = useState(footerTabs[0]);
  const [openLink, setOpenLink] = useState(null);
  const links = footerCategories[activeTab];

  return (
    <footer className="bg-primary font-nunito text-white px-[4%]">
      <div className="mx-auto max-w-(--content-width) grid grid-cols-[31%_1fr] lg:gap-[7%] pb-8 secGapT max-[800px]:grid-cols-1">
        <div className="lg:max-w-[424px]">
          <div className="flex items-center justify-center">
            <Image
              src="/images/siteLogoFooter.png"
              alt="PayYou Advisory Private Limited"
              width={165}
              height={85}
            />
          </div>
          <p className="my-6 text-[14px] md:text-[16px] lg:text-[19px] leading-relaxed">
            Leading loan advisory in Pune, connecting you with trusted banking and financial partners for personal, business, home, and property loans.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="flex items-center gap-2 rounded-full bg-white px-[1.1428em] py-[0.5714em] text-[11px] md:text-[13px] lg:text-[clamp(0.75rem,0.4418rem+0.361vw,0.875rem)] font-semibold font-inter text-primary">
              <Lock size={14} className="font-bold" />
              100% Secure Process
            </span>
            <span className="flex items-center gap-2 rounded-full bg-white px-[1.1428em] py-[0.5714em] text-[11px] md:text-[13px] lg:text-[clamp(0.75rem,0.4418rem+0.361vw,0.875rem)] font-semibold font-inter text-primary">
              <Users size={14} className="font-bold" />
              25+ Lending Partners
            </span>
          </div>
          <h2 className="mb-2 mt-5 text-white text-[14px] md:text-[16px] lg:text-[20px] font-black tracking-wide">
            GET IN TOUCH
          </h2>
          <address className="grid grid-cols-[15px_1fr] gap-x-3 gap-y-4 not-italic font-inter text-[13px] md:text-[15px] lg:text-[17px] leading-snug">
            <MapPin size={18} className="mt-0.5" />
            <p>
              Office No. 3, 4, 5, 6, Vishal Arcade, Opp. to
              Sonigara Jewellers, Pimple Chinchwad
              (Municipal Corporation), Haveli, Pune - 411019
            </p>
            <Phone size={18} className="mt-0.5" />
            <p>
              <a className="font-bold" href="tel:02027350055">
                020 2735 0055 | {" "}
              </a>
              <a className="font-bold" href="tel:+91 91755 35555">
                +91 91755 35555
              </a>
            </p>
            <Mail size={18} className="mt-0.5" />
            <p>
              <a className="font-bold" href="mailto:info@payyouadvisory.com">
                info@payyouadvisory.com
              </a>
            </p>
            <Clock3 size={18} className="mt-0.5" />
            <p className="font-bold">Mon - Sat: 9:30 AM - 6:30 PM</p>
          </address>
          <div className="mt-4 flex gap-2.5">
            {[
              [FacebookIcon, "Facebook"],
              [LinkedinIcon, "LinkedIn"],
              [InstagramIcon, "Instagram"],
              [YouTubeIcon, "YouTube"],
              [GlobeIcon, "Website"],
            ].map(([Icon, label]) => (
              <a
                key={label}
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white bg-white text-primary transition-colors hover:bg-primary hover:text-white"
                href="#"
                aria-label={label}
              >
                <Icon size={24} color="currentColor" className="transition-colors" />
              </a>
            ))}
          </div>
        </div>
        <div className="[@media(max-width:1023px)]:mt-8">
          <div className="mb-3 flex flex-wrap gap-2">
            {footerTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => {
                  setActiveTab(tab);
                  setOpenLink(null);
                }}
                className={`rounded-full px-[1.25em] py-[0.625em] font-cairo text-[11px] md:text-[14px] lg:text-[16px] font-bold cursor-pointer transition ${
                  activeTab === tab ? "bg-[#b11f24] text-white" : "bg-white text-[#134B96] hover:bg-white/90"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          {links.map((item) => {
            const isOpen = item.label === openLink;
            const hasSubLinks = item.subLinks.length > 0;

            if (!hasSubLinks) {
              return (
                <Link
                  key={item.label}
                  href="/contact-us"
                  className="flex items-center justify-between border-b border-white/10 py-2.5 font-poppins text-base font-bold last:border-b-0"
                >
                  {item.label}
                  <ArrowDown size={16} className="-rotate-90" />
                </Link>
              );
            }

            return (
              <div key={item.label} className="">
                <button
                  type="button"
                  onClick={() => setOpenLink(isOpen ? null : item.label)}
                  className="flex w-full items-center justify-between py-2.5 text-left font-poppins text-base font-bold"
                >
                  {item.label}
                  <ChevronDown
                    size={24}
                    className={`shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <Collapse open={isOpen}>
                  <div className="flex flex-col gap-1 pb-3 pl-3">
                    {item.subLinks.map((subLink) => (
                      <Link
                        key={subLink}
                        href="/contact-us"
                        className="py-1 font-nunito text-[13px] font-normal text-white/75 transition hover:text-white"
                      >
                        {subLink}
                      </Link>
                    ))}
                  </div>
                </Collapse>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mx-auto max-w-(--content-width) w-full border-t border-white/55 py-3 md:py-4 lg:py-6">
       <h3 className="mb-2 md:mb-4 text-[14px] md:text-[16px] lg:text-[20px] tracking-[0.5px] font-black text-white">QUICK LINKS</h3>
        <div className="flex flex-wrap gap-y-2">
          {quickLinks.map(([label, href]) => (
            <Link
              className="mr-3 border-r border-white/55 pr-3 text-[11px] md:text-[13px] lg:text-[15px] font-bold leading-[1.3em]"
              href={href}
              key={label}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-(--content-width) w-full border-t border-white/55 py-3 md:py-4 lg:py-6">
        <h3 className="mb-2 md:mb-4 text-[14px] md:text-[16px] lg:text-[20px] tracking-[0.5px] font-black text-white">
          OUR LENDING PARTNERS
        </h3>
        <div className="flex flex-wrap gap-2">
          {partners.map((partner) => (
            <span
              className="rounded bg-white px-[1.25em] py-[0.625em] text-center text-[11px] md:text-[14px] lg:text-[16px] font-bold font-inter text-primary"
              key={partner}
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-(--content-width) w-full border-y border-white/55 py-3 md:py-4 lg:py-6 text-[17px] leading-relaxed font-normal">
        Disclaimer: Payyou Advisory Private Ltd. is a digital loan referral and
        financial advisory platform. We are not a registered bank, Non-Banking
        Financial Company (NBFC), or direct lender. All loan approvals, interest
        rates, tenures, and terms are determined solely by the respective
        partner banks and licensed financial institutions at their discretion
        based on your credit profile and eligibility. We do not charge customers
        any upfront fees for loan facilitation.
      </div>
      <div className="mx-auto max-w-(--content-width) flex w-full flex-wrap justify-between gap-2 py-3 md:py-4 lg:py-6 text-[11px] md:text-[14px] lg:text-[16px] font-bold max-[800px]:flex-col">
        <span>© 2026 Payyou Advisory Private Ltd. All rights reserved.</span>
        <span>
          <Link href="/privacy-policy">Privacy Policy</Link> &nbsp;|&nbsp;{" "}
          <Link href="/privacy-policy">Terms &amp; Conditions</Link>{" "}
          &nbsp;|&nbsp; <Link href="/privacy-policy">Cookie Policy</Link>{" "}
          &nbsp;|&nbsp; <Link href="/privacy-policy">Disclaimer</Link>
        </span>
      </div>
    </footer>
  );
}
