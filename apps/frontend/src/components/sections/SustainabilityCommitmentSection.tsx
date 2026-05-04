"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect, useRef } from "react";

// Figma assets from MCP
const imgQuickFact =
  "https://www.figma.com/api/mcp/asset/88c9664b-053f-4650-b3a7-5e6539068e18";
const imgDollar1 =
  "https://www.figma.com/api/mcp/asset/f418b127-5c30-4b56-89f8-7fb3d447b8c7";
const imgFrame =
  "https://www.figma.com/api/mcp/asset/a310c2c1-8101-453b-8041-3fc6c9715b6a";
const imgVector =
  "https://www.figma.com/api/mcp/asset/d25ad5e8-5c9d-4532-abef-a40f6313e6d2";
const imgFrame1 =
  "https://www.figma.com/api/mcp/asset/aa606042-4f6d-4557-9eda-4d275fc66dc6";
const imgSubtract =
  "https://www.figma.com/api/mcp/asset/f62a2636-81eb-42fa-84ad-febc3ed7b80f";
const imgSubtract1 =
  "https://www.figma.com/api/mcp/asset/38bca506-7565-480f-8d0d-7a0e75cecec8";

export default function SustainabilityCommitmentSection() {
  const t = useTranslations("Sustainability");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const commitments = [
    {
      key: "localSourcing",
      title: "Local Sourcing",
      items: [
        "Partnering with local farmers",
        "Supporting Ethiopian agriculture",
        "Strengthening rural economies",
        "24/7 Property Support",
      ],
      frame: imgFrame,
    },
    {
      key: "communityImpact",
      title: "Community Impact",
      items: [
        "Creating meaningful employment",
        "Skills development programs",
        "Community health initiatives",
        "Education support programs",
      ],
      frame: imgFrame1,
    },
    {
      key: "responsibleProduction",
      title: "Responsible Production",
      items: [
        "Sustainable manufacturing processes",
        "Waste reduction initiatives",
        "Energy efficiency programs",
        "Environmental compliance",
      ],
      frame: imgFrame1,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white px-4 sm:px-6 md:px-8 xl:px-[128px] py-[48px] sm:py-[64px] md:py-[80px] lg:py-[96px]"
      data-node-id="274:5236"
      data-name="Commitment"
    >
      <div className="max-w-[1664px] mx-auto">
        {/* Commitments container */}
        <div
          className="flex flex-col items-center gap-[32px] sm:gap-[48px] lg:gap-[64px]"
          data-node-id="274:5237"
          data-name="Commitments"
        >
          {/* Commitment text */}
          <div
            className="text-center px-4"
            data-node-id="274:5239"
            data-name="Commitment text"
          >
            <p
              className="font-['Funnel_Display'] font-normal text-[18px] sm:text-[24px] md:text-[28px] lg:text-[32px] leading-normal tracking-[-0.128px] text-[#545854] max-w-[1386px] mx-auto mb-[24px] sm:mb-[48px]"
              data-node-id="274:5240"
            >
              We believe sustainability is not a choice — it's a responsibility.
              From sourcing local wheat to minimizing waste, every step of our
              process is designed to create long-term value for people,
              communities, and the environment
            </p>
            <h2
              className="font-['Outfit'] font-bold text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-[0.96] tracking-[-1.28px] text-[#23b349]"
              data-node-id="274:5241"
              style={{ fontFeatureSettings: "'liga' 0" }}
            >
              Our Commitment
            </h2>
          </div>

          {/* Commitment cards - Grid layout for all screen sizes */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-[24px] w-full"
            data-node-id="274:5242"
            data-name="Commitment card"
          >
            {commitments.map((commitment, index) => (
              <div
                key={commitment.key}
                className="flex gap-[23.524px] h-[450px] sm:h-[500px] lg:h-[558.703px] items-center justify-center px-[24px] sm:px-[40px] lg:px-[67.632px] py-[23.524px] rounded-[24px] w-full relative group transition-all duration-300"
                data-node-id={`274:${5243 + index}`}
                data-name="card"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.8s ease-out ${index * 0.1}s`,
                }}
              >
                {/* Background gradient and frame */}
                <div
                  className="absolute inset-0"
                  data-node-id={`274:${5244 + index}`}
                  data-name="yellow-abstract-bg"
                >
                  <div
                    className="absolute inset-0 rounded-[17.643px]"
                    style={{
                      backgroundImage:
                        "linear-gradient(145.96992870178786deg, rgb(233, 247, 237) 17.067%, rgb(35, 179, 73) 100%)",
                    }}
                    data-node-id={`274:${5245 + index}`}
                  />
                  <div
                    className="absolute h-[320px] sm:h-[400px] lg:h-[430.789px] left-1/2 top-[60px] sm:top-[80px] lg:top-[127.91px] w-[90%] sm:w-[95%] lg:w-[544px] -translate-x-1/2"
                    data-node-id={`274:${5246 + index}`}
                    data-name="Frame"
                  >
                    <img
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      src={commitment.frame}
                    />
                  </div>
                </div>

                {/* Card content */}
                <div
                  className="bg-[#e9f7ed] border-[2px] sm:border-[2.941px] border-[#9adcab] border-solid flex flex-col h-[320px] sm:h-[350px] lg:h-[373.449px] items-center justify-center px-[16px] sm:px-[20px] lg:px-[29.405px] py-[16px] sm:py-[17.643px] rounded-[22.054px] relative w-full"
                  data-node-id={`274:${5250 + index}`}
                >
                  <div
                    className="flex flex-col gap-[12px] sm:gap-[16px] lg:gap-[23.524px] items-center justify-center w-full"
                    data-node-id={`274:${5251 + index}`}
                  >
                    {/* Card title */}
                    <div
                      className="flex flex-col items-center"
                      data-node-id={`274:${5252 + index}`}
                    >
                      <h3
                        className="font-['Funnel_Display'] font-bold text-[20px] sm:text-[28px] lg:text-[32px] leading-none tracking-[-0.32px] text-[#197f34]"
                        data-node-id={`274:${5253 + index}`}
                      >
                        {commitment.title}
                      </h3>
                    </div>

                    {/* Card items */}
                    <div
                      className="flex flex-col gap-[6px] sm:gap-[10px] lg:gap-[11.762px] items-start w-full"
                      data-node-id={`274:${5254 + index}`}
                    >
                      {commitment.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="bg-[rgba(255,249,242,0.74)] flex gap-[6px] sm:gap-[10px] lg:gap-[11.762px] items-center p-[6px] sm:p-[10px] lg:p-[11.762px] rounded-[8.822px] w-full"
                          data-node-id={`274:${5255 + index * 4 + itemIndex}`}
                        >
                          {/* Vector icon */}
                          <div
                            className="relative w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] lg:w-[23.524px] lg:h-[23.524px] flex-shrink-0"
                            data-node-id={`274:${5256 + index * 4 + itemIndex}`}
                            data-name="Vector"
                          >
                            <img
                              alt=""
                              className="absolute inset-0 w-full h-full object-contain"
                              src={imgVector}
                            />
                          </div>
                          <p
                            className="font-['Outfit'] font-normal text-[14px] sm:text-[18px] lg:text-[24px] leading-normal tracking-[-0.096px] text-[#333733]"
                            data-node-id={`274:${5257 + index * 4 + itemIndex}`}
                          >
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Fact section */}
          <div
            className="relative min-h-[700px] md:min-h-[800px] 2xl:h-[943.333px] rounded-[24px] sm:rounded-[32px] lg:rounded-[48px] w-full max-w-[1600px] mx-auto overflow-hidden"
            data-node-id="274:5315"
            data-name="Quick fact"
          >
            {/* Background image */}
            <img
              alt=""
              className="absolute inset-0 w-full h-full object-cover rounded-[24px] sm:rounded-[32px] lg:rounded-[48px]"
              src={imgQuickFact}
            />

            {/* Mobile Layout - Stacked (up to md) */}
            <div className="relative z-10 flex flex-col gap-[16px] p-[20px] sm:p-[32px] md:hidden">
              {/* +11 SKUs card */}
              <div className="relative h-[180px] rounded-[20px] overflow-hidden">
                <div className="absolute flex h-full items-center justify-center inset-0">
                  <div className="flex-none rotate-180 h-full w-full">
                    <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgSubtract} />
                  </div>
                </div>
                <div className="absolute h-full left-0 rounded-[20px] top-0 w-full flex flex-col items-center justify-center">
                  <p className="font-['Outfit'] font-extrabold text-[48px] leading-[0.88] text-black tracking-[-2.4px]">+11</p>
                  <p className="font-['Funnel_Display'] font-medium text-[14px] leading-none text-[#404040] mt-2">Unique SKUs for Everyone.</p>
                  <p className="font-['Outfit'] font-extrabold text-[32px] leading-[0.88] text-black mt-4">2tn</p>
                </div>
              </div>

              {/* 60tn Flour card */}
              <div className="relative flex flex-col h-[120px] items-center justify-center rounded-[20px] border-[2.5px] border-white border-solid">
                <div aria-hidden="true" className="absolute bg-[rgba(171,255,152,0.5)] inset-0 mix-blend-soft-light rounded-[20px]" />
                <p className="font-['Outfit'] font-extrabold text-[48px] leading-[0.88] text-black tracking-[-2.4px]">60tn</p>
                <p className="font-['Funnel_Display'] font-medium text-[14px] leading-none text-[#404040] mt-1 text-center px-4">Tones of Flour Production/Day</p>
              </div>

              {/* Quick Fact label */}
              <div className="relative border-[2.5px] border-white border-solid h-[80px] rounded-[20px] flex items-center justify-center">
                <div aria-hidden="true" className="absolute bg-[rgba(171,255,152,0.5)] inset-0 mix-blend-soft-light rounded-[20px]" />
                <p className="font-['Outfit'] font-extrabold text-[32px] leading-[0.9] text-[#404040]">Quick Fact</p>
              </div>

              {/* +200 Jobs card */}
              <div className="relative border-[2.5px] border-white border-solid h-[120px] rounded-[20px] flex flex-col items-center justify-center">
                <div aria-hidden="true" className="absolute bg-[rgba(171,255,152,0.5)] inset-0 mix-blend-soft-light rounded-[20px]" />
                <p className="font-['Outfit'] font-extrabold text-[48px] leading-[0.88] text-black tracking-[-2.4px]">+200</p>
                <p className="font-['Funnel_Display'] font-medium text-[14px] leading-none text-[#404040] mt-1">Jobs Created</p>
              </div>

              {/* Factory Size card */}
              <div className="relative border-[2.5px] border-white border-solid h-[120px] rounded-[20px] flex flex-col items-center justify-center">
                <div aria-hidden="true" className="absolute bg-[rgba(171,255,152,0.5)] inset-0 mix-blend-soft-light rounded-[20px]" />
                <p className="text-white text-center">
                  <span className="font-['Outfit'] font-extrabold text-[48px]">22Km</span>
                  <span className="font-['Outfit'] font-extrabold text-[32px] vertical-top">2</span>
                </p>
                <p className="font-['Funnel_Display'] font-medium text-[12px] text-white mt-1">Factory Size in Square Kilometer</p>
              </div>

              {/* Investment card */}
              <div className="relative h-[180px] rounded-[20px] overflow-hidden">
                <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgSubtract1} />
                <div className="relative h-full flex flex-col items-center justify-center">
                  <p className="font-['Outfit'] font-extrabold text-[48px] leading-[0.88] text-white tracking-[-2.4px]">Br210M</p>
                  <p className="font-['Funnel_Display'] font-medium text-[14px] text-white mt-1">Total Investment</p>
                  <p className="font-['Outfit'] font-extrabold text-[32px] text-[#404040] mt-4">$1.4M</p>
                </div>
              </div>
            </div>

            {/* Tablet/Laptop Layout - Grid (from md up to 2xl) */}
            <div className="relative z-10 hidden md:grid 2xl:hidden grid-cols-2 lg:grid-cols-3 gap-[24px] p-[32px] lg:p-[48px]">
               {/* +11 SKUs card */}
               <div className="relative h-[300px] rounded-[20px] overflow-hidden">
                <div className="absolute flex h-full items-center justify-center inset-0">
                  <div className="flex-none rotate-180 h-full w-full">
                    <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgSubtract} />
                  </div>
                </div>
                <div className="absolute h-full left-0 rounded-[20px] top-0 w-full flex flex-col items-center justify-center p-6">
                  <p className="font-['Outfit'] font-extrabold text-[64px] lg:text-[80px] leading-[0.88] text-black tracking-[-3.2px]">+11</p>
                  <p className="font-['Funnel_Display'] font-medium text-[16px] lg:text-[18px] leading-none text-[#404040] mt-2 text-center">Unique SKUs for Everyone.</p>
                  <p className="font-['Outfit'] font-extrabold text-[40px] lg:text-[48px] leading-[0.88] text-black mt-4">2tn</p>
                </div>
              </div>

              {/* 60tn Flour card */}
              <div className="relative flex flex-col h-[300px] items-center justify-center rounded-[20px] border-[2.5px] border-white border-solid">
                <div aria-hidden="true" className="absolute bg-[rgba(171,255,152,0.5)] inset-0 mix-blend-soft-light rounded-[20px]" />
                <p className="font-['Outfit'] font-extrabold text-[64px] lg:text-[80px] leading-[0.88] text-black tracking-[-3.2px]">60tn</p>
                <p className="font-['Funnel_Display'] font-medium text-[16px] lg:text-[18px] leading-none text-[#404040] mt-2 text-center px-6">Tones of Flour Production/Day</p>
              </div>

              {/* Quick Fact label */}
              <div className="relative border-[2.5px] border-white border-solid h-[300px] rounded-[20px] flex items-center justify-center">
                <div aria-hidden="true" className="absolute bg-[rgba(171,255,152,0.5)] inset-0 mix-blend-soft-light rounded-[20px]" />
                <p className="font-['Outfit'] font-extrabold text-[48px] lg:text-[56px] leading-[0.9] text-[#404040] text-center px-4">Quick Fact</p>
              </div>

              {/* +200 Jobs card */}
              <div className="relative border-[2.5px] border-white border-solid h-[300px] rounded-[20px] flex flex-col items-center justify-center">
                <div aria-hidden="true" className="absolute bg-[rgba(171,255,152,0.5)] inset-0 mix-blend-soft-light rounded-[20px]" />
                <p className="font-['Outfit'] font-extrabold text-[64px] lg:text-[80px] leading-[0.88] text-black tracking-[-3.2px]">+200</p>
                <p className="font-['Funnel_Display'] font-medium text-[16px] lg:text-[18px] leading-none text-[#404040] mt-2">Jobs Created</p>
              </div>

              {/* Factory Size card */}
              <div className="relative border-[2.5px] border-white border-solid h-[300px] rounded-[20px] flex flex-col items-center justify-center">
                <div aria-hidden="true" className="absolute bg-[rgba(171,255,152,0.5)] inset-0 mix-blend-soft-light rounded-[20px]" />
                <p className="text-white text-center">
                  <span className="font-['Outfit'] font-extrabold text-[64px] lg:text-[80px]">22Km</span>
                  <span className="font-['Outfit'] font-extrabold text-[32px] lg:text-[40px] align-top">2</span>
                </p>
                <p className="font-['Funnel_Display'] font-medium text-[14px] lg:text-[16px] text-white mt-2">Factory Size in Square Kilometer</p>
              </div>

              {/* Investment card */}
              <div className="relative h-[300px] rounded-[20px] overflow-hidden">
                <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgSubtract1} />
                <div className="relative h-full flex flex-col items-center justify-center p-6">
                  <p className="font-['Outfit'] font-extrabold text-[64px] lg:text-[80px] leading-[0.88] text-white tracking-[-3.2px]">Br210M</p>
                  <p className="font-['Funnel_Display'] font-medium text-[16px] lg:text-[18px] text-white mt-2">Total Investment</p>
                  <p className="font-['Outfit'] font-extrabold text-[40px] lg:text-[48px] text-[#404040] mt-4">$1.4M</p>
                </div>
              </div>
            </div>

            {/* Large Desktop Layout - Original absolute positioning (from 2xl up) */}
            <div className="hidden 2xl:block">
              {/* +11 SKUs card */}
              <div
                className="absolute h-[430px] left-[106.67px] top-[105px] w-[386.667px]"
                data-node-id="274:5316"
              >
                <div className="absolute flex h-[427.015px] items-center justify-center left-0 top-[2.3px] w-[386.666px]">
                  <div className="flex-none rotate-180">
                    <div
                      className="h-[427.015px] relative w-[386.666px]"
                      data-node-id="274:5317"
                      data-name="Subtract"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover"
                        src={imgSubtract}
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute h-[279.167px] left-0 rounded-[20px] top-[-0.09px] w-[386.667px]">
                  <p
                    className="absolute font-['Outfit'] font-extrabold text-[160px] leading-[0.88] left-0 right-0 text-black text-center top-[48.33px] tracking-[-4.8px]"
                    data-node-id="274:5321"
                  >
                    +11
                  </p>
                  <p
                    className="absolute font-['Funnel_Display'] font-medium text-[20px] leading-none left-0 right-0 text-[#404040] text-center top-[210px] tracking-[-0.08px]"
                    data-node-id="274:5322"
                  >
                    Unique SKUs for Everyone.
                  </p>
                  <p
                    className="absolute font-['Funnel_Display'] font-medium text-[20px] leading-none left-[67.66px] right-[163.25px] text-[#404040] text-center top-[376.67px] tracking-[-0.08px]"
                    data-node-id="274:5323"
                  >
                    Biscuits/Hour
                  </p>
                </div>
                <p
                  className="absolute font-['Outfit'] font-extrabold text-[80px] leading-[0.88] left-[66.82px] right-[110.27px] text-black text-center top-[296.59px] tracking-[-2.4px]"
                  data-node-id="274:5324"
                >
                  2tn
                </p>
              </div>

              {/* 60tn Flour card */}
              <div
                className="absolute flex flex-col h-[281.667px] items-center left-[513.33px] top-[104.8px] w-[480px]"
                data-node-id="274:5325"
              >
                <div
                  className="border-[2.5px] border-white border-solid h-[281.667px] relative rounded-[20px] w-full"
                  data-node-id="274:5326"
                >
                  <div
                    aria-hidden="true"
                    className="absolute bg-[rgba(171,255,152,0.5)] inset-0 mix-blend-soft-light pointer-events-none rounded-[20px]"
                  />
                  <p
                    className="absolute font-['Outfit'] font-extrabold text-[160px] leading-[0.88] left-0 right-0 text-black text-center top-[47.39px] tracking-[-4.8px]"
                    data-node-id="274:5327"
                  >
                    60tn
                  </p>
                  <p
                    className="absolute font-['Funnel_Display'] font-medium text-[20px] leading-none left-0 right-0 text-[#404040] text-center top-[209.05px] tracking-[-0.08px]"
                    data-node-id="274:5328"
                  >
                    Tones of Flour Production/Day
                  </p>
                </div>
              </div>

              {/* Quick Fact label */}
              <div
                className="absolute border-[2.5px] border-white border-solid h-[128.333px] left-[403.33px] rounded-[20px] top-[406.46px] w-[381.667px]"
                data-node-id="274:5329"
              >
                <div
                  aria-hidden="true"
                  className="absolute bg-[rgba(171,255,152,0.5)] inset-0 mix-blend-soft-light pointer-events-none rounded-[20px]"
                />
                <p className="font-['Outfit'] font-extrabold text-[66.667px] leading-[0.9] left-[calc(50%+0.08px)] text-[#404040] text-center top-[calc(50%-33.33px)] -translate-x-1/2 absolute tracking-[-1.3333px] whitespace-nowrap">
                  Quick Fact
                </p>
              </div>

              {/* +200 Jobs card */}
              <div
                className="absolute border-[2.5px] border-white border-solid h-[281.667px] left-[1013.33px] top-[104.8px] w-[480px]"
                data-node-id="274:5331"
              >
                <div
                  aria-hidden="true"
                  className="absolute bg-[rgba(171,255,152,0.5)] inset-0 mix-blend-soft-light pointer-events-none rounded-[20px]"
                />
                <p
                  className="absolute font-['Outfit'] font-extrabold text-[160px] leading-[0.88] left-0 right-0 text-black text-center top-[47.5px] tracking-[-4.8px]"
                  data-node-id="274:5332"
                >
                  +200
                </p>
                <p
                  className="absolute font-['Funnel_Display'] font-medium text-[20px] leading-none left-0 right-0 text-[#404040] text-center top-[209.17px] tracking-[-0.08px]"
                  data-node-id="274:5333"
                >
                  Jobs Created
                </p>
              </div>

              {/* 22Km² Factory card */}
              <div
                className="absolute border-[2.5px] border-white border-solid h-[285.833px] left-[106.67px] rounded-[20px] top-[553.13px] w-[610.833px]"
                data-node-id="274:5334"
              >
                <div
                  aria-hidden="true"
                  className="absolute bg-[rgba(171,255,152,0.5)] inset-0 mix-blend-soft-light pointer-events-none rounded-[20px]"
                />
                <p
                  className="absolute bottom-[237.5px] font-['Outfit'] font-extrabold leading-[0] left-0 right-0 text-[0px] text-white text-center tracking-[-4.8px] translate-y-full"
                  data-node-id="274:5335"
                >
                  <span className="font-['Outfit'] font-extrabold leading-[0.88] text-[160px]">
                    22Km
                  </span>
                  <span className="font-['Outfit'] font-extrabold leading-[0.88] text-[96.212px]">
                    2
                  </span>
                </p>
                <p
                  className="absolute bottom-[75.83px] font-['Funnel_Display'] font-medium text-[20px] leading-none left-0 right-0 text-white text-center tracking-[-0.08px] translate-y-full"
                  data-node-id="274:5336"
                >
                  Factory Size in Square Kilometer
                </p>
              </div>

              {/* Investment card */}
              <div
                className="absolute h-[435px] left-[737.5px] top-[404.17px] w-[755.833px]"
                data-node-id="274:5337"
              >
                <div
                  className="absolute h-[432.615px] left-0 top-[2.18px] w-[755.833px]"
                  data-node-id="274:5338"
                  data-name="Subtract"
                >
                  <img
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                    src={imgSubtract1}
                  />
                </div>
                <div
                  className="absolute bottom-[0.2px] h-[435px] left-0 overflow-hidden rounded-[20px] w-[755.833px]"
                  data-node-id="274:5341"
                >
                  <div
                    className="absolute aspect-[750.9089179361399/510.8412153982499] bottom-[159.26px] flex items-center justify-center left-[220.62px] right-[-215.69px]"
                    style={{ containerType: "size" }}
                  >
                    <div className="-scale-x-100 flex-none h-[hypot(12.3721cqw,62.5477cqh)] rotate-[-16.21deg] w-[hypot(-87.6279cqw,37.4523cqh)]">
                      <div
                        className="relative size-full"
                        data-node-id="274:5342"
                        data-name="Dollar 1"
                      >
                        <img
                          alt=""
                          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                          src={imgDollar1}
                        />
                      </div>
                    </div>
                  </div>
                  <p
                    className="absolute bottom-[239.58px] font-['Outfit'] font-extrabold text-[160px] leading-[0.88] left-0 right-0 text-white text-center tracking-[-4.8px] translate-y-full"
                    data-node-id="274:5343"
                  >
                    Br210M
                  </p>
                  <p
                    className="absolute bottom-[77.92px] font-['Funnel_Display'] font-medium text-[20px] leading-none left-0 right-0 text-white text-center tracking-[-0.08px] translate-y-full"
                    data-node-id="274:5344"
                  >
                    Total Investment
                  </p>
                  <p
                    className="absolute bottom-[390.42px] font-['Outfit'] font-extrabold text-[80px] leading-[0.88] left-[109.64px] right-0 text-[#404040] text-center tracking-[-2.4px] translate-y-full"
                    data-node-id="274:5345"
                  >
                    $1.4M
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
