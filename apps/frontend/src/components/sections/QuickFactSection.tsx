"use client";
import { useTranslations } from "next-intl";

export default function QuickFactSection({ content, locale }: { content?: any; locale?: string }) {
  const t = useTranslations("QuickFact");
  const c = content?.[locale as string] || content?.en;
  const facts: any[] | undefined = c?.facts;
  const getFact = (id: string) => facts?.find((f: any) => f.id === id);
  const fVal = (id: string, def: string) => getFact(id)?.value ?? def;
  const fVal2 = (id: string, def: string) => getFact(id)?.value2 ?? def;
  const fLabel = (id: string, tKey: string) => getFact(id)?.label ?? t(tKey);
  const sectionLabel = c?.label || t("label");

  return (
    <section className="relative w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Decorative repeating pattern top border */}
      <div className="absolute top-0 left-0 w-full h-10 sm:h-12 md:h-[60px] lg:h-[76px] pointer-events-none overflow-hidden z-10">
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
      <div className="absolute bottom-0 left-0 w-full h-10 sm:h-12 md:h-[60px] lg:h-[76px] pointer-events-none overflow-hidden z-10 scale-y-[-1]">
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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5 md:gap-6 relative">
          {/* Row 1 */}
          {/* Fact 1 - Unique SKUs */}
          <div className="md:col-span-3 bg-[#F3F3F3] rounded-[2rem] p-6 sm:p-8 md:p-8 group hover:scale-[1.02] transition-all duration-500 shadow-sm flex flex-col justify-center items-center text-center">
            <div className="font-['Outfit'] font-extrabold text-5xl sm:text-6xl md:text-[90px] lg:text-[110px] text-[#23B349] leading-none tracking-tighter mb-3 md:mb-4 group-hover:scale-105 transition-transform">
              {fVal('skus', '+11')}
            </div>
            <p className="font-['Funnel_Display'] font-medium text-base sm:text-lg md:text-lg text-[#404040]">
              {fLabel('skus', 'skus')}
            </p>
          </div>

          {/* Fact 2 - Flour Production */}
          <div className="md:col-span-5 bg-[#F3F3F3] rounded-[2rem] p-6 sm:p-8 md:p-8 group hover:scale-[1.02] transition-all duration-500 shadow-sm flex flex-col justify-center items-center text-center">
            <div className="font-['Outfit'] font-extrabold text-5xl sm:text-6xl md:text-[90px] lg:text-[110px] text-[#23B349] leading-none tracking-tighter mb-3 md:mb-4 group-hover:scale-105 transition-transform">
              {fVal('flour', '60tn')}
            </div>
            <p className="font-['Funnel_Display'] font-medium text-base sm:text-lg md:text-lg text-[#404040]">
              {fLabel('flour', 'flour')}
            </p>
          </div>

          {/* Fact 3 - Jobs Created */}
          <div className="md:col-span-4 bg-[#F3F3F3] rounded-[2rem] p-6 sm:p-8 md:p-8 group hover:scale-[1.02] transition-all duration-500 shadow-sm flex flex-col justify-center items-center text-center">
            <div className="font-['Outfit'] font-extrabold text-5xl sm:text-6xl md:text-[90px] lg:text-[110px] text-[#23B349] leading-none tracking-tighter mb-3 md:mb-4 group-hover:scale-105 transition-transform">
              {fVal('jobs', '+200')}
            </div>
            <p className="font-['Funnel_Display'] font-medium text-base sm:text-lg md:text-lg text-[#404040]">
              {fLabel('jobs', 'jobs')}
            </p>
          </div>

          {/* Row 2 */}
          {/* Fact 4 - Biscuits/Hour */}
          <div className="md:col-span-2 bg-[#F3F3F3] rounded-[2rem] p-6 sm:p-8 md:p-8 group hover:scale-[1.02] transition-all duration-500 shadow-sm flex flex-col justify-center items-center text-center min-h-[148px] md:min-h-[160px]">
            <div className="font-['Outfit'] font-extrabold text-4xl sm:text-5xl md:text-[70px] lg:text-[80px] text-[#E6B720] leading-none tracking-tighter mb-3 group-hover:scale-105 transition-transform">
              {fVal('biscuits', '2tn')}
            </div>
            <p className="font-['Funnel_Display'] font-medium text-sm sm:text-base md:text-base text-[#404040]">
              {fLabel('biscuits', 'biscuits')}
            </p>
          </div>

          {/* Central "Quick Fact" Badge */}
          <div className="md:col-span-3 relative flex justify-center items-center z-30 py-6 md:py-0 pointer-events-none">
            <div className="bg-[#23B349] rounded-[2rem] px-8 py-4 md:px-10 md:py-6 flex items-center justify-center ring-[8px] md:ring-[16px] ring-white md:absolute pointer-events-auto shadow-2xl hover:scale-105 transition-transform">
              <h2 className="font-['Outfit'] font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-white leading-none tracking-[-0.02em] whitespace-nowrap">
                {sectionLabel}
              </h2>
            </div>
          </div>

          {/* Fact 5 - Investment (Large Card) */}
          <div className="md:col-span-7 md:row-span-2 bg-[#F3F3F3] rounded-[2rem] p-6 sm:p-8 md:p-10 lg:p-12 group hover:scale-[1.02] transition-all duration-500 shadow-sm relative flex flex-col justify-center items-center min-h-[260px] md:min-h-full">
            <div className="md:absolute md:top-8 md:left-10 lg:top-12 lg:left-12 font-['Outfit'] font-extrabold text-4xl sm:text-5xl md:text-[60px] lg:text-[80px] text-[#E6B720] tracking-tighter text-center md:text-left mb-6 md:mb-0 group-hover:scale-105 transition-transform origin-top-left">
              {fVal('investment', '$1.4M')}
            </div>

            <div className="flex flex-col items-center justify-center w-full mt-6 md:mt-12 lg:mt-16">
              <div className="font-['Outfit'] font-extrabold text-5xl sm:text-6xl md:text-[100px] lg:text-[130px] text-[#23B349] leading-none tracking-tighter mb-2 group-hover:scale-105 transition-transform">
                {fVal2('investment', 'Br210M')}
              </div>
              <p className="font-['Funnel_Display'] font-medium text-base sm:text-lg md:text-xl text-[#404040] text-center md:text-left">
                {fLabel('investment', 'investment')}
              </p>
            </div>
          </div>

          {/* Row 3 */}
          {/* Fact 6 - Factory Size */}
          <div className="md:col-span-5 bg-[#F3F3F3] rounded-[2rem] p-6 sm:p-8 md:p-8 group hover:scale-[1.02] transition-all duration-500 shadow-sm flex flex-col justify-center items-center text-center">
            <div className="font-['Outfit'] font-extrabold text-5xl sm:text-6xl md:text-[90px] lg:text-[110px] text-[#23B349] leading-none tracking-tighter mb-3 md:mb-4 group-hover:scale-105 transition-transform">
              {fVal('factorySize', '22Km²')}
            </div>
            <p className="font-['Funnel_Display'] font-medium text-base sm:text-lg md:text-lg text-[#404040]">
              {fLabel('factorySize', 'factorySize')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
