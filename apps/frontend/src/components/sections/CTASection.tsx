"use client";

import Image from "next/image";

export default function CTASection() {
  return (
    <section className="bg-[#0F4B1F] relative h-[714px] overflow-hidden">
      {/* Background Decorative Images - Figma positioning */}
      <div className="absolute left-[456px] top-0 w-[843px] h-[843px] opacity-[0.02] pointer-events-none">
        <Image
          src="/assets/cta/cta-bg.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="absolute right-[100px] top-0 h-full w-[786px] pointer-events-none hidden lg:block">
        <Image
          src="/assets/cta/cta-main.png"
          alt="Animated animals"
          fill
          className="object-contain object-right"
        />
      </div>

      {/* Content - Figma: x=128, y=129, gap=96px */}
      <div className="absolute left-[128px] top-[129px] max-w-[722px] flex flex-col gap-12 lg:gap-24 z-10">
        {/* Text Content */}
        <div className="flex flex-col gap-6">
          <h2 className="text-[#E9F7ED] text-4xl md:text-5xl lg:text-[72px] font-bold font-['Funnel_Display'] leading-[1.25]">
            Let&apos;s Work Together
          </h2>
          <p className="text-[#E9F7ED] text-lg lg:text-[32px] font-['Outfit'] font-normal leading-[1.26] max-w-xl opacity-90">
            Have a question, business inquiry, or partnership idea? Our team is
            ready to connect and support you
          </p>
        </div>

        {/* Action Button - Figma: 500x86 */}
        <button className="bg-[#E9F7ED] text-[#0F4B1F] px-12 lg:px-16 py-4 lg:py-5 rounded-lg font-['Funnel_Display'] font-bold text-xl lg:text-[32px] leading-none transition-transform hover:scale-105 active:scale-95 shadow-xl w-fit">
          Connect With US
        </button>
      </div>
    </section>
  );
}
