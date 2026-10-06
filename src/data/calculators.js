// One entry per calculator tab. `label` must match the tab labels in LoanCalculator.jsx and
// `slug` must equal calculatorSlug(label) there; it becomes the page URL (/calculator/<slug>). Banner and section copy change per calculator.
export const calculatorPages = [
  {
    slug: "personal-loan-emi-calculator",
    label: "Personal Loan EMI Calculator",
    bannerLead: "Calculate Your Personal",
    bannerBold: "Loan EMI with Confidence",
    bannerText:
      "Get a clear estimate of your monthly personal loan payments based on your loan amount, interest rate, and tenure—so you can plan your finances with confidence.",
    headingLead: "Personal Loan",
    headingBold: "EMI Calculator",
    description:
      "Estimate your monthly personal loan payments easily and plan your finances with clarity before you borrow.",
  },
  {
    slug: "home-loan-emi-calculator",
    label: "Home Loan EMI Calculator",
    bannerLead: "Calculate Your Home",
    bannerBold: "Loan EMI with Confidence",
    bannerText:
      "Get a clear estimate of your monthly home loan payments based on your loan amount, interest rate, and tenure—so you can plan your dream home with confidence.",
    headingLead: "Home Loan",
    headingBold: "EMI Calculator",
    description:
      "Estimate your monthly home loan payments easily and plan your finances with clarity before you borrow.",
  },
  {
    slug: "business-loan-emi-calculator",
    label: "Business Loan EMI Calculator",
    bannerLead: "Calculate Your Business",
    bannerBold: "Loan EMI with Confidence",
    bannerText:
      "Get a clear estimate of your monthly business loan payments based on your loan amount, interest rate, and tenure—so you can plan your finances with confidence.",
    headingLead: "Business Loan",
    headingBold: "EMI Calculator",
    description:
      "Estimate your monthly business loan payments easily and plan your finances with clarity before you borrow.",
  },
  {
    slug: "loan-eligibility-calculator",
    label: "Loan Eligibility Calculator",
    bannerLead: "Check Your Loan",
    bannerBold: "Eligibility with Confidence",
    bannerText:
      "Find out how much you could borrow based on your income, existing EMIs, interest rate, and tenure—so you can apply with confidence.",
    headingLead: "Loan",
    headingBold: "Eligibility Calculator",
    description:
      "Estimate how much you can borrow based on your income and existing obligations, and plan your loan with clarity before you apply.",
  },
];

export const defaultCalculatorPage = calculatorPages[0];

export const getCalculatorPage = (slug) => calculatorPages.find((page) => page.slug === slug);

