import Link from "next/link";
import { Home, Phone } from "lucide-react";

export default function ContactHero() {
  return (
    <>
      <div className="border-b border-[#dce1e7] bg-white px-[4%] py-3">
        <div className="mx-auto flex max-w-(--content-width) items-center gap-2 text-[13px] text-[#5f6a7b]">
          <Link href="/" className="flex items-center gap-1.5 hover:text-primary">
            <Home size={14} /> Home
          </Link>
          <span>&gt;</span>
          <span className="flex items-center gap-1.5 font-semibold text-primary">
            <Phone size={14} /> Contact us
          </span>
        </div>
      </div>
      <section className="bg-primary px-[4%] py-14 text-center text-white md:py-16">
        <div className="mx-auto max-w-(--content-width)">
          <h1 className="text-[32px] font-semibold md:text-[44px]">Contact Us</h1>
          <p className="mx-auto mt-3 max-w-xl text-[14px] text-white/85 md:text-[16px]">
            Connect with us through any of our support channels and our team will ensure you receive timely and helpful assistance.
          </p>
        </div>
      </section>
    </>
  );
}
