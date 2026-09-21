import PageHero from "../../components/common/PageHero";

export const metadata = { title: "FAQ" };

const questions = [
  ["Who do you work with?", "We work with people at different stages of life who want a clearer view of their money and a thoughtful plan for what comes next."],
  ["What happens in a first conversation?", "We listen. You can tell us what is on your mind, ask questions, and get a sense of whether our approach feels right. There is no obligation to continue."],
  ["Do you offer investment advice?", "Yes. Investment advice is always connected to your goals, timeline, and comfort with risk. We explain the reasoning behind every recommendation."],
  ["How do you charge?", "We will explain our fees clearly before any advice begins. The right fee structure depends on the scope of work and the support you need."],
  ["Can I speak with you remotely?", "Absolutely. We work with clients online, making it easy to have a good conversation wherever you are based."],
];

export default function FaqPage() {
  return (
    <>
      <PageHero eyebrow="Questions, answered" title="There is no such thing as a silly money question." description="Here are a few things people ask us before they get started." />
      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="divide-y divide-[#dfe5dd] border-y border-[#dfe5dd]">
          {questions.map(([question, answer]) => <details key={question} className="group py-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-poppins text-lg font-semibold text-[#12372a]"><span>{question}</span><span className="font-inter text-2xl font-normal text-[#e56b4e] group-open:rotate-45">+</span></summary><p className="max-w-3xl pt-4 font-inter text-base leading-7 text-[#52685d]">{answer}</p></details>)}
        </div>
      </section>
    </>
  );
}