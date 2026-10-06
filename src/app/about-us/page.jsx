import PageBanner from "@/components/common/PageBanner";
import PageHero from "../../components/common/PageHero";
import SectionHeading from "../../components/common/SectionHeading";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import AboutUs from "@/components/about/AboutUs";
import VisionMission from "@/components/about/VisionMission";
import ValuesThatDefineUs from "@/components/about/ValuesThatDefineUs";
import { homeFaqsByCategory } from "../../data/homeFaqs";
import FaqSection from "@/components/common/FaqSection";
import OurOfficesCards from "@/components/contact/OurOfficesCards";
import PartnerLogos from "@/components/home/PartnerLogos";
import GoalsCta from "@/components/home/GoalsCta";
import WhyTrustUs from "@/components/about/Whytrustus";
import LeadershipTeam from "@/components/about/Leadershipteam";

export const metadata = { title: "About Us" };

export default function AboutUsPage({ breadcrumbs = [{ label: "About Us" }] }) {
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
            />
            <AboutUs />
            <VisionMission />
            <ValuesThatDefineUs />
            <PartnerLogos />
            <WhyTrustUs />
            <LeadershipTeam />
            <GoalsCta className="mb-0!" />
            <OurOfficesCards />
            <FaqSection
                title={
                    <>
                        PayYouAdvisory FAQs:{" "}
                        <strong className="font-bold text-primary">
                            Everything You Need to Know
                        </strong>
                    </>
                }
                faqsByCategory={homeFaqsByCategory}
                categoriesDescription="Browse by topic to find answers relevant to your loan, insurance, or investment questions."
                ctaSource={{ page: "Home", section: "FAQ", button: "SUBMIT QUERIES" }}
            />
        </>
    );
}
