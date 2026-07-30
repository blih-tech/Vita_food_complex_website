"use client";

import { use } from "react";
import { usePage } from "@/hooks/usePage";
import AboutHeroSection from "@frontend/components/sections/AboutHeroSection";
import AboutCompanySection from "@frontend/components/sections/AboutCompanySection";
import SisterCompaniesSection from "@frontend/components/sections/SisterCompaniesSection";
import WhoAreWeSection from "@frontend/components/sections/WhoAreWeSection";
import ProcessSections from "@frontend/components/sections/ProcessSections";
import TestimonialSection from "@frontend/components/sections/TestimonialSection";
import BackToTop from "@frontend/components/ui/BackToTop";
import ScrollReveal from "@frontend/components/ui/ScrollReveal";

/* Figma About page (277:8084) section order:
   1. Hero (2376:9999) — headline + subtitle + story image with white frame
   2. Our Story (2066:2563 + 277:8190) — heading + paragraph
   3. Sister Companies (2066:3482) — logo row
   4. Who Are We + Cards (2080:3549 + 2080:3630) — heading + description + 4-card grid
   5. Process (2080:3663) — 01 Sourcing / 02 Crafting / 03 Production
   6. Testimonials (2120:1668)
*/

const SECTION_COMPONENTS: Record<string, any> = {
  "about-hero":          AboutHeroSection,
  "about-company":       AboutCompanySection,
  "about-sister":        SisterCompaniesSection,
  "about-who-we-are":    WhoAreWeSection,
  "about-process":       ProcessSections,
  "about-testimonials":  TestimonialSection,
};

export default function AboutPage({ params: paramsPromise }: { params: Promise<{ locale: string }> }) {
  const params = use(paramsPromise);
  const { locale } = params;
  const { page, loading } = usePage("about");

  if (loading || !page || !page.sections || page.sections.length === 0) {
    return (
      <main className="flex flex-col scroll-smooth">
        <ScrollReveal><AboutHeroSection /></ScrollReveal>
        <ScrollReveal><AboutCompanySection /></ScrollReveal>
        <ScrollReveal><SisterCompaniesSection /></ScrollReveal>
        <ScrollReveal><WhoAreWeSection /></ScrollReveal>
        <ScrollReveal><ProcessSections /></ScrollReveal>
        <ScrollReveal><TestimonialSection /></ScrollReveal>
        <BackToTop />
      </main>
    );
  }

  return (
    <main className="flex flex-col scroll-smooth">
      {page.sections.map((section: any) => {
        const Component = SECTION_COMPONENTS[section.type];
        if (!Component) return null;
        return (
          <ScrollReveal key={section.id}>
            <Component content={section.content} locale={locale} />
          </ScrollReveal>
        );
      })}
      <BackToTop />
    </main>
  );
}
