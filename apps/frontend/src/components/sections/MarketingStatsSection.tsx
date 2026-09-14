"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type MarketingStatsSectionProps = {
  content?: Record<string, unknown>;
  locale?: string;
};

type QuickFactItem = {
  id?: string;
  value?: string;
  label?: string;
};

type LocalizedQuickFactContent = {
  label?: string;
  facts?: QuickFactItem[];
};

type ParsedCounter = {
  prefix: string;
  target: number;
  suffix: string;
  decimals: number;
};

type Metric = {
  id: "investment" | "biscuits" | "flour";
  value: string;
  label: string;
  featured?: boolean;
};

const FALLBACKS = {
  en: {
    eyebrow: "Vita in Numbers",
    heading: "Built to produce. Built to grow.",
    description:
      "A snapshot of the investment and production capacity behind Vita Food Complex.",
    metrics: {
      investment: {
        value: "423,566,605 Birr",
        label: "Total Investment",
      },
      biscuits: {
        value: "1,600 kg/hr",
        label: "Biscuit Production Capacity",
      },
      flour: {
        value: "100 T",
        label: "Flour Production Capacity",
      },
    },
  },
  am: {
    eyebrow: "ቪታ በቁጥር",
    heading: "ለማምረት የተገነባ። ለማደግ የተዘጋጀ።",
    description: "የቪታ ፉድ ኮምፕሌክስን የሚያንቀሳቅሱ የኢንቨስትመንትና የማምረት አቅም በአጭሩ።",
    metrics: {
      investment: {
        value: "423,566,605 ብር",
        label: "ጠቅላላ ኢንቨስትመንት",
      },
      biscuits: {
        value: "1,600 ኪ.ግ/ሰዓት",
        label: "የቢስኩት የማምረት አቅም",
      },
      flour: {
        value: "100 ቶን",
        label: "የዱቄት የማምረት አቅም",
      },
    },
  },
} as const;

function parseCounter(value: string): ParsedCounter | null {
  const match = value.match(/[-+]?\d[\d,]*(?:\.\d+)?/);
  if (!match || match.index === undefined) return null;

  const numericText = match[0];
  const normalized = numericText.replace(/,/g, "").replace(/^\+/, "");
  const target = Number(normalized);
  if (!Number.isFinite(target)) return null;

  const decimalPart = normalized.split(".")[1] ?? "";

  return {
    prefix: value.slice(0, match.index),
    target,
    suffix: value.slice(match.index + numericText.length),
    decimals: decimalPart.length,
  };
}

function AnimatedCounter({
  value,
  active,
  locale,
}: {
  value: string;
  active: boolean;
  locale: string;
}) {
  const parsed = useMemo(() => parseCounter(value), [value]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!parsed) return;

    if (!active) {
      setCurrent(0);
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCurrent(parsed.target);
      return;
    }

    const duration = parsed.target >= 1_000_000 ? 2200 : 1600;
    let frame = 0;
    let startedAt: number | null = null;

    const tick = (timestamp: number) => {
      if (startedAt === null) startedAt = timestamp;
      const elapsed = timestamp - startedAt;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCurrent(parsed.target * eased);

      if (progress < 1) {
        frame = window.requestAnimationFrame(tick);
      }
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [active, parsed]);

  if (!parsed) return <>{value}</>;

  const formatted = new Intl.NumberFormat(locale === "am" ? "am-ET" : "en-US", {
    minimumFractionDigits: parsed.decimals,
    maximumFractionDigits: parsed.decimals,
  }).format(current);

  return (
    <>
      {parsed.prefix}
      {formatted}
      {parsed.suffix.trim() ? (
        <span className="ml-2 inline-block align-middle text-[0.32em] font-semibold tracking-normal opacity-75 sm:ml-3">
          {parsed.suffix.trim()}
        </span>
      ) : null}
    </>
  );
}

export default function MarketingStatsSection({
  content,
  locale = "en",
}: MarketingStatsSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);
  const language = locale === "am" ? "am" : "en";
  const fallback = FALLBACKS[language];

  const contentRecord = content as
    | Record<string, LocalizedQuickFactContent>
    | undefined;
  const localizedContent =
    contentRecord?.[language] ?? contentRecord?.en ?? ({} as LocalizedQuickFactContent);
  const facts = Array.isArray(localizedContent.facts) ? localizedContent.facts : [];

  const findFact = (id: Metric["id"]) => facts.find((fact) => fact.id === id);

  const metrics: Metric[] = [
    {
      id: "investment",
      value: findFact("investment")?.value ?? fallback.metrics.investment.value,
      label: findFact("investment")?.label ?? fallback.metrics.investment.label,
      featured: true,
    },
    {
      id: "biscuits",
      value: findFact("biscuits")?.value ?? fallback.metrics.biscuits.value,
      label: findFact("biscuits")?.label ?? fallback.metrics.biscuits.label,
    },
    {
      id: "flour",
      value: findFact("flour")?.value ?? fallback.metrics.flour.value,
      label: findFact("flour")?.label ?? fallback.metrics.flour.label,
    },
  ];

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setActive(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.28 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[#0d2f1c] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#23B349]/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-28 left-1/4 h-72 w-72 rounded-full bg-[#EDB815]/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl sm:mb-12">
          <div className="mb-4 inline-flex rounded-full border border-white/15 bg-white/8 px-4 py-2 font-['Funnel_Display'] text-xs font-semibold uppercase tracking-[0.16em] text-[#F2C94C]">
            {localizedContent.label ?? fallback.eyebrow}
          </div>
          <h2 className="font-['Outfit'] text-4xl font-extrabold leading-[0.95] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            {fallback.heading}
          </h2>
          <p className="mt-5 max-w-2xl font-['Funnel_Display'] text-sm leading-6 text-white/68 sm:text-base sm:leading-7">
            {fallback.description}
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-12 lg:gap-5">
          {metrics.map((metric) => (
            <article
              key={metric.id}
              className={`group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.07] p-6 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 sm:p-8 ${
                metric.featured ? "lg:col-span-6" : "lg:col-span-3"
              }`}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              <p className="mb-8 font-['Funnel_Display'] text-xs font-semibold uppercase tracking-[0.15em] text-white/55 sm:mb-10">
                {metric.label}
              </p>
              <div
                className={`font-['Outfit'] font-extrabold leading-none tracking-[-0.055em] text-white ${
                  metric.featured
                    ? "text-[clamp(2.5rem,6.2vw,5.4rem)]"
                    : "text-[clamp(2.6rem,4.5vw,4.6rem)]"
                }`}
              >
                <AnimatedCounter value={metric.value} active={active} locale={language} />
              </div>
              <div className="mt-7 h-1 w-12 rounded-full bg-[#23B349] transition-all duration-300 group-hover:w-20" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
