"use client";

import { useRef, useState, useSyncExternalStore } from "react";
import {
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
    FileText,
    House,
    Shield,
    UserRound,
} from "lucide-react";
import Dropdown from "../common/Dropdown";
import AllTopicsIcon from "../../../public/icons/AllTopicsIcon";
import InsuranceTabIcon from "../../../public/icons/InsuranceTabIcon";
import BlogCard from "./BlogCard";
import { BLOG_CATEGORIES, blogPosts } from "../../data/blogs";

const ALL = "All Topics";
const TAB_ICONS = {
    [ALL]: AllTopicsIcon,
    Loans: House,
    Investments: UserRound,
    Insurance: InsuranceTabIcon,
    "Loan Process": FileText,
    "Financial Planning": Shield,
};
const TABS = [ALL, ...BLOG_CATEGORIES];

// Posts per page always fill whole rows: 2 rows of the current column count, except a single
// column on phones, which gets 3 rows. Columns follow the grid's breakpoints below
// (1 → sm 2 → lg 3 → xl 4). The server render assumes desktop (8).
const PAGE_SIZES = [
    { query: "(min-width: 1280px)", size: 8 },
    { query: "(min-width: 1024px)", size: 6 },
    { query: "(min-width: 640px)", size: 4 },
];
function subscribe(callback) {
    const lists = PAGE_SIZES.map(({ query }) => window.matchMedia(query));
    lists.forEach((list) => list.addEventListener("change", callback));
    return () => lists.forEach((list) => list.removeEventListener("change", callback));
}
const getPageSize = () => PAGE_SIZES.find(({ query }) => window.matchMedia(query).matches)?.size ?? 3;
const getServerPageSize = () => 8;

// "1 … 4 5 6 … 20": always the first and last page, plus the current page and its neighbours.
function pageList(current, total) {
    const pages = new Set([1, total, current - 1, current, current + 1]);
    const sorted = [...pages].filter((page) => page >= 1 && page <= total).sort((a, b) => a - b);
    return sorted.flatMap((page, index) => (index > 0 && page - sorted[index - 1] > 1 ? ["…", page] : [page]));
}

const navButton =
    "inline-flex items-center gap-1 px-1.5 py-1 text-[#4B5563] transition hover:text-primary disabled:cursor-default disabled:opacity-40 disabled:hover:text-[#4B5563] cursor-pointer";

// "You Might Also Like": topic tabs (a dropdown below xl, same pattern as the home page tabs,
// so there's never a horizontal scroll), a grid of blog cards and numbered pagination.
export default function AllInsights() {
    const [activeTab, setActiveTab] = useState(ALL);
    const [page, setPage] = useState(1);
    const pageSize = useSyncExternalStore(subscribe, getPageSize, getServerPageSize);
    const gridRef = useRef(null);

    const posts = activeTab === ALL ? blogPosts : blogPosts.filter((post) => post.category === activeTab);
    const totalPages = Math.max(1, Math.ceil(posts.length / pageSize));
    // A resize can shrink the page count below the current page — clamp instead of showing nothing.
    const currentPage = Math.min(page, totalPages);
    const visiblePosts = posts.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    const changeTab = (tab) => {
        setActiveTab(tab);
        setPage(1);
    };
    const goToPage = (next) => {
        setPage(Math.min(Math.max(1, next), totalPages));
        gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <section className="secGap px-[4%]">
            <div className="mx-auto max-w-(--content-width)">
                <h2 className="mb-2.5 text-center text-[clamp(1.5rem,1.2794rem+0.9804vw,1.75rem)] md:text-[36px] lg:text-[clamp(2rem,0.4589rem+1.8051vw,2.625rem)] text-ink">
                    You Might <strong className="font-bold text-primary">Also Like</strong>
                </h2>
                <p className="mx-auto mb-[1.8em] lg:mb-[2.2em] max-w-[37em] text-center text-[clamp(0.875rem,0.6544rem+0.9804vw,1.125rem)] md:text-[18px] lg:text-[clamp(1rem,0.3836rem+0.722vw,1.25rem)] leading-[1.45] text-[#4B5563]">
                    Discover related insights, practical guidance, and expert perspectives curated to help you make
                    smarter financial decisions.
                </p>

                <div ref={gridRef} className="scroll-mt-28">
                    <div className="mb-4 xl:hidden">
                        <Dropdown
                            value={activeTab}
                            onChange={changeTab}
                            options={TABS}
                            className="rounded-full border border-white/40 bg-primary/10 py-3.25 pl-4.5 pr-4.5 text-[12px] md:text-[14px] font-semibold text-[#10192b] backdrop-blur-lg cursor-pointer"
                            ariaLabel="Choose a topic"
                        />
                    </div>

                    <div role="tablist" aria-label="Blog topics" className="mb-5 hidden grid-cols-6 gap-[clamp(0.75rem,0.2rem+0.9vw,1.125rem)] xl:grid">
                        {TABS.map((tab) => {
                            const Icon = TAB_ICONS[tab];
                            const isActive = tab === activeTab;
                            return (
                                <button
                                    key={tab}
                                    type="button"
                                    role="tab"
                                    aria-selected={isActive}
                                    onClick={() => changeTab(tab)}
                                    className={`flex h-[clamp(2.75rem,2.2rem+0.9vw,3.25rem)] items-center justify-center gap-2 whitespace-nowrap rounded-lg px-3 text-[clamp(0.875rem,0.4127rem+0.5415vw,1.25rem)] font-medium transition cursor-pointer ${
                                        isActive
                                            ? "bg-primary text-white shadow-[0_4px_12px_rgba(19,75,150,0.3)]"
                                            : "bg-[#EEF2F7] text-ink shadow-[0_3px_8px_rgba(16,25,43,0.12)] hover:bg-[#e2e9f3] hover:text-primary"
                                    }`}
                                >
                                    <Icon size={22} strokeWidth={1.6} className={`shrink-0 ${isActive ? "text-white" : "text-primary"}`} />
                                    {tab}
                                </button>
                            );
                        })}
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7 xl:grid-cols-4 xl:gap-[clamp(1.75rem,0.5rem+1.6vw,2.0625rem)]">
                        {visiblePosts.map((post) => (
                            <BlogCard key={post.slug} post={post} />
                        ))}
                    </div>
                    {posts.length === 0 ? (
                        <p className="py-10 text-center text-[15px] text-[#4B5563]">No articles in this topic yet.</p>
                    ) : null}
                </div>

                {totalPages > 1 ? (
                    <nav
                        aria-label="Blog pages"
                        className="mt-8 lg:mt-12 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 md:gap-x-4 text-[14px] md:text-[16px] lg:text-[clamp(1rem,0.6918rem+0.361vw,1.25rem)]"
                    >
                        <button type="button" onClick={() => goToPage(1)} disabled={currentPage === 1} className={navButton} aria-label="First page">
                            <ChevronsLeft size={18} className="sm:hidden" />
                            <ChevronLeft size={18} className="hidden sm:block" />
                            <span className="hidden sm:inline">First</span>
                        </button>
                        <button type="button" onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1} className={navButton} aria-label="Previous page">
                            <ChevronLeft size={18} />
                            <span className="hidden sm:inline">Previous</span>
                        </button>
                        {pageList(currentPage, totalPages).map((item, index) =>
                            item === "…" ? (
                                <span key={`gap-${index}`} className="px-1 text-[#4B5563]" aria-hidden="true">
                                    …
                                </span>
                            ) : (
                                <button
                                    key={item}
                                    type="button"
                                    onClick={() => goToPage(item)}
                                    aria-current={item === currentPage ? "page" : undefined}
                                    className={`min-w-8 border-b-2 px-2 pb-1 transition cursor-pointer ${
                                        item === currentPage
                                            ? "border-primary font-semibold text-primary"
                                            : "border-transparent text-[#4B5563] hover:text-primary"
                                    }`}
                                >
                                    {item}
                                </button>
                            ),
                        )}
                        <button type="button" onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages} className={navButton} aria-label="Next page">
                            <span className="hidden sm:inline">Next</span>
                            <ChevronRight size={18} />
                        </button>
                        <button type="button" onClick={() => goToPage(totalPages)} disabled={currentPage === totalPages} className={navButton} aria-label="Last page">
                            <span className="hidden sm:inline">Last</span>
                            <ChevronRight size={18} className="hidden sm:block" />
                            <ChevronsRight size={18} className="sm:hidden" />
                        </button>
                    </nav>
                ) : null}
            </div>
        </section>
    );
}
