import Image from "next/image";
import Link from "next/link";

export default function GoalsCta() {
  return (
    <section
      className="relative px-[4%] secGap"
    >
      <div className="relative mx-auto grid max-w-(--content-width) rounded-[28px] overflow-hidden bg-primary grid-cols-[1.5fr_1fr] items-center gap-10 secGap px-[calc(var(--sec-gap)/2)] lg:px-(--sec-gap) [@media(min-width:1700px)]:px-[calc(var(--sec-gap)*2)] max-[1024px]:grid-cols-1" style={{ backgroundImage: "url('/images/our_smarter_loan_solutions_bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="text-white relative z-10">
          <h2 className="text-center md:text-left text-[28px] md:text-[36px] lg:text-[clamp(2rem,0.4589rem+1.8051vw,2.625rem)] font-semibold leading-tight max-[480px]:text-[26px]">
            Your Goals.
            <br />
            <strong className="font-bold">Our Smarter Loan Solutions.</strong>
          </h2>
          <p className="text-center md:text-left mt-4 max-w-lg text-[15px] leading-relaxed text-white/85">
            Whatever you&apos;re planning next, our advisors help you find the right loan, at the right rate, without
            the runaround.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <Link
              href="/contact-us"
              className="w-full md:w-fit text-center rounded-full bg-[#b11f24] px-8 py-3.5 text-xs font-bold text-white shadow-[0_5px_10px_rgba(177,31,36,0.25)] transition hover:-translate-y-0.5 hover:bg-[#961a1e]"
            >
              GET STARTED TODAY
            </Link>
            <Link
              href="/contact-us"
              className="w-full md:w-fit text-center rounded-full border border-white px-8 py-3.5 text-xs font-bold text-white transition hover:bg-white hover:text-[#134b96]"
            >
              TALK TO OUR EXPERT NOW
            </Link>
          </div>
        </div>
        <img src="/images/Our_Smarter_Loan_Solutions.png" alt="PayYou Advisory app" className="hidden lg:block absolute top-2 left-[55%] [@media(max-width:1366px)]:-translate-x-3 w-[60%] [@media(min-width:1700px)]:w-[55%] h-auto object-contain object-top-right" />
      </div>
    </section>
  );
}
