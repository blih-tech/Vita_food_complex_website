"use client";

import { use } from "react";
import { usePage } from "@/hooks/usePage";
import CommunityHero from "@frontend/components/sections/community/CommunityHero";
import OurCommitment from "@frontend/components/sections/community/OurCommitment";
import CommunitySupport from "@frontend/components/sections/community/CommunitySupport";
import CharityInitiatives from "@frontend/components/sections/community/CharityInitiatives";
import MakeImpact from "@frontend/components/sections/community/MakeImpact";
import BackToTop from "@frontend/components/ui/BackToTop";

const SECTION_COMPONENTS: Record<string, any> = {
  "people-planet-hero":       CommunityHero,
  "people-planet-commitment": OurCommitment,
  "people-planet-support":    CommunitySupport,
  "people-planet-charity":    CharityInitiatives,
  "people-planet-impact":     MakeImpact,
};

export default function PeoplePlanetPage({ params: paramsPromise }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(paramsPromise);
  const { page, loading } = usePage("people-planet");

  if (loading || !page || !page.sections || page.sections.length === 0) {
    // Static fallback for loading state
    return (
      <main className="flex flex-col w-full min-h-screen overflow-hidden">
        <CommunityHero />
        <OurCommitment />
        <CommunitySupport />
        <CharityInitiatives />
        <MakeImpact />
        <BackToTop />
      </main>
    );
  }

  return (
    <main className="flex flex-col w-full min-h-screen overflow-hidden scroll-smooth">
      {page.sections.map((section: any) => {
        const Component = SECTION_COMPONENTS[section.type];
        if (!Component) return null;
        return <Component key={section.id} content={section.content} locale={locale} />;
      })}
      <BackToTop />
    </main>
  );
}
