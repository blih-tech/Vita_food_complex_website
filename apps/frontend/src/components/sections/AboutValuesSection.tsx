"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AboutValuesSection() {
  const t = useTranslations("About.values");

  return (
    <section className="bg-[#E9F7ED] py-24 lg:py-32">
      <div className="max-w-[1664px] mx-auto px-6 lg:px-[128px]">
        {/* Grid of cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Mission Card */}
          <div className="bg-white rounded-[32px] p-8 lg:p-12 shadow-xl relative overflow-hidden min-h-[500px] lg:min-h-[770px] flex flex-col transition-all duration-500 hover:shadow-2xl group">
            <div className="absolute top-8 right-8 w-16 h-16 rounded-full bg-[#23B349] opacity-10 group-hover:scale-110 transition-transform duration-500" />
            <div className="flex-1" />
            <div className="relative z-10">
              <h3 className="font-['Funnel_Display'] font-bold text-[#0F4B1F] text-2xl lg:text-[40px] leading-tight mb-6">
                {t("mission.title")}
              </h3>
              <p className="font-['Outfit'] font-normal text-[#333733] text-lg lg:text-[22px] leading-[1.6]">
                {t("mission.description")}
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-[#0F4B1F] rounded-[32px] p-8 lg:p-12 shadow-xl relative overflow-hidden min-h-[400px] lg:min-h-[435px] flex flex-col justify-center transition-all duration-500 hover:shadow-2xl group">
            <div className="absolute top-8 right-8 w-16 h-16 rounded-full bg-white opacity-5 group-hover:scale-110 transition-transform duration-500" />
            <div className="relative z-10">
              <h3 className="font-['Funnel_Display'] font-bold text-white text-2xl lg:text-[40px] leading-tight mb-6">
                {t("vision.title")}
              </h3>
              <p className="font-['Outfit'] font-normal text-white/90 text-lg lg:text-[22px] leading-[1.6]">
                {t("vision.description")}
              </p>
            </div>
          </div>

          {/* Image Card 1 - Baking Biscuits */}
          <div className="relative rounded-[32px] overflow-hidden shadow-xl min-h-[300px] lg:min-h-[333px] group">
            <Image
              src="/assets/about/baking-biscuits.png"
              alt="Baking Biscuits"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* Image Card 2 - Wheat Farming */}
          <div className="relative rounded-[32px] overflow-hidden shadow-xl min-h-[300px] lg:min-h-[435px] group">
            <Image
              src="/assets/about/wheat-farming.png"
              alt="Wheat Farming"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* Core Values Card */}
          <div className="bg-[#23B349] rounded-[32px] p-8 lg:p-12 shadow-xl relative overflow-hidden min-h-[400px] lg:min-h-[690px] md:col-span-2 lg:col-span-2 flex flex-col justify-center transition-all duration-500 hover:shadow-2xl group">
            <div className="absolute top-12 right-12 w-24 h-24 rounded-full bg-white opacity-10 group-hover:scale-110 transition-transform duration-500" />
            <div className="relative z-10 lg:pt-8">
              <h3 className="font-['Funnel_Display'] font-bold text-white text-3xl lg:text-[56px] leading-tight mb-12">
                {t("core.title")}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {["quality", "community", "sustainability", "innovation"].map((key, index) => (
                  <div key={index} className="flex items-center gap-6">
                    <div className="w-4 h-4 rounded-full bg-white shadow-lg" />
                    <span className="font-['Outfit'] font-extrabold text-white text-xl lg:text-[32px] tracking-tight">
                      {t(`core.items.${index}`)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Card */}
          <div className="bg-white rounded-[32px] p-8 lg:p-12 shadow-xl relative overflow-hidden min-h-[300px] lg:min-h-[250px] md:col-span-2 flex flex-col justify-center transition-all duration-500 hover:shadow-2xl group">
            <div className="absolute top-8 right-8 w-16 h-16 rounded-full bg-[#23B349] opacity-5 group-hover:scale-110 transition-transform duration-500" />
            <div className="relative z-10">
              <h3 className="font-['Funnel_Display'] font-bold text-[#0F4B1F] text-2xl lg:text-[40px] leading-tight mb-4">
                {t("stats.title")}
              </h3>
              <p className="font-['Outfit'] font-bold text-[#23B349] text-xl lg:text-[28px] leading-relaxed">
                {t("stats.description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
