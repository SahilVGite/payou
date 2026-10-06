"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useRef, useState } from "react";
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
import { calculatorPages } from "../../data/calculators";
import Collapse from "../common/Collapse";
import PopupLink from "../popup/PopupLink";
import { pageNameFromPath, trackEvent } from "../../lib/analytics";
// Shared between the desktop hover overlay and the mobile accordion panel so the two
// don't drift apart — only how each one is positioned/animated differs. Split into a
// scrollable "body" and a separate "footer bar" (rather than one block with the footer
// bar absolutely bottom-pinned inside the scrollable area) because the absolute version
// let scrolled content render underneath/behind the footer bar and visually overlap it on
// shorter desktop viewports — a normal flex-column stack can't overlap by construction.
function LoansMegaMenuBody() {
  return (
    <>
      <div className="flex basis-[18%] flex-col bg-white max-[1024px]:basis-auto">
        {/* Not clickable for now — mega menu links are placeholders until their pages exist. */}
        {loanMenu.map((item, index) => (
          <span
            className={`flex items-center justify-between border-b border-[#dce1e7] px-5 py-[18px] text-[15px] font-semibold ${index === 0 ? "bg-[#0e3153] text-white" : "text-[#10192b]"}`}
            key={item}
          >
            {item}
            <ArrowUpRight size={17} />
          </span>
        ))}
      </div>
      <div className="grid flex-1 grid-cols-[1.45fr_.95fr] gap-9 px-[3%] py-[50px] max-[1024px]:block max-[1024px]:px-[7%] max-[1024px]:py-6">
        <div className="grid grid-cols-2 gap-x-12 gap-y-10 max-[1024px]:block">
          {loanGroups.map(([title, links]) => (
            <div className="mb-6 flex flex-col gap-2.5" key={title}>
              <h3 className="flex items-center text-lg text-primary">
                <UserRound size={19} className="mr-2" />
                {title}
              </h3>
              {links.map((link) => (
                <span className="text-[15px] text-[#303743]" key={link}>
                  {link}
                </span>
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
    </>
  );
}

function LoansMegaMenuFooterBar() {
  return (
    <div className="flex shrink-0 justify-end gap-5 border-t border-[#c6ced9] bg-[#e5ebf3] px-[3%] py-4 text-[13px] font-bold text-[#b11f24] max-[1024px]:w-full">
      <span>GET ASSISTANCE</span>
      <span>ELIGIBILITY CALCULATOR</span>
    </div>
  );
}

// [label, href, hasChevron] — only Home and Contact Us are real pages for now; every other
// label keeps its text but points at "/" until its page exists, rather than 404ing.
const navLinks = [
  // ["LOANS", "/contact-us", true],
  // ["SERVICES", "/", true],
  // ["CALCULATORS", "/", true],
  // ["ABOUT US", "/", false],
  ["HOME", "/", false],
  ["CALCULATORS", "/calculator", true],
  ["ABOUT US", "/about-us", false],
  ["CONTACT US", "/contact-us", false],
  ["BLOG", "/blog", false],
  // ["BLOG", "/", false],
];

// Active state is derived from the current route rather than hardcoded per link: LOANS
// never gets it (it's a dropdown trigger, not a page of its own, even though it shares
// Contact Us's placeholder href), and the "/" placeholder links (Services, Calculators,
// About Us, Blog) never do either since they're not real pages yet — only Contact Us has
// a real, distinct route to match against. That also means Home has no active link at all.
function isNavLinkActive(label, href, pathname) {
  if (label === "LOANS" || href === "/") return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}

// CALCULATORS is a dropdown trigger, not a link — its sub-items open each calculator page
// (/calculator/<slug>, the same pages its tabs link to). It only shows as active while one of
// those pages is open.
const calculatorSubmenu = calculatorPages.map(({ label, slug }) => ({ label, href: `/calculator/${slug}` }));
const isSubmenuItemActive = (href, pathname) =>
  pathname === href || (href === calculatorSubmenu[0].href && pathname === "/calculator");

// Desktop nav switches from click-to-open to hover-to-open above this width; matches the
// header's own max-[1024px] mobile breakpoint (mobile/touch keeps click via the hamburger).
const isDesktopViewport = () =>
  typeof window !== "undefined" && window.matchMedia("(min-width: 1025px)").matches;

// Mobile hamburger menu lives at max-[1024px], same breakpoint the header markup itself uses.
const isMobileMenuViewport = () =>
  typeof window !== "undefined" && window.matchMedia("(max-width: 1024px)").matches;

export default function Header() {
  const pathname = usePathname();
  // Separate from loansMenuOpen on purpose: they used to share one flag, which meant
  // clicking "LOANS" on mobile (to expand its accordion) also toggled the whole hamburger
  // panel closed, since both were driven by the same state.
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [loansMenuOpen, setLoansMenuOpen] = useState(false);
  const [mobileCalcOpen, setMobileCalcOpen] = useState(false);
  // Desktop CALCULATORS dropdown: opened by hover/focus, but driven by state (not CSS :hover /
  // :focus-within) so clicking an item can close it even while the pointer is still over it.
  const [calcMenuOpen, setCalcMenuOpen] = useState(false);
  const closeCalcMenu = () => {
    setCalcMenuOpen(false);
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
  };
  const [desktopMenuMaxHeight, setDesktopMenuMaxHeight] = useState(null);
  const menuRef = useRef(null);
  const scrollAreaRef = useRef(null);

  const toggleHamburger = () => {
    setHamburgerOpen((open) => {
      const next = !open;
      if (!next) setLoansMenuOpen(false);
      return next;
    });
  };
  const closeHamburger = () => {
    setHamburgerOpen(false);
    setLoansMenuOpen(false);
  };

  // Any link clicked inside the header (nav items, the loans menu, logo, APPLY NOW) closes
  // the mobile hamburger panel. Done on click rather than on pathname change so it also
  // closes when the link points at the page the visitor is already on, or opens a popup
  // instead of navigating.
  const closeMenusOnLinkClick = (event) => {
    if (!event.target.closest("a")) return;
    setHamburgerOpen(false);
    setLoansMenuOpen(false);
  };

  const openLoansMenu = () => {
    if (isDesktopViewport()) setLoansMenuOpen(true);
  };

  const closeLoansMenuOnLeave = () => {
    if (isDesktopViewport()) setLoansMenuOpen(false);
  };

  // The desktop mega menu is an absolutely-positioned overlay with a fixed min-height,
  // so on shorter desktop windows it can extend past the bottom of the viewport with no
  // way to reach the rest — scrolling the page just scrolls content behind the (visually
  // pinned, since it hangs off the sticky header) menu instead of the menu itself. Give it
  // its own scrollable max-height, computed from where it actually starts on screen, so
  // taller-than-viewport content becomes reachable inside the menu instead.
  useEffect(() => {
    if (!loansMenuOpen || !isDesktopViewport()) {
      setDesktopMenuMaxHeight(null);
      return undefined;
    }

    function updateMaxHeight() {
      const el = menuRef.current;
      if (!el || !isDesktopViewport()) {
        setDesktopMenuMaxHeight(null);
        return;
      }
      const top = el.getBoundingClientRect().top;
      setDesktopMenuMaxHeight(Math.max(window.innerHeight - top, 200));
    }

    updateMaxHeight();
    window.addEventListener("resize", updateMaxHeight);
    return () => window.removeEventListener("resize", updateMaxHeight);
  }, [loansMenuOpen]);

  // Native wheel-to-scroll-chaining doesn't reliably reach this menu (it's an absolutely
  // positioned overlay, not a normal in-flow scroll ancestor), so the browser keeps
  // scrolling the page behind it instead of the menu's own overflow — even though the menu
  // element is genuinely scrollable (confirmed: setting its scrollTop directly works fine).
  // Driving the scroll manually from a non-passive wheel listener sidesteps that ambiguity
  // entirely, the same approach used for the hero's scroll-jack.
  useEffect(() => {
    if (!loansMenuOpen || !isDesktopViewport()) return undefined;
    const el = scrollAreaRef.current;
    if (!el) return undefined;

    function handleWheel(event) {
      if (el.scrollHeight <= el.clientHeight) return;
      event.preventDefault();
      el.scrollTop += event.deltaY;
    }

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [loansMenuOpen]);

  useEffect(() => {
    if (!hamburgerOpen || !isMobileMenuViewport()) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setHamburgerOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [hamburgerOpen]);

  return (
    <header
      className="sticky top-0 z-999999999 font-poppins"
      onMouseLeave={closeLoansMenuOnLeave}
      onClick={closeMenusOnLinkClick}
    >
      <div className="bg-primary font-nunito font-bold text-white">
        <div className="mx-auto flex min-h-9 max-w-(--header-width) items-center justify-between px-2 md:px-4">
        {/* <div className="mx-auto flex min-h-9 max-w-(--header-width) items-center justify-between px-4"> */}
          <div className="flex items-center font-semibold gap-1 md:gap-3 text-[clamp(0.5625rem,0.3839rem+0.8929vw,0.8125rem)] md:text-[13px] lg:text-[clamp(0.75rem,0.4418rem+0.361vw,0.875rem)]">
          {/* <div className="flex items-center font-semibold gap-3 text-[clamp(0.5625rem,0.3839rem+0.8929vw,0.8125rem)] md:text-[13px] lg:text-[clamp(0.75rem,0.4418rem+0.361vw,0.875rem)] max-[1024px]:hidden"> */}
            <Phone size={17} />
            <span>
              <a href="tel:02027350055" onClick={() => trackEvent("click_to_call", { page: pageNameFromPath(pathname), section: "Header", button: "020 2735 0055" })}>020 2735 0055 / </a>
              <a href="tel:+919175535507" onClick={() => trackEvent("click_to_call", { page: pageNameFromPath(pathname), section: "Header", button: "+91 9175535507" })}> + 91 9175535507</a>
            </span>
            <span className="border-l border-white/70 h-5" />
            <Mail size={17} />
            <a href="mailto:info@payyouadvisory.com">info@payyouadvisory.com</a>
          </div>
          <nav
            aria-label="Quick links"
            className="flex items-center font-semibold gap-5 text-[clamp(0.625rem,0.4464rem+0.8929vw,0.875rem)] md:text-[14px] lg:text-[clamp(0.75rem,0.1336rem+0.722vw,1rem)] max-[1024px]:ml-auto"
          >
            {/* <Link href="/">ABOUT US</Link>
            <span className="border-l border-white/70 h-5" /> */}
            {/* <Link href="/contact-us">CONTACT US</Link> */}
            {/* <span className="border-l border-white/70 h-5" />
            <Link href="/">BLOG</Link> */}
          </nav>
        </div>
      </div>
      <div className="relative bg-white shadow-[0_4px_13px_rgba(16,25,43,0.09)] px-4">
        <div className="mx-auto flex max-w-(--header-width) items-center gap-8 py-2 md:py-3 max-[1050px]:gap-4 max-[1024px]:flex-wrap max-[1024px]:justify-center">
          <Link href="/" className="shrink-0 mr-auto">
            <Image
              src="/images/siteLogoHeader.png"
              alt="PayYou Advisory Private Limited"
              width={124}
              height={65}
              priority
              className="h-auto max-lg:max-w-20 max-w-[clamp(5.625rem,0.3854rem+6.1372vw,7.75rem)]"
            />
          </Link>
          <button
            className="hidden text-primary max-[1024px]:order-3 max-[1024px]:block"
            type="button"
            onClick={toggleHamburger}
            aria-expanded={hamburgerOpen}
            aria-controls="mobile-menu"
            aria-label="Open navigation menu"
          >
            <Menu size={25} />
          </button>
          <nav
            aria-label="Main navigation"
            className="flex flex-1 items-center justify-center gap-[clamp(2.5rem,-0.5rem+3.75vw,4rem)] max-[1050px]:gap-4 max-[1024px]:hidden"
          >
            {navLinks.map(([label, href, hasChevron], index) => {
              const isActive = isNavLinkActive(label, href, pathname);
              return (
                <Fragment key={label}>
                <span
                  // Mega menu temporarily disabled — do not open on desktop hover for now.
                  // onMouseEnter={label === "LOANS" ? openLoansMenu : undefined}
                  className={`relative flex items-center [@media(max-width:1023px)]:justify-between gap-1.5 py-1 text-[12px] md:text-[14px] lg:text-[clamp(0.6875rem,0.0625rem+0.7813vw,1rem)] font-semibold tracking-wide max-[1024px]:w-full max-[1024px]:border-b max-[1024px]:border-[#eef0f3] max-[1024px]:py-3 max-[1024px]:text-left ${
                    index > 0
                      ? "before:content-[''] before:absolute before:-left-[clamp(1.25rem,-0.25rem+1.875vw,2rem)] before:top-1/2 before:h-[15px] before:w-px before:-translate-y-1/2 before:bg-[#BFCFE6] max-[1050px]:before:-left-2 max-[1024px]:before:hidden"
                      : ""
                  } ${
                    isActive
                      ? "border-b-2 border-primary text-primary"
                      : "border-b-2 border-transparent text-[#364152] hover:text-primary"
                  }`}
                >
                  {label === "CALCULATORS" ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setCalcMenuOpen(true)}
                      onMouseLeave={() => setCalcMenuOpen(false)}
                      onFocus={() => setCalcMenuOpen(true)}
                      onBlur={(event) => {
                        if (!event.currentTarget.contains(event.relatedTarget)) setCalcMenuOpen(false);
                      }}
                      onKeyDown={(event) => {
                        if (event.key === "Escape") closeCalcMenu();
                      }}
                    >
                      <button
                        type="button"
                        aria-haspopup="true"
                        aria-expanded={calcMenuOpen}
                        onClick={() => setCalcMenuOpen((open) => !open)}
                        className="flex items-center gap-1.5 cursor-default"
                      >
                        {label}
                        <ChevronDown size={18} className={`transition-transform duration-200 ${calcMenuOpen ? "rotate-180" : ""}`} />
                      </button>
                      {/* pt-4 bridges the gap so the menu stays open while the pointer moves down to it */}
                      <div
                        className={`absolute left-1/2 top-full z-20 -translate-x-1/2 pt-4 transition duration-200 ${
                          calcMenuOpen ? "visible opacity-100" : "invisible opacity-0"
                        }`}
                      >
                        <ul className="min-w-[17.5rem] rounded-xl border border-[#e3e8ef] bg-white p-2 shadow-[0_14px_34px_rgba(16,25,43,0.16)]">
                          {calculatorSubmenu.map((item) => {
                            const itemActive = isSubmenuItemActive(item.href, pathname);
                            return (
                              <li key={item.href}>
                                <Link
                                  href={item.href}
                                  onClick={closeCalcMenu}
                                  aria-current={itemActive ? "page" : undefined}
                                  className={`block rounded-lg px-4 py-2.5 text-[14px] font-medium normal-case tracking-normal transition ${
                                    itemActive ? "bg-primary/10 text-primary" : "text-[#364152] hover:bg-primary/5 hover:text-primary"
                                  }`}
                                >
                                  {item.label}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  ) : label === "LOANS" ? (
                    <button
                      type="button"
                      // Mega menu temporarily disabled — do not open on click for now
                      // (this is also mobile's only trigger, since it has no hover).
                      // onClick={() => setLoansMenuOpen((open) => !open)}
                      className="flex w-full items-center justify-between gap-1.5"
                    >
                      {label}
                      {hasChevron ? (
                        <ChevronDown
                          size={22}
                          className={`transition-transform duration-200 ${loansMenuOpen ? "max-[1024px]:rotate-180" : ""}`}
                        />
                      ) : null}
                    </button>
                  ) : (
                    <>
                      <Link href={href}>{label}</Link>
                      {hasChevron ? <ChevronDown size={22} /> : null}
                    </>
                  )}
                </span>
                {label === "LOANS" ? (
                  <div className="hidden w-full max-[1024px]:block">
                    <Collapse open={loansMenuOpen}>
                      <div className="flex min-h-[625px] w-full flex-col bg-[#e5ebf3]">
                        <LoansMegaMenuBody />
                        <LoansMegaMenuFooterBar />
                      </div>
                    </Collapse>
                  </div>
                ) : null}
              </Fragment>
              );
            })}
          </nav>
          <div className="ml-auto flex items-center gap-3 max-[1024px]:ml-0">
            {/* <label className="flex w-[16.25em] items-center justify-between rounded-full border border-primary bg-white pl-4 py-[0.5em] pr-1.5 text-[12px] md:text-[14px] lg:text-[clamp(0.875rem,0.5668rem+0.361vw,1rem)] text-primary max-[1050px]:w-[170px] max-[1024px]:hidden">
              <input
                type="text"
                name="search"
                placeholder="Search"
                className="w-full bg-transparent text-primary placeholder:text-primary focus:outline-none"
              />
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-primary">
                <Search size={18} />
              </span>
            </label> */}
            <PopupLink
              href="/contact-us"
              source={{ page: pageNameFromPath(pathname), section: "Header", button: "APPLY NOW" }}
              onClick={() => trackEvent("apply_now_click", { page: pageNameFromPath(pathname), section: "Header", button: "APPLY NOW" })}
              className="flex items-center gap-2 rounded-full bg-primary px-[1.5em] py-[0.75em] text-[clamp(0.625rem,0.4464rem+0.8929vw,0.875rem)] md:text-[14px] lg:text-[clamp(0.875rem,0.5668rem+0.361vw,1rem)] font-semibold text-white shadow-[0_6px_12px_rgba(19,75,150,0.23)] transition hover:-translate-y-0.5 hover:bg-[#0e3a75] hover:shadow-[0_8px_16px_rgba(19,75,150,0.3)] max-[480px]:px-3"
            >
              <UserRound size={16} /> APPLY NOW
            </PopupLink>
          </div>
        </div>
      </div>
      {/* Mobile menu: full-height drawer (up to 550px wide) that slides in from the right over a
          dimmed backdrop and slides back out to the right on close. Always rendered so both
          directions animate; `inert` keeps it out of tab order / screen readers while closed. */}
      <div className="min-[1025px]:hidden">
        <div
          aria-hidden="true"
          onClick={closeHamburger}
          className={`fixed inset-0 z-40 bg-[#10192b]/50 backdrop-blur-[2px] transition-opacity duration-300 ${
            hamburgerOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        />
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          inert={!hamburgerOpen}
          className={`fixed inset-y-0 right-0 z-50 flex h-dvh w-full max-w-[550px] flex-col bg-white shadow-[-12px_0_40px_rgba(16,25,43,0.25)] transition-transform duration-300 ease-out ${
            hamburgerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-[#eef0f3] px-5 py-3">
            <Link href="/" className="shrink-0">
              <Image src="/images/siteLogoHeader.png" alt="PayYou Advisory Private Limited" width={124} height={65} className="h-auto w-20" />
            </Link>
            <button
              type="button"
              onClick={closeHamburger}
              aria-label="Close navigation menu"
              className="flex size-10 items-center justify-center rounded-full text-primary transition hover:bg-primary/10"
            >
              <X size={26} />
            </button>
          </div>

          <nav aria-label="Mobile navigation" className="flex-1 overflow-y-auto px-5 py-2">
            <ul>
              {navLinks.map(([label, href]) => {
                const isActive = isNavLinkActive(label, href, pathname);
                const rowClass = `flex w-full items-center justify-between border-b border-[#eef0f3] py-4 text-[15px] font-semibold tracking-wide ${
                  isActive ? "text-primary" : "text-[#364152]"
                }`;
                if (label === "CALCULATORS") {
                  return (
                    <li key={label}>
                      <button
                        type="button"
                        onClick={() => setMobileCalcOpen((open) => !open)}
                        aria-expanded={mobileCalcOpen}
                        className={rowClass}
                      >
                        {label}
                        <ChevronDown size={20} className={`transition-transform duration-200 ${mobileCalcOpen ? "rotate-180" : ""}`} />
                      </button>
                      <Collapse open={mobileCalcOpen}>
                        <ul className="border-b border-[#eef0f3] py-2 pl-3">
                          {calculatorSubmenu.map((item) => {
                            const itemActive = isSubmenuItemActive(item.href, pathname);
                            return (
                              <li key={item.href}>
                                <Link
                                  href={item.href}
                                  aria-current={itemActive ? "page" : undefined}
                                  className={`block rounded-lg px-3 py-2.5 text-[14px] font-medium ${
                                    itemActive ? "bg-primary/10 text-primary" : "text-[#364152]"
                                  }`}
                                >
                                  {item.label}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </Collapse>
                    </li>
                  );
                }
                return (
                  <li key={label}>
                    <Link href={href} className={rowClass}>
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="border-t border-[#eef0f3] px-5 py-5">
            <PopupLink
              href="/contact-us"
              source={{ page: pageNameFromPath(pathname), section: "Header – Mobile Menu", button: "APPLY NOW" }}
              onClick={() => trackEvent("apply_now_click", { page: pageNameFromPath(pathname), section: "Header – Mobile Menu", button: "APPLY NOW" })}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3 text-[14px] font-semibold text-white"
            >
              <UserRound size={16} /> APPLY NOW
            </PopupLink>
            <div className="mt-4 flex flex-col gap-2 text-[13px] text-[#4B5563]">
              <a href="tel:02027350055" className="flex items-center gap-2">
                <Phone size={15} className="text-primary" /> 020 2735 0055 / +91 9175535507
              </a>
              <a href="mailto:info@payyouadvisory.com" className="flex items-center gap-2">
                <Mail size={15} className="text-primary" /> info@payyouadvisory.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop hover overlay only — mobile has its own accordion panel rendered
          inline right after the LOANS nav item, further up. The scrollable body and the
          footer bar are separate flex-column rows (not one block with the footer bar
          absolutely bottom-pinned over the scroll area) so the footer bar always has its
          own reserved space and scrolled content can never render underneath/behind it. */}
      {loansMenuOpen && (
        <div
          ref={menuRef}
          className="absolute top-full hidden min-h-[625px] w-full flex-col bg-[#e5ebf3] lg:flex"
          style={
            desktopMenuMaxHeight
              ? { maxHeight: `${desktopMenuMaxHeight}px`, minHeight: 0 }
              : undefined
          }
        >
          <div ref={scrollAreaRef} className="flex min-h-0 flex-1 overflow-y-auto">
            <LoansMegaMenuBody />
          </div>
          <LoansMegaMenuFooterBar />
        </div>
      )}
    </header>
  );
}
