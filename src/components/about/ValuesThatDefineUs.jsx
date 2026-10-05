"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CustomerFocusIcon from "../../../public/icons/CustomerFocusIcon";
import OperationalExcellenceIcon from "../../../public/icons/OperationalExcellenceIcon";
import ProductLeadershipIcon from "../../../public/icons/ProductLeadershipIcon";
import SustainabilityIcon from "../../../public/icons/SustainabilityIcon";

// The first three descriptions come from the design; "People" and "Sustainability" are
// written in the same voice — swap in final copy when it's ready.
const values = [
    {
        title: "Customer Focus",
        Icon: CustomerFocusIcon,
        text: "Understanding customer needs and delivering simple, transparent solutions that create a seamless financial experience.",
    },
    {
        title: "Operational Excellence",
        Icon: OperationalExcellenceIcon,
        text: "Continuously improving our processes to deliver efficient, reliable, and consistent service at every step.",
    },
    {
        title: "Product Leadership",
        Icon: ProductLeadershipIcon,
        text: "Creating innovative, customer-centric financial solutions that address evolving needs and deliver meaningful value.",
    },
    {
        title: "People",
        Icon: CustomerFocusIcon,
        text: "Empowering our people through collaboration, continuous learning, and a culture built on trust and shared success.",
    },
    {
        title: "Sustainability",
        Icon: SustainabilityIcon,
        text: "Driving responsible growth that creates lasting value for our customers, partners, and communities.",
    },
];

// Swiper's loop mode needs more slides than 5 when ~3.3 are in view, so the slider runs over
// the values twice; the dots still map back to the 5 real values.
const sliderValues = [...values, ...values].map((value, index) => ({ ...value, slideKey: `${value.title}-${index}` }));

const arrowClass =
    "flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white transition hover:bg-[#134b96] cursor-pointer";

function ValueCard({ title, Icon, text }) {
    return (
        <div className="flex h-full flex-col items-center rounded-[14px] bg-primary px-6 py-[clamp(2rem,1.2296rem+0.9025vw,2.5rem)] text-center text-white shadow-[0_8px_20px_rgba(16,25,43,0.16)]">
            <span className="bg-glass-effect flex size-[clamp(4.75rem,3.0357rem+2.6786vw,6.25rem)] shrink-0 items-center justify-center rounded-full bg-white/5 shadow-[inset_0_1px_12px_rgba(255,255,255,0.12),0_6px_14px_rgba(8,24,56,0.25)]">
                <Icon className="h-auto w-[clamp(1.875rem,1.4898rem+0.4513vw,2.375rem)]" />
            </span>
            <h3 className="mt-[clamp(1.25rem,0.6722rem+0.6769vw,1.75rem)] text-[clamp(1.125rem,0.9044rem+0.9804vw,1.375rem)] md:text-[22px] lg:text-[clamp(1.25rem,0.6336rem+0.722vw,1.625rem)] font-semibold leading-tight">
                {title}
            </h3>
            <p className="mx-auto mt-[0.625em] max-w-[24em] text-[13px] md:text-[14px] lg:text-[clamp(0.875rem,0.5668rem+0.361vw,1.0625rem)] leading-normal text-white/90">
                {text}
            </p>
        </div>
    );
}

// Heading + subtitle on the left with prev/next arrows on the right (desktop); the cards run
// in a slider showing ~3.3 at a time on wide screens so the next card peeks in (as designed).
// Below lg the arrows give way to dots, like the site's other mobile sliders.
const ValuesThatDefineUs = () => {
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="secGap px-[4%]">
            <div className="mx-auto max-w-(--content-width)">
                <div className="mb-[1.8em] lg:mb-[2.4em] flex items-end justify-between gap-6">
                    <div>
                        <h2 className="mb-2.5 text-[clamp(1.5rem,1.2794rem+0.9804vw,1.75rem)] md:text-[36px] lg:text-[clamp(2rem,0.4589rem+1.8051vw,2.625rem)] text-ink">
                            Values That <strong className="font-bold text-primary">Define Us</strong>
                        </h2>
                        <p className="m-0 text-[clamp(0.875rem,0.6544rem+0.9804vw,1.125rem)] md:text-[18px] lg:text-[clamp(1rem,0.3836rem+0.722vw,1.25rem)] text-[#4B5563]">
                            Our values guide our decisions, build trust, and shape every customer experience.
                        </p>
                    </div>
                    <div className="hidden shrink-0 gap-4 lg:flex">
                        <button
                            type="button"
                            onClick={() => swiperInstance?.slidePrev()}
                            aria-label="Previous value"
                            className={arrowClass}
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            type="button"
                            onClick={() => swiperInstance?.slideNext()}
                            aria-label="Next value"
                            className={arrowClass}
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 8000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                    loop
                    spaceBetween={16}
                    slidesPerView={1.12}
                    onSwiper={setSwiperInstance}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex % values.length)}
                    breakpoints={{
                        640: { slidesPerView: 2.15, spaceBetween: 20 },
                        1024: { slidesPerView: 2.6, spaceBetween: 24 },
                        1280: { slidesPerView: 3.27, spaceBetween: 24 },
                    }}
                    className="pb-5!"
                >
                    {sliderValues.map((value) => (
                        <SwiperSlide key={value.slideKey} className="h-auto!">
                            <ValueCard {...value} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="mt-1 flex items-center justify-center gap-1.5 md:gap-2 lg:hidden">
                        {values.map((value, index) => (
                            <button
                                key={value.title}
                                type="button"
                                onClick={() => swiperInstance?.slideToLoop(index)}
                                aria-label={`Go to ${value.title}`}
                                aria-current={activeIndex === index ? "true" : undefined}
                                className={`h-2.5 md:h-4 rounded-full border border-primary transition-all duration-300 cursor-pointer ${
                                    activeIndex === index ? "w-5 md:w-8 bg-primary" : "w-2.5 md:w-4 bg-transparent"
                                }`}
                            />
                        ))}
                </div>
            </div>
        </section>
    );
};

export default ValuesThatDefineUs;
