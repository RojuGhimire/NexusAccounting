export const NAVLINKS = [
  {
    name: "Home",
    path: "#home",
  },
  {
    name: "About Us",
    path: "#about",
  },
  {
    name: "Our Team",
    path: "#team",
  },

  {
    name: "Services",
    path: "#services",
  },
  {
    name: "Software",
    path: "#software",
  },
  {
    name: "Pricing",
    path: "#pricing",
  },
  {
    name: "Appointment",
    path: "#appointment",
  },
  {
    name: "Contact",
    path: "#contact",
  },

] as const;

export const servicesCards = [
  {
    title: "Remote Book-keeping:",
    description:
      "Our remote bookkeeping services cover day-to-day transactions, bank reconciliations, and financial statement preparations.",
    img: "/service1.jpg",
  },
  {
    title: "Financial Reporting:",
    description:
      "We generate insightful financial reports tailored to your business needs, providing valuable data for decision-making.",
    img: "/service2.jpg",
  },
  {
    title: "Payroll Services:",
    description:
      "Let us handle payroll processing, including tax calculations and compliance, to ensure your employees are paid accurately and on time.",
    img: "/service3.jpg",
  },
  {
    title: "Tax Preparation and Filing:",
    description:
      "Our experts manage tax preparation and filing, optimizing deductions and credits to minimize liabilities.",
    img: "/service3.jpg",
  },
  {
    title: "Quickbooks Online:",
    description:
      "We are proficient in QuickBooks Online, leveraging its features for efficient bookkeeping.",
    img: "/service4.jpg",
  },
  {
    title: "Xero",
    description:
      "Our team is skilled in utilizing Xero for seamless financial management.",
    img: "/service5.jpg",
  },
  {
    title: "FreshBooks",
    description:
      "We work with FreshBooks to simplify invoicing and expense tracking for our clients.",
    img: "/service6.jpg",
  },
];


export const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 * index,
      duration: 0.333,
    },
  }),
};
