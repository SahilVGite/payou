const steps = [
    {
        title: "Apply",
        text: "Found a role that matches your skills and interests? Submit your application and resume to get started.",
    },
    {
        title: "Connect",
        text: "Our team will review your profile and connect with you if your experience matches the role.",
    },
    {
        title: "Decide",
        text: "Meet the team, explore the opportunity, and go through the interview process.",
    },
    {
        title: "Begin",
        text: "Complete the final steps and start your new career journey with PayYou.",
    },
];

// Full-bleed blue section with four frosted-glass step cards (numbered glass badge + title +
// copy). 1 column on phones, 2 on tablets, 4 from xl.
export default function HiringProcess() {
    return (
        <section className="secGap bg-primary px-[4%] text-white">
            <div className="mx-auto max-w-(--content-width)">
                <h2 className="mb-2.5 text-[clamp(1.5rem,1.2794rem+0.9804vw,1.75rem)] md:text-[36px] lg:text-[clamp(2rem,0.4589rem+1.8051vw,2.625rem)] leading-tight">
                    The Hiring <strong className="font-bold">Process</strong>
                </h2>
                <p className="mb-[1.8em] lg:mb-[2.2em] text-[clamp(0.875rem,0.6544rem+0.9804vw,1.125rem)] md:text-[18px] lg:text-[clamp(1rem,0.3836rem+0.722vw,1.25rem)] leading-[1.45] text-white">
                    The job application process can be overwhelming and we want to simplify it for you. Here&apos;s a
                    step-by-step glimpse into what&apos;s in store.
                </p>

                <ol className="grid gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 xl:gap-[clamp(1.5rem,0.2rem+1.7vw,2.125rem)]">
                    {steps.map(({ title, text }, index) => (
                        <li
                            key={title}
                            className="flex gap-4 lg:gap-5 rounded-[19px] border border-white/30 bg-[linear-gradient(135deg,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0.05)_55%,rgba(255,255,255,0.08)_100%)] p-4 pr-5 pb-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_10px_24px_rgba(8,24,56,0.18)] backdrop-blur-sm"
                        >
                            <span className="bg-glass-effect mt-1 flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-[16px] lg:text-[18px] font-bold shadow-[inset_0_1px_8px_rgba(255,255,255,0.18),0_4px_10px_rgba(8,24,56,0.25)]">
                                {index + 1}
                            </span>
                            <div className="min-w-0">
                                <h3 className="text-[20px] md:text-[24px] lg:text-[clamp(1.375rem,0.9126rem+0.5415vw,1.75rem)] font-semibold leading-tight">
                                    {title}
                                </h3>
                                <p className="mt-2.5 text-[13px] md:text-[15px] lg:text-[clamp(0.875rem,0.6438rem+0.2708vw,1.0625rem)] leading-[1.55] text-white/80">
                                    {text}
                                </p>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
