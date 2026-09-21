import Link from "next/link";

export default function NextStepBanner() {
  return (
    <section className="px-[4%] secGapB">
      <div className="mx-auto max-w-(--content-width) overflow-hidden rounded-[28px] bg-[linear-gradient(120deg,#0c2f5c_0%,#134b96_55%,#2e6fc2_100%)] px-8 py-14 md:px-14 md:py-16">
        <span className="inline-block rounded-full bg-white px-4 py-1.5 text-[11px] font-bold text-primary md:text-[13px]">
          YOUR TRUSTED PARTNER
        </span>
        <h2 className="mt-4 max-w-xl text-[26px] font-medium leading-tight text-white md:text-[34px]">
          Let&apos;s take the <strong className="font-bold">Next Step Together</strong>
        </h2>
        <p className="mt-3 max-w-lg text-[14px] text-white/85 md:text-[15px]">
          Get expert advice, personalized solutions and the right loan options to achieve your financial goals.
        </p>
        <Link
          href="/contact-us"
          className="mt-7 inline-block rounded-full bg-accent px-8 py-3.5 text-[12px] font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#961a1e]"
        >
          TALK TO AN EXPERT
        </Link>
      </div>
    </section>
  );
}
