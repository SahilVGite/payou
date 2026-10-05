import VisionEyeIcon from "../../../public/icons/VisionEyeIcon";
import MissionTargetIcon from "../../../public/icons/MissionTargetIcon";

const items = [
    {
        title: "Vision",
        Icon: VisionEyeIcon,
        text: "To become the preferred choice of financial services partner for India's aspiring classes, meeting the full range of their credit requirements and helping India become a financially inclusive society where every citizen has ready access to formal channels of finance.",
    },
    {
        title: "Mission",
        Icon: MissionTargetIcon,
        text: "PayYouAdvisory Private Limited is dedicated to the mission of bringing convenience to people's lives and making their lives easier. We offer secured and unsecured credit to meet their varied financial needs from instant loans.",
    },
];

// Layout (matches the design at 1920px):
//  - Full-bleed blue section; the photo fills the right ~53% and fades into the blue on its
//    left edge. Vision / Mission sit in the left half of the standard content wrapper, each
//    with its icon vertically centred against the title + copy.
//  - < lg: the copy comes first and the photo sits below it, fading up into the blue
//    (flex-col-reverse, so the DOM order stays photo-then-copy for the lg overlay).
// Same section rhythm as the rest of the site: `secGap` vertical padding, `px-[4%]` gutters and
// the `--content-width` wrapper.
const VisionMission = () => {
    return (
        <section className="relative flex flex-col-reverse overflow-hidden bg-primary text-white lg:flex-row lg:min-h-[clamp(30rem,35.7vw,42.875rem)] lg:items-center">
            <div className="relative h-[clamp(13.75rem,45vw,22.5rem)] w-full lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[53%]">
                <img
                    src="/images/vision_mission_team.png"
                    alt="Businessman stacking wooden blocks with family, target, team and bank icons"
                    width={1536}
                    height={1024}
                    loading="lazy"
                    className="h-full w-full object-cover object-[50%_35%] lg:object-center"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,#134B96_0%,rgba(19,75,150,0.55)_28%,rgba(19,75,150,0)_65%)] lg:bg-[linear-gradient(90deg,#134B96_0%,rgba(19,75,150,0.8)_8%,rgba(19,75,150,0.3)_20%,rgba(19,75,150,0)_34%)]" />
            </div>

            <div className="secGap relative z-10 w-full px-[4%] max-lg:pb-2">
                <div className="mx-auto flex max-w-(--content-width) flex-col gap-10 md:gap-12 lg:gap-[clamp(4rem,6.25vw,7.5rem)]">
                    {items.map(({ title, Icon, text }) => (
                        <div
                            key={title}
                            className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6 lg:w-[47%] lg:gap-[clamp(2rem,0.43rem+2.455vw,3.375rem)] lg:pl-[clamp(1rem,-0.43rem+2.232vw,2.25rem)]"
                        >
                            <Icon className="h-auto w-12 shrink-0 opacity-85 md:w-14 lg:w-[clamp(3.5rem,2.357rem+1.786vw,4.5rem)]" />
                            <div className="min-w-0">
                                <h2 className="mb-[0.55em] text-[clamp(1.5rem,1.2794rem+0.9804vw,1.75rem)] md:text-[30px] lg:text-[clamp(1.75rem,1.1336rem+0.722vw,2.25rem)] font-semibold leading-tight">
                                    {title}
                                </h2>
                                <p className="m-0 max-w-[33em] text-[14px] md:text-[16px] lg:text-[clamp(0.9375rem,0.6293rem+0.361vw,1.0625rem)] leading-[1.8] text-white">
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
