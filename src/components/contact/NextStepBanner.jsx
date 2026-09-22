import Link from "next/link";

export default function NextStepBanner() {
  return (
    <section className="px-[4%] py-[clamp(1.25rem,0.7482rem+1.4599vw,2.5rem)] relative">
      <img src="/images/NextStepBannerBg.png" alt="NextStepBannerBg" className="absolute inset-0 w-full h-full z-0 object-cover" />
      <div className="absolute inset-0 z-10 [@media(max-width:1023px)]:backdrop-blur-2xl bg-[linear-gradient(87.59deg,#134B96_34.56%,#326BB7_50.42%,rgba(19,75,150,0)_74.68%)]" />
      <div className="mx-auto max-w-(--content-width) relative z-10">
        <span className="inline-block rounded-full bg-white px-[1.0769em] py-[0.5384em] font-semibold text-primary text-[10px] md:text-[12px] lg:text-[clamp(0.6875rem,0.3793rem+0.361vw,0.8125rem)]">
          YOUR TRUSTED PARTNER
        </span>
        <h2 className="mt-3 text-[clamp(1.5rem,1.2794rem+0.9804vw,1.75rem)] md:text-[36px] lg:text-[clamp(2rem,0.4589rem+1.8051vw,2.625rem)] font-medium leading-tight text-white">
          Let's take the <strong className="font-bold">Next Step Together</strong>
        </h2>
        <p className="mt-3 text-white max-w-[70ch] text-[12px] md:text-[14px] lg:text-[clamp(0.875rem,0.5668rem+0.361vw,1rem)]">
          Get expert advice, personalized solutions and the right loan options to achieve your financial goals.
        </p>
        <Link
          href="/contact-us"
          className="mt-3 inline-block rounded-full bg-accent px-[2.8em] py-[0.8em] text-[12px] md:text-[14px] lg:text-[clamp(0.8125rem,0.5043rem+0.361vw,0.9375rem)] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#961a1e]"
        >
          TALK TO AN EXPERT
        </Link>
      </div>
    </section>
  );
}
