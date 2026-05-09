"use client";

import { use } from "react";
import { usePage } from "@/hooks/usePage";
import SustainabilityHeroSection from "@frontend/components/sections/SustainabilityHeroSection";
import SustainabilityCommitmentSection from "@frontend/components/sections/SustainabilityCommitmentSection";
import SustainabilityProcessSection from "@frontend/components/sections/SustainabilityProcessSection";
import SustainabilityGiveBackSection from "@frontend/components/sections/SustainabilityGiveBackSection";
import BackToTop from "@frontend/components/ui/BackToTop";

const SECTION_COMPONENTS: Record<string, any> = {
  "sustainability-hero":       SustainabilityHeroSection,
  "sustainability-commitment": SustainabilityCommitmentSection,
  "sustainability-process":    SustainabilityProcessSection,
  "sustainability-give-back":  SustainabilityGiveBackSection,
};

export default function SustainabilityPage({ params: paramsPromise }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(paramsPromise);
  const { page, loading } = usePage("sustainability");

  if (loading || !page || !page.sections || page.sections.length === 0) {
    return (
      <main className="flex flex-col scroll-smooth">
        <SustainabilityHeroSection />
        <SustainabilityCommitmentSection />
        <SustainabilityProcessSection />
        <SustainabilityGiveBackSection />
        <BackToTop />
      </main>
    );
  }

  return (
    <main className="flex flex-col scroll-smooth">
      {page.sections.map((section: any) => {
        const Component = SECTION_COMPONENTS[section.type];
        if (!Component) return null;
        return <Component key={section.id} content={section.content} locale={locale} />;
      })}
      <BackToTop />
    </main>
  );
}
