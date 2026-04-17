"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@frontend/navigation";

export default function ProductsSection() {
  const t = useTranslations("Products");

  return (
    <section id="products" className="relative w-full flex flex-col">
      {/* Product One - Chewata (Green Theme) */}
      <div className="relative bg-[#D6F7D7] min-h-[800px] lg:h-[1006px] w-full overflow-hidden flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 lg:px-24 py-20 lg:py-0">
        {/* Background Large Text */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0">
          <h2 className="font-['Funnel_Display'] font-black text-[150px] sm:text-[250px] lg:text-[446px] text-white/40 leading-none uppercase tracking-[-0.05em]">
            Chewata
          </h2>
        </div>

        {/* Left Side: Text Content */}
        <div className="relative z-20 flex flex-col items-start max-w-[500px] mb-12 lg:mb-0 lg:mt-[400px]">
           <div className="flex flex-col gap-4">
              <h3 className="font-['Funnel_Display'] font-bold text-[40px] lg:text-[64px] text-black leading-tight flex items-center gap-4 group cursor-pointer">
                Vita Chewata 
                <span className="text-[#23B349] group-hover:translate-x-2 transition-transform duration-300">{">"}</span>
              </h3>
              <p className="font-['Outfit'] font-semibold text-[20px] lg:text-[28px] text-[#404040]/70">
                Soft Cream Biscuit
              </p>
           </div>
        </div>

        {/* Center/Right: Product Image */}
        <div className="relative z-10 w-full lg:w-[1000px] h-[400px] sm:h-[600px] lg:h-[800px] animate-float">
           <Image 
            src="/assets/products/product-display.png" 
            alt="Vita Chewata" 
            fill 
            className="object-contain rotate-[-5deg]"
            priority
          />
        </div>

        {/* Decorative elements */}
        <div className="absolute left-[5%] top-[10%] w-32 h-32 lg:w-64 lg:h-64 opacity-40 animate-float-delayed pointer-events-none">
           <Image src="/assets/products/biscuit-piece.png" alt="" fill className="object-contain" />
        </div>
        <div className="absolute right-[10%] bottom-[10%] w-40 h-40 lg:w-80 lg:h-80 opacity-40 animate-float pointer-events-none">
           <Image src="/assets/products/biscuit-scatter.png" alt="" fill className="object-contain" />
        </div>
      </div>

      {/* Product Two - Oreo (Blue Theme) */}
      <div className="relative bg-[#1648B5] min-h-[800px] lg:h-[1006px] w-full overflow-hidden flex flex-col lg:flex-row-reverse items-center justify-between px-6 sm:px-12 lg:px-24 py-20 lg:py-0">
         {/* Background Large Text */}
         <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0">
          <h2 className="font-['Funnel_Display'] font-black text-[150px] sm:text-[250px] lg:text-[446px] text-white/10 leading-none uppercase tracking-[-0.05em]">
            Oreo
          </h2>
        </div>

        {/* Content: Text Side (Right on desktop because of flex-row-reverse) */}
        <div className="relative z-20 flex flex-col items-start lg:items-end max-w-[500px] mb-12 lg:mb-0 lg:mt-[400px] text-left lg:text-right">
           <div className="flex flex-col gap-4">
              <h3 className="font-['Funnel_Display'] font-bold text-[40px] lg:text-[64px] text-white leading-tight flex items-center justify-end gap-4 group cursor-pointer">
                <span className="text-[#5DB9FF] group-hover:-translate-x-2 transition-transform duration-300 order-2 lg:order-1">{"<"}</span>
                <span className="order-1 lg:order-2">Vita Oreo</span>
              </h3>
              <p className="font-['Outfit'] font-semibold text-[20px] lg:text-[28px] text-white/70">
                Chocolate Cream Sandwich
              </p>
           </div>
        </div>

        {/* Center/Left: Product Image */}
        <div className="relative z-10 w-full lg:w-[900px] h-[400px] sm:h-[600px] lg:h-[750px] animate-float-delayed">
           <Image 
            src="/assets/products/product-1.png" 
            alt="Vita Oreo" 
            fill 
            className="object-contain rotate-[8deg]"
          />
        </div>

        {/* Decorative elements */}
        <div className="absolute left-[15%] bottom-[15%] w-32 h-32 lg:w-64 lg:h-64 opacity-30 animate-float pointer-events-none">
           <Image src="/assets/products/biscuit-piece.png" alt="" fill className="object-contain brightness-0 invert" />
        </div>
        <div className="absolute right-[5%] top-[15%] w-40 h-40 lg:w-80 lg:h-80 opacity-30 animate-float-delayed pointer-events-none">
           <Image src="/assets/products/biscuit-scatter.png" alt="" fill className="object-contain brightness-0 invert" />
        </div>
      </div>
    </section>
  );
}
