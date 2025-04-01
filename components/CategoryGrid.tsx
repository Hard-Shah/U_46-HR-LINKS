import { Code, Users, TrendingUp, DollarSign } from "lucide-react";

const categories = {
  engineering: {
    icon: <Code size={18} />,
    title: "Engineering",
    symbol: "</>",
    links: [
      {
        id: "eng1",
        title: "Product Documentation",
        url: "https://docs.github.com",
      },
      {
        id: "eng2",
        title: "Git Repository",
        url: "https://github.com/orgs/your-company/repositories",
      },
      { id: "eng3", title: "API Reference", url: "https://swagger.io/docs/" },
      {
        id: "eng4",
        title: "Dev Environment Setup",
        url: "https://dev.to/setup",
      },
      {
        id: "eng5",
        title: "Coding Standards",
        url: "https://google.github.io/styleguide/",
      },
      { id: "eng6", title: "Technical Roadmap", url: "https://roadmap.sh" },
      {
        id: "eng7",
        title: "Infrastructure Docs",
        url: "https://docs.aws.amazon.com/",
      },
      {
        id: "eng8",
        title: "Testing Guidelines",
        url: "https://jestjs.io/docs/getting-started",
      },
      {
        id: "eng9",
        title: "Release Notes",
        url: "https://github.com/your-company/releases",
      },
      {
        id: "eng10",
        title: "Architecture Diagrams",
        url: "https://c4model.com/",
      },
    ],
  },
  hr: {
    icon: <Users size={18} />,
    title: "HR",
    symbol: "👥",
    links: [
      {
        id: "hr1",
        title: "Employee Handbook",
        url: "https://www.shrm.org/resourcesandtools/hr-topics/pages/default.aspx",
      },
      { id: "hr2", title: "Benefits Portal", url: "https://www.benefits.gov/" },
      {
        id: "hr3",
        title: "Time Off Request",
        url: "https://hr.mycompany.com/time-off",
      },
      {
        id: "hr4",
        title: "Performance Reviews",
        url: "https://www.lattice.com/performance-reviews",
      },
      {
        id: "hr5",
        title: "Learning & Development",
        url: "https://www.udemy.com/",
      },
      {
        id: "hr6",
        title: "Org Chart",
        url: "https://www.theorg.com/org-chart",
      },
      {
        id: "hr7",
        title: "Onboarding Resources",
        url: "https://www.bamboohr.com/",
      },
      {
        id: "hr8",
        title: "Job Postings",
        url: "https://www.linkedin.com/jobs/",
      },
      {
        id: "hr9",
        title: "Expense Reimbursement",
        url: "https://expense.mycompany.com/",
      },
      {
        id: "hr10",
        title: "Company Policies",
        url: "https://www.zenefits.com/hr-guides/company-policies/",
      },
    ],
  },
  marketing: {
    icon: <TrendingUp size={18} />,
    title: "Marketing",
    symbol: "📈",
    links: [
      {
        id: "mark1",
        title: "Brand Guidelines",
        url: "https://brandfolder.com/",
      },
      {
        id: "mark2",
        title: "Social Media Calendar",
        url: "https://buffer.com/",
      },
      {
        id: "mark3",
        title: "Content Strategy",
        url: "https://coschedule.com/blog/content-marketing-strategy/",
      },
      {
        id: "mark4",
        title: "Campaign Analytics",
        url: "https://analytics.google.com/",
      },
      { id: "mark5", title: "Marketing Assets", url: "https://canva.com/" },
      {
        id: "mark6",
        title: "Event Planning",
        url: "https://www.eventbrite.com/",
      },
      { id: "mark7", title: "Customer Testimonials", url: "https://g2.com/" },
      {
        id: "mark8",
        title: "SEO Guidelines",
        url: "https://moz.com/learn/seo/what-is-seo",
      },
      {
        id: "mark9",
        title: "Email Templates",
        url: "https://mailchimp.com/resources/email-templates/",
      },
      {
        id: "mark10",
        title: "Market Research",
        url: "https://www.statista.com/",
      },
    ],
  },
  finance: {
    icon: <DollarSign size={18} />,
    title: "Finance",
    symbol: "$",
    links: [
      {
        id: "fin1",
        title: "Budget Templates",
        url: "https://templates.office.com/en-us/Budgets",
      },
      {
        id: "fin2",
        title: "Financial Reports",
        url: "https://www.sec.gov/edgar.shtml",
      },
      {
        id: "fin3",
        title: "Procurement Process",
        url: "https://www.procurement-academy.com/",
      },
      {
        id: "fin4",
        title: "Expense Policy",
        url: "https://www.concur.com/en-us/expense-policy-template",
      },
      {
        id: "fin5",
        title: "Invoicing Guidelines",
        url: "https://www.freshbooks.com/invoice-templates",
      },
      {
        id: "fin6",
        title: "Tax Documents",
        url: "https://www.irs.gov/forms-pubs",
      },
      {
        id: "fin7",
        title: "Financial Calendar",
        url: "https://www.efinancialcareers.com/news/accounting-calendar",
      },
      {
        id: "fin8",
        title: "Vendor Management",
        url: "https://www.vendorportal.com/",
      },
      {
        id: "fin9",
        title: "Cost Center Codes",
        url: "https://www.sap.com/products/erp/cost-center-accounting.html",
      },
      {
        id: "fin10",
        title: "Asset Management",
        url: "https://www.assetpanda.com/",
      },
    ],
  },
};

export default categories;
