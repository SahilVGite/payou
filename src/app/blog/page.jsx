import Breadcrumbs from "@/components/common/Breadcrumbs";
import PageBanner from "@/components/common/PageBanner";
import GoalsCta from "@/components/home/GoalsCta";
import TrendingInsights from "@/components/blog/TrendingInsights";
import LatestInsights from "@/components/blog/LatestInsights";
import WebStories from "@/components/blog/WebStories";
import AllInsights from "@/components/blog/AllInsights";

export const metadata = { title: "Blog" };

export default function BlogPage({ breadcrumbs = [{ label: "Insights" }] }) {
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <PageBanner
        title={<>Insights for a <span>Brighter Financial Future</span></>}
        subtitle={<>Expert advice. Practical guides. Real stories. Learn how to optimize your <br />financial journey with our dedicated loan and advisory resources.</>}
        onlyTxt
      />
      <TrendingInsights />
      <LatestInsights />
      <WebStories />
      <AllInsights />
      <FinanceYourGoalsCta />
    </>
  );
}

// Same banner as the home page's GoalsCta, in red with the blog's own copy and artwork.
function FinanceYourGoalsCta() {
  return (
    <GoalsCta
      className="pt-0!"
      title={
        <>
          <span className="font-normal">Finance Your Goals.</span>
          <br />
          <strong className="font-bold">Shape Your Future.</strong>
        </>
      }
      bgClassName="bg-accent"
      bgImage="/images/shape_your_future_bg.png"
      image="/images/shape_your_future_main.png"
      imageAlt="Smiling woman with a coffee mug working on her laptop"
      imageClassName="max-w-[30%] [@media(min-width:1400px)]:max-w-[26%]"
      expertButtonClassName="bg-primary shadow-[0_5px_10px_rgba(19,75,150,0.3)] hover:bg-[#0f3c78]"
      sourcePage="Blog"
    />
  );
}
