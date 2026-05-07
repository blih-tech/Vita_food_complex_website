"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@frontend/navigation";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const tagIcons = [
  "bora.png",
  "chewata.png",
  "cream.png",
  "digestive.png",
  "glucose.png",
  "marie.png",
  "oreo.png",
  "sina.png",
  "tafach.png",
  "tea.png",
  "zoo.png",
];

export default function BiscuitBrandSection({ content, locale }: { content?: any; locale?: string }) {
  const t = useTranslations("BiscuitBrand");
  const c = content?.[locale as string] || content?.en;
  const [emblaRef] = useEmblaCarousel(
    { align: "center", dragFree: true, containScroll: false, loop: true },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  return (
    <section
      id="biscuit-brand"
      className="relative w-full bg-white pt-24 pb-48 lg:pt-32 lg:pb-[250px] overflow-hidden min-h-[900px] flex flex-col items-center"
    >

      {/* Bottom Left: Oreo (blurred) */}
      <div className="absolute bottom-[-50px] sm:bottom-0 lg:bottom-[20px] left-[-50px] sm:left-[-50px] lg:left-[-50px] w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] z-30 blur-[8px] sm:blur-[12px] opacity-95 -rotate-[15deg] hover:blur-none transition-all duration-500 pointer-events-none">
        <Image
          src="/assets/products/biscuts/biscut-5.png"
          alt="Oreo"
          fill
          className="object-contain"
        />
      </div>

      {/* Bottom Right: Chocolate Chip Cookie (blurred) */}
      <div className="absolute bottom-[-50px] sm:bottom-0 lg:bottom-[20px] right-[-50px] sm:right-[-50px] lg:right-[-50px] w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] z-30 blur-[8px] sm:blur-[12px] opacity-95 rotate-[15deg] hover:blur-none transition-all duration-500 pointer-events-none">
        <Image
          src="/assets/products/biscuts/biscut-1.png"
          alt="Cookie"
          fill
          className="object-contain"
        />
      </div>

      <div className="relative z-20 w-full flex flex-col items-center">
        {/* Text content */}
        <div className="flex flex-col items-center gap-4 text-center mb-12 lg:mb-16 px-6">
          <p className="font-['Funnel_Display'] font-semibold text-[14px] sm:text-[16px] text-[#404040]/60 tracking-[0.15em] uppercase">
            {c?.label || t("label")}
          </p>

          <h2 className="font-['Outfit'] font-black text-[40px] sm:text-[56px] lg:text-[72px] text-[#23B349] leading-[1.05] tracking-tight max-w-4xl capitalize">
            {c?.title ? c.title : t.rich("title", { br: () => <br /> })}
          </h2>
        </div>

        {/* Scrollable Tag Icons */}
        <div className="relative w-full my-20 lg:my-32 z-20 flex items-center justify-center">
          {/* Background decoration specifically for the Tag Icons */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[550px] sm:h-[550px] lg:w-[700px] lg:h-[700px] pointer-events-none z-0"
            style={{
              backgroundColor: "#282828",
              maskImage: `url('/product-vector.svg')`,
              WebkitMaskImage: `url('/product-vector.svg')`,
              maskSize: "contain",
              WebkitMaskSize: "contain",
              maskPosition: "center",
              WebkitMaskPosition: "center",
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
            }}
          />
          {/* Embla Viewport */}
          <div className="relative z-10 w-full overflow-hidden" ref={emblaRef}>
            {/* Embla Container */}
            <div className="flex flex-row items-center gap-12 sm:gap-20 lg:gap-32 px-[10vw] sm:px-[20vw] lg:px-[30vw] py-12 cursor-grab active:cursor-grabbing">
              {tagIcons.map((icon, index) => (
                <div
                  key={icon}
                  className="relative shrink-0 min-w-[280px] h-[200px] sm:min-w-[400px] sm:h-[280px] lg:min-w-[550px] lg:h-[350px] transition-all duration-500 hover:scale-105"
                >
                  <Image
                    src={`/assets/products/tag_icons/${icon}`}
                    alt={icon.replace(".png", "")}
                    fill
                    className="object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.8)] pointer-events-none select-none"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 3}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Text and CTA */}
        <div className="flex flex-col items-center gap-8 mt-12 sm:mt-16 lg:mt-20 relative z-20 px-6">
          <p className="font-['Funnel_Display'] font-medium text-[14px] sm:text-[16px] lg:text-[18px] text-[#404040]/80 text-center max-w-xl leading-relaxed">
            {c?.description ? c.description : t.rich("description", { br: () => <br className="hidden sm:block" /> })}
          </p>

          <Link
            href="/products"
            className="group bg-[#23B349] text-white px-8 py-4 rounded-full flex items-center gap-3 hover:bg-[#1f9d40] transition-all duration-300 shadow-xl shadow-green-500/20 active:scale-[0.98]"
          >
            <span className="font-['Funnel_Display'] font-bold text-[16px]">
              {c?.cta || t("cta")}
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
