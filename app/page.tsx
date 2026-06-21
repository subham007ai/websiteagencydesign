import Link from "next/link";
import type { Metadata } from "next";
import { Aurora, IconPill, MeshCover, Kinetic } from "@/components/visuals";
import {
  ButtonLink,
  ArrowIcon,
  Reveal,
  SectionHeading,
  Marquee,
  Tag,
} from "@/components/ui";
import { SERVICES, STATS, PROCESS, TRUSTED_BY, TESTIMONIALS } from "@/lib/content";
import { PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Sitora — Creative Web Design Agency",
  description:
    "Sitora designs and builds digital products that grow — strategy, design, and engineering under one roof.",
};

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
function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* ===================== HERO ===================== */}
      <section className="relative min-h-dvh" data-accent="#f97316" data-accent-2="#fb923c" data-accent-rgb="249,115,22">
        <Aurora corner="top-right" />
        {/* ghosted watermark */}
        <span className="ghost-word pointer-events-none absolute -bottom-6 left-1/2 hidden -translate-x-1/2 text-[24vw] sm:block">
          SITORA
        </span>

        <div className="relative mx-auto flex min-h-dvh max-w-wrap flex-col justify-center px-6 pt-32 pb-20">
          {/* floating glass pills */}
          <div className="pointer-events-none absolute right-8 top-32 hidden flex-col gap-4 xl:flex">
            <IconPill className="animate-floaty"><MicIcon /></IconPill>
            <IconPill className="ml-8 animate-floaty [animation-delay:1.5s]"><BoltIcon /></IconPill>
          </div>

          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 py-1.5 pl-2 pr-4 text-sm text-ink-soft backdrop-blur">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-canvas">
                <BoltIcon />
              </span>
              Creative web design agency
            </div>
          </Reveal>

          <h1 className="mt-7 font-display font-bold leading-[0.92] tracking-[-0.03em] text-[clamp(2.8rem,9vw,8rem)]">
            <Kinetic
              lines={[
                <span key="1" className="text-ink">We design &amp; build</span>,
                <span key="2" className="bg-gradient-to-r from-accent via-accent-2 to-accent bg-clip-text text-transparent">digital products</span>,
                <span key="3" className="text-outline">people remember.</span>,
              ]}
            />
          </h1>

          <Reveal delay={0.5}>
            <div className="mt-9 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <p className="max-w-md text-lg text-ink-soft">
                Strategy, design, and engineering under one roof — turning your
                idea into a launched, growing digital product.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <ButtonLink href="/contact">
                  Start a project
                  <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </ButtonLink>
                <ButtonLink href="/work" variant="secondary">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent text-canvas">
                    <PlayIcon />
                  </span>
                  See the work
                </ButtonLink>
              </div>
            </div>
          </Reveal>

          {/* stat badges */}
          <Reveal delay={0.6}>
            <div className="mt-12 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur">
                <span className="text-2xl font-bold text-ink">99%</span>
                <span className="text-xs leading-tight text-ink-mute">
                  happy
                  <br />
                  clients
                </span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur">
                <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-2xl font-bold text-transparent">
                  4.9
                </span>
                <span className="text-xs leading-tight text-ink-mute">
                  avg
                  <br />
                  rating
                </span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur">
                <div className="flex -space-x-2">
                  {["E", "M", "P"].map((c) => (
                    <span key={c} className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-canvas bg-gradient-to-br from-accent to-accent-2 text-[10px] font-bold text-canvas">
                      {c}
                    </span>
                  ))}
                </div>
                <span className="text-xs leading-tight text-ink-mute">
                  200+ teams
                  <br />
                  worldwide
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* marquee */}
      <section className="relative border-y border-line py-6">
        <Marquee
          items={[
            "STRATEGY",
            "PRODUCT DESIGN",
            "ENGINEERING",
            "BRAND",
            "MOTION",
            "GROWTH",
            "WEBFLOW → NEXT.JS",
          ]}
        />
      </section>

      {/* trusted-by */}
      <section className="relative mx-auto max-w-wrap px-6 pt-20">
        <p className="text-center text-xs font-medium uppercase tracking-[0.25em] text-ink-mute">
          Trusted by ambitious teams
        </p>
        <div className="mx-auto mt-6 max-w-3xl">
          <Marquee items={TRUSTED_BY} />
        </div>
      </section>

      {/* ===================== SERVICES (editorial list) ===================== */}
      <section className="relative mx-auto max-w-wrap px-6 py-28" data-accent="#ea580c" data-accent-2="#f97316" data-accent-rgb="234,88,12">
        <SectionHeading
          eyebrow="What we do"
          title="Everything it takes to ship."
          intro="Four disciplines, one accountable team. No handoffs, no finger-pointing."
        />
        <div className="mt-14 border-t border-line">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title}>
              <div className="group grid items-center gap-6 border-b border-line py-8 transition-colors hover:bg-surface/30 sm:grid-cols-[auto_1fr_auto] sm:gap-10 sm:px-4">
                <span className="font-mono text-sm text-accent">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-3xl font-semibold tracking-tight text-ink transition-transform group-hover:translate-x-2 sm:text-4xl">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-ink-soft">{s.blurb}</p>
                </div>
                <div className="flex flex-wrap gap-2 sm:justify-end">
                  {s.points.map((p) => (
                    <Tag key={p}>{p}</Tag>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===================== FEATURED WORK ===================== */}
      <section className="relative mx-auto max-w-wrap px-6 py-16" data-accent="#f59e0b" data-accent-2="#fbbf24" data-accent-rgb="245,158,11">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Selected work" title="Proof, not promises." />
          <ButtonLink href="/work" variant="secondary">
            All projects
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </ButtonLink>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {PROJECTS.slice(0, 4).map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 0.06}>
              <Link
                href={`/work/${p.slug}`}
                className="group block overflow-hidden rounded-3xl border border-line bg-surface/40 transition-all hover:border-accent/50 hover:-translate-y-1"
              >
                <div className="relative">
                  <MeshCover
                    seed={i + 3}
                    label={p.client.toUpperCase()}
                    className="aspect-[16/10]"
                  />
                  <span className="absolute left-5 top-5 rounded-full bg-canvas/40 px-3 py-1 text-xs font-medium text-ink backdrop-blur">
                    {p.sector.split("·")[0].trim()}
                  </span>
                  <span className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-canvas/40 text-ink backdrop-blur transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    <ArrowIcon className="h-4 w-4 -rotate-45" />
                  </span>
                  <span className="absolute bottom-4 right-5 font-display text-5xl font-bold text-ink drop-shadow-lg">
                    {p.stat}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4 p-6">
                  <div>
                    <h3 className="text-xl font-semibold text-ink">{p.title}</h3>
                    <p className="mt-1 text-sm text-ink-mute">{p.statLabel}</p>
                  </div>
                  <span className="shrink-0 text-xs text-ink-mute">{p.year}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===================== STATS ===================== */}
      <section className="relative mx-auto max-w-wrap px-6 py-16">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="bg-surface/50 p-8 text-center">
              <p className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text font-display text-5xl font-bold tracking-tight text-transparent">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-ink-soft">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== PROCESS ===================== */}
      <section className="relative mx-auto max-w-wrap px-6 py-16" data-accent="#d97706" data-accent-2="#f59e0b" data-accent-rgb="217,119,6">
        <SectionHeading
          eyebrow="How we work"
          title="Idea to growth, deliberately."
        />
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p) => (
            <Reveal key={p.no}>
              <div className="h-full rounded-2xl border border-line bg-surface/40 p-6">
                <span className="font-mono text-sm text-accent">{p.no}</span>
                <h3 className="mt-3 font-display text-2xl font-semibold text-ink">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-ink-soft">{p.blurb}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===================== BIG TESTIMONIAL ===================== */}
      <section className="relative px-6 py-24">
        <Aurora corner="center" intensity={0.6} />
        <div className="relative mx-auto max-w-3xl text-center">
          <span className="flex justify-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-2 text-xl font-bold text-canvas">
              {TESTIMONIALS[0].name.charAt(0)}
            </span>
          </span>
          <blockquote className="mt-8 font-display text-2xl font-medium leading-snug text-balance text-ink sm:text-4xl">
            &ldquo;{TESTIMONIALS[0].quote}&rdquo;
          </blockquote>
          <p className="mt-6 text-sm text-ink-mute">
            <span className="font-semibold text-ink">{TESTIMONIALS[0].name}</span>{" "}
            — {TESTIMONIALS[0].role}
          </p>
        </div>
      </section>
    </main>
  );
}
