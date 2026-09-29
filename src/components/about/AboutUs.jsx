import React from "react";

const stats = [
    ["25+", "Leading Partners"],
    ["100%", "Customer Satisfaction"],
    ["5", "Years of Experience"],
    ["100+", "Loan Processed"],
];

const AboutUs = () => {
  return (
    <section className="relative secGap px-[4%] bg-[#C4D2E5]/50">
        <img src="/images/about_bg.png" alt="About Us" className="absolute inset-0 object-cover object-bottom w-full h-full opacity-40" />
      <div className="relative z-10 max-w-(--content-width) mx-auto flex items-stretch justify-between [@media(max-width:1023px)]:flex-col-reverse gap-6 lg:gap-[clamp(1.875rem,-0.2679rem+3.3482vw,3.75rem)]">
        <img
          src="/images/aboutImg.png"
          alt="About Us"
          className="md:w-[65%] lg:w-[36.364%] mx-auto rounded-2xl object-cover"
        />
        <div className="flex flex-col">
          <h2 className="mb-[0.3809em] text-[clamp(1.5rem,1.2794rem+0.9804vw,1.75rem)] md:text-[36px] lg:text-[clamp(2rem,0.4589rem+1.8051vw,2.625rem)] leading-tight text-ink">
            Your Trusted Partner for <br />
            <span className="font-bold text-primary">Smarter Financial Decisions</span>
          </h2>
          <p className="mb-[2em] text-[14px] md:text-[16px] lg:text-[clamp(0.9375rem,0.4752rem+0.5415vw,1.125rem)] text-[#4B5563]">
            At PayYou Advisory, we simplify your financial journey with expert
            guidance, transparent solutions, and personalized support. We
            connect you with suitable loan options from trusted lending
            institutions, helping you understand rates, eligibility, and
            repayment terms clearly. From application to approval, we make every
            step simple and hassle-free, empowering you to make informed
            financial decisions and build a smarter financial future.
          </p>
          <div
            className="mt-auto grid grid-cols-4 gap-5 max-[1250px]:grid-cols-2"
          >
            {stats.map(([value, label]) => (
              <div
                key={label}
                className="bg-glass-effect text-center flex items-center justify-center gap-4 rounded-xl bg-primary/08 backdrop-blur-xs p-2 lg:p-3 shadow-[2px_2px_4px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(16,25,43,0.18)]"
              >
                <div>
                  <p className="m-0 text-[clamp(1.375rem,1.2857rem+0.4464vw,1.5rem)] md:text-[30px] lg:text-[clamp(1.375rem,-0.7825rem+2.5271vw,2.25rem)] font-semibold text-ink leading-[1.2]">
                    {value}
                  </p>
                  <p className="m-0 text-[clamp(0.5625rem,0.3839rem+0.8929vw,0.8125rem)] md:text-[13px] lg:text-[clamp(0.625rem,0.0086rem+0.722vw,0.875rem)] uppercase tracking-wider text-[#4B5563]">
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
