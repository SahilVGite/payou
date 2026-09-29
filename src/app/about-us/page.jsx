import PageBanner from "@/components/common/PageBanner";
import PageHero from "../../components/common/PageHero";
import SectionHeading from "../../components/common/SectionHeading";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import AboutUs from "@/components/about/AboutUs";

export const metadata = { title: "About Us" };

export default function AboutUsPage({ breadcrumbs = [{ label: "About US" }] }) {
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <PageBanner
        title={
          <>
            Expert Guidance for <br />
            <span>Every Financial Journey</span>
          </>
        }
        subtitle="At PayYou Advisory, we simplify complex financial decisions with trusted guidance, tailored loan solutions, and access to leading banks and financial institutions—helping you move forward with confidence."
        image="/images/about_banner.png"
        imageAlt="Contact us"
        bottomRightImage={true}
      />
      <AboutUs />
    </>
  );
}
