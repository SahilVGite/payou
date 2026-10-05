import TransparentAdviceIcon from "../../../public/icons/TransparentAdviceIcon";
import WideLendingNetworkIcon from "../../../public/icons/WideLendingNetworkIcon";
import CustomizedSolutionsIcon from "../../../public/icons/CustomizedSolutionsIcon";
import TrackRecordStarIcon from "../../../public/icons/TrackRecordStarIcon";
import EndToEndSupportIcon from "../../../public/icons/EndToEndSupportIcon";
import TrustedCustomersIcon from "../../../public/icons/TrustedCustomersIcon";

const TRUST_POINTS = [
    {
        Icon: TransparentAdviceIcon,
        title: "Transparent Advice",
        description: "Honest and unbiased guidance with complete clarity at every step.",
    },
    {
        Icon: WideLendingNetworkIcon,
        title: "Wide Lending Network",
        description: "Access to 50+ leading banks, NBFCs and fintech institutions in one place.",
    },
    {
        Icon: CustomizedSolutionsIcon,
        title: "Customized Solutions",
        description: "Tailored loan options based on your unique goals and financial profile.",
    },
    {
        Icon: TrackRecordStarIcon,
        title: "Proven Track Record",
        description: "Helping thousands of customers achieve their financial goals.",
    },
    {
        Icon: EndToEndSupportIcon,
        title: "End-to-End Support",
        description: "From application to disbursal, we're with you throughout the journey.",
    },
    {
        Icon: TrustedCustomersIcon,
        title: "Trusted by Customers",
        description: "Strong relationships built on trust, reliability and long-term support.",
    },
];

// Layout (matches the design at 1920px): heading, subtitle and a 2-column grid of glass cards
// on the left; the office photo on the right (754px of the 1650px wrapper), stretched to the
// full height of the left column so its top and bottom line up with the heading and last row.
// < lg: the photo drops below the cards.
export default function WhyTrustUs() {
    return (
        <section
            aria-labelledby="why-trust-us-heading"
            className="secGap px-[4%]"
            style={{
                backgroundImage: "url('/images/why_trust_bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="mx-auto grid max-w-(--content-width) items-stretch gap-8 lg:grid-cols-[1fr_45.7%] lg:gap-[clamp(2.5rem,0.2143rem+3.5714vw,5rem)]">
                <div className="flex flex-col">
                    <h2
                        id="why-trust-us-heading"
                        className="mb-2.5 text-[clamp(1.5rem,1.2794rem+0.9804vw,1.75rem)] md:text-[36px] lg:text-[clamp(2rem,0.4589rem+1.8051vw,2.625rem)] leading-tight text-ink"
                    >
                        Why <strong className="font-bold text-primary">Trust Us</strong>
                    </h2>
                    <p className="mb-[1.8em] lg:mb-[2.2em] max-w-[41em] text-[clamp(0.875rem,0.6544rem+0.9804vw,1.125rem)] md:text-[18px] lg:text-[clamp(1rem,0.3836rem+0.722vw,1.25rem)] leading-[1.45] text-[#4B5563]">
                        At PayYouAdvisory, we combine expertise, transparency and a customer-first approach to
                        help you make confident financial decisions.
                    </p>

                    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-x-[clamp(1rem,0.6131rem+0.6011vw,1.625rem)] lg:gap-y-[clamp(1rem,0.6131rem+0.6011vw,1.5rem)]">
                        {TRUST_POINTS.map(({ Icon, title, description }) => (
                            <li
                                key={title}
                                className="flex items-start gap-3 rounded-lg bg-[#E9EEF6]/80 p-4 shadow-[0_3px_8px_rgba(16,25,43,0.18)] backdrop-blur-xs lg:gap-4 lg:py-[1.125rem]"
                            >
                                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white/85 shadow-[0_2px_6px_rgba(16,25,43,0.12)] lg:size-[50px]">
                                    <Icon size={22} />
                                </span>
                                <div className="min-w-0">
                                    <h3 className="text-[14px] md:text-[16px] lg:text-[clamp(0.9375rem,0.4752rem+0.5415vw,1.125rem)] font-medium leading-snug text-primary">
                                        {title}
                                    </h3>
                                    <p className="mt-1 text-[12px] md:text-[14px] lg:text-[clamp(0.875rem,0.5668rem+0.361vw,1rem)] leading-[1.4] text-[#4B5563]">
                                        {description}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <img
                    src="/images/why_trust_img.png"
                    alt="Bright office workspace with a laptop and a city skyline view"
                    width={754}
                    height={518}
                    loading="lazy"
                    decoding="async"
                    className="h-auto w-full rounded-2xl object-cover shadow-[0_10px_30px_rgba(16,25,43,0.2)] md:mx-auto md:w-[75%] lg:h-full lg:w-full"
                />
            </div>
        </section>
    );
}
