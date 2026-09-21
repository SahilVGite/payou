"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  Mail,
  Menu,
  Phone,
  Search,
  UserRound,
  X,
} from "lucide-react";
import { loanGroups, loanMenu } from "../../data/navigation";

// [label, href, hasChevron, isActive] — only LOANS drives the mega-menu, so only it gets the active underline.
const navLinks = [
  ["LOANS", "/contact-us", true, true],
  ["SERVICES", "/about-us", true, false],
  ["CALCULATORS", "/calculators", true, false],
  ["ABOUT US", "/about-us", false, false],
  ["CONTACT US", "/contact-us", false, false],
  ["BLOG", "/blog", false, false],
];

// Desktop nav switches from click-to-open to hover-to-open above this width; matches the
// header's own max-[1024px] mobile breakpoint (mobile/touch keeps click via the hamburger).
const isDesktopViewport = () =>
  typeof window !== "undefined" && window.matchMedia("(min-width: 1025px)").matches;

// Mobile hamburger menu lives at max-[1024px], same breakpoint the header markup itself uses.
const isMobileMenuViewport = () =>
  typeof window !== "undefined" && window.matchMedia("(max-width: 1024px)").matches;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  const openLoansMenu = () => {
    if (isDesktopViewport()) setMenuOpen(true);
  };

  const closeLoansMenuOnLeave = () => {
    if (isDesktopViewport()) setMenuOpen(false);
  };

  useEffect(() => {
    if (!menuOpen || !isMobileMenuViewport()) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (menuOpen || currentScrollY <= 10) {
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setIsVisible(false);
      }

      lastScrollY.current = currentScrollY;
    };

    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-20 font-poppins transition-transform duration-300 ease-out ${isVisible ? "translate-y-0" : "-translate-y-full"} ${menuOpen ? "max-[1024px]:max-h-dvh max-[1024px]:overflow-y-auto" : ""}`}
      onMouseLeave={closeLoansMenuOnLeave}
    >
      <div className="bg-primary font-nunito font-bold text-white">
        <div className="mx-auto flex min-h-9 max-w-(--header-width) items-center justify-between px-4">
          <div className="flex items-center gap-3 text-[clamp(0.5625rem,0.3839rem+0.8929vw,0.8125rem)] md:text-[13px] lg:text-[clamp(0.75rem,0.4418rem+0.361vw,0.875rem)] max-[1024px]:hidden">
            <Phone size={17} />
            <a href="tel:02027350055">020 2735 0055 / + 91 9175535507</a>
            <span className="border-l border-white/70 h-5" />
            <Mail size={17} />
            <a href="mailto:info@payyouadvisory.com">info@payyouadvisory.com</a>
          </div>
          <nav
            aria-label="Quick links"
            className="flex items-center gap-3 text-[12px] md:text-[14px] lg:text-[clamp(0.875rem,0.5668rem+0.361vw,1rem)] max-[1024px]:ml-auto"
          >
            <Link href="/about-us">ABOUT US</Link>
            <span className="border-l border-white/70 h-5" />
            <Link href="/contact-us">CONTACT US</Link>
            <span className="border-l border-white/70 h-5" />
            <Link href="/blog">BLOG</Link>
          </nav>
        </div>
      </div>
      <div className="relative bg-white shadow-[0_4px_13px_rgba(16,25,43,0.09)]">
        <div className="px-[clamp(0rem,-6.625rem+8.2813vw,3.3125rem)] mx-auto flex max-w-(--header-width) items-center gap-8 px-4 py-2 md:py-3 max-[1050px]:gap-4 max-[1024px]:flex-wrap max-[1024px]:justify-center">
          <Link href="/" className="shrink-0 mr-auto">
            <Image
              src="/images/siteLogoHeader.png"
              alt="PayYou Advisory Private Limited"
              width={124}
              height={65}
              priority
              className="h-auto max-sm:max-w-25"
            />
          </Link>
          <button
            className="hidden text-primary max-[1024px]:order-3 max-[1024px]:block"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
          <nav
            aria-label="Main navigation"
            className={`flex flex-1 items-center justify-center gap-7 max-[1050px]:gap-4 max-[1024px]:order-4 max-[1024px]:basis-full max-[1024px]:flex-col max-[1024px]:items-start max-[1024px]:gap-0 max-[1024px]:pb-3 ${menuOpen ? "max-[1024px]:flex" : "max-[1024px]:hidden"}`}
          >
            {navLinks.map(([label, href, hasChevron, isActive]) => (
              <span
                key={label}
                onMouseEnter={label === "LOANS" ? openLoansMenu : undefined}
                className={`flex items-center gap-1.5 pt-[22px] pb-1 text-[12px] md:text-[14px] lg:text-[clamp(0.875rem,0.5668rem+0.361vw,1rem)] font-semibold tracking-wide max-[1024px]:w-full max-[1024px]:border-b max-[1024px]:border-[#eef0f3] max-[1024px]:py-3 max-[1024px]:text-left ${
                  isActive
                    ? "border-b-2 border-primary text-primary"
                    : "border-b-2 border-transparent text-[#364152] hover:text-primary"
                }`}
              >
                {label === "LOANS" ? (
                  <button type="button" onClick={() => setMenuOpen((open) => !open)}>
                    {label}
                  </button>
                ) : (
                  <Link href={href}>{label}</Link>
                )}
                {hasChevron ? <ChevronDown size={15} /> : null}
              </span>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-3 max-[1024px]:ml-0">
            <label className="flex w-[260px] items-center justify-between rounded-full border border-primary bg-white pl-4 py-2 pr-1.5 text-[12px] md:text-[14px] lg:text-[clamp(0.875rem,0.5668rem+0.361vw,1rem)] text-primary max-[1050px]:w-[170px] max-[1024px]:hidden">
              <input
                type="text"
                name="search"
                placeholder="Search"
                className="w-full bg-transparent text-primary placeholder:text-primary focus:outline-none"
              />
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-primary">
                <Search size={18} />
              </span>
            </label>
            <Link
              href="/contact-us"
              className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-[12px] md:text-[14px] lg:text-[clamp(0.875rem,0.5668rem+0.361vw,1rem)] font-bold text-white shadow-[0_6px_12px_rgba(19,75,150,0.23)] transition hover:-translate-y-0.5 hover:bg-[#0e3a75] hover:shadow-[0_8px_16px_rgba(19,75,150,0.3)] max-[480px]:px-3"
            >
              <UserRound size={16} /> APPLY NOW
            </Link>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="absolute top-full flex min-h-[625px] w-full bg-[#e5ebf3] max-[1024px]:static max-[1024px]:min-h-0 max-[1024px]:flex-col">
          <div className="flex basis-[18%] flex-col bg-white">
            {loanMenu.map((item, index) => (
              <Link
                className={`flex items-center justify-between border-b border-[#dce1e7] px-5 py-[18px] text-[15px] font-semibold ${index === 0 ? "bg-[#0e3153] text-white" : "text-[#10192b]"}`}
                href="/contact-us"
                key={item}
              >
                {item}
                <ArrowUpRight size={17} />
              </Link>
            ))}
          </div>
          <div className="grid flex-1 grid-cols-[1.45fr_.95fr] gap-9 px-[3%] pb-[90px] pt-[50px] max-[1024px]:block max-[1024px]:px-[7%] max-[1024px]:py-6">
            <div className="grid grid-cols-2 gap-x-12 gap-y-10 max-[1024px]:block">
              {loanGroups.map(([title, links]) => (
                <div className="mb-6 flex flex-col gap-2.5" key={title}>
                  <h3 className="flex items-center text-lg text-primary">
                    <UserRound size={19} className="mr-2" />
                    {title}
                  </h3>
                  {links.map((link) => (
                    <Link
                      className="text-[15px] text-[#303743]"
                      href="/contact-us"
                      key={link}
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
            <aside className="h-fit rounded-[18px] bg-white p-5 max-[1024px]:hidden">
              <h3 className="mb-7 text-xl">Things to Know</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-1 text-[13px]">
                  <strong>Loan Basics</strong>
                  <span>Types of Loans</span>
                  <span>Secured vs Unsecured Loans</span>
                  <span>Loan Interest Explained</span>
                </div>
                <div className="flex flex-col gap-1 text-[13px]">
                  <strong>Before You Borrow</strong>
                  <span>Loan Eligibility</span>
                  <span>Documents Required</span>
                  <span>Improve Loan Eligibility</span>
                </div>
                <div className="flex flex-col gap-1 text-[13px]">
                  <strong>EMI &amp; Interest</strong>
                  <span>EMI Calculator</span>
                  <span>Reduce Your EMI</span>
                  <span>Loan Balance Transfer</span>
                </div>
                <div className="flex flex-col gap-1 text-[13px]">
                  <strong>Loan Basics</strong>
                  <span>Types of Loans</span>
                  <span>Secured vs Unsecured Loans</span>
                  <span>Loan Interest Explained</span>
                </div>
              </div>
            </aside>
          </div>
          <div className="absolute bottom-0 right-0 flex w-[82%] justify-end gap-5 border-t border-[#c6ced9] px-[3%] py-4 text-[13px] font-bold text-[#b11f24] max-[1024px]:static max-[1024px]:w-full">
            <Link href="/contact-us">GET ASSISTANCE</Link>
            <Link href="/calculators">ELIGIBILITY CALCULATOR</Link>
          </div>
        </div>
      )}
    </header>
  );
}
