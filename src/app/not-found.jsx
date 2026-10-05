import Link from "next/link";
import PopupLink from "../components/popup/PopupLink";

const loanLinks = [
  ["Personal Loan", "/"],
  ["Business Loan", "/"],
  ["Home Loan", "/"],
  ["Loan Against Property", "/"],
];

export default function NotFound() {
  return (
    <section className="px-[4%] secGap">
      <div className="mx-auto flex max-w-(--content-width) flex-col items-start">
        <p className="text-[12px] md:text-[14px] lg:text-[clamp(0.875rem,0.5668rem+0.361vw,1rem)] font-semibold text-primary">
          404
        </p>
        <h1 className="mt-3 text-[clamp(1.5rem,1.2794rem+0.9804vw,1.75rem)] md:text-[36px] lg:text-[clamp(2rem,0.4589rem+1.8051vw,2.625rem)] font-medium leading-tight text-ink">
          This page could not be found
        </h1>
        <p className="mt-3 max-w-[62ch] text-[12px] md:text-[14px] lg:text-[clamp(0.875rem,0.5668rem+0.361vw,1rem)] text-[#4B5563]">
          The address may be outdated. Go back to Home, or choose a loan service below.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-block rounded-full bg-primary px-[2.8em] py-[0.8em] text-[12px] md:text-[14px] lg:text-[clamp(0.8125rem,0.5043rem+0.361vw,0.9375rem)] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0e3a75]"
          >
            Back to Home
          </Link>
          <PopupLink
            href="/contact-us"
            source={{ page: "404", section: "Missing page", button: "APPLY NOW" }}
            className="inline-block rounded-full bg-accent px-[2.8em] py-[0.8em] text-[12px] md:text-[14px] lg:text-[clamp(0.8125rem,0.5043rem+0.361vw,0.9375rem)] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#961a1e]"
          >
            APPLY NOW
          </PopupLink>
        </div>
        <ul className="mt-8 flex flex-wrap gap-3">
          {loanLinks.map(([label, href]) => (
            <li key={label}>
              <Link
                href={href}
                className="inline-block rounded-full border border-primary px-[2em] py-[0.7em] text-[12px] md:text-[14px] lg:text-[clamp(0.8125rem,0.5043rem+0.361vw,0.9375rem)] font-semibold text-primary transition hover:bg-primary hover:text-white"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
