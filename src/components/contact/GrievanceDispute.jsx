import Link from "next/link";

const cards = [
  {
    title: "Grievance Redressal",
    description: "In case you are not satisfied with the response, you can contact our Grievance Redressal Officer",
    image: "/images/grievance_redressal.png",
    bg: "bg-[#eaf1fb]",
    cta: "KNOW MORE",
  },
  {
    title: "Raise a Dispute",
    description: "In addition to reporting unauthorized credit card transactions or electronic banking transactions to the bank, you can also report the incident to National Cyber Crime Helpline Number at 1930.",
    image: "/images/raise_dispute.png",
    bg: "bg-[#fbeff0]",
    cta: null,
  },
];

export default function GrievanceDispute() {
  return (
    <section className="px-[4%] secGapB">
      <div className="mx-auto grid max-w-(--content-width) gap-6 md:grid-cols-2">
        {cards.map(({ title, description, image, bg, cta }) => (
          <div key={title} className={`relative overflow-hidden rounded-[22px] ${bg} p-8 pr-[42%] min-h-[260px]`}>
            <h3 className="text-[22px] font-semibold text-ink md:text-[24px]">{title}</h3>
            <p className="mt-3 text-[14px] leading-relaxed text-[#5f6a7b]">{description}</p>
            {cta ? (
              <Link
                href="/contact-us"
                className="mt-6 inline-block rounded-full bg-accent px-8 py-3 text-[12px] font-bold text-white transition hover:bg-[#961a1e]"
              >
                {cta}
              </Link>
            ) : null}
            <img
              src={image}
              alt={title}
              className="pointer-events-none absolute bottom-0 right-0 h-[90%] w-auto object-contain object-bottom"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
