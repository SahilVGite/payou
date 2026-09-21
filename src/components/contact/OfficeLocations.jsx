"use client";

import { useState } from "react";
import { Mic, Search } from "lucide-react";
import Select from "../common/Select";
import BranchLocationIcon from "../../../public/icons/BranchLocationIcon";

const branches = [
  {
    name: "Chinchwad (Municipal Corporation), Haveli, Pune",
    address: "Office No. 3, 4, 5, 6, Vishal Arcade, Chapekar Chowk, Opp. to Sonigara Jwellers, Pimpri Chinchwad (Municipal Corporation), Haveli, Pune, 411033.",
    phone: "020 2735 0055",
    hours: "Open Now (Closes 5:00 PM)",
  },
  {
    name: "Bhigwan Chowk, Baramati, Pune",
    address: "Bhigwan Chowk, Baramati, Dist Pune Pin - 413102",
    phone: "+91 91755 35507",
    hours: "Open Now (Closes 5:00 PM)",
  },
  {
    name: "Laxminagar, Phaltan Satara",
    address: "Plot No-92, Laxminagar, Phaltan Dist Satara - 415523",
    phone: null,
    hours: "Open Now (Closes 5:00 PM)",
  },
];

export default function OfficeLocations() {
  const [branch, setBranch] = useState("");

  return (
    <section id="office-locations" className="px-[4%] secGapB">
      <div className="mx-auto max-w-(--content-width)">
        <h2 className="text-center text-[28px] text-ink md:text-[36px]">
          Our Office <strong className="font-bold text-primary">Locations</strong>
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-[14px] text-[#5f6a7b] md:text-[16px]">
          Find our offices and connect with our team for trusted financial consultation and assistance.
        </p>

        <div className="relative mt-10 overflow-hidden rounded-[18px] border border-[#dce1e7]">
          <iframe
            title="PayYou Advisory office locations"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.6800609653847!2d73.77792507519445!3d18.63345478248213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b932d1f77937%3A0xe62d3e7a99df03a9!2sPayYou%20Advisory%20Private%20Limited!5e0!3m2!1sen!2sin!4v1789967393661!5m2!1sen!2sin"
            width="100%"
            height="620"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="block w-full"
          />

          <div className="absolute bottom-4 left-4 top-4 flex w-[320px] max-w-[85%] flex-col overflow-hidden rounded-2xl bg-white/90 shadow-[0_10px_28px_rgba(16,25,43,0.18)] backdrop-blur-md max-[640px]:hidden">
            <div className="flex flex-col gap-3 p-4 pb-2">
              <Select
                value={branch}
                onChange={(event) => setBranch(event.target.value)}
                className="w-full rounded-full border border-[#dce1e7] bg-white px-4 py-2.5 text-[13px] text-ink outline-none"
                chevronClassName="text-[#8b93a1]"
              >
                <option value="">Branch</option>
                {branches.map((item) => (
                  <option key={item.name} value={item.name}>{item.name}</option>
                ))}
              </Select>
              <label className="flex items-center gap-2 rounded-full border border-[#dce1e7] bg-white px-4 py-2.5">
                <Search size={16} className="shrink-0 text-[#8b93a1]" />
                <input
                  type="text"
                  placeholder="Search by area, district, pin..."
                  className="w-full text-[13px] text-ink outline-none placeholder:text-[#8b93a1]"
                />
                <Mic size={16} className="shrink-0 text-[#8b93a1]" />
              </label>
            </div>
            <div className="flex-1 overflow-y-auto px-4 pb-4">
              {branches.map((item, index) => (
                <div key={item.name} className={`py-4 ${index !== branches.length - 1 ? "border-b border-[#eef0f3]" : ""}`}>
                  <p className="text-[11px] text-[#8b93a1]">Distance unavailable</p>
                  <p className="mt-1 flex items-start gap-2 text-[14px] font-bold text-primary">
                    <BranchLocationIcon size={16} className="mt-0.5 shrink-0" />
                    {item.name}
                  </p>
                  <p className="mt-1 text-[12px] leading-relaxed text-[#5f6a7b]">{item.address}</p>
                  {item.phone ? (
                    <p className="mt-1.5 text-[13px] font-bold text-primary">{item.phone}</p>
                  ) : null}
                  <p className="mt-1 text-[12px] font-bold text-ink">{item.hours}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
