"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import WhyChooseVitaHeroSection from "@frontend/components/sections/WhyChooseVitaHeroSection";
import WhoWeAreSection from "@frontend/components/sections/WhoWeAreSection";
import SisterCompanySection from "@frontend/components/sections/SisterCompanySection";
import QualityAssuranceSection from "@frontend/components/sections/QualityAssuranceSection";
import OurProductSection from "@frontend/components/sections/OurProductSection";
import BackToTop from "@frontend/components/ui/BackToTop";

export default function WhyChooseVitaPage() {
  const t = useTranslations("WhyChooseVita");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-visible');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.page-section');
    sections.forEach((section, index) => {
      // Make the first section (Hero) visible immediately
      if (index === 0) {
        section.classList.add('section-visible');
      }
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="flex flex-col scroll-smooth">
      {/* Page sections with smooth transitions */}
      <div className="page-section">
        <WhyChooseVitaHeroSection />
      </div>
      
      <div className="page-section">
        <WhoWeAreSection />
      </div>
      
      <div className="page-section">
        <SisterCompanySection />
      </div>
      
      <div className="page-section">
        <QualityAssuranceSection />
      </div>
      
      <div className="page-section">
        <OurProductSection />
      </div>

      {/* Back to top button */}
      <BackToTop />

      {/* Global styles for page transitions */}
      <style dangerouslySetInnerHTML={{
        __html: `
          html {
            scroll-behavior: smooth;
          }
          
          .page-section {
            position: relative;
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease-out;
          }
          
          .page-section.section-visible {
            opacity: 1;
            transform: translateY(0);
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
          
          /* Print styles */
          @media print {
            .page-section {
              break-inside: avoid;
              page-break-inside: avoid;
            }
          }
        `
      }} />
    </main>
  );
}
