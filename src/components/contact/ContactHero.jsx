import Link from "next/link";
import { Home, Phone } from "lucide-react";
import HomeLoanIcon from "../../../public/icons/HomeLoanIcon";

export default function ContactHero({
  title = "Contact Us",
  subtitle = "Connect with us through any of our support channels and our team will ensure you receive timely and helpful assistance.",
}) {
  return (
    <>
      <div className="border-b border-[#dce1e7] bg-white/10 px-[4%] py-3">
        <div className="mx-auto flex max-w-(--content-width) items-center gap-2 text-[13px] text-[#5f6a7b]">
          <Link href="/" className="flex items-center gap-1.5 text-[#999999]">
            <HomeLoanIcon size={14} color="#999999" /> Home
          </Link>
          <span>&gt;</span>
          <span className="flex items-center gap-1.5 font-semibold text-primary">
            <Phone size={14} /> Contact us
          </span>
        </div>
      </div>
      <section className="bg-primary px-[4%] py-[clamp(0.9375rem,-0.2885rem+5.4487vw,6.25rem)] text-center text-white">
        <div className="mx-auto max-w-(--content-width)">
          <h1 className="text-[clamp(1.5rem,1.2794rem+0.9804vw,1.75rem)] md:text-[36px] lg:text-[clamp(2rem,0.4589rem+1.8051vw,2.625rem)] font-bold">{title}</h1>
          <p className="mx-auto mt-3 text-[12px] md:text-[14px] lg:text-[clamp(0.875rem,0.5668rem+0.361vw,1rem)] text-white">
            {subtitle}
          </p>
        </div>
      </section>
    </>
  );
}
