"use client";

import { useState } from "react";
import { Eyebrow, Reveal, ArrowIcon, Tag } from "@/components/ui";
import { Aurora } from "@/components/visuals";
import Magnetic from "@/components/Magnetic";
import Link from "next/link";

// Custom checkmark icon
function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 text-accent shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

// Estimate helper
function calculateCustomPrice(complexity: number, motion: number, backend: number) {
  let inrPrice = 0;
  let weeks = 2;

  // Complexity contribution
  if (complexity === 1) {
    inrPrice += 25000;
    weeks += 1;
  } else if (complexity === 2) {
    inrPrice += 85000;
    weeks += 3;
  } else if (complexity === 3) {
    inrPrice += 180000;
    weeks += 6;
  }

  // Motion contribution
  if (motion === 2) {
    inrPrice += 15000;
    weeks += 1;
  } else if (motion === 3) {
    inrPrice += 45000;
    weeks += 2;
  }

  // Backend contribution
  if (backend === 2) {
    inrPrice += 35000;
    weeks += 2;
  } else if (backend === 3) {
    inrPrice += 80000;
    weeks += 4;
  }

  return { inrPrice, usdPrice: Math.round(inrPrice / 85), weeks };
}

export default function PricingPage() {
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");

  // Calculator states
  const [complexity, setComplexity] = useState(2);
  const [motionLevel, setMotionLevel] = useState(2);
  const [backendLevel, setBackendLevel] = useState(2);

  const customEstimate = calculateCustomPrice(complexity, motionLevel, backendLevel);

  // Static Tiers
  const TIERS = [
    {
      name: "Lite",
      subtitle: "Focused landing pages & launch sites",
      inr: "25,000",
      usd: "300",
      delivery: "3-5 days",
      features: [
        "Single-page Next.js app",
        "Fully custom responsive layout",
        "Essential Framer Motion reveals",
        "Figma design handover",
        "Basic SEO optimization",
      ],
      highlight: false,
    },
    {
      name: "Growth",
      subtitle: "Premium websites with fluid interactions",
      inr: "85,000",
      usd: "1,000",
      delivery: "14-21 days",
      features: [
        "Up to 8 custom subpages",
        "High-performance Next.js build",
        "Advanced GSAP & Lenis smooth scroll",
        "Tailored CMS integrations",
        "Figma UI Design System",
        "Custom SVG Mesh assets",
      ],
      highlight: true, // Glow accent matching the reference middle card
    },
    {
      name: "Elite",
      subtitle: "Bespoke SaaS & web platforms",
      inr: "2,50,000",
      usd: "3,000",
      delivery: "30-45 days",
      features: [
        "Unlimited custom pages / app views",
        "Full Supabase backend integration",
        "Secure User Auth & database modeling",
        "Complex third-party API hookups",
        "Interactive dashboard interface",
        "Ongoing support & post-launch scaling",
      ],
      highlight: false,
    },
  ];

  const FAQS = [
    {
      q: "Can I pay in local currency?",
      a: "Yes. Sitora handles invoices globally. For Indian clients, billing can be directly managed in INR via bank transfer with GST invoicing, while international clients can pay via Stripe in USD.",
    },
    {
      q: "What payment structures do you support?",
      a: "We usually split billing 50/50 — 50% upfront to block calendar slots, and 50% upon successful delivery and sign-off. For larger platforms, we can structure milestone payments.",
    },
    {
      q: "How does the scope calculator correspond to actual proposals?",
      a: "The calculator estimates prices based on Sitora's core development rates. Once you request a scope, we'll hop on a short discovery call to map exact integrations and send a fixed-price proposal.",
    },
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero section */}
      <section className="relative px-6 pt-40 pb-12 sm:pt-48">
        <Aurora corner="center" intensity={0.7} />
        <div className="relative mx-auto max-w-3xl text-center">
          <Eyebrow className="justify-center">Pricing plans</Eyebrow>
          <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] tracking-tight text-balance sm:text-7xl">
            Clear, outcome-focused{" "}
            <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
              pricing.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-md text-ink-soft">
            Choose a fixed package or build a tailored plan. Switch between currencies below.
          </p>

          {/* Currency Toggle */}
          <div className="mt-9 flex justify-center">
            <div className="inline-flex rounded-full border border-line bg-surface/50 p-1 backdrop-blur">
              <button
                onClick={() => setCurrency("INR")}
                className={`rounded-full px-5 py-2 text-xs font-semibold tracking-wider transition-all ${
                  currency === "INR"
                    ? "bg-accent text-canvas"
                    : "text-ink-mute hover:text-ink"
                }`}
              >
                INR (₹)
              </button>
              <button
                onClick={() => setCurrency("USD")}
                className={`rounded-full px-5 py-2 text-xs font-semibold tracking-wider transition-all ${
                  currency === "USD"
                    ? "bg-accent text-canvas"
                    : "text-ink-mute hover:text-ink"
                }`}
              >
                USD ($)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Grid plans */}
      <section className="relative mx-auto max-w-wrap px-6 pb-20">
        <div className="grid gap-8 md:grid-cols-3 items-stretch">
          {TIERS.map((tier) => (
            <Reveal key={tier.name} className="flex h-full">
              <div
                className={`relative flex w-full flex-col justify-between rounded-3xl border p-7 sm:p-9 transition-all duration-300 ${
                  tier.highlight
                    ? "border-accent/40 bg-gradient-to-b from-[#1c120c] to-[#08080a] shadow-[0_20px_50px_-20px_rgba(var(--accent-rgb),0.3)]"
                    : "border-line bg-surface/40"
                }`}
              >
                {/* Glow backing matching the reference screenshot */}
                {tier.highlight && (
                  <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-b from-accent/25 via-accent/5 to-transparent opacity-60" />
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-2xl font-semibold text-ink">
                      {tier.name}
                    </h3>
                    {tier.highlight && (
                      <span className="rounded-full bg-accent/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-xs text-ink-mute leading-relaxed">
                    {tier.subtitle}
                  </p>

                  <div className="mt-6 border-b border-line pb-6">
                    <p className="font-display text-4xl font-bold text-ink">
                      {currency === "INR" ? `₹${tier.inr}` : `$${tier.usd}`}
                      <span className="text-xs font-normal text-ink-mute tracking-normal font-sans">
                        {" "}
                        / start
                      </span>
                    </p>
                    <p className="mt-1 text-xs text-accent font-medium">
                      from {tier.delivery} delivery
                    </p>
                  </div>

                  <ul className="mt-8 space-y-4 text-sm text-ink-soft">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <CheckIcon />
                        <span className="leading-tight">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10">
                  <Magnetic className="block w-full">
                    <Link
                      href={`/contact?plan=${tier.name.toLowerCase()}&currency=${currency.toLowerCase()}`}
                      className={`group flex w-full items-center justify-between rounded-full p-1 pl-6 pr-1 text-sm font-semibold transition-transform hover:scale-[1.02] active:scale-[0.98] ${
                        tier.highlight
                          ? "bg-gradient-to-r from-accent to-accent-2 text-canvas shadow-[0_8px_24px_-8px_rgba(var(--accent-rgb),0.7)]"
                          : "border border-line bg-surface/60 text-ink hover:border-accent hover:text-accent"
                      }`}
                    >
                      <span>Get started</span>
                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-full transition-transform group-hover:-rotate-45 ${
                          tier.highlight ? "bg-canvas text-accent" : "bg-surface text-ink"
                        }`}
                      >
                        <ArrowIcon className="h-4 w-4" />
                      </span>
                    </Link>
                  </Magnetic>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Interactive Scope Configurator */}
      <section className="relative mx-auto max-w-3xl px-6 py-12 border-t border-line">
        <div className="text-center">
          <Eyebrow className="justify-center">Tailored Scope</Eyebrow>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            Interactive Cost Calculator
          </h2>
          <p className="mx-auto mt-4 max-w-md text-ink-soft">
            Adjust the project parameters below to get a real-time customized estimate.
          </p>
        </div>

        <div className="mt-12 glass rounded-3xl p-6 sm:p-9 space-y-8">
          {/* Complexity Slider */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="font-semibold text-ink">Project Complexity & Size</span>
              <span className="text-accent font-medium font-mono">
                {complexity === 1 ? "Landing Page (1 page)" : complexity === 2 ? "Growth Site (2-6 pages)" : "SaaS / Web Application"}
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="3"
              value={complexity}
              onChange={(e) => setComplexity(Number(e.target.value))}
              className="w-full accent-accent bg-line h-1.5 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-ink-mute font-mono">
              <span>LANDING</span>
              <span>GROWTH</span>
              <span>CUSTOM PLATFORM</span>
            </div>
          </div>

          {/* Motion Slider */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="font-semibold text-ink">Motion & Micro-interactions</span>
              <span className="text-accent font-medium font-mono">
                {motionLevel === 1 ? "Static & Clean" : motionLevel === 2 ? "Fluid Animations" : "Immersive Storytelling (GSAP)"}
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="3"
              value={motionLevel}
              onChange={(e) => setMotionLevel(Number(e.target.value))}
              className="w-full accent-accent bg-line h-1.5 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-ink-mute font-mono">
              <span>CLEAN</span>
              <span>FLUID</span>
              <span>IMMERSIVE</span>
            </div>
          </div>

          {/* Backend Slider */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="font-semibold text-ink">Backend & Database Integrations</span>
              <span className="text-accent font-medium font-mono">
                {backendLevel === 1 ? "Simulated / Static" : backendLevel === 2 ? "Standard Database (Supabase/Auth)" : "Bespoke API / Custom Architecture"}
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="3"
              value={backendLevel}
              onChange={(e) => setBackendLevel(Number(e.target.value))}
              className="w-full accent-accent bg-line h-1.5 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-ink-mute font-mono">
              <span>NONE</span>
              <span>DATABASE</span>
              <span>COMPLEX API</span>
            </div>
          </div>

          {/* Dynamic Estimate Summary Box */}
          <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6 text-center space-y-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Estimated Custom Package</p>
              <p className="mt-3 font-display text-5xl font-bold text-ink transition-all">
                {currency === "INR"
                  ? `₹${customEstimate.inrPrice.toLocaleString("en-IN")}`
                  : `$${customEstimate.usdPrice.toLocaleString("en-US")}`}
              </p>
              <p className="mt-1 text-xs text-ink-soft font-mono">
                Timeline: ~{customEstimate.weeks} weeks delivery
              </p>
            </div>
            <p className="text-xs text-ink-mute max-w-sm mx-auto">
              This is a directional estimate based on standard developer hours. We will confirm final timelines and scopes upon request.
            </p>
            <div className="flex justify-center pt-2">
              <Magnetic>
                <Link
                  href={`/contact?complexity=${complexity}&motion=${motionLevel}&backend=${backendLevel}&currency=${currency.toLowerCase()}`}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-7 py-3 text-sm font-semibold text-canvas shadow-[0_10px_30px_-10px_rgba(var(--accent-rgb),0.7)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Request custom proposal
                  <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Magnetic>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="relative mx-auto max-w-3xl px-6 py-16">
        <Eyebrow>FAQ</Eyebrow>
        <h2 className="mt-5 mb-8 text-3xl font-semibold tracking-tight sm:text-4xl">
          Objections & answers.
        </h2>
        <div className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-surface/50">
          {FAQS.map((f) => (
            <div key={f.q} className="p-6 space-y-2">
              <h4 className="text-base font-semibold text-ink">{f.q}</h4>
              <p className="text-sm text-ink-soft">{f.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
