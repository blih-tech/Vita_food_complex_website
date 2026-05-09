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

const scrollStyles = `
  html { scroll-behavior: smooth; }
  ::-webkit-scrollbar { width: 10px; }
  ::-webkit-scrollbar-track { background: #f1f1f1; }
  ::-webkit-scrollbar-thumb { background: #23B349; border-radius: 5px; }
  ::-webkit-scrollbar-thumb:hover { background: #0F4B1F; }
  button:focus-visible { outline: 2px solid #23B349; outline-offset: 2px; }
`;

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
        <style dangerouslySetInnerHTML={{ __html: scrollStyles }} />
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
      <style dangerouslySetInnerHTML={{ __html: scrollStyles }} />
    </main>
  );
}
