"use client";

import { useTranslations } from "next-intl";
import { Link } from "@frontend/navigation";
import Image from "next/image";

export default function HeroSection() {
  const t = useTranslations("Hero");

  return (
    <section
      id="hero"
      className="relative w-full bg-[#E9F7ED] overflow-hidden pt-[100px] sm:pt-[110px] lg:pt-[120px] min-h-screen flex flex-col items-center"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Left decorative glow */}
        <div className="absolute left-0 top-0 w-[50%] h-full opacity-60">
           <div className="absolute top-[-10%] left-[-10%] w-[80%] h-[80%] bg-[#23B349] blur-[150px] rounded-full mix-blend-screen opacity-20" />
        </div>
        
        {/* Right blurred background element */}
        <div className="absolute right-0 top-0 w-[40%] h-full opacity-40">
           <div className="absolute top-[10%] right-[-10%] w-[100%] h-[60%] bg-[#23B349] blur-[120px] rounded-full mix-blend-screen opacity-30" />
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 lg:pt-32 flex flex-col items-center">
        {/* Main Heading Group */}
        <div className="flex flex-col items-center text-center relative mb-8 sm:mb-12">
          {/* Decorative small images around text */}
          <div className="absolute -left-12 sm:-left-24 top-0 animate-float hidden md:block">
            <div className="relative w-16 h-16 sm:w-24 sm:h-24 rotate-12">
              <Image 
                src="/assets/hero/biscuit-piece.svg" 
                alt="" 
                fill 
                className="object-contain opacity-80"
              />
            </div>
          </div>
          
          <div className="absolute -right-12 sm:-right-24 bottom-0 animate-float-delayed hidden md:block">
            <div className="relative w-12 h-12 sm:w-20 sm:h-20 -rotate-12">
               <Image 
                src="/assets/hero/star-badge.svg" 
                alt="" 
                fill 
                className="object-contain opacity-80"
              />
            </div>
          </div>

          <h2 className="font-['Outfit'] font-extrabold text-[42px] sm:text-[64px] lg:text-[96px] text-[#404040] leading-[0.9] tracking-tight uppercase">
            A new stylish
          </h2>
          <h2 className="font-['Outfit'] font-extrabold text-[42px] sm:text-[64px] lg:text-[96px] text-[#404040] leading-[0.9] tracking-tight uppercase mb-2">
            way of
          </h2>
          <h1 className="font-['Outfit'] font-extrabold text-[84px] sm:text-[140px] lg:text-[192px] text-[#23B349] leading-[0.8] tracking-[-0.04em] uppercase">
            Connecting!
          </h1>
        </div>

        {/* Subtitle / Description */}
        <div className="max-w-[720px] text-center mb-10 sm:mb-14">
          <p className="font-['Funnel_Display'] font-medium text-[18px] sm:text-[20px] lg:text-[24px] text-[#404040]/80 leading-relaxed tracking-tight">
            From everyday baking to special treats, Vita brings<br className="hidden sm:block" />
            joy, taste, and quality to your table.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
          <Link
            href="/products"
            className="group bg-[#23B349] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full flex items-center gap-4 hover:bg-[#1f9d40] transition-all duration-300 shadow-xl shadow-green-500/20 active:scale-[0.98]"
          >
            <span className="font-['Funnel_Display'] font-bold text-[20px] sm:text-[24px]">Our Products</span>
            <div className="bg-white/20 rounded-full p-1 group-hover:translate-x-1 transition-transform">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </Link>
          
          <Link
            href="/about"
            className="group border-2 border-[#23B349]/30 text-black px-8 sm:px-10 py-4 sm:py-5 rounded-full flex items-center gap-4 hover:bg-[#23B349]/5 transition-all duration-300 active:scale-[0.98]"
          >
            <span className="font-['Funnel_Display'] font-bold text-[20px] sm:text-[24px]">Why Vita</span>
            <span className="text-[#23B349] font-bold text-[20px]">®</span>
          </Link>
        </div>
      </div>

      {/* Floating Product Elements - Large screen only */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Right side large package */}
        <div className="absolute right-[-5%] bottom-[5%] w-[400px] sm:w-[500px] lg:w-[680px] h-[400px] sm:h-[500px] lg:h-[612px] opacity-90 animate-float">
          <Image 
            src="/assets/hero/product-hero.png" 
            alt="Vita Products" 
            fill 
            className="object-contain"
          />
        </div>
        
        {/* Left side cookie decorations */}
        <div className="absolute left-[5%] bottom-[15%] w-[200px] h-[200px] lg:w-[350px] lg:h-[350px] opacity-80 animate-float-delayed">
          <Image 
            src="/assets/hero/cookie-decoration-1.png" 
            alt="" 
            fill 
            className="object-contain"
          />
        </div>

        {/* Circular Badge */}
        <div className="absolute right-[15%] top-[15%] w-[120px] sm:w-[180px] lg:w-[249px] h-[120px] sm:h-[180px] lg:h-[249px] animate-spin-slow">
           <Image 
            src="/assets/hero/texted-badge.svg" 
            alt="100% Quality Badge" 
            fill 
            className="object-contain"
          />
        </div>
      </div>
      
      {/* Bottom Wave/Vector decoration */}
      <div className="absolute bottom-0 left-0 w-full h-[15%] sm:h-[20%] z-20 pointer-events-none">
        <div className="relative w-full h-full">
           <Image 
            src="/assets/hero/hero-bg-element.svg" 
            alt="" 
            fill 
            className="object-cover object-top opacity-50"
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
