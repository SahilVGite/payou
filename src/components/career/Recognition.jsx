const awards = [
    {
        title: "Best Financial Advisory",
        text: "Recognized for delivering accessible and customer-focused financial solutions.",
    },
    {
        title: "Excellence in Customer Service",
        text: "Honored for creating seamless experiences and putting customers first.",
    },
    {
        title: "Digital Innovation Award",
        text: "Celebrated for using technology to simplify financial decision-making.",
    },
    {
        title: "Digital Innovation Award",
        text: "Recognized for innovation and growth in the financial services space.",
    },
    {
        title: "Trusted Financial Partner",
        text: "Recognized for building transparent and reliable financial solutions.",
    },
    {
        title: "Excellence in Financial Solutions",
        text: "Honored for helping customers access smarter and more tailored financial options.",
    },
];

// Red / blue is decided by position, not per award, so it always alternates:
//  - 1 column (phones): red, blue, red, blue…
//  - 2 columns (sm+): the design's checkerboard — red/blue, blue/red, red/blue.
// Full class strings (not built from pieces) so Tailwind can see them.
const TONES = {
    red: { border: "border-accent", title: "text-accent", smBorder: "sm:border-accent", smTitle: "sm:text-accent" },
    blue: { border: "border-primary", title: "text-primary", smBorder: "sm:border-primary", smTitle: "sm:text-primary" },
};

function toneClasses(index) {
    const single = index % 2 === 0 ? TONES.red : TONES.blue;
    const grid = (Math.floor(index / 2) + (index % 2)) % 2 === 0 ? TONES.red : TONES.blue;
    return {
        border: `${single.border} ${grid.smBorder}`,
        title: `${single.title} ${grid.smTitle}`,
    };
}

// recognition_bg sits behind the whole section at 30% opacity. Inside a frosted glass panel:
// a 2×3 grid of award cards on the left (~62% of the panel) and the recognition_main photo
// pinned to the panel's bottom-right. < lg the photo drops below the cards.
export default function Recognition() {
    return (
        <section className="secGap relative overflow-hidden px-[4%]">
            <img
                src="/images/recognition_bg.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
            />

            <div className="relative mx-auto max-w-(--content-width)">
                <h2 className="mb-2.5 text-[clamp(1.5rem,1.2794rem+0.9804vw,1.75rem)] md:text-[36px] lg:text-[clamp(2rem,0.4589rem+1.8051vw,2.625rem)] font-bold leading-tight text-primary">
                    Recognition
                </h2>
                <p className="mb-[1.4em] lg:mb-[1.6em] max-w-[56em] text-[clamp(0.875rem,0.6544rem+0.9804vw,1.125rem)] md:text-[18px] lg:text-[clamp(1rem,0.3836rem+0.722vw,1.25rem)] leading-[1.45] text-[#4B5563]">
                    Recognizing the milestones, achievements, and industry appreciation that reflect PayYou&apos;s
                    commitment to delivering trusted financial solutions.
                </p>

                <div className="bg-glass-effect relative overflow-hidden rounded-4xl bg-primary/10 px-4 pt-4 shadow-[0_10px_30px_rgba(16,25,43,0.08)] backdrop-blur-xs md:px-6 md:pt-6 lg:min-h-[clamp(26rem,14rem+18.7vw,32.75rem)] lg:px-[clamp(1.5rem,0.3rem+1.9vw,2.5rem)] lg:pb-[clamp(2rem,0.6rem+2.2vw,2.9rem)] lg:pt-[clamp(1.25rem,0.6rem+1vw,1.7rem)]">
                    <ul className="relative z-10 grid gap-4 sm:grid-cols-2 lg:w-[64%] lg:gap-x-5 lg:gap-y-[1.3rem]">
                        {awards.map(({ title, text }, index) => (
                            <li
                                key={`${title}-${index}`}
                                className={`rounded-[17px] border-[1.5px] bg-white/25 px-5 py-5 lg:px-[1.625rem] lg:py-[1.625rem] ${toneClasses(index).border}`}
                            >
                                <h3
                                    className={`text-[17px] md:text-[20px] lg:text-[clamp(1.125rem,0.6626rem+0.5415vw,1.5rem)] font-bold leading-snug ${toneClasses(index).title}`}
                                >
                                    {title}
                                </h3>
                                <p className="mt-2 max-w-[25em] text-[13px] md:text-[15px] lg:text-[clamp(0.875rem,0.6438rem+0.2708vw,1.0625rem)] leading-[1.5] text-[#333333]">
                                    {text}
                                </p>
                            </li>
                        ))}
                    </ul>
                    <img
                        src="/images/recognition_main.png"
                        alt="Senior manager congratulating a young colleague"
                        width={818}
                        height={663}
                        loading="lazy"
                        className="relative mx-auto mt-6 block h-auto w-full max-w-[26rem] lg:absolute lg:bottom-0 lg:right-[clamp(0.75rem,0rem+1.2vw,1.375rem)] lg:mt-0 lg:w-[33%] lg:max-w-none"
                    />
                </div>
            </div>
        </section>
    );
}
