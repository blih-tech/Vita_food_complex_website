"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function CommunityWallSection({ content, locale }: { content?: any; locale?: string }) {
  const t = useTranslations("Gallery.communityWall");
  const lang = (locale || "en") as "en" | "am";
  const c = content?.[lang];

  const heading = c?.heading || t("heading");
  const subtext = c?.subtext || t("subtext");
  const images = c?.images || [
    "https://picsum.photos/516/369?random=11",
    "https://picsum.photos/516/541?random=12",
    "https://picsum.photos/516/541?random=13",
    "https://picsum.photos/516/541?random=14",
    "https://picsum.photos/516/541?random=15",
    "https://picsum.photos/516/541?random=16",
    "https://picsum.photos/516/369?random=17",
  ];
  const altTextPrefix = c?.altTextPrefix || t("altTextPrefix");
  const loadMore = c?.loadMore || t("loadMore");

  return (
    <section className="relative w-full bg-[#23B349] pt-24 pb-32 overflow-hidden z-10 -mt-12">
      {/* Top curved mask */}
      <div 
        className="absolute top-0 left-0 w-full h-[120px] bg-white z-0 pointer-events-none"
        style={{
          borderBottomLeftRadius: '50% 100%',
          borderBottomRightRadius: '50% 100%',
          transform: 'scaleX(1.5)',
        }}
      ></div>

      <div className="max-w-[1664px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 pt-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16">
          <h2 className="font-['Outfit'] font-extrabold text-white text-[48px] md:text-[80px] leading-[0.9] tracking-[-0.02em]">
            {heading}
          </h2>
          <p className="font-['Funnel_Display'] font-medium text-white text-[20px] md:text-[24px] tracking-[-0.004em]">
            {subtext}
          </p>
        </div>

        {/* Masonry / Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src: string, i: number) => (
            <div
              key={i}
              className="bg-[#F3F3F3] border border-[#90D152] rounded-[24px] p-3 break-inside-avoid shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
            >
              <div className="relative w-full rounded-xl overflow-hidden" style={{ aspectRatio: i % 2 === 0 ? '516/369' : '516/541' }}>
                <Image
                  src={src}
                  alt={altTextPrefix + ` ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>
              
              <div className="flex items-center gap-4 mt-4 px-2 pb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden relative">
                  <Image src={`https://picsum.photos/50/50?random=${20+i}`} alt="Avatar" fill className="object-cover" unoptimized/>
                </div>
                <span className="font-['Funnel_Display'] font-bold text-[#404040] text-[18px]">
                  Vita Enthusiast
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-20">
          <button className="flex items-center gap-4 bg-[#23B349] border border-white px-8 py-4 rounded-full group hover:bg-white transition-colors">
            <span className="font-['Outfit'] text-[20px] text-white group-hover:text-[#23B349] transition-colors">
              {loadMore}
            </span>
            <ArrowRight className="w-5 h-5 text-white group-hover:text-[#23B349] transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
}
