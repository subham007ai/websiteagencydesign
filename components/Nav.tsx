"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "@/components/Logo";
import { ButtonLink, cn } from "@/components/ui";
import { NAV_LINKS } from "@/lib/content";

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "mx-auto flex max-w-wrap items-center justify-between gap-4 px-6 transition-all duration-300",
          scrolled ? "py-3" : "py-5"
        )}
      >
        <Link
          href="/"
          aria-label="Sitora — home"
          className={cn(
            "rounded-full px-3 py-1.5 text-ink transition-all",
            scrolled && "glass"
          )}
        >
          <Logo />
        </Link>

        {/* Center pill nav */}
        <nav className="hidden items-center gap-1 rounded-full border border-line bg-surface/50 p-1.5 backdrop-blur md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                isActive(link.href)
                  ? "bg-accent/15 text-accent"
                  : "text-ink-soft hover:text-ink"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ButtonLink href="/contact" className="hidden sm:inline-flex">
            Start a project
          </ButtonLink>
          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface/60 text-ink backdrop-blur md:hidden"
          >
            <div className="space-y-1.5">
              <span
                className={cn(
                  "block h-0.5 w-5 bg-current transition-transform",
                  open && "translate-y-2 rotate-45"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-5 bg-current transition-opacity",
                  open && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-5 bg-current transition-transform",
                  open && "-translate-y-2 -rotate-45"
                )}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile fullscreen overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex h-screen w-screen flex-col justify-between bg-canvas p-6 md:hidden"
          >
            {/* Overlay Header */}
            <div className="flex items-center justify-between">
              <Link href="/" aria-label="Sitora — home" onClick={() => setOpen(false)}>
                <Logo />
              </Link>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface/60 text-ink backdrop-blur"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Navigation links (Large, Staggered) */}
            <div className="my-auto flex flex-col gap-6 py-6 pl-4">
              {NAV_LINKS.map((link, idx) => {
                const active = isActive(link.href);
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.1 + idx * 0.05,
                      type: "spring",
                      stiffness: 90,
                      damping: 14,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "font-display text-4xl font-semibold tracking-tight transition-colors hover:text-accent",
                        active ? "text-accent" : "text-ink"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Menu Footer Contact & Actions */}
            <div className="mt-auto space-y-6">
              <div className="h-px bg-line/50" />
              
              <div className="grid grid-cols-2 gap-4 text-sm px-2">
                <div>
                  <p className="text-xs font-mono uppercase text-ink-mute">Start project</p>
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="mt-1 block font-semibold text-ink hover:text-accent transition-colors"
                  >
                    hi@sitora.studio
                  </Link>
                </div>
                <div>
                  <p className="text-xs font-mono uppercase text-ink-mute">Connect</p>
                  <div className="mt-1 flex gap-4 text-ink-soft">
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-accent transition-colors"
                    >
                      Twitter
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-accent transition-colors"
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </div>

              <ButtonLink
                href="/contact"
                onClick={() => setOpen(false)}
                className="w-full justify-center py-4 text-base font-semibold"
              >
                Start a project
              </ButtonLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
