import { useTranslations } from "next-intl";

export default function WeCareHeartSection({ content, locale }: { content?: any; locale?: string }) {
  const t = useTranslations("WeCare.heart");
  const lang = (locale || "en") as "en" | "am";
  const c = content?.[lang];

  const title = c?.title || t("title");
  const desc = c?.desc || t("desc");

  return (
    <section className="relative w-full max-w-[1920px] mx-auto px-[128px] py-[64px] flex justify-center">
      
      {/* Background Blurs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[521px] h-[145px] bg-[#23B349] opacity-20 blur-[147px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[234px] h-[65px] bg-[#23B349] opacity-20 blur-[52px] rounded-full pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1664px] flex flex-col justify-center items-center py-[62px] px-[59px] bg-[#90D152] bg-opacity-10 border-2 border-white shadow-[0px_4px_104px_rgba(185,202,169,0.2)] rounded-[100px]">
        
        <div className="flex flex-col items-center justify-center gap-[64px] w-full max-w-[1002px]">
          <h2 className="font-outfit font-extrabold text-[80px] leading-[90%] tracking-[-0.02em] text-[#23B349] text-center">
            {title}
          </h2>
          <p className="font-outfit font-medium text-[24px] leading-[30px] tracking-[-0.004em] text-[#404040] text-center">
            {desc}
          </p>
        </div>

      </div>
    </section>
  );
}
