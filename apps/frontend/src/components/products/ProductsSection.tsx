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
           <Image src="/assets/hero/cookie-decoration-1.png" alt="" fill className="object-contain rotate-[-15deg]" />
        </div>
        <div className="absolute left-[22%] top-[25%] w-10 h-10 lg:w-16 lg:h-16 z-10 animate-product-float pointer-events-none drop-shadow-md">
           <Image src="/assets/hero/cookie-decoration-1.png" alt="" fill className="object-contain rotate-[65deg]" />
        </div>
        <div className="absolute left-[18%] bottom-[25%] w-16 h-16 lg:w-28 lg:h-28 z-30 animate-product-float-delayed pointer-events-none drop-shadow-lg">
           <Image src="/assets/hero/cookie-decoration-1.png" alt="" fill className="object-contain rotate-[120deg]" />
        </div>

        {/* Decorative elements - Right side foreground blurred cookie */}
        <div className="absolute right-[-5%] bottom-[5%] w-48 h-48 lg:w-[400px] lg:h-[400px] z-40 pointer-events-none filter blur-[8px] sm:blur-[12px] drop-shadow-2xl transform rotate-[15deg]">
           <Image src="/assets/hero/cookie-decoration-1.png" alt="" fill className="object-contain scale-125 animate-product-float" />
        </div>

        {/* Bottom Left: Text Content */}
        <div className="absolute bottom-10 left-10 lg:bottom-16 lg:left-16 z-30 flex flex-col items-start cursor-pointer group">
           <div className="flex flex-col gap-1">
              <h3 className="font-['Funnel_Display'] font-semibold text-[28px] lg:text-[40px] text-black leading-none flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-2">
                Vita Chewata 
                <span className="text-black text-[20px] lg:text-[28px] font-light">↗</span>
              </h3>
              <p className="font-['Outfit'] font-bold text-[14px] lg:text-[18px] text-black/80 tracking-wide mt-1">
                Soft Cream Biscuit
              </p>
           </div>
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
        <div className="relative z-10 w-full lg:w-[900px] h-[400px] sm:h-[600px] lg:h-[750px] animate-product-float-delayed">
           <Image 
            src="/assets/products/product-1.png" 
            alt="Vita Oreo" 
            fill 
            className="object-contain rotate-[8deg]"
          />
        </div>

        {/* Decorative elements */}
        <div className="absolute left-[15%] bottom-[15%] w-32 h-32 lg:w-64 lg:h-64 opacity-30 animate-product-float pointer-events-none">
           <Image src="/assets/products/biscuit-piece.png" alt="" fill sizes="(max-width: 768px) 30vw, 15vw" className="object-contain brightness-0 invert" />
        </div>
        <div className="absolute right-[5%] top-[15%] w-40 h-40 lg:w-80 lg:h-80 opacity-30 animate-product-float-delayed pointer-events-none">
           <Image src="/assets/products/biscuit-scatter.png" alt="" fill sizes="(max-width: 768px) 30vw, 15vw" className="object-contain brightness-0 invert" />
        </div>
      </div>

      <style jsx>{`
        @keyframes product-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
        }
        @keyframes product-float-delayed {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-2deg); }
        }
        .animate-product-float {
          animation: product-float 7s ease-in-out infinite;
        }
        .animate-product-float-delayed {
          animation: product-float-delayed 9s ease-in-out infinite;
          animation-delay: -4s;
        }
      `}</style>
    </section>
  );
}
