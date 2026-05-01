'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function CTASection() {
  const t = useTranslations();

  return (
    <section className="bg-white py-20 lg:py-32 relative overflow-hidden flex justify-center px-6 sm:px-12 lg:px-24">
      <div className="w-full max-w-[1664px] bg-[#90D152] rounded-[48px] relative overflow-hidden min-h-[595px] flex flex-col justify-center px-8 sm:px-16 lg:px-24 py-16">
        
        {/* Background Graphic/Logo Overlay (if needed) */}
        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 opacity-20 pointer-events-none w-[800px] h-[800px]">
          <Image
            src="/assets/hero/true-badge.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        <div className="relative z-10 flex flex-col gap-12 max-w-[800px]">
          
          {/* Text Content */}
          <div className="flex flex-col gap-6">
            <h2 className="text-white text-5xl md:text-6xl lg:text-[80px] font-black font-['Outfit'] leading-[0.9] tracking-[-0.02em]">
              Join Our Dealer Network
            </h2>
            <p className="text-white text-xl lg:text-[24px] font-['Outfit'] font-normal leading-[1.4] opacity-90">
              Grow with Vita. Become an authorized distributor and bring premium biscuits and flour to your region.
            </p>
          </div>

          {/* Action Button */}
          <div className="flex">
            <button className="bg-white text-[#23B349] px-10 py-5 rounded-full font-['Funnel_Display'] font-bold text-[20px] lg:text-[24px] leading-none transition-transform hover:scale-105 active:scale-95 shadow-xl">
              Become a Distributor
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
