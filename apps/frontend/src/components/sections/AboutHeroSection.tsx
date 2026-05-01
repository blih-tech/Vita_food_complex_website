"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState, useEffect } from "react";
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
    <section className="relative w-full min-h-screen overflow-hidden bg-[#E9F7ED]">
      {/* Hero Background with Figma Assets - Pixel Perfect */}
      <div className="absolute inset-0 z-0">
        {/* Background Frame - Exact Figma positioning with parallax */}
        <div className="absolute left-0 top-0 w-full h-full">
          <div 
            className="absolute blur-[10px] h-[120%] w-[120%] left-1/2 top-[-10%] transition-transform duration-1000 ease-out"
            style={{ 
              transform: `translateX(-50%) translateY(${scrollY * 0.2}px)`,
              opacity: isLoaded ? 0.6 : 0
            }}
          >
            <div className="relative w-full h-full">
              <Image
                src={ABOUT_ASSETS.hero.backgroundFrame}
                alt=""
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
        
        {/* Ellipse Element - Bottom decorative curve */}
        <div 
          className="absolute bottom-0 left-0 w-full h-64 z-10 transition-all duration-1000 ease-out"
          style={{ 
            opacity: isLoaded ? 1 : 0
          }}
        >
          <Image
            src={ABOUT_ASSETS.hero.ellipse}
            alt=""
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </div>

      {/* Hero Content - Exact Figma positioning and typography with animations */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div 
          className="text-center transition-all duration-1000 ease-out"
          style={{ 
            maxWidth: '1000px',
            opacity: isLoaded ? 1 : 0,
            transform: `translateY(${isLoaded ? '0' : '50px'})`
          }}
        >
          {/* Main Headline - Outfit 900 for maximum impact */}
          <h1 className="font-['Outfit'] font-black text-[#0F4B1F] leading-[0.9] tracking-[-0.04em] mb-10 transition-all duration-700 ease-out"
              style={{ 
                fontSize: 'clamp(60px, 12vw, 180px)',
                textShadow: '0 4px 30px rgba(15, 75, 31, 0.1)'
              }}
          >
            <span className="block animate-fade-in-up">
              {t("hero.headline")}
            </span>
          </h1>
          
          {/* Subtitle - Funnel Display 500 */}
          <p className="font-['Funnel_Display'] font-medium text-[#333733] leading-relaxed tracking-tight max-w-3xl mx-auto opacity-80"
              style={{ 
                fontSize: 'clamp(20px, 3vw, 32px)',
                animationDelay: '0.3s'
              }}
          >
            <span className="block animate-fade-in-up">
              {t("hero.subtitle")}
            </span>
          </p>

          {/* Floating decorative elements */}
          <div className="absolute -top-20 -left-20 w-40 h-40 opacity-20 animate-pulse pointer-events-none">
             <Image src="/assets/about/spark.svg" alt="" fill className="object-contain rotate-12" />
          </div>
          <div className="absolute -bottom-20 -right-20 w-60 h-60 opacity-10 animate-bounce pointer-events-none" style={{ animationDuration: '6s' }}>
             <Image src="/assets/about/spark.svg" alt="" fill className="object-contain -rotate-45" />
          </div>
        </div>
      </div>

      {/* Custom styles for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
      `}</style>
    </section>
  );
}
