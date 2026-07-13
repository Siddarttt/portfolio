import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Toolkit } from "@/components/sections/Toolkit";
import { Photography } from "@/components/sections/Photography";

/**
 * Landing page — section order per the brief:
 * Hero → Selected Work → About → Experience → Skills → Photography → Contact.
 * (Contact renders in SiteFooter so it appears on every page.)
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <About />
      <Experience />
      <Skills />
      <Toolkit />
      <Photography />
    </>
  );
}
