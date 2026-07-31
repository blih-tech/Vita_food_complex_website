"use client";

import { useTranslations } from "next-intl";

type QuickFactSectionProps = {
  content?: Record<string, unknown>;
  locale?: string;
};

type QuickFactItem = {
  id?: string;
  value?: string;
  value2?: string;
  label?: string;
};

type LocalizedQuickFactContent = {
  label?: string;
  facts?: QuickFactItem[];
};

export default function QuickFactSection({
  content,
  locale,
}: QuickFactSectionProps) {
  const t = useTranslations("QuickFact");

  const contentRecord = content as
    | Record<string, LocalizedQuickFactContent>
    | undefined;

  const localizedContent: LocalizedQuickFactContent =
    contentRecord?.[locale ?? "en"] ?? contentRecord?.en ?? {};

  const facts: QuickFactItem[] = Array.isArray(localizedContent.facts)
    ? localizedContent.facts
    : [];

  const getFact = (id: string): QuickFactItem | undefined =>
    facts.find((fact) => fact.id === id);

  const getValue = (id: string, fallback: string): string =>
    getFact(id)?.value ?? fallback;

  const getSecondaryValue = (id: string, fallback: string): string =>
    getFact(id)?.value2 ?? fallback;

  const getLabel = (id: string, translationKey: string): string =>
    getFact(id)?.label ?? t(translationKey);

  const sectionLabel = localizedContent.label ?? t("label");

  return (
    <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24 xl:py-28">
      {/* Top decorative frame */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-0 h-10 w-full overflow-hidden sm:h-12 lg:h-[60px] xl:h-[72px]"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/quick-fact-frame.svg')",
            backgroundPosition: "top center",
            backgroundRepeat: "repeat-x",
            backgroundSize: "auto 100%",
          }}
        />
      </div>

      {/* Bottom decorative frame */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 z-0 h-10 w-full scale-y-[-1] overflow-hidden sm:h-12 lg:h-[60px] xl:h-[72px]"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/quick-fact-frame.svg')",
            backgroundPosition: "bottom center",
            backgroundRepeat: "repeat-x",
            backgroundSize: "auto 100%",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full px-4 sm:px-6 lg:px-8">
        {/* =========================================================
            LARGE DESKTOP

            The original 968px × 510px design is scaled by 1.2.
            This increases:
            - card dimensions
            - text sizes
            - gaps
            - border radii
            - SVG geometry
            - reverse-L clip
        ========================================================== */}
        <div className="mx-auto hidden h-[612px] w-full max-w-[1162px] xl:block">
          <div className="relative left-1/2 h-[510px] w-[968px] origin-top-left -translate-x-1/2 scale-[1.2]">
            {/* MERGED +11 / 2tn CARD */}
            <article className="group absolute left-0 top-0 h-[299px] w-[270px] transition-transform duration-300 hover:-translate-y-0.5">
              <svg
                aria-hidden="true"
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="none"
                viewBox="0 0 270 299"
              >
                <path
                  d="
                    M18 0
                    H252
                    Q270 0 270 18
                    V177
                    Q270 195 252 195
                    H190
                    A28 28 0 0 0 162 223
                    V281
                    Q162 299 144 299
                    H18
                    Q0 299 0 281
                    V18
                    Q0 0 18 0
                    Z
                  "
                  fill="#F3F3F3"
                />
              </svg>

              {/* +11 */}
              <div className="absolute left-0 top-0 flex h-[195px] w-full flex-col items-center justify-center px-5 text-center">
                <div className="font-['Outfit'] text-[76px] font-extrabold leading-[0.88] tracking-[-0.06em] text-[#20B94B] transition-transform duration-300 group-hover:scale-[1.025]">
                  {getValue("skus", "+11")}
                </div>

                <p className="mt-5 font-['Funnel_Display'] text-[14px] font-medium leading-tight text-[#383838]">
                  {getLabel("skus", "skus")}
                </p>
              </div>

              {/* 2tn */}
              <div className="absolute bottom-0 left-0 flex h-[90px] w-[162px] flex-col items-start justify-center pl-[44px] pr-3 text-left">
                <div className="font-['Outfit'] text-[54px] font-extrabold leading-[0.82] tracking-[-0.06em] text-[#EDB815] transition-transform duration-300 group-hover:scale-[1.025]">
                  {getValue("biscuits", "2tn")}
                </div>

                <p className="mt-3 whitespace-nowrap font-['Funnel_Display'] text-[13px] font-medium leading-none text-[#383838]">
                  {getLabel("biscuits", "biscuits")}
                </p>
              </div>
            </article>

            {/* FLOUR */}
            <article className="group absolute left-[284px] top-0 flex h-[195px] w-[334px] flex-col items-center justify-center rounded-[16px] bg-[#F3F3F3] px-6 text-center transition-transform duration-300 hover:-translate-y-0.5">
              <div className="font-['Outfit'] text-[76px] font-extrabold leading-[0.88] tracking-[-0.06em] text-[#20B94B] transition-transform duration-300 group-hover:scale-[1.025]">
                {getValue("flour", "60tn")}
              </div>

              <p className="mt-5 font-['Funnel_Display'] text-[14px] font-medium leading-tight text-[#383838]">
                {getLabel("flour", "flour")}
              </p>
            </article>

            {/* JOBS */}
            <article className="group absolute right-0 top-0 flex h-[195px] w-[336px] flex-col items-center justify-center rounded-[16px] bg-[#F3F3F3] px-6 text-center transition-transform duration-300 hover:-translate-y-0.5">
              <div className="font-['Outfit'] text-[76px] font-extrabold leading-[0.88] tracking-[-0.06em] text-[#20B94B] transition-transform duration-300 group-hover:scale-[1.025]">
                {getValue("jobs", "+200")}
              </div>

              <p className="mt-5 font-['Funnel_Display'] text-[14px] font-medium leading-tight text-[#383838]">
                {getLabel("jobs", "jobs")}
              </p>
            </article>

            {/* QUICK FACT */}
            <div className="absolute left-[191px] top-[209px] z-20 h-[90px] w-[266px]">
              <div className="flex h-full w-full items-center justify-center rounded-[16px] bg-[#20B94B] px-5 transition-transform duration-300 hover:-translate-y-0.5">
                <h2 className="whitespace-nowrap font-['Outfit'] text-[44px] font-extrabold leading-none tracking-[-0.045em] text-white">
                  {sectionLabel}
                </h2>
              </div>
            </div>

            {/* INVESTMENT */}
            <article className="group absolute left-[414px] top-[209px] h-[301px] w-[554px] overflow-hidden rounded-[16px] bg-[#F3F3F3] transition-transform duration-300 hover:-translate-y-0.5">
              {/*
                Reverse-L clip:
                104px keeps its bottom aligned with the Factory card.
              */}
              <div className="pointer-events-none absolute left-0 top-0 z-[1] h-[104px] w-[57px] rounded-br-[34px] bg-white" />

              <div className="relative z-10 flex h-full w-full flex-col px-8 pb-7 pt-6">
                {/* $1.4M */}
                <div className="ml-[50px] origin-left font-['Outfit'] text-[58px] font-extrabold leading-none tracking-[-0.06em] text-[#EDB815] transition-transform duration-300 group-hover:scale-[1.02]">
                  {getValue("investment", "$1.4M")}
                </div>

                {/* Br210M */}
                <div className="flex flex-1 flex-col items-center justify-center pb-1 pt-3 text-center">
                  <div className="font-['Outfit'] text-[82px] font-extrabold leading-[0.88] tracking-[-0.065em] text-[#20B94B] transition-transform duration-300 group-hover:scale-[1.025]">
                    {getSecondaryValue("investment", "Br210M")}
                  </div>

                  <p className="mt-5 font-['Funnel_Display'] text-[15px] font-medium leading-tight text-[#383838]">
                    {getLabel("investment", "investment")}
                  </p>
                </div>
              </div>
            </article>

            {/* FACTORY SIZE */}
            <article className="group absolute bottom-0 left-0 flex h-[197px] w-[400px] flex-col items-center justify-center rounded-[16px] bg-[#F3F3F3] px-6 text-center transition-transform duration-300 hover:-translate-y-0.5">
              <div className="font-['Outfit'] text-[72px] font-extrabold leading-[0.88] tracking-[-0.065em] text-[#20B94B] transition-transform duration-300 group-hover:scale-[1.025]">
                {getValue("factorySize", "22Km²")}
              </div>

              <p className="mt-5 font-['Funnel_Display'] text-[14px] font-medium leading-tight text-[#383838]">
                {getLabel("factorySize", "factorySize")}
              </p>
            </article>
          </div>
        </div>

        {/* =========================================================
            STANDARD DESKTOP

            Original dimensions are preserved for laptops where the
            enlarged 1162px layout would not fit.
        ========================================================== */}
        <div className="relative mx-auto hidden h-[510px] w-full max-w-[968px] lg:block xl:hidden">
          {/* MERGED +11 / 2tn CARD */}
          <article className="group absolute left-0 top-0 h-[299px] w-[270px] transition-transform duration-300 hover:-translate-y-0.5">
            <svg
              aria-hidden="true"
              className="absolute inset-0 h-full w-full"
              preserveAspectRatio="none"
              viewBox="0 0 270 299"
            >
              <path
                d="
                  M18 0
                  H252
                  Q270 0 270 18
                  V177
                  Q270 195 252 195
                  H190
                  A28 28 0 0 0 162 223
                  V281
                  Q162 299 144 299
                  H18
                  Q0 299 0 281
                  V18
                  Q0 0 18 0
                  Z
                "
                fill="#F3F3F3"
              />
            </svg>

            <div className="absolute left-0 top-0 flex h-[195px] w-full flex-col items-center justify-center px-5 text-center">
              <div className="font-['Outfit'] text-[76px] font-extrabold leading-[0.88] tracking-[-0.06em] text-[#20B94B]">
                {getValue("skus", "+11")}
              </div>

              <p className="mt-5 font-['Funnel_Display'] text-[14px] font-medium text-[#383838]">
                {getLabel("skus", "skus")}
              </p>
            </div>

            <div className="absolute bottom-0 left-0 flex h-[90px] w-[162px] flex-col items-start justify-center pl-[44px] pr-3 text-left">
              <div className="font-['Outfit'] text-[54px] font-extrabold leading-[0.82] tracking-[-0.06em] text-[#EDB815]">
                {getValue("biscuits", "2tn")}
              </div>

              <p className="mt-3 whitespace-nowrap font-['Funnel_Display'] text-[13px] font-medium text-[#383838]">
                {getLabel("biscuits", "biscuits")}
              </p>
            </div>
          </article>

          {/* FLOUR */}
          <article className="absolute left-[284px] top-0 flex h-[195px] w-[334px] flex-col items-center justify-center rounded-[16px] bg-[#F3F3F3] px-6 text-center">
            <div className="font-['Outfit'] text-[76px] font-extrabold leading-[0.88] tracking-[-0.06em] text-[#20B94B]">
              {getValue("flour", "60tn")}
            </div>

            <p className="mt-5 font-['Funnel_Display'] text-[14px] font-medium text-[#383838]">
              {getLabel("flour", "flour")}
            </p>
          </article>

          {/* JOBS */}
          <article className="absolute right-0 top-0 flex h-[195px] w-[336px] flex-col items-center justify-center rounded-[16px] bg-[#F3F3F3] px-6 text-center">
            <div className="font-['Outfit'] text-[76px] font-extrabold leading-[0.88] tracking-[-0.06em] text-[#20B94B]">
              {getValue("jobs", "+200")}
            </div>

            <p className="mt-5 font-['Funnel_Display'] text-[14px] font-medium text-[#383838]">
              {getLabel("jobs", "jobs")}
            </p>
          </article>

          {/* QUICK FACT */}
          <div className="absolute left-[191px] top-[209px] z-20 h-[90px] w-[266px]">
            <div className="flex h-full w-full items-center justify-center rounded-[16px] bg-[#20B94B] px-5">
              <h2 className="whitespace-nowrap font-['Outfit'] text-[44px] font-extrabold leading-none tracking-[-0.045em] text-white">
                {sectionLabel}
              </h2>
            </div>
          </div>

          {/* INVESTMENT */}
          <article className="absolute left-[414px] top-[209px] h-[301px] w-[554px] overflow-hidden rounded-[16px] bg-[#F3F3F3]">
            <div className="pointer-events-none absolute left-0 top-0 z-[1] h-[104px] w-[57px] rounded-br-[34px] bg-white" />

            <div className="relative z-10 flex h-full w-full flex-col px-8 pb-7 pt-6">
              <div className="ml-[50px] font-['Outfit'] text-[58px] font-extrabold leading-none tracking-[-0.06em] text-[#EDB815]">
                {getValue("investment", "$1.4M")}
              </div>

              <div className="flex flex-1 flex-col items-center justify-center pb-1 pt-3 text-center">
                <div className="font-['Outfit'] text-[82px] font-extrabold leading-[0.88] tracking-[-0.065em] text-[#20B94B]">
                  {getSecondaryValue("investment", "Br210M")}
                </div>

                <p className="mt-5 font-['Funnel_Display'] text-[15px] font-medium text-[#383838]">
                  {getLabel("investment", "investment")}
                </p>
              </div>
            </div>
          </article>

          {/* FACTORY */}
          <article className="absolute bottom-0 left-0 flex h-[197px] w-[400px] flex-col items-center justify-center rounded-[16px] bg-[#F3F3F3] px-6 text-center">
            <div className="font-['Outfit'] text-[72px] font-extrabold leading-[0.88] tracking-[-0.065em] text-[#20B94B]">
              {getValue("factorySize", "22Km²")}
            </div>

            <p className="mt-5 font-['Funnel_Display'] text-[14px] font-medium text-[#383838]">
              {getLabel("factorySize", "factorySize")}
            </p>
          </article>
        </div>

        {/* =========================================================
            MOBILE / TABLET
        ========================================================== */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:hidden">
          <article className="flex min-h-[180px] flex-col items-center justify-center rounded-[20px] bg-[#F3F3F3] px-5 py-7 text-center">
            <div className="font-['Outfit'] text-[64px] font-extrabold leading-[0.88] tracking-[-0.06em] text-[#20B94B]">
              {getValue("skus", "+11")}
            </div>

            <p className="mt-5 font-['Funnel_Display'] text-sm font-medium text-[#383838]">
              {getLabel("skus", "skus")}
            </p>
          </article>

          <article className="flex min-h-[180px] flex-col items-center justify-center rounded-[20px] bg-[#F3F3F3] px-5 py-7 text-center">
            <div className="font-['Outfit'] text-[64px] font-extrabold leading-[0.88] tracking-[-0.06em] text-[#20B94B]">
              {getValue("flour", "60tn")}
            </div>

            <p className="mt-5 font-['Funnel_Display'] text-sm font-medium text-[#383838]">
              {getLabel("flour", "flour")}
            </p>
          </article>

          <article className="flex min-h-[180px] flex-col items-center justify-center rounded-[20px] bg-[#F3F3F3] px-5 py-7 text-center sm:col-span-2">
            <div className="font-['Outfit'] text-[64px] font-extrabold leading-[0.88] tracking-[-0.06em] text-[#20B94B]">
              {getValue("jobs", "+200")}
            </div>

            <p className="mt-5 font-['Funnel_Display'] text-sm font-medium text-[#383838]">
              {getLabel("jobs", "jobs")}
            </p>
          </article>

          <article className="flex min-h-[150px] flex-col items-center justify-center rounded-[20px] bg-[#F3F3F3] px-5 py-6 text-center">
            <div className="font-['Outfit'] text-[58px] font-extrabold leading-[0.88] tracking-[-0.06em] text-[#EDB815]">
              {getValue("biscuits", "2tn")}
            </div>

            <p className="mt-4 font-['Funnel_Display'] text-sm font-medium text-[#383838]">
              {getLabel("biscuits", "biscuits")}
            </p>
          </article>

          <div className="flex min-h-[150px] items-center justify-center rounded-[20px] bg-[#20B94B] px-5 py-6">
            <h2 className="whitespace-nowrap font-['Outfit'] text-[40px] font-extrabold leading-none tracking-[-0.045em] text-white">
              {sectionLabel}
            </h2>
          </div>

          <article className="flex min-h-[290px] flex-col rounded-[20px] bg-[#F3F3F3] px-6 py-8 sm:col-span-2">
            <div className="text-center font-['Outfit'] text-[56px] font-extrabold leading-none tracking-[-0.06em] text-[#EDB815] sm:text-left">
              {getValue("investment", "$1.4M")}
            </div>

            <div className="flex flex-1 flex-col items-center justify-center pt-8 text-center">
              <div className="font-['Outfit'] text-[68px] font-extrabold leading-[0.88] tracking-[-0.065em] text-[#20B94B]">
                {getSecondaryValue("investment", "Br210M")}
              </div>

              <p className="mt-5 font-['Funnel_Display'] text-sm font-medium text-[#383838]">
                {getLabel("investment", "investment")}
              </p>
            </div>
          </article>

          <article className="flex min-h-[210px] flex-col items-center justify-center rounded-[20px] bg-[#F3F3F3] px-5 py-7 text-center sm:col-span-2">
            <div className="font-['Outfit'] text-[62px] font-extrabold leading-[0.88] tracking-[-0.065em] text-[#20B94B]">
              {getValue("factorySize", "22Km²")}
            </div>

            <p className="mt-5 font-['Funnel_Display'] text-sm font-medium text-[#383838]">
              {getLabel("factorySize", "factorySize")}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}