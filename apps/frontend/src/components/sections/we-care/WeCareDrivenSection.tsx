import { useTranslations } from "next-intl";
import { HandHeart, Target, Star } from "lucide-react";

export default function WeCareDrivenSection({ content, locale }: { content?: any; locale?: string }) {
  const t = useTranslations("WeCare.driven");
  const lang = (locale || "en") as "en" | "am";
  const c = content?.[lang];

  const title = c?.title || t("title");
  const desc = c?.desc || t("desc");
  const commitmentLabel = c?.commitment?.label || t("commitment.label");
  const commitmentDesc = c?.commitment?.desc || t("commitment.desc");
  const visionLabel = c?.vision?.label || t("vision.label");
  const visionDesc = c?.vision?.desc || t("vision.desc");
  const adaptedLabel = c?.adapted?.label || t("adapted.label");

  const adaptedCards = c?.adapted?.cards || [
    { title: t("adapted.community.title"), desc: t("adapted.community.desc") },
    { title: t("adapted.sustainability.title"), desc: t("adapted.sustainability.desc") },
    { title: t("adapted.empowerment.title"), desc: t("adapted.empowerment.desc") },
    { title: t("adapted.sharedCare.title"), desc: t("adapted.sharedCare.desc") },
  ];

  return (
    <section className="w-full max-w-[1920px] mx-auto px-[128px] py-[64px] flex flex-col items-center gap-[48px]">
      
      {/* Header Text */}
      <div className="flex flex-col items-center gap-[32px] w-full max-w-[844px]">
        <h2 className="font-outfit font-bold text-[64px] leading-[96%] tracking-[-0.02em] text-[#23B349] text-center whitespace-pre-line">
          {title}
        </h2>
        <p className="font-outfit font-normal text-[20px] leading-[25px] tracking-[-0.004em] text-black text-center">
          {desc}
        </p>
      </div>

      {/* Cards Container */}
      <div className="flex flex-row items-stretch justify-center gap-[30px] w-full max-w-[1664px]">
        
        {/* Left Card: Commitment & Vision */}
        <div className="flex-1 flex flex-col justify-center gap-12 bg-[#F9FFFC]/50 shadow-[0px_5px_32px_rgba(35,179,73,0.05)] rounded-[24px] p-12">
          
          {/* Commitment */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-row items-center w-fit">
              <div className="flex items-center justify-center w-[70px] h-[70px] bg-[#FFEC19] rounded-l-[16px] z-10">
                <HandHeart className="w-8 h-8 text-[#00574E]" />
              </div>
              <div className="flex items-center h-[70px] bg-[#23B349] rounded-r-[16px] px-8 -ml-2">
                <h3 className="font-funnel font-bold text-[32px] md:text-[40px] leading-none text-[#F9FFFC] tracking-[-0.01em]">
                  {commitmentLabel}
                </h3>
              </div>
            </div>
            <p className="font-outfit font-normal text-[24px] leading-[30px] tracking-[-0.004em] text-[#404040]">
              {commitmentDesc}
            </p>
          </div>

          {/* Vision */}
          <div className="flex flex-col gap-6 mt-8">
            <div className="flex flex-row items-center w-fit">
              <div className="flex items-center justify-center w-[70px] h-[70px] bg-[#FFEC19] rounded-l-[16px] z-10">
                <Target className="w-8 h-8 text-[#00574E]" />
              </div>
              <div className="flex items-center h-[70px] bg-[#23B349] rounded-r-[16px] px-8 -ml-2">
                <h3 className="font-funnel font-bold text-[32px] md:text-[40px] leading-none text-[#F9FFFC] tracking-[-0.01em]">
                  {visionLabel}
                </h3>
              </div>
            </div>
            <p className="font-funnel font-normal text-[22px] leading-[151%] tracking-[-0.01em] text-[#404040]">
              {visionDesc}
            </p>
          </div>

        </div>

        {/* Right Card: Adapted */}
        <div className="flex-1 flex flex-col gap-8 bg-[#FFEC19]/5 shadow-[0px_5px_68px_rgba(159,135,101,0.09)] rounded-[24px] p-12">
          
          {/* Adapted Header */}
          <div className="flex flex-row items-center w-fit">
            <div className="flex items-center justify-center w-[70px] h-[70px] bg-[#FED458] rounded-l-[16px] z-10">
              <Star className="w-8 h-8 text-[#00574E]" />
            </div>
            <div className="flex items-center h-[70px] bg-[#23B349] rounded-r-[16px] px-8 -ml-2">
              <h3 className="font-funnel font-bold text-[32px] md:text-[40px] leading-none text-[#FFFBF6] tracking-[-0.03em]">
                {adaptedLabel}
              </h3>
            </div>
          </div>

          {/* 2x2 Grid */}
          <div className="grid grid-cols-2 gap-[20px] mt-4">
            {adaptedCards.map((card: any, idx: number) => (
              <div key={idx} className="flex flex-col gap-2 p-6 bg-[#FEFBF6] shadow-[0px_5px_30px_rgba(144,144,144,0.06)] rounded-[16px]">
                <h4 className="font-funnel font-bold text-[24px] leading-none tracking-[-0.004em] text-[#23B349]">
                  {card.title}
                </h4>
                <p className="font-outfit font-normal text-[20px] leading-[142%] tracking-[-0.01em] text-[#404040]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
