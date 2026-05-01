"use client";

import { useTranslations } from "next-intl";
import { Link } from "@frontend/navigation";

// Figma assets - pixel-perfect local copies from node 486-2897
const imgACleanModernVectorIllustrationOfAnElegant1 = "/assets/images/why-choose-vita/card-image-1.jpg";
const imgACleanModernVectorIllustrationOfAnElegant2 = "/assets/images/why-choose-vita/card-image-2.jpg";
const imgACleanModernVectorIllustrationOfAnElegant3 = "/assets/images/why-choose-vita/card-image-3.jpg";
const imgLine1 = "/assets/images/why-choose-vita/section-line.png";

export default function WhoWeAreSection() {
  const t = useTranslations("WhyChooseVita");

  return (
    <div className="content-stretch flex flex-col items-center relative w-full lg:gap-[120px] md:gap-[80px] sm:gap-[60px] lg:px-[128px] md:px-[64px] sm:px-[32px] lg:py-[96px] md:py-[64px] sm:py-[48px]" data-node-id="486:2897" data-name="Who we are section">
      {/* Who we are text content - Responsive */}
      <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full lg:max-w-[1296px] md:max-w-[900px] sm:max-w-[100%]" data-node-id="364:3320" data-name="Who we are text">
        {/* Section header - Responsive */}
        <div className="content-stretch flex items-center justify-center relative shrink-0 w-full lg:flex-row md:flex-col sm:flex-col lg:gap-[123.809px] md:gap-[60px] sm:gap-[40px]" data-node-id="364:3321" data-name="Section Header">
          {/* "Who" text - Responsive */}
          <p 
            className="font-bold not-italic relative shrink-0 lg:block md:block sm:hidden"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              lineHeight: '0.96',
              fontSize: '64px',
              color: '#1a1a1a',
              letterSpacing: '-2px',
            }}
            data-node-id="364:3322"
          >
            Who
          </p>
          
          {/* Line separator - Responsive */}
          <div className="lg:w-[123.809px] md:w-[60px] sm:w-[40px] lg:h-px md:h-px sm:h-px bg-[#23b349]" />

          {/* "We Are" text - Responsive */}
          <p 
            className="font-bold not-italic relative shrink-0"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              lineHeight: '0.96',
              fontSize: '64px',
              color: '#1a1a1a',
              letterSpacing: '-2px',
            }}
            data-node-id="364:3323"
          >
            <span className="lg:inline md:inline sm:block">We Are</span>
            <span className="lg:inline md:inline sm:block"> & What We Stand For</span>
          </p>
        </div>

        {/* Description text - Responsive */}
        <p 
          className="font-['Funnel_Display'] font-medium leading-[1.5] not-italic relative shrink-0 text-center lg:text-[24px] lg:tracking-[-0.4px] md:text-[20px] md:tracking-[-0.32px] sm:text-[16px] sm:tracking-[-0.24px] lg:px-0 md:px-4 sm:px-2"
          style={{
            color: '#404040',
          }}
          data-node-id="364:3324"
        >
          {t("whoWeAre.description")}
        </p>

        {/* CTA Button - Responsive */}
        <Link
          href="/about"
          className="inline-flex items-center justify-center gap-[16px] bg-[#23b349] text-white rounded-[999px] font-['Funnel_Display'] font-medium hover:bg-[#1a9a3a] transition-colors lg:px-[32px] lg:py-[16px] lg:text-[20px] lg:tracking-[-0.4px] md:px-[24px] md:py-[12px] md:text-[18px] md:tracking-[-0.36px] sm:px-[20px] sm:py-[10px] sm:text-[16px] sm:tracking-[-0.32px]"
          data-node-id="364:3325"
        >
          {t("whoWeAre.cta")}
        </Link>
      </div>

      {/* Cards Grid - Responsive */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative w-full lg:max-w-[1296px] md:max-w-[900px] sm:max-w-[100%]">
        {/* Card 1 - Top left */}
        <div className="bg-white rounded-[24px] shadow-lg overflow-hidden lg:translate-y-0 md:translate-y-0 sm:translate-y-0">
          <div className="relative lg:h-[354px] md:h-[280px] sm:h-[200px] overflow-hidden">
            <img
              alt="Quality Innovation"
              className="w-full h-full object-cover"
              src={imgACleanModernVectorIllustrationOfAnElegant1}
            />
          </div>
          <div className="p-6 lg:p-8 md:p-6 sm:p-4">
            <h3 className="font-['Funnel_Display'] font-bold text-[20px] leading-[1.2] text-[#1a1a1a] mb-4 lg:text-[20px] md:text-[18px] sm:text-[16px]">
              {t("whoWeAre.products.quality.title")}
            </h3>
            <p className="font-['Funnel_Display'] font-medium text-[16px] leading-[1.5] text-[#666] lg:text-[16px] md:text-[14px] sm:text-[12px]">
              {t("whoWeAre.products.quality.description")}
            </p>
          </div>
        </div>

        {/* Card 2 - Top right with offset */}
        <div className="bg-white rounded-[24px] shadow-lg overflow-hidden lg:translate-y-[60px] md:translate-y-[40px] sm:translate-y-[20px]">
          <div className="relative lg:h-[354px] md:h-[280px] sm:h-[200px] overflow-hidden">
            <img
              alt="Local Sourcing"
              className="w-full h-full object-cover"
              src={imgACleanModernVectorIllustrationOfAnElegant2}
            />
          </div>
          <div className="p-6 lg:p-8 md:p-6 sm:p-4">
            <h3 className="font-['Funnel_Display'] font-bold text-[20px] leading-[1.2] text-[#1a1a1a] mb-4 lg:text-[20px] md:text-[18px] sm:text-[16px]">
              {t("whoWeAre.products.local.title")}
            </h3>
            <p className="font-['Funnel_Display'] font-medium text-[16px] leading-[1.5] text-[#666] lg:text-[16px] md:text-[14px] sm:text-[12px]">
              {t("whoWeAre.products.local.description")}
            </p>
          </div>
        </div>

        {/* Card 3 - Bottom left */}
        <div className="bg-white rounded-[24px] shadow-lg overflow-hidden lg:translate-y-0 md:translate-y-0 sm:translate-y-0">
          <div className="relative lg:h-[354px] md:h-[280px] sm:h-[200px] overflow-hidden">
            <img
              alt="Sustainability Focus"
              className="w-full h-full object-cover"
              src={imgACleanModernVectorIllustrationOfAnElegant3}
            />
          </div>
          <div className="p-6 lg:p-8 md:p-6 sm:p-4">
            <h3 className="font-['Funnel_Display'] font-bold text-[20px] leading-[1.2] text-[#1a1a1a] mb-4 lg:text-[20px] md:text-[18px] sm:text-[16px]">
              {t("whoWeAre.products.community.title")}
            </h3>
            <p className="font-['Funnel_Display'] font-medium text-[16px] leading-[1.5] text-[#666] lg:text-[16px] md:text-[14px] sm:text-[12px]">
              {t("whoWeAre.products.community.description")}
            </p>
          </div>
        </div>

        {/* Card 4 - Bottom right with offset */}
        <div className="bg-white rounded-[24px] shadow-lg overflow-hidden lg:translate-y-[60px] md:translate-y-[40px] sm:translate-y-[20px]">
          <div className="relative lg:h-[354px] md:h-[280px] sm:h-[200px] overflow-hidden">
            <img
              alt="Community Impact"
              className="w-full h-full object-cover"
              src={imgACleanModernVectorIllustrationOfAnElegant1}
            />
          </div>
          <div className="p-6 lg:p-8 md:p-6 sm:p-4">
            <h3 className="font-['Funnel_Display'] font-bold text-[20px] leading-[1.2] text-[#1a1a1a] mb-4 lg:text-[20px] md:text-[18px] sm:text-[16px]">
              {t("whoWeAre.products.innovation.title")}
            </h3>
            <p className="font-['Funnel_Display'] font-medium text-[16px] leading-[1.5] text-[#666] lg:text-[16px] md:text-[14px] sm:text-[12px]">
              {t("whoWeAre.products.innovation.description")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
