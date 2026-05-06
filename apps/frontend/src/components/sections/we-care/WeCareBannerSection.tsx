import { useTranslations } from "next-intl";
import { Link } from "@frontend/navigation";
import Image from "next/image";

export default function WeCareBannerSection() {
  const t = useTranslations("WeCare.banner");

  return (
    <section className="w-full max-w-[1920px] mx-auto px-[128px] py-[64px] flex justify-center">
      
      <div className="relative w-full max-w-[1389px] h-[486px] rounded-[48px] bg-gradient-to-r from-[#23B349] to-[#2E7D32] overflow-hidden flex items-center px-[80px]">
        
        {/* Right side background image / panes placeholder */}
        <div className="absolute right-0 top-0 h-full w-[50%] pointer-events-none opacity-50 mix-blend-overlay">
          <Image
            src="/assets/about/story-image.png"
            alt="Glass Panes"
            fill
            className="object-cover object-left"
          />
        </div>

        {/* Left Content */}
        <div className="relative z-10 flex flex-col items-start gap-[40px] w-full max-w-[773px]">
          
          <div className="flex flex-col gap-[16px]">
            <h2 className="font-outfit font-extrabold text-[80px] leading-[90%] tracking-[-0.02em] text-[#FFFBF6] whitespace-pre-line">
              {t("title")}
            </h2>
            <p className="font-outfit font-medium text-[26px] leading-[149%] tracking-[-0.02em] text-white/90 max-w-[387px]">
              {t("desc")}
            </p>
          </div>

          <div className="flex flex-row items-center gap-[16px]">
            {/* Make an Impact Button */}
            <Link
              href="/contact"
              className="flex flex-row items-center justify-center gap-[12px] bg-[#FFCC33] backdrop-blur-[10px] rounded-[50px] px-[32px] py-[18px] hover:scale-105 transition-transform"
            >
              <span className="font-funnel font-medium text-[24px] leading-none text-[#000000] tracking-[-0.004em]">
                {t("cta1")}
              </span>
              <span className="text-[#27221B] font-bold text-[24px] leading-none">
                →
              </span>
            </Link>

            {/* Get Involved Button */}
            <Link
              href="/contact"
              className="flex flex-row items-center justify-center gap-[12px] bg-[#FCFBF9] backdrop-blur-[10px] rounded-[50px] px-[32px] py-[18px] hover:scale-105 transition-transform"
            >
              <span className="font-funnel font-medium text-[24px] leading-none text-[#000000]">
                {t("cta2")}
              </span>
              <span className="text-[#27221B] font-bold text-[24px] leading-none">
                →
              </span>
            </Link>
          </div>

        </div>

      </div>

    </section>
  );
}
