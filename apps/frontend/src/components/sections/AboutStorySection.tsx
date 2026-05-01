"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { ABOUT_ASSETS } from "@frontend/constants/aboutAssets";

export default function AboutStorySection() {
  const t = useTranslations("About.story");
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Story timeline data years
  const years = ["2010", "2015", "2020", "2024"];

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

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % years.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isVisible, years.length]);

  return (
    <section 
      ref={sectionRef}
      className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 xl:px-[128px] bg-gradient-to-br from-gray-50 to-[#f8fdfb] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2323B349' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }} />
      </div>
      
      <div className="max-w-[1664px] mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-['Funnel_Display'] font-bold text-[#0F4B1F] leading-[1] tracking-[-1.28px] mb-6 text-5xl lg:text-[80px]">
            {t("title")}
          </h2>
          <p className="font-['Outfit'] text-[#333733] text-lg lg:text-2xl leading-relaxed max-w-3xl mx-auto opacity-70">
            {t("content")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Story Timeline - Interactive */}
          <div className={`space-y-12 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {/* Timeline Navigation */}
            <div className="flex flex-wrap gap-3 mb-12">
              {years.map((year, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`px-6 py-3 rounded-full text-lg font-bold transition-all duration-500 ${
                    currentSlide === index 
                      ? "bg-[#23B349] text-white shadow-xl scale-110" 
                      : "bg-white text-[#0F4B1F]/60 hover:bg-gray-100 border border-gray-100"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>

            {/* Timeline Content */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#23B349] to-[#0F4B1F] opacity-20" />
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {years.map((year, index) => (
                  <div 
                    key={index}
                    className={`relative flex items-start space-x-10 transition-all duration-700 ${
                      currentSlide === index 
                        ? "opacity-100 translate-x-0" 
                        : "opacity-30 scale-95"
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div className={`relative z-10 w-12 h-12 rounded-full border-4 transition-all duration-500 flex items-center justify-center font-bold ${
                      currentSlide === index 
                        ? "bg-[#23B349] border-white shadow-xl scale-125 text-white" 
                        : "bg-white border-gray-200 text-[#0F4B1F]/40"
                    }`}>
                      {index + 1}
                    </div>
                    
                    {/* Timeline Content */}
                    <div className="flex-1 bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500">
                      <h3 className="font-['Outfit'] font-extrabold text-[#0F4B1F] text-2xl lg:text-3xl mb-3">
                        {t(`timeline.${year}.title`)}
                      </h3>
                      <p className="font-['Outfit'] text-[#333733]/80 text-lg lg:text-xl leading-relaxed">
                        {t(`timeline.${year}.description`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Story Visual - Enhanced */}
          <div className={`relative transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ animationDelay: '0.2s' }}>
            {/* Main Image Container */}
            <div className="relative group">
              <div className="absolute -inset-6 bg-gradient-to-r from-[#23B349] to-[#0F4B1F] rounded-[40px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-3xl" />
              
              <div className="relative rounded-[40px] overflow-hidden bg-white shadow-3xl aspect-[4/5] lg:aspect-square">
                <Image
                  src={ABOUT_ASSETS.content.storyImage}
                  alt="Our Journey"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-12">
                  <div className="flex items-center space-x-6 mb-6">
                    <div className="w-20 h-20 bg-[#23B349] rounded-2xl flex items-center justify-center shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500">
                      <span className="font-bold text-3xl text-white">{years[currentSlide]}</span>
                    </div>
                    <div>
                      <h3 className="font-['Outfit'] font-extrabold text-3xl text-white mb-2">{t(`timeline.${years[currentSlide]}.title`)}</h3>
                      <p className="text-white/80 text-lg leading-snug">{t(`timeline.${years[currentSlide]}.description`)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Spark Asset */}
            <div className="absolute -top-12 -right-12 w-32 h-32 animate-pulse">
              <Image src="/assets/about/spark.svg" alt="" fill className="object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
