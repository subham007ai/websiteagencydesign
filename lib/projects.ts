export interface Project {
  slug: string;
  title: string;
  client: string;
  sector: string;
  year: string;
  services: string[];
  tagline: string;
  /** Tailwind gradient classes used for the cover/visual placeholders. */
  cover: string;
  stat: string;
  statLabel: string;
  challenge: string;
  approach: string;
  solution: string;
  results: { value: string; label: string }[];
  gallery: string[];
}

export const PROJECTS: Project[] = [
  {
    slug: "northwind-analytics",
    title: "Northwind Analytics",
    client: "Northwind",
    sector: "B2B SaaS · Data platform",
    year: "2025",
    services: ["Strategy", "Product Design", "Engineering"],
    tagline: "Turning a powerful-but-confusing data tool into a product people activate.",
    cover: "from-orange-500/30 via-amber-500/10 to-transparent",
    stat: "+131%",
    statLabel: "trial → paid conversion",
    challenge:
      "Northwind had a genuinely powerful analytics engine buried under a nine-step setup. 71% of trials never reached the moment where the product proved its value, and the team was losing well-qualified accounts at onboarding.",
    approach:
      "We mapped the activation journey end to end, cut setup from nine steps to three, and reframed every empty state as a chance to teach by doing. Positioning shifted from 'powerful analytics' to 'answers on day one'.",
    solution:
      "A rebuilt onboarding flow, an in-app activation checklist, and a usage dashboard — shipped in Next.js on a Supabase backend with event tracking wired through from the first session.",
    results: [
      { value: "67%", label: "activation rate (from 29%)" },
      { value: "+131%", label: "trial → paid" },
      { value: "−42%", label: "time to first insight" },
    ],
    gallery: [
      "from-orange-500/25 to-amber-400/5",
      "from-amber-500/20 to-orange-600/5",
      "from-orange-400/20 to-transparent",
    ],
  },
  {
    slug: "loopwork",
    title: "Loopwork",
    client: "Loopwork",
    sector: "Seed-stage · Workflow automation",
    year: "2025",
    services: ["Brand", "Web", "Motion"],
    tagline: "A launch story strong enough to start a movement — and close a round.",
    cover: "from-amber-500/30 via-orange-500/10 to-transparent",
    stat: "12.4k",
    statLabel: "waitlist in 21 days",
    challenge:
      "A pre-product company with a sharp idea but no narrative. Investors and early users had nothing concrete to rally behind, and the founders were selling the vision one call at a time.",
    approach:
      "We sharpened the positioning around a single painful job-to-be-done and built a scrollytelling launch site that sells the vision better than any deck could.",
    solution:
      "A motion-led landing experience, a frictionless waitlist funnel, and a pitch-ready interactive demo — built in two focused sprints.",
    results: [
      { value: "12.4k", label: "waitlist signups" },
      { value: "21 days", label: "to a closed seed round" },
      { value: "8.3%", label: "visitor → waitlist" },
    ],
    gallery: [
      "from-amber-500/25 to-orange-500/5",
      "from-orange-500/20 to-amber-400/5",
      "from-amber-400/20 to-transparent",
    ],
  },
  {
    slug: "field-and-flora",
    title: "Field & Flora",
    client: "Field & Flora",
    sector: "DTC · Home & wellness",
    year: "2024",
    services: ["E-commerce", "Design", "CRO"],
    tagline: "A storefront as considered as the products it sells.",
    cover: "from-orange-600/30 via-amber-500/10 to-transparent",
    stat: "+27%",
    statLabel: "average order value",
    challenge:
      "Beautiful products, leaky funnel. Mobile checkout was abandoned at 79% and carefully made bundles never sold because nobody could find them.",
    approach:
      "We rebuilt the product story, streamlined checkout to two taps, and engineered smart bundle upsells that feel like help, not pressure.",
    solution:
      "A headless storefront with sub-second loads, Apple/Google Pay, and a returns flow customers actually finish.",
    results: [
      { value: "3.8%", label: "conversion rate" },
      { value: "+27%", label: "average order value" },
      { value: "2.1x", label: "repeat purchase rate" },
    ],
    gallery: [
      "from-orange-600/25 to-amber-500/5",
      "from-amber-500/20 to-orange-500/5",
      "from-orange-500/20 to-transparent",
    ],
  },
  {
    slug: "the-long-game",
    title: "The Long Game",
    client: "The Long Game",
    sector: "Creator · Membership & courses",
    year: "2024",
    services: ["Brand", "Web", "Funnel"],
    tagline: "Helping a creator own the audience instead of renting it.",
    cover: "from-amber-400/30 via-orange-500/10 to-transparent",
    stat: "$320k",
    statLabel: "first launch revenue",
    challenge:
      "A huge following scattered across platforms with no home base, and no way to monetize the relationship deeply or durably.",
    approach:
      "We built an owned brand hub — newsletter, membership, and a flagship course funnel designed to compound over time.",
    solution:
      "A content-first site, paid membership, and a launch sequence integrated with the existing audience.",
    results: [
      { value: "84k", label: "owned email list" },
      { value: "$320k", label: "first launch revenue" },
      { value: "92%", label: "member retention" },
    ],
    gallery: [
      "from-amber-400/25 to-orange-500/5",
      "from-orange-500/20 to-amber-400/5",
      "from-amber-500/20 to-transparent",
    ],
  },
  {
    slug: "meridian-studio",
    title: "Meridian Studio",
    client: "Meridian",
    sector: "Agency · Brand & growth",
    year: "2024",
    services: ["Positioning", "Web", "Case System"],
    tagline: "A site that pre-sells the premium tier before the first call.",
    cover: "from-orange-500/30 via-amber-400/10 to-transparent",
    stat: "3.1x",
    statLabel: "qualified leads",
    challenge:
      "Great work, forgettable site. The portfolio looked like everyone else's and quietly undersold their fees.",
    approach:
      "We repositioned around outcomes rather than deliverables and built a site that does the qualifying up front.",
    solution:
      "An interactive case-study system and a lead form that surfaces budget and timeline before the conversation starts.",
    results: [
      { value: "3.1x", label: "qualified leads" },
      { value: "+44%", label: "average deal size" },
      { value: "−30%", label: "sales cycle length" },
    ],
    gallery: [
      "from-orange-500/25 to-amber-400/5",
      "from-amber-400/20 to-orange-500/5",
      "from-orange-400/20 to-transparent",
    ],
  },
  {
    slug: "vela-health",
    title: "Vela Health",
    client: "Vela",
    sector: "Healthtech · Patient app",
    year: "2025",
    services: ["Research", "Product Design", "Engineering"],
    tagline: "Making a care companion patients actually open every day.",
    cover: "from-amber-500/30 via-orange-400/10 to-transparent",
    stat: "4.8★",
    statLabel: "app store rating",
    challenge:
      "A clinically strong product with a clinical feel. Daily engagement was low and patients dropped off after the first week.",
    approach:
      "We led with warmth and clarity, simplified the daily loop to a single meaningful action, and designed for accessibility from the start.",
    solution:
      "A calm, accessible patient app with gentle reminders and a progress story patients want to come back to.",
    results: [
      { value: "3.4x", label: "daily active use" },
      { value: "4.8★", label: "app store rating" },
      { value: "WCAG AA", label: "accessibility verified" },
    ],
    gallery: [
      "from-amber-500/25 to-orange-400/5",
      "from-orange-400/20 to-amber-500/5",
      "from-amber-400/20 to-transparent",
    ],
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
