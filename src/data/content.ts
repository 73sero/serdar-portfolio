export const personal = {
  name: "Serdar Saglam",
  tagline: "Business Developer by experience. Computer Scientist by training.",
  headline: "I Write Code. I Close Deals. I Build Growth.",
  subheadline: "I bring a rare hybrid edge to B2B environments — combining Fortune 500 sales execution with full-stack technical fluency to build tools, pipelines, and partnerships that actually scale.",
  location: "Frankfurt am Main, Germany",
  phone: "+49 176 80485453",
  email: "serdar.saglam@outlook.de",
  linkedin: "https://linkedin.com/in/serdar-saglam",
  locationShort: "Frankfurt, DE",
};

export const aboutText = [
  "I'm the kind of person who automates a sales report at 2 AM and closes a six-figure deal at 10 AM the same day.",
  "My journey started in automotive retail — 340 vehicles sold, €10k to €110k price points, end-to-end ownership from first handshake to financing paperwork.",
  "Today, I'm a B2B Territory Manager at Philip Morris International while finishing my B.Sc. in Computer Science at TU Darmstadt. I don't just use CRMs — I think about how to improve them.",
];

export const experiences = [
  {
    id: 1,
    company: "Philip Morris International",
    role: "B2B Territory Manager (Project Role)",
    previous: "Sales Representative / Field Sales Executive",
    location: "Frankfurt am Main, Germany",
    dates: "Jun 2024 – Present",
    promoted: "Oct 2025",
    highlights: [
      "Acquired 1,300+ new B2C customers in 18 months through field sales execution and local POS network building.",
      "Promoted to B2B Territory Manager after proving ability to manage ~65 commercial B2B accounts and grow territory distribution by +21% in 5 months.",
      "Built and maintained local partner/POS networks from scratch, driving street-level market penetration.",
      "Daily power-user of Salesforce CRM, Power BI, and real-time KPI dashboards.",
      "Balanced full-time studies in Computer Science with part-time sales leadership.",
    ],
    tags: ["Salesforce", "Power BI", "KPI Reporting", "B2B", "B2C"],
  },
  {
    id: 2,
    company: "FS Automobile",
    role: "Automotive Sales Consultant",
    location: "Frankfurt am Main, Germany",
    dates: "Apr 2020 – Apr 2022",
    highlights: [
      "Sold 340 vehicles across a 24-month tenure, spanning the €10,000 – €110,000 price spectrum.",
      "Managed the entire sales lifecycle: needs assessment, advisory, negotiation, financing, and closing.",
      "Built a strong referral and repeat-customer base by maintaining post-sale relationships.",
    ],
    metrics: [
      { label: "Vehicles Sold", value: "340+" },
      { label: "Price Range", value: "€10K–€110K" },
      { label: "Tenure", value: "24 Mo" },
    ],
    tags: ["Consultative Selling", "Finance", "CRM"],
  },
  {
    id: 3,
    company: "GoNetwork GmbH",
    role: "Administrative Intern — Real Estate Management",
    location: "Darmstadt, Germany",
    dates: "Aug 2018 – Jun 2019",
    highlights: [
      "Managed bookkeeping and financial records using Lexware, supporting a 100+ unit property portfolio.",
      "Acted as first-point-of-contact for tenant inquiries, coordinating maintenance workflows.",
    ],
    tags: ["Lexware", "Property Management", "Bookkeeping"],
  },
];

export const education = [
  {
    school: "Technical University of Darmstadt",
    degree: "B.Sc. Computer Science",
    dates: "Oct 2023 – Expected 2026",
    note: "Transferred from Goethe University Frankfurt for specialization.",
  },
  {
    school: "Goethe University Frankfurt",
    degree: "B.Sc. Computer Science",
    dates: "Apr 2022 – Oct 2023",
    note: "Completed foundational coursework; transferred to TU Darmstadt.",
  },
  {
    school: "ProGrenius Private School",
    degree: "University Entrance Qualification (Fachhochschulreife)",
    dates: "Aug 2017 – Jun 2019",
    note: "",
  },
];

export const skills = {
  sales: [
    { name: "Salesforce CRM", level: "Advanced" },
    { name: "Power BI", level: "Advanced" },
    { name: "Excel", level: "Advanced" },
    { name: "KPI Reporting", level: "Advanced" },
    { name: "Lexware", level: "Intermediate" },
  ],
  technical: [
    { name: "Python", level: "Intermediate" },
    { name: "SQL", level: "Intermediate" },
    { name: "Java", level: "Intermediate" },
    { name: "HTML/CSS/JS", level: "Intermediate" },
    { name: "Git & GitHub", level: "Intermediate" },
  ],
};

export const projects = [
  {
    id: 1,
    title: "Corporate Website",
    tagline: "FS Automobile Digital Presence",
    stack: ["HTML5", "CSS3", "JS", "GitHub Pages"],
    description: "Designed, developed, and deployed a fully responsive corporate website for the automotive dealership. Mobile-first CSS grid, optimized image loading, custom contact form with client-side validation.",
    outcome: "Replaced outdated template with a branded, fast-loading digital storefront.",
    color: "#c8ff00",
  },
  {
    id: 2,
    title: "MarketScout",
    tagline: "B2B Lead Scraper & Analyzer",
    stack: ["Python", "BeautifulSoup", "Pandas", "Matplotlib"],
    description: "Built a Python scraper that ingests public business directories and structures lead data into analyzable datasets. Includes duplicate detection and Pandas pipelines for industry segmentation.",
    outcome: "Reduced manual prospecting time by ~70%.",
    color: "#05d9e8",
  },
  {
    id: 3,
    title: "InventoryIQ",
    tagline: "Desktop Inventory Manager",
    stack: ["Java 17", "JavaFX", "SQLite", "Maven"],
    description: "Cross-platform desktop app for tracking inventory levels, supplier data, and reorder thresholds. Clean JavaFX UI with CRUD operations, real-time stock alerts, and search/filter.",
    outcome: "Functional standalone inventory system with OOP architecture.",
    color: "#c8ff00",
  },
  {
    id: 4,
    title: "TUDB Student Records",
    tagline: "Database Design & Implementation",
    stack: ["PostgreSQL", "SQL", "Python", "psycopg2"],
    description: "Designed and normalized a relational database schema for student enrollment, courses, and grades. Complex SQL with JOINs, CTEs, aggregates, and transaction blocks.",
    outcome: "Full academic-grade database from ER diagram to seeded data.",
    color: "#05d9e8",
  },
  {
    id: 5,
    title: "TerritoryView",
    tagline: "B2B Sales Dashboard",
    stack: ["Python", "Streamlit", "Pandas", "Plotly"],
    description: "Interactive sales dashboard simulating PMI-level KPI visibility. Ingested mock data with dynamic filters, drill-down tables, trend charts, revenue pacing, and account penetration heatmaps.",
    outcome: "Prototype mirroring real-world B2B territory management reporting.",
    color: "#c8ff00",
  },
  {
    id: 6,
    title: "AutoNotify",
    tagline: "Personal Sales Automation Pipeline",
    stack: ["Python", "smtplib", "Google Sheets API"],
    description: "Lightweight automation reading a Google Sheet of pending follow-ups and auto-sending personalized reminder emails via SMTP at scheduled intervals. Modular architecture with error handling.",
    outcome: "Automates ~30 weekly manual follow-up tasks with zero dropout.",
    color: "#05d9e8",
  },
];
