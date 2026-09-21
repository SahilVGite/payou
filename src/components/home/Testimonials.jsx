"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";

const baseTestimonials = [
  {
    rating: 5,
    badge: "₹25 Lakh Disbursed",
    heading:
      "₹25 Lakh Unsecured Business Loan approved in 48 hours after 2 retail bank rejections.",
    quote:
      "PayYouAdvisory structured my GST and bank statements properly. The funds were credited before my raw material shipment deadline.",
    name: "Sachin Kulkarni",
    role: "Precision Components Manufacturer",
    location: "Pune (Bhosari)",
  },
  {
    rating: 2,
    badge: "₹40 Lakh Sanctioned",
    heading:
      "Doctor Professional Loan of ₹40 Lakh sanctioned with zero physical collateral.",
    quote:
      "The doorstep document pickup was exceptional. Their relationship manager brought all paperwork to my clinic between surgery rounds.",
    name: "Dr. Ananya Sen",
    role: "Senior Consultant Radiologist",
    location: "Mumbai (Andheri)",
  },
  {
    rating: 4,
    badge: "₹7.8L Interest Saved",
    heading:
      "Home Loan Balance Transfer of ₹65 Lakh saving ₹7.8 Lakhs in interest over 15 years.",
    quote:
      "Reduced our home loan interest rate from 9.60% down to 8.35%. Our monthly EMI dropped by ₹6,200 immediately.",
    name: "Pooja & Rohan Iyer",
    role: "IT Sector Professionals",
    location: "Pune (Kothrud)",
  },
  {
    rating: 2,
    badge: "12-Hour Emergency Disbursal",
    heading:
      "Emergency Medical Loan of ₹5 Lakh sanctioned within 12 hours with zero stress.",
    quote:
      "Needed immediate hospital deposit funding. PayYouAdvisory initiated the instant digital disbursement flawlessly.",
    name: "Vikas Deshmukh",
    role: "Tech Lead",
    location: "Bengaluru (HSR Layout)",
  },
];

// Repeated so there's enough slides for the pagination dots to represent real pages at every breakpoint.
const testimonials = [...baseTestimonials, ...baseTestimonials].map(
  (testimonial, index) => ({
    ...testimonial,
    id: `${testimonial.name}-${index}`,
  }),
);

export default function Testimonials() {
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <section className="secGapT px-[4%]">
      <div className="mx-auto max-w-(--content-width)">
        <h2 className="mb-[1.2857em] text-center text-[28px] md:text-[36px] lg:text-[clamp(2rem,0.4589rem+1.8051vw,2.625rem)] text-ink">
          Trusted by people{" "}
          <strong className="font-bold text-primary">Who Choose Us</strong>
        </h2>

        <div className="relative">
          <div className="relative">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              slidesPerGroup={1}
              loop
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{ clickable: true, el: ".testimonials-pagination" }}
              onSwiper={setSwiperInstance}
              breakpoints={{
                768: { slidesPerView: 2 },
                1280: { slidesPerView: 4 },
              }}
              className="testimonials-swiper pb-3!"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <article className="flex h-full flex-col rounded-[18px] border border-[#dce1e7] bg-white p-6 transition">
                    <div className="flex gap-0.5 text-[#f5a623]">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                          key={index}
                          size={22}
                          fill={index < testimonial.rating ? "#f5a623" : "none"}
                        />
                      ))}
                    </div>
                    <span className="rounded-full bg-[#eaf1fb] px-2.5 py-1 text-[11px] md:text-[13px] lg:text-[clamp(0.75rem,0.4418rem+0.361vw,0.875rem)] font-medium text-primary w-fit mt-3">
                      {testimonial.badge}
                    </span>
                    <h3 className="mt-4 text-[16px] md:text-[18px] lg:text-[clamp(1rem,0.3836rem+0.722vw,1.25rem)] font-semibold text-ink">
                      &ldquo;{testimonial.heading}&rdquo;
                    </h3>
                    <p className="mt-3 flex-1 text-[14px] md:text-[16px] lg:text-[clamp(0.9375rem,0.4752rem+0.5415vw,1.125rem)] text-[#657084]">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="mt-5 flex items-center gap-3 border-t border-[#eef0f3] pt-4">
                      <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
                        <Image src="/images/default_user.png" alt={testimonial.name} fill className="object-cover" />
                      </span>
                      <div>
                        <p className="mb-1 text-[14px] md:text-[16px] lg:text-[clamp(0.9375rem,0.4752rem+0.5415vw,1.125rem)] font-semibold text-[#17243A]">
                          {testimonial.name}
                        </p>
                        <p className="m-0 text-[11px] md:text-[13px] lg:text-[clamp(0.75rem,0.4418rem+0.361vw,0.875rem)] font-medium text-[#657084]">
                          {testimonial.role}
                        </p>
                        <p className="m-0 text-[11px] md:text-[13px] lg:text-[clamp(0.75rem,0.4418rem+0.361vw,0.875rem)] font-medium text-primary">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="absolute z-50 top-1/2 -translate-y-1/2 flex items-center justify-between w-[calc(100%+60px)] [@media(min-width:1700px)]:w-[calc(100%+140px)] left-[-30px] [@media(min-width:1700px)]:left-[-70px] px-2.5 max-[767px]:hidden">
              <button
                type="button"
                onClick={() => swiperInstance?.slidePrev()}
                aria-label="Previous testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#dce1e7] text-white bg-primary transition hover:border-[#134b96] hover:bg-[#134b96] hover:text-white cursor-pointer"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                type="button"
                onClick={() => swiperInstance?.slideNext()}
                aria-label="Next testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#dce1e7] text-white bg-primary transition hover:border-[#134b96] hover:bg-[#134b96] hover:text-white cursor-pointer"
              >
                <ChevronRight size={28} />
              </button>
            </div>
          </div>

          <div className="mt-3 md:mt-6 lg:mt-8 flex items-center justify-center gap-6">
            {/* <button
              type="button"
              onClick={() => swiperInstance?.slidePrev()}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#dce1e7] text-[#134b96] transition hover:border-[#134b96] hover:bg-[#134b96] hover:text-white"
            >
              <ChevronLeft size={20} />
            </button> */}
            <div className="testimonials-pagination flex items-center justify-center gap-1.5 lg:gap-2" />
            {/* <button
              type="button"
              onClick={() => swiperInstance?.slideNext()}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#dce1e7] text-[#134b96] transition hover:border-[#134b96] hover:bg-[#134b96] hover:text-white"
            >
              <ChevronRight size={20} />
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
