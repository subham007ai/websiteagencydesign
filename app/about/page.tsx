import type { Metadata } from "next";
import { Eyebrow, Reveal, SectionHeading } from "@/components/ui";
import { Aurora } from "@/components/visuals";
import { VALUES, TEAM, STATS, PROCESS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Studio — Sitora",
  description:
    "Sitora is a small senior team that turns ideas into launched, growing products. Our mission, values, and the people behind the work.",
};

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      {/* hero */}
      <section className="relative px-6 pt-40 pb-20 sm:pt-48">
        <Aurora corner="center" />
        <span className="ghost-word pointer-events-none absolute -bottom-8 left-1/2 hidden -translate-x-1/2 text-[20vw] lg:block">
          STUDIO
        </span>
        <div className="relative mx-auto max-w-3xl text-center">
          <Eyebrow className="justify-center">The studio</Eyebrow>
          <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] tracking-tight text-balance sm:text-7xl">
            A small senior team,
            <br />
            <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
              obsessed with outcomes.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-ink-soft">
            We started Sitora because too many beautiful websites quietly fail to
            do their job. We build the ones that don&rsquo;t.
          </p>
        </div>
      </section>

      {/* mission / story */}
      <section className="relative mx-auto max-w-wrap px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <Eyebrow>Our mission</Eyebrow>
            <p className="mt-5 text-2xl font-medium leading-snug text-ink text-balance sm:text-3xl">
              Turn ambitious ideas into products that earn attention — and
              revenue.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
              <p>
                For nine years we&rsquo;ve worked at the intersection of strategy,
                design, and engineering. Not as three separate vendors passing
                files over a wall, but as one team accountable for the result.
              </p>
              <p>
                That means we say no to work that won&rsquo;t move a number, we
                wireframe before we decorate, and we ship real, production code —
                not a pretty prototype that falls apart in handoff.
              </p>
              <p>
                The output is the same every time: a product that&rsquo;s clearer,
                faster, and more convincing than what came before.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* stats */}
      <section className="relative mx-auto max-w-wrap px-6 py-8">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="bg-surface/60 p-8 text-center">
              <p className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-ink-soft">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* values */}
      <section className="relative mx-auto max-w-wrap px-6 py-24">
        <SectionHeading
          eyebrow="What we believe"
          title="Principles we don't compromise."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.06}>
              <div className="flex h-full gap-5 rounded-2xl border border-line bg-surface/50 p-7">
                <span className="font-mono text-sm text-accent">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-ink">{v.title}</h3>
                  <p className="mt-2 text-ink-soft">{v.blurb}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* process */}
      <section className="relative mx-auto max-w-wrap px-6 pb-24">
        <SectionHeading eyebrow="How we work" title="Four phases, one team." />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p, i) => (
            <Reveal key={p.no} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-line bg-surface/50 p-6">
                <span className="font-mono text-sm text-accent">{p.no}</span>
                <h3 className="mt-3 text-xl font-semibold text-ink">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-ink-soft">{p.blurb}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* team */}
      <section className="relative mx-auto max-w-wrap px-6 pb-12">
        <SectionHeading
          eyebrow="The people"
          title="Senior hands on every project."
          intro="No account managers, no juniors learning on your dime. You work directly with the people doing the work."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((m, i) => (
            <Reveal key={m.name} delay={(i % 3) * 0.06}>
              <div className="group rounded-2xl border border-line bg-surface/50 p-6">
                <div className="flex aspect-[4/3] items-center justify-center rounded-xl bg-gradient-to-br from-accent/25 to-amber-400/5">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-2 text-2xl font-bold text-canvas">
                    {m.initial}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-ink">{m.name}</h3>
                <p className="text-sm text-ink-mute">{m.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
