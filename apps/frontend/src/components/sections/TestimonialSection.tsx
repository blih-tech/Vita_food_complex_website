"use client";

import { useMessages, useTranslations } from "next-intl";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const AUTO_MS = 5000;
const LG_PX = 1024;

const TESTIMONIAL_AVATARS = [
  {
    src: "/assets/about/testimonial-abebe-avatar.svg",
    alt: "Portrait avatar of Abebe Kebede",
  },
  {
    src: "/assets/about/testimonial-sara-avatar.svg",
    alt: "Portrait avatar of Sara Tekle",
  },
] as const;

type TestimonialItem = {
  quote: string;
  author: string;
  role: string;
  image?: string;
};

function getTestimonialAvatar(index: number) {
  return TESTIMONIAL_AVATARS[index % TESTIMONIAL_AVATARS.length];
}

export default function TestimonialSection({
  content,
  locale,
}: {
  content?: any;
  locale?: string;
}) {
  const t = useTranslations("About.testimonials");
  const messages = useMessages() as {
    About?: { testimonials?: { items?: TestimonialItem[] } };
  };

  const c = content?.[locale as string] || content?.en;
  const items: TestimonialItem[] =
    (c?.items && c.items.length > 0 ? c.items : null) ??
    messages.About?.testimonials?.items ??
    [];
  const titleAccent = c?.titleAccent || t("titleAccent");

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const desktopScrollerRef = useRef<HTMLDivElement>(null);
  const count = items.length;
  const current = items[active] ?? items[0];
  const activeAvatar = getTestimonialAvatar(active);

  const scrollDesktopToIndex = useCallback((index: number) => {
    const scroller = desktopScrollerRef.current;
    if (!scroller || window.innerWidth < LG_PX) return;

    const target = scroller.children.item(index) as HTMLElement | null;
    if (!target) return;

    const scrollerRect = scroller.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const targetLeft =
      targetRect.left -
      scrollerRect.left +
      scroller.scrollLeft -
      (scroller.clientWidth - target.clientWidth) / 2;

    scroller.scrollTo({
      left: Math.max(0, targetLeft),
      behavior: "smooth",
    });
  }, []);

  const move = useCallback(
    (direction: -1 | 1) => {
      if (count < 2) return;
      setActive((previous) => (previous + direction + count) % count);
    },
    [count],
  );

  const prev = useCallback(() => move(-1), [move]);
  const next = useCallback(() => move(1), [move]);

  useEffect(() => {
    if (count === 0) {
      setActive(0);
      return;
    }

    setActive((index) => Math.min(index, count - 1));
  }, [count]);

  useEffect(() => {
    if (count === 0) return;

    const frame = window.requestAnimationFrame(() => {
      scrollDesktopToIndex(active);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [active, count, scrollDesktopToIndex]);

  useEffect(() => {
    if (count < 2 || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(next, AUTO_MS);
    return () => window.clearInterval(id);
  }, [count, next, paused]);

  return (
    <section
      className="relative overflow-hidden px-8 py-20 md:px-16 md:py-28 lg:px-[128px] lg:py-32"
      style={{
        background:
          "linear-gradient(180deg, rgba(55,255,0,0.25) 0%, rgba(35,179,73,0.95) 45%, rgb(35, 179, 73) 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 20% 30%, rgba(200, 241, 197, 0.25), transparent 55%)",
          filter: "blur(30px)",
        }}
      />

      <div
        className="relative mx-auto flex max-w-[1981px] flex-col items-center"
        onPointerEnter={() => setPaused(true)}
        onPointerLeave={() => setPaused(false)}
      >
        <div className="mb-8 flex justify-center rounded-[48px] px-4 py-2">
          <span className="text-center font-[family-name:var(--font-funnel-display)] text-[18px] font-medium tracking-[-0.004em] text-white md:text-[20px]">
            {c?.label || t("label")}
          </span>
        </div>

        <h2 className="mb-12 text-center font-[family-name:var(--font-funnel-display)] leading-[0.85] tracking-[-0.02em] text-white md:mb-16">
          <span className="block text-[clamp(3.5rem,10vw,11.4375rem)]">
            {titleAccent.trim() ? (
              <>
                <span className="font-bold">{c?.titleLead || t("titleLead")}</span>{" "}
                <span className="font-extrabold">{titleAccent}</span>
              </>
            ) : (
              <span className="font-extrabold">{c?.titleLead || t("titleLead")}</span>
            )}
          </span>
        </h2>

        <div
          ref={desktopScrollerRef}
          className="hidden w-full max-w-[1664px] snap-x snap-mandatory flex-row flex-nowrap justify-start gap-8 overflow-x-auto scroll-smooth pb-4 pt-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:flex lg:gap-16"
          aria-live="polite"
        >
          {items.map((item, idx) => {
            const avatar = getTestimonialAvatar(idx);

            return (
              <article
                key={`${item.author}-${idx}`}
                className="relative flex w-[min(1040px,calc(100vw-8rem))] max-w-[1040px] shrink-0 snap-center flex-col gap-6 rounded-[48px] border border-white/15 bg-white/5 p-6 lg:flex-row lg:items-stretch lg:gap-10 lg:p-8"
                aria-current={active === idx ? "true" : undefined}
              >
                <div className="relative mx-auto h-[280px] w-[260px] shrink-0 overflow-hidden rounded-[48px] bg-white/10 sm:h-[320px] sm:w-[300px] lg:mx-0 lg:h-[339.72px] lg:w-[314.56px]">
                  <Image
                    src={avatar.src}
                    alt={avatar.alt}
                    fill
                    className="object-cover"
                    sizes="315px"
                  />
                </div>

                <div className="flex min-w-0 flex-1 flex-col justify-center gap-4 text-left">
                  <p className="font-[family-name:var(--font-funnel-display)] text-[22px] font-normal leading-none tracking-[-0.004em] text-white md:text-[28px] lg:text-[32px]">
                    {item.quote}
                  </p>
                  <div className="h-px w-full max-w-[671px] bg-[#777777]/80" />
                  <div>
                    <p className="font-[family-name:var(--font-outfit)] text-[16px] font-normal leading-snug tracking-[-0.004em] text-[#EAEAEA] md:text-[18px]">
                      <span className="font-semibold text-white">{item.author}</span>
                      <br />
                      {item.role}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="w-full max-w-[720px] lg:hidden">
          {current ? (
            <article className="flex flex-col gap-8 rounded-[48px] border border-white/15 bg-white/5 p-6">
              <div className="relative mx-auto aspect-[315/340] w-full max-w-[315px] overflow-hidden rounded-[48px] bg-white/10">
                <Image
                  src={activeAvatar.src}
                  alt={activeAvatar.alt}
                  fill
                  className="object-cover"
                  sizes="315px"
                />
              </div>

              <div className="text-left">
                <p className="mb-4 font-[family-name:var(--font-funnel-display)] text-[24px] font-normal leading-tight tracking-[-0.004em] text-white">
                  {current.quote}
                </p>
                <div className="mb-4 h-px w-full bg-[#777777]/80" />
                <p className="font-[family-name:var(--font-outfit)] text-[16px] text-[#EAEAEA]">
                  <span className="font-semibold text-white">{current.author}</span>
                  <br />
                  {current.role}
                </p>
              </div>
            </article>
          ) : null}
        </div>

        <div className="relative z-20 mt-10 flex justify-center gap-4 lg:mt-14">
          <button
            type="button"
            onClick={prev}
            disabled={count < 2}
            className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/40 text-white transition-all hover:bg-white hover:text-[#23B349] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:cursor-not-allowed disabled:opacity-40"
            aria-label={t("prev")}
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            onClick={next}
            disabled={count < 2}
            className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/40 text-white transition-all hover:bg-white hover:text-[#23B349] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:cursor-not-allowed disabled:opacity-40"
            aria-label={t("next")}
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
