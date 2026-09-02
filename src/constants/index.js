import Reshopify from "../assets/Reshopify.png";
import blog from "../assets/Blog.png";
import buddy from "../assets/buddy.png";
import leads from "../assets/leads.png";
import messager from "../assets/Messager.png";
import ecommerce from "../assets/Ecommerce.png";
import lifefastTimer from "../assets/lifefast-timer.jpg";
import lifefastPlans from "../assets/lifefast-plans.jpg";
import lifefastCommunity from "../assets/lifefast-community.jpg";

export const navLinks = [
  { id: "work", title: "Case studies" },
  { id: "about", title: "About" },
  { id: "toolkit", title: "Toolkit" },
  { id: "contact", title: "Contact" },
];

export const caseStudies = [
  {
    number: "01",
    name: "LifeFast",
    label: "Independent product · Wellness",
    role: "A personal product I designed and built",
    summary:
      "A production fasting companion that goes beyond a timer—bringing hydration, progress, education and community into one mobile experience.",
    outcome: "Published on Google Play and reached 500+ downloads",
    metric: "500+",
    metricLabel: "downloads",
    stack: ["React Native", "Expo", "Node.js", "PostgreSQL"],
    visuals: [
      { src: lifefastTimer, alt: "LifeFast fasting timer home screen" },
      { src: lifefastPlans, alt: "LifeFast fasting plans screen" },
      { src: lifefastCommunity, alt: "LifeFast community chat screen" },
    ],
    links: [
      {
        label: "View on Google Play",
        href: "https://play.google.com/store/apps/details?id=com.jane.ndirangu.lifefast",
      },
      { label: "Visit LifeFast", href: "https://lifefast.online/" },
    ],
    scope: [
      "React Native application, Node.js API and supporting administration interface",
      "PostgreSQL data, DigitalOcean hosting, Nginx, domains and SSL",
      "Authentication, transactional email, notifications and purchase experiments",
      "Closed testing, Play Store requirements and the production release",
    ],
    challenge:
      "The project changed shape several times. I migrated its data to PostgreSQL, replaced an email setup that would not work on the server, and corrected Play Store review issues along the way.",
  },
  {
    number: "02",
    name: "Ziya",
    label: "Product engineering · Fintech",
    role: "Mobile and web engineering within a product team",
    summary:
      "A financial operations platform supporting member groups, deposits, transfers, withdrawals, loans, repayments and administrative oversight.",
    outcome: "Delivered mobile and administrative workflows for groups, wallets, transactions, loans and repayments",
    metric: "2",
    metricLabel: "product surfaces",
    stack: ["React Native", "React", "RTK Query", "Go APIs"],
    confidential: true,
    scope: [
      "Mobile flows for groups, wallets, loans, repayments and transactions",
      "Admin tables with pagination, filters and debounced search",
      "Go API integration and follow-up on unclear transaction records",
      "Stakeholder demos and documentation of a few application-security concerns",
    ],
    challenge:
      "Financial records involve several people and account types. A recurring part of the work was clarifying who initiated a transaction, who received it and how it should appear to the user.",
  },
];

export const services = [
  {
    number: "01",
    title: "Interfaces that make sense",
    description:
      "I build mobile and web flows with attention to the real task, the application state and the information a user needs next.",
  },
  {
    number: "02",
    title: "The systems behind them",
    description:
      "I am comfortable following a feature through the API, database and deployment details when the interface alone does not explain the problem.",
  },
  {
    number: "03",
    title: "Getting work released",
    description:
      "I document what I learn, ask questions when requirements are unclear and keep working through the less glamorous release details.",
  },
];

export const technologies = [
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "iOS",
  "Next.js",
  "Node.js",
  "Django",
  "PostgreSQL",
  "Firebase",
  "MongoDB",
  "Tailwind CSS",
  "Docker",
  "AWS",
  "GitHub Actions",
  "Expo",
];

export const projects = [
  {
    name: "Reshopify",
    eyebrow: "Marketplace / Full stack",
    description:
      "A resale marketplace for refurbished goods with discovery filters, bidding, notifications, and account-based shopping flows.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    image: Reshopify,
    source_code_link: "https://github.com/Jane49-cloud/Reshopify",
    tone: "coral",
  },
  {
    name: "Django CRM",
    eyebrow: "Operations / Backend",
    description:
      "A focused lead-management workspace that organises lead sources, agent assignment, follow-up, and day-to-day customer operations.",
    tags: ["Django", "Python", "Tailwind", "SQL"],
    image: leads,
    source_code_link: "https://github.com/Jane49-cloud/djangoCRM",
    tone: "lime",
  },
  {
    name: "FPosts",
    eyebrow: "Publishing / Full stack",
    description:
      "A multi-user publishing platform with authoring, editing, moderation, bookmarks, replies, and topic-led discovery.",
    tags: ["React", "Node.js", "Material UI"],
    image: blog,
    source_code_link: "https://github.com/Jane49-cloud/FPOST-FRONTEND",
    tone: "blue",
  },
  {
    name: "Buddy",
    eyebrow: "Social / API",
    description:
      "A social space for profiles, posts, reactions, comments, and connection—powered by a Django REST API.",
    tags: ["React", "Django REST", "Bootstrap"],
    image: buddy,
    source_code_link: "https://github.com/Jane49-cloud/Django-API",
    tone: "violet",
  },
  {
    name: "Messenger",
    eyebrow: "Realtime / Full stack",
    description:
      "A familiar direct-messaging experience for searching conversations and sending messages in a focused chat workspace.",
    tags: ["React", "Node.js", "MongoDB"],
    image: messager,
    source_code_link: "https://github.com/Jane49-cloud/mern",
    tone: "yellow",
  },
  {
    name: "Django Commerce",
    eyebrow: "Commerce / Backend",
    description:
      "A category-led online store with product inventory, cart behaviour, ordering, and practical Django foundations.",
    tags: ["Django", "Python", "HTML", "CSS"],
    image: ecommerce,
    source_code_link: "https://github.com/Jane49-cloud/ecommerce",
    tone: "pink",
  },
];

export const notes = [
  {
    number: "01",
    title: "Developer tools worth keeping close",
    label: "Productivity / 8 min",
    href: "https://dev.to/jane49cloud/unlock-your-developer-potential-a-guide-to-the-best-chrome-extensions-20fb",
  },
  {
    number: "02",
    title: "The JavaScript foundations that matter",
    label: "JavaScript / 2 min",
    href: "https://dev.to/jane49cloud/javascript-necessitiesthings-you-need-to-emphasis-on-1dn1",
  },
  {
    number: "03",
    title: "What to learn before getting started with Node.js",
    label: "Node.js / 1 min",
    href: "https://dev.to/jane49cloud/some-of-the-things-you-need-to-learn-before-getting-started-on-node-38hi",
  },
];

// Compatibility exports for older, currently unused modules.
export const experiences = [];
export const testimonials = [];
export const contacts = [];
