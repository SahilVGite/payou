import Link from "next/link";

const cards = [
  {
    title: "Grievance Redressal",
    description:
      "In case you are not satisfied with the response, you can contact our Grievance Redressal Officer",
    image: "/images/grievance_redressal.png",
    bg: "bg-primary/6",
    cta: "KNOW MORE",
  },
  {
    title: "Raise a Dispute",
    description:
      "In addition to reporting unauthorized credit card transactions or electronic banking transactions to the bank, you can also report the incident to National Cyber Crime Helpline Number at 1930.",
    image: "/images/raise_dispute.png",
    bg: "bg-[rgba(177,31,36,0.065)]",
    cta: null,
  },
];

export default function GrievanceDispute() {
  return (
    <section
      className="px-[4%] secGap"
      style={{
        backgroundImage: "url('/images/faq_section_bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto grid max-w-(--content-width) gap-6 lg:grid-cols-2">
        {cards.map(({ title, description, image, bg, cta }) => (
          <div
            key={title}
            className={`relative overflow-hidden rounded-4xl ${bg} p-8 md:pb-50 md:pr-32 backdrop-blur-lg shadow-[inset_5px_5px_12px_rgba(0,0,0,0.1)]`}
          >
            <h3 className="text-[clamp(1.375rem,1.2857rem+0.4464vw,1.5rem)] md:text-[26px] lg:text-[clamp(2.25rem,2.5rem+-0.3125vw,2.125rem)] font-semibold text-ink">
              {title}
            </h3>
            <p className="mt-3 text-[clamp(1rem,0.7794rem+0.9804vw,1.25rem)] md:text-[20px] lg:text-[clamp(1.125rem,0.5086rem+0.722vw,1.375rem)] leading-relaxed text-[#4B5563] tracking-[-0.0227em]">
              {description}
            </p>
            {cta ? (
              <Link
                href="/contact-us"
                className="mt-10 inline-block rounded-full bg-accent text-center [@media(max-width:767px)]:w-full px-[5em] lg:px-[10.4666em] py-[0.9411em] text-[12px] md:text-[14px] lg:text-[clamp(0.8125rem,0.5043rem+0.361vw,0.9375rem)] font-semibold text-white transition hover:bg-accent"
              >
                {cta}
              </Link>
            ) : null}
            <img
              src={image}
              alt={title}
              className="pointer-events-none absolute bottom-0 right-6 h-[90%] w-auto object-contain object-bottom-right max-w-[40%] [@media(max-width:767px)]:hidden"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
