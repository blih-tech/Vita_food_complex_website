"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function QuickFactSection() {
  const t = useTranslations("QuickFact");

  return (
    <section className="relative w-full bg-white py-12 md:py-20 lg:py-24 overflow-hidden">
      {/* Decorative repeating pattern top border - responsive height */}
      <div className="absolute top-0 left-0 w-full h-12 md:h-[60px] lg:h-[76px] pointer-events-none overflow-hidden z-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/quick-fact-frame.svg')",
            backgroundRepeat: "repeat-x",
            backgroundSize: "auto 100%",
            backgroundPosition: "top center",
          }}
        />
      </div>

      {/* Decorative repeating pattern bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-12 md:h-[60px] lg:h-[76px] pointer-events-none overflow-hidden z-10 scale-y-[-1]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/quick-fact-frame.svg')",
            backgroundRepeat: "repeat-x",
            backgroundSize: "auto 100%",
            backgroundPosition: "bottom center",
          }}
        />
      </div>

      <div className="relative z-20 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 relative">
          
          {/* Row 1 */}
          {/* Fact 1 - Unique SKUs */}
          <div className="md:col-span-3 bg-[#F3F3F3] rounded-[2rem] p-6 md:p-8 group hover:scale-[1.02] transition-all duration-500 shadow-sm flex flex-col justify-center items-center text-center">
            <div className="font-['Outfit'] font-extrabold text-6xl md:text-[90px] lg:text-[110px] text-[#23B349] leading-none tracking-tighter mb-2 md:mb-4 group-hover:scale-105 transition-transform">+11</div>
            <p className="font-['Funnel_Display'] font-medium text-base md:text-lg text-[#404040]">Unique SKUs for Everyone.</p>
          </div>

          {/* Fact 2 - Flour Production */}
          <div className="md:col-span-5 bg-[#F3F3F3] rounded-[2rem] p-6 md:p-8 group hover:scale-[1.02] transition-all duration-500 shadow-sm flex flex-col justify-center items-center text-center">
            <div className="font-['Outfit'] font-extrabold text-6xl md:text-[90px] lg:text-[110px] text-[#23B349] leading-none tracking-tighter mb-2 md:mb-4 group-hover:scale-105 transition-transform">60tn</div>
            <p className="font-['Funnel_Display'] font-medium text-base md:text-lg text-[#404040]">Tones of Flour Production/Day</p>
          </div>

          {/* Fact 3 - Jobs Created */}
          <div className="md:col-span-4 bg-[#F3F3F3] rounded-[2rem] p-6 md:p-8 group hover:scale-[1.02] transition-all duration-500 shadow-sm flex flex-col justify-center items-center text-center">
            <div className="font-['Outfit'] font-extrabold text-6xl md:text-[90px] lg:text-[110px] text-[#23B349] leading-none tracking-tighter mb-2 md:mb-4 group-hover:scale-105 transition-transform">+200</div>
            <p className="font-['Funnel_Display'] font-medium text-base md:text-lg text-[#404040]">Jobs Created</p>
          </div>

          {/* Row 2 */}
          {/* Fact 4 - Biscuits/Hour */}
          <div className="md:col-span-2 bg-[#F3F3F3] rounded-[2rem] p-6 md:p-8 group hover:scale-[1.02] transition-all duration-500 shadow-sm flex flex-col justify-center items-center text-center min-h-[160px]">
            <div className="font-['Outfit'] font-extrabold text-5xl md:text-[70px] lg:text-[80px] text-[#E6B720] leading-none tracking-tighter mb-2 md:mb-3 group-hover:scale-105 transition-transform">2tn</div>
            <p className="font-['Funnel_Display'] font-medium text-sm md:text-base text-[#404040]">Biscuits/Hour</p>
          </div>

          {/* Central "Quick Fact" Badge - Positioned in the empty grid space */}
          <div className="md:col-span-3 relative flex justify-center items-center z-30 py-6 md:py-0 pointer-events-none">
            <div className="bg-[#23B349] rounded-2xl md:rounded-[2rem] px-8 py-4 md:px-10 md:py-6 flex items-center justify-center ring-[8px] md:ring-[16px] ring-white md:absolute pointer-events-auto shadow-2xl hover:scale-105 transition-transform">
              <h2 className="font-['Outfit'] font-extrabold text-4xl md:text-5xl lg:text-[64px] text-white leading-none tracking-[-0.02em] whitespace-nowrap">
                Quick Fact
              </h2>
            </div>
          </div>

          {/* Fact 5 - Investment (Spans 2 rows to overlap visually) */}
          <div className="md:col-span-7 md:row-span-2 bg-[#F3F3F3] rounded-[2rem] p-8 md:p-10 lg:p-12 group hover:scale-[1.02] transition-all duration-500 shadow-sm relative flex flex-col justify-center items-center min-h-[250px] md:min-h-full">
            <div className="md:absolute md:top-8 md:left-10 lg:top-12 lg:left-12 font-['Outfit'] font-extrabold text-5xl md:text-[60px] lg:text-[80px] text-[#E6B720] tracking-tighter text-center md:text-left mb-6 md:mb-0 group-hover:scale-105 transition-transform origin-top-left">
              $1.4M
            </div>
            <div className="flex flex-col items-center justify-center w-full mt-0 md:mt-12 lg:mt-16">
              <div className="font-['Outfit'] font-extrabold text-6xl md:text-[100px] lg:text-[130px] text-[#23B349] leading-none tracking-tighter mb-2 group-hover:scale-105 transition-transform">
                Br210M
              </div>
              <p className="font-['Funnel_Display'] font-medium text-lg md:text-xl text-[#404040]">
                Total Investment
              </p>
            </div>
          </div>

          {/* Row 3 */}
          {/* Fact 6 - Factory Size */}
          <div className="md:col-span-5 bg-[#F3F3F3] rounded-[2rem] p-6 md:p-8 group hover:scale-[1.02] transition-all duration-500 shadow-sm flex flex-col justify-center items-center text-center">
            <div className="font-['Outfit'] font-extrabold text-6xl md:text-[90px] lg:text-[110px] text-[#23B349] leading-none tracking-tighter mb-2 md:mb-4 group-hover:scale-105 transition-transform">22Km²</div>
            <p className="font-['Funnel_Display'] font-medium text-base md:text-lg text-[#404040]">Factory Size in Square Killometer</p>
          </div>

        </div>
      </div>
    </section>
  );
}
