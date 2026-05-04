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

      <div className="relative z-20 w-full max-w-[1920px] mx-auto overflow-x-auto overflow-y-hidden" style={{ minWidth: "1280px" }}>
        <div className="relative w-full aspect-[1920/1132] mx-auto">
          {/* Box 1: +11 (Tall box) */}
          <div className="absolute bg-[#F3F3F3] rounded-[24px] flex flex-col items-center justify-center p-8 group hover:bg-[#E9F7ED] transition-colors duration-500 shadow-md"
               style={{ left: '6.66%', top: '11.13%', width: '24.16%', height: '45.58%' }}>
             <div className="flex flex-col items-center text-center mt-[-10%]">
                <span className="font-['Outfit'] font-black text-[128px] text-[#23B349] leading-[88%] tracking-[-0.03em] mb-4 group-hover:scale-105 transition-transform duration-500">
                  +11
                </span>
                <p className="font-['Funnel_Display'] font-medium text-[24px] text-[#404040] leading-[100%] max-w-[80%]">
                  Unique SKUs for Everyone.
                </p>
             </div>
             <div className="flex flex-col items-center text-center absolute bottom-[15%]">
                <span className="font-['Outfit'] font-black text-[96px] text-[#E6B720] leading-[88%] tracking-[-0.03em] group-hover:scale-105 transition-transform duration-500 mb-2">
                  2tn
                </span>
                <p className="font-['Funnel_Display'] font-medium text-[24px] text-[#404040] leading-[100%]">
                  Biscuits/Hour
                </p>
             </div>
          </div>

          {/* Box 2: 60tn (Wide box) */}
          <div className="absolute bg-[#F3F3F3] rounded-[24px] flex flex-col items-center justify-center p-8 group hover:bg-[#E9F7ED] transition-colors duration-500 shadow-md"
               style={{ left: '32.08%', top: '11.10%', width: '30%', height: '29.85%' }}>
            <div className="flex flex-col items-center text-center">
                <span className="font-['Outfit'] font-black text-[128px] text-[#23B349] leading-[88%] tracking-[-0.03em] mb-4 group-hover:scale-105 transition-transform duration-500">
                  60tn
                </span>
                <p className="font-['Funnel_Display'] font-medium text-[24px] text-[#404040] leading-[100%]">
                  Tones of Flour Production/Day
                </p>
             </div>
          </div>

          {/* Box 3: +200 (Wide box) */}
          <div className="absolute bg-[#F3F3F3] rounded-[24px] flex flex-col items-center justify-center p-8 group hover:bg-[#E9F7ED] transition-colors duration-500 shadow-md"
               style={{ left: '63.33%', top: '11.10%', width: '30%', height: '29.85%' }}>
             <div className="flex flex-col items-center text-center">
                <span className="font-['Outfit'] font-black text-[128px] text-[#23B349] leading-[88%] tracking-[-0.03em] mb-4 group-hover:scale-105 transition-transform duration-500">
                  +200
                </span>
                <p className="font-['Funnel_Display'] font-medium text-[24px] text-[#404040] leading-[100%]">
                  Jobs Created
                </p>
             </div>
          </div>

          {/* Box 4: Quick Fact (Green label) - Overlaps Box 1 and Box 2 */}
          <div className="absolute bg-[#23B349] rounded-[24px] flex items-center justify-center shadow-xl shadow-green-600/20 transform transition-transform hover:scale-[1.02] z-30"
               style={{ left: '25.20%', top: '43.08%', width: '23.85%', height: '13.60%' }}>
             <h2 className="font-['Outfit'] font-black text-[80px] text-white leading-[90%] tracking-[-0.02em]">
               Quick Fact
             </h2>
          </div>

          {/* Box 5: 22Km2 (Wide box) */}
          <div className="absolute bg-[#F3F3F3] rounded-[24px] flex flex-col items-center justify-center p-8 group hover:bg-[#E9F7ED] transition-colors duration-500 shadow-md"
               style={{ left: '6.66%', top: '58.63%', width: '38.17%', height: '30.30%' }}>
             <div className="flex flex-col items-center text-center">
                <span className="font-['Outfit'] font-black text-[128px] text-[#23B349] leading-[88%] tracking-[-0.03em] mb-4 group-hover:scale-105 transition-transform duration-500">
                  22Km²
                </span>
                <p className="font-['Funnel_Display'] font-medium text-[24px] text-[#404040] leading-[100%]">
                  Factory Size in Square Kilometer
                </p>
             </div>
          </div>

          {/* Box 6: Investment (Large box) - Overlaps Box 2 and Box 3 vertically */}
          <div className="absolute bg-[#F3F3F3] rounded-[24px] flex flex-col items-center justify-center p-8 relative overflow-hidden group border-[3px] border-transparent hover:border-white transition-all duration-500 shadow-lg z-20"
               style={{ left: '46.09%', top: '42.84%', width: '47.23%', height: '46.12%' }}>
             <div className="absolute inset-0 bg-[#FCFF98]/70 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
             
             {/* Decorative top-left cut out / internal gray box matching figma */}
             <div className="absolute bg-[#D9D9D9] rounded-br-[38px] rounded-bl-[24px] rounded-tr-[24px] z-0"
                  style={{ left: '-40%', top: '-7%', width: '50%', height: '40%' }}></div>
             
             <div className="relative z-20 flex flex-col items-center text-center w-full h-full justify-end pb-[5%]">
                <div className="flex flex-col items-center justify-center gap-2 mb-[15%]">
                   <span className="font-['Outfit'] font-black text-[96px] text-[#E6B720] leading-[88%] tracking-[-0.03em] group-hover:scale-105 transition-transform duration-500 absolute left-[30%] bottom-[60%]">
                     $1.4M
                   </span>
                   <span className="font-['Outfit'] font-black text-[128px] text-[#23B349] leading-[88%] tracking-[-0.03em] group-hover:scale-105 transition-transform duration-500">
                     Br210M
                   </span>
                </div>
                <p className="font-['Funnel_Display'] font-medium text-[24px] text-[#404040] leading-[100%]">
                  Total Investment
                </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

