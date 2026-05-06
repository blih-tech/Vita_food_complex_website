"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { ABOUT_ASSETS } from "@frontend/constants/aboutAssets";

/** Figma 2080:3549 + 2080:3630: Who style_HP5ZJI 140 #E6E6E6; line 123.81×10 #E6E6E6; Are We style_B94LVJ 150/90% white; body style_L2HN6I 32px center max 1291; cards ~399×399 radius 24; icons ~47.67 in 44.7 padding
 *  Ellipse 46 / white cap between Sister companies and this section (curved top edge). */
export default function WhoAreWeSection() {
  const t = useTranslations("About");
  const tMv = useTranslations("About.mv");
  const { whoWe } = ABOUT_ASSETS;

  const cards = [
    {
      key: "mission",
      label: tMv("mission.label"),
      desc: tMv("mission.desc"),
      iconSrc: whoWe.icons.mission,
    },
    {
      key: "vision",
      label: tMv("vision.label"),
      desc: tMv("vision.desc"),
      iconSrc: whoWe.icons.vision,
    },
    {
      key: "values",
      label: tMv("values.label"),
      desc: tMv("values.desc"),
      iconSrc: whoWe.icons.values,
    },
    {
      key: "purpose",
      label: tMv("purpose.label"),
      desc: tMv("purpose.desc"),
      iconSrc: whoWe.icons.purpose,
    },
  ];

  return (
    <section className="relative z-0 isolate overflow-x-hidden bg-[#23B349] px-8 pb-16 md:px-16 md:pb-24 lg:px-[128px] lg:pb-32">
      {/* White ellipse (Figma Ellipse 46): curved seam from white sister block into green */}
      <div
        className="pointer-events-none absolute inset-x-0 top-[-1px] z-[1] h-[clamp(80px,12vw,160px)] bg-white"
        style={{
          borderBottomLeftRadius: '50% 100%',
          borderBottomRightRadius: '50% 100%',
          transform: 'scaleX(1.2)',
        }}
        aria-hidden
      />

      <div className="relative z-[2] mx-auto flex w-full max-w-[1664px] flex-col items-center pt-[clamp(6rem,12vw,10rem)]">
        <div className="mb-12 flex w-full max-w-[1540px] flex-row flex-wrap items-center justify-center gap-4 md:gap-5 lg:justify-between lg:gap-8">
          <div className="flex flex-row flex-wrap items-center justify-center gap-3 md:gap-4 lg:flex-nowrap">
            <h2 className="text-center font-[family-name:var(--font-funnel-display)] text-[clamp(40px,8vw,140px)] font-bold leading-none tracking-[-0.02em] text-[#E6E6E6]">
              {t("whoWeAre.who")}
            </h2>
            <div
              className="hidden h-[clamp(4px,0.7vw,10px)] w-[clamp(40px,8vw,123.81px)] shrink-0 rounded-full bg-[#E6E6E6] sm:block"
              aria-hidden
            />
            <h2 className="text-center font-[family-name:var(--font-funnel-display)] text-[clamp(45px,9vw,150px)] font-extrabold leading-[0.9] tracking-[-0.02em] text-white">
              {t("whoWeAre.areWe")}
            </h2>
          </div>
          <div className="relative h-[clamp(80px,8vw,120px)] w-[clamp(80px,8vw,120px)] shrink-0" aria-hidden>
            <Image
              src={whoWe.qualityBadge}
              alt=""
              fill
              className="object-contain"
              sizes="(max-width: 768px) 80px, 120px"
            />
          </div>
        </div>

        <p className="mb-16 max-w-[1291px] text-center font-[family-name:var(--font-outfit)] text-[clamp(18px,2.2vw,32px)] font-normal leading-normal tracking-[-0.004em] text-white">
          {t("whoWeAre.description")}
        </p>

        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-6">
          <div className="relative min-h-[400px] overflow-hidden rounded-[24px] bg-white lg:col-span-7 lg:min-h-[816px] lg:max-w-[821px]">
            <div className="relative z-10 flex max-w-[358px] flex-col gap-[22px] p-11 lg:absolute lg:left-[45px] lg:top-[44px]">
              <div className="relative flex h-[48px] w-[48px] shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#23B349]/15">
                <Image
                  src={whoWe.userCheckIcon}
                  alt=""
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <h3 className="font-[family-name:var(--font-funnel-display)] text-[24px] font-bold leading-none tracking-[-0.004em] text-[#23B349] md:text-[28px]">
                {tMv("newGen.title")}
              </h3>
              <p className="font-[family-name:var(--font-outfit)] text-[16px] leading-normal tracking-[-0.004em] text-[#8A8C8A] md:text-[20px]">
                {tMv("newGen.desc")}
              </p>
            </div>

            <div className="absolute bottom-0 right-0 h-[55%] w-[85%] lg:h-[60%] lg:w-[72%]">
              <Image
                src={whoWe.portrait}
                alt=""
                fill
                className="object-contain object-bottom"
                sizes="(min-400px) 100vw, 85vw"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-5">
            {cards.map((card) => (
              <div
                key={card.key}
                className="relative flex min-h-[280px] flex-col rounded-[24px] border border-[#FFFFFF]/80 bg-white p-11 sm:min-h-[320px] lg:min-h-[399px]"
              >
                <div className="relative mb-2 flex h-[48px] w-[48px] items-center justify-center rounded-xl bg-[#23B349]/10">
                  <Image
                    src={card.iconSrc}
                    alt=""
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <h4 className="mb-2 font-[family-name:var(--font-funnel-display)] text-[24px] font-bold leading-none tracking-[-0.004em] text-[#23B349] md:text-[28px]">
                  {card.label}
                </h4>
                <p className="font-[family-name:var(--font-outfit)] text-[16px] leading-normal tracking-[-0.004em] text-[#8A8C8A] md:text-[20px]">
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
