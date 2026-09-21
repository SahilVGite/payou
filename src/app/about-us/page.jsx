import PageHero from "../../components/common/PageHero";
import SectionHeading from "../../components/common/SectionHeading";

export const metadata = { title: "About Us" };

export default function AboutUsPage() {
  return (
    <>
      <PageHero eyebrow="About Pay You" title="A different kind of financial advice." description="We believe money advice should feel clear, personal, and useful in real life. No performance. No pressure. Just a better way to make decisions." />
      <section className="bg-white px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-start">
          <SectionHeading eyebrow="Why we exist" title="Money is personal. Your advice should be too." />
          <div className="space-y-6 font-inter text-base leading-8 text-[#52685d]">
            <p>Most financial advice starts with products. We start with questions: What are you building? What keeps you up at night? What would more freedom look like?</p>
            <p>Pay You was created to give thoughtful people a place to make sense of their money, with guidance that is practical enough to act on and personal enough to matter.</p>
            <p>We are here for the full picture, from your first investment to the choices that shape your family&apos;s future.</p>
          </div>
        </div>
      </section>
      <section className="bg-[#12372a] px-6 py-20 text-white lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Our principles" title="The way advice should feel." />
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {["Clear over clever", "Long-term over loud", "Human over transactional"].map((principle) => <div key={principle} className="border-t border-[#f59a7c] pt-5"><h3 className="font-poppins text-xl font-semibold">{principle}</h3><p className="mt-3 font-inter text-sm leading-7 text-[#bdd0c5]">We make room for nuance, explain the why, and keep your real life at the centre.</p></div>)}
          </div>
        </div>
      </section>
    </>
  );
}