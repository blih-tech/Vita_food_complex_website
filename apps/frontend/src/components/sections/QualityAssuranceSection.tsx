"use client";

import { useTranslations } from "next-intl";

// Figma assets - pixel-perfect local copies from node 2120-2195
const imgImages1 = "/assets/images/why-choose-vita/qa-image-1.png";
const imgEthiopianAccreditationServiceEas1 = "/assets/images/why-choose-vita/qa-eas.png";
const imgLogoPng1 = "/assets/images/why-choose-vita/qa-logo.png";
const imgIso9001Cmyk1 = "/assets/images/why-choose-vita/qa-iso.png";
const img6798B7Fe93F49D346D6F8Eb7PngwingCom11 = "/assets/images/why-choose-vita/qa-cert.png";

export default function QualityAssuranceSection() {
  const t = useTranslations("WhyChooseVita");

  return (
    <div 
      className="content-stretch flex flex-col lg:gap-[48px] md:gap-[36px] sm:gap-[24px] items-center relative w-full lg:px-[128px] md:px-[64px] sm:px-[32px] lg:py-[96px] md:py-[64px] sm:py-[48px]"
      data-node-id="2120:2195" 
      data-name="Quality Assurance"
    >
      {/* Text content container - Responsive */}
      <div 
        className="content-stretch flex flex-col lg:gap-[48px] md:gap-[36px] sm:gap-[24px] items-center relative shrink-0 text-center w-full lg:max-w-[1200px] md:max-w-[800px] sm:max-w-[100%]"
        data-node-id="2120:2196" 
        data-name="Container"
      >
        {/* Subtitle - Responsive */}
        <p 
          className="not-italic relative shrink-0 lg:block md:block sm:hidden"
          style={{
            fontFamily: "'Funnel Display', sans-serif",
            fontWeight: 500,
            lineHeight: '1.5',
            fontSize: '24px',
            color: '#23b349',
            letterSpacing: '-0.4px',
          }}
          data-node-id="2120:2197"
        >
          Quality Assurance
        </p>

        {/* Headline - Responsive */}
        <h2 
          className="font-['Outfit'] font-bold not-italic relative shrink-0 text-center lg:block md:block sm:block lg:text-[64px] lg:tracking-[-2px] md:text-[48px] md:tracking-[-1.5px] sm:text-[32px] sm:tracking-[-1px]"
          style={{
            color: '#1a1a1a',
            lineHeight: '0.96',
          }}
          data-node-id="2120:2198"
        >
          <span className="lg:inline md:inline sm:block">Committed to Excellence</span>
          <span className="lg:inline md:inline sm:block">in Every Product</span>
        </h2>

        {/* Description - Responsive */}
        <p 
          className="font-['Funnel_Display'] font-medium not-italic relative shrink-0 text-center lg:text-[24px] lg:tracking-[-0.4px] md:text-[20px] md:tracking-[-0.32px] sm:text-[16px] sm:tracking-[-0.24px] lg:px-0 md:px-4 sm:px-2"
          style={{
            color: '#404040',
            lineHeight: '1.5',
          }}
          data-node-id="2120:2199"
        >
          {t("qualityAssurance.description")}
        </p>
      </div>

      {/* Main content grid - Responsive */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative w-full lg:max-w-[1200px] md:max-w-[800px] sm:max-w-[100%]">
        
        {/* Left side - Image and certifications */}
        <div className="flex flex-col gap-6">
          {/* Main image - Responsive */}
          <div className="relative lg:h-[400px] md:h-[300px] sm:h-[200px] rounded-[24px] overflow-hidden">
            <img
              alt="Quality Assurance"
              className="w-full h-full object-cover"
              src={imgImages1}
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          {/* Certification badges - Responsive */}
          <div className="grid grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
            <div className="bg-white rounded-[16px] p-4 shadow-md flex items-center justify-center h-[100px]">
              <img
                alt="EAS Certification"
                className="max-h-[60px] max-w-[100%] object-contain"
                src={imgEthiopianAccreditationServiceEas1}
              />
            </div>
            <div className="bg-white rounded-[16px] p-4 shadow-md flex items-center justify-center h-[100px]">
              <img
                alt="ISO 9001"
                className="max-h-[60px] max-w-[100%] object-contain"
                src={imgIso9001Cmyk1}
              />
            </div>
            <div className="bg-white rounded-[16px] p-4 shadow-md flex items-center justify-center h-[100px]">
              <img
                alt="Quality Certification"
                className="max-h-[60px] max-w-[100%] object-contain"
                src={img6798B7Fe93F49D346D6F8Eb7PngwingCom11}
              />
            </div>
            <div className="bg-white rounded-[16px] p-4 shadow-md flex items-center justify-center h-[100px]">
              <img
                alt="Company Logo"
                className="max-h-[60px] max-w-[100%] object-contain"
                src={imgLogoPng1}
              />
            </div>
          </div>
        </div>

        {/* Right side - Quality features */}
        <div className="flex flex-col gap-6">
          {/* Quality standards - Responsive */}
          <div className="bg-white rounded-[24px] p-6 lg:p-8 md:p-6 sm:p-4 shadow-lg">
            <h3 className="font-['Outfit'] font-bold text-[24px] leading-[1.2] text-[#1a1a1a] mb-4 lg:text-[24px] md:text-[20px] sm:text-[18px]">
              International Standards
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#23b349] rounded-full mt-2 flex-shrink-0" />
                <p className="font-['Funnel_Display'] font-medium text-[16px] leading-[1.5] text-[#666] lg:text-[16px] md:text-[14px] sm:text-[12px]">
                  ISO 9001:2015 certified quality management system
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#23b349] rounded-full mt-2 flex-shrink-0" />
                <p className="font-['Funnel_Display'] font-medium text-[16px] leading-[1.5] text-[#666] lg:text-[16px] md:text-[14px] sm:text-[12px]">
                  Ethiopian Accreditation Service (EAS) approved
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#23b349] rounded-full mt-2 flex-shrink-0" />
                <p className="font-['Funnel_Display'] font-medium text-[16px] leading-[1.5] text-[#666] lg:text-[16px] md:text-[14px] sm:text-[12px]">
                  HACCP food safety management implementation
                </p>
              </li>
            </ul>
          </div>

          {/* Testing procedures - Responsive */}
          <div className="bg-white rounded-[24px] p-6 lg:p-8 md:p-6 sm:p-4 shadow-lg">
            <h3 className="font-['Outfit'] font-bold text-[24px] leading-[1.2] text-[#1a1a1a] mb-4 lg:text-[24px] md:text-[20px] sm:text-[18px]">
              Rigorous Testing
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#23b349] rounded-full mt-2 flex-shrink-0" />
                <p className="font-['Funnel_Display'] font-medium text-[16px] leading-[1.5] text-[#666] lg:text-[16px] md:text-[14px] sm:text-[12px]">
                  Daily quality control checks at every production stage
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#23b349] rounded-full mt-2 flex-shrink-0" />
                <p className="font-['Funnel_Display'] font-medium text-[16px] leading-[1.5] text-[#666] lg:text-[16px] md:text-[14px] sm:text-[12px]">
                  Third-party laboratory testing and verification
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#23b349] rounded-full mt-2 flex-shrink-0" />
                <p className="font-['Funnel_Display'] font-medium text-[16px] leading-[1.5] text-[#666] lg:text-[16px] md:text-[14px] sm:text-[12px]">
                  Shelf-life testing and stability studies
                </p>
              </li>
            </ul>
          </div>

          {/* Continuous improvement - Responsive */}
          <div className="bg-white rounded-[24px] p-6 lg:p-8 md:p-6 sm:p-4 shadow-lg">
            <h3 className="font-['Outfit'] font-bold text-[24px] leading-[1.2] text-[#1a1a1a] mb-4 lg:text-[24px] md:text-[20px] sm:text-[18px]">
              Continuous Improvement
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#23b349] rounded-full mt-2 flex-shrink-0" />
                <p className="font-['Funnel_Display'] font-medium text-[16px] leading-[1.5] text-[#666] lg:text-[16px] md:text-[14px] sm:text-[12px]">
                  Regular audit and review processes
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#23b349] rounded-full mt-2 flex-shrink-0" />
                <p className="font-['Funnel_Display'] font-medium text-[16px] leading-[1.5] text-[#666] lg:text-[16px] md:text-[14px] sm:text-[12px]">
                  Customer feedback integration and response
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#23b349] rounded-full mt-2 flex-shrink-0" />
                <p className="font-['Funnel_Display'] font-medium text-[16px] leading-[1.5] text-[#666] lg:text-[16px] md:text-[14px] sm:text-[12px]">
                  Staff training and development programs
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
