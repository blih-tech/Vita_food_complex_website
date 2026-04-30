import { memo } from "react";
import Image from "next/image";

interface ProductsHeroProps {
  title: string;
}

export const ProductsHeroSection = memo(({ title }: ProductsHeroProps) => (
  <section className="relative w-full h-[50vh] md:h-[60vh] lg:h-[80vh] overflow-hidden bg-[url('/product-hero.svg')] bg-cover bg-bottom bg-no-repeat">
    <div
      className="absolute inset-0 opacity-10 pointer-events-none"
      aria-hidden="true"
    >
      <div className="absolute right-0 top-0 w-1/2 h-[70%] bg-[url('/assets/pattern.png')] bg-cover bg-no-repeat" />
    </div>

    {/* FLEX CONTENT (UNCHANGED) */}
    <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-20 h-full flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Left Title */}
      <div className="w-full md:w-1/2 flex items-center justify-start z-0 relative">
        <h1 className="font-['Funnel_Display'] font-black text-[6rem] md:text-[10rem] lg:text-[16rem] text-white leading-none drop-shadow-md tracking-tighter">
          {title}
        </h1>
      </div>

      {/* Right Content (kept for spacing only) */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-end justify-center z-20 relative mt-10 md:mt-24">
        <div className="hidden md:block absolute top-[-40px] right-10 z-0">
          <p className="font-['Outfit'] font-bold text-sm text-white/90 tracking-wider uppercase">
            Brand Biscuit Products
          </p>
        </div>
      </div>
    </div>

    {/* ✅ CENTERED HERO IMAGE (FIXED) */}
    <div className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 w-full max-w-[400px] md:max-w-[700px] lg:max-w-[1000px] aspect-[1.8] z-20 pointer-events-none">
      <Image
        src="/assets/products/figma/figma_prod_12.png"
        alt=""
        fill
        className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
        priority
      />
    </div>

    {/* Floating background elements */}
    <div
      className="absolute inset-0 pointer-events-none z-10"
      aria-hidden="true"
    >
      <div className="absolute top-24 left-32 w-12 h-12 opacity-80">
        <Image
          src="/assets/products/biscuit-piece.png"
          alt=""
          fill
          className="object-contain rotate-12"
        />
      </div>
      <div className="absolute top-48 left-[40%] w-16 h-16 opacity-90">
        <Image
          src="/assets/products/biscuit-scatter.png"
          alt=""
          fill
          className="object-contain rotate-45"
        />
      </div>
      <div className="absolute top-32 left-[60%] w-10 h-10 opacity-70">
        <Image
          src="/assets/products/biscuit-piece.png"
          alt=""
          fill
          className="object-contain -rotate-12"
        />
      </div>
      <div className="absolute bottom-[20%] right-[10%] w-32 h-32 opacity-90 blur-[1px]">
        <Image
          src="/assets/products/biscuit-scatter.png"
          alt=""
          fill
          className="object-contain rotate-60 scale-150"
        />
      </div>
    </div>
  </section>
));
ProductsHeroSection.displayName = "ProductsHeroSection";
