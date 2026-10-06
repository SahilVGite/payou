import Link from "next/link";
import { ArrowRight, Calendar, CalendarDays, Clock } from "lucide-react";

// Blue blog card used by "Latest Insights", "You Might Also Like" and related posts: photo on
// top, then date / read time, a 2-line title, a 3-line excerpt and "Read More". Title and excerpt
// are clamped so every card in a row lines up regardless of copy length.
export default function BlogCard({ post, className = "" }) {
    const href = `/blog/${post.slug}`;
    return (
        <article
            className={`flex h-full flex-col overflow-hidden rounded-xl bg-primary text-white shadow-[9px_12px_16px_rgba(15,23,42,0.15)] ${className}`}
        >
            <Link href={href} tabIndex={-1} aria-hidden="true" className="block overflow-hidden">
                <img
                    src={post.image}
                    alt=""
                    width={583}
                    height={398}
                    loading="lazy"
                    className="aspect-[404/276] w-full object-cover transition duration-500 hover:scale-105"
                />
            </Link>
            <div className="flex flex-1 flex-col p-4">
                <div className="flex items-center justify-between gap-3 text-[12px] md:text-[13px] lg:text-[clamp(0.8125rem,0.6584rem+0.1805vw,0.9375rem)] text-white/90">
                    <span className="flex items-center gap-1.5">
                        <Calendar size={15} className="shrink-0" />
                        {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                        <Clock size={15} className="shrink-0" />
                        {post.readTime}
                    </span>
                </div>
                <h3 className="mt-3 line-clamp-2 min-h-[2.4em] text-[16px] md:text-[18px] lg:text-[clamp(1.0625rem,0.8306rem+0.2708vw,1.25rem)] font-semibold leading-[1.2]">
                    <Link href={href} className="hover:underline">
                        {post.title}
                    </Link>
                </h3>
                <p className="mt-2 line-clamp-3 text-[13px] md:text-[14px] lg:text-[clamp(0.875rem,0.6438rem+0.2708vw,1.0625rem)] leading-[1.47] text-white/80">
                    {post.excerpt}
                </p>
                <Link
                    href={href}
                    className="mt-auto inline-flex w-fit items-center gap-2 pt-6 text-[14px] md:text-[16px] lg:text-[clamp(1rem,0.8459rem+0.1805vw,1.125rem)] font-medium text-white transition-[gap] hover:gap-3"
                >
                    Read More
                    <ArrowRight size={16} />
                    <span className="sr-only">: {post.title}</span>
                </Link>
            </div>
        </article>
    );
}
