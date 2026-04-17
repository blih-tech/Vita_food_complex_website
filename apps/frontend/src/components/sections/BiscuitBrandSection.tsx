"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@frontend/navigation";

const BRAND_IMAGES = [
  "/assets/products/bridge-product-1.png",
  "/assets/products/bridge-product-2.png",
  "/assets/products/bridge-product-3.png",
  "/assets/products/product-display.png",
  "/assets/products/product-1.png",
];

export default function BiscuitBrandSection() {
  const t = useTranslations("BiscuitBrand");

  return (
    <section id="biscuit-brand" className="relative w-full bg-[#E9F7ED] py-24 lg:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-[-10%] top-[-5%] w-[40%] h-[60%] opacity-20 pointer-events-none">
        <Image 
          src="/assets/sections/products-circle-bg.svg" 
          alt="" 
          fill 
          className="object-contain"
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24 flex flex-col items-center">
        {/* Text content */}
        <div className="flex flex-col items-center gap-6 text-center mb-16 lg:mb-24">
          <p className="font-['Funnel_Display'] font-semibold text-[18px] sm:text-[20px] text-[#404040]/60 tracking-widest uppercase">
            Brand Biscuit Products
          </p>
          
          <h2 className="font-['Outfit'] font-black text-[48px] sm:text-[64px] lg:text-[80px] text-[#23B349] leading-[1.1] tracking-tight max-w-4xl uppercase">
            A Mouthful of <br className="hidden sm:block" />
            True Biscuit Taste!
          </h2>
        </div>

        {/* Product images row - Floating effect */}
        <div className="w-full flex flex-wrap justify-center gap-8 lg:gap-12 mb-20 lg:mb-28">
          {BRAND_IMAGES.slice(0, 3).map((src, idx) => (
            <div 
              key={idx}
              className={`relative w-[280px] sm:w-[350px] lg:w-[420px] h-[300px] sm:h-[350px] lg:h-[400px] transition-transform duration-500 hover:scale-105 ${
                idx % 2 === 0 ? "translate-y-4" : "-translate-y-4"
              }`}
            >
              <Image
                src={src}
                alt="Vita Product"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
          ))}
        </div>

        {/* Bottom Text and CTA */}
        <div className="flex flex-col items-center gap-10">
          <p className="font-['Funnel_Display'] font-medium text-[20px] lg:text-[24px] text-[#404040]/80 text-center max-w-2xl leading-relaxed">
            From everyday baking to special treats, Vita brings<br className="hidden sm:block" />
            joy, taste, and quality to your table.
          </p>
          
          <Link
            href="/products"
            className="group bg-[#23B349] text-white px-10 py-5 rounded-full flex items-center gap-4 hover:bg-[#1f9d40] transition-all duration-300 shadow-xl shadow-green-500/10 active:scale-[0.98]"
          >
            <span className="font-['Funnel_Display'] font-bold text-[24px]">View Products</span>
            <div className="bg-white/20 rounded-full p-1 group-hover:translate-x-1 transition-transform">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
      
      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none opacity-30">
        <Image 
          src="/assets/sections/bottom-wave.svg" 
          alt="" 
          fill 
          className="object-cover object-top"
        />
      </div>
    </section>
  );
}
