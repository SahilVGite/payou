"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ChevronDown, Plus } from "lucide-react";
import Collapse from "../common/Collapse";

const categories = ["General FAQ's", "Loans", "Insurance", "Investment", "EMI"];

const faqsByCategory = {
  "General FAQ's": [
    {
      question: "What is loan advisory, and how does PayYouAdvisory help me get a loan in Pune?",
      answer:
        "Loan advisory means we understand your requirements and profile, then match you with the bank or NBFC most likely to approve you at the best terms — instead of you applying blindly at multiple places.",
    },
    {
      question: "Which banks and NBFCs does PayYouAdvisory work with?",
      answer:
        "We work with 50+ RBI-regulated banks, NBFCs, and fintech lenders including SBI, HDFC Bank, ICICI Bank, Bajaj Finserv, Tata Capital, and more.",
    },
    {
      question: "Is there any fee for using PayYouAdvisory's loan advisory services?",
      answer:
        "No. Our advisory services are completely free for borrowers — we do not charge any upfront fees for loan facilitation.",
    },
    {
      question: "Can I apply for a loan online without visiting your Pune office?",
      answer:
        "Yes, the entire journey — from eligibility check to KYC and document upload — can be completed online without visiting our office.",
    },
    {
      question: "What types of loans can I apply for through PayYouAdvisory?",
      answer:
        "You can apply for personal loans, business loans, home loans, loans against property, gold loans, vehicle & consumer loans, and education loans.",
    },
  ],
  Loans: [
    {
      question: "What documents are required for a personal loan?",
      answer: "Typically PAN, Aadhaar, income proof, and the last 3-6 months of bank statements are required.",
    },
    {
      question: "How long does loan approval usually take?",
      answer: "Depending on the lender and loan type, approvals can range from a few hours to 5-7 business days.",
    },
  ],
  Insurance: [
    {
      question: "Can I bundle insurance with my loan?",
      answer: "Yes, we can help you add relevant insurance cover alongside your loan for added protection.",
    },
  ],
  Investment: [
    {
      question: "Do you offer investment advisory services?",
      answer: "Yes, our team also advises on mutual funds, fixed deposits, and portfolio planning.",
    },
  ],
  EMI: [
    {
      question: "How is my EMI calculated?",
      answer: "EMI is calculated using your principal amount, interest rate, and tenure — try our EMI calculator above for an instant estimate.",
    },
  ],
};

export default function FaqSection() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = faqsByCategory[activeCategory];

  return (
    <section
      className="px-[4%] secGap"
      style={{ backgroundImage: "url('/images/faq_section_bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="mx-auto max-w-(--content-width)">
        <h2 className="mb-5 md:mb-8 lg:mb-10 text-[clamp(1.5rem,1.2794rem+0.9804vw,1.75rem)] md:text-[36px] lg:text-[clamp(2rem,0.4589rem+1.8051vw,2.625rem)] leading-tight text-ink">
          Got Questions? <strong className="font-bold text-primary">We&apos;ve Got Answers.</strong>
        </h2>

        <div className="grid grid-cols-[400px_1fr] gap-2.5 max-[1024px]:grid-cols-1">
          <div className="flex flex-col bg-white/20 rounded-lg backdrop-blur-sm shadow-[0px_4px_8px_2px_rgba(0,0,0,0.15)] p-6">
            <p className="text-[18px] md:text-[22px] lg:text-[clamp(1.25rem,0.3254rem+1.083vw,1.625rem)] font-semibold text-[#18181B]">Categories</p>
            <p className="text-[12px] md:text-[14px] lg:text-[clamp(0.8125rem,0.5043rem+0.361vw,0.9375rem)] font-normal text-black/60 mt-1 md:mt-2 mb-4 md:mb-6">Choose from our specific range of topics to address all your digital banking queries.</p>
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
                    className={`flex items-center justify-between rounded-full px-5 py-3.5 text-left text-[12px] md:text-[14px] lg:text-[clamp(0.875rem,0.5668rem+0.361vw,1rem)] font-medium transition ${
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
              <p className="text-[18px] md:text-[20px] lg:text-[clamp(1.125rem,0.5086rem+0.722vw,1.375rem)] font-semibold text-[#18181B] mb-[0.6em]">Can't Find What You Need?</p>
              <Link
                href="/contact-us"
                className="float-left inline-flex gap-2 items-center justify-center text-center w-full rounded-full bg-accent px-[1em] py-[0.5555em] text-[14px] md:text-[16px] lg:text-[clamp(0.9375rem,0.4752rem+0.5415vw,1.125rem)] font-semibold text-white transition-all hover:bg-accent/90 hover:gap-6"
              >
                SUBMIT QUERIES
                <ArrowRight size={20} className="inline-block" />
              </Link>
            </div>
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
                    className={`flex w-full items-center gap-4 px-6 py-5 text-left ${isOpen && "bg-primary/10"}`}
                  >
                    <span className={`text-[14px] md:text-[16px] lg:text-[clamp(0.9375rem,0.4752rem+0.5415vw,1.125rem)] font-bold bg-white aspect-square rounded-full py-1 px-2 inline-flex items-center justify-center ${isOpen ? "text-[#134b96]" : "text-ink"}`}>{String(index + 1).padStart(2, "0")}</span>
                    <span className="flex-1 text-[18px] md:text-[20px] lg:text-[clamp(1.125rem,0.5086rem+0.722vw,1.375rem)] font-semibold text-[#18181B]">{faq.question}</span>
                  </button>
                  <Collapse open={isOpen}>
                    <div className={`px-6 py-5 text-[14px] md:text-[16px] lg:text-[clamp(0.9375rem,0.4752rem+0.5415vw,1.125rem)] font-medium text-[#52525B] border-t-2 ${isOpen ? "border-white" : "border-transparent"}`}>{faq.answer}</div>
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
