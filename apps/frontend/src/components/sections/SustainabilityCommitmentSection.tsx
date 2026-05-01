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
      className="w-full bg-white px-4 sm:px-6 md:px-8 lg:px-[128px] py-[48px] sm:py-[64px] md:py-[80px] lg:py-[96px]"
      data-node-id="274:5236"
      data-name="Commitment"
    >
      <div className="max-w-[1664px] mx-auto">
        {/* Commitments container */}
        <div
          className="flex flex-col items-center gap-[32px] sm:gap-[48px]"
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
              className="font-['Funnel_Display'] font-normal text-[18px] sm:text-[24px] md:text-[32px] leading-normal tracking-[-0.128px] text-[#545854] max-w-[1386px] mx-auto mb-[24px] sm:mb-[48px]"
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

          {/* Commitment cards - responsive grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] sm:gap-[24px] w-full"
            data-node-id="274:5242"
            data-name="Commitment card"
          >
            {commitments.map((commitment, index) => (
              <div
                key={commitment.key}
                className="relative rounded-[24px] overflow-hidden min-h-[450px] sm:min-h-[500px] lg:min-h-[558px]"
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
                    className="absolute inset-0 rounded-[24px]"
                    style={{
                      backgroundImage:
                        "linear-gradient(145.96992870178786deg, rgb(233, 247, 237) 17.067%, rgb(35, 179, 73) 100%)",
                    }}
                    data-node-id={`274:${5245 + index}`}
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center p-4"
                    data-node-id={`274:${5246 + index}`}
                    data-name="Frame"
                  >
                    <img
                      alt=""
                      className="max-w-full max-h-full object-contain opacity-20"
                      src={commitment.frame}
                    />
                  </div>
                </div>

                {/* Card content */}
                <div
                  className="relative z-10 bg-[#e9f7ed]/90 backdrop-blur-sm border-[2px] border-[#9adcab] flex flex-col items-center justify-center p-[16px] sm:p-[24px] m-[12px] rounded-[16px] min-h-[400px] sm:min-h-[450px]"
                  data-node-id={`274:${5250 + index}`}
                >
                  <div
                    className="flex flex-col gap-[16px] sm:gap-[23px] items-center justify-center w-full"
                    data-node-id={`274:${5251 + index}`}
                  >
                    {/* Card title */}
                    <div
                      className="flex flex-col items-center"
                      data-node-id={`274:${5252 + index}`}
                    >
                      <h3
                        className="font-['Funnel_Display'] font-bold text-[24px] sm:text-[28px] lg:text-[32px] leading-none tracking-[-0.32px] text-[#197f34]"
                        data-node-id={`274:${5253 + index}`}
                      >
                        {commitment.title}
                      </h3>
                    </div>

                    {/* Card items */}
                    <div
                      className="flex flex-col gap-[8px] sm:gap-[11px] items-start w-full"
                      data-node-id={`274:${5254 + index}`}
                    >
                      {commitment.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="bg-[rgba(255,249,242,0.74)] flex gap-[8px] sm:gap-[11px] items-center p-[8px] sm:p-[11px] rounded-[8px] w-full"
                          data-node-id={`274:${5255 + index * 4 + itemIndex}`}
                        >
                          {/* Vector icon */}
                          <div
                            className="relative w-[20px] h-[20px] sm:w-[23px] sm:h-[23px] flex-shrink-0"
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
                            className="font-['Outfit'] font-normal text-[16px] sm:text-[20px] lg:text-[24px] leading-normal tracking-[-0.096px] text-[#333733]"
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

          {/* Quick Fact section - responsive grid */}
          <div
            className="relative rounded-[24px] sm:rounded-[32px] lg:rounded-[48px] w-full overflow-hidden"
            data-node-id="274:5315"
            data-name="Quick fact"
          >
            {/* Background image */}
            <img
              alt=""
              className="absolute inset-0 w-full h-full object-cover rounded-[24px] sm:rounded-[32px] lg:rounded-[48px]"
              src={imgQuickFact}
            />

            {/* Content overlay */}
            <div className="relative z-10 p-[24px] sm:p-[32px] md:p-[48px] lg:p-[64px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px] sm:gap-[24px]">
                {/* +11 SKUs card */}
                <div className="bg-white/90 backdrop-blur-sm rounded-[16px] p-[20px] sm:p-[24px] relative overflow-hidden min-h-[200px] sm:min-h-[250px] lg:min-h-[300px] flex flex-col justify-center">
                  <img
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover opacity-20 rotate-180"
                    src={imgSubtract}
                  />
                  <div className="relative z-10">
                    <p className="font-['Outfit'] font-extrabold text-[48px] sm:text-[80px] lg:text-[96px] leading-[0.88] text-black">
                      +11
                    </p>
                    <p className="font-['Funnel_Display'] font-medium text-[14px] sm:text-[16px] lg:text-[20px] text-[#404040] mt-2">
                      Unique SKUs for Everyone.
                    </p>
                    <p className="font-['Outfit'] font-extrabold text-[32px] sm:text-[48px] lg:text-[64px] leading-[0.88] text-black mt-2">
                      2tn
                    </p>
                    <p className="font-['Funnel_Display'] font-medium text-[14px] sm:text-[16px] lg:text-[20px] text-[#404040] mt-1">
                      Biscuits/Hour
                    </p>
                  </div>
                </div>

                {/* 60tn Flour card */}
                <div className="bg-white/90 backdrop-blur-sm rounded-[16px] p-[20px] sm:p-[24px] relative min-h-[200px] sm:min-h-[250px] lg:min-h-[300px] flex flex-col justify-center">
                  <div
                    aria-hidden="true"
                    className="absolute bg-[rgba(171,255,152,0.5)] inset-0 mix-blend-soft-light pointer-events-none rounded-[16px]"
                  />
                  <div className="relative z-10">
                    <p className="font-['Outfit'] font-extrabold text-[48px] sm:text-[80px] lg:text-[96px] leading-[0.88] text-black">
                      60tn
                    </p>
                    <p className="font-['Funnel_Display'] font-medium text-[14px] sm:text-[16px] lg:text-[20px] text-[#404040] mt-2">
                      Tones of Flour Production/Day
                    </p>
                  </div>
                </div>

                {/* Quick Fact label */}
                <div className="bg-white/90 backdrop-blur-sm rounded-[16px] p-[20px] sm:p-[24px] relative flex items-center justify-center min-h-[100px] sm:min-h-[120px] lg:min-h-[130px]">
                  <div
                    aria-hidden="true"
                    className="absolute bg-[rgba(171,255,152,0.5)] inset-0 mix-blend-soft-light pointer-events-none rounded-[16px]"
                  />
                  <p className="relative z-10 font-['Outfit'] font-extrabold text-[32px] sm:text-[48px] lg:text-[66px] leading-[0.9] text-[#404040] text-center">
                    Quick Fact
                  </p>
                </div>

                {/* +200 Jobs card */}
                <div className="bg-white/90 backdrop-blur-sm rounded-[16px] p-[20px] sm:p-[24px] relative min-h-[200px] sm:min-h-[250px] lg:min-h-[300px] flex flex-col justify-center">
                  <div
                    aria-hidden="true"
                    className="absolute bg-[rgba(171,255,152,0.5)] inset-0 mix-blend-soft-light pointer-events-none rounded-[16px]"
                  />
                  <div className="relative z-10">
                    <p className="font-['Outfit'] font-extrabold text-[48px] sm:text-[80px] lg:text-[96px] leading-[0.88] text-black">
                      +200
                    </p>
                    <p className="font-['Funnel_Display'] font-medium text-[14px] sm:text-[16px] lg:text-[20px] text-[#404040] mt-2">
                      Jobs Created
                    </p>
                  </div>
                </div>

                {/* 22Km² Factory card */}
                <div className="bg-white/90 backdrop-blur-sm rounded-[16px] p-[20px] sm:p-[24px] relative min-h-[200px] sm:min-h-[250px] lg:min-h-[300px] flex flex-col justify-center">
                  <div
                    aria-hidden="true"
                    className="absolute bg-[rgba(171,255,152,0.5)] inset-0 mix-blend-soft-light pointer-events-none rounded-[16px]"
                  />
                  <div className="relative z-10">
                    <p className="font-['Outfit'] font-extrabold text-[48px] sm:text-[80px] lg:text-[96px] leading-[0.88] text-white">
                      22Km²
                    </p>
                    <p className="font-['Funnel_Display'] font-medium text-[14px] sm:text-[16px] lg:text-[20px] text-white mt-2">
                      Factory Size in Square Kilometer
                    </p>
                  </div>
                </div>

                {/* Investment card */}
                <div className="bg-white/90 backdrop-blur-sm rounded-[16px] p-[20px] sm:p-[24px] relative overflow-hidden min-h-[200px] sm:min-h-[250px] lg:min-h-[300px] flex flex-col justify-center sm:col-span-2 lg:col-span-1">
                  <img
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover opacity-20"
                    src={imgSubtract1}
                  />
                  <div className="relative z-10">
                    <img
                      alt=""
                      className="absolute right-[-20px] top-[-20px] w-[80px] sm:w-[120px] lg:w-[150px] opacity-30 -scale-x-100"
                      src={imgDollar1}
                    />
                    <p className="font-['Outfit'] font-extrabold text-[48px] sm:text-[80px] lg:text-[96px] leading-[0.88] text-white">
                      Br210M
                    </p>
                    <p className="font-['Funnel_Display'] font-medium text-[14px] sm:text-[16px] lg:text-[20px] text-white mt-2">
                      Total Investment
                    </p>
                    <p className="font-['Outfit'] font-extrabold text-[32px] sm:text-[48px] lg:text-[64px] leading-[0.88] text-[#404040] mt-2">
                      $1.4M
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
