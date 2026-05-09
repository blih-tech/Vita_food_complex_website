import { useTranslations } from "next-intl";
import Image from "next/image";
import { MoveUpRight } from "lucide-react";

export default function InnovationApproachSection({ content, locale }: { content?: any; locale?: string }) {
  const t = useTranslations("Innovation.approach");
  const lang = (locale || "en") as "en" | "am";
  const c = content?.[lang];

  const label = c?.label || t("label");
  const cta = c?.cta || t("cta");
  const mainImage = c?.mainImage || "/assets/about/story-image.png";

  const textPart1 = c?.textPart1 || t("textPart1");
  const bold1 = c?.bold1 || t("bold1");
  const textPart2 = c?.textPart2 || t("textPart2");
  const bold2 = c?.bold2 || t("bold2");
  const textPart3 = c?.textPart3 || t("textPart3");
  const bold3 = c?.bold3 || t("bold3");

  return (
    <section className="w-full max-w-[1920px] mx-auto px-[128px] py-[108px] flex flex-col gap-[128px]">
      {/* Top Text Content */}
      <div className="flex flex-row justify-between items-center w-full max-w-[1664px] mx-auto gap-8">
        
        {/* Left Content */}
        <div className="flex flex-col items-start gap-6 w-full max-w-[684px]">
          <h2 className="font-outfit font-medium text-[16px] leading-none tracking-[-0.004em] text-[#23B349] uppercase">
            {label}
          </h2>
          <p className="font-funnel font-medium text-[32px] leading-[40px] text-[#00574E]">
            {textPart1}
            <span className="font-bold">{bold1}</span>
            {textPart2}
            <span className="font-bold">{bold2}</span>
            {textPart3}
            <span className="font-bold">{bold3}</span>
          </p>
          <button className="flex flex-row justify-center items-center px-8 py-4 gap-4 bg-[#23B349] rounded-full mt-2 transition-transform hover:scale-105">
            <span className="font-outfit font-normal text-[20px] leading-[25px] tracking-[-0.004em] text-white">
              {cta}
            </span>
            <span className="font-outfit font-normal text-[20px] leading-[25px] flex items-center tracking-[-0.004em] text-white">
              →
            </span>
          </button>
        </div>

        {/* Right Content */}
        <div className="flex flex-col items-start p-4 gap-2 w-full max-w-[544px] bg-[#E9F7ED] bg-opacity-30 rounded-[9px]">
          <div className="flex flex-col items-start gap-[9px] w-full p-2">
            <div className="w-[46px] h-[46px] flex items-center justify-center bg-[#23B349] rounded-full">
              <MoveUpRight className="text-white w-6 h-6" />
            </div>
            <p className="font-outfit font-normal text-[24px] leading-[30px] tracking-[-0.004em] text-[#23B349] mt-2">
              {textPart1}
              <span className="font-medium">{bold1}</span>
              {textPart2}
              <span className="font-medium">{bold2}</span>
              {textPart3}
              <span className="font-medium">{bold3}</span>
            </p>
          </div>
        </div>

      </div>

      {/* Large Image */}
      <div className="w-full max-w-[1664px] mx-auto h-[656px] relative rounded-[48px] overflow-hidden">
        <Image
          src={mainImage}
          alt="Vita Food Complex Innovation Approach"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
