"use client";

import { useState } from "react";
import Link from "next/link";
import { Mic, Phone, Search } from "lucide-react";
import Select from "../common/Select";
import BranchLocationIcon from "../../../public/icons/BranchLocationIcon";
import { branches } from "../../data/branches";

export default function OfficeLocations() {
  const [branch, setBranch] = useState("");

  return (
    <section id="office-locations" className="px-[4%] secGap">
      <div className="mx-auto max-w-(--content-width)">
        <h2 className="text-center text-[clamp(1.5rem,1.2794rem+0.9804vw,1.75rem)] md:text-[36px] lg:text-[clamp(2rem,0.4589rem+1.8051vw,2.625rem)] text-ink font-medium">
          Our Office <strong className="font-bold text-primary">Locations</strong>
        </h2>
        <p className="mx-auto mt-2.5 text-center text-[#4B5563] text-[clamp(0.875rem,0.6544rem+0.9804vw,1.125rem)] md:text-[18px] lg:text-[clamp(1rem,0.3836rem+0.722vw,1.25rem)]">
          Find our offices and connect with our team for trusted financial consultation and assistance.
        </p>

        <div className="relative mt-10 overflow-hidden rounded-[18px] [@media(max-width:1023px)]:flex [@media(max-width:1023px)]:flex-col-reverse [@media(max-width:1023px)]:gap-6">
          <iframe
            title="PayYou Advisory office locations"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.6800609653847!2d73.77792507519445!3d18.63345478248213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b932d1f77937%3A0xe62d3e7a99df03a9!2sPayYou%20Advisory%20Private%20Limited!5e0!3m2!1sen!2sin!4v1789967393661!5m2!1sen!2sin"
            width="100%"
            height="620"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="block w-full rounded-2xl [@media(max-width:1023px)]:aspect-square [@media(max-width:1023px)]:h-auto"
          />

          <div className="lg:absolute bottom-4 left-4 top-4 p-5 flex w-full max-w-full lg:max-w-[30%] flex-col overflow-hidden rounded-2xl bg-primary/15 shadow-[0px_4px_12px_rgba(0,0,0,0.0784314)] backdrop-blur-md">
            <div className="flex flex-col gap-4">
              <Select
                value={branch}
                onChange={(event) => setBranch(event.target.value)}
                className="w-full rounded-full border border-[#E5E7EB] bg-white px-[1.1428em] py-[0.8571em] text-[clamp(0.5625rem,0.3839rem+0.8929vw,0.8125rem)] md:text-[13px] lg:text-[clamp(0.75rem,0.4418rem+0.361vw,0.875rem)] text-[#4B5563] outline-none"
                chevronClassName="text-[#767676]"
              >
                <option value="">Branch</option>
                {branches.map((item) => (
                  <option key={item.name} value={item.name}>{item.name}</option>
                ))}
              </Select>
              <label className="flex items-center gap-2 rounded-full border border-[#dce1e7] bg-[#F3F4F6] px-[1.1428em] py-[1.1666em] text-[10px] md:text-[12px]">
                <Search size={18} className="shrink-0 text-[#767676]" />
                <input
                  type="text"
                  placeholder="Search by area, district, pin..."
                  className="w-full text-[10px] md:text-[12px] text-ink outline-none placeholder:text-[#4B5563]"
                />
                <Mic size={18} className="shrink-0 text-[#767676]" />
              </label>
            </div>
            <div className="thin-scrollbar flex-1 overflow-y-auto">
              {branches.map((item, index) => (
                <Link
                  key={item.name}
                  href={`/contact-us/branch/${item.slug}`}
                  className={`block py-4 transition ${index !== branches.length - 1 ? "border-b border-[#E5E7EB]" : ""}`}
                >
                  <div className="mt-1 flex items-center gap-2">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-glass-effect bg-[#F3F4F6]/20 shadow-[inset_0_1px_12px_rgba(255,255,255,0.4),inset_0_-1px_12px_rgba(255,255,255,0.25)] backdrop-blur-sm"><BranchLocationIcon size={16} className="mt-0.5 shrink-0" /></span>
                    <div>
                      <p className="text-[11px] text-[#4B5563]">Distance unavailable</p>
                      <p className="text-[12px] md:text-[14px] lg:text-[clamp(0.875rem,0.5668rem+0.361vw,1rem)] font-semibold text-primary leading-[1.3]">{item.name}</p>
                    </div>
                  </div>
                  <p
                    className="mt-3 text-[clamp(0.5625rem,0.3839rem+0.8929vw,0.8125rem)] md:text-[13px] lg:text-[clamp(0.75rem,0.4418rem+0.361vw,0.875rem)] text-[#4B5563]"
                    dangerouslySetInnerHTML={{ __html: item.address }}
                  />
                  {item.phone ? (
                    <div className="mt-1.5 flex gap-2 items-center"><Phone size={16} className="shrink-0 text-primary" /><p className="text-[clamp(0.5625rem,0.3839rem+0.8929vw,0.8125rem)] md:text-[13px] lg:text-[clamp(0.75rem,0.4418rem+0.361vw,0.875rem)] font-semibold text-primary">{item.phone}</p></div>
                  ) : null}
                  <p className="mt-1 text-[10px] md:text-[12px] font-semibold text-ink">{item.hours}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
