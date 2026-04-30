import Image from "next/image";
import { Product } from "@frontend/app/[locale]/products/data";

interface ProductHeroSectionProps {
  product: Product;
}

export default function ProductHeroSection({
  product,
}: ProductHeroSectionProps) {
  const netWtMatch = (product.content?.netWeight || "120g").match(
    /^(\d+)(.*)$/,
  );
  const netWtNum = netWtMatch ? netWtMatch[1] : "120";
  const netWtUnit = netWtMatch ? netWtMatch[2] : "g";

  return (
    <section className="relative w-full pt-16 pb-32 md:pb-48 lg:pb-64 flex flex-col items-center">
      {/* Background with new wave-2 mask */}
      <div
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        style={{
          background: product.ui.bgColor,
          maskImage: `url('/wave-2.svg')`,
          WebkitMaskImage: `url('/wave-2.svg')`,
          maskSize: "cover",
          WebkitMaskSize: "cover",
          maskPosition: "bottom center",
          WebkitMaskPosition: "bottom center",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
        }}
      />

      <div className="relative z-10 w-full flex flex-col items-center text-center px-4 pt-12 md:pt-24 max-w-[1400px] mx-auto">
        {/* Faint Background Crest */}
        <div className="absolute top-1/3 md:top-2/5 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg md:max-w-3xl lg:max-w-5xl aspect-square opacity-[0.04] pointer-events-none z-0 flex items-center justify-center">
          <Image
            src="/assets/brand/vita-logo.svg"
            alt="Vita Background Crest"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 500px, (max-width: 1024px) 800px, 1100px"
            priority
          />
        </div>

        {/* HUGE Background Text & Net WT */}
        <div className="relative w-full flex justify-center items-center pointer-events-none select-none z-0">
          <div className="relative inline-block">
            <h1
              className="font-['Funnel_Display'] font-black text-7xl md:text-[9rem] lg:text-[12rem] tracking-tight leading-none text-center whitespace-nowrap drop-shadow-md"
              style={{ color: product.ui.nameColor }}
            >
              {product.name}
              {product.name.toLowerCase() === "oreo" ? " Cream" : ""}
            </h1>
          </div>
        </div>

        {/* Hero Product Image */}
        <div className="relative w-[500px] h-[400px] md:w-full md:max-w-5xl md:aspect-[1.1] lg:max-w-[1800px] lg:aspect-[1.3] z-20 -mt-4 md:-mt-12 lg:-mt-20">
          <Image
            src={product.media.image}
            alt={product.name}
            fill
            className="object-contain drop-shadow-2xl hover:-translate-y-4 transition-transform duration-500 scale-150 lg:scale-[1.8]"
            priority
          />
        </div>

        {/* Subtext */}
        <p
          className="relative font-['Outfit'] font-medium text-base md:text-xl lg:text-2xl max-w-2xl text-center mx-auto leading-tight mt-6 md:mt-8 z-20"
          style={{ color: product.ui.nameColor }}
        >
          {product.content?.description ||
            "Delicious chocolate biscuits filled with smooth, creamy goodness made for everyday enjoyment"}
        </p>
      </div>
    </section>
  );
}
