"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@frontend/navigation";

export default function BiscuitBrandSection() {
  const t = useTranslations("BiscuitBrand");

  return (
    <section
      id="biscuit-brand"
      className="relative w-full bg-white py-24 lg:py-32 overflow-hidden min-h-[900px] flex flex-col items-center"
    >
      {/* Background decoration */}
      <div className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] sm:w-[1000px] sm:h-[1000px] lg:w-[1200px] lg:h-[1200px] opacity-[0.2] pointer-events-none z-0">
        <Image
          src="/assets/products/items/related-vector.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* Floating Elements relative to the SECTION (Viewport edges) */}

      {/* Left Item: Orange Ring (Zoo/Bora) */}
      <div className="absolute left-[-80px] sm:left-[-100px] lg:left-[-150px] xl:left-[-100px] top-[40%] sm:top-[45%] w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] z-10 pointer-events-none drop-shadow-xl">
        <Image
          src="/assets/products/items/zoo-orange-1.png"
          alt="Orange Biscuit"
          fill
          className="object-contain object-right"
        />
      </div>

      {/* Right Item: Chewata Logo */}
      <div className="absolute right-[-40px] sm:right-[-60px] lg:right-[-80px] xl:right-[-50px] top-[45%] w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] lg:w-[320px] lg:h-[320px] z-10 pointer-events-none drop-shadow-xl">
        <Image
          src="/assets/products/tag_icons/chewata.png"
          alt="Chewata"
          fill
          className="object-contain object-left"
        />
      </div>

      {/* Bottom Left: Oreo (blurred) */}
      <div className="absolute -bottom-[50px] sm:-bottom-[100px] left-[-20px] sm:left-[5%] lg:left-[10%] w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px] z-30 blur-[8px] sm:blur-[12px] opacity-95 -rotate-[15deg] hover:blur-none transition-all duration-500">
        <Image
          src="/assets/products/biscuts/biscut-5.png"
          alt="Oreo"
          fill
          className="object-contain"
        />
      </div>

      {/* Bottom Right: Chocolate Chip Cookie (blurred) */}
      <div className="absolute -bottom-[50px] sm:-bottom-[100px] right-[-20px] sm:right-[5%] lg:right-[10%] w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px] z-30 blur-[8px] sm:blur-[12px] opacity-95 rotate-[15deg] hover:blur-none transition-all duration-500">
        <Image
          src="/assets/products/biscuts/biscut-1.png"
          alt="Cookie"
          fill
          className="object-contain"
        />
      </div>

      <div className="relative z-20 max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24 flex flex-col items-center w-full">
        {/* Text content */}
        <div className="flex flex-col items-center gap-4 text-center mb-12 lg:mb-20">
          <p className="font-['Funnel_Display'] font-semibold text-[14px] sm:text-[16px] text-[#404040]/60 tracking-[0.15em] uppercase">
            Brand Biscuit Products
          </p>

          <h2 className="font-['Outfit'] font-black text-[40px] sm:text-[56px] lg:text-[72px] text-[#23B349] leading-[1.05] tracking-tight max-w-4xl capitalize">
            A Mouthful of <br />
            True Biscuit Taste!
          </h2>
        </div>

        {/* Center Main Logo */}
        <div className="relative w-full max-w-[1000px] h-[250px] sm:h-[350px] lg:h-[450px] flex items-center justify-center my-8">
          <div className="relative w-[320px] h-[200px] sm:w-[500px] sm:h-[300px] lg:w-[650px] lg:h-[400px] z-20 transition-transform duration-700 hover:scale-105">
            <Image
              src="/digestive.png"
              alt="Digestive Logo"
              fill
              className="object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.8)]"
            />
          </div>
        </div>

        {/* Bottom Text and CTA */}
        <div className="flex flex-col items-center gap-8 mt-16 sm:mt-24 lg:mt-32 relative z-20">
          <p className="font-['Funnel_Display'] font-medium text-[14px] sm:text-[16px] lg:text-[18px] text-[#404040]/80 text-center max-w-xl leading-relaxed">
            From everyday baking to special treats, Vita brings
            <br className="hidden sm:block" />
            joy, taste, and quality to your table.
          </p>

          <Link
            href="/products"
            className="group bg-[#23B349] text-white px-8 py-4 rounded-full flex items-center gap-3 hover:bg-[#1f9d40] transition-all duration-300 shadow-xl shadow-green-500/20 active:scale-[0.98]"
          >
            <span className="font-['Funnel_Display'] font-bold text-[16px]">
              View Products
            </span>
            <div className="bg-white/20 rounded-full p-1 group-hover:translate-x-1 transition-transform flex items-center justify-center">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
