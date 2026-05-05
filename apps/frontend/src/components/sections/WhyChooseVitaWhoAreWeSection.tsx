"use client";

import { Bricolage_Grotesque } from "next/font/google";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@frontend/navigation";

/** Figma 486:2897 — card image fills fill_QLD9PN, fill_HNA7CM, fill_9ZH2QI (×2) */
const CARD_IMAGES = [
  "/assets/images/why-choose-vita/who-we-are-card-1.png",
  "/assets/images/why-choose-vita/who-we-are-card-2.png",
  "/assets/images/why-choose-vita/who-we-are-card-3.png",
  "/assets/images/why-choose-vita/who-we-are-card-3.png",
] as const;

const FEATURE_KEYS = ["trust", "supply", "innovation", "community"] as const;

/** Desktop stagger: layout_MW7PY9 absolute positions from Figma */
const CARD_LAYOUT = [
  { left: 0, top: 0, height: 540 },
  { left: 420, top: 60, height: 547 },
  { left: 840, top: 0, height: 540 },
  { left: 1260, top: 60, height: 547 },
] as const;

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["700"],
});

export default function WhyChooseVitaWhoAreWeSection() {
  const t = useTranslations("WhyChooseVita.whoWeAre");

  return (
    <section className="flex w-full flex-col items-center bg-white px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-8 lg:py-24 xl:px-[128px]">
      <div className="flex w-full max-w-[1664px] flex-col items-center gap-[clamp(40px,8vw,120px)]">
        {/* Who we are text — layout_2KGSD9: gap 32, max 1296 */}
        <div className="flex w-full max-w-[1296px] flex-col items-center gap-8">
          {/* Section Header — layout_A5LGL9 */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8 md:gap-12 lg:gap-[clamp(40px,8vw,123.81px)]">
            <span
              className={`${bricolageGrotesque.className} text-center text-[clamp(32px,8vw,150px)] font-bold leading-none tracking-[-0.02em] text-[#404040]`}
            >
              {t("headlineWho")}
            </span>
            {/* Line 1 — layout_9NSMKE: 123.81×0, stroke 10px #333733 */}
            <div
              className="h-[4px] sm:h-[clamp(6px,0.8vw,10px)] w-[60px] sm:w-[clamp(40px,8vw,123.81px)] shrink-0 rounded-none bg-[#333733]"
              aria-hidden
            />
            <span className="text-center font-[family-name:var(--font-funnel-display)] text-[clamp(32px,8vw,150px)] font-extrabold leading-[90%] tracking-[-0.02em] text-[#23B349]">
              {t("headlineAreWe")}
            </span>
          </div>

          {/* Section Description — layout_3MMBXZ: gap 78 */}
          <div className="flex w-full flex-col items-center gap-8 sm:gap-[clamp(32px,6vw,78px)]">
            <p className="w-full text-center font-[family-name:var(--font-outfit)] text-[clamp(16px,2.2vw,32px)] font-normal leading-relaxed sm:leading-normal tracking-[-0.004em] text-[rgba(16,15,15,0.9)] px-2">
              {t("fmcgIntro")}
            </p>

            <Link
              href="/about"
              className="inline-flex h-12 sm:h-14 min-h-[48px] sm:min-h-[56px] items-center justify-center gap-4 rounded-full bg-[#23B349] px-6 sm:px-8 py-3 sm:py-4 font-[family-name:var(--font-funnel-display)] text-[16px] sm:text-[18px] font-medium tracking-[-0.004em] text-white transition-colors hover:bg-[#1fa041] sm:text-[20px] lg:text-[24px]"
            >
              {t("moreAboutCta")}
            </Link>
          </div>
        </div>

        {/* Cards — Figma layout_MW7PY9; scroll on viewports &lt; 1664px to preserve geometry */}
        <div className="hidden w-full overflow-x-auto lg:block">
          <div className="relative mx-auto h-[607px] min-w-[1664px] max-w-[1664px]">
            {FEATURE_KEYS.map((key, index) => (
              <WhoWeAreCard
                key={key}
                title={t(`featureCards.${key}.title`)}
                description={t(`featureCards.${key}.description`)}
                imageSrc={CARD_IMAGES[index]}
                layout={CARD_LAYOUT[index]}
              />
            ))}
          </div>
        </div>

        <div className="grid w-full grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:hidden">
          {FEATURE_KEYS.map((key, index) => (
            <WhoWeAreCard
              key={key}
              title={t(`featureCards.${key}.title`)}
              description={t(`featureCards.${key}.description`)}
              imageSrc={CARD_IMAGES[index]}
              layout={null}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhoWeAreCard({
  title,
  description,
  imageSrc,
  layout,
}: {
  title: string;
  description: string;
  imageSrc: string;
  layout: (typeof CARD_LAYOUT)[number] | null;
}) {
  const heightPx = layout?.height ?? 540;

  const cardInner = (
    <>
      <div className="absolute left-4 top-[18px] h-[354px] w-[calc(100%-32px)] max-w-[372px] overflow-hidden rounded-2xl lg:left-4 lg:w-[372px]">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 372px"
        />
      </div>
      <div className="absolute left-[23px] right-[23px] top-[393px] flex w-auto max-w-[358px] flex-col items-stretch gap-0 text-center lg:left-[23px] lg:right-auto lg:w-[358px]">
        <h3 className="font-[family-name:var(--font-funnel-display)] text-[22px] font-bold leading-[144.3%] text-[#272726] sm:text-[24px] lg:text-[28px]">
          {title}
        </h3>
        <p className="font-[family-name:var(--font-outfit)] text-[18px] font-normal leading-[144.3%] text-[#272726] sm:text-[20px] lg:text-[22px]">
          {description}
        </p>
      </div>
    </>
  );

  if (layout) {
    return (
      <article
        className="overflow-hidden rounded-[24px] bg-[#F3F3F3] backdrop-blur-[16.57px]"
        style={{
          width: 404,
          height: heightPx,
          left: layout.left,
          top: layout.top,
          position: "absolute",
        }}
      >
        {cardInner}
      </article>
    );
  }

  return (
    <article className="relative mx-auto flex w-full flex-col overflow-hidden rounded-[24px] bg-[#F3F3F3] pb-8 backdrop-blur-[16.57px]">
      <div className="relative mx-4 mt-[18px] h-[220px] w-[calc(100%-32px)] shrink-0 overflow-hidden rounded-2xl sm:h-[240px] md:h-[300px]">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 404px"
        />
      </div>
      <div className="flex flex-col gap-2 px-6 pb-6 pt-8 text-center">
        <h3 className="font-[family-name:var(--font-funnel-display)] text-[22px] font-bold leading-[144.3%] text-[#272726] sm:text-[24px] lg:text-[28px]">
          {title}
        </h3>
        <p className="font-[family-name:var(--font-outfit)] text-[18px] font-normal leading-[144.3%] text-[#272726] sm:text-[20px] lg:text-[22px]">
          {description}
        </p>
      </div>
    </article>
  );
}
