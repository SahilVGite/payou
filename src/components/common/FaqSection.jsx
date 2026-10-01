"use client";

import { useState } from "react";
import { ArrowRight, ChevronDown, Plus } from "lucide-react";
import Collapse from "./Collapse";
import Dropdown from "./Dropdown";
import PopupLink from "../popup/PopupLink";

// Shared FAQ section — all content comes in through props so any page can reuse it.
// `faqsByCategory` is { [categoryName]: [{ question, answer }] }; `categories` defaults to
// its keys (in order) and only needs passing to reorder or limit which ones are shown.
export default function FaqSection({
  title,
  faqsByCategory = {},
  categories = Object.keys(faqsByCategory),
  categoriesTitle = "Categories",
  categoriesDescription,
  ctaTitle = "Can't Find What You Need?",
  ctaLabel = "SUBMIT QUERIES",
  ctaHref = "/contact-us",
  ctaSource,
  backgroundImage = "/images/faq_section_bg.png",
}) {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = faqsByCategory[activeCategory] ?? [];

  return (
    <section
      className="px-[4%] secGap"
      style={{ backgroundImage: `url('${backgroundImage}')`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="mx-auto max-w-(--content-width)">
        <h2 className="mb-5 md:mb-8 lg:mb-10 text-[clamp(1.5rem,1.2794rem+0.9804vw,1.75rem)] md:text-[36px] lg:text-[clamp(2rem,0.4589rem+1.8051vw,2.625rem)] leading-tight text-ink">
          {title}
        </h2>

        <div className="grid grid-cols-[400px_1fr] gap-2.5 max-[1024px]:grid-cols-1">
          <div className="hidden flex-col bg-white/20 rounded-lg backdrop-blur-sm shadow-[0px_4px_8px_2px_rgba(0,0,0,0.15)] p-6 lg:flex">
            <p className="text-[18px] md:text-[22px] lg:text-[clamp(1.25rem,0.3254rem+1.083vw,1.625rem)] font-semibold text-[#18181B]">{categoriesTitle}</p>
            <p className="text-[12px] md:text-[14px] lg:text-[clamp(0.8125rem,0.5043rem+0.361vw,0.9375rem)] font-normal text-black/60 mt-1 md:mt-2 mb-4 md:mb-6">{categoriesDescription}</p>
            <div className="w-full flex flex-col gap-2.5">
              {categories.map((category) => {
                const isActive = category === activeCategory;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => {
                      setActiveCategory(category);
                      setOpenIndex(0);
                    }}
                    className={`flex items-center justify-between rounded-full px-5 py-2.5 text-left text-[12px] md:text-[14px] lg:text-[clamp(0.875rem,0.5668rem+0.361vw,1rem)] font-medium cursor-pointer transition ${
                      isActive
                        ? "bg-primary text-white"
                        : "bg-white text-[#52525B] hover:bg-[#eaf1fb]"
                    }`}
                  >
                    {category}
                    {!isActive ? <ChevronDown size={16} className="text-[#5f6a7b]" /> : null}
                  </button>
                );
              })}
            </div>

            <div className="border-t border-[#E4E6EB] mt-4 pt-4">
              <p className="text-[18px] md:text-[20px] lg:text-[clamp(1.125rem,0.5086rem+0.722vw,1.375rem)] font-semibold text-[#18181B] mb-[0.6em]">{ctaTitle}</p>
              <PopupLink
                href={ctaHref}
                source={ctaSource}
                className="float-left inline-flex gap-2 items-center justify-center text-center w-full rounded-full bg-accent px-[1em] py-[0.5555em] text-[14px] md:text-[16px] lg:text-[clamp(0.9375rem,0.4752rem+0.5415vw,1.125rem)] font-semibold text-white transition-all hover:bg-accent/90 hover:gap-6"
              >
                {ctaLabel}
                <ArrowRight size={20} className="inline-block" />
              </PopupLink>
            </div>
          </div>

          <div className="mb-2.5 lg:hidden">
            <Dropdown
              value={activeCategory}
              onChange={(nextCategory) => {
                setActiveCategory(nextCategory);
                setOpenIndex(0);
              }}
              options={categories}
              className="rounded-full border border-white/40 bg-primary/10 py-3.25 pl-4.5 pr-4.5 text-[12px] md:text-[14px] font-semibold text-[#10192b] backdrop-blur-lg"
              ariaLabel="Choose a category"
            />
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => {
              const isOpen = index === openIndex;
              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-[14px] border bg-white/15 border-[#E4E6EB] backdrop-blur-xs shadow-[0px_4px_4px_rgba(0,0,0,0.1)] transition ${
                    isOpen ? "border-[#134b96]" : "border-[#E4E6EB]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className={`flex w-full items-center gap-2 md:gap-4 px-4 md:px-6 py-4 md:py-5 text-left cursor-pointer ${isOpen && "bg-primary/10"}`}
                  >
                    <span className={`text-[12px] md:text-[16px] lg:text-[clamp(0.9375rem,0.4752rem+0.5415vw,1.125rem)] font-bold bg-white aspect-square rounded-full py-1 px-2 inline-flex items-center justify-center ${isOpen ? "text-[#134b96]" : "text-ink"}`}>{String(index + 1).padStart(2, "0")}</span>
                    <span className="flex-1 text-[clamp(1rem,0.7794rem+0.9804vw,1.25rem)] md:text-[20px] lg:text-[clamp(1.125rem,0.5086rem+0.722vw,1.375rem)] font-medium text-[#18181B]">{faq.question}</span>
                  </button>
                  <Collapse open={isOpen}>
                    <div className={`px-6 py-6 text-[14px] md:text-[16px] lg:text-[clamp(0.9375rem,0.4752rem+0.5415vw,1.125rem)] font-medium text-[#52525B] border-t-2 ${isOpen ? "border-white" : "border-transparent"}`}>{faq.answer}</div>
                  </Collapse>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
