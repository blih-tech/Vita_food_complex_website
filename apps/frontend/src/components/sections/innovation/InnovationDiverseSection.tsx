import { useTranslations } from "next-intl";
import Image from "next/image";

export default function InnovationDiverseSection({ content, locale }: { content?: any; locale?: string }) {
  const t = useTranslations("Innovation.diverse");
  const lang = (locale || "en") as "en" | "am";
  const c = content?.[lang];

  const title = c?.title || t("title");
  const description = c?.description || t("description");

  const staticGradients = [
    "from-transparent to-[#23B349]",
    "from-transparent to-[#121212]/50",
    "from-transparent to-[#FFEC19]",
  ];

  const staticImages = [
    "/assets/about/baking-biscuits.png",
    "/assets/products/product-display.png",
    "/assets/hero/family-true.png",
  ];

  const cards = c?.cards || [
    {
      id: "products",
      title: t("cards.products.title"),
      desc: t("cards.products.desc"),
      cta: t("cards.products.cta"),
      image: staticImages[0],
      gradient: staticGradients[0],
    },
    {
      id: "packaging",
      title: t("cards.packaging.title"),
      desc: t("cards.packaging.desc"),
      cta: t("cards.packaging.cta"),
      image: staticImages[1],
      gradient: staticGradients[1],
    },
    {
      id: "experience",
      title: t("cards.experience.title"),
      desc: t("cards.experience.desc"),
      cta: t("cards.experience.cta"),
      image: staticImages[2],
      gradient: staticGradients[2],
    },
  ];

  // Map gradients if they are missing in CMS content
  const cardsWithGradients = cards.map((card: any, idx: number) => ({
    ...card,
    gradient: card.gradient || staticGradients[idx % staticGradients.length],
    image: card.image || staticImages[idx % staticImages.length]
  }));

  return (
    <section className="w-full max-w-[1920px] mx-auto px-[128px] py-[108px] flex flex-col items-center gap-[42px] mb-[120px]">
      
      {/* Header */}
      <div className="flex flex-col items-center gap-6 w-full max-w-[1151px]">
        <h2 className="font-outfit font-extrabold text-[80px] leading-[90%] tracking-[-0.02em] text-[#23B349] text-center">
          {title}
        </h2>
        <p className="font-outfit font-normal text-[24px] leading-none tracking-[-0.01em] text-[#404040] text-center max-w-[996px]">
          {description}
        </p>
      </div>

      {/* Cards Row */}
      <div className="flex flex-row items-center justify-center gap-[30px] w-full max-w-[1664px]">
        {cardsWithGradients.map((card: any) => (
          <div 
            key={card.id} 
            className="relative w-[535px] h-[556px] rounded-[24px] overflow-hidden group"
          >
            {/* Background Image */}
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Gradient Overlay */}
            <div className={`absolute bottom-0 left-0 w-full h-[314px] bg-gradient-to-b ${card.gradient}`} />

            {/* Glass Content Box */}
            <div className="absolute bottom-[14px] left-[14px] w-[506px] h-[166px] bg-white/80 backdrop-blur-[12px] rounded-[24px] p-6 flex flex-col justify-between">
              <div className="flex flex-col gap-2">
                <h3 className="font-funnel font-bold text-[24px] leading-[32px] text-[#383838]">
                  {card.title}
                </h3>
                <p className="font-outfit font-normal text-[20px] leading-[28px] text-[#404040]">
                  {card.desc}
                </p>
              </div>
              
              {/* CTA Link */}
              <div className="flex flex-row items-center gap-1 group/link cursor-pointer w-fit">
                <span className="font-funnel font-bold text-[20px] leading-[25px] text-black">
                  {card.cta}
                </span>
                <span className="text-black transform transition-transform group-hover/link:translate-x-1">
                  →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
