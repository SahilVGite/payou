import Image from "next/image";
import PopupLink from "../popup/PopupLink";
export default function GoalsCta({className=""}) {
  return (
    <section
      className={`relative px-[4%] secGap ${className}`}
    >
      <div className="relative mx-auto grid max-w-(--content-width) rounded-[28px] overflow-hidden bg-primary grid-cols-[1.5fr_1fr] items-center gap-10 secGap px-[calc(var(--sec-gap)/2)] lg:px-(--sec-gap) [@media(min-width:1700px)]:px-[calc(var(--sec-gap)*2)] max-[1024px]:grid-cols-1" style={{ backgroundImage: "url('/images/our_smarter_loan_solutions_bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="text-white relative z-10">
          <h2 className="text-left text-[clamp(1.5rem,1.2794rem+0.9804vw,1.75rem)] md:text-[36px] lg:text-[clamp(2rem,0.4589rem+1.8051vw,2.625rem)] font-semibold leading-tight max-[480px]:text-[26px]">
            Your Goals.
            <br />
            <strong className="font-bold">Our Smarter Loan Solutions.</strong>
          </h2>
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <PopupLink
              href="/contact-us"
              source={{ page: "Home", section: "Goals", button: "GET STARTED TODAY" }}
              className="w-full md:w-fit text-center rounded-full border border-white px-8 py-[0.75em] text-[12px] md:text-[14px] lg:text-[clamp(0.875rem,0.5668rem+0.361vw,1rem)] font-bold text-white transition hover:bg-white hover:text-[#134b96]"
            >
              GET STARTED TODAY
            </PopupLink>
            <PopupLink
              href="/contact-us"
              source={{ page: "Home", section: "Goals", button: "TALK TO OUR EXPERT NOW" }}
              className="w-full md:w-fit text-center rounded-full bg-[#b11f24] px-8 py-[0.75em] text-[12px] md:text-[14px] lg:text-[clamp(0.875rem,0.5668rem+0.361vw,1rem)] font-bold text-white shadow-[0_5px_10px_rgba(177,31,36,0.25)] transition hover:-translate-y-0.5 hover:bg-[#961a1e]"
            >
              TALK TO OUR EXPERT NOW
            </PopupLink>
          </div>
        </div>
        <img src="/images/Our_Smarter_Loan_Solutions.png" alt="PayYou Advisory app" className="hidden lg:block absolute bottom-0 right-0 max-w-[42%] [@media(min-width:1400px)]:max-w-[35%]  h-auto object-contain object-bottom-right" />
      </div>
    </section>
  );
}
