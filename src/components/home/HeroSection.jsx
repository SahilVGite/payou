"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { Handshake, ShieldCheck, Timer, Users } from "lucide-react";
import Select from "../common/Select";
import { useEditableNumber } from "../../hooks/useEditableNumber";

const stats = [
    [Handshake, "25+", "Leading Partners"],
    [ShieldCheck, "100%", "Customer Satisfaction"],
    [Timer, "5", "Years of Experience"],
    [Users, "100+", "Loan Processed"],
];

const incomeTicks = ["1L", "2L", "3L", "4L", "5L", "6L"];

export default function HeroSection() {
    const incomeField = useEditableNumber(200000, {
        min: 100000,
        max: 600000,
        format: (value) => value.toLocaleString("en-IN"),
    });
    const income = incomeField.value;
    const statsRef = useRef(null);

    // Repeatable scroll hijack: the moment the visitor makes a downward scroll gesture
    // (wheel, trackpad, touch swipe, or keyboard) while still above the stats row, we
    // preempt it with preventDefault and drive a smooth scroll straight to the stats row
    // ourselves. Intercepting the raw input — rather than reacting to a "scroll" event
    // after the browser has already started scrolling — matters because once native
    // scrolling is underway, further wheel/touch input keeps overriding a `scrollTo`
    // fired from a "scroll" listener, so the jump would get instantly cancelled and look
    // like nothing happened. Stays armed for the page's whole lifetime: scroll back above
    // the stats row and scroll down again, and it jumps again. The "isAnimating" guard is
    // reset by a timer (not just once the animation naturally ends) so continuing to
    // scroll during the jump can't leave it stuck.
    useEffect(() => {
        let isAnimating = false;
        let resetTimer = null;

        function computeTargetY() {
            const statsEl = statsRef.current;
            if (!statsEl) return null;
            return Math.max(statsEl.getBoundingClientRect().top + window.scrollY, 0);
        }

        function jumpTo(targetY, prefersReducedMotion) {
            isAnimating = true;
            window.scrollTo({
                top: targetY,
                behavior: prefersReducedMotion ? "auto" : "smooth",
            });
            clearTimeout(resetTimer);
            resetTimer = setTimeout(
                () => {
                    isAnimating = false;
                },
                prefersReducedMotion ? 0 : 800,
            );
        }

        // Returns true (and performs the jump) only for a genuine downward gesture that's
        // still short of the target; otherwise leaves the page alone. Desktop-only (>=1024px)
        // — on tablet/mobile the hero and stats already stack in normal document flow, so
        // hijacking the scroll there isn't wanted.
        function tryJump(isScrollingDown) {
            if (isAnimating || !isScrollingDown) return false;
            if (!window.matchMedia("(min-width: 1024px)").matches) return false;
            const targetY = computeTargetY();
            if (targetY === null || window.scrollY >= targetY) return false;
            const prefersReducedMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)",
            ).matches;
            jumpTo(targetY, prefersReducedMotion);
            return true;
        }

        function handleWheel(event) {
            // Respect anything that already claimed this event (e.g. scrolling inside the
            // header's mega menu) — this listener is on window, so it still sees the event
            // after that, and would otherwise yank the page down regardless.
            if (event.defaultPrevented) return;
            if (tryJump(event.deltaY > 0)) event.preventDefault();
        }

        let touchStartY = null;
        function handleTouchStart(event) {
            touchStartY = event.touches[0]?.clientY ?? null;
        }
        function handleTouchMove(event) {
            if (touchStartY === null) return;
            const currentY = event.touches[0]?.clientY ?? touchStartY;
            if (tryJump(touchStartY - currentY > 5)) event.preventDefault();
        }

        const SCROLL_DOWN_KEYS = new Set(["ArrowDown", "PageDown", " ", "Spacebar"]);
        function handleKeyDown(event) {
            if (!SCROLL_DOWN_KEYS.has(event.key)) return;
            const target = event.target;
            const isFormField =
                target instanceof HTMLElement &&
                ["INPUT", "TEXTAREA", "SELECT", "BUTTON"].includes(target.tagName);
            if (isFormField) return;
            if (tryJump(true)) event.preventDefault();
        }

        window.addEventListener("wheel", handleWheel, { passive: false });
        window.addEventListener("touchstart", handleTouchStart, { passive: true });
        window.addEventListener("touchmove", handleTouchMove, { passive: false });
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            clearTimeout(resetTimer);
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <section className="relative bg-[radial-gradient(19.33%_167.96%_at_50%_50%,rgba(255,255,255,0.25)_0%,rgba(19,75,150,0.25)_180%)]">
            <div className="relative min-h-[80dvh] secGap [@media(min-width:1366px)]:!pt-[clamp(1.25rem,-3.75rem+6.25vw,3.75rem)] flex flex-col justify-center bg-white">
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
                            Compare, Apply &amp; Get Fast{" "}
                            <br className="[@media(max-width:1024px)]:hidden" />
                            Loan Disbursal with India&apos;s{" "}
                            <br className="[@media(max-width:1024px)]:hidden" />
                            <strong className="font-bold text-accent">
                                Trusted DSA Partner
                            </strong>
                        </h1>
                        <p className="my-[1em] md:my-[1.3333em] text-[14px] md:text-[16px] lg:text-[clamp(0.9375rem,0.4752rem+0.5415vw,1.125rem)] leading-relaxed text-white lg:text-ink max-[800px]:text-[15px]">
                            PayYouAdvisory is an authorized partner for
                            <br className="[@media(max-width:1024px)]:hidden" /> 50+
                            RBI-regulated banks &amp; NBFCs, offering
                            <br className="[@media(max-width:1024px)]:hidden" /> competitive
                            rates from 8.30% p.a.
                        </p>
                        <div className="flex gap-2 md:gap-4.5 max-[480px]:flex-col">
                            <Link
                                href="/contact-us"
                                className="rounded-full bg-[#b11f24] px-[3em] py-[0.8em] text-center text-[12px] md:text-[14px] lg:text-[clamp(0.8125rem,0.5043rem+0.361vw,0.9375rem)] font-semibold text-white shadow-[0_5px_10px_rgba(177,31,36,0.25)] transition hover:-translate-y-0.5 hover:bg-[#961a1e] hover:shadow-[0_8px_16px_rgba(177,31,36,0.32)]"
                            >
                                Check Eligibility
                            </Link>
                            <Link
                                href="/contact-us"
                                className="rounded-full bg-[#134b96] px-[1.7333em] py-[0.8em] text-center text-[12px] md:text-[14px] lg:text-[clamp(0.8125rem,0.5043rem+0.361vw,0.9375rem)] font-semibold text-white shadow-[0_5px_10px_rgba(19,75,150,0.23)] transition hover:-translate-y-0.5 hover:bg-[#0e3a75] hover:shadow-[0_8px_16px_rgba(19,75,150,0.3)]"
                            >
                                Speak to an Advisor
                            </Link>
                        </div>
                    </div>
                    <form
                        className="bg-glass-effect flex basis-[35%] flex-col gap-[17px] rounded-[19px] bg-primary/20 backdrop-blur-lg p-[22px] text-white max-[1023px]:w-full"
                        action="mailto:info@payyouadvisory.com"
                        method="post"
                        encType="text/plain"
                    >
                        <h2 className="m-0 text-[18px] md:text-[22px] lg:text-[clamp(1.25rem,0.6336rem+0.722vw,1.5rem)] font-bold text-white">
                            Instant Loan Eligibility Check
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
                        <label className="text-[12px] md:text-[14px] lg:text-[clamp(0.875rem,0.5668rem+0.361vw,1rem)] font-medium text-[#EEE8E8]]">
                            Mobile Number
                            <input
                                className="mt-2.5 block w-full rounded-full border-0 bg-white/90 px-[18px] py-[13px] text-ink placeholder:text-[#4B5563] focus:ring-0 focus:outline-none"
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
                        <p className="m-0 text-[12px] md:text-[14px] lg:text-[clamp(0.875rem,0.5668rem+0.361vw,1rem)] font-medium text-[#DADADA]">
                            We charge zero processing fees and keep your credit score safe. No hidden charges.
                        </p>
                    </form>
                </div>
            </div>
            <div
                ref={statsRef}
                className="[@media(max-width:1023px)]:py-(--sec-gap) px-[4%] lg:absolute lg:-bottom-[clamp(2rem,-1.8321rem+3.6101vw,2.5rem)] lg:inset-x-0 z-10 mx-auto grid max-w-[clamp(62.5rem,37.843rem+28.8809vw,72.5rem)] grid-cols-4 gap-5 max-[1024px]:grid-cols-2"
            >
                {stats.map(([Icon, value, label]) => (
                    <div
                        key={label}
                        className="bg-glass-effect text-center flex items-center justify-center gap-4 rounded-xl bg-primary/08 lg:bg-white/55 backdrop-blur-lg px-2 md:px-[clamp(0.625rem,-0.2996rem+1.083vw,1rem)] py-3 md:py-[clamp(0.625rem,-0.9161rem+1.8051vw,1.25rem)] shadow-[2px_2px_4px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(16,25,43,0.18)]"
                    >
                        <div>
                            <p className="m-0 text-[clamp(1.375rem,1.2857rem+0.4464vw,1.5rem)] md:text-[30px] lg:text-[clamp(1.375rem,-0.7825rem+2.5271vw,2.25rem)] font-semibold text-ink leading-[1.2]">
                                {value}
                            </p>
                            <p className="m-0 text-[clamp(0.5625rem,0.3839rem+0.8929vw,0.8125rem)] md:text-[13px] lg:text-[clamp(0.625rem,0.0086rem+0.722vw,0.875rem)] uppercase tracking-wider text-[#4B5563]">
                                {label}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
