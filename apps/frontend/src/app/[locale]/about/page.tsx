"use client";

import AboutHeroSection from "@frontend/components/sections/AboutHeroSection";
import AboutCompanySection from "@frontend/components/sections/AboutCompanySection";
import SisterCompaniesSection from "@frontend/components/sections/SisterCompaniesSection";
import WhoAreWeSection from "@frontend/components/sections/WhoAreWeSection";
import MissionVisionSection from "@frontend/components/sections/MissionVisionSection";
import ProcessSections from "@frontend/components/sections/ProcessSections";
import TestimonialSection from "@frontend/components/sections/TestimonialSection";
import BackToTop from "@frontend/components/ui/BackToTop";

/* Figma About page section order (node 277:8084):
   1. Hero (2376:9999)
   2. Story: heading + image + badge + Our Story heading + paragraph
   3. Sister Companies carousel (2066:3482)
   4. Who Are We — large typography (2080:3549)
   5. Mission/Vision/Purpose/Values grid (2080:3630)
   6. Process: 01 Sourcing, 02 Crafting, 03 Production (2080:3663)
   7. Testimonials (2120:1668)
   8. Footer
   Removed: timeline section, owners accordion (not in Figma)
*/

export default function AboutPage() {
  return (
    <main className="flex flex-col scroll-smooth">
      <AboutHeroSection />
      <AboutCompanySection />
      <SisterCompaniesSection />
      <WhoAreWeSection />
      <MissionVisionSection />
      <ProcessSections />
      <TestimonialSection />
      <BackToTop />
    </main>
  );
}
