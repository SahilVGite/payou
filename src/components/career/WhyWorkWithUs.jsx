"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Each card's decorative artwork (top-right) and icon are PNGs in /public/images named after the
// card. `art` sets where the artwork sits and how wide it renders, matching the design.
const reasons = [
    {
        title: "Leading the Industry",
        text: "Partnering with trusted and leading financial institutions nationwide to deliver smarter loan solutions with confidence.",
        icon: "/images/leading_industry_icon.png",
        bg: "/images/leading_industry_bg.png",
        art: "top-3 w-[clamp(6.5rem,4.5rem+3vw,9.5rem)]",
    },
    {
        title: "Industry Pioneers",
        text: "Partnering with forward-thinking financial institutions to shape smarter lending solutions.",
        icon: "/images/industry_pioneers_icon.png",
        bg: "/images/industry_pioneers_bg.png",
        art: "top-0 w-[clamp(7rem,4.75rem+3.4vw,10.75rem)]",
    },
    {
        title: "Entrepreneurial Culture",
        text: "A culture that encourages ownership, innovation, collaboration, and meaningful growth.",
        icon: "/images/entrepreneurial_culture_icon.png",
        bg: "/images/entrepreneurial_culture_bg.png",
        art: "top-2.5 w-[clamp(6.5rem,4.5rem+3.1vw,9.7rem)]",
    },
    {
        title: "Innovation-Led Approach",
        text: "Creating smarter financial experiences through fresh ideas, digital solutions, and continuous improvement.",
        icon: "/images/innovation_led_approach_icon.png",
        bg: "/images/innovation_led_approach_bg.png",
        art: "top-2 w-[clamp(6.25rem,4.3rem+2.9vw,9.2rem)]",
    },
];

// Swiper's loop mode needs more slides than 4 once 2 are in view, so the slider runs over the
// cards twice; the dots still map back to the 4 real cards.
const sliderReasons = [...reasons, ...reasons].map((reason, index) => ({ ...reason, slideKey: `${reason.title}-${index}` }));

function ReasonCard({ title, text, icon, bg, art, className = "" }) {
    return (
        <div
            className={`relative overflow-hidden rounded-[18px] bg-primary p-5 text-white shadow-[1px_1px_21px_rgba(0,0,0,0.4)] lg:min-h-[clamp(12rem,8rem+6.2vw,13.75rem)] ${className}`}
        >
            <img
                src={bg}
                alt=""
                aria-hidden="true"
                className={`pointer-events-none absolute right-0 h-auto max-w-[45%] ${art}`}
            />
            <span className="bg-glass-effect relative flex size-[clamp(3.25rem,2.6rem+1vw,3.625rem)] items-center justify-center rounded-full bg-white/5 shadow-[inset_0_1px_10px_rgba(255,255,255,0.12),0_4px_10px_rgba(8,24,56,0.25)]">
                <img src={icon} alt="" aria-hidden="true" width={48} height={48} className="size-[60%]" />
            </span>
            <h3 className="relative mt-4 text-[17px] md:text-[19px] lg:text-[clamp(1.125rem,0.8168rem+0.361vw,1.375rem)] font-semibold leading-snug">
                {title}
            </h3>
            <p className="relative mt-2.5 text-[13px] md:text-[14px] lg:text-[clamp(0.875rem,0.6438rem+0.2708vw,1.0625rem)] leading-[1.47] text-white/95">
                {text}
            </p>
        </div>
    );
}

// Heading + intro on the left; a 2×2 grid of blue cards (55.5% of the wrapper) on the right.
// < lg the cards drop below the intro and become a looping, auto-advancing slider with dots
// (1 card on phones, 2 from md), same as OurOfficesCards.
export default function WhyWorkWithUs() {
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="secGap px-[4%]">
            <div className="mx-auto grid max-w-(--content-width) gap-8 lg:grid-cols-[1fr_55.5%] lg:items-start lg:gap-[clamp(2rem,-0.5rem+3.9vw,3rem)]">
                <div>
                    <h2 className="mb-2.5 text-[clamp(1.5rem,1.2794rem+0.9804vw,1.75rem)] md:text-[36px] lg:text-[clamp(2rem,0.4589rem+1.8051vw,2.625rem)] leading-tight text-ink">
                        Why Should You Work
                        <br />
                        <strong className="font-bold text-primary">With PayYouAdvisory</strong>
                    </h2>
                    <p className="m-0 max-w-[32em] text-[clamp(0.875rem,0.6544rem+0.9804vw,1.125rem)] md:text-[18px] lg:text-[clamp(1rem,0.3836rem+0.722vw,1.25rem)] leading-[1.45] text-[#4B5563]">
                        Join PayYouAdvisory to grow your career, make a meaningful impact, and shape smarter financial
                        experiences.
                    </p>
                </div>

                <ul className="hidden lg:grid grid-cols-2 gap-x-[clamp(1rem,0.4rem+0.9vw,1.5625rem)] gap-y-[clamp(1rem,0.4rem+0.9vw,1.625rem)]">
                    {reasons.map((reason) => (
                        <li key={reason.title}>
                            <ReasonCard {...reason} className="h-full" />
                        </li>
                    ))}
                </ul>

                <div className="min-w-0 lg:hidden">
                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{ delay: 6000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                        spaceBetween={20}
                        slidesPerView={1}
                        slidesPerGroup={1}
                        loop
                        onSwiper={setSwiperInstance}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex % reasons.length)}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                        }}
                        className="pb-2!"
                    >
                        {sliderReasons.map((reason) => (
                            <SwiperSlide key={reason.slideKey} className="h-auto! pb-[1em]">
                                <ReasonCard {...reason} className="h-full" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="flex items-center justify-center gap-1.5 md:gap-2">
                        {reasons.map((reason, index) => (
                            <button
                                key={reason.title}
                                type="button"
                                onClick={() => swiperInstance?.slideToLoop(index)}
                                aria-label={`Go to ${reason.title}`}
                                aria-current={activeIndex === index ? "true" : undefined}
                                className={`h-2.5 md:h-4 rounded-full border border-primary transition-all duration-300 cursor-pointer ${
                                    activeIndex === index ? "w-5 md:w-8 bg-primary" : "w-2.5 md:w-4 bg-transparent"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
