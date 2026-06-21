import Link from "next/link";
import { Logo } from "@/components/Logo";
import { ButtonLink, ArrowIcon } from "@/components/ui";
import { NAV_LINKS } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-line">
      {/* CTA band */}
      <div className="relative overflow-hidden border-b border-line">
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-64 opacity-50 blur-[100px]"
          style={{
            background:
              "radial-gradient(ellipse at 50% 120%, rgba(var(--accent-rgb),0.5), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-wrap px-6 py-20 text-center">
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
            Let&rsquo;s build your next success story.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-ink-soft">
            Tell us what you&rsquo;re building. We&rsquo;ll reply within one
            business day with first ideas.
          </p>
          <div className="mt-8 flex justify-center">
            <ButtonLink href="/contact">
              Start a project
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </ButtonLink>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mx-auto max-w-wrap px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo className="text-ink" />
            <p className="mt-4 max-w-xs text-sm text-ink-soft">
              A conceptual design for portfolio showcase. Sitora is not associated with any real agency, and the showcased projects are placeholders.
            </p>
          </div>
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-ink-mute">
              Navigate
            </p>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-ink-soft transition-colors hover:text-accent"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-ink-mute">
              Get in touch
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:hello@sitora.studio"
                  className="text-ink-soft transition-colors hover:text-accent"
                >
                  hello@sitora.studio
                </a>
              </li>
              <li className="text-ink-soft">Remote · Worldwide</li>
              <li className="flex gap-3 pt-1 text-ink-mute">
                <a href="#" className="hover:text-accent">X</a>
                <a href="#" className="hover:text-accent">LinkedIn</a>
                <a href="#" className="hover:text-accent">Dribbble</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-xs text-ink-mute sm:flex-row">
          <p>© {new Date().getFullYear()} Sitora · Conceptual Portfolio Showcase</p>
          <p className="font-mono">Built with Next.js · GSAP · Three.js</p>
        </div>
      </div>
    </footer>
  );
}
