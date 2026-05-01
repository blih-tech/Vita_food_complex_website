"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { ABOUT_ASSETS } from "@frontend/constants/aboutAssets";

export default function AboutCompanySection() {
  const t = useTranslations("About.company");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const highlightKeys = ["quality", "local", "community", "innovation"];

  return (
    <section 
      ref={sectionRef}
      className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 xl:px-[128px] bg-white relative overflow-hidden"
    >
      <div className="max-w-[1664px] mx-auto relative z-10">
        {/* Our Story Heading */}
        <div className={`text-center mb-20 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="font-['Funnel_Display'] font-bold text-[#0F4B1F] text-5xl lg:text-[80px] leading-[1] tracking-[-1.28px]">
            {t("title")}
          </h2>
          <div className="w-24 h-1.5 bg-[#23B349] mx-auto mt-8 rounded-full shadow-lg" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Company Description */}
          <div className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div className="font-['Outfit'] text-[#333733] leading-relaxed space-y-8">
              <p className="text-xl lg:text-[32px] font-medium leading-[1.4] tracking-tight">
                {t("description")}
              </p>
              
              {/* Key highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 pt-12 border-t border-gray-100">
                {highlightKeys.map((key) => (
                  <div key={key} className="flex items-center space-x-4 group">
                    <div className="w-5 h-5 bg-[#23B349] rounded-full shadow-md group-hover:scale-125 transition-transform duration-300" />
                    <span className="text-lg lg:text-xl font-bold text-[#0F4B1F] group-hover:translate-x-1 transition-transform duration-300">
                      {t(`highlights.${key}`)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className={`relative transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`} style={{ animationDelay: "0.2s" }}>
            <div className="relative group rounded-[40px] overflow-hidden shadow-2xl bg-gray-50 aspect-[4/3] lg:aspect-video">
              <Image
                src={ABOUT_ASSETS.content.storyImage}
                alt="Vita Story"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Floating Made in Ethiopia Badge */}
              <div className="absolute top-8 right-8 w-32 h-32 lg:w-40 lg:h-40 animate-float">
                <Image
                  src={ABOUT_ASSETS.content.madeInEthiopia}
                  alt="Made in Ethiopia"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>

              {/* Text Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F4B1F]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                <p className="text-white text-2xl font-bold tracking-tight">Quality from the Heart of Ethiopia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
