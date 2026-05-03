"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Partnering with Vita Food Complex Distributor made our corporate gala effortless and smooth. Their meticulous planning and perfect execution went beyond what we hoped for. Highly recommended!",
    author: "Mulugeta Bekele",
    role: "CEO, EthioTech Solutions",
    image: "/assets/about/owner-2.png",
  },
  {
    id: 2,
    quote:
      "The Standard Event made our corporate gala seamless and stress-free. Their attention to detail and flawless execution exceeded our expectations. I can't recommend them enough!",
    author: "Selamawit Tadesse", 
    role: "Director, Addis Business Group",
    image: "/assets/about/owner-3.png",
  },
];

export default function TestimonialSection() {
  const t = useTranslations("About.testimonials");
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="bg-[#23B349] py-20 md:py-32 px-4 flex flex-col items-center overflow-hidden">
      <div className="mx-auto max-w-[1200px] w-full flex flex-col items-center">
        
        {/* Subtitle Pill */}
        <div className="bg-white/10 px-6 py-2 rounded-full mb-8 border border-white/20">
          <span className="font-[family-name:var(--font-funnel-display)] font-semibold text-white/80 text-[14px] md:text-[16px] uppercase tracking-wider">
            {t("label")}
          </span>
        </div>

        {/* Title */}
        <h2 className="font-[family-name:var(--font-funnel-display)] font-normal text-[60px] md:text-[100px] lg:text-[160px] text-white leading-none tracking-tighter mb-20">
          Our <span className="font-bold">client</span>
        </h2>

        {/* Testimonial Card */}
        <div className="relative w-full flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          {/* Person Image */}
          <div className="relative w-[280px] h-[320px] md:w-[350px] md:h-[400px] rounded-[48px] overflow-hidden border-[8px] border-white/10 shadow-2xl flex-shrink-0">
            <Image
              src={current.image}
              alt={current.author}
              fill
              className="object-cover"
            />
          </div>

          {/* Quote Area */}
          <div className="flex-1 flex flex-col text-left">
             <div className="mb-10">
               {/* Large Quote Icon */}
               <span className="text-[120px] text-white/20 leading-none font-serif absolute -top-10 -left-6 hidden lg:block">“</span>
               <p className="font-[family-name:var(--font-funnel-display)] font-medium text-[24px] md:text-[32px] lg:text-[38px] text-white leading-tight mb-8">
                 {current.quote}
               </p>
             </div>

             <div className="flex flex-col">
                <h4 className="font-[family-name:var(--font-outfit)] font-bold text-[20px] md:text-[24px] text-white">
                  {current.author}
                </h4>
                <p className="font-[family-name:var(--font-funnel-display)] text-[16px] md:text-[18px] text-white/70">
                  {current.role}
                </p>
             </div>

             {/* Navigation Arrows */}
             <div className="flex items-center gap-4 mt-12">
                <button onClick={prev} className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-[#23B349] transition-all">
                  ←
                </button>
                <button onClick={next} className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-[#23B349] transition-all">
                  →
                </button>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
