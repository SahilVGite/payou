import Link from "next/link";
import PageHero from "../../components/common/PageHero";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import PageBanner from "@/components/common/PageBanner";

export const metadata = { title: "Blog" };

const posts = [
  [
    "Money basics",
    "The quiet power of knowing where your money goes",
    "A simple reset for anyone who wants less noise and more intention in their finances.",
  ],
  [
    "Investing",
    "Should you invest more or pay down debt first?",
    "A practical way to think through the trade-off without chasing a one-size-fits-all answer.",
  ],
  [
    "Life planning",
    "Your financial plan should have room for joy",
    "Why a useful plan accounts for the life you are living today, not only the one you are saving for.",
  ],
];

export default function BlogPage({ breadcrumbs = [{ label: "Insights" }] }) {
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <PageBanner
        title={<>Insights for a <br /><span>Brighter Financial Future</span></>}
        subtitle="Expert advice. Practical guides. Real stories. Learn how to optimize your financial journey with our dedicated loan and advisory resources."
        image="/images/blog_banner.png"
        imageAlt="Contact us"
      />
    </>
  );
}
