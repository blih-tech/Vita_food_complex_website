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

type FitKind = "number" | "label";

type FittableNode = {
  element: HTMLElement;
  targetText: string;
  kind: FitKind;
  maxFontSize: number;
  minFontSize: number;
  originalInlineFontSize: string;
  originalInlineWhiteSpace: string;
};

type AnimatedNode = FittableNode & {
  parsed: ParsedValue;
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

function isVisible(element: HTMLElement) {
  return element.offsetParent !== null && element.clientWidth > 0;
}

function getAvailableWidth(element: HTMLElement) {
  const parent = element.parentElement;
  if (!parent) return element.clientWidth;

  const parentStyle = window.getComputedStyle(parent);
  const elementStyle = window.getComputedStyle(element);
  const paddingLeft = Number.parseFloat(parentStyle.paddingLeft) || 0;
  const paddingRight = Number.parseFloat(parentStyle.paddingRight) || 0;
  const marginLeft = Number.parseFloat(elementStyle.marginLeft) || 0;
  const marginRight = Number.parseFloat(elementStyle.marginRight) || 0;

  return Math.max(
    0,
    parent.clientWidth -
      paddingLeft -
      paddingRight -
      marginLeft -
      marginRight,
  );
}

function getAvailableHeight(element: HTMLElement) {
  const parent = element.parentElement;
  if (!parent) return Number.POSITIVE_INFINITY;

  const parentRect = parent.getBoundingClientRect();
  const elementRect = element.getBoundingClientRect();
  const parentStyle = window.getComputedStyle(parent);
  const paddingBottom = Number.parseFloat(parentStyle.paddingBottom) || 0;

  return Math.max(0, parentRect.bottom - paddingBottom - elementRect.top);
}

function fitsCurrentSize(node: FittableNode) {
  const { element, kind } = node;
  const availableWidth = getAvailableWidth(element);
  const intrinsicWidth = Math.max(element.scrollWidth, element.getBoundingClientRect().width);
  const widthFits = intrinsicWidth <= availableWidth + 1;

  if (kind === "number") return widthFits;

  const availableHeight = getAvailableHeight(element);
  const heightFits = element.scrollHeight <= availableHeight + 1;
  return widthFits && heightFits;
}

function fitNode(node: FittableNode) {
  const { element, targetText, kind, maxFontSize, minFontSize } = node;
  if (!isVisible(element)) return;

  const previousText = element.textContent;
  element.textContent = targetText;

  if (kind === "number") {
    element.style.whiteSpace = "nowrap";
  }

  element.style.fontSize = `${maxFontSize}px`;

  if (fitsCurrentSize(node)) {
    element.textContent = previousText;
    return;
  }

  let low = minFontSize;
  let high = maxFontSize;
  let best = minFontSize;

  for (let i = 0; i < 12; i += 1) {
    const candidate = (low + high) / 2;
    element.style.fontSize = `${candidate}px`;

    if (fitsCurrentSize(node)) {
      best = candidate;
      low = candidate;
    } else {
      high = candidate;
    }
  }

  element.style.fontSize = `${Math.floor(best * 10) / 10}px`;
  element.textContent = previousText;
}

function findLeafElements(root: HTMLElement, text: string) {
  return Array.from(root.querySelectorAll<HTMLElement>("div, span")).filter(
    (element) =>
      element.children.length === 0 && element.textContent?.trim() === text.trim(),
  );
}

function captureNode(
  element: HTMLElement,
  targetText: string,
  kind: FitKind,
): FittableNode | null {
  const computed = window.getComputedStyle(element);
  const maxFontSize = Number.parseFloat(computed.fontSize);
  if (!Number.isFinite(maxFontSize) || maxFontSize <= 0) return null;

  return {
    element,
    targetText,
    kind,
    maxFontSize,
    minFontSize:
      kind === "number"
        ? Math.max(12, maxFontSize * 0.32)
        : Math.max(8, maxFontSize * 0.48),
    originalInlineFontSize: element.style.fontSize,
    originalInlineWhiteSpace: element.style.whiteSpace,
  };
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
        const node = captureNode(element, target.value, "number");
        if (!node) continue;
        animatedNodes.push({ ...node, parsed });
      }
    }

    const labelNodes = Array.from(
      root.querySelectorAll<HTMLElement>("p"),
    )
      .map((element) =>
        captureNode(element, element.textContent?.trim() ?? "", "label"),
      )
      .filter((node): node is FittableNode => Boolean(node?.targetText));

    const allNodes: FittableNode[] = [...animatedNodes, ...labelNodes];

    const fitAll = () => {
      for (const node of allNodes) {
        fitNode(node);
      }
    };

    fitAll();

    const resizeObserver =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(() => {
            const frame = window.requestAnimationFrame(fitAll);
            animationFramesRef.current.push(frame);
          })
        : null;

    const observedElements = new Set<Element>([root]);
    for (const node of allNodes) {
      if (node.element.parentElement) {
        observedElements.add(node.element.parentElement);
      }
    }
    observedElements.forEach((element) => resizeObserver?.observe(element));

    const handleWindowResize = () => fitAll();
    window.addEventListener("resize", handleWindowResize);

    document.fonts?.ready.then(() => fitAll()).catch(() => undefined);

    const startAnimations = () => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      animatedNodes.forEach((node, index) => {
        if (!isVisible(node.element)) return;

        fitNode(node);

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
              fitNode(node);
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
      resizeObserver?.disconnect();
      window.removeEventListener("resize", handleWindowResize);

      for (const node of allNodes) {
        node.element.style.fontSize = node.originalInlineFontSize;
        node.element.style.whiteSpace = node.originalInlineWhiteSpace;
      }

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
