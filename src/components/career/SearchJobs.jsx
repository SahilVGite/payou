"use client";

import { useMemo, useState } from "react";
import { Clock, MapPin, Search, UserRound } from "lucide-react";
import Dropdown from "../common/Dropdown";
import { POPUPS, usePopup } from "../popup/PopupProvider";
import { jobOpenings } from "../../data/careers";

const VISIBLE_JOBS = 4;

// Each filter shows its label as the placeholder ("Department") and lists "All …" first to
// clear it again; options come straight from the job data.
const FILTERS = [
  { key: "department", label: "Department", allLabel: "All Departments" },
  { key: "experience", label: "Experience", allLabel: "All Experience" },
  { key: "location", label: "Location", allLabel: "All Locations" },
];

const filterOptions = Object.fromEntries(
  FILTERS.map(({ key }) => [key, [...new Set(jobOpenings.map((job) => job[key]))]]),
);

const textSm = "text-[12px] md:text-[14px] lg:text-[clamp(0.875rem,0.6438rem+0.2708vw,1rem)]";

function JobCard({ job, onApply }) {
    return (
        <article className="group flex flex-col gap-5 rounded-xl border border-white/80 bg-white/45 px-5 py-6 shadow-[0_4px_12px_rgba(16,25,43,0.1)] backdrop-blur-sm transition hover:bg-[#DEE6F1]/80 md:flex-row md:items-start md:gap-8 lg:px-8 lg:py-8">
            <div className="min-w-0 flex-1">
                <h3 className="text-[18px] md:text-[22px] lg:text-[clamp(1.25rem,0.6336rem+0.722vw,1.625rem)] font-semibold leading-snug text-primary">
                    {job.title}
                </h3>
                <p className="mt-2 text-[13px] md:text-[15px] lg:text-[clamp(0.875rem,0.6438rem+0.2708vw,1.0625rem)] leading-normal text-[#4B5563] transition-colors group-hover:text-primary">
                    {job.description}
                </p>
                <div className="mt-5 lg:mt-8 flex flex-wrap gap-2.5 lg:gap-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#DCE4EF] px-3 py-1.5 text-[11px] md:text-[12px] lg:text-[clamp(0.75rem,0.5959rem+0.1805vw,0.875rem)] font-bold uppercase text-primary">
                        <Clock size={15} className="shrink-0" />
                        {job.type}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#DCE4EF] px-3 py-1.5 text-[11px] md:text-[12px] lg:text-[clamp(0.75rem,0.5959rem+0.1805vw,0.875rem)] font-bold uppercase text-primary">
                        <MapPin size={15} className="shrink-0" />
                        {job.area}
                    </span>
                </div>
            </div>
            <button
                type="button"
                onClick={() => onApply(job)}
                className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-primary px-6 py-2.5 lg:px-[1.875rem] lg:py-[0.6em] text-[14px] md:text-[16px] lg:text-[clamp(1rem,0.6918rem+0.361vw,1.25rem)] font-medium text-white transition hover:bg-[#0f3c78] cursor-pointer"
            >
                <UserRound size={20} strokeWidth={1.75} />
                Apply
            </button>
        </article>
    );
}

// Search box + Department / Experience / Location filters over the open roles (first four,
// then "View All"), followed by the "Haven't found the perfect role yet?" banner. Both share
// the soft career_bg backdrop at 64% opacity.
export default function SearchJobs() {
    const { openPopup } = usePopup();
    const [query, setQuery] = useState("");
    const [filters, setFilters] = useState({ department: "", experience: "", location: "" });
    const [showAll, setShowAll] = useState(false);

    const matches = useMemo(() => {
        const needle = query.trim().toLowerCase();
        return jobOpenings.filter((job) => {
            if (needle && !`${job.title} ${job.description} ${job.area}`.toLowerCase().includes(needle)) return false;
            return FILTERS.every(({ key }) => !filters[key] || job[key] === filters[key]);
        });
    }, [query, filters]);
    const visibleJobs = showAll ? matches : matches.slice(0, VISIBLE_JOBS);
    const hasFilters = Boolean(query.trim()) || Object.values(filters).some(Boolean);

    const applyFor = (job) =>
        openPopup(POPUPS.CONTACT_NUMBER, {
            source: { page: "Careers", section: `Search Jobs – ${job.title}`, button: "APPLY" },
            message: `Share your contact number and our HR team will get in touch with you about the ${job.title} role.`,
        });
    const uploadResume = () =>
        openPopup(POPUPS.CONTACT_NUMBER, {
            source: { page: "Careers", section: "Haven't Found The Perfect Role", button: "UPLOAD RESUME" },
            message: "Share your contact number and our HR team will reach out to collect your resume and match you with upcoming roles.",
        });

    return (
        <section className="secGap relative overflow-hidden px-[4%]">
            <img
                src="/images/career_bg.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-64"
            />

            <div className="relative mx-auto max-w-(--content-width)">
                <h2 className="mb-2.5 text-center text-[clamp(1.5rem,1.2794rem+0.9804vw,1.75rem)] md:text-[36px] lg:text-[clamp(2rem,0.4589rem+1.8051vw,2.625rem)] text-ink">
                    Search Jobs at <strong className="font-bold text-primary">PayYou</strong>
                </h2>
                <p className="mx-auto mb-[1.8em] lg:mb-[2.2em] max-w-[33em] text-center text-[clamp(0.875rem,0.6544rem+0.9804vw,1.125rem)] md:text-[18px] lg:text-[clamp(1rem,0.3836rem+0.722vw,1.25rem)] leading-[1.45] text-[#4B5563]">
                    Compare public &amp; private banks, with PayYouAdvisory securing fee waivers and preferential rates for
                    eligible applicants.
                </p>

                <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <label className="flex h-11 w-full items-center gap-2 rounded-lg border border-primary bg-white/60 px-4 md:w-[clamp(13rem,9.5rem+6vw,17.125rem)] lg:px-6">
                        <input
                            type="search"
                            value={query}
                            onChange={(event) => setQuery(event.target.value)}
                            placeholder="Search Job"
                            aria-label="Search jobs"
                            className={`min-w-0 flex-1 bg-transparent text-primary outline-none placeholder:text-primary ${textSm}`}
                        />
                        <Search size={20} className="shrink-0 text-primary" />
                    </label>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 md:w-[clamp(28rem,10rem+30vw,47.5rem)]">
                        {FILTERS.map(({ key, label, allLabel }) => (
                            <Dropdown
                                key={key}
                                value={filters[key] || label}
                                options={[allLabel, ...filterOptions[key]]}
                                onChange={(option) => {
                                    setFilters((current) => ({ ...current, [key]: option === allLabel ? "" : option }));
                                    setShowAll(false);
                                }}
                                ariaLabel={`Filter by ${label.toLowerCase()}`}
                                className={`h-11 rounded-lg bg-primary px-4 lg:px-[1.125rem] font-medium text-white cursor-pointer ${textSm}`}
                            />
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-4 lg:gap-7">
                    {visibleJobs.map((job) => (
                        <JobCard key={job.id} job={job} onApply={applyFor} />
                    ))}
                    {matches.length === 0 ? (
                        <div className="rounded-xl border border-white/80 bg-white/45 px-6 py-10 text-center backdrop-blur-sm">
                            <p className="text-[14px] md:text-[16px] text-[#4B5563]">No openings match your search right now.</p>
                            {hasFilters ? (
                                <button
                                    type="button"
                                    onClick={() => {
                                        setQuery("");
                                        setFilters({ department: "", experience: "", location: "" });
                                    }}
                                    className="mt-3 text-[14px] font-semibold text-primary underline cursor-pointer"
                                >
                                    Clear filters
                                </button>
                            ) : null}
                        </div>
                    ) : null}
                </div>

                {matches.length > VISIBLE_JOBS ? (
                    <div className="mt-6 lg:mt-7 text-center">
                        <button
                            type="button"
                            onClick={() => setShowAll((open) => !open)}
                            aria-expanded={showAll}
                            className="rounded-full bg-primary px-7 lg:px-[1.875rem] py-2.5 lg:py-[0.6em] text-[14px] md:text-[16px] lg:text-[clamp(1rem,0.8459rem+0.1805vw,1.125rem)] font-medium text-white transition hover:bg-[#0f3c78] cursor-pointer"
                        >
                            {showAll ? "Show Less" : "View All"}
                        </button>
                    </div>
                ) : null}

                {/* Haven't found the perfect role yet? */}
                <div className="relative mt-10 overflow-hidden rounded-[28px] bg-[linear-gradient(90deg,#0B47B0_0%,#0D5BD6_45%,#3D8EF2_100%)] px-6 py-10 md:px-10 lg:min-h-[clamp(15rem,7.5rem+11.7vw,18.875rem)] lg:px-[clamp(2.5rem,1.0357rem+2.2879vw,3.75rem)] lg:py-0">
                    {/* Dot pattern fading out from the bottom-left corner */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute bottom-0 left-0 h-[70%] w-[35%] bg-[radial-gradient(circle,rgba(160,200,255,0.75)_1.5px,transparent_1.8px)] bg-size-[14px_14px] [mask-image:radial-gradient(ellipse_at_bottom_left,#000_0%,transparent_70%)]"
                    />
                    <div className="relative z-10 lg:flex lg:min-h-[inherit] lg:flex-col lg:justify-center">
                        <h2 className="text-[clamp(1.75rem,1.2794rem+1.9608vw,2.25rem)] md:text-[38px] lg:text-[clamp(2.25rem,1.0172rem+1.444vw,2.875rem)] leading-tight text-white">
                            Haven&apos;t found the
                            <br />
                            <strong className="font-bold">perfect role yet?</strong>
                        </h2>
                        <button
                            type="button"
                            onClick={uploadResume}
                            className="mt-6 lg:mt-[1.875rem] w-full max-w-[24.25rem] rounded-full bg-accent py-3 text-[13px] md:text-[14px] lg:text-[clamp(0.875rem,0.7209rem+0.1805vw,1rem)] font-bold uppercase text-white shadow-[0_5px_10px_rgba(177,31,36,0.25)] transition hover:bg-[#961a1e] cursor-pointer"
                        >
                            Upload Resume
                        </button>
                    </div>
                    <img
                        src="/images/perfect_role_career.png"
                        alt="Smiling professional on a phone call at his laptop"
                        width={1008}
                        height={604}
                        loading="lazy"
                        // Desktop only, like GoalsCta — smaller screens show just the copy and button.
                        className="hidden lg:block absolute bottom-0 right-[clamp(1.5rem,-0.5rem+3vw,3.5rem)] h-auto w-[30.7%]"
                    />
                </div>
            </div>
        </section>
    );
}
