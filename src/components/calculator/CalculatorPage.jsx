import Breadcrumbs from "@/components/common/Breadcrumbs";
import PageBanner from "@/components/common/PageBanner";
import FaqSection from "@/components/common/FaqSection";
import LoanCalculator from "@/components/home/LoanCalculator";
import { homeFaqsByCategory } from "../../data/homeFaqs";

// Shared body of /calculator and /calculator/[slug]: banner (same component as the Contact
// page), the home page's calculator with URL-driven tabs, and the home FAQ section. Everything
// calculator-specific comes from `page` (see data/calculators.js).
export default function CalculatorPage({ page }) {
    return (
        <>
            <Breadcrumbs items={[{ label: "Calculators", href: "/calculator" }, { label: page.label }]} />
            <PageBanner
                title={
                    <>
                        {page.bannerLead} <br />
                        <span>{page.bannerBold}</span>
                    </>
                }
                subtitle={page.bannerText}
                image="/images/calculator-banner.png"
                imageAlt={page.label}
            />
            <LoanCalculator
                activeTab={page.label}
                tabBasePath="/calculator"
                heading={
                    <>
                        {page.headingLead} <strong className="font-bold text-primary">{page.headingBold}</strong>
                    </>
                }
                description={page.description}
                descriptionClassName="max-w-[55ch]"
            />
            <FaqSection
                title={
                    <>
                        Got Questions? <strong className="font-bold text-primary">We&apos;ve Got Answers.</strong>
                    </>
                }
                faqsByCategory={homeFaqsByCategory}
                categoriesDescription="Choose from our specific range of topics to address all your digital banking queries."
                ctaSource={{ page: "Calculator", section: "FAQ", button: "SUBMIT QUERIES" }}
            />
        </>
    );
}
