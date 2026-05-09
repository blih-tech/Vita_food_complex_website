"use client";

import { use } from "react";
import { usePage } from "@/hooks/usePage";
import WeCareHeroSection from "@frontend/components/sections/we-care/WeCareHeroSection";
import WeCareHeartSection from "@frontend/components/sections/we-care/WeCareHeartSection";
import WeCareDrivenSection from "@frontend/components/sections/we-care/WeCareDrivenSection";
import WeCareDifferenceSection from "@frontend/components/sections/we-care/WeCareDifferenceSection";
import WeCareBannerSection from "@frontend/components/sections/we-care/WeCareBannerSection";
import SocialWallSection from "@frontend/components/sections/SocialWallSection";
import BackToTop from "@frontend/components/ui/BackToTop";

const SECTION_COMPONENTS: Record<string, any> = {
  "we-care-hero":       WeCareHeroSection,
  "we-care-heart":      WeCareHeartSection,
  "we-care-driven":     WeCareDrivenSection,
  "we-care-difference": WeCareDifferenceSection,
  "we-care-banner":     WeCareBannerSection,
};

export default function WeCarePage({ params: paramsPromise }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(paramsPromise);
  const { page, loading } = usePage("we-care");

  if (loading || !page || !page.sections || page.sections.length === 0) {
    // Static fallback for loading state
    return (
      <main className="flex min-h-screen flex-col w-full bg-[#FFFFFF]">
        <WeCareHeroSection />
        <WeCareHeartSection />
        <WeCareDrivenSection />
        <WeCareDifferenceSection />
        <WeCareBannerSection />
        <SocialWallSection />
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
      <SocialWallSection />
      <BackToTop />
    </main>
  );
}
