"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ChevronDown, Plus } from "lucide-react";
import Collapse from "../common/Collapse";
import Dropdown from "../common/Dropdown";

const categories = ["General FAQ's", "Loans", "Insurance", "Investment", "EMI"];

const faqsByCategory = {
  "General FAQ's": [
    {
      question: "What is Loan Advisory, and how does PayYouAdvisory help me to get a loan?",
      answer:
        "Loan advisory is a financial solution that analyzes your credit profile and offers the best loan for you. At PayYouAdvisory, connect directly with the top loan lenders, banks or NBFCs, for the best in terms of approval, ROI and tenures. This way, instead of you applying randomly at multiple places, you get an all-in-one solution.",
    },
    {
      question: "Which are the banks & NBFCs associated with PayYouAdvisory?",
      answer:
        "We are an authorized loan advisory and are associated with 25+ banks and NBFCs regulated by RBI. Thus you get to compare multiple options at one place. We clearly outline every step to ensure you encounter no surprises.",
    },
    {
      question: "Is there any cost for PayYouAdvisory's loan advisory service?",
      answer: "No. Our loan advisory service is completely free to borrowers. We are paid by our lending partners, not you.",
    },
    {
      question: "Can you get a loan online without going into a branch?",
      answer:
        "Yes. Apply from anywhere. The whole process, from checking loan eligibility to final disbursal, is digital, so you can apply from anywhere.",
    },
    {
      question: "What kind of loans does PayYouAdvisory offer?",
      answer:
        "As your one-stop loan advisory, we help with personal loans, business loans, home loans, loans against property, gold loans, vehicle loans, education loans, and more.",
    },
  ],
  Loans: [
    {
      question: "How do I know if I'm eligible for a loan?",
      answer:
        "Your income, other commitments, credit score, and the lender's internal criteria all contribute to whether you will be eligible for a loan. We have a dedicated loan eligibility calculator that gives a quick indication before you apply.",
    },
    {
      question: "What documents are required for a personal or business loan?",
      answer:
        "ID proof, address proof, income proof, and bank statements are usually required. The exact list varies from loan type to lender, and we clarify during loan assistance.",
    },
    {
      question: "Can I compare interest rates from different lenders before applying?",
      answer:
        "Yes, you can compare interest rates and different loan options from our multiple lenders side-by-side so you can make an informed decision with full visibility.",
    },
    {
      question: "What is the difference between a secured loan and an unsecured loan?",
      answer:
        "Secured loans are backed by collateral (property, gold, etc.) and typically carry lower rates. Unsecured loans (such as most personal loans) do not require collateral, but they rely more on your credit profile.",
    },
    {
      question: "How long does it take for loan disbursement after approval?",
      answer:
        "The lender and loan type can impact how fast digital pre-approval leads to disbursement, which can be as quick as 24–48 hours.",
    },
  ],
  Insurance: [
    {
      question: "Do I need to have insurance if I have a loan?",
      answer:
        "It is better to take loan protection or term insurance so that you do not put your family in a burden with the EMI repayment in case of any unforeseen event.",
    },
    {
      question: "What is the difference between term insurance and life insurance?",
      answer:
        "Term insurance is pure risk cover and available at lower premiums. Life insurance may have savings or investment components along with the cover.",
    },
    {
      question: "Can PayYouAdvisory help me select the best health insurance plan?",
      answer: "Yes. We compare health insurance plans as part of our financial solutions based on your coverage needs and budget.",
    },
    {
      question: "Is motor insurance compulsory in India?",
      answer:
        "Yes, all vehicles are legally required to have third-party motor insurance. While comprehensive cover is not required, it is recommended.",
    },
    {
      question: "Does PayYouAdvisory charge extra fees for insurance advice?",
      answer: "No. Our insurance advice, as with our loan advice, is free of charge to you.",
    },
  ],
  Investment: [
    {
      question: "What are PayYouAdvisory investment options?",
      answer:
        "We help you with fixed deposits, recurring deposits, SIPs, and savings/current account solutions. All these options make investments easy and low on risk.",
    },
    {
      question: "Is fixed deposit a good investment option in 2026?",
      answer: "FDs are a safe bet for guaranteed, low-risk returns. These are perfect if you're more focused on capital safety than high growth.",
    },
    {
      question: "Can I start a SIP from my loan EMI?",
      answer:
        "Yes. Many borrowers have small recurring investments or FD-linked SIPs as part of their savings plan along with the EMI payments so that their monthly cash flow is not affected.",
    },
    {
      question: "Does PayYouAdvisory help with investment planning, or is it only loans?",
      answer:
        "Both. As an experienced loan advisor, we focus on loans primarily but also advise you on simple investment options to strengthen your overall financial position.",
    },
    {
      question: "What is the minimum amount to start investing with PayYouAdvisory?",
      answer: "For most borrowers, the minimums for recurring deposits and daily saving plans are low enough to make them accessible.",
    },
  ],
  EMI: [
    {
      question: "How is my EMI calculated each month?",
      answer:
        "The EMI is determined by your loan amount, interest rate, and tenure. Use our free loan EMI calculator to estimate it instantly before applying.",
    },
    {
      question: "Can I prepay my loan and lower my EMI?",
      answer:
        "Most lenders provide the option to prepay or make a part payment to reduce your EMI or tenure. We will help you understand terms, as they vary based on the lender and the type of loan.",
    },
    {
      question: "What if I default on an EMI payment?",
      answer:
        "Missing an EMI can impact your credit score and may attract late fees. If you know you will be delayed in payment, call us early and we will help you explore options.",
    },
    {
      question: "Can I change my EMI date post disbursement of the loan?",
      answer:
        "Some lenders allow you to change the date of your EMI. It is contingent upon the individual bank's policy, and we as your loan advisor can check this for you.",
    },
    {
      question: "Does longer tenure always mean lower EMIs?",
      answer: "Longer tenure lowers your EMI but raises the total interest payable. Our EMI calculator helps you compare tenures and choose the optimum level.",
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
          PayYouAdvisory FAQs: <strong className="font-bold text-primary">Everything You Need to Know</strong>
        </h2>

        <div className="grid grid-cols-[400px_1fr] gap-2.5 max-[1024px]:grid-cols-1">
          <div className="hidden flex-col bg-white/20 rounded-lg backdrop-blur-sm shadow-[0px_4px_8px_2px_rgba(0,0,0,0.15)] p-6 lg:flex">
            <p className="text-[18px] md:text-[22px] lg:text-[clamp(1.25rem,0.3254rem+1.083vw,1.625rem)] font-semibold text-[#18181B]">Categories</p>
            <p className="text-[12px] md:text-[14px] lg:text-[clamp(0.8125rem,0.5043rem+0.361vw,0.9375rem)] font-normal text-black/60 mt-1 md:mt-2 mb-4 md:mb-6">Browse by topic to find answers relevant to your loan, insurance, or investment questions.</p>
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
