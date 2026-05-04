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

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile-first responsive grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6 lg:gap-8 relative">
          {/* Fact 1 - Unique SKUs */}
          <div className="lg:col-span-3 bg-[#F3F3F3] rounded-3xl p-6 md:p-8 group hover:scale-[1.02] transition-all duration-500 shadow-sm flex flex-col justify-center min-h-[220px] md:min-h-[260px]">
            <div className="text-center lg:text-left">
              <div className="font-['Outfit'] font-extrabold text-6xl md:text-7xl lg:text-[128px] text-[#23B349] leading-none tracking-tighter mb-3 group-hover:scale-105 transition-transform">
                +11
              </div>
              <p className="font-['Funnel_Display'] font-medium text-lg md:text-xl text-[#404040] leading-tight">
                Unique SKUs for Everyone
              </p>
              <div className="mt-6 text-5xl md:text-6xl font-bold text-[#E6B720]">2tn</div>
              <p className="text-sm md:text-base text-[#404040]/70">Biscuits/Hour</p>
            </div>
          </div>

          {/* Fact 2 - Flour Production */}
          <div className="lg:col-span-4 bg-[#F3F3F3] rounded-3xl p-6 md:p-8 group hover:scale-[1.02] transition-all duration-500 shadow-sm flex flex-col justify-center min-h-[180px] md:min-h-[220px]">
            <div className="text-center">
              <div className="font-['Outfit'] font-extrabold text-6xl md:text-7xl text-[#23B349] leading-none tracking-tighter mb-4 group-hover:scale-105 transition-transform">
                60tn
              </div>
              <p className="font-['Funnel_Display'] font-medium text-base md:text-lg text-[#404040]">
                Tons of Flour Production/Day
              </p>
            </div>
          </div>

          {/* Fact 3 - Jobs Created */}
          <div className="lg:col-span-5 bg-[#F3F3F3] rounded-3xl p-6 md:p-8 group hover:scale-[1.02] transition-all duration-500 shadow-sm flex flex-col justify-center min-h-[180px] md:min-h-[220px]">
            <div className="text-center">
              <div className="font-['Outfit'] font-extrabold text-6xl md:text-7xl text-[#23B349] leading-none tracking-tighter mb-4 group-hover:scale-105 transition-transform">
                +200
              </div>
              <p className="font-['Funnel_Display'] font-medium text-base md:text-lg text-[#404040]">
                Jobs Created
              </p>
            </div>
          </div>

          {/* Central "Quick Fact" Badge - Responsive positioning */}
          <div className="lg:col-span-5 lg:col-start-4 bg-[#23B349] rounded-3xl p-8 md:p-10 flex items-center justify-center shadow-[0_0_0_12px_#ffffff,0_25px_50px_-12px_rgb(35,179,73)] z-30 hover:scale-105 transition-transform min-h-[110px] md:min-h-[130px]">
            <h2 className="font-['Outfit'] font-extrabold text-5xl md:text-6xl lg:text-[80px] text-white leading-none tracking-[-0.02em] text-center">
              Quick Fact
            </h2>
          </div>

          {/* Fact 4 - Factory Size */}
          <div className="lg:col-span-4 bg-[#F3F3F3] rounded-3xl p-6 md:p-8 group hover:scale-[1.02] transition-all duration-500 shadow-sm flex flex-col justify-center min-h-[200px]">
            <div className="text-center">
              <div className="font-['Outfit'] font-extrabold text-6xl md:text-7xl text-[#23B349] leading-none tracking-tighter mb-4 group-hover:scale-105 transition-transform">
                22Km²
              </div>
              <p className="font-['Funnel_Display'] font-medium text-base md:text-lg text-[#404040]">
                Factory Size
              </p>
            </div>
          </div>

          {/* Fact 5 - Investment */}
          <div className="lg:col-span-8 bg-[#F3F3F3] rounded-3xl p-6 md:p-10 group hover:scale-[1.02] transition-all duration-500 shadow-sm flex flex-col justify-center min-h-[200px] md:min-h-[240px]">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
              <div>
                <div className="font-['Outfit'] font-extrabold text-5xl md:text-6xl text-[#E6B720] tracking-tighter">$1.4M</div>
              </div>
              <div>
                <div className="font-['Outfit'] font-extrabold text-6xl md:text-7xl text-[#23B349] tracking-tighter">Br210M</div>
                <p className="font-['Funnel_Display'] font-medium text-base md:text-lg text-[#404040] mt-2">
                  Total Investment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
