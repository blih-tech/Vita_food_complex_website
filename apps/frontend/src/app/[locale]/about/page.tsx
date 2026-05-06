"use client";

import AboutHeroSection from "@frontend/components/sections/AboutHeroSection";
import AboutCompanySection from "@frontend/components/sections/AboutCompanySection";
import SisterCompaniesSection from "@frontend/components/sections/SisterCompaniesSection";
import WhoAreWeSection from "@frontend/components/sections/WhoAreWeSection";
import ProcessSections from "@frontend/components/sections/ProcessSections";
import TestimonialSection from "@frontend/components/sections/TestimonialSection";
import BackToTop from "@frontend/components/ui/BackToTop";
import { useTranslations } from "next-intl";

/* Figma About page (277:8084) section order:
   1. Hero (2376:9999) — headline + subtitle + story image with white frame
   2. Our Story (2066:2563 + 277:8190) — heading + paragraph
   3. Sister Companies (2066:3482) — logo row
   4. Who Are We + Cards (2080:3549 + 2080:3630) — heading + description + 4-card grid
   5. Process (2080:3663) — 01 Sourcing / 02 Crafting / 03 Production
   6. Testimonials (2120:1668)
*/

export default function AboutPage() {
  const t = useTranslations("About");

  return (
    <main className="flex flex-col scroll-smooth">
      <AboutHeroSection />
      <AboutCompanySection />
      <SisterCompaniesSection />
      <WhoAreWeSection />
      <ProcessSections />
      <TestimonialSection />
      <BackToTop />
    </main>
  );
}
