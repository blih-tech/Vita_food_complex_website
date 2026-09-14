"use client";

import { useEffect, useMemo, useRef } from "react";
import QuickFactSection from "./QuickFactSection";

type AnimatedQuickFactSectionProps = {
  content?: Record<string, unknown>;
  locale?: string;
};

type QuickFactItem = {
  id?: string;
  value?: string;
  value2?: string;
};

type LocalizedQuickFactContent = {
  facts?: QuickFactItem[];
};

type CounterTarget = {
  id: string;
  value: string;
};

type ParsedValue = {
  prefix: string;
  target: number;
  suffix: string;
  decimals: number;
};

type AnimatedNode = {
  element: HTMLElement;
  parsed: ParsedValue;
  targetText: string;
  originalInlineFontSize: string;
};

const FALLBACKS: CounterTarget[] = [
  { id: "skus", value: "+11" },
  { id: "flour", value: "60tn" },
  { id: "jobs", value: "+200" },
  { id: "biscuits", value: "2tn" },
  { id: "investment", value: "$1.4M" },
  { id: "investment-secondary", value: "Br210M" },
  { id: "factorySize", value: "22Km²" },
];

function parseValue(value: string): ParsedValue | null {
  const match = value.match(/[-+]?\d[\d,]*(?:\.\d+)?/);
  if (!match || match.index === undefined) return null;

  const numericText = match[0];
  const normalized = numericText.replace(/,/g, "").replace(/^\+/, "");
  const target = Number(normalized);
  if (!Number.isFinite(target)) return null;

  return {
    prefix: numericText.startsWith("+")
      ? `${value.slice(0, match.index)}+`
      : value.slice(0, match.index),
    target,
    suffix: value.slice(match.index + numericText.length),
    decimals: (normalized.split(".")[1] ?? "").length,
  };
}

function formatValue(parsed: ParsedValue, current: number, locale: string) {
  const formatted = new Intl.NumberFormat(locale === "am" ? "am-ET" : "en-US", {
    minimumFractionDigits: parsed.decimals,
    maximumFractionDigits: parsed.decimals,
  }).format(current);

  return `${parsed.prefix}${formatted}${parsed.suffix}`;
}

function getAvailableWidth(element: HTMLElement) {
  const parent = element.parentElement;
  if (!parent) return 0;

  const parentStyle = window.getComputedStyle(parent);
  const elementStyle = window.getComputedStyle(element);
  const paddingLeft = Number.parseFloat(parentStyle.paddingLeft) || 0;
  const paddingRight = Number.parseFloat(parentStyle.paddingRight) || 0;
  const marginLeft = Number.parseFloat(elementStyle.marginLeft) || 0;
  const marginRight = Number.parseFloat(elementStyle.marginRight) || 0;

  return Math.max(
    0,
    parent.clientWidth - paddingLeft - paddingRight - marginLeft - marginRight,
  );
}

function fitNumber(element: HTMLElement, targetText: string) {
  if (element.offsetParent === null) return;

  const computed = window.getComputedStyle(element);
  const baseFontSize = Number.parseFloat(computed.fontSize);
  if (!Number.isFinite(baseFontSize) || baseFontSize <= 0) return;

  const availableWidth = getAvailableWidth(element);
  if (availableWidth <= 0) return;

  const currentText = element.textContent;
  element.textContent = targetText;
  element.style.fontSize = `${baseFontSize}px`;
  element.style.whiteSpace = "nowrap";

  const measuredWidth = element.getBoundingClientRect().width;
  if (measuredWidth > availableWidth) {
    const ratio = Math.max(0.48, (availableWidth / measuredWidth) * 0.96);
    element.style.fontSize = `${Math.floor(baseFontSize * ratio * 10) / 10}px`;
  }

  element.textContent = currentText;
}

function findLeafElements(root: HTMLElement, text: string) {
  return Array.from(root.querySelectorAll<HTMLElement>("div, span")).filter(
    (element) =>
      element.children.length === 0 && element.textContent?.trim() === text.trim(),
  );
}

export default function AnimatedQuickFactSection({
  content,
  locale = "en",
}: AnimatedQuickFactSectionProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const animationFramesRef = useRef<number[]>([]);
  const timersRef = useRef<number[]>([]);

  const targets = useMemo(() => {
    const contentRecord = content as
      | Record<string, LocalizedQuickFactContent>
      | undefined;
    const localized = contentRecord?.[locale] ?? contentRecord?.en;
    const facts = Array.isArray(localized?.facts) ? localized.facts : [];

    const valueFor = (id: string, fallback: string) =>
      facts.find((fact) => fact.id === id)?.value ?? fallback;
    const secondaryInvestment =
      facts.find((fact) => fact.id === "investment")?.value2 ?? "Br210M";

    const values: CounterTarget[] = [
      { id: "skus", value: valueFor("skus", "+11") },
      { id: "flour", value: valueFor("flour", "60tn") },
      { id: "jobs", value: valueFor("jobs", "+200") },
      { id: "biscuits", value: valueFor("biscuits", "2tn") },
      { id: "investment", value: valueFor("investment", "$1.4M") },
      { id: "factorySize", value: valueFor("factorySize", "22Km²") },
    ];

    if (secondaryInvestment.trim()) {
      values.push({
        id: "investment-secondary",
        value: secondaryInvestment,
      });
    }

    return values.length > 0 ? values : FALLBACKS;
  }, [content, locale]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    animationFramesRef.current.forEach((frame) =>
      window.cancelAnimationFrame(frame),
    );
    timersRef.current.forEach((timer) => window.clearTimeout(timer));
    animationFramesRef.current = [];
    timersRef.current = [];

    const animatedNodes: AnimatedNode[] = [];

    for (const target of targets) {
      const parsed = parseValue(target.value);
      if (!parsed) continue;

      for (const element of findLeafElements(root, target.value)) {
        animatedNodes.push({
          element,
          parsed,
          targetText: target.value,
          originalInlineFontSize: element.style.fontSize,
        });
      }
    }

    const resize = () => {
      for (const node of animatedNodes) {
        node.element.style.fontSize = node.originalInlineFontSize;
        fitNumber(node.element, node.targetText);
      }
    };

    resize();
    window.addEventListener("resize", resize);

    const startAnimations = () => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      animatedNodes.forEach((node, index) => {
        fitNumber(node.element, node.targetText);

        if (reducedMotion) {
          node.element.textContent = node.targetText;
          return;
        }

        node.element.textContent = formatValue(node.parsed, 0, locale);
        const duration = node.parsed.target >= 1_000_000 ? 2400 : 1650;
        const delay = Math.min(index * 45, 240);

        const timer = window.setTimeout(() => {
          let startedAt: number | null = null;

          const tick = (timestamp: number) => {
            if (startedAt === null) startedAt = timestamp;
            const progress = Math.min((timestamp - startedAt) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            node.element.textContent = formatValue(
              node.parsed,
              node.parsed.target * eased,
              locale,
            );

            if (progress < 1) {
              const frame = window.requestAnimationFrame(tick);
              animationFramesRef.current.push(frame);
            } else {
              node.element.textContent = node.targetText;
              fitNumber(node.element, node.targetText);
            }
          };

          const frame = window.requestAnimationFrame(tick);
          animationFramesRef.current.push(frame);
        }, delay);

        timersRef.current.push(timer);
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimations();
          observer.disconnect();
        }
      },
      { threshold: 0.18 },
    );

    observer.observe(root);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", resize);
      animationFramesRef.current.forEach((frame) =>
        window.cancelAnimationFrame(frame),
      );
      timersRef.current.forEach((timer) => window.clearTimeout(timer));
    };
  }, [locale, targets]);

  return (
    <div ref={rootRef}>
      <QuickFactSection content={content} locale={locale} />
    </div>
  );
}
