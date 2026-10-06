import { notFound } from "next/navigation";
import { CalendarDays, Clock } from "lucide-react";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import PageBanner from "@/components/common/PageBanner";
import BlogCard from "@/components/blog/BlogCard";
import { blogPosts, getBlogPost } from "../../../data/blogs";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  return post ? { title: post.title, description: post.excerpt } : { title: "Blog" };
}

// Article page for each post. Only the summary exists in the data for now — add a `content`
// field to a post (array of paragraphs) to render the full article below the summary.
export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = blogPosts.filter((item) => item.slug !== post.slug && item.category === post.category).slice(0, 4);

  return (
    <>
      <Breadcrumbs items={[{ label: "Insights", href: "/blog" }, { label: post.title }]} />
      <PageBanner title={<span>{post.title}</span>} subtitle={post.category} onlyTxt />

      <article className="secGap px-[4%]">
        <div className="mx-auto max-w-[56rem]">
          <img
            src={post.image}
            alt=""
            className="aspect-[404/276] w-full rounded-xl object-cover shadow-[0_10px_30px_rgba(16,25,43,0.15)]"
          />
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] md:text-[15px] text-[#4B5563]">
            <span className="flex items-center gap-1.5">
              <CalendarDays size={16} className="text-primary" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={16} className="text-primary" />
              {post.readTime}
            </span>
          </div>
          <p className="mt-5 text-[16px] md:text-[18px] lg:text-[clamp(1.0625rem,0.8306rem+0.2708vw,1.25rem)] leading-[1.75] text-[#334155]">
            {post.excerpt}
          </p>
          {post.content?.map((paragraph, index) => (
            <p key={index} className="mt-4 text-[15px] md:text-[17px] leading-[1.75] text-[#4B5563]">
              {paragraph}
            </p>
          ))}
        </div>
      </article>

      {related.length ? (
        <section className="secGap px-[4%] pt-0!">
          <div className="mx-auto max-w-(--content-width)">
            <h2 className="mb-[1.2em] text-[clamp(1.5rem,1.2794rem+0.9804vw,1.75rem)] md:text-[36px] lg:text-[clamp(2rem,0.4589rem+1.8051vw,2.625rem)] text-ink">
              Related <strong className="font-bold text-primary">Insights</strong>
            </h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7 xl:grid-cols-4">
              {related.map((item) => (
                <BlogCard key={item.slug} post={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
