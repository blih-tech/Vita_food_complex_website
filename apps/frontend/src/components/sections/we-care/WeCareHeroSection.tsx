import { useTranslations } from "next-intl";
import Image from "next/image";

export default function WeCareHeroSection({ content, locale }: { content?: any; locale?: string }) {
  const t = useTranslations("WeCare.hero");
  const lang = (locale || "en") as "en" | "am";
  const c = content?.[lang];

  const label = c?.label || t("label");
  const title = c?.title || t("title");
  const subtitle = c?.subtitle || t("subtitle");
  const heroImage = c?.heroImage || "/assets/about/story-image.png";

  return (
    <section className="w-full max-w-[1920px] mx-auto px-[128px] pt-[286px] pb-[128px] flex flex-col gap-[128px]">
      
      {/* Hero Text Row */}
      <div className="flex flex-row justify-between items-end w-full max-w-[1664px] mx-auto gap-[67px]">
        {/* Left Side */}
        <div className="flex flex-col items-start gap-[14px] w-full max-w-[895px]">
          <h2 className="font-funnel font-medium text-[24px] leading-none tracking-[-0.004em] text-[#90D152] uppercase">
            {label}
          </h2>
          <h1 className="font-outfit font-extrabold text-[80px] leading-[90%] tracking-[-0.02em] text-[#23B349] whitespace-pre-line">
            {title}
          </h1>
        </div>

        {/* Right Side */}
        <p className="font-funnel font-medium text-[24px] leading-none tracking-[-0.004em] text-[#23B349] max-w-[564px]">
          {subtitle}
        </p>
      </div>

      {/* Large Image */}
      <div className="relative w-full max-w-[1664px] mx-auto h-[700px] rounded-[48px] overflow-hidden">
        <Image
          src={heroImage}
          alt="We Care For All Hero Background"
          fill
          className="object-cover"
          priority
        />
      </div>

    </section>
  );
}
