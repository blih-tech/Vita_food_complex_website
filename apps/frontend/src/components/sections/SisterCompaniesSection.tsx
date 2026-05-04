"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@frontend/navigation";
import { useEffect, useRef, useState } from "react";

/**
 * Figma 2066:3484 "Biscuit brand": column, center, gap 31.92px, width 681;
 * heading + scroll (2066:3488 1280.87×365.11, overflow-x) + caption + Frame 225.
 * Figma 2201:8936 "Belayab groups": row, align center, gap 200px.
 */
const SCROLL_GAP_PX = 200;

type BrandAltKey =
  | "belayabGroup"
  | "motors"
  | "cables"
  | "goldenTulip"
  | "lewis"
  | "foods"
  | "limestone";

type LogoSlot = {
  kind: "logo";
  src: string;
  altKey: BrandAltKey;
  boxClass: string;
};

const SCROLL_SLOTS: (LogoSlot | { kind: "longTeaCard" })[] = [
  {
    kind: "logo",
    src: "/assets/sister/belayab.png",
    altKey: "belayabGroup",
    boxClass: "relative h-[min(146px,26vw)] w-[min(600px,92vw)] shrink-0 snap-start",
  },
  {
    kind: "logo",
    src: "/assets/sister/motors.png",
    altKey: "motors",
    boxClass:
      "relative h-[200px] w-[200px] shrink-0 snap-start md:h-[234px] md:w-[234px]",
  },
  {
    kind: "logo",
    src: "/assets/sister/cables.png",
    altKey: "cables",
    boxClass:
      "relative h-[200px] w-[200px] shrink-0 snap-start md:h-[234px] md:w-[234px]",
  },
  { kind: "longTeaCard" },
  {
    kind: "logo",
    src: "/assets/sister/golden-tulip.png",
    altKey: "goldenTulip",
    boxClass:
      "relative h-[220px] w-[220px] shrink-0 snap-start md:h-[240px] md:w-[240px]",
  },
  {
    kind: "logo",
    src: "/assets/sister/lewis.png",
    altKey: "lewis",
    boxClass:
      "relative h-[220px] w-[220px] shrink-0 snap-start md:h-[240px] md:w-[240px]",
  },
  {
    kind: "logo",
    src: "/assets/sister/foods.png",
    altKey: "foods",
    boxClass:
      "relative h-[220px] w-[220px] shrink-0 snap-start md:h-[240px] md:w-[240px]",
  },
  {
    kind: "logo",
    src: "/assets/sister/limestone.png",
    altKey: "limestone",
    boxClass: "relative h-[250px] w-[min(205px,48vw)] shrink-0 snap-start md:w-[205px]",
  },
];

export default function SisterCompaniesSection() {
  const t = useTranslations("About.sisterCompanies");
  const tBrands = useTranslations("About.sisterCompanies.brands");
  const tCompanies = useTranslations("About.sisterCompanies.companies");

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let lastTime = 0;
    const speed = 0.5; // pixels per frame

    const step = (time: number) => {
      if (lastTime !== 0 && !isPaused) {
        scrollContainer.scrollLeft += speed;
        // Reset to start if we've scrolled past the content
        if (
          scrollContainer.scrollLeft >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollContainer.scrollLeft = 0;
        }
      }
      lastTime = time;
      animationId = requestAnimationFrame(step);
    };

    animationId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  // Triple the slots for seamless infinite scroll
  const extendedSlots = [...SCROLL_SLOTS, ...SCROLL_SLOTS, ...SCROLL_SLOTS];

  return (
    <section className="relative z-10 flex flex-col items-center bg-white px-8 py-16 md:px-16 md:py-24 lg:px-[128px]">
      <div className="mx-auto flex w-full max-w-[681px] flex-col items-center gap-8 text-center">
        <span className="font-[family-name:var(--font-funnel-display)] text-[13.3px] font-medium leading-none tracking-[-0.004em] text-[#404040]">
          {t("label")}
        </span>
        <h2 className="font-[family-name:var(--font-outfit)] text-[32px] font-extrabold leading-[0.9] tracking-[-0.02em] text-[#23B349] md:text-[44px] lg:text-[53.2px]">
          {t("title")}
        </h2>
      </div>

      <div
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="mx-auto mt-8 w-full max-w-[1281px] snap-x snap-mandatory min-h-[280px] overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth [-webkit-overflow-scrolling:touch] md:min-h-[320px] lg:h-[365px] lg:min-h-[365px]"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div
          className="flex h-full w-max flex-row items-center px-4 py-6 md:px-6"
          style={{ gap: "clamp(40px, 15vw, 200px)" }}
        >
          {extendedSlots.map((slot, index) =>
            slot.kind === "longTeaCard" ? (
              <article
                key={`long-tea-card-${index}`}
                className="flex w-[min(400px,85vw)] shrink-0 snap-start flex-col gap-3 rounded-[20px] border border-[#E8E8E8] bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
              >
                <div className="relative mx-auto h-[74px] w-full max-w-[320px]">
                  <Image
                    src="/assets/sister/long-tea-logo.png"
                    alt={tCompanies("longTea")}
                    fill
                    className="object-contain"
                    sizes="320px"
                  />
                </div>
                <p className="text-center font-[family-name:var(--font-outfit)] text-[11px] font-normal leading-snug tracking-[-0.004em] text-[#404040] md:text-[12px]">
                  {t("longTeaCard.blurb")}
                </p>
                <Link
                  href="/contact"
                  className="mx-auto mt-1 inline-flex h-8 items-center justify-center rounded-full bg-[#23B349] px-5 font-[family-name:var(--font-funnel-display)] text-[12px] font-medium tracking-[-0.004em] text-white transition-colors hover:bg-[#1fa041] md:text-[13px]"
                >
                  {t("visitSite")}
                </Link>
              </article>
            ) : (
              <div key={`${slot.src}-${index}`} className={slot.boxClass}>
                <Image
                  src={slot.src}
                  alt={tBrands(slot.altKey)}
                  fill
                  className="object-contain object-center"
                  sizes={
                    slot.altKey === "belayabGroup"
                      ? "600px"
                      : slot.altKey === "limestone"
                        ? "205px"
                        : "240px"
                  }
                />
              </div>
            ),
          )}
        </div>
      </div>

      <div className="mx-auto mt-8 flex w-full max-w-[681px] flex-col items-center gap-8 text-center">
        <p className="max-w-[365px] font-[family-name:var(--font-funnel-display)] text-[13.3px] font-medium leading-relaxed tracking-[-0.004em] text-[#404040]">
          {t("description")}
        </p>
        <Link
          href="/gallery"
          className="inline-flex h-[37px] items-center justify-center gap-[10.64px] rounded-full bg-[#23B349] px-[21px] py-[10.64px] font-[family-name:var(--font-funnel-display)] text-[15.96px] font-medium tracking-[-0.004em] text-white transition-colors hover:bg-[#1fa041]"
        >
          <span>{t("cta")}</span>
          <span className="font-[family-name:var(--font-outfit)] text-[13.3px] font-normal leading-none tracking-[-0.004em]">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
