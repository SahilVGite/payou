"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import StoryViewer from "./StoryViewer";
import { webStories } from "../../data/blogs";

// Swiper's loop needs more slides than the 5 shown at once on wide screens, so the slider runs
// over the stories twice; dots and the viewer still map back to the 5 real stories.
const sliderStories = [...webStories, ...webStories].map((story, index) => ({ ...story, slideKey: `${story.id}-${index}` }));

const arrowClass =
    "absolute top-1/2 z-10 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white text-white transition hover:bg-white hover:text-primary xl:flex cursor-pointer";

function StoryCard({ story, onOpen }) {
    return (
        <button
            type="button"
            onClick={onOpen}
            aria-label={`Open web story: ${story.title}`}
            className="group relative block aspect-[320/464] w-full overflow-hidden rounded-[10px] text-left text-white shadow-[0_10px_24px_rgba(8,24,56,0.35)] cursor-pointer"
        >
            <img
                src={story.cover}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.35)_0%,rgba(0,0,0,0)_28%,rgba(0,0,0,0)_50%,rgba(0,0,0,0.85)_100%)]" />

            {/* Decorative story progress segments */}
            <span aria-hidden="true" className="absolute inset-x-[8%] top-3 flex gap-1.5">
                {Array.from({ length: 5 }, (_, index) => (
                    <span key={index} className={`h-[3px] flex-1 rounded-full ${index === 0 ? "bg-white" : "bg-white/45"}`} />
                ))}
            </span>

            <span className="absolute left-[6.5%] top-7 rounded-full border border-white/40 bg-black/25 px-4 py-2 text-[11px] md:text-[12px] lg:text-[clamp(0.75rem,0.5959rem+0.1805vw,0.875rem)] font-semibold uppercase backdrop-blur-sm">
                {story.category}
            </span>

            <span className="absolute inset-x-[6.5%] bottom-[7%] block">
                <span className="flex items-center gap-1.5 text-[12px] md:text-[13px] lg:text-[clamp(0.8125rem,0.6584rem+0.1805vw,0.9375rem)] text-white/90">
                    <CalendarDays size={15} className="shrink-0" />
                    {story.date}
                </span>
                <span className="mt-1.5 line-clamp-2 block text-[15px] md:text-[17px] lg:text-[clamp(1rem,0.6918rem+0.361vw,1.25rem)] font-semibold leading-tight">
                    {story.title}
                </span>
            </span>
        </button>
    );
}

// Blue section with a looping, auto-advancing (every 6s) row of story cards (5 in view at 1536px+). Each card opens the
// full-screen StoryViewer at that story. Arrows sit just outside the content on wide screens;
// dots are always shown below.
export default function WebStories() {
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [openStory, setOpenStory] = useState(null);

    return (
        <section className="secGap bg-primary px-[4%] text-white">
            <div className="mx-auto max-w-(--content-width)">
                <h2 className="mb-2.5 text-center text-[clamp(1.5rem,1.2794rem+0.9804vw,1.75rem)] md:text-[36px] lg:text-[clamp(2rem,0.4589rem+1.8051vw,2.625rem)]">
                    Explore <strong className="font-bold">Web Stories</strong>
                </h2>
                <p className="mx-auto mb-[1.8em] lg:mb-[2.2em] text-center text-[clamp(0.875rem,0.6544rem+0.9804vw,1.125rem)] md:text-[18px] lg:text-[clamp(1rem,0.3836rem+0.722vw,1.25rem)] leading-[1.45] text-white">
                    Bite-sized financial strategies, credit hacks, and borrowing rules in an interactive visual format.
                </p>

                <div className="relative">
                    <button
                        type="button"
                        onClick={() => swiperInstance?.slidePrev()}
                        aria-label="Previous stories"
                        className={`${arrowClass} -left-[clamp(2.875rem,1rem+2.3vw,4rem)]`}
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{ delay: 6000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                        loop
                        spaceBetween={16}
                        slidesPerView={1.3}
                        onSwiper={setSwiperInstance}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex % webStories.length)}
                        breakpoints={{
                            640: { slidesPerView: 2.3, spaceBetween: 20 },
                            1024: { slidesPerView: 3.4, spaceBetween: 24 },
                            1280: { slidesPerView: 4, spaceBetween: 28 },
                            1536: { slidesPerView: 5, spaceBetween: 30 },
                        }}
                    >
                        {sliderStories.map((story, index) => (
                            <SwiperSlide key={story.slideKey}>
                                <StoryCard
                                    story={story}
                                    onOpen={() => {
                                        // Hold the card slider still while a story is playing full-screen.
                                        swiperInstance?.autoplay?.stop();
                                        setOpenStory(index % webStories.length);
                                    }}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <button
                        type="button"
                        onClick={() => swiperInstance?.slideNext()}
                        aria-label="Next stories"
                        className={`${arrowClass} -right-[clamp(2.875rem,1rem+2.3vw,4rem)]`}
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                <div className="mt-8 lg:mt-12 flex items-center justify-center gap-1.5 md:gap-2">
                    {webStories.map((story, index) => (
                        <button
                            key={story.id}
                            type="button"
                            onClick={() => swiperInstance?.slideToLoop(index)}
                            aria-label={`Go to ${story.title}`}
                            aria-current={activeIndex === index ? "true" : undefined}
                            className={`h-2.5 md:h-4 rounded-full border border-white transition-all duration-300 cursor-pointer ${
                                activeIndex === index ? "w-5 md:w-8 bg-white" : "w-2.5 md:w-4 bg-transparent"
                            }`}
                        />
                    ))}
                </div>
            </div>

            {openStory !== null ? (
                <StoryViewer
                    stories={webStories}
                    startIndex={openStory}
                    onClose={() => {
                        setOpenStory(null);
                        swiperInstance?.autoplay?.start();
                    }}
                />
            ) : null}
        </section>
    );
}
