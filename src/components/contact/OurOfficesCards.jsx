import { MapPin, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";
import HomeLoanIcon from "../../../public/icons/HomeLoanIcon";
import Link from "next/link";

const OurOffices = [
  {
    title: "Corporate Office 1",
    phone: "020 2735 0055",
    address:
      "Office No. 3, 4, 5, 6, Vishal Arcade, Chapekar Chowk, Opp. to Sonigara Jwellers, Pimpri Chinchwad (Municipal Corporation), Haveli, Pune, 411033.",
    image: "/images/ourOfficesBg1.png",
  },
  {
    title: "Corporate Office 2",
    phone: "+91 91755 35507",
    address: "Bhigwan Chowk, Baramati, Dist Pune Pin - 413102",
    image: "/images/ourOfficesBg1.png",
  },
  {
    title: "Registered Office",
    location: "Maharashtra, India",
    address: "Bhigwan Chowk, Baramati, Dist Pune Pin - 413102",
    image: "/images/ourOfficesBg2.png",
  },
];

// Glass border: a 1px gradient ring on ::before, masked so only the padding area shows
const glassBorderClass =
  "relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:rounded-[inherit] before:p-px before:pointer-events-none before:bg-[linear-gradient(136deg,#ffffff_0%,#ffffffba_25%,#fff0_38%_55%),linear-gradient(325deg,#ffffff_0%,#ffffffba_25%,#fff0_38%_55%)] before:[-webkit-mask-image:linear-gradient(#fff_0_0),linear-gradient(#fff_0_0)] before:[mask-image:linear-gradient(#fff_0_0),linear-gradient(#fff_0_0)] before:[-webkit-mask-clip:content-box,border-box] before:[mask-clip:content-box,border-box] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude]";

const pillClass = `${glassBorderClass} flex items-center gap-2 rounded-2xl bg-white/10 px-4 lg:px-5 py-[0.9333em] text-[13px] md:text-[14px] lg:text-[clamp(0.8125rem,0.5043rem+0.361vw,0.9375rem)] font-inter font-bold text-white backdrop-blur-xs whitespace-nowrap`;

const OurOfficesCards = () => {
  return (
    <section
      className="secGap px-[4%]"
      style={{
        backgroundImage: "url('/images/fourSimpleStepsBg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto max-w-(--content-width)">
        <h2 className="mb-2.5 text-left md:text-center text-[clamp(1.5rem,1.2794rem+0.9804vw,1.75rem)] md:text-[36px] lg:text-[clamp(2rem,0.4589rem+1.8051vw,2.625rem)] text-ink">
          <strong className="font-bold text-primary">Our Loan Advisory Offices</strong>
        </h2>
        <p className="mx-auto text-left md:text-center text-[clamp(0.875rem,0.6544rem+0.9804vw,1.125rem)] md:text-[18px] lg:text-[clamp(1rem,0.3836rem+0.722vw,1.25rem)] text-[#4B5563] mb-[1.8em] lg:mb-[2.4em] max-w-[50ch]">
          Prefer to talk face-to-face? Visit any of our offices for expert loan and financial guidance.
        </p>
        <div className="flex flex-wrap justify-center items-stretch gap-7">
          {OurOffices.map((office) => (
            <div
              key={office.title}
              className="relative overflow-hidden flex flex-col w-full max-w-full md:max-w-[calc(50%-15px)] lg:max-w-[calc(33.333%-20px)] min-h-[300px] bg-primary rounded-2xl px-6 py-8 lg:px-[1.875rem] shadow-[0_8px_24px_rgba(22,75,151,0.25)] transition hover:shadow-[0_12px_32px_rgba(22,75,151,0.4)]"
            >
              <img src={office.image} aria-hidden="true" alt="" className="pointer-events-none absolute bottom-0 right-0 w-[45%] max-w-[230px] h-auto" />

              <div className="relative flex justify-between items-center gap-3">
                <span className="bg-glass-effect flex shrink-0 p-3 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-xs">
                  <HomeLoanIcon size={20} className="w-5 h-auto" color="#ffffff" />
                </span>
                {office.phone ? (
                  <a
                    href={`tel:${office.phone.replace(/\s/g, "")}`}
                    className={pillClass}
                  >
                    <Phone className="size-4 lg:size-5 shrink-0" />
                    {office.phone}
                  </a>
                ) : (
                  <span className={pillClass}>
                    <MapPin className="size-4 lg:size-5 shrink-0" />
                    {office.location}
                  </span>
                )}
              </div>

              <h3 className="relative mt-4 text-[clamp(1.125rem,0.9044rem+0.9804vw,1.375rem)] md:text-[20px] lg:text-[clamp(1.125rem,0.5086rem+0.722vw,1.375rem)] font-semibold text-white">
                {office.title}
              </h3>
              <p className="relative mt-3 max-w-[82%] text-[13px] md:text-[14px] lg:text-[clamp(0.8125rem,0.5043rem+0.361vw,0.9375rem)] leading-relaxed text-white">
                {office.address}
              </p>

              <div className="relative mt-auto pt-8">
                <Link
                  href="/contact-us#office-locations"
                  className="inline-block rounded-full bg-accent px-7 py-3 md:px-8 lg:px-9 lg:py-3.5 text-center text-[12px] md:text-[14px] lg:text-[clamp(0.8125rem,0.5043rem+0.361vw,0.9375rem)] font-semibold uppercase text-white shadow-[0_6px_16px_rgba(0,0,0,0.2)] transition hover:brightness-110"
                >
                  Get Direction
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurOfficesCards;
