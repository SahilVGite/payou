// Single source for the Insights (blog) page: the featured "Trending" post, the "Latest" slider,
// the paginated "You Might Also Like" grid (every post) and the per-post pages at
// /blog/[slug]. Add a post here and it shows up everywhere it qualifies.

export const BLOG_CATEGORIES = ["Loans", "Investments", "Insurance", "Loan Process", "Financial Planning"];

export const blogPosts = [
  {
    slug: "understanding-fixed-and-floating-interest-rates",
    title: "Understanding Fixed and Floating Interest Rates",
    excerpt:
      "Learn how fixed and floating rates work, how they affect your repayments, and what to consider before selecting a loan structure.",
    date: "12 Sep 2026",
    readTime: "5 min read",
    category: "Loans",
    image: "/images/insights1.png",
  },
  {
    slug: "beginners-guide-to-building-emergency-savings",
    title: "A Beginner’s Guide to Building Emergency Savings",
    excerpt:
      "Discover how much you may need, where to keep your emergency fund, and simple habits that can help you prepare for unexpected expenses.",
    date: "10 Sep 2026",
    readTime: "5 min read",
    category: "Investments",
    image: "/images/insights2.png",
  },
  {
    slug: "what-makes-a-good-financial-goal",
    title: "What Makes a Good Financial Goal for Your Future?",
    excerpt:
      "Turn vague money goals into clear targets by understanding timelines, priorities, budgeting, and practical steps for staying focused.",
    date: "8 Sep 2026",
    readTime: "5 min read",
    category: "Financial Planning",
    image: "/images/insights3.png",
  },
  {
    slug: "true-cost-of-borrowing-before-applying",
    title: "Understanding the True Cost of Borrowing Before Applying",
    excerpt:
      "Look beyond the interest rate and understand processing fees, charges, repayment periods, and other costs that can affect your loan.",
    date: "15 Sep 2026",
    readTime: "5 min read",
    category: "Loan Process",
    image: "/images/insights4.png",
  },
  {
    slug: "simple-ways-to-organize-your-monthly-budget",
    title: "Simple Ways to Organize Your Monthly Budget",
    excerpt:
      "Build a practical monthly budget by tracking essential expenses, planned savings, discretionary spending, and upcoming financial commitments.",
    date: "12 Sep 2026",
    readTime: "5 min read",
    category: "Financial Planning",
    image: "/images/insights5.png",
  },
  {
    slug: "when-should-you-consider-refinancing-a-loan",
    title: "When Should You Consider Refinancing a Loan?",
    excerpt:
      "Explore common reasons borrowers consider refinancing and understand how interest rates, repayment terms, fees, and financial goals play a role.",
    date: "12 Sep 2026",
    readTime: "5 min read",
    category: "Loans",
    image: "/images/insights6.png",
  },
  {
    slug: "prepare-before-applying-for-credit",
    title: "How to Prepare Before Applying for Credit With Confidence",
    excerpt:
      "Get your financial documents, income details, existing obligations, and credit information organized before starting a new application.",
    date: "12 Sep 2026",
    readTime: "5 min read",
    category: "Loan Process",
    image: "/images/insights7.png",
  },
  {
    slug: "building-better-money-habits-in-your-30s",
    title: "Building Better Money Habits in Your 30s for Success",
    excerpt:
      "Explore practical habits around saving, spending, debt management, insurance, and long-term planning to create a more secure financial future.",
    date: "12 Sep 2026",
    readTime: "5 min read",
    category: "Insurance",
    image: "/images/insights8.png",
  },
  {
    slug: "how-to-improve-your-overall-loan-eligibility",
    title: "How to Improve Your Overall Loan Eligibility",
    excerpt:
      "Understand the key factors lenders consider and take practical steps to strengthen your loan eligibility and improve your chances of approval.",
    date: "12 Sep 2026",
    readTime: "5 min read",
    category: "Loan Process",
    image: "/images/latest_insights1.png",
  },
  {
    slug: "top-5-business-loan-options-2026",
    title: "Top 5 Business Loan Options in 2026 for Growing Businesses",
    excerpt:
      "Explore five common business financing options in 2026, including their key features, eligibility factors, and how they may suit different business needs.",
    date: "12 Sep 2026",
    readTime: "5 min read",
    category: "Loans",
    image: "/images/latest_insights2.png",
  },
  {
    slug: "education-loan-guide-for-indian-students",
    title: "Education Loan Guide for Indian Students Planning Ahead",
    excerpt:
      "Understand education loan options, eligibility criteria, interest rates, repayment terms, and essential documents to make informed decisions.",
    date: "12 Sep 2026",
    readTime: "5 min read",
    category: "Loans",
    image: "/images/latest_insights3.png",
  },
  {
    slug: "tax-benefits-on-home-loans",
    title: "Tax Benefits on Home Loans You Should Know",
    excerpt:
      "Learn about important home loan tax benefits, applicable deductions, eligibility conditions, and how they can support smarter financial planning.",
    date: "12 Sep 2026",
    readTime: "5 min read",
    category: "Investments",
    image: "/images/latest_insights4.png",
  },
  {
    slug: "simple-strategies-to-improve-loan-eligibility",
    title: "Simple Strategies to Improve Your Loan Eligibility for Faster Loan Approval",
    excerpt:
      "Improve your loan eligibility with simple, practical financial strategies by maintaining a healthy credit score, managing existing debts responsibly, keeping your income, expenses, and financial documents well organized, and avoiding unnecessary credit applications. A consistent repayment history and disciplined financial habits can strengthen your loan application and support a smoother approval process.",
    date: "12 Sep 2026",
    readTime: "6 min read",
    category: "Loan Process",
    image: "/images/trending_insights1.png",
  },
];

const bySlug = Object.fromEntries(blogPosts.map((post) => [post.slug, post]));

export const getBlogPost = (slug) => bySlug[slug];

export const trendingPost = bySlug["simple-strategies-to-improve-loan-eligibility"];

// The four "latest" posts lead the slider; a few more follow so it has enough to loop through.
export const latestPosts = [
  "how-to-improve-your-overall-loan-eligibility",
  "top-5-business-loan-options-2026",
  "education-loan-guide-for-indian-students",
  "tax-benefits-on-home-loans",
  "understanding-fixed-and-floating-interest-rates",
  "beginners-guide-to-building-emergency-savings",
  "what-makes-a-good-financial-goal",
  "true-cost-of-borrowing-before-applying",
].map((slug) => bySlug[slug]);

// Web Stories: each card opens a full-screen story viewer that steps through its slides.
// Slides reuse the blog artwork until dedicated story images are supplied.
export const webStories = [
  {
    id: "compound-interest",
    category: "Savings",
    date: "11 Mar 2026",
    title: "The Power of Compound Interest: Watch Your Savings Grow",
    cover: "/images/insights2.png",
    slides: [
      { image: "/images/insights2.png", title: "The Power of Compound Interest: Watch Your Savings Grow!" },
      { image: "/images/insights5.png", title: "Start early", text: "Even small monthly savings grow faster when interest is earned on your interest, year after year." },
      { image: "/images/latest_insights1.png", title: "Stay consistent", text: "Regular deposits and patience matter more than timing — let time do the heavy lifting." },
      { image: "/images/insights3.png", title: "Reinvest your returns", text: "Keep interest invested instead of withdrawing it to unlock the full effect of compounding." },
    ],
  },
  {
    id: "first-home-savings",
    category: "Home Loan",
    date: "11 Feb 2026",
    title: "Save For Your First Home With The Right Savings Account",
    cover: "/images/latest_insights4.png",
    slides: [
      { image: "/images/latest_insights4.png", title: "Save For Your First Home With The Right Savings Account" },
      { image: "/images/insights4.png", title: "Plan your down payment", text: "Most lenders fund up to 75–90% of the property value — the rest comes from your savings." },
      { image: "/images/insights2.png", title: "Pick a high-interest account", text: "A dedicated savings account or recurring deposit keeps your home fund separate and growing." },
      { image: "/images/insights6.png", title: "Talk to an advisor", text: "Compare home loan offers early so you know exactly how much you need to save." },
    ],
  },
  {
    id: "salary-accounts-credit",
    category: "Personal Finance",
    date: "11 June 2026",
    title: "Role of Salary Accounts in Building Credit History",
    cover: "/images/insights5.png",
    slides: [
      { image: "/images/insights5.png", title: "Role of Salary Accounts in Building Credit History" },
      { image: "/images/insights7.png", title: "Proof of steady income", text: "Regular salary credits show lenders a stable income pattern when you apply for credit." },
      { image: "/images/latest_insights1.png", title: "Pre-approved offers", text: "Banks often extend pre-approved loans and cards to salary account holders with good history." },
      { image: "/images/insights8.png", title: "Pay EMIs on time", text: "Linking EMIs to your salary account helps you never miss a payment — the biggest credit score factor." },
    ],
  },
  {
    id: "new-financial-year-savings",
    category: "Financial Planning",
    date: "14 May 2026",
    title: "How to Predict and Build Savings In The New Financial Year",
    cover: "/images/insights3.png",
    slides: [
      { image: "/images/insights3.png", title: "How to Predict and Build Savings In The New Financial Year" },
      { image: "/images/insights5.png", title: "Review last year", text: "Look at where your money went to set realistic savings targets for the year ahead." },
      { image: "/images/latest_insights4.png", title: "Plan for tax benefits", text: "Start tax-saving investments early instead of rushing at the end of the financial year." },
      { image: "/images/insights2.png", title: "Automate it", text: "Set up automatic transfers on salary day so saving happens before spending." },
    ],
  },
  {
    id: "prepare-for-credit",
    category: "Credit Guide",
    date: "14 May 2026",
    title: "How to Prepare Before Applying for Credit With Confidence",
    cover: "/images/insights7.png",
    slides: [
      { image: "/images/insights7.png", title: "How to Prepare Before Applying for Credit With Confidence" },
      { image: "/images/latest_insights1.png", title: "Check your credit score", text: "A score of 750+ usually unlocks better rates, higher approval chances and more options." },
      { image: "/images/insights4.png", title: "Keep documents ready", text: "ID, address proof, income proof and bank statements speed up every application." },
      { image: "/images/insights1.png", title: "Apply selectively", text: "Too many applications at once can lower your score — compare first, then apply." },
    ],
  },
];
