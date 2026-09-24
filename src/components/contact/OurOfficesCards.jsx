import { MapPin, Phone, TelescopeIcon } from "lucide-react";
import React from "react";

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
          Visit <strong className="font-bold text-primary">Our Offices</strong>
        </h2>
        <p className="mx-auto text-left md:text-center text-[clamp(0.875rem,0.6544rem+0.9804vw,1.125rem)] md:text-[18px] lg:text-[clamp(1rem,0.3836rem+0.722vw,1.25rem)] text-[#4B5563] mb-[2em] lg:mb-[3em] max-w-[50ch]">
          Meet our experts at any of our office locations for personalized
          financial consultation and support. approval.
        </p>
        <div className="flex flex-wrap justify-center items-stretch gap-7">
            <div className="bg-glass-effect w-full max-w-full md:max-w-[calc(50%-15px)] lg:max-w-[calc(33.333%-20px)] bg-[#E3E5EA]/20 rounded-2xl px-6 py-8 backdrop-blur-xs shadow-[0_8px_24px_rgba(227,229,234,0.55),inset_0_1px_0_#E3E5EA] hover:shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px;]">
                <div className="flex justify-between items-center gap-1.5">
                    <h3 className="text-[clamp(0.875rem,0.6544rem+0.9804vw,1.125rem)] md:text-[clamp(0.875rem,0.125rem+1.5625vw,1.125rem)] lg:text-[clamp(0.75rem,0.2508rem+0.624vw,1rem)] font-bold text-primary">Corporate Office 1</h3>
                    <a href="tel:02027350055" className="text-[clamp(0.5625rem,0.3839rem+0.8929vw,0.8125rem)] md:text-[13px] lg:text-[clamp(0.75rem,0.4418rem+0.361vw,0.875rem)] text-primary font-inter font-bold flex gap-1.5 items-center"><Phone size={20} /> 020 2735 0055</a>
                </div>
                <p className="text-[12px] md:text-[14px] lg:text-[clamp(0.75rem,0.6071rem+0.2232vw,0.875rem)] mt-[0.625em] text-[#4B5563]/56 font-medium">Office No. 3, 4, 5, 6, Vishal Arcade,<br />Chapekar Chowk, Opp. to Sonigara Jwellers, Pimpri <br />Chinchwad (Municipal Corporation), Haveli, Pune, 411033.</p>
            </div>
            <div className="bg-glass-effect w-full max-w-full md:max-w-[calc(50%-15px)] lg:max-w-[calc(33.333%-20px)] bg-[#E3E5EA]/20 rounded-2xl px-6 py-8 backdrop-blur-xs shadow-[0_8px_24px_rgba(227,229,234,0.55),inset_0_1px_0_#E3E5EA] hover:shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px;]">
                <div className="flex justify-between items-center gap-1.5">
                    <h3 className="text-[clamp(0.875rem,0.6544rem+0.9804vw,1.125rem)] md:text-[clamp(0.875rem,0.125rem+1.5625vw,1.125rem)] lg:text-[clamp(0.75rem,0.2508rem+0.624vw,1rem)] font-bold text-primary">Corporate Office 2</h3>
                    <a href="tel:+919175535507" className="text-[clamp(0.5625rem,0.3839rem+0.8929vw,0.8125rem)] md:text-[13px] lg:text-[clamp(0.75rem,0.4418rem+0.361vw,0.875rem)] text-primary font-inter font-bold flex gap-1.5 items-center"><Phone size={20} /> +91 91755 35507</a>
                </div>
                <p className="text-[12px] md:text-[14px] lg:text-[clamp(0.75rem,0.6071rem+0.2232vw,0.875rem)] mt-[0.625em] text-[#4B5563]/56 font-medium">Bhigwan Chowk, Baramati, Dist Pune Pin - 413102</p>
            </div>
            <div className="bg-glass-effect w-full max-w-full md:max-w-[calc(50%-15px)] lg:max-w-[calc(33.333%-20px)] bg-[#E3E5EA]/20 rounded-2xl px-6 py-8 backdrop-blur-xs shadow-[0_8px_24px_rgba(227,229,234,0.55),inset_0_1px_0_#E3E5EA] hover:shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px;]">
                <div className="flex justify-between items-center gap-1.5">
                    <h3 className="text-[clamp(0.875rem,0.6544rem+0.9804vw,1.125rem)] md:text-[clamp(0.875rem,0.125rem+1.5625vw,1.125rem)] lg:text-[clamp(0.75rem,0.2508rem+0.624vw,1rem)] font-bold text-primary">Registered Office</h3>
                    <a href="tel:02027350055" className="text-[clamp(0.5625rem,0.3839rem+0.8929vw,0.8125rem)] md:text-[13px] lg:text-[clamp(0.75rem,0.4418rem+0.361vw,0.875rem)] text-primary font-inter font-bold flex gap-1.5 items-center"><MapPin size={20} /> Maharashtra, India</a>
                </div>
                <p className="text-[12px] md:text-[14px] lg:text-[clamp(0.75rem,0.6071rem+0.2232vw,0.875rem)] mt-[0.625em] text-[#4B5563]/56 font-medium">Plot No-92, Laxminagar, Phaltan Dist Satara - 415523</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default OurOfficesCards;
