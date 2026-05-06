"use client";

import { Info } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ResearchOverviewSection() {
  const t = useTranslations("Research.overview");

  const chartData = [
    {
      label: t("chart.taste"),
      kids: 57,
      parents: 60,
      youth: 72,
    },
    {
      label: t("chart.packaging"),
      kids: 52,
      parents: 45,
      youth: 35,
    },
    {
      label: t("chart.nutrition"),
      kids: 48,
      parents: 93,
      youth: 38,
    },
    {
      label: t("chart.trust"),
      kids: 40,
      parents: 68,
      youth: 44,
    },
    {
      label: t("chart.price"),
      kids: 25,
      parents: 32,
      youth: 28,
    },
  ];

  return (
    <section className="w-full bg-white px-4 md:px-12 lg:px-24 py-16 lg:py-32">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-8">
        
        {/* Left Side: Overview */}
        <div className="flex flex-col gap-6 lg:gap-8 lg:w-[45%]">
          <h2 className="font-['Funnel_Display'] font-bold text-[36px] md:text-[48px] leading-none text-[#23B349] tracking-[-0.01em]">
            {t("heading")}
          </h2>
          <div className="flex flex-col gap-6">
            <p className="font-['Outfit'] font-light text-[18px] md:text-[24px] leading-[130%] text-[#8A8C8A] tracking-[-0.004em]">
              {t("text1")}
            </p>
            <p className="font-['Outfit'] font-light text-[18px] md:text-[24px] leading-[130%] text-[#8A8C8A] tracking-[-0.004em]">
              {t("text2")}
            </p>
          </div>
        </div>

        {/* Right Side: Chart */}
        <div className="flex flex-col gap-8 lg:w-[50%] w-full relative">
          
          {/* Header & Legend */}
          <div className="flex flex-col gap-2">
            <h3 className="font-['Funnel_Display'] font-medium text-[20px] md:text-[24px] leading-none text-[#23B349]">
              {t("findingHeading")}
            </h3>
            <p className="font-['Outfit'] font-medium text-[14px] md:text-[16px] text-[#8A8C8A]">
              {t("findingSubheading")}
            </p>
            
            <div className="flex flex-row items-center justify-end gap-6 w-full mt-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-[#90D152] rounded-md md:rounded-lg"></div>
                <span className="font-['Outfit'] font-medium text-[16px] md:text-[20px] text-[#333733]">{t("legend.kids")}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-[#116D29] rounded-md md:rounded-lg"></div>
                <span className="font-['Outfit'] font-medium text-[16px] md:text-[20px] text-[#333733]">{t("legend.parents")}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-[#E8E8E8] rounded-md md:rounded-lg"></div>
                <span className="font-['Outfit'] font-medium text-[16px] md:text-[20px] text-[#333733]">{t("legend.youth")}</span>
              </div>
            </div>
          </div>

          {/* Bar Chart Area */}
          <div className="relative w-full h-[300px] md:h-[400px] mt-4 ml-0 sm:ml-16 flex flex-row items-end justify-between pt-10 px-2 sm:px-4 md:px-10 pb-[40px] border-b border-dashed border-[#8A8C8A]">
            
            {/* Grid lines (Y-axis markers) */}
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between pb-[40px] z-0 pointer-events-none">
              {[100, 75, 50, 25, 0].map((tick) => (
                <div key={tick} className="flex flex-row items-center w-full gap-4 relative">
                  <span className="hidden sm:block font-['Funnel_Display'] font-medium text-[16px] md:text-[24px] text-black w-12 text-right absolute -left-16">
                    {tick}%
                  </span>
                  <div className="w-full border-t border-dashed border-black/20"></div>
                </div>
              ))}
            </div>

            {/* Bars */}
            {chartData.map((data, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center h-full justify-end w-[18%] md:w-[15%]">
                <div className="flex flex-row items-end gap-[2px] md:gap-[4px] h-full w-full justify-center">
                  
                  {/* Kids Bar */}
                  <div className="flex flex-col items-center justify-end h-full w-1/3 group">
                    <span className="text-[#B8B5B5] font-['Outfit'] font-medium text-[10px] md:text-[14px] mb-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap absolute -top-6">
                      {data.kids}%
                    </span>
                    <div 
                      className="w-full bg-[#90D152] rounded-t-sm md:rounded-t-md transition-all duration-500 ease-out" 
                      style={{ height: `${data.kids}%` }}
                    ></div>
                  </div>

                  {/* Parents Bar */}
                  <div className="flex flex-col items-center justify-end h-full w-1/3 group">
                    <span className="text-[#B8B5B5] font-['Outfit'] font-medium text-[10px] md:text-[14px] mb-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap absolute -top-6">
                      {data.parents}%
                    </span>
                    <div 
                      className="w-full bg-[#116D29] rounded-t-sm md:rounded-t-md transition-all duration-500 ease-out" 
                      style={{ height: `${data.parents}%` }}
                    ></div>
                  </div>

                  {/* Youth Bar */}
                  <div className="flex flex-col items-center justify-end h-full w-1/3 group">
                    <span className="text-[#B8B5B5] font-['Outfit'] font-medium text-[10px] md:text-[14px] mb-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap absolute -top-6">
                      {data.youth}%
                    </span>
                    <div 
                      className="w-full bg-[#E8E8E8] rounded-t-sm md:rounded-t-md transition-all duration-500 ease-out" 
                      style={{ height: `${data.youth}%` }}
                    ></div>
                  </div>

                </div>
                {/* X-axis Label */}
                <span className="absolute -bottom-8 font-['Outfit'] font-medium text-[12px] md:text-[16px] text-black text-center leading-tight whitespace-nowrap">
                  {data.label}
                </span>
              </div>
            ))}
          </div>

          {/* Info Box */}
          <div className="mt-12 flex flex-row items-center gap-4 bg-[#E5F9FF] rounded-[16px] md:rounded-[24px] px-6 py-4 md:py-5 border border-[#E5F9FF]/0">
            <Info className="w-5 h-5 md:w-6 md:h-6 text-[#004A67] shrink-0" />
            <p className="font-['Outfit'] font-normal text-[12px] md:text-[14px] text-[#497AB8] leading-tight">
              {t("info")}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
