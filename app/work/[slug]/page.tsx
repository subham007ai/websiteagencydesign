import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Eyebrow, Reveal, ArrowIcon, Tag } from "@/components/ui";
import { Aurora, MeshCover } from "@/components/visuals";
import { PROJECTS, getProject } from "@/lib/projects";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return { title: "Case study — Sitora" };
  return {
    title: `${p.title} — Sitora`,
    description: p.tagline,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const idx = PROJECTS.findIndex((p) => p.slug === slug);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  const sections = [
    { label: "The challenge", body: project.challenge },
    { label: "Our approach", body: project.approach },
    { label: "The solution", body: project.solution },
  ];

  return (
    <main className="overflow-hidden">
      {/* hero */}
      <section className="relative px-6 pt-40 pb-12 sm:pt-48">
        <Aurora corner="top-left" intensity={0.8} />
        <span className="ghost-word pointer-events-none absolute -top-2 right-0 hidden text-[16vw] lg:block">
          {project.client.toUpperCase()}
        </span>
        <div className="relative mx-auto max-w-wrap">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-accent"
          >
            <ArrowIcon className="h-4 w-4 rotate-180" />
            All work
          </Link>
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.25em] text-accent">
            {project.sector}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-bold tracking-tight text-balance sm:text-7xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-ink-soft">
            {project.tagline}
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {project.services.map((s) => (
              <Tag key={s}>{s}</Tag>
            ))}
            <Tag>{project.year}</Tag>
          </div>
        </div>
      </section>

      {/* cover */}
      <section className="relative mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-line">
          <MeshCover seed={idx + 2} className="aspect-[16/9]" />
          <span className="absolute inset-0 flex items-center justify-center font-display text-7xl font-bold tracking-tight text-ink drop-shadow-xl sm:text-8xl">
            {project.stat}
          </span>
        </div>
      </section>

      {/* narrative — glass callouts */}
      <section className="relative mx-auto max-w-wrap px-6 py-20">
        <div className="grid gap-5 md:grid-cols-3">
          {sections.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {s.label}
                </div>
                <p className="mt-4 leading-relaxed text-ink-soft">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* gallery */}
      <section className="relative mx-auto max-w-wrap px-6 pb-8">
        <div className="grid gap-4 sm:grid-cols-3">
          {project.gallery.map((_, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <MeshCover
                seed={idx * 7 + i + 11}
                className="aspect-[4/5] rounded-2xl border border-line"
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* results */}
      <section className="relative mx-auto max-w-wrap px-6 py-16">
        <Eyebrow>The outcome</Eyebrow>
        <div className="mt-6 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-3">
          {project.results.map((r) => (
            <div key={r.label} className="bg-surface/60 p-8 text-center">
              <p className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-5xl font-bold tracking-tight text-transparent">
                {r.value}
              </p>
              <p className="mt-2 text-sm text-ink-soft">{r.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* next project */}
      <section className="relative mx-auto max-w-wrap px-6 pb-8">
        <Link
          href={`/work/${next.slug}`}
          className="group flex flex-col items-start justify-between gap-4 rounded-3xl border border-line bg-surface/50 p-8 transition-colors hover:border-accent/50 sm:flex-row sm:items-center"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-ink-mute">
              Next project
            </p>
            <p className="mt-2 text-2xl font-semibold text-ink">{next.title}</p>
            <p className="mt-1 text-sm text-ink-mute">{next.sector}</p>
          </div>
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/12 text-accent transition-transform group-hover:translate-x-1">
            <ArrowIcon className="h-5 w-5" />
          </span>
        </Link>
      </section>
    </main>
  );
}
