import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { trendingPost as post } from "../../data/blogs";

// Featured post: one wide blue card with the photo inset on the left (~48%) and date, title,
// excerpt and "Read More" on the right. Stacks (photo on top) below lg.
export default function TrendingInsights() {
    return (
        <section className="secGap px-[4%]">
            <div className="mx-auto max-w-(--content-width)">
                <h2 className="mb-2.5 text-center text-[clamp(1.5rem,1.2794rem+0.9804vw,1.75rem)] md:text-[36px] lg:text-[clamp(2rem,0.4589rem+1.8051vw,2.625rem)] text-ink">
                    Trending <strong className="font-bold text-primary">Insights</strong>
                </h2>
                <p className="mx-auto mb-[1.8em] lg:mb-[2.2em] max-w-[38em] text-center text-[clamp(0.875rem,0.6544rem+0.9804vw,1.125rem)] md:text-[18px] lg:text-[clamp(1rem,0.3836rem+0.722vw,1.25rem)] leading-[1.45] text-[#4B5563]">
                    Stay informed with the latest financial trends, market insights, and expert perspectives to make
                    smarter financial decisions.
                </p>

                <article className="grid gap-6 rounded-xl bg-primary p-3 text-white shadow-[0_10px_30px_rgba(16,25,43,0.18)] md:p-5 lg:grid-cols-[48%_1fr] lg:gap-[clamp(2.5rem,0.4rem+3.3vw,5.375rem)]">
                    <Link href={`/blog/${post.slug}`} tabIndex={-1} aria-hidden="true" className="block overflow-hidden rounded-[10px]">
                        <img
                            src={post.image}
                            alt=""
                            width={1182}
                            height={831}
                            loading="lazy"
                            className="aspect-[820/576] h-full w-full object-cover transition duration-500 hover:scale-105"
                        />
                    </Link>
                    <div className="flex flex-col px-2 pb-3 md:px-0 lg:py-3 lg:pr-[clamp(1rem,0rem+1.6vw,2.5rem)]">
                        <span className="flex items-center gap-2 text-[13px] md:text-[16px] lg:text-[clamp(1rem,0.6918rem+0.361vw,1.25rem)] text-white/95">
                            <CalendarDays size={20} className="shrink-0" />
                            {post.date}
                        </span>
                        <h3 className="mt-3 lg:mt-5 text-[20px] md:text-[26px] lg:text-[clamp(1.5rem,0.7295rem+0.9025vw,2.125rem)] font-medium leading-[1.38]">
                            <Link href={`/blog/${post.slug}`} className="hover:underline">
                                {post.title}
                            </Link>
                        </h3>
                        <p className="mt-3 lg:mt-5 text-[14px] md:text-[16px] lg:text-[clamp(1rem,0.3836rem+0.722vw,1.25rem)] leading-[1.45] text-white/90">
                            {post.excerpt}
                        </p>
                        <Link
                            href={`/blog/${post.slug}`}
                            className="mt-6 inline-flex w-fit items-center gap-2 text-[14px] md:text-[16px] lg:text-[clamp(1rem,0.8459rem+0.1805vw,1.125rem)] font-medium transition-[gap] hover:gap-3 lg:mt-auto"
                        >
                            Read More
                            <ArrowRight size={16} />
                            <span className="sr-only">: {post.title}</span>
                        </Link>
                    </div>
                </article>
            </div>
        </section>
    );
}
