"use client";

import { use } from "react";
import { usePage } from "@/hooks/usePage";
import InnovationHeroSection from "@frontend/components/sections/innovation/InnovationHeroSection";
import InnovationApproachSection from "@frontend/components/sections/innovation/InnovationApproachSection";
import InnovationDiverseSection from "@frontend/components/sections/innovation/InnovationDiverseSection";
import BackToTop from "@frontend/components/ui/BackToTop";

const SECTION_COMPONENTS: Record<string, any> = {
  "innovation-hero":     InnovationHeroSection,
  "innovation-approach": InnovationApproachSection,
  "innovation-diverse":  InnovationDiverseSection,
};

export default function InnovationPage({ params: paramsPromise }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(paramsPromise);
  const { page, loading } = usePage("innovation");

  if (loading || !page || !page.sections || page.sections.length === 0) {
    // Static fallback for loading state
    return (
      <main className="flex min-h-screen flex-col w-full bg-[#FFFFFF]">
        <InnovationHeroSection />
        <InnovationApproachSection />
        <InnovationDiverseSection />
        <BackToTop />
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col w-full bg-[#FFFFFF] scroll-smooth">
      {page.sections.map((section: any) => {
        const Component = SECTION_COMPONENTS[section.type];
        if (!Component) return null;
        return <Component key={section.id} content={section.content} locale={locale} />;
      })}
      <BackToTop />
    </main>
  );
}
