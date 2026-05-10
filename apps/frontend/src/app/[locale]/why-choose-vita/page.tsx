"use client";

import { use } from "react";
import { usePage } from "@frontend/hooks/usePage";
import WhyChooseVitaHeroSection from "@frontend/components/sections/WhyChooseVitaHeroSection";
import VideoShowcaseSection from "@frontend/components/sections/VideoShowcaseSection";
import WhoWeAreSection from "@frontend/components/sections/WhyChooseVitaWhoAreWeSection";
import SisterCompanySection from "@frontend/components/sections/SisterCompanySection";
import QualityAssuranceSection from "@frontend/components/sections/QualityAssuranceSection";
import OurProductSection from "@frontend/components/sections/OurProductSection";
import BackToTop from "@frontend/components/ui/BackToTop";

const SECTION_COMPONENTS: Record<string, any> = {
  "wcv-hero": WhyChooseVitaHeroSection,
  "wcv-video": VideoShowcaseSection,
  "wcv-who-are-we": WhoWeAreSection,
  "wcv-sister-companies": SisterCompanySection,
  "wcv-qa": QualityAssuranceSection,
  "wcv-products": OurProductSection,
};

export default function WhyChooseVitaPage({ params: paramsPromise }: { params: Promise<{ locale: string }> }) {
  const params = use(paramsPromise);
  const { locale } = params;
  const { page, loading } = usePage("why-choose-vita");

  if (loading || !page || !page.sections?.length) {
    return (
      <main className="flex flex-col scroll-smooth">
        <WhyChooseVitaHeroSection />
        <VideoShowcaseSection />
        <WhoWeAreSection />
        <SisterCompanySection />
        <QualityAssuranceSection />
        <OurProductSection />
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
          <div key={section.id}>
            <Component content={section.content} locale={locale} />
          </div>
        );
      })}
      <BackToTop />
    </main>
  );
}
