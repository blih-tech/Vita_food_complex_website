"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@frontend/navigation";

export default function ProductsSection() {
  const t = useTranslations("Products");

  return (
    <section id="products" className="relative w-full flex flex-col">
      {/* Product One - Chewata (Green Theme) */}
      <div className="relative bg-gradient-to-b from-[#4CAF50] to-[#C5EED5] min-h-[800px] lg:h-[1006px] w-full overflow-hidden flex flex-col items-center justify-center">
        {/* Top Solid Green Bar (if mimicking the screenshot exactly) */}
        <div className="absolute top-0 left-0 w-full h-4 bg-[#39A849] z-10" />

        {/* Background gradient override to match exact screenshot */}
        <div className="absolute inset-0 bg-[#C5EED5] z-0" />

        {/* Background Large Text (Perfectly centered via flex) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 mix-blend-overlay opacity-100 px-4">
          <h2 className="font-['Funnel_Display'] font-black text-[26vw] sm:text-[24vw] md:text-[22vw] text-white leading-none uppercase tracking-tight whitespace-nowrap drop-shadow-sm select-none">
            CHEWATA
          </h2>
        </div>

        {/* Center: Product Image (Perfectly centered via flex wrapper) */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <div className="relative w-[90vw] max-w-[1200px] aspect-[16/8] md:aspect-[16/7] lg:aspect-[16/6] animate-product-float drop-shadow-2xl">
            <Image
              src="/assets/products/product-display.png"
              alt="Vita Chewata"
              fill
              className="object-contain rotate-[-2deg]"
              priority
            />
          </div>
        </div>

        {/* Decorative elements - Left side cookies (Chocolate chip only) */}
        <div className="absolute left-[12%] top-[15%] w-20 h-20 lg:w-40 lg:h-40 z-30 animate-product-float-delayed pointer-events-none drop-shadow-xl">
          <Image
            src="/assets/hero/cookie-decoration-1.png"
            alt=""
            fill
            className="object-contain rotate-[-15deg]"
          />
        </div>
        <div className="absolute left-[22%] top-[25%] w-10 h-10 lg:w-16 lg:h-16 z-10 animate-product-float pointer-events-none drop-shadow-md">
          <Image
            src="/assets/hero/cookie-decoration-1.png"
            alt=""
            fill
            className="object-contain rotate-[65deg]"
          />
        </div>
        <div className="absolute left-[18%] bottom-[25%] w-16 h-16 lg:w-28 lg:h-28 z-30 animate-product-float-delayed pointer-events-none drop-shadow-lg">
          <Image
            src="/assets/hero/cookie-decoration-1.png"
            alt=""
            fill
            className="object-contain rotate-[120deg]"
          />
        </div>

        {/* Decorative elements - Right side foreground blurred cookie */}
        <div className="absolute right-[-5%] bottom-[5%] w-48 h-48 lg:w-[400px] lg:h-[400px] z-40 pointer-events-none filter blur-[8px] sm:blur-[12px] drop-shadow-2xl transform rotate-[15deg]">
          <Image
            src="/assets/hero/cookie-decoration-1.png"
            alt=""
            fill
            className="object-contain scale-125 animate-product-float"
          />
        </div>

        {/* Bottom Left: Text Content */}
        <div className="absolute bottom-10 left-10 lg:bottom-16 lg:left-16 z-30 flex flex-col items-start cursor-pointer group">
          <div className="flex flex-col gap-1">
            <h3 className="font-['Funnel_Display'] font-semibold text-[28px] lg:text-[40px] text-black leading-none flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-2">
              Vita Chewata
              <span className="text-black text-[20px] lg:text-[28px] font-light">
                ↗
              </span>
            </h3>
            <p className="font-['Outfit'] font-bold text-[14px] lg:text-[18px] text-black/80 tracking-wide mt-1">
              Soft Cream Biscuit
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
