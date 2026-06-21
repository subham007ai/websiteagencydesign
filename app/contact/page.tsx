import type { Metadata } from "next";
import { Eyebrow, Reveal, ArrowIcon } from "@/components/ui";
import { Aurora, IconPill } from "@/components/visuals";
import ContactForm from "@/components/ContactForm";
import FaqAccordion from "@/components/FaqAccordion";

function MicIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
    </svg>
  );
}
function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "Contact — Sitora",
  description:
    "Tell us what you're building. We'll reply within one business day with first ideas.",
};

const METHODS = [
  { label: "Email", value: "hello@sitora.studio", href: "mailto:hello@sitora.studio" },
  { label: "Book a call", value: "30-min intro call", href: "#" },
  { label: "Based", value: "Remote · Worldwide", href: null },
];

export default function ContactPage() {
  return (
    <main className="overflow-hidden">
      <section className="relative px-6 pt-40 pb-12 sm:pt-48">
        <Aurora corner="center" />
        {/* floating glass pills (ARCH-style) */}
        <div className="pointer-events-none absolute left-[12%] top-44 hidden xl:block">
          <IconPill className="animate-floaty"><MicIcon /></IconPill>
        </div>
        <div className="pointer-events-none absolute right-[12%] top-56 hidden xl:block">
          <IconPill className="animate-floaty [animation-delay:1.2s]"><BoltIcon /></IconPill>
        </div>

        <div className="relative mx-auto max-w-3xl text-center">
          <Eyebrow className="justify-center">Need a project?</Eyebrow>
          <h1 className="mt-5 font-display text-5xl font-bold tracking-tight text-balance sm:text-7xl">
            Drop us a{" "}
            <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
              message.
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-md text-ink-soft">
            A detailed brief or a single sentence — we&rsquo;d love to hear it.
          </p>

          {/* ARCH-style email pill */}
          <div className="mt-8 flex justify-center">
            <a
              href="mailto:hello@sitora.studio"
              className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/5 p-1.5 pr-6 backdrop-blur transition-colors hover:border-accent/50"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-2 text-canvas">
                <ArrowIcon className="h-4 w-4 -rotate-45 transition-transform group-hover:rotate-0" />
              </span>
              <span className="font-medium text-ink">hello@sitora.studio</span>
            </a>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-wrap px-6 pb-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          {/* left: methods */}
          <div>
            <Reveal>
              <p className="text-lg text-ink-soft">
                Whether you have a detailed brief or just a sentence, we&rsquo;d
                love to hear it. Fill out the form and a real person — not a bot —
                will reply within one business day.
              </p>
            </Reveal>
            <div className="mt-10 space-y-4">
              {METHODS.map((m, i) => (
                <Reveal key={m.label} delay={i * 0.06}>
                  <div className="flex items-center justify-between rounded-2xl border border-line bg-surface/50 p-5">
                    <span className="text-sm text-ink-mute">{m.label}</span>
                    {m.href ? (
                      <a href={m.href} className="font-medium text-ink transition-colors hover:text-accent">
                        {m.value}
                      </a>
                    ) : (
                      <span className="font-medium text-ink">{m.value}</span>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* right: form */}
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative mx-auto max-w-3xl px-6 py-16">
        <Eyebrow>Questions</Eyebrow>
        <h2 className="mt-5 mb-8 text-3xl font-semibold tracking-tight sm:text-4xl">
          Things people usually ask.
        </h2>
        <FaqAccordion />
      </section>
    </main>
  );
}
