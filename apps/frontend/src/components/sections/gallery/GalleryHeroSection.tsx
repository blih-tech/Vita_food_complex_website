"use client";

import Image from "next/image";
import { useRef } from "react";
import { useTranslations } from "next-intl";

export default function GalleryHeroSection({ content, locale }: { content?: any; locale?: string }) {
  const t = useTranslations("Gallery.hero");
  const lang = (locale || "en") as "en" | "am";
  const c = content?.[lang];
  const scrollRef = useRef<HTMLDivElement>(null);

  const headline = c?.headline || t("headline");
  const subtitle = c?.subtitle || t("subtitle");
  const images = c?.images || [
    "https://picsum.photos/444/373?random=1",
    "https://picsum.photos/444/373?random=2",
    "https://picsum.photos/502/754?random=3",
    "https://picsum.photos/786/1180?random=4",
    "https://picsum.photos/854/568?random=5",
    "https://picsum.photos/588/735?random=6",
    "https://picsum.photos/672/447?random=7",
  ];
  const altText = c?.altText || t("altText");

  return (
    <section className="relative w-full pt-12 pb-24 overflow-hidden bg-white">
      {/* Text Content */}
      <div className="flex flex-col items-center gap-4 max-w-3xl mx-auto px-6 text-center z-10 relative">
        <h1 className="font-['Funnel_Display'] font-bold text-[#23B349] text-5xl md:text-[80px] leading-[1.2] tracking-[-0.03em]">
          {headline}
        </h1>
        <p className="font-['Outfit'] text-[#333733] text-lg md:text-[24px] leading-relaxed max-w-xl">
          {subtitle}
        </p>
      </div>

      {/* Hero Gallery Carousel */}
      <div className="relative w-full mt-16 md:mt-24 h-[300px] md:h-[450px]">
        {/* Curved Top overlay */}
        <div 
          className="absolute top-[-5px] left-0 w-full h-[60px] md:h-[120px] bg-white z-20"
          style={{
            borderBottomLeftRadius: '50% 100%',
            borderBottomRightRadius: '50% 100%',
            transform: 'scaleX(1.5)',
          }}
        ></div>
        
        {/* Curved top border outline */}
        <div 
          className="absolute top-[-5px] left-0 w-full h-[60px] md:h-[120px] z-30 pointer-events-none"
          style={{
            borderBottom: '2px solid #23B349',
            borderBottomLeftRadius: '50% 100%',
            borderBottomRightRadius: '50% 100%',
            transform: 'scaleX(1.5)',
          }}
        ></div>

        <div
          ref={scrollRef}
          className="flex flex-row items-center gap-6 overflow-x-auto h-full px-[5vw] scrollbar-hide snap-x relative z-10"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {images.map((src: string, i: number) => (
            <div
              key={i}
              className="relative shrink-0 h-full w-[280px] md:w-[444px] bg-gray-200 snap-center overflow-hidden"
            >
              <Image
                src={src}
                alt={altText + ` ${i + 1}`}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          ))}
        </div>

        {/* Curved Bottom overlay */}
        <div 
          className="absolute bottom-[-5px] left-0 w-full h-[60px] md:h-[120px] bg-white z-20"
          style={{
            borderTopLeftRadius: '50% 100%',
            borderTopRightRadius: '50% 100%',
            transform: 'scaleX(1.5)',
          }}
        ></div>

        {/* Curved bottom border outline */}
        <div 
          className="absolute bottom-[-5px] left-0 w-full h-[60px] md:h-[120px] z-30 pointer-events-none"
          style={{
            borderTop: '2px solid #23B349',
            borderTopLeftRadius: '50% 100%',
            borderTopRightRadius: '50% 100%',
            transform: 'scaleX(1.5)',
          }}
        ></div>
      </div>
    </section>
  );
}
