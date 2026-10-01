// Eye-with-rays icon for the Vision block. Inline SVG (stroke = currentColor) so it inherits
// the section's white text colour and scales with its wrapper's width.
function VisionIcon({ className = "" }) {
    return (
        <img
            src="/eyeIcon.svg"
            alt=""
            aria-hidden="true"
            className={className}
        />
    );
}

// Target-with-arrow icon for the Mission block.
function MissionIcon({ className = "" }) {
    return (
        <img
            src="/bullsEyeIcon.svg"
            alt=""
            aria-hidden="true"
            className={className}
        />
    );
}

const items = [
    {
        title: "Vision",
        Icon: VisionIcon,
        text: "To become the preferred choice of financial services partner for India's aspiring classes, meeting the full range of their credit requirements and helping India become a financially inclusive society where every citizen has ready access to formal channels of finance.",
    },
    {
        title: "Mission",
        Icon: MissionIcon,
        text: "PayYouAdvisory Private Limited is dedicated to the mission of bringing convenience to people's lives and making their lives easier. We offer secured and unsecured credit to meet their varied financial needs from instant loans.",
    },
];

// Layout:
//  - < lg: photo sits on top of the section and fades down into the blue; text stacks below.
//  - >= lg: photo is pinned to the right ~52% of the section and fades into the blue on its
//    left edge; the Vision / Mission copy sits in the left half, vertically centred.
const VisionMission = () => {
    return (
        <section className="relative overflow-hidden bg-primary text-white lg:flex lg:min-h-[clamp(30rem,35.7vw,42.875rem)] lg:items-center">
            <div className="relative h-[clamp(13.75rem,45vw,22.5rem)] w-full lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[52%]">
                <img
                    src="/images/vision_mission_team.jpg"
                    alt="PayYou Advisory team members discussing a financial plan on a laptop"
                    width={1536}
                    height={1024}
                    loading="lazy"
                    className="h-full w-full object-cover object-[50%_35%] lg:object-center"
                />
                <div className="absolute inset-0 bg-[linear-gradient(0deg,#134B96_0%,rgba(19,75,150,0.55)_28%,rgba(19,75,150,0)_65%)] lg:bg-[linear-gradient(90deg,#134B96_0%,rgba(19,75,150,0.85)_10%,rgba(19,75,150,0.35)_24%,rgba(19,75,150,0)_42%)]" />
            </div>

            <div className="relative z-10 w-full px-[4%] pb-(--sec-gap) pt-2 lg:px-[3%] lg:py-(--sec-gap)">
                <div className="mx-auto flex max-w-(--content-width) flex-col gap-10 md:gap-12 lg:w-full">
                    {items.map(({ title, Icon, text }) => (
                        <div
                            key={title}
                            className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6 lg:w-[50%] lg:gap-[clamp(1.5rem,0.2rem+2.6vw,3.5rem)] p-8"
                        >
                            <Icon className="h-auto w-12 shrink-0 text-white md:w-14 lg:w-[clamp(3.5rem,2.4rem+2.2vw,4.5rem)]" />
                            <div className="min-w-0">
                                <h2 className="mb-[0.5em] text-[clamp(1.5rem,1.2794rem+0.9804vw,1.75rem)] font-semibold leading-tight md:text-[1.875rem] lg:text-[2.125rem]">
                                    {title}
                                </h2>
                                <p className="m-0 max-w-[58ch] text-[14px] leading-[1.75] text-white/95 md:text-[1rem] lg:text-[clamp(0.875rem,0.75rem+0.25vw,1rem)]">
                                    {text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VisionMission;
