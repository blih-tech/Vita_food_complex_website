"use client";

import { use } from "react";
import { usePage } from "@/hooks/usePage";
import ResearchHeroSection from "@frontend/components/sections/research/ResearchHeroSection";
import ResearchOverviewSection from "@frontend/components/sections/research/ResearchOverviewSection";
import ResearchProblemFramingSection from "@frontend/components/sections/research/ResearchProblemFramingSection";
import ResearchUserResearchSection from "@frontend/components/sections/research/ResearchUserResearchSection";
import BackToTop from "@frontend/components/ui/BackToTop";

const SECTION_COMPONENTS: Record<string, any> = {
  "research-hero":            ResearchHeroSection,
  "research-overview":        ResearchOverviewSection,
  "research-problem-framing": ResearchProblemFramingSection,
  "research-user-research":   ResearchUserResearchSection,
};

export default function ResearchPage({ params: paramsPromise }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(paramsPromise);
  const { page, loading } = usePage("research");

  if (loading || !page || !page.sections || page.sections.length === 0) {
    // Static fallback for loading state
    return (
      <main className="flex min-h-screen flex-col w-full bg-[#FFFFFF]">
        <ResearchHeroSection />
        <ResearchOverviewSection />
        <ResearchProblemFramingSection />
        <ResearchUserResearchSection />
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
