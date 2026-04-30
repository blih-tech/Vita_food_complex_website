"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import DonationModal from "./DonationModal";

export default function MakeImpact() {
  const [modalType, setModalType] = useState<"money" | "inkind" | null>(null);

  return (
    <section
      className="w-full bg-[#052e16] py-24 lg:py-32 relative overflow-hidden"
      id="take-action"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[50%] bg-[#23B349]/20 blur-[150px] rounded-[100%] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px] relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <h4 className="text-white/80 font-['Outfit'] text-[16px] sm:text-[18px] mb-4">
            Take Action
          </h4>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] leading-[1.1] font-['Outfit'] font-extrabold tracking-tight text-white mb-12">
            Make an Impact Today
          </h2>
        </div>

        {/* Image Gallery Row */}
        <div className="flex flex-nowrap overflow-x-auto lg:overflow-hidden gap-2 sm:gap-2 pb-8 lg:pb-0 mb-16 no-scrollbar snap-x snap-mandatory lg:justify-center">
          {[
            "/assets/donation/image.png",
            "/assets/donation/image-1.png",
            "/assets/donation/image-2.png",
            "/assets/donation/image-3.png",
            "/assets/donation/image-4.png",
          ].map((src) => (
            <div
              key={src}
              className="relative shrink-0 w-[280px] sm:w-[320px] md:w-[400px] lg:w-[24%] aspect-4/5 sm:aspect-square md:aspect-4/5 rounded-[24px] overflow-hidden snap-center"
            >
              <Image
                src={src} // Add real images here
                alt="Impact Image"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-['Funnel_Display'] font-light mb-10 leading-relaxed">
            Every contribution matters. Support communities through donations
            and help us reach more families, farmers, and those in need.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
            <button
              onClick={() => setModalType("money")}
              className="flex items-center justify-center gap-2 bg-[#23B349] text-white px-8 py-4 rounded-[999px] font-['Funnel_Display'] text-[18px] sm:text-[20px] font-medium transition-all hover:bg-[#1f9d40] hover:scale-105"
            >
              Donate Money <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => setModalType("inkind")}
              className="flex items-center justify-center gap-2 bg-white text-[#23B349] px-8 py-4 rounded-[999px] font-['Funnel_Display'] text-[18px] sm:text-[20px] font-medium transition-all hover:bg-[#FFFBF6] hover:scale-105"
            >
              Donate In Kind <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <DonationModal
        isOpen={modalType !== null}
        onClose={() => setModalType(null)}
        type={modalType || "money"}
      />
    </section>
  );
}
