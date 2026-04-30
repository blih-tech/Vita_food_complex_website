"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { ABOUT_ASSETS } from "@frontend/constants/aboutAssets";

export default function AboutStorySection() {
  const t = useTranslations("About");
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Story timeline data
  const storyTimeline = [
    {
      year: "2010",
      title: "The Beginning",
      description: "A simple idea took shape in the highlands of Debre Sina."
    },
    {
      year: "2015", 
      title: "Growth & Investment",
      description: "With 210 million Birr investment, Vita Hydro Agro-Processing was born."
    },
    {
      year: "2020",
      title: "Community Impact",
      description: "Working closely with local farmers and creating employment opportunities."
    },
    {
      year: "2024",
      title: "Future Ready",
      description: "Preparing for a future beyond borders with expanded capabilities."
    }
  ];

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
        setCurrentSlide((prev) => (prev + 1) % storyTimeline.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isVisible, storyTimeline.length]);

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 xl:px-[128px] bg-gradient-to-br from-gray-50 to-[#f8fdfb] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2323B349' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }} />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
             style={{ animationDelay: '0.2s' }}>
          <h2 className="font-['Funnel_Display'] font-bold text-[#0F4B1F] leading-[0.96] tracking-[-1.28px] mb-4"
              style={{ 
                fontSize: 'clamp(28px, 4vw, 48px)',
                textShadow: '0 2px 10px rgba(15, 75, 31, 0.1)'
              }}
          >
            <span className="inline-block animate-fade-in-up">
              {t("story.title")}
            </span>
          </h2>
          <p className="font-['Outfit'] text-[#333733] leading-relaxed max-w-2xl mx-auto"
             style={{ 
               fontSize: 'clamp(16px, 2vw, 20px)'
             }}
          >
            <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              {t("story.content")}
            </span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Story Timeline - Interactive */}
          <div className={`space-y-8 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
               style={{ animationDelay: '0.6s' }}>
            {/* Timeline Navigation */}
            <div className="flex flex-wrap gap-2 mb-8">
              {storyTimeline.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-[#23B349] text-white shadow-lg scale-105' 
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {item.year}
                </button>
              ))}
            </div>

            {/* Timeline Content */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#23B349] to-[#0F4B1F]" />
              
              {/* Timeline Items */}
              <div className="space-y-8">
                {storyTimeline.map((item, index) => (
                  <div 
                    key={index}
                    className={`relative flex items-start space-x-6 transition-all duration-700 ${
                      currentSlide === index 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-50 translate-x-4'
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div className={`relative z-10 w-8 h-8 rounded-full border-4 transition-all duration-300 ${
                      currentSlide === index 
                        ? 'bg-[#23B349] border-white shadow-lg scale-125' 
                        : 'bg-white border-gray-300'
                    }`} />
                    
                    {/* Timeline Content */}
                    <div className="flex-1 bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <h3 className="font-['Outfit'] font-bold text-[#0F4B1F] text-lg mb-2">
                        {item.title}
                      </h3>
                      <p className="font-['Outfit'] text-gray-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress Indicator */}
            <div className="flex items-center space-x-2">
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#23B349] transition-all duration-500 ease-out"
                  style={{ width: `${((currentSlide + 1) / storyTimeline.length) * 100}%` }}
                />
              </div>
              <span className="text-sm font-medium text-gray-500">
                {currentSlide + 1}/{storyTimeline.length}
              </span>
            </div>
          </div>

          {/* Story Visual - Enhanced */}
          <div className={`relative transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
               style={{ animationDelay: '0.8s' }}>
            {/* Main Image Container */}
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#23B349] to-[#0F4B1F] rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl" />
              
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden bg-white shadow-2xl transition-all duration-500 group-hover:shadow-3xl group-hover:scale-[1.02]">
                <Image
                  src={ABOUT_ASSETS.content.storyImage}
                  alt="Our Journey"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ objectPosition: 'center' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                
                {/* Image Overlay with Current Story */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-[#23B349] rounded-full flex items-center justify-center">
                        <span className="font-bold text-lg">{storyTimeline[currentSlide].year}</span>
                      </div>
                      <div>
                        <h3 className="font-['Outfit'] font-bold text-xl">{storyTimeline[currentSlide].title}</h3>
                        <p className="text-sm opacity-90">{storyTimeline[currentSlide].description}</p>
                      </div>
                    </div>
                    
                    {/* Navigation Arrows */}
                    <div className="flex justify-between items-center mt-6">
                      <button
                        onClick={() => setCurrentSlide((prev) => (prev - 1 + storyTimeline.length) % storyTimeline.length)}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={() => setCurrentSlide((prev) => (prev + 1) % storyTimeline.length)}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#23B349] rounded-full opacity-10 animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#0F4B1F] rounded-full opacity-10 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
          }
        `
      }} />
    </section>
  );
}
