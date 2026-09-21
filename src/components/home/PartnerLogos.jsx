import Image from "next/image";

const partners = [
  { name: "Piramal Capital & Housing Fin", logo: "/images/institution_marquee_1.png" },
  { name: "Mahindra Finance", logo: "/images/institution_marquee_2.png" },
  { name: "Muthoot Finance", logo: "/images/institution_marquee_3.png" },
  { name: "L&T Finance", logo: "/images/institution_marquee_4.png" },
  { name: "SBI", logo: "/images/institution_marquee_5.png" },
  { name: "Axis Bank", logo: "/images/institution_marquee_6.png" },
  { name: "Yes Bank", logo: "/images/institution_marquee_7.png" },
  { name: "Kotak Mahindra Bank", logo: "/images/institution_marquee_8.png" },
];

// Repeated so the track's midpoint lines up exactly with its end, giving a seamless -50% loop.
const marqueeLogos = [...partners, ...partners];

export default function PartnerLogos() {
  return (
    <section className="overflow-hidden bg-primary secGap px-[4%]">
      <div className="mx-auto max-w-(--content-width)">
        <h2 className="mb-2.5 text-left md:text-center text-[clamp(1.5rem,1.2794rem+0.9804vw,1.75rem)] md:text-[36px] lg:text-[clamp(2rem,0.4589rem+1.8051vw,2.625rem)] text-white">
          Backed by 50+ Top Banks, <strong className="font-bold">NBFCs &amp; Fintech Institutions</strong>
        </h2>
        <p className="mb-(--sec-gap) text-left md:text-center text-[clamp(0.875rem,0.6544rem+0.9804vw,1.125rem)] md:text-[18px] lg:text-[clamp(1rem,0.3836rem+0.722vw,1.25rem)] text-[#F0F5FE]">
          Authorized Direct Selling Partner operating under strict Reserve Bank of India compliance guidelines.
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="marquee-track flex w-max gap-6">
          {marqueeLogos.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex h-[90px] w-[190px] shrink-0 items-center justify-center rounded-xl bg-white px-6 shadow-[0_6px_16px_rgba(0,0,0,0.15)]"
            >
              <div className="relative h-12 w-full">
                <Image src={partner.logo} alt={partner.name} fill className="object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
