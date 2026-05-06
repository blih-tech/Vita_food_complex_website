import Image from "next/image";
import { Product } from "@frontend/app/[locale]/products/data";
import { useTranslations } from "next-intl";

interface ProductHeroSectionProps {
  product: Product;
}

export default function ProductHeroSection({
  product,
}: ProductHeroSectionProps) {
  const t = useTranslations("Products");
  const netWtMatch = (product.content?.netWeight || "120g").match(
    /^(\d+)(.*)$/,
  );
  const netWtNum = netWtMatch ? netWtMatch[1] : "120";
  const netWtUnit = netWtMatch ? netWtMatch[2] : "g";

  return (
    <section
      className="relative w-full overflow-hidden flex flex-col items-center pb-20"
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
    >
      <div className="relative z-10 w-full flex flex-col items-center text-center px-4 pt-12 md:pt-24 max-w-[1400px] mx-auto">
        {/* HUGE Background Text & Net WT */}
        <div className="relative w-full flex justify-center items-center pointer-events-none select-none z-0">
          <div className="relative inline-block">
            <h1
              className="font-['Funnel_Display'] font-black text-7xl md:text-[9rem] lg:text-[12rem] tracking-tight leading-none text-center whitespace-nowrap drop-shadow-md"
              style={{ color: product.ui.nameColor }}
            >
              {t(`items.${product.id}.name`)}
              {product.id === "oreo" ? " Cream" : ""}
            </h1>
          </div>
        </div>

        {/* Hero Product Image */}
        <div className="relative w-[500px] h-[400px] md:w-full md:max-w-5xl md:aspect-[1.1] lg:max-w-[1800px] lg:aspect-[1.3] z-20 -mt-4 md:-mt-12 lg:-mt-20 flex justify-center items-center">
          {/* Faint Background Vector behind the product */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-[0.04] pointer-events-none z-0">
            <Image
              src="/assets/product-vector.svg"
              alt="Vita Background Crest"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 600px, (max-width: 1024px) 1000px, 1400px"
              priority
            />
          </div>

          <Image
            src={product.media.image}
            alt={product.name}
            fill
            className="object-contain drop-shadow-2xl hover:-translate-y-4 transition-transform duration-500 scale-110 lg:scale-125 z-10"
            priority
          />
        </div>

        {/* Subtext */}
        <p
          className="relative font-['Outfit'] -mt-20 font-medium text-base md:text-xl lg:text-2xl max-w-2xl text-center mx-auto leading-tight  z-20"
          style={{ color: product.ui.nameColor }}
        >
          {t(`items.${product.id}.description`)}
        </p>
      </div>
    </section>
  );
}
