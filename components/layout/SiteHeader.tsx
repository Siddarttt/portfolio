"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { Container } from "./Container";

/**
 * Site navigation — editorial, not application chrome.
 *
 * Behavior (per approved direction):
 * - Sticky; transparent at the very top of the page.
 * - After initial scroll: solid page-background + hairline only.
 *   Deliberately NO translucency/backdrop blur (design.md §20 forbids
 *   glassmorphism) and NO shadow.
 * - Minimal height (56px = 7 × 8px grid).
 * - Plain text links; current section indicated only by ink color
 *   (muted → foreground) with a quiet color transition.
 * - Mobile: a text "Menu" disclosure that expands in place — no
 *   overlay, no drawer, no app chrome.
 *
 * All values are tokens: durations (--duration-*), easing
 * (--ease-out-quiet), z-index (--z-header), spacing scale, hairline.
 */

const navItems = [
  { href: "/#work", id: "work", label: "Work" },
  { href: "/#about", id: "about", label: "About" },
  { href: "/#experience", id: "experience", label: "Experience" },
  { href: "/#photography", id: "photography", label: "Photography" },
  { href: "/#contact", id: "contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  /* Transparent at top; surface + hairline after initial scroll. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Understated current-section tracking (homepage only). */
  useEffect(() => {
    if (pathname !== "/") {
      setActiveId(null);
      return;
    }
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      /* A band around the reading line, so the indicator follows the
         section the visitor is actually reading. */
      { rootMargin: "-35% 0px -55% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  /* Close the mobile menu on Escape and on route change. */
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const chromeVisible = scrolled || open;

  const linkClass = (id: string) => {
    const isActive = activeId === id;
    return [
      "text-caption uppercase tracking-eyebrow transition-colors duration-(--duration-fast) ease-out-quiet",
      isActive ? "text-accent" : "text-muted hover:text-foreground",
    ].join(" ");
  };

  return (
    <header
      className={[
        "sticky top-0 z-(--z-header)",
        "transition-colors duration-(--duration-base) ease-out-quiet",
        chromeVisible
          ? "border-b border-border bg-background"
          : "border-b border-transparent bg-transparent",
      ].join(" ")}
    >
      <Container>
        <nav aria-label="Primary" className="flex h-(--spacing-header) items-center justify-between">
          {/* Brand lockup: monogram badge (hand-authored SVG — an ink S
              overlapped by a gradient-mint S, sheared for motion) plus
              the name and a muted portfolio label. */}
          <Link
            href="/"
            className="flex items-center gap-sm"
            aria-label="Siddarth S — home"
          >
            <svg
              viewBox="0 0 40 32"
              aria-hidden
              className="h-8 w-10 shrink-0"
            >
              <defs>
                <linearGradient id="brand-s" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#c3fffc" />
                  <stop offset="1" stopColor="#6fc7c3" />
                </linearGradient>
              </defs>
              <rect width="40" height="32" rx="7" fill="#242424" />
              <g
                fontWeight="800"
                fontSize="19"
                textAnchor="middle"
                transform="skewX(-8)"
              >
                <text x="17.5" y="24" fill="#ece9e4">
                  S
                </text>
                <text x="29.5" y="24" fill="url(#brand-s)">
                  S
                </text>
              </g>
            </svg>
            <span className="font-body text-caption font-bold uppercase tracking-eyebrow">
              Siddarth.
              <span className="ml-xs hidden font-medium text-muted sm:inline">
                Portfolio/2026
              </span>
            </span>
          </Link>

          {/* Desktop: plain text links + the header's one action */}
          <ul className="hidden items-center gap-lg md:flex">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={linkClass(item.id)}
                  aria-current={activeId === item.id ? "location" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              {/* Resume download — bordered action in the label voice.
                  The arrow nudges down on hover (the site's sanctioned
                  slight-translate), telling the truth: it downloads.
                  Asset: drop resume.pdf into /public. */}
              <a
                href="/resume.pdf"
                download="Siddarth-S-Resume.pdf"
                className="group flex h-8 items-center gap-xs rounded-sm border border-border px-sm text-caption uppercase tracking-eyebrow text-foreground transition-colors duration-(--duration-fast) ease-out-quiet hover:border-accent hover:text-accent"
              >
                Download Resume
                <ArrowDown
                  aria-hidden
                  className="size-icon-sm transition-transform duration-(--duration-fast) ease-out-quiet group-hover:translate-y-0.5"
                />
              </a>
            </li>
          </ul>

          {/* Mobile: lightweight text disclosure */}
          <button
            type="button"
            className="text-caption uppercase tracking-eyebrow text-muted transition-colors duration-(--duration-fast) ease-out-quiet hover:text-foreground md:hidden"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </nav>
      </Container>

      {/* Mobile menu: expands in place beneath the bar. */}
      <div id="site-menu" hidden={!open} className="md:hidden">
        <Container>
          <ul className="border-t border-border py-sm">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="block py-xs text-body text-muted transition-colors duration-(--duration-fast) ease-out-quiet hover:text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                download="Siddarth-S-Resume.pdf"
                className="group flex items-center gap-xs py-xs text-body text-accent"
                onClick={() => setOpen(false)}
              >
                Download Resume
                <ArrowDown
                  aria-hidden
                  className="size-icon-sm transition-transform duration-(--duration-fast) ease-out-quiet group-hover:translate-y-0.5"
                />
              </a>
            </li>
          </ul>
        </Container>
      </div>
    </header>
  );
}
