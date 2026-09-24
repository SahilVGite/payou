"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import FacebookIcon from "../../../public/icons/FacebookIcon";
import GlobeIcon from "../../../public/icons/GlobeIcon";
import InstagramIcon from "../../../public/icons/InstagramIcon";
import LinkedinIcon from "../../../public/icons/LinkedinIcon";
import YouTubeIcon from "../../../public/icons/YouTubeIcon";

// Only Home and Contact Us are real pages for now — every other label keeps its text but
// points at "/" until its page exists, rather than 404ing.
const popularProducts = [
  ["Loan", "/"],
  ["Insurance", "/"],
  ["Investments", "/"],
];

const usefulLinks = [
  ["Home", "/"],
  ["About", "/"],
  ["Careers", "/"],
  ["Contact", "/contact-us"],
  ["Calculators", "/"],
  ["Customer Care", "/"],
];

const socialLinks = [
  [FacebookIcon, "Facebook"],
  [LinkedinIcon, "LinkedIn"],
  [InstagramIcon, "Instagram"],
  [YouTubeIcon, "YouTube"],
  [GlobeIcon, "Website"],
];

// Same heading treatment for all three columns (matches the existing "GET IN TOUCH" /
// "QUICK LINKS" heading styles already in this codebase).
const columnHeadingClassName =
  "mb-2 md:mb-4 text-[clamp(0.8125rem,0.5368rem+1.2255vw,1.125rem)] md:text-[18px] lg:text-[clamp(0.9375rem,0.3125rem+0.7813vw,1.25rem)] tracking-[0.5px] font-black text-white";
// Same plain-link treatment already used for the mega-menu's sub-links.
const columnLinkClassName =
  "py-1 font-inter text-[12px] md:text-[14px] lg:text-[clamp(0.8125rem,0.5043rem+0.361vw,0.9375rem)] font-normal text-white/75 transition hover:text-white";

export default function Footer() {
  return (
    <footer className="bg-primary font-nunito text-white px-[4%]">
      <div className="mx-auto max-w-(--content-width) grid grid-cols-2 gap-[clamp(1.25rem,0.7482rem+1.4599vw,2.5rem)] pb-8 secGapT sm:grid-cols-2 lg:grid-cols-[21.52%_15%_15%_29.82%] lg:justify-between">
        <div className="col-span-2 sm:col-span-1">
          <Link href="/" className="inline-block">
            <Image
              src="/images/siteLogoFooter.png"
              alt="PayYou Advisory Private Limited"
              width={162}
              height={85}
              className="h-auto max-sm:max-w-32 lg:max-w-[clamp(7.5rem,1.0275rem+7.5812vw,10.125rem)]"
            />
          </Link>
          <p className="my-6 text-[clamp(0.875rem,0.6544rem+0.9804vw,1.125rem)] md:text-[18px] lg:text-[clamp(0.875rem,0.25rem+0.7813vw,1.1875rem)] leading-relaxed">
            Leading loan advisory in Pune, connecting you with trusted banking
            and financial partners for personal, business, home, and property
            loans.
          </p>
        </div>

        <div>
          <h3 className={columnHeadingClassName}>POPULAR PRODUCTS</h3>
          <div className="flex flex-col">
            {popularProducts.map(([label, href]) => (
              <Link key={label} href={href} className={columnLinkClassName}>
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className={columnHeadingClassName}>USEFUL LINKS</h3>
          <div className="flex flex-col">
            {usefulLinks.map(([label, href]) => (
              <Link key={label} href={href} className={columnLinkClassName}>
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div className="col-span-2 sm:col-span-1">
          <h3 className={columnHeadingClassName}>GET IN TOUCH</h3>
          <address className="grid grid-cols-[15px_1fr] gap-x-3 gap-y-4 not-italic font-inter text-[13px] md:text-[15px] lg:text-[clamp(0.8125rem,0.3125rem+0.625vw,1.0625rem)] leading-snug">
            <MapPin size={18} className="mt-0.5" />
            <p>
              Office No. 3, 4, 5, 6, Vishal Arcade, Opp. to Sonigara Jewellers,
              Pimple Chinchwad (Municipal Corporation), Haveli, Pune - 411019
            </p>
            <Phone size={18} className="mt-0.5" />
            <p>
              <a href="tel:02027350055">
                020 2735 0055 |{" "}
              </a>
              <a href="tel:+91 91755 35555">
                +91 91755 35555
              </a>
            </p>
            <Mail size={18} className="mt-0.5" />
            <p>
              <a href="mailto:info@payyouadvisory.com">
                info@payyouadvisory.com
              </a>
            </p>
            <Clock3 size={18} className="mt-0.5" />
            <p>Mon - Sat: 9:30 AM - 6:30 PM</p>
          </address>
          <div className="mt-4 flex gap-2.5">
            {socialLinks.map(([Icon, label]) => (
              <a
                key={label}
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white bg-white text-primary transition-colors hover:bg-primary hover:text-white"
                href="#"
                aria-label={label}
              >
                <Icon
                  size={24}
                  color="currentColor"
                  className="transition-colors"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-(--content-width) flex w-full flex-wrap justify-between gap-2 border-t border-white/55 py-3 md:py-4 lg:py-6 text-white text-[13px] md:text-[14px] lg:text-[clamp(0.8125rem,0.3502rem+0.5415vw,1rem)] font-bold max-[800px]:flex-col">
        <span>© 2026 Payyou Advisory Private Ltd. All rights reserved.</span>
        <span>
          <Link href="/">Privacy Policy</Link> &nbsp;|&nbsp;{" "}
          <Link href="/">Terms &amp; Conditions</Link>{" "}
          &nbsp;|&nbsp; <Link href="/">Cookie Policy</Link>{" "}
          &nbsp;|&nbsp; <Link href="/">Disclaimer</Link>
        </span>
      </div>
    </footer>
  );
}
