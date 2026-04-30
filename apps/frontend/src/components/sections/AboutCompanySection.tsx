"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { ABOUT_ASSETS } from "@frontend/constants/aboutAssets";

export default function AboutCompanySection() {
  const t = useTranslations("About");
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
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

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 xl:px-[128px] bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f8fdfb] via-transparent to-white opacity-50" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Our Story Heading - Enhanced with animations */}
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
             style={{ marginTop: 'clamp(60px, 10vw, 1248px)' }}>
          <h2 className="font-['Outfit'] font-bold text-[#23B349] leading-[0.96] tracking-[-1.28px] transition-all duration-700 ease-out"
              style={{ 
                fontSize: 'clamp(32px, 4vw, 64px)',
                fontFeatureSettings: "'liga' 0",
                textShadow: '0 2px 10px rgba(35, 179, 73, 0.1)'
              }}
          >
            <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {t("company.title")}
            </span>
          </h2>
          
          {/* Decorative underline */}
          <div className="w-20 h-1 bg-[#23B349] mx-auto mt-6 rounded-full animate-scale-in" style={{ animationDelay: '0.4s' }} />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Company Description - Enhanced with animations */}
          <div className={`space-y-8 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
               style={{ animationDelay: '0.6s' }}>
            <div className="font-['Outfit'] font-normal text-[#8a8c8a] leading-none text-center lg:text-left tracking-[-0.48px] space-y-4">
              <p className="leading-none mb-0 transition-all duration-700 ease-out hover:text-[#6b7c6a]"
                 style={{ 
                   fontSize: 'clamp(18px, 2.5vw, 48px)',
                   lineHeight: 'clamp(1.2, 1.4, 1.6)'
                 }}
              >
                {t("company.description")}
              </p>
              
              {/* Key highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center space-x-3 group cursor-pointer">
                  <div className="w-3 h-3 bg-[#23B349] rounded-full group-hover:scale-125 transition-transform duration-300" />
                  <span className="text-sm sm:text-base text-gray-600 group-hover:text-[#23B349] transition-colors duration-300">
                    Quality First
                  </span>
                </div>
                <div className="flex items-center space-x-3 group cursor-pointer">
                  <div className="w-3 h-3 bg-[#23B349] rounded-full group-hover:scale-125 transition-transform duration-300" />
                  <span className="text-sm sm:text-base text-gray-600 group-hover:text-[#23B349] transition-colors duration-300">
                    Local Sourcing
                  </span>
                </div>
                <div className="flex items-center space-x-3 group cursor-pointer">
                  <div className="w-3 h-3 bg-[#23B349] rounded-full group-hover:scale-125 transition-transform duration-300" />
                  <span className="text-sm sm:text-base text-gray-600 group-hover:text-[#23B349] transition-colors duration-300">
                    Community Focus
                  </span>
                </div>
                <div className="flex items-center space-x-3 group cursor-pointer">
                  <div className="w-3 h-3 bg-[#23B349] rounded-full group-hover:scale-125 transition-transform duration-300" />
                  <span className="text-sm sm:text-base text-gray-600 group-hover:text-[#23B349] transition-colors duration-300">
                    Innovation Driven
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Elements - Enhanced with animations */}
          <div className={`relative space-y-8 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
               style={{ animationDelay: '0.8s' }}>
            {/* Made in Ethiopia Image - Enhanced */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#23B349] to-[#0F4B1F] rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <div className="relative overflow-hidden rounded-lg bg-gray-50 p-4 transition-all duration-300 group-hover:shadow-lg"
                   style={{ 
                     width: 'clamp(200px, 40vw, 312px)', 
                     height: 'clamp(140px, 30vw, 211px)',
                     marginTop: 'clamp(40px, 8vw, 1070px)'
                   }}>
                <Image
                  src={ABOUT_ASSETS.content.madeInEthiopia}
                  alt="Made in Ethiopia"
                  fill
                  className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                  onLoad={() => setImageLoaded(true)}
                  sizes="(max-width: 768px) 40vw, 312px"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`text-center transition-all duration-700 ${imageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="w-12 h-12 bg-[#23B349] rounded-full flex items-center justify-center mb-3 mx-auto">
                      <span className="text-white font-bold text-lg">ET</span>
                    </div>
                    <p className="text-[#23B349] font-semibold text-sm">Made in Ethiopia</p>
                    <p className="text-gray-500 text-xs mt-1">With Pride</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Story Image - Enhanced */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#23B349] to-[#0F4B1F] rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-sm" />
              <div className="relative rounded-2xl overflow-hidden bg-white shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:scale-[1.02]"
                   style={{ 
                     width: 'clamp(300px, 70vw, 824px)', 
                     height: 'clamp(200px, 45vw, 586px)',
                     marginTop: 'clamp(30px, 6vw, 590px)'
                   }}>
                <Image
                  src={ABOUT_ASSETS.content.storyImage}
                  alt="Vita Story"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ objectPosition: 'center' }}
                  sizes="(max-width: 768px) 70vw, 824px"
                />
                
                {/* Image overlay with content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-sm font-medium mb-2">Our Journey</p>
                    <p className="text-xs opacity-90">Building communities through quality food</p>
                  </div>
                </div>
              </div>
            </div>
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
          
          @keyframes scale-in {
            from {
              transform: scaleX(0);
            }
            to {
              transform: scaleX(1);
            }
          }
          
          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
          }
          
          .animate-scale-in {
            animation: scale-in 0.6s ease-out forwards;
          }
        `
      }} />
    </section>
  );
}
