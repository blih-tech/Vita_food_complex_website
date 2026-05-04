"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function QuickFactSection() {
  const t = useTranslations("QuickFact");

  return (
    <section className="relative w-full bg-white py-24 overflow-hidden">
      {/* Decorative repeating pattern top border */}
      <div className="absolute top-0 left-0 w-full h-[76px] pointer-events-none overflow-hidden z-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/quick-fact-frame.svg')",
            backgroundRepeat: "repeat-x",
            backgroundSize: "auto 76px",
            backgroundPosition: "top center",
          }}
        />
      </div>

      {/* Decorative repeating pattern bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-[76px] pointer-events-none overflow-hidden z-10 scale-y-[-1]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/quick-fact-frame.svg')",
            backgroundRepeat: "repeat-x",
            backgroundSize: "auto 76px",
            backgroundPosition: "bottom center",
          }}
        />
      </div>

      <div
        className="relative z-20 w-full max-w-[1920px] mx-auto overflow-x-auto overflow-y-hidden"
        style={{ minWidth: "1280px" }}
      >
        <div className="relative w-full aspect-[1920/1132] mx-auto">
          {/* Box 1 */}
          <div
            className="absolute bg-[#F3F3F3] rounded-[24px] group shadow-sm transition-transform duration-500 hover:scale-[1.01]"
            style={{ left: "6.66%", top: "11.13%", width: "24.16%", height: "45.58%" }}
          >
            <span className="absolute w-full text-center font-['Outfit'] font-extrabold text-[128px] text-[#23B349] leading-[88%] tracking-[-0.03em] group-hover:scale-105 transition-transform duration-500" style={{ top: "17.03%" }}>
              +11
            </span>
            <p className="absolute w-full text-center font-['Funnel_Display'] font-medium text-[24px] text-[#404040] leading-[100%] tracking-[-0.004em]" style={{ top: "44.94%" }}>
              Unique SKUs for Everyone.
            </p>
            <span className="absolute font-['Outfit'] font-extrabold text-[96px] text-[#E6B720] leading-[88%] tracking-[-0.03em] group-hover:scale-105 transition-transform duration-500" style={{ left: "17.28%", top: "67.03%" }}>
              2tn
            </span>
            <p className="absolute font-['Funnel_Display'] font-medium text-[24px] text-[#404040] leading-[100%] tracking-[-0.004em]" style={{ left: "17.49%", top: "87.57%" }}>
              Biscuits/Hour
            </p>
          </div>

          {/* Box 2 */}
          <div
            className="absolute bg-[#F3F3F3] rounded-[24px] group shadow-sm transition-transform duration-500 hover:scale-[1.01]"
            style={{ left: "32.08%", top: "11.10%", width: "30%", height: "29.85%" }}
          >
            <span className="absolute w-full text-center font-['Outfit'] font-extrabold text-[128px] text-[#23B349] leading-[88%] tracking-[-0.03em] group-hover:scale-105 transition-transform duration-500" style={{ top: "26.58%" }}>
              60tn
            </span>
            <p className="absolute w-full text-center font-['Funnel_Display'] font-medium text-[24px] text-[#404040] leading-[100%] tracking-[-0.004em]" style={{ top: "69.18%" }}>
              Tones of Flour Production/Day
            </p>
          </div>

          {/* Box 3 */}
          <div
            className="absolute bg-[#F3F3F3] rounded-[24px] group shadow-sm transition-transform duration-500 hover:scale-[1.01]"
            style={{ left: "63.33%", top: "11.10%", width: "30%", height: "29.85%" }}
          >
            <span className="absolute w-full text-center font-['Outfit'] font-extrabold text-[128px] text-[#23B349] leading-[88%] tracking-[-0.03em] group-hover:scale-105 transition-transform duration-500" style={{ top: "26.62%" }}>
              +200
            </span>
            <p className="absolute w-full text-center font-['Funnel_Display'] font-medium text-[24px] text-[#404040] leading-[100%] tracking-[-0.004em]" style={{ top: "69.23%" }}>
              Jobs Created
            </p>
          </div>

          {/* Box 4: Quick Fact */}
          <div
            className="absolute bg-[#23B349] rounded-[24px] flex items-center justify-center shadow-[0_0_0_18px_#ffffff] z-30 transform transition-transform hover:scale-[1.02]"
            style={{ left: "25.20%", top: "43.08%", width: "23.85%", height: "13.60%" }}
          >
            <h2 className="font-['Outfit'] font-extrabold text-[80px] text-white leading-[90%] tracking-[-0.02em]">
              Quick Fact
            </h2>
          </div>

          {/* Box 5 */}
          <div
            className="absolute bg-[#F3F3F3] rounded-[24px] group shadow-sm transition-transform duration-500 hover:scale-[1.01]"
            style={{ left: "6.66%", top: "58.63%", width: "38.17%", height: "30.30%" }}
          >
            <span className="absolute w-full text-center font-['Outfit'] font-extrabold text-[128px] text-[#23B349] leading-[88%] tracking-[-0.03em] group-hover:scale-105 transition-transform duration-500" style={{ top: "24.78%" }}>
              22Km²
            </span>
            <p className="absolute w-full text-center font-['Funnel_Display'] font-medium text-[24px] text-[#404040] leading-[100%] tracking-[-0.004em]" style={{ top: "66.76%" }}>
              Factory Size in Square Killometer
            </p>
          </div>

          {/* Box 6 */}
          <div
            className="absolute bg-[#F3F3F3] rounded-[24px] group shadow-sm transition-transform duration-500 hover:scale-[1.01]"
            style={{ left: "46.09%", top: "42.84%", width: "47.23%", height: "46.11%" }}
          >
            <span className="absolute font-['Outfit'] font-extrabold text-[96px] text-[#E6B720] leading-[88%] tracking-[-0.03em] group-hover:scale-105 transition-transform duration-500" style={{ left: "24.42%", top: "10.19%" }}>
              $1.4M
            </span>
            <span className="absolute w-full text-center font-['Outfit'] font-extrabold text-[128px] text-[#23B349] leading-[88%] tracking-[-0.03em] group-hover:scale-105 transition-transform duration-500" style={{ top: "50.62%" }}>
              Br210M
            </span>
            <p className="absolute w-full text-center font-['Funnel_Display'] font-medium text-[24px] text-[#404040] leading-[100%] tracking-[-0.004em]" style={{ top: "78.20%" }}>
              Total Investment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
