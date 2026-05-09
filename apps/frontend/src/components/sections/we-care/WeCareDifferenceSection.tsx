import { useTranslations } from "next-intl";
import { GraduationCap, Users, Leaf, ShieldCheck } from "lucide-react";

export default function WeCareDifferenceSection({ content, locale }: { content?: any; locale?: string }) {
  const t = useTranslations("WeCare.difference");
  const lang = (locale || "en") as "en" | "am";
  const c = content?.[lang];

  const title = c?.title || t("title");
  const cmsCards = c?.cards || [];

  const iconMap: Record<string, any> = {
    education: <GraduationCap className="w-6 h-6 text-[#FFEC19]" />,
    outreach: <Users className="w-6 h-6 text-[#FFEC19]" />,
    sustainable: <Leaf className="w-6 h-6 text-[#FFEC19]" />,
    inclusive: <ShieldCheck className="w-6 h-6 text-[#FFEC19]" />,
  };

  const cards = cmsCards.length > 0 ? cmsCards : [
    { key: "education", title: t("cards.education.title"), desc: t("cards.education.desc") },
    { key: "outreach", title: t("cards.outreach.title"), desc: t("cards.outreach.desc") },
    { key: "sustainable", title: t("cards.sustainable.title"), desc: t("cards.sustainable.desc") },
    { key: "inclusive", title: t("cards.inclusive.title"), desc: t("cards.inclusive.desc") },
  ];

  return (
    <section className="w-full max-w-[1920px] mx-auto px-[128px] py-[64px] flex flex-col items-start gap-[96px]">
      
      {/* Title */}
      <h2 className="font-outfit font-extrabold text-[80px] leading-[90%] tracking-[-0.02em] text-[#23B349] whitespace-pre-line max-w-[852px]">
        {title}
      </h2>

      {/* Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 w-full max-w-[1664px]">
        
        {cards.map((card: any, index: number) => (
          <div
            key={index}
            className="flex flex-col items-start justify-start p-8 bg-[#C0FF85]/10 rounded-[24px] min-h-[290px] relative overflow-hidden group hover:bg-[#C0FF85]/20 transition-colors duration-300"
          >
            {/* Icon */}
            <div className="flex items-center justify-center w-[50px] h-[50px] bg-[#23B349] rounded-[24px] mb-8">
              {iconMap[card.key] || <Leaf className="w-6 h-6 text-[#FFEC19]" />}
            </div>

            {/* Content */}
            <h3 className="font-funnel font-bold text-[32px] leading-[120%] tracking-[-0.03em] text-[#404040] mb-4">
              {card.title}
            </h3>
            <p className="font-outfit font-normal text-[17px] leading-[138%] tracking-[-0.01em] text-[#404040]">
              {card.desc}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}
