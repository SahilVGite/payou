"use client";

import { useId, useRef, useState } from "react";
import { ChartNoAxesColumn, Leaf, Settings, Users } from "lucide-react";

// Only "Customer Focus" has final copy + photo. The other four tabs use placeholder copy and
// reuse the same photo — swap `text` / `image` / `imageAlt` per item when the content is ready.
const values = [
    {
        id: "customer-focus",
        label: "Customer Focus",
        Icon: Users,
        title: "Customer Focus",
        text: "The customer is at the core of all that we do. We strive to understand their needs, deliver the right solutions, and provide a seamless and supportive experience at every step of their financial journey.",
        image: "/images/values_customer_focus.png",
        imageAlt: "Advisor discussing financial options with a couple on a tablet",
    },
    {
        id: "operational-excellence",
        label: "Operational Excellence",
        Icon: Settings,
        title: "Operational Excellence",
        text: "We build simple, reliable processes that keep every application moving. Clear checkpoints, quick turnarounds, and consistent service help us deliver a dependable experience from first enquiry to final disbursal.",
        image: "/images/values_customer_focus.png",
        imageAlt: "Advisor discussing financial options with a couple on a tablet",
    },
    {
        id: "product-leadership",
        label: "Product Leadership",
        Icon: ChartNoAxesColumn,
        title: "Product Leadership",
        text: "We keep widening the range of loan, insurance, and investment options we bring together, and keep improving how people compare them, so every customer sees the choices that fit them best.",
        image: "/images/values_customer_focus.png",
        imageAlt: "Advisor discussing financial options with a couple on a tablet",
    },
    {
        id: "people",
        label: "People",
        Icon: Users,
        title: "People",
        text: "Our advisors are the reason customers trust us. We hire for integrity, train for expertise, and give every team member room to grow, so the people guiding your decisions are people you can rely on.",
        image: "/images/values_customer_focus.png",
        imageAlt: "Advisor discussing financial options with a couple on a tablet",
    },
    {
        id: "sustainability",
        label: "Sustainability",
        Icon: Leaf,
        title: "Sustainability",
        text: "We aim to grow responsibly through paperless processes, transparent practices, and wider access to formal finance, so progress for our business also means progress for the communities we serve.",
        image: "/images/values_customer_focus.png",
        imageAlt: "Advisor discussing financial options with a couple on a tablet",
    },
];

// Layout (matches the design reference at 1920px):
//  - Heading + subtitle centred above a 1650px rounded panel that uses values_bg.png.
//  - The glass tab bar floats over the panel's top edge (protrudes 28px above it).
//  - Inside the panel, a white-glass card: copy on the left, photo (719x366) on the right.
//  - < lg: tab bar scrolls horizontally, photo moves on top of the copy.
// All five panels are stacked in one grid cell and cross-fade, so the card keeps the height of
// the tallest panel and nothing jumps when switching tabs.
const ValuesThatDefineUs = () => {
    const uid = useId();
    const [activeId, setActiveId] = useState(values[0].id);
    const tabRefs = useRef([]);

    const selectTab = (index) => {
        setActiveId(values[index].id);
        const el = tabRefs.current[index];
        el?.focus({ preventScroll: true });
        el?.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
    };

    const handleKeyDown = (event, index) => {
        const last = values.length - 1;
        let next = null;
        if (event.key === "ArrowRight") next = index === last ? 0 : index + 1;
        else if (event.key === "ArrowLeft") next = index === 0 ? last : index - 1;
        else if (event.key === "Home") next = 0;
        else if (event.key === "End") next = last;
        if (next === null) return;
        event.preventDefault();
        selectTab(next);
    };

    return (
        <section className="secGap px-[4%]">
            <div className="mx-auto max-w-(--content-width)">
                <h2 className="mb-2.5 text-left md:text-center text-[clamp(1.5rem,1.2794rem+0.9804vw,1.75rem)] md:text-[36px] lg:text-[clamp(2rem,0.4589rem+1.8051vw,2.625rem)] text-ink">
                    Values That <strong className="font-bold text-primary">Define Us</strong>
                </h2>
                <p className="mb-[1.8em] lg:mb-[2em] text-left md:text-center text-[clamp(0.875rem,0.6544rem+0.9804vw,1.125rem)] md:text-[18px] lg:text-[clamp(1rem,0.3836rem+0.722vw,1.25rem)] text-[#4B5563]">
                    Our values guide our decisions, build trust, and shape every customer experience.
                </p>

                <div className="relative">
                    {/* Panel background — starts below the top of the tab bar so the bar overlaps its edge */}
                    <div
                        aria-hidden="true"
                        className="absolute inset-x-0 -bottom-6 top-6 lg:top-7 lg:-bottom-10 rounded-[18px] lg:rounded-3xl bg-[#E8EEF8]"
                        style={{
                            backgroundImage: "url('/images/values_bg.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    />

                    <div className="relative">
                        {/* Tab bar */}
                        <div
                            role="tablist"
                            aria-label="Our values"
                            className="relative z-10 mx-auto flex h-12 lg:h-14 w-fit max-w-full items-stretch gap-1 md:gap-2 xl:gap-[15px] overflow-x-auto rounded-xl border border-white/60 bg-[linear-gradient(180deg,#DCE6F3_0%,#D3DFEF_100%)] px-2 md:px-4 xl:px-12 shadow-[0_4px_14px_rgba(19,75,150,0.12)] backdrop-blur-md [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                        >
                            {values.map(({ id, label, Icon }, index) => {
                                const isActive = id === activeId;
                                return (
                                    <button
                                        key={id}
                                        ref={(el) => {
                                            tabRefs.current[index] = el;
                                        }}
                                        type="button"
                                        role="tab"
                                        id={`${uid}-tab-${id}`}
                                        aria-selected={isActive}
                                        aria-controls={`${uid}-panel-${id}`}
                                        tabIndex={isActive ? 0 : -1}
                                        onClick={() => selectTab(index)}
                                        onKeyDown={(event) => handleKeyDown(event, index)}
                                        className={`relative flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap px-3 md:px-4 xl:px-6 text-[12px] md:text-[14px] lg:text-[clamp(0.8125rem,0.5043rem+0.361vw,0.9375rem)] font-semibold uppercase transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-primary after:transition-opacity focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-primary ${isActive
                                            ? "text-primary after:opacity-100"
                                            : "text-ink after:opacity-0 hover:text-primary"
                                            }`}
                                    >
                                        <Icon aria-hidden="true" className="size-4 md:size-[18px] shrink-0" />
                                        {label}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Content card */}
                        <div className="mx-3 md:mx-6 lg:mx-10 mt-5 lg:mt-[31px] mb-3 md:mb-6 lg:mb-10 overflow-hidden rounded-2xl lg:rounded-[20px] border border-white/70 bg-white/60 shadow-[0_8px_24px_rgba(19,75,150,0.12)] backdrop-blur-xs">
                            <div className="grid">
                                {values.map(({ id, title, text, image, imageAlt }, index) => {
                                    const isActive = id === activeId;
                                    return (
                                        <div
                                            key={id}
                                            role="tabpanel"
                                            id={`${uid}-panel-${id}`}
                                            aria-labelledby={`${uid}-tab-${id}`}
                                            inert={!isActive}
                                            className={`col-start-1 row-start-1 flex flex-col-reverse lg:flex-row lg:items-stretch transition-[opacity,visibility] duration-300 motion-reduce:transition-none ${isActive ? "visible opacity-100" : "invisible opacity-0"
                                                }`}
                                        >
                                            <div className="flex flex-1 flex-col justify-center px-5 py-6 md:px-8 md:py-8 lg:px-[clamp(2rem,0.1443rem+2.9018vw,3.625rem)]">
                                                <h3 className="mb-[0.5em] text-[clamp(1.5rem,1.2794rem+0.9804vw,1.75rem)] md:text-[30px] lg:text-[clamp(1.5rem,0.644rem+1.3393vw,2.25rem)] font-semibold leading-tight text-primary">
                                                    {title}
                                                </h3>
                                                <p className="m-0 max-w-[37em] text-[14px] md:text-[16px] lg:text-[clamp(0.9375rem,0.4752rem+0.5415vw,1.125rem)] leading-[1.9] text-[#4B5563]">
                                                    {text}
                                                </p>
                                            </div>

                                            <div className="relative w-full shrink-0 aspect-[719/366] lg:w-[45.8%]">
                                                <img
                                                    src={image}
                                                    alt={imageAlt}
                                                    width={719}
                                                    height={366}
                                                    loading={index === 0 ? "eager" : "lazy"}
                                                    className="absolute inset-0 h-full w-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValuesThatDefineUs;
