export const NAV_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "Studio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export const SERVICES = [
  {
    title: "Strategy & Positioning",
    blurb:
      "Audience research, competitive mapping, and the one sentence that wins. We think before we design.",
    points: ["Market & user research", "Positioning", "Conversion strategy"],
  },
  {
    title: "Product & Web Design",
    blurb:
      "Interfaces that communicate, not just decorate. Premium, accessible, and built to convert.",
    points: ["UX & UI design", "Design systems", "Prototyping"],
  },
  {
    title: "Engineering",
    blurb:
      "Production builds, not prototypes. Fast, scalable front ends with the back end to match.",
    points: ["Next.js & React", "APIs & CMS", "Performance"],
  },
  {
    title: "Motion & Brand",
    blurb:
      "Identity and motion that make a product feel alive and unmistakably yours.",
    points: ["Brand identity", "Motion design", "Launch campaigns"],
  },
];

export const STATS = [
  { value: "120+", label: "products shipped" },
  { value: "9", label: "years building" },
  { value: "$48M", label: "client revenue influenced" },
  { value: "4.9★", label: "average client rating" },
];

export const PROCESS = [
  {
    no: "01",
    title: "Discover",
    blurb:
      "We dig into your audience, market, and goals before touching a pixel. Clarity first.",
  },
  {
    no: "02",
    title: "Design",
    blurb:
      "Structure, then beauty. We design the path to the outcome, then make it premium.",
  },
  {
    no: "03",
    title: "Build",
    blurb:
      "Real engineering — fast, accessible, and scalable. Shipped, not just mocked up.",
  },
  {
    no: "04",
    title: "Grow",
    blurb:
      "Launch is the start. We measure what matters and keep optimizing toward revenue.",
  },
];

export const VALUES = [
  {
    title: "Outcomes over output",
    blurb: "We're measured by what your product achieves, not how many screens we made.",
  },
  {
    title: "Clarity over cleverness",
    blurb: "The best design gets out of the way. We remove before we add.",
  },
  {
    title: "Craft in the details",
    blurb: "The 1% nobody can name is the difference people can feel.",
  },
  {
    title: "Partners, not vendors",
    blurb: "We act like owners. Your roadmap is our problem too.",
  },
];

export const TEAM = [
  { name: "Elena Soto", role: "Founder & Strategy", initial: "E" },
  { name: "Marcus Vale", role: "Design Director", initial: "M" },
  { name: "Priya Anand", role: "Lead Engineer", initial: "P" },
  { name: "Jordan Pike", role: "Motion & Brand", initial: "J" },
  { name: "Dana Reyes", role: "Product Strategy", initial: "D" },
  { name: "Theo Lang", role: "Engineering", initial: "T" },
];

export const TRUSTED_BY = [
  "Northwind",
  "Loopwork",
  "Field & Flora",
  "Meridian",
  "Vela",
  "Boltshift",
];

export const TESTIMONIALS = [
  {
    quote:
      "They treated our funnel like a product, not a page. The activation lift paid for the whole engagement in six weeks.",
    name: "Dana Reyes",
    role: "VP Growth, Northwind",
  },
  {
    quote:
      "We walked in with a deck and walked out with a movement. The site did more selling than we did.",
    name: "Marcus Vale",
    role: "Founder, Loopwork",
  },
  {
    quote:
      "Prospects show up already sold. Sitora does the positioning so our calls are about scope, not price.",
    name: "Elena Soto",
    role: "Partner, Meridian Studio",
  },
];

export const FAQS = [
  {
    q: "How long does a typical project take?",
    a: "Most engagements run 6–12 weeks depending on scope. A focused launch site can ship in 2–3 weeks; a full product build is usually 10–16 weeks.",
  },
  {
    q: "What does a project cost?",
    a: "Projects typically start at $15k for a focused scope and scale from there. We'll give you a clear, fixed proposal after a short discovery call.",
  },
  {
    q: "Do you work with early-stage startups?",
    a: "Often. We love taking a sharp idea from zero to a launch that earns attention — and a round, if that's the goal.",
  },
  {
    q: "Who owns the work?",
    a: "You do — design files, code, and accounts. We hand over a clean, documented codebase you (or your team) can run with.",
  },
  {
    q: "Can you work with our existing team?",
    a: "Yes. We slot in alongside in-house teams as strategy, design, or engineering partners, and we document everything as we go.",
  },
];

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  cover: string;
  body: string[];
}

export const POSTS: Post[] = [
  {
    slug: "structure-before-beauty",
    title: "Structure before beauty: why we wireframe in public",
    excerpt:
      "The most premium-looking sites are the ones that solved structure first. Here's how we sequence a build.",
    category: "Process",
    date: "Jun 2026",
    readTime: "6 min",
    cover: "from-orange-500/30 to-amber-400/5",
    body: [
      "Good design isn't decoration — it's communication. And you can't communicate clearly through a layout that hasn't decided what it's trying to say.",
      "That's why every Sitora project starts in grayscale. Navigation, hierarchy, the path to the call-to-action: we get those right before a single color or typeface enters the conversation.",
      "When the structure is true, the visual design has something honest to dress. The result feels premium not because of gradients and glass, but because every element is earning its place.",
    ],
  },
  {
    slug: "activation-is-a-design-problem",
    title: "Activation is a design problem, not a growth hack",
    excerpt:
      "Most onboarding fixes treat symptoms. The real lever is the first ten minutes of the product.",
    category: "Product",
    date: "May 2026",
    readTime: "5 min",
    cover: "from-amber-500/30 to-orange-500/5",
    body: [
      "When a trial doesn't convert, the instinct is to add an email sequence. But the leak is almost always upstream, in the first session.",
      "We map the journey to the moment a user first feels the product's value, then we remove every step between the front door and that moment.",
      "For Northwind, that meant cutting setup from nine steps to three and turning empty states into teachers. Activation went from 29% to 67%.",
    ],
  },
  {
    slug: "orange-and-restraint",
    title: "On orange, and the discipline of one bold color",
    excerpt:
      "A single confident accent does more than a rainbow. A short note on building a brand around restraint.",
    category: "Design",
    date: "Apr 2026",
    readTime: "4 min",
    cover: "from-orange-600/30 to-amber-500/5",
    body: [
      "It's tempting to give every section its own color. It almost always makes a product feel less expensive, not more.",
      "One bold accent, used with discipline, reads as confidence. It tells the eye what matters and gets out of the way everywhere else.",
      "We build most brands around a single signature color and a deep, quiet neutral. The restraint is the point.",
    ],
  },
];

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}
