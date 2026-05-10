"use client";

import { use } from "react";
import { usePage } from "@/hooks/usePage";
import GalleryHeroSection from "@frontend/components/sections/gallery/GalleryHeroSection";
import CommunityWallSection from "@frontend/components/sections/gallery/CommunityWallSection";
import PartnerTestimonialSection from "@frontend/components/sections/gallery/PartnerTestimonialSection";
import BackToTop from "@frontend/components/ui/BackToTop";

const SECTION_COMPONENTS: Record<string, any> = {
  "gallery-hero":         GalleryHeroSection,
  "community-wall":       CommunityWallSection,
  "partner-testimonial":  PartnerTestimonialSection,
};

export default function GalleryPage({ params: paramsPromise }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(paramsPromise);
  const { page, loading } = usePage("gallery");

  if (loading || !page || !page.sections || page.sections.length === 0) {
    // Static fallback for loading state
    return (
      <main className="flex min-h-screen flex-col w-full overflow-hidden bg-white pt-[100px] lg:pt-[120px]">
        <GalleryHeroSection />
        <CommunityWallSection />
        <PartnerTestimonialSection />
        <BackToTop />
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col w-full overflow-hidden bg-white pt-[100px] lg:pt-[120px] scroll-smooth">
      {page.sections.map((section: any) => {
        const Component = SECTION_COMPONENTS[section.type];
        if (!Component) return null;
        return <Component key={section.id} content={section.content} locale={locale} />;
      })}
      <BackToTop />
    </main>
  );
}
