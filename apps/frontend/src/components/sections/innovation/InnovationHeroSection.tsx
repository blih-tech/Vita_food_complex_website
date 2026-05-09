import { useTranslations } from "next-intl";
import Image from "next/image";

export default function InnovationHeroSection({ content, locale }: { content?: any; locale?: string }) {
  const t = useTranslations("Innovation.hero");
  const lang = (locale || "en") as "en" | "am";
  const c = content?.[lang];

  const headline = c?.headline || t("headline");
  const subtitle = c?.subtitle || t("subtitle");
  const heroImage = c?.heroImage || "/assets/about/wheat-farming.png";

  return (
    <section className="relative w-full h-[1006px] flex flex-col items-center justify-center rounded-b-[48px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Wheat farming background"
          fill
          className="object-cover"
          priority
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1919f5] via-[#1a191999] to-transparent z-10" />
        <div className="absolute inset-0 bg-[#091619] opacity-20 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center gap-6 px-4 max-w-[1028px] mx-auto text-center mt-[100px]">
        <h1 className="font-outfit font-extrabold text-[80px] leading-[90%] tracking-[-0.02em] text-white whitespace-pre-line">
          {headline}
        </h1>
        <p className="font-funnel font-medium text-[24px] leading-none tracking-[-0.004em] text-white max-w-[676px]">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
