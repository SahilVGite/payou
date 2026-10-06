"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BlogCard from "./BlogCard";
import { latestPosts } from "../../data/blogs";

const arrowClass =
    "flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white transition hover:bg-[#0f3c78] cursor-pointer";

// Heading + subtitle on the left with prev/next arrows on the right (desktop), then a looping
// auto-advancing (every 6s) slider of blog cards: 4 in view on wide screens. Below lg the arrows give way to dots.
export default function LatestInsights() {
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="secGap px-[4%] pt-0!">
            <div className="mx-auto max-w-(--content-width)">
                <div className="mb-[1.8em] lg:mb-[2.2em] flex items-end justify-between gap-6">
                    <div>
                        <h2 className="mb-2.5 text-[clamp(1.5rem,1.2794rem+0.9804vw,1.75rem)] md:text-[36px] lg:text-[clamp(2rem,0.4589rem+1.8051vw,2.625rem)] text-ink">
                            Latest <strong className="font-bold text-primary">Insights</strong>
                        </h2>
                        <p className="m-0 max-w-[38em] text-[clamp(0.875rem,0.6544rem+0.9804vw,1.125rem)] md:text-[18px] lg:text-[clamp(1rem,0.3836rem+0.722vw,1.25rem)] leading-[1.45] text-[#4B5563]">
                            Stay informed with the latest financial trends, market insights, and expert perspectives to
                            make smarter financial decisions.
                        </p>
                    </div>
                    <div className="hidden shrink-0 gap-4 lg:flex">
                        <button type="button" onClick={() => swiperInstance?.slidePrev()} aria-label="Previous insights" className={arrowClass}>
                            <ChevronLeft size={24} />
                        </button>
                        <button type="button" onClick={() => swiperInstance?.slideNext()} aria-label="Next insights" className={arrowClass}>
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 6000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                    loop
                    spaceBetween={16}
                    slidesPerView={1.1}
                    onSwiper={setSwiperInstance}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    breakpoints={{
                        640: { slidesPerView: 2, spaceBetween: 18 },
                        1024: { slidesPerView: 3, spaceBetween: 26 },
                        1280: { slidesPerView: 4, spaceBetween: 32 },
                    }}
                    className="pb-6!"
                >
                    {latestPosts.map((post) => (
                        <SwiperSlide key={post.slug} className="h-auto!">
                            <BlogCard post={post} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="flex items-center justify-center gap-1.5 md:gap-2 lg:hidden">
                    {latestPosts.map((post, index) => (
                        <button
                            key={post.slug}
                            type="button"
                            onClick={() => swiperInstance?.slideToLoop(index)}
                            aria-label={`Go to ${post.title}`}
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
}
