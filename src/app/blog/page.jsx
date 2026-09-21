import Link from "next/link";
import PageHero from "../../components/common/PageHero";

export const metadata = { title: "Blog" };

const posts = [
  ["Money basics", "The quiet power of knowing where your money goes", "A simple reset for anyone who wants less noise and more intention in their finances."],
  ["Investing", "Should you invest more or pay down debt first?", "A practical way to think through the trade-off without chasing a one-size-fits-all answer."],
  ["Life planning", "Your financial plan should have room for joy", "Why a useful plan accounts for the life you are living today, not only the one you are saving for."],
];

export default function BlogPage() {
  return (
    <>
      <PageHero eyebrow="The Pay You journal" title="Useful ideas for a better money life." description="No hot takes. No complicated charts. Just thoughtful perspectives to help you make your next decision with more clarity." />
      <section className="bg-white px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {posts.map(([category, title, description], index) => (
            <article key={title} className={`flex min-h-[360px] flex-col justify-between rounded-3xl p-7 ${index === 1 ? "bg-[#12372a] text-white" : "bg-[#eaf0e8] text-[#12372a]"}`}>
              <div><p className={`font-inter text-xs font-bold uppercase tracking-[0.16em] ${index === 1 ? "text-[#f59a7c]" : "text-[#e56b4e]"}`}>{category}</p><h2 className="mt-12 font-poppins text-2xl font-semibold leading-tight">{title}</h2><p className={`mt-4 font-inter text-sm leading-7 ${index === 1 ? "text-[#bdd0c5]" : "text-[#52685d]"}`}>{description}</p></div>
              <Link href="/contact-us" className={`mt-8 font-inter text-sm font-bold ${index === 1 ? "text-[#f59a7c]" : "text-[#e56b4e]"}`}>Read the note <span aria-hidden="true">-&gt;</span></Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}