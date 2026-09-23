"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import {
  ArrowRight,
  Car,
  ChevronLeft,
  ChevronRight,
  Home,
  Landmark,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import Collapse from "../common/Collapse";
import Dropdown from "../common/Dropdown";
import LoansTabIcon from "../../../public/icons/LoansTabIcon";
import HomeLoanIcon from "../../../public/icons/HomeLoanIcon";
import BusinessLoanIcon from "../../../public/icons/BusinessLoanIcon";
import PropertyLoanIcon from "../../../public/icons/PropertyLoanIcon";
import PersonalLoanIcon from "../../../public/icons/PersonalLoanIcon";
import TwoWheelerLoanIcon from "../../../public/icons/TwoWheelerLoanIcon";
import UsedCarLoanIcon from "../../../public/icons/UsedCarLoanIcon";
import ConsumerDurableLoanIcon from "../../../public/icons/ConsumerDurableLoanIcon";
import CarLoanIcon from "../../../public/icons/CarLoanIcon";

const tabs = [
  { label: "Loans", icon: LoansTabIcon },
  { label: "Insurance", icon: ShieldCheck },
  { label: "Investments", icon: TrendingUp },
];

const sidebarByTab = {
  Loans: [
    "Personal Loan",
    "Business Loan",
    "Home Loan",
    "Loan Against Property",
    "Gold Loan",
    "Loan Against Securities",
    "Vehicle & Consumer Loan",
    "Education Loan",
  ],
  Insurance: [
    "Life Insurance",
    "Health Insurance",
    "Motor Insurance",
    "Term Insurance",
  ],
  Investments: [
    "Mutual Funds",
    "Fixed Deposits",
    "Bonds",
    "Portfolio Advisory",
  ],
};

// Same placeholder copy shown for every sidebar item for now, matching the "Vehicle & Consumer Loan" content.
const expandedDescription =
  "Flexible financing for vehicles and essential purchases. Easy repayment options to fit your needs.";

// Dummy slider content: every sidebar item gets its own 5-card set so picking a different
// item (desktop click or mobile select) actually swaps the slider. Reuses the existing 4
// stock images and a rotating icon set per tab until real per-product imagery/copy exists.
const CARDS_PER_ITEM = 5;

const cardImages = [
  "/images/financial_solutions_card1.png",
  "/images/financial_solutions_card2.png",
  "/images/financial_solutions_card3.png",
  "/images/financial_solutions_card4.png",
];

const cardIconsByTab = {
  Loans: [LoansTabIcon, TwoWheelerLoanIcon, UsedCarLoanIcon, ConsumerDurableLoanIcon, CarLoanIcon],
  Insurance: [ShieldCheck, Car, Home, ShieldCheck, Home],
  Investments: [TrendingUp, Landmark, TrendingUp, Landmark, TrendingUp],
};

const descriptionByTab = {
  Loans: (item) =>
    `Quick approval, flexible EMIs, and minimal documentation tailored to your ${item.toLowerCase()} needs.`,
  Insurance: (item) =>
    `Comprehensive ${item.toLowerCase()} coverage with hassle-free claims and premiums that fit your budget.`,
  Investments: (item) =>
    `Expert-guided ${item.toLowerCase()} options to help you grow and protect your wealth steadily.`,
};

const cardsByTabAndItem = Object.fromEntries(
  Object.entries(sidebarByTab).map(([tab, items]) => [
    tab,
    Object.fromEntries(
      items.map((item) => [
        item,
        Array.from({ length: CARDS_PER_ITEM }, (_, i) => ({
          id: `${tab}-${item}-${i}`,
          title: `${item} Plan ${i + 1}`,
          description: descriptionByTab[tab](item),
          image: cardImages[i % cardImages.length],
          icon: cardIconsByTab[tab][i % cardIconsByTab[tab].length],
        })),
      ]),
    ),
  ]),
);

// Padded with a couple of repeats so every item's card set has enough slides for a smooth infinite loop.
const paddedCardsByTabAndItem = Object.fromEntries(
  Object.entries(cardsByTabAndItem).map(([tab, itemMap]) => [
    tab,
    Object.fromEntries(
      Object.entries(itemMap).map(([item, cards]) => [
        item,
        [...cards, ...cards.slice(0, 2)].map((card, index) => ({
          ...card,
          id: `${card.id}-${index}`,
        })),
      ]),
    ),
  ]),
);

const popularProducts = [
  [HomeLoanIcon, "HOME LOAN", "Home Purchase Loan"],
  [BusinessLoanIcon, "BUSINESS LOAN", "Business Expansion Loan"],
  [PropertyLoanIcon, "PROPERTY LOAN", "Loan Against Property"],
  [PersonalLoanIcon, "PERSONAL LOAN", "Personal Expense Loan"],
];

export default function FinancialSolutions() {
  const [activeTab, setActiveTab] = useState(tabs[0].label);
  const [activeItem, setActiveItem] = useState(sidebarByTab[tabs[0].label][0]);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const sidebarItems = sidebarByTab[activeTab];
  const cards = paddedCardsByTabAndItem[activeTab][activeItem];

  return (
    <section
      className="secGapB pt-(--sec-gap) lg:pt-[calc(var(--sec-gap)*2)] px-[4%] bg-[#F7F8FC]"
      style={{
        backgroundImage: "url('/images/hmSecondSectionBg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto max-w-(--content-width)">
        <h2 className="mb-2 text-left md:text-center text-ink text-[clamp(1.5rem,1.2794rem+0.9804vw,1.75rem)] md:text-[36px] lg:text-[clamp(2rem,0.4589rem+1.8051vw,2.625rem)]">
          Financial Solutions:{" "}
          <strong className="font-bold text-primary">
            Tailored For All Your Needs
          </strong>
        </h2>
        <p className="mx-auto mb-9 text-[clamp(0.875rem,0.6544rem+0.9804vw,1.125rem)] md:text-[18px] lg:text-[clamp(1rem,0.3836rem+0.722vw,1.25rem)] text-left md:text-center text-[#5f6a7b]">
          Smart solutions. Stronger future. We help you achieve your financial
          goals with confidence.
        </p>

        <div className="mb-4 lg:hidden">
          <Dropdown
            value={activeTab}
            onChange={(nextTab) => {
              setActiveTab(nextTab);
              setActiveItem(sidebarByTab[nextTab][0]);
            }}
            options={tabs.map(({ label }) => label)}
            className="rounded-full border border-white/40 bg-primary/10 py-3.25 pl-4.5 pr-4.5 text-[12px] md:text-[14px] font-semibold text-[#10192b] backdrop-blur-lg"
            ariaLabel="Choose a category"
          />
        </div>

        <div className="mx-auto mb-10 hidden justify-evenly w-full max-w-[1179px] gap-1 rounded-xl bg-white/15 shadow-[1px_1px_12px_rgba(0,0,0,0.1)] overflow-x-auto overflow-y-hidden lg:flex">
          {tabs.map(({ label, icon: Icon }) => {
            const isActive = activeTab === label;
            return (
              <button
                key={label}
                type="button"
                onClick={() => {
                  setActiveTab(label);
                  setActiveItem(sidebarByTab[label][0]);
                }}
                className={`relative flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-[clamp(0.5625rem,0.3839rem+0.8929vw,0.8125rem)] md:text-[13px] lg:text-[clamp(0.75rem,0.4418rem+0.361vw,0.875rem)] uppercase font-semibold cursor-pointer transition ${
                  isActive
                    ? "text-primary"
                    : "text-[#505A69] hover:text-primary"
                }`}
              >
                <Icon size={20} />
                {label}
                {isActive ? (
                  <span className="absolute inset-x-6 bottom-0 h-0.5 rounded-full bg-[#134b96]" />
                ) : null}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-[327px_1fr] gap-8 max-[1024px]:grid-cols-1">
          <div className="hidden flex-col overflow-hidden rounded-2xl border border-[#dce1e7] bg-white lg:flex">
            {sidebarItems.map((item, index) => {
              const isActive = item === activeItem;
              const isLast = index === sidebarItems.length - 1;
              return (
                <div key={item}>
                  <button
                    type="button"
                    onClick={() => setActiveItem(item)}
                    className={`flex w-full items-center justify-between px-5 py-4 text-left text-[12px] md:text-[14px] lg:text-[clamp(0.875rem,0.5668rem+0.361vw,1rem)] font-semibold transition cursor-pointer ${
                      isActive
                        ? "bg-[#E5E7EB] text-primary"
                        : `text-[#10192b] hover:bg-[#eaf1fb] ${!isLast ? "border-b border-[#E2E8F0]" : ""}`
                    }`}
                  >
                    {item}
                    <ChevronRight
                      size={16}
                      className={`shrink-0 transition-transform duration-200 ${isActive ? "-rotate-90" : ""}`}
                    />
                  </button>
                  <Collapse open={isActive}>
                    <div
                      className={`bg-[#E5E7EB] p-4 text-[clamp(0.5625rem,0.3839rem+0.8929vw,0.8125rem)] md:text-[13px] lg:text-[clamp(0.75rem,0.4418rem+0.361vw,0.875rem)] font-medium leading-relaxed text-[#5f6a7b] ${!isLast ? "border-b border-[#eef0f3]" : ""}`}
                    >
                      <p className="m-0">{expandedDescription}</p>
                      <div className="mt-3 flex flex-col text-center gap-2">
                        <Link
                          href="/contact-us"
                          className="rounded-full bg-[#b11f24] p-[0.8em] text-[12px] md:text-[14px] lg:text-[clamp(0.8125rem,0.5043rem+0.361vw,0.9375rem)] font-semibold text-white transition hover:bg-[#961a1e]"
                        >
                          Enquire Now
                        </Link>
                        <Link
                          href="/contact-us"
                          className="rounded-full border border-[#134b96] p-[0.8em] text-[12px] md:text-[14px] lg:text-[clamp(0.8125rem,0.5043rem+0.361vw,0.9375rem)] font-semibold text-[#134b96] transition hover:bg-[#134b96] hover:text-white"
                        >
                          Know More
                        </Link>
                      </div>
                    </div>
                  </Collapse>
                </div>
              );
            })}
          </div>

          <div className="lg:hidden">
            <Dropdown
              value={activeItem}
              onChange={setActiveItem}
              options={sidebarItems}
              className="rounded-full border border-white/40 bg-primary/10 py-3.25 pl-4.5 pr-4.5 text-[12px] md:text-[14px] font-semibold text-[#10192b] backdrop-blur-lg"
              ariaLabel="Choose a product"
            />
          </div>

          <div className="relative min-w-0 flex flex-col justify-between">
            <div className="relative w-full">
              <Swiper
                modules={[Autoplay, Navigation]}
                spaceBetween={20}
                slidesPerView={1.15}
                slidesPerGroup={1}
                loop
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                onSwiper={setSwiperInstance}
                breakpoints={{
                  640: { slidesPerView: 2.1 },
                  1024: { slidesPerView: 3.1 },
                  1280: { slidesPerView: 3.6 },
                }}
                className="financial-solutions-swiper pb-2!"
              >
                {cards.map((card) => {
                  const CardIcon = card.icon;
                  return (
                    <SwiperSlide key={card.id}>
                      <article className="flex h-full flex-col overflow-hidden rounded-[18px] shadow-[0px_8px_16px_rgba(15,23,42,0.04)] backdrop-blur-xs drop-shadow-[0px_8px_16px_rgba(15,23,42,0.04)] border border-white/50 transition group">
                        <div className="relative w-full bg-[#eaf1fb]">
                          <img src={card.image} alt={card.title} className="object-cover aspect-4/3 group-hover:scale-105 transition-transform duration-300" />
                          <span className="absolute -bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#dce1e7] bg-white group-hover:bg-white/30 group-hover:backdrop-blur-sm text-[#134b96] shadow-[0_4px_10px_rgba(16,25,43,0.15)]">
                            <CardIcon size={24} />
                          </span>
                        </div>
                        <div className="flex flex-1 flex-col p-5 pt-6 group-hover:bg-[#0F172A] transition">
                          <h3 className="m-0 text-[14px] md:text-[16px] lg:text-[clamp(0.9375rem,0.4752rem+0.5415vw,1.125rem)] font-semibold text-ink group-hover:text-white line-clamp-1">
                            {card.title}
                          </h3>
                          <p className="mt-[0.8em] mb-[1.3333em] flex-1 text-[12px] md:text-[14px] lg:text-[clamp(0.8125rem,0.5043rem+0.361vw,0.9375rem)] leading-relaxed text-[#4B5563] group-hover:text-white line-clamp-3">
                            {card.description}
                          </p>
                          <Link
                            href="/contact-us"
                            className="inline-block text-[12px] md:text-[14px] lg:text-[clamp(0.8125rem,0.5043rem+0.361vw,0.9375rem)] font-medium text-primary hover:text-accent group-hover:text-white"
                          >
                            Explore More <ArrowRight size={12} className="inline-block" />
                          </Link>
                        </div>
                      </article>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <div
                className="absolute top-1/3 -left-5 md:-left-7.5 z-10 flex md:w-[calc(100%+60px)] -translate-y-1/2 items-center justify-between px-2.5 w-[calc(100%+35px)] [@media(min-width:1700px)]:w-[calc(100%+60px)]"
              >
                <button
                  type="button"
                  onClick={() => swiperInstance?.slidePrev()}
                  aria-label="Previous"
                  className="flex h-11 w-11 [@media(min-width:1024px)_and_(max-width:1400px)]:w-10 [@media(min-width:1280px)_and_(max-width:1300px)]:h-10 items-center justify-center rounded-full border bg-[#134b96] text-white transition hover:bg-[#0e3a75] shadow-[1px_1px_14px_9px_#FFFFFF] cursor-pointer"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={() => swiperInstance?.slideNext()}
                  aria-label="Next"
                  className="flex h-11 w-11 [@media(min-width:1024px)_and_(max-width:1400px)]:w-10 [@media(min-width:1280px)_and_(max-width:1300px)]:h-10 items-center justify-center rounded-full border bg-[#134b96] text-white transition hover:bg-[#0e3a75] shadow-[1px_1px_14px_9px_#FFFFFF] cursor-pointer"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
            <div className="mt-14">
              <p className="mb-[0.5454em] text-[18px] md:text-[20px] lg:text-[clamp(1.125rem,0.5086rem+0.722vw,1.375rem)] font-medium text-ink tracking-[-0.44px]">
                Popular Products
              </p>
              <div className="grid [@media(min-width:1366px)]:grid-cols-4 gap-5 md:grid-cols-2">
                {popularProducts.map(([Icon, eyebrow, label]) => (
                  <Link
                    href="/contact-us"
                    key={label}
                    className="flex items-center gap-3 rounded-[14px] border border-[#dce1e7] bg-white/10 shadow-[3px_3px_8px_rgba(0,0,0,0.25)] backdrop-blur-xs px-5 py-4 transition hover:-translate-y-0.5 hover:shadow-[0_10px_22px_rgba(16,25,43,0.1)] opacity-80"
                  >
                      <Icon size={24} />
                    <span className="flex flex-col">
                      <span className="text-[10px] md:text-[12px] lg:text-[clamp(0.6875rem,0.3793rem+0.361vw,0.8125rem)] font-medium uppercase tracking-[0.1538em] text-[#4E5968]">
                        {eyebrow}
                      </span>
                      <span className="text-[12px] md:text-[14px] lg:text-[clamp(0.875rem,0.5668rem+0.361vw,1rem)] font-medium tracking-[-0.0093em] text-primary">
                        {label}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
