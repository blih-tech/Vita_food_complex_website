"use client";

import { useTranslations, useMessages } from "next-intl";
import Image from "next/image";
import { useState } from "react";

type TestimonialItem = {
  quote: string;
  author: string;
  role: string;
  image: string;
};

/** Figma 2120:1668: background fill_LMQ1JB + blur; title style_DLD472; pill Subtitle 2; cards layout_95L917 1039.75×339.72, gap 256px; image 314.56×339.72 r48; quote style_K7H3IO */
export default function TestimonialSection() {
  const t = useTranslations("About.testimonials");
  const messages = useMessages() as {
    About?: { testimonials?: { items?: TestimonialItem[] } };
  };
  const items = messages.About?.testimonials?.items ?? [];
  const titleAccent = t("titleAccent");

  const [active, setActive] = useState(0);
  const count = items.length || 1;

  const prev = () => setActive((i) => (i === 0 ? count - 1 : i - 1));
  const next = () => setActive((i) => (i + 1) % count);

  const current = items[active] ?? items[0];

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

      <div className="relative mx-auto flex max-w-[1981px] flex-col items-center">
        <div className="mb-8 flex justify-center rounded-[48px] px-4 py-2">
          <span className="text-center font-[family-name:var(--font-funnel-display)] text-[18px] font-medium tracking-[-0.004em] text-white md:text-[20px]">
            {t("label")}
          </span>
        </div>

        <h2 className="mb-12 text-center font-[family-name:var(--font-funnel-display)] leading-[0.85] tracking-[-0.02em] text-white md:mb-16">
          <span className="block text-[clamp(3.5rem,10vw,11.4375rem)]">
            {titleAccent.trim() ? (
              <>
                <span className="font-bold">{t("titleLead")}</span>{" "}
                <span className="font-extrabold">{titleAccent}</span>
              </>
            ) : (
              <span className="font-extrabold">{t("titleLead")}</span>
            )}
          </span>
        </h2>

        <div className="hidden w-full max-w-[1664px] flex-row flex-nowrap justify-start gap-8 overflow-x-auto pb-4 pt-2 lg:flex lg:gap-16 xl:gap-[clamp(4rem,12vw,16rem)]">
          {items.map((item, idx) => (
            <article
              key={`${item.author}-${idx}`}
              className="relative flex w-[min(1040px,calc(100vw-8rem))] max-w-[1040px] shrink-0 flex-col gap-6 rounded-[48px] border border-white/15 bg-white/5 p-6 lg:flex-row lg:items-stretch lg:gap-10 lg:p-8"
            >
              <div className="relative mx-auto h-[280px] w-[260px] shrink-0 overflow-hidden rounded-[48px] sm:h-[320px] sm:w-[300px] lg:mx-0 lg:h-[339.72px] lg:w-[314.56px]">
                <Image
                  src={item.image}
                  alt={item.author}
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
          ))}
        </div>

        <div className="w-full max-w-[720px] lg:hidden">
          {current ? (
            <article className="flex flex-col gap-8 rounded-[48px] border border-white/15 bg-white/5 p-6">
              <div className="relative mx-auto aspect-[315/340] w-full max-w-[315px] overflow-hidden rounded-[48px]">
                <Image
                  src={current.image}
                  alt={current.author}
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

        <div className="mt-10 flex justify-center gap-4 lg:mt-14">
          <button
            type="button"
            onClick={prev}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white hover:text-[#23B349]"
            aria-label={t("prev")}
          >
            ←
          </button>
          <button
            type="button"
            onClick={next}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white hover:text-[#23B349]"
            aria-label={t("next")}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
