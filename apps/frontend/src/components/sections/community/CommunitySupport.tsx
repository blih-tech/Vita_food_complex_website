import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function CommunitySupport({ content, locale }: { content?: any; locale?: string }) {
  const t = useTranslations("PeoplePlanet.communitySupport");
  const lang = (locale || "en") as "en" | "am";
  const c = content?.[lang];

  const label = c?.label || t("label");
  const heading = c?.heading || t("heading");
  const description = c?.description || t("description");
  const mainImage = c?.mainImage || "/assets/community/community-support.png";

  const cards = c?.cards || [
    { title: t("cards.country"), description: t("cards.countryDesc"), isFeatured: true },
    { title: t("cards.countryside"), isFeatured: false },
    { title: t("cards.villagers"), isFeatured: false },
    { title: t("cards.farmers"), isFeatured: false },
    { title: t("cards.families"), isFeatured: false },
    { title: t("cards.sustainability"), isFeatured: false },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-[#2a9d4a] to-[#36B570] py-24 lg:py-32" id="impact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1664px]">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-16">
          <div className="lg:w-1/2">
            <h4 className="text-white/80 font-['Outfit'] text-[16px] sm:text-[18px] uppercase tracking-wider mb-4">
              {label}
            </h4>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.1] font-['Outfit'] text-white font-extrabold tracking-tight whitespace-pre-line">
              {heading}
            </h2>
          </div>
          <div className="lg:w-[45%] flex items-end">
            <p className="text-xl sm:text-2xl text-white/90 font-['Funnel_Display'] font-light leading-relaxed max-w-2xl">
              {description}
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Large Image */}
          <div className="w-full lg:w-[40%] rounded-[32px] overflow-hidden relative aspect-[3/4] lg:aspect-auto">
            <Image
              src={mainImage}
              alt="Agricultural Support"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {/* Right Cards Grid */}
          <div className="w-full lg:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-6">
            {cards.map((card: any, idx: number) => (
              <div 
                key={idx}
                className={`${
                  card.isFeatured ? "bg-[#23B349] hover:bg-[#1f9d40]" : "bg-[#FFF8ED] hover:shadow-lg"
                } rounded-[24px] p-8 flex flex-col justify-between min-h-[220px] group cursor-pointer transition-all relative overflow-hidden`}
              >
                <div>
                  <h3 className={`${card.isFeatured ? "text-white" : "text-[#23B349]"} font-['Funnel_Display'] text-2xl font-bold mb-4 flex items-center gap-2`}>
                    {card.title}
                  </h3>
                  {card.description && (
                    <p className={`${card.isFeatured ? "text-white/90" : "text-[#404040]/80"} font-['Outfit'] text-[16px] leading-relaxed max-w-sm`}>
                      {card.description}
                    </p>
                  )}
                </div>
                <div className={`absolute bottom-6 right-6 w-10 h-10 ${card.isFeatured ? "bg-white" : "bg-[#23B349]"} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <ArrowUpRight className={`${card.isFeatured ? "text-[#23B349]" : "text-white"} w-5 h-5`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
