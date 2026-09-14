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

type AnimatedNumberNode = {
  host: HTMLElement;
  numberElement: HTMLSpanElement;
  unitElement: HTMLSpanElement | null;
  parsed: ParsedValue;
  targetText: string;
  maxFontSize: number;
  minFontSize: number;
  originalStyle: string | null;
};

type LabelNode = {
  element: HTMLElement;
  maxFontSize: number;
  minFontSize: number;
  originalStyle: string | null;
};

type RestorableStyle = {
  element: HTMLElement;
  originalStyle: string | null;
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
    suffix: value.slice(match.index + numericText.length).trim(),
    decimals: (normalized.split(".")[1] ?? "").length,
  };
}

function formatNumber(parsed: ParsedValue, current: number, locale: string) {
  const formatted = new Intl.NumberFormat(locale === "am" ? "am-ET" : "en-US", {
    minimumFractionDigits: parsed.decimals,
    maximumFractionDigits: parsed.decimals,
  }).format(current);

  return `${parsed.prefix}${formatted}`;
}

function isVisible(element: HTMLElement) {
  return element.offsetParent !== null && element.clientWidth > 0;
}

function restoreStyle(element: HTMLElement, originalStyle: string | null) {
  if (originalStyle === null) {
    element.removeAttribute("style");
  } else {
    element.setAttribute("style", originalStyle);
  }
}

function findLeafElements(root: HTMLElement, text: string) {
  return Array.from(root.querySelectorAll<HTMLElement>("div, span")).filter(
    (element) =>
      element.children.length === 0 && element.textContent?.trim() === text.trim(),
  );
}

function getInnerWidth(element: HTMLElement) {
  const style = window.getComputedStyle(element);
  const paddingLeft = Number.parseFloat(style.paddingLeft) || 0;
  const paddingRight = Number.parseFloat(style.paddingRight) || 0;
  return Math.max(0, element.clientWidth - paddingLeft - paddingRight);
}

function fitNumber(node: AnimatedNumberNode) {
  const { host, numberElement, maxFontSize, minFontSize } = node;
  if (!isVisible(host)) return;

  const availableWidth = getInnerWidth(host);
  if (availableWidth <= 0) return;

  numberElement.style.fontSize = `${maxFontSize}px`;

  if (numberElement.scrollWidth <= availableWidth + 1) return;

  let low = minFontSize;
  let high = maxFontSize;
  let best = minFontSize;

  for (let index = 0; index < 12; index += 1) {
    const candidate = (low + high) / 2;
    numberElement.style.fontSize = `${candidate}px`;

    if (numberElement.scrollWidth <= availableWidth + 1) {
      best = candidate;
      low = candidate;
    } else {
      high = candidate;
    }
  }

  numberElement.style.fontSize = `${Math.floor(best * 10) / 10}px`;
}

function createAnimatedNumberNode(
  host: HTMLElement,
  parsed: ParsedValue,
  targetText: string,
): AnimatedNumberNode | null {
  const computed = window.getComputedStyle(host);
  const maxFontSize = Number.parseFloat(computed.fontSize);
  if (!Number.isFinite(maxFontSize) || maxFontSize <= 0) return null;

  const originalStyle = host.getAttribute("style");
  const textAlign = computed.textAlign;
  const alignItems = textAlign === "center" ? "center" : "flex-start";

  host.textContent = "";
  host.style.display = "flex";
  host.style.flexDirection = "column";
  host.style.alignItems = alignItems;
  host.style.justifyContent = "center";
  host.style.maxWidth = "100%";
  host.style.whiteSpace = "normal";
  host.style.lineHeight = "1";

  const numberElement = document.createElement("span");
  numberElement.dataset.quickFactNumber = "true";
  numberElement.style.display = "block";
  numberElement.style.maxWidth = "100%";
  numberElement.style.whiteSpace = "nowrap";
  numberElement.style.fontFamily = computed.fontFamily;
  numberElement.style.fontWeight = computed.fontWeight;
  numberElement.style.letterSpacing = computed.letterSpacing;
  numberElement.style.lineHeight = "0.92";
  numberElement.style.fontSize = `${maxFontSize}px`;
  numberElement.textContent = formatNumber(parsed, parsed.target, "en");
  host.appendChild(numberElement);

  let unitElement: HTMLSpanElement | null = null;
  if (parsed.suffix) {
    unitElement = document.createElement("span");
    unitElement.dataset.quickFactUnit = "true";
    unitElement.style.display = "block";
    unitElement.style.marginTop = `${Math.max(2, Math.round(maxFontSize * 0.06))}px`;
    unitElement.style.fontFamily = computed.fontFamily;
    unitElement.style.fontSize = `${Math.max(10, Math.min(18, maxFontSize * 0.3))}px`;
    unitElement.style.fontWeight = "700";
    unitElement.style.letterSpacing = "-0.01em";
    unitElement.style.lineHeight = "1";
    unitElement.style.whiteSpace = "nowrap";
    unitElement.textContent = parsed.suffix;
    host.appendChild(unitElement);
  }

  return {
    host,
    numberElement,
    unitElement,
    parsed,
    targetText,
    maxFontSize,
    minFontSize: Math.max(16, maxFontSize * 0.48),
    originalStyle,
  };
}

function styleVerticalBiscuitLabel(host: HTMLElement): RestorableStyle | null {
  const parent = host.parentElement;
  if (!parent) return null;

  const className = typeof parent.className === "string" ? parent.className : "";
  const isDesktopBiscuitSlot =
    className.includes("absolute") &&
    className.includes("bottom-0") &&
    className.includes("h-[90px]") &&
    className.includes("w-[162px]");

  if (!isDesktopBiscuitSlot) return null;

  const label = Array.from(parent.children).find(
    (child): child is HTMLElement => child instanceof HTMLElement && child.tagName === "P",
  );
  if (!label) return null;

  const originalStyle = label.getAttribute("style");
  label.dataset.quickFactVerticalLabel = "true";
  label.style.position = "absolute";
  label.style.left = "-27px";
  label.style.top = "34px";
  label.style.width = "90px";
  label.style.margin = "0";
  label.style.transform = "rotate(-90deg)";
  label.style.transformOrigin = "center";
  label.style.whiteSpace = "normal";
  label.style.textAlign = "center";
  label.style.fontSize = "10px";
  label.style.fontWeight = "600";
  label.style.lineHeight = "1.05";
  label.style.letterSpacing = "-0.01em";
  label.style.overflowWrap = "normal";

  return { element: label, originalStyle };
}

function createLabelNode(element: HTMLElement): LabelNode | null {
  const computed = window.getComputedStyle(element);
  const maxFontSize = Number.parseFloat(computed.fontSize);
  if (!Number.isFinite(maxFontSize) || maxFontSize <= 0) return null;

  const originalStyle = element.getAttribute("style");
  element.style.fontWeight = "600";
  element.style.whiteSpace = "normal";
  element.style.lineHeight = "1.15";
  element.style.maxWidth = "100%";
  element.style.overflowWrap = "break-word";

  return {
    element,
    maxFontSize,
    minFontSize: Math.max(9, maxFontSize * 0.72),
    originalStyle,
  };
}

function fitLabel(node: LabelNode) {
  const { element, maxFontSize, minFontSize } = node;
  if (!isVisible(element)) return;

  const parent = element.parentElement;
  if (!parent) return;

  const parentStyle = window.getComputedStyle(parent);
  const paddingLeft = Number.parseFloat(parentStyle.paddingLeft) || 0;
  const paddingRight = Number.parseFloat(parentStyle.paddingRight) || 0;
  const paddingBottom = Number.parseFloat(parentStyle.paddingBottom) || 0;
  const availableWidth = Math.max(
    0,
    parent.clientWidth - paddingLeft - paddingRight,
  );

  element.style.width = `${availableWidth}px`;
  element.style.fontSize = `${maxFontSize}px`;

  const parentRect = parent.getBoundingClientRect();
  const elementRect = element.getBoundingClientRect();
  const availableHeight = Math.max(
    0,
    parentRect.bottom - paddingBottom - elementRect.top,
  );

  if (element.scrollHeight <= availableHeight + 1) return;

  let low = minFontSize;
  let high = maxFontSize;
  let best = minFontSize;

  for (let index = 0; index < 10; index += 1) {
    const candidate = (low + high) / 2;
    element.style.fontSize = `${candidate}px`;

    if (element.scrollHeight <= availableHeight + 1) {
      best = candidate;
      low = candidate;
    } else {
      high = candidate;
    }
  }

  element.style.fontSize = `${Math.floor(best * 10) / 10}px`;
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

    const animatedNodes: AnimatedNumberNode[] = [];
    const verticalLabelNodes: RestorableStyle[] = [];

    for (const target of targets) {
      const parsed = parseValue(target.value);
      if (!parsed) continue;

      for (const host of findLeafElements(root, target.value)) {
        const node = createAnimatedNumberNode(host, parsed, target.value);
        if (!node) continue;
        animatedNodes.push(node);

        if (target.id === "biscuits") {
          const verticalLabel = styleVerticalBiscuitLabel(host);
          if (verticalLabel) verticalLabelNodes.push(verticalLabel);
        }
      }
    }

    const labelNodes = Array.from(root.querySelectorAll<HTMLElement>("p"))
      .filter((element) => element.dataset.quickFactVerticalLabel !== "true")
      .map((element) => createLabelNode(element))
      .filter((node): node is LabelNode => Boolean(node));

    const fitAll = () => {
      animatedNodes.forEach(fitNumber);
      labelNodes.forEach(fitLabel);
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
    for (const node of animatedNodes) {
      observedElements.add(node.host);
      if (node.host.parentElement) observedElements.add(node.host.parentElement);
    }
    for (const node of labelNodes) {
      if (node.element.parentElement) observedElements.add(node.element.parentElement);
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
        if (!isVisible(node.host)) return;

        fitNumber(node);

        if (reducedMotion) {
          node.numberElement.textContent = formatNumber(
            node.parsed,
            node.parsed.target,
            locale,
          );
          return;
        }

        node.numberElement.textContent = formatNumber(node.parsed, 0, locale);
        const duration = node.parsed.target >= 1_000_000 ? 2400 : 1650;
        const delay = Math.min(index * 45, 240);

        const timer = window.setTimeout(() => {
          let startedAt: number | null = null;

          const tick = (timestamp: number) => {
            if (startedAt === null) startedAt = timestamp;
            const progress = Math.min((timestamp - startedAt) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            node.numberElement.textContent = formatNumber(
              node.parsed,
              node.parsed.target * eased,
              locale,
            );

            if (progress < 1) {
              const frame = window.requestAnimationFrame(tick);
              animationFramesRef.current.push(frame);
            } else {
              node.numberElement.textContent = formatNumber(
                node.parsed,
                node.parsed.target,
                locale,
              );
              fitNumber(node);
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

      for (const node of animatedNodes) {
        node.host.textContent = node.targetText;
        restoreStyle(node.host, node.originalStyle);
      }
      for (const node of labelNodes) {
        restoreStyle(node.element, node.originalStyle);
      }
      for (const node of verticalLabelNodes) {
        delete node.element.dataset.quickFactVerticalLabel;
        restoreStyle(node.element, node.originalStyle);
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
