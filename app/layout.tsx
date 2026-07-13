import type { Metadata } from "next";
import "./globals.css";
import { rubik } from "@/lib/fonts";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { StatusBar } from "@/components/layout/StatusBar";

export const metadata: Metadata = {
  title: {
    default: "Siddarth S — UX Designer",
    template: "%s — Siddarth S",
  },
  description:
    "UX Designer crafting thoughtful digital experiences for enterprise products. Enterprise UX, design systems, UX strategy, and interaction design.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={rubik.variable}>
      <body className="pb-10">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-sm focus:top-sm focus:z-(--z-skip) focus:bg-surface focus:px-sm focus:py-xs focus:text-caption"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <StatusBar />
      </body>
    </html>
  );
}
