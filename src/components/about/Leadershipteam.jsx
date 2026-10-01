"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";

const baseLeaders = [
    {
        role: "Chief Executive Officer",
        name: "Mr. Sashidhar Mishra",
        image: "/images/team/sashidhar-mishra.png",
    },
    {
        role: "Deputy Managing Director",
        name: "Mr. Vivek Bharucha",
        image: "/images/team/vivek-bharucha.png",
    },
    {
        role: "Executive Director",
        name: "Mr. Shrinivas Raghavan",
        image: "/images/team/shrinivas-raghavan.png",
    },
    {
        role: "Group Head",
        name: "Mr. Abhijit Singh",
        image: "/images/team/abhijit-singh.png",
    },
];

// Swiper's loop mode needs more slides than slidesPerView (4 on desktop), so the list is
// repeated once. The dots below still map back to the real people via `realIndex % length`.
const slides = [...baseLeaders, ...baseLeaders].map((leader, index) => ({
    ...leader,
    id: `${leader.name}-${index}`,
}));

const arrowClass =
    "flex size-9 md:size-[42px] shrink-0 cursor-pointer items-center justify-center rounded-full border border-white text-white transition hover:bg-white hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

export default function LeadershipTeam() {
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section
            aria-labelledby="leadership-heading"
            className="secGap bg-primary px-[4%] text-white"
        >
            <div className="mx-auto max-w-(--content-width)">
                <h2
                    id="leadership-heading"
                    className="mb-2.5 text-left md:text-center text-[clamp(1.5rem,1.2794rem+0.9804vw,1.75rem)] md:text-[36px] lg:text-[clamp(2rem,0.4589rem+1.8051vw,2.625rem)] leading-tight"
                >
                    A Leadership Team{" "}
                    <strong className="font-bold">You Can Trust</strong>
                </h2>
                <p className="mx-auto mb-[1.8em] lg:mb-[2em] max-w-[60ch] text-left md:text-center text-[14px] md:text-[16px] lg:text-[clamp(0.9375rem,0.4752rem+0.5415vw,1.125rem)] text-[#F0F5FE]">
                    Our experienced leadership team brings together expertise,
                    integrity, and a shared commitment to guiding every customer
                    toward smarter financial decisions.
                </p>
            </div>

            {/* Wrapper is wider than the content width so the arrows sit outside the cards, as in the design */}
            <div className="relative mx-auto max-w-[calc(var(--content-width)+7rem)] md:px-14">
                <Swiper
                    modules={[Autoplay]}
                    loop
                    spaceBetween={20}
                    slidesPerView={1}
                    slidesPerGroup={1}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    onSwiper={setSwiperInstance}
                    onSlideChange={(swiper) =>
                        setActiveIndex(swiper.realIndex % baseLeaders.length)
                    }
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4, spaceBetween: 32 },
                    }}
                    className="leadership-swiper"
                >
                    {slides.map(({ id, role, name, image }) => (
                        <SwiperSlide key={id} className="h-auto!">
                            <article className="h-full overflow-hidden rounded-xl border border-white/25 bg-white/10 shadow-[0_6px_16px_rgba(0,0,0,0.18)]">
                                <img
                                    src={image}
                                    alt={`${name}, ${role}`}
                                    width={389}
                                    height={245}
                                    loading="lazy"
                                    className="aspect-389/245 w-full object-cover"
                                />
                                <div className="bg-white/10 px-4 py-4 lg:px-5 lg:py-5">
                                    <p className="m-0 text-[12px] md:text-[13px] lg:text-[clamp(0.8125rem,0.5043rem+0.361vw,0.9375rem)] font-medium uppercase tracking-[0.12em] text-white/90">
                                        {role}
                                    </p>
                                    <span
                                        aria-hidden="true"
                                        className="my-3 block h-0.5 w-12 bg-white"
                                    />
                                    <h3 className="m-0 text-[clamp(1.125rem,1.0rem+0.5vw,1.25rem)] lg:text-[clamp(1.25rem,0.8rem+0.6vw,1.5rem)] font-medium leading-snug">
                                        {name}
                                    </h3>
                                </div>
                            </article>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <button
                    type="button"
                    onClick={() => swiperInstance?.slidePrev()}
                    aria-label="Previous leader"
                    className={`${arrowClass} absolute left-0 top-1/2 hidden -translate-y-1/2 md:flex`}
                >
                    <ChevronLeft size={22} />
                </button>
                <button
                    type="button"
                    onClick={() => swiperInstance?.slideNext()}
                    aria-label="Next leader"
                    className={`${arrowClass} absolute right-0 top-1/2 hidden -translate-y-1/2 md:flex`}
                >
                    <ChevronRight size={22} />
                </button>
            </div>

            {/* Dots (one per leader) with prev/next on small screens where the side arrows are hidden */}
            <div className="mt-6 lg:mt-8 flex items-center justify-center gap-4">
                <button
                    type="button"
                    onClick={() => swiperInstance?.slidePrev()}
                    aria-label="Previous leader"
                    className={`${arrowClass} md:hidden`}
                >
                    <ChevronLeft size={18} />
                </button>
                <div className="flex items-center gap-1.5 lg:gap-2">
                    {baseLeaders.map(({ name }, index) => {
                        const isActive = index === activeIndex;
                        return (
                            <button
                                key={name}
                                type="button"
                                onClick={() => swiperInstance?.slideToLoop(index)}
                                aria-label={`Go to ${name}`}
                                aria-current={isActive}
                                className={`h-4 cursor-pointer rounded-full border border-white transition-all duration-300 ${
                                    isActive ? "w-8 bg-white" : "w-4 bg-transparent hover:bg-white/40"
                                }`}
                            />
                        );
                    })}
                </div>
                <button
                    type="button"
                    onClick={() => swiperInstance?.slideNext()}
                    aria-label="Next leader"
                    className={`${arrowClass} md:hidden`}
                >
                    <ChevronRight size={18} />
                </button>
            </div>
        </section>
    );
}
