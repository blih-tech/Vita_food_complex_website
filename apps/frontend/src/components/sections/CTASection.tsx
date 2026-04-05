"use client";

import Image from "next/image";

export default function CTASection() {
  return (
    <section className="bg-[#0F4B1F] relative min-h-[714px] flex items-center overflow-hidden">
      {/* Background Decorative Image (Low Opacity) */}
      <div className="absolute left-[20%] top-[-10%] w-[843px] h-[843px] opacity-[0.02] pointer-events-none -rotate-[13deg]">
        <Image
          src="/assets/cta/cta-bg.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* Main Decorative Image (Right Side) */}
      <div className="absolute right-0 top-0 h-full w-[45%] pointer-events-none hidden lg:block">
        <Image
          src="/assets/cta/cta-main.png"
          alt="Animated animals"
          fill
          className="object-contain object-right"
        />
      </div>

      <div className="max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-[6.7%] w-full relative z-10 py-20">
        <div className="flex flex-col gap-24 lg:max-w-[50%]">
          {/* Text Content */}
          <div className="flex flex-col gap-6">
            <h2 className="text-[#E9F7ED] text-5xl md:text-6xl lg:text-[72px] font-bold font-['Funnel_Display'] leading-[1.25]">
              Let’s Work Together
            </h2>
            <p className="text-[#E9F7ED] text-xl lg:text-[32px] font-['Outfit'] font-normal leading-[1.26] max-w-2xl opacity-90">
              Have a question, business inquiry, or partnership idea? Our team
              is ready to connect and support you
            </p>
          </div>

          {/* Action Button */}
          <div className="flex">
            <button className="bg-[#E9F7ED] text-[#0F4B1F] px-12 lg:px-16 py-5 rounded-lg font-['Funnel_Display'] font-bold text-2xl lg:text-[32px] leading-none transition-transform hover:scale-105 active:scale-95 shadow-xl">
              Connect With US
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
