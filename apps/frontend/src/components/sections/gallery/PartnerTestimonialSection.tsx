"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useTranslations } from "next-intl";

export default function PartnerTestimonialSection({ content, locale }: { content?: any; locale?: string }) {
  const t = useTranslations("Gallery.partnerTestimonial");
  const lang = (locale || "en") as "en" | "am";
  const c = content?.[lang];

  const heading = c?.heading || t("heading");
  const subheading = c?.subheading || t("subheading");
  const backgroundImage = c?.backgroundImage || 'https://picsum.photos/1920/1080?random=100';
  
  const items = c?.items || [
    {
      id: 1,
      quote: t("items.0.quote"),
      author: t("items.0.author"),
      title: t("items.0.title"),
      image: "https://picsum.photos/314/340?random=31",
    },
    {
      id: 2,
      quote: t("items.1.quote"),
      author: t("items.1.author"),
      title: t("items.1.title"),
      image: "https://picsum.photos/314/340?random=32",
    }
  ];

  return (
    <section className="relative w-full py-24 lg:py-32 overflow-hidden flex justify-center items-center">
      {/* Background with Green Overlay and Blur */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      >
        <div className="absolute inset-0 bg-[#37FF00]/40 backdrop-blur-[15px]"></div>
      </div>

      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[732px] h-[662px] bg-[#C8F1C5] opacity-20 blur-[170px] rounded-[48px] z-0 pointer-events-none"></div>

      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full flex flex-col items-center">
        
        {/* Headers */}
        <div className="relative w-full flex flex-col items-center justify-center mb-16">
          <div className="border border-white/40 px-6 py-1 rounded-full mb-4 backdrop-blur-sm">
            <span className="font-['Funnel_Display'] font-medium text-white text-[20px] tracking-[-0.004em]">
              {heading}
            </span>
          </div>
          
          <h2 className="font-['Funnel_Display'] font-bold text-white text-[80px] md:text-[140px] lg:text-[183px] leading-[1] tracking-[-0.02em] text-center w-full uppercase opacity-90 drop-shadow-lg">
            {subheading}
          </h2>
        </div>

        {/* Testimonials Slider */}
        <div className="w-full flex overflow-x-auto snap-x snap-mandatory gap-8 pb-12 scrollbar-hide" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {items.map((testimonial: any, idx: number) => (
            <article
              key={idx} 
              className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-[90vw] md:w-[1040px] shrink-0 snap-center mx-auto"
            >
              {/* Image */}
              <div className="relative w-[280px] h-[300px] md:w-[314px] md:h-[340px] rounded-[48px] overflow-hidden shrink-0 shadow-2xl">
                <Image 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  fill 
                  className="object-cover"
                  unoptimized
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 w-full max-w-[680px]">
                <p className="font-['Funnel_Display'] text-white text-[24px] md:text-[32px] leading-[1.2] tracking-[-0.004em] drop-shadow-md">
                  {testimonial.quote}
                </p>

                <div className="w-full h-[1px] bg-white/40 border border-white/20 mt-8 mb-6"></div>

                <div className="flex justify-between items-start md:items-center w-full">
                  <div className="flex flex-col">
                    <span className="font-['Outfit'] text-[#EAEAEA] text-[18px] leading-[1.2]">
                      {testimonial.author}
                    </span>
                    <span className="font-['Outfit'] text-[#EAEAEA] text-[16px] opacity-80">
                      {testimonial.title}
                    </span>
                  </div>
                  
                  {/* Quote Icon */}
                  <div className="text-[#FFEC19] drop-shadow-lg">
                    <Quote size={48} fill="currentColor" className="rotate-180" />
                  </div>
                </div>

                {/* Nav Buttons (Mockup) */}
                <div className="flex items-center gap-2 mt-8">
                  <button className="w-11 h-11 rounded-full bg-[#90D152] flex items-center justify-center hover:bg-[#23B349] transition-colors group">
                    <ChevronLeft className="text-[#23B349] group-hover:text-white" size={24} strokeWidth={2.5}/>
                  </button>
                  <button className="w-11 h-11 rounded-full bg-[#90D152] flex items-center justify-center hover:bg-[#23B349] transition-colors group">
                    <ChevronRight className="text-[#23B349] group-hover:text-white" size={24} strokeWidth={2.5}/>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
