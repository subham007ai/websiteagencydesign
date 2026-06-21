"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { ArrowIcon } from "@/components/ui";

const schema = z.object({
  building: z.string().min(1, "Tell us what you're building"),
  timeline: z.string().min(1, "Pick a timeline"),
  budget: z.string().min(1, "Choose a budget range"),
  name: z.string().min(2, "Your name, please"),
  email: z.string().email("Enter a valid email"),
  details: z.string().max(800).optional(),
  website_hp: z.string().optional(), // Honeypot field for spam mitigation
});

type FormValues = z.infer<typeof schema>;

const BUILDING = ["SaaS", "Startup", "E-commerce", "Creator", "Agency", "Other"];
const TIMELINES = ["ASAP", "1–3 months", "3–6 months", "Exploring"];
const BUDGETS = ["< $15k", "$15k–$40k", "$40k–$80k", "$80k+"];

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      building: "",
      timeline: "",
      budget: "",
      name: "",
      email: "",
      details: "",
    },
  });

  const building = watch("building");
  const timeline = watch("timeline");
  const budget = watch("budget");

  const estimate = getEstimate(building, timeline, budget);

  const onSubmit = async (values: FormValues) => {
    if (values.website_hp) {
      // Spam submission detected! Silently ignore or simulate success.
      await new Promise((r) => setTimeout(r, 600));
      setSent(true);
      return;
    }
    // No backend wired — swap for a server action / Supabase insert.
    await new Promise((r) => setTimeout(r, 900));
    // eslint-disable-next-line no-console
    console.log("Lead captured:", values);
    setSent(true);
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass rounded-3xl p-10 text-center"
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-2 text-canvas">
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3 className="mt-5 text-2xl font-semibold text-ink">Message received.</h3>
        <p className="mt-2 text-ink-soft">
          We&rsquo;ll reply within one business day with next steps and a few
          first ideas.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="glass space-y-6 rounded-3xl p-7 sm:p-9">
      <Field label="What are you building?" error={errors.building?.message}>
        <Chips options={BUILDING} value={building} onPick={(v) => setValue("building", v, { shouldValidate: true })} />
        <input type="hidden" {...register("building")} />
      </Field>

      <Field label="Timeline?" error={errors.timeline?.message}>
        <Chips options={TIMELINES} value={timeline} onPick={(v) => setValue("timeline", v, { shouldValidate: true })} />
        <input type="hidden" {...register("timeline")} />
      </Field>

      <Field label="Budget range?" error={errors.budget?.message}>
        <Chips options={BUDGETS} value={budget} onPick={(v) => setValue("budget", v, { shouldValidate: true })} />
        <input type="hidden" {...register("budget")} />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" error={errors.name?.message}>
          <Input {...register("name")} placeholder="Jane Doe" autoComplete="name" />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <Input {...register("email")} type="email" placeholder="jane@company.com" autoComplete="email" inputMode="email" />
        </Field>
      </div>

      <Field label="Anything else? (optional)">
        <textarea
          {...register("details")}
          rows={3}
          placeholder="A sentence or two about the goal…"
          className="w-full resize-none rounded-xl border border-line bg-canvas/60 px-4 py-3 text-sm text-ink placeholder:text-ink-mute focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
        />
      </Field>

      {estimate && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="rounded-2xl border border-accent/20 bg-accent/5 p-5 text-left space-y-3 overflow-hidden"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">Interactive Estimate</span>
            <span className="text-xs font-mono text-ink-soft">{estimate.weeks}</span>
          </div>
          <h4 className="text-lg font-bold text-ink">{estimate.scope}</h4>
          <ul className="space-y-1.5 text-xs text-ink-soft">
            {estimate.features.map((f, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {f}
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Honeypot field for spam prevention */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="website_hp">Leave this field blank</label>
        <input
          id="website_hp"
          type="text"
          {...register("website_hp")}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-7 py-3.5 text-sm font-semibold text-canvas shadow-[0_10px_30px_-10px_rgba(var(--accent-rgb),0.7)] transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60"
      >
        {isSubmitting ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-canvas/40 border-t-canvas" />
            Sending…
          </>
        ) : (
          <>
            Start the conversation
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>
      <p className="text-center text-xs text-ink-mute">
        No spam. A real human replies within one business day.
      </p>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-2.5 block text-sm font-medium text-ink">{label}</label>
      {children}
      {error && (
        <p role="alert" className="mt-2 text-xs text-[#ff7a7a]">
          {error}
        </p>
      )}
    </div>
  );
}

function Chips({
  options,
  value,
  onPick,
}: {
  options: string[];
  value: string;
  onPick: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          key={o}
          type="button"
          onClick={() => onPick(o)}
          aria-pressed={value === o}
          className={`rounded-full border px-4 py-2 text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
            value === o
              ? "border-transparent bg-accent font-medium text-canvas"
              : "border-line text-ink-soft hover:border-ink-mute hover:text-ink"
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

const Input = ({
  ref,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  ref?: React.Ref<HTMLInputElement>;
}) => {
  return (
    <input
      ref={ref}
      {...props}
      className="w-full rounded-xl border border-line bg-canvas/60 px-4 py-3 text-sm text-ink placeholder:text-ink-mute focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
    />
  );
};

function getEstimate(building: string, timeline: string, budget: string) {
  if (!building || !timeline || !budget) return null;

  let scope = "Custom Project Scope";
  let weeks = "4–6 weeks";
  let features: string[] = [];

  // Determine Scope based on Budget
  if (budget === "< $15k") {
    scope = "Focused Launch Setup";
    weeks = "2–4 weeks";
    features = [
      "Single-page Next.js app",
      "Figma design system foundation",
      "Frictionless contact/lead capture",
    ];
  } else if (budget === "$15k–$40k") {
    scope = "Product/Market Launch";
    weeks = "6–10 weeks";
    features = [
      "Multi-page Next.js web application",
      "Custom motion & GSAP animations",
      "Standard CMS/database integration",
    ];
  } else if (budget === "$40k–$80k") {
    scope = "Scale Product Build";
    weeks = "10–14 weeks";
    features = [
      "Custom B2B SaaS platform / storefront",
      "Supabase/Serverless database backend",
      "Advanced analytics & custom integrations",
    ];
  } else if (budget === "$80k+") {
    scope = "Enterprise Custom Build";
    weeks = "14+ weeks";
    features = [
      "Full-scale bespoke web platform",
      "High-performance headless architecture",
      "Dedicated engineering squad & ongoing support",
    ];
  }

  // Adjust timeline/weeks based on speed requirement
  if (timeline === "ASAP") {
    weeks = weeks.replace(/\d+–\d+/, (m) => {
      const parts = m.split("–").map(Number);
      return `${Math.max(2, parts[0] - 1)}–${Math.max(3, parts[1] - 2)}`;
    }) + " (Accelerated)";
  }

  return { scope, weeks, features };
}
