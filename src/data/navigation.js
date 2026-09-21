export const loanGroups = [
  [
    "Personal Loans by Profile",
    [
      "Personal Loan for Salaried",
      "Personal Loan for Self-Employed",
      "Personal Loan for Doctors",
      "Personal Loan for Chartered Accountant",
      "Personal Loan for Women",
    ],
  ],
  [
    "Personal Loans by Purpose",
    [
      "Personal Loan for Travel",
      "Personal Loan for Wedding",
      "Personal Loan for Medical Emergency",
      "Personal Loan for Education",
      "Personal Loan for Debt Consolidation",
    ],
  ],
  [
    "Flexible & Instant Loans",
    [
      "Instant / Instant Personal Loan (Pre-approved)",
      "Flexi Personal Loan",
      "Flexi Hybrid Personal Loan",
      "Short-term / Emergency Personal Loan",
      "Term Loan / Long Term (Fixed EMI)",
    ],
  ],
  [
    "Loan Management & Top-Up",
    [
      "Personal Loan Top-up",
      "Personal Loan Balance Transfer",
      "Personal Loan by Amount",
    ],
  ],
];

export const loanMenu = [
  "Personal Loan",
  "Business Loan",
  "Home Loan",
  "Loan Against Property",
  "Gold Loan",
  "Vehicle & Consumer Loan",
  "Education Loan",
  "Individual Loan",
];

// Flattened list of every personal-loan sub-link from loanGroups, reused by the footer accordion.
const personalLoanSubLinks = loanGroups.flatMap(([, links]) => links);

export const footerCategories = {
  LOANS: [
    { label: "Personal Loan", subLinks: personalLoanSubLinks },
    {
      label: "Business Loan",
      subLinks: ["Term Loan", "Working Capital Loan", "Business Loan for Self-Employed", "Machinery Loan"],
    },
    {
      label: "Home Loan",
      subLinks: ["Home Loan for Salaried", "Home Loan Balance Transfer", "Home Loan Top-up", "Plot + Construction Loan"],
    },
    {
      label: "Loan Against Property",
      subLinks: ["LAP for Salaried", "LAP for Self-Employed", "LAP Balance Transfer"],
    },
    {
      label: "Gold Loan",
      subLinks: ["Gold Loan Online", "Gold Loan for Business", "Gold Loan Balance Transfer"],
    },
    {
      label: "Loan Against Securities",
      subLinks: ["Loan Against Mutual Funds", "Loan Against Shares", "Loan Against Insurance Policy"],
    },
    {
      label: "Vehicle & Consumer Loan",
      subLinks: ["Two-Wheeler Loan", "Car Loan", "Used Car Loan", "Consumer Durable Loan"],
    },
    {
      label: "Education Loan",
      subLinks: ["Education Loan for India Studies", "Education Loan for Studying Abroad", "Education Loan Balance Transfer"],
    },
  ],
  ACCOUNTS: [
    { label: "Savings Account", subLinks: ["Zero Balance Savings Account", "Senior Citizen Savings Account"] },
    { label: "Current Account", subLinks: ["Current Account for Startups", "Current Account for SMEs"] },
    { label: "Salary Account", subLinks: ["Zero Balance Salary Account", "Premium Salary Account"] },
    { label: "NRI Account", subLinks: ["NRE Account", "NRO Account"] },
  ],
  INSURANCE: [
    { label: "Life Insurance", subLinks: ["Term Plan", "ULIP", "Whole Life Insurance"] },
    { label: "Health Insurance", subLinks: ["Family Floater Plan", "Individual Health Plan", "Critical Illness Cover"] },
    { label: "Motor Insurance", subLinks: ["Car Insurance", "Two-Wheeler Insurance"] },
    { label: "Term Insurance", subLinks: ["Term Insurance for Salaried", "Term Insurance for Self-Employed"] },
  ],
  INVESTMENTS: [
    { label: "Mutual Funds", subLinks: ["Equity Mutual Funds", "Debt Mutual Funds", "SIP Investment"] },
    { label: "Fixed Deposits", subLinks: ["Bank Fixed Deposits", "Corporate Fixed Deposits"] },
    { label: "Bonds", subLinks: ["Government Bonds", "Corporate Bonds"] },
    { label: "Portfolio Advisory", subLinks: ["Wealth Management", "Retirement Planning"] },
  ],
  CALCULATORS: [
    { label: "EMI Calculator", subLinks: [] },
    { label: "Eligibility Calculator", subLinks: [] },
    { label: "Balance Transfer Calculator", subLinks: [] },
    { label: "Loan Comparison Calculator", subLinks: [] },
  ],
};
