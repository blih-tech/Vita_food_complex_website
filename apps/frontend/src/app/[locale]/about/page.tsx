"use client";

import AboutHeroSection from "@frontend/components/sections/AboutHeroSection";
import AboutCompanySection from "@frontend/components/sections/AboutCompanySection";
import AboutStorySection from "@frontend/components/sections/AboutStorySection";
import AboutValuesSection from "@frontend/components/sections/AboutValuesSection";
import AboutOwnersSection from "@frontend/components/sections/AboutOwnersSection";
import TestimonialSection from "@frontend/components/sections/TestimonialSection";
import ScrollProgress from "@frontend/components/ui/ScrollProgress";
import BackToTop from "@frontend/components/ui/BackToTop";

export default function AboutPage() {
  return (
    <main className="flex flex-col scroll-smooth">
      {/* Smooth scroll indicator */}
      <ScrollProgress />

      {/* Page sections with smooth transitions */}
      <div className="page-section">
        <AboutHeroSection />
      </div>
      
      <div className="page-section">
        <AboutCompanySection />
      </div>
      
      <div className="page-section">
        <AboutStorySection />
      </div>
      
      <div className="page-section">
        <AboutValuesSection />
      </div>
      
      <div className="page-section">
        <AboutOwnersSection />
      </div>
      
      <div className="page-section">
        <TestimonialSection />
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
