"use client";

import { useTranslations } from "next-intl";
import WhyChooseVitaHeroSection from "@frontend/components/sections/WhyChooseVitaHeroSection";
import HeroVideoSection from "@frontend/components/sections/HeroVideoSection";
import WhoWeAreSection from "@frontend/components/sections/WhyChooseVitaWhoAreWeSection";
import SisterCompanySection from "@frontend/components/sections/SisterCompanySection";
import QualityAssuranceSection from "@frontend/components/sections/QualityAssuranceSection";
import OurProductSection from "@frontend/components/sections/OurProductSection";
import BackToTop from "@frontend/components/ui/BackToTop";

export default function WhyChooseVitaPage() {
  const t = useTranslations("WhyChooseVita");

  return (
    <main className="flex flex-col scroll-smooth">
      {/* Page sections */}
      <WhyChooseVitaHeroSection />
      <HeroVideoSection />
      <WhoWeAreSection />
      <SisterCompanySection />
      <QualityAssuranceSection />
      <OurProductSection />

      {/* Back to top button */}
      <BackToTop />

      {/* Global styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          html {
            scroll-behavior: smooth;
          }
          
          /* Enhanced scrollbar */
          ::-webkit-scrollbar {
            width: 10px;
          }
          
          ::-webkit-scrollbar-track {
            background: #f1f1f1;
          }
          
          ::-webkit-scrollbar-thumb {
            background: #23B349;
            border-radius: 5px;
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: #0F4B1F;
          }
          
          /* Focus styles for accessibility */
          button:focus-visible {
            outline: 2px solid #23B349;
            outline-offset: 2px;
          }
        `
      }} />
    </main>
  );
}
