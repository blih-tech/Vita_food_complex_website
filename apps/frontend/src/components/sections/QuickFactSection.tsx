"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function QuickFactSection() {
  const t = useTranslations("QuickFact");

  return (
    <section className="relative w-full bg-white py-24 overflow-hidden">
      {/* Decorative repeating pattern bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-16 pointer-events-none overflow-hidden opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/assets/hero/biscuit-piece.svg')",
            backgroundRepeat: "repeat-x",
            backgroundSize: "60px 60px",
            backgroundPosition: "bottom",
          }}
        />
      </div>

      <div className="relative z-20 max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-[128px]">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[160px] md:auto-rows-[180px]">
          
          {/* Box 1: +11 (Tall box, spans 2 rows) */}
          <div className="md:col-span-3 row-span-2 bg-[#F3F3F3] rounded-[24px] flex flex-col items-center justify-center p-8 relative overflow-hidden group hover:bg-[#E9F7ED] transition-colors duration-500">
             <div className="flex flex-col items-center text-center">
                <span className="font-['Outfit'] font-black text-[80px] lg:text-[110px] xl:text-[128px] text-[#23B349] leading-[0.9] tracking-[-0.03em] mb-4 group-hover:scale-105 transition-transform duration-500">
                  +11
                </span>
                <p className="font-['Funnel_Display'] font-medium text-[20px] lg:text-[24px] text-[#404040] leading-tight">
                  Unique SKUs for Everyone.
                </p>
             </div>
          </div>

          {/* Box 2: 60tn (Wide box) */}
          <div className="md:col-span-4 row-span-2 bg-[#F3F3F3] rounded-[24px] flex flex-col items-center justify-center p-8 group hover:bg-[#E9F7ED] transition-colors duration-500">
            <div className="flex flex-col items-center text-center">
                <span className="font-['Outfit'] font-black text-[80px] lg:text-[110px] xl:text-[128px] text-[#23B349] leading-[0.9] tracking-[-0.03em] mb-4 group-hover:scale-105 transition-transform duration-500">
                  60tn
                </span>
                <p className="font-['Funnel_Display'] font-medium text-[20px] lg:text-[24px] text-[#404040] leading-tight">
                  Tones of Flour Production/Day
                </p>
             </div>
          </div>

          {/* Box 3: +200 (Wide box) */}
          <div className="md:col-span-5 row-span-2 bg-[#F3F3F3] rounded-[24px] flex flex-col items-center justify-center p-8 group hover:bg-[#E9F7ED] transition-colors duration-500">
             <div className="flex flex-col items-center text-center">
                <span className="font-['Outfit'] font-black text-[80px] lg:text-[110px] xl:text-[128px] text-[#23B349] leading-[0.9] tracking-[-0.03em] mb-4 group-hover:scale-105 transition-transform duration-500">
                  +200
                </span>
                <p className="font-['Funnel_Display'] font-medium text-[20px] lg:text-[24px] text-[#404040] leading-tight">
                  Jobs Created
                </p>
             </div>
          </div>

          {/* Box 4: 2tn (Small box) */}
          <div className="md:col-span-3 row-span-1 bg-[#F3F3F3] rounded-[24px] flex flex-col items-center justify-center p-6 group hover:bg-[#FEF5D4] transition-colors duration-500">
             <div className="flex flex-col items-center text-center">
                <span className="font-['Outfit'] font-black text-[60px] lg:text-[80px] xl:text-[96px] text-[#E6B720] leading-[0.9] tracking-[-0.03em] group-hover:scale-105 transition-transform duration-500">
                  2tn
                </span>
                <p className="font-['Funnel_Display'] font-medium text-[16px] lg:text-[20px] text-[#404040] leading-tight mt-2">
                  Biscuits/Hour
                </p>
             </div>
          </div>

          {/* Box 5: Quick Fact (Green label) */}
          <div className="md:col-span-4 row-span-1 bg-[#23B349] rounded-[24px] flex items-center justify-center p-6 shadow-xl shadow-green-600/20 transform transition-transform hover:scale-[1.02]">
             <h2 className="font-['Outfit'] font-black text-[50px] lg:text-[64px] xl:text-[80px] text-white leading-[0.9] tracking-[-0.02em]">
               Quick Fact
             </h2>
          </div>

          {/* Spacer block for empty space on the right of Quick Fact if needed, or we just let Box 7 span correctly */}
          <div className="hidden md:block md:col-span-5 row-span-1"></div>

          {/* Box 6: 22Km2 (Wide box) */}
          <div className="md:col-span-5 row-span-2 bg-[#F3F3F3] rounded-[24px] flex flex-col items-center justify-center p-8 group hover:bg-[#E9F7ED] transition-colors duration-500">
             <div className="flex flex-col items-center text-center">
                <span className="font-['Outfit'] font-black text-[80px] lg:text-[110px] xl:text-[128px] text-[#23B349] leading-[0.9] tracking-[-0.03em] mb-4 group-hover:scale-105 transition-transform duration-500">
                  22Km²
                </span>
                <p className="font-['Funnel_Display'] font-medium text-[20px] lg:text-[24px] text-[#404040] leading-tight">
                  Factory Size in Square Kilometer
                </p>
             </div>
          </div>

          {/* Box 7: Investment (Large box) */}
          <div className="md:col-span-7 row-span-2 bg-[#F3F3F3] rounded-[24px] flex flex-col items-center justify-center p-8 relative overflow-hidden group border-2 border-transparent hover:border-[#E6B720]/30 transition-all duration-500">
             <div className="absolute inset-0 bg-[#FCFF98]/70 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             <div className="relative z-10 flex flex-col items-center text-center w-full">
                <div className="flex flex-col sm:flex-row items-center sm:items-end justify-center gap-4 sm:gap-8 mb-6">
                   <span className="font-['Outfit'] font-black text-[60px] lg:text-[80px] xl:text-[96px] text-[#E6B720] leading-[0.9] tracking-[-0.03em] group-hover:scale-105 transition-transform duration-500">
                     $1.4M
                   </span>
                   <span className="font-['Outfit'] font-black text-[80px] lg:text-[110px] xl:text-[128px] text-[#23B349] leading-[0.9] tracking-[-0.03em] group-hover:scale-105 transition-transform duration-500">
                     Br210M
                   </span>
                </div>
                <p className="font-['Funnel_Display'] font-medium text-[20px] lg:text-[24px] text-[#404040] leading-tight">
                  Total Investment
                </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

