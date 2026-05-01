"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

const TESTIMONIALS = [
  {
    id: 1,
    quote: "Vita Hydro products have been a staple in our family for years. The quality is unmatched.",
    author: "Happy Customer",
    image: "/assets/about/testimonial-1.png",
  },
  {
    id: 2,
    quote: "I trust Vita Hydro for all my baking needs. Their flour is simply the best.",
    author: "Local Baker",
    image: "/assets/about/testimonial-2.png",
  },
];

export default function TestimonialSection() {
  const t = useTranslations("About.testimonials");
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="bg-[#F8FDFB] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1664px] mx-auto px-6 lg:px-[128px]">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-6 mb-20 lg:mb-24">
          <h2 className="font-['Funnel_Display'] font-bold text-[#0F4B1F] text-5xl lg:text-[80px] leading-[1] tracking-[-1.28px]">
            {t("title")}
          </h2>
          <div className="flex text-yellow-400 text-3xl">★★★★★</div>
        </div>

        {/* Testimonials Display */}
        <div className="relative max-w-5xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="relative w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden border-4 border-[#23B349] mb-8 shadow-xl">
              <Image
                src={TESTIMONIALS[activeIndex].image}
                alt={TESTIMONIALS[activeIndex].author}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="bg-white rounded-[40px] p-10 lg:p-16 shadow-2xl relative">
              <div className="absolute -top-6 left-10 text-6xl text-[#23B349] font-serif leading-none">“</div>
              <p className="font-['Outfit'] text-[#333733] text-2xl lg:text-4xl font-medium leading-relaxed text-center mb-10 italic">
                {TESTIMONIALS[activeIndex].quote}
              </p>
              <div className="text-center">
                <span className="font-['Funnel_Display'] font-bold text-[#0F4B1F] text-2xl lg:text-3xl">
                  {TESTIMONIALS[activeIndex].author}
                </span>
                <p className="text-[#23B349] font-bold mt-2 uppercase tracking-widest text-sm">Verified Customer</p>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center gap-6 mt-12">
            <button 
              onClick={prev}
              className="flex items-center justify-center w-16 h-16 rounded-full bg-white text-[#0F4B1F] border border-gray-100 cursor-pointer hover:bg-[#23B349] hover:text-white transition-all duration-300 shadow-lg group"
            >
              <span className="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
            </button>
            <button 
              onClick={next}
              className="flex items-center justify-center w-16 h-16 rounded-full bg-[#0F4B1F] text-white cursor-pointer hover:bg-[#23B349] transition-all duration-300 shadow-lg group"
            >
              <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
