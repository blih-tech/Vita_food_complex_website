"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState, useEffect } from "react";
import Navbar from "@frontend/components/layout/Navbar";
import { ABOUT_ASSETS } from "@frontend/constants/aboutAssets";

export default function AboutHeroSection() {
  const t = useTranslations("About");
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Hero Background with Figma Assets - Pixel Perfect */}
      <div className="absolute inset-0">
        {/* Background Frame - Exact Figma positioning with parallax */}
        <div className="absolute left-0 top-0 w-full h-full">
          <div 
            className="absolute blur-[14.9px] h-[1052px] w-[2018px] left-1/2 top-[-29px] transition-transform duration-1000 ease-out"
            style={{ 
              transform: `translateX(-50%) translateY(${scrollY * 0.5}px)`,
              opacity: isLoaded ? 1 : 0
            }}
          >
            <div className="relative w-full h-full">
              <Image
                src={ABOUT_ASSETS.hero.backgroundFrame}
                alt=""
                fill
                className="object-cover"
                style={{ objectPosition: '99.32% 154.74%' }}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-[rgba(55,255,0,0.4)] mix-blend-soft-light" />
            </div>
          </div>
        </div>
        
        {/* Ellipse Element - Exact Figma positioning with animation */}
        <div 
          className="absolute -translate-x-1/2 h-[341px] w-[2260px] left-1/2 top-[913px] transition-all duration-1000 ease-out"
          style={{ 
            transform: `translateX(-50%) translateY(${scrollY * 0.3}px)`,
            opacity: isLoaded ? 1 : 0
          }}
        >
          <Image
            src={ABOUT_ASSETS.hero.ellipse}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
      </div>

      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none" />

      {/* Navbar */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Hero Content - Exact Figma positioning and typography with animations */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div 
          className="text-center max-w-4xl transition-all duration-1000 ease-out"
          style={{ 
            width: 'clamp(300px, 90vw, 824px)',
            marginTop: 'clamp(100px, 20vh, 252px)',
            opacity: isLoaded ? 1 : 0,
            transform: `translateY(${isLoaded ? '0' : '30px'})`
          }}
        >
          {/* Main Headline - Exact Figma typography with responsive sizing */}
          <h1 className="font-['Outfit'] font-extrabold text-white leading-[0.9] tracking-[-1.6px] mb-8 transition-all duration-700 ease-out"
              style={{ 
                fontSize: 'clamp(40px, 5vw, 80px)',
                textShadow: '0 2px 20px rgba(0,0,0,0.3)'
              }}
          >
            <span className="block animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              {t("hero.headline")}
            </span>
          </h1>
          
          {/* Subtitle - Exact Figma typography with responsive sizing */}
          <p className="font-['Funnel_Display'] font-medium text-white leading-normal tracking-[-0.096px] transition-all duration-700 ease-out max-w-3xl mx-auto"
              style={{ 
                fontSize: 'clamp(16px, 2.5vw, 24px)',
                textShadow: '0 1px 10px rgba(0,0,0,0.3)',
                animationDelay: '0.3s'
              }}
          >
            <span className="block animate-fade-in-up">
              {t("hero.subtitle")}
            </span>
          </p>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Custom styles for animations */}
      <style jsx>{`
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
      `}</style>
    </section>
  );
}
