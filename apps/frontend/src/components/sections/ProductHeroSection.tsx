import Image from "next/image";
import { Product } from "@/app/[locale]/products/data";

interface ProductHeroSectionProps {
  product: Product;
}

export default function ProductHeroSection({
  product,
}: ProductHeroSectionProps) {
  const netWtMatch = (product.content?.netWeight || "120g").match(/^(\d+)(.*)$/);
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
        <div className="absolute top-[30%] md:top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[800px] lg:w-[1100px] lg:h-[1100px] opacity-[0.04] pointer-events-none z-0 flex items-center justify-center">
          <Image
            src="/assets/brand/vita-logo.svg"
            alt="Vita Background Crest"
            fill
            className="object-contain"
            sizes="1100px"
            priority
          />
        </div>

        {/* HUGE Background Text & Net WT */}
        <div className="relative w-full flex justify-center items-center pointer-events-none select-none z-0">
          <div className="relative inline-block">
            <h1
              className="font-['Funnel_Display'] font-black text-[100px] md:text-[180px] lg:text-[250px] tracking-tight leading-none text-center whitespace-nowrap drop-shadow-md"
              style={{ color: product.ui.nameColor }}
            >
              {product.name}
              {product.name.toLowerCase() === "oreo" ? " Cream" : ""}
            </h1>

            {/* Net Weight Badge */}
            <div
              className="absolute top-[60%] -translate-y-1/2 -left-4 md:-left-16 lg:-left-24 text-left"
              style={{ color: product.ui.nameColor }}
            >
              <span className="font-['Outfit'] font-bold text-[10px] md:text-sm lg:text-base opacity-90 block leading-none tracking-[0.2em]">
                NET WT.
              </span>
              <span className="font-['Outfit'] font-black text-xl md:text-3xl lg:text-5xl block mt-1 tracking-tighter">
                {netWtNum}
                <span className="text-sm md:text-xl lg:text-3xl">{netWtUnit}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Hero Product Image */}
        <div className="relative w-[300px] md:w-[600px] lg:w-[850px] h-[200px] md:h-[350px] lg:h-[450px] z-20 -mt-[60px] md:-mt-[120px] lg:-mt-[180px]">
          <Image
            src={product.media.image}
            alt={product.name}
            fill
            className="object-contain drop-shadow-2xl hover:-translate-y-4 transition-transform duration-500"
            priority
          />
        </div>

        {/* Subtext */}
        <p
          className="relative font-['Outfit'] font-medium text-lg md:text-2xl lg:text-[26px] max-w-[800px] text-center mx-auto leading-tight mt-6 md:mt-12 z-20"
          style={{ color: product.ui.nameColor }}
        >
          {product.content?.description ||
            "Delicious chocolate biscuits filled with smooth, creamy goodness made for everyday enjoyment"}
        </p>
      </div>
    </section>
  );
}
