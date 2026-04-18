"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@frontend/navigation";

// CMS-driven data (will be fetched from API in production)
const biscuitItems = [
  "Zoo", "Chewata", "Marie", "Marie Cream", "Tafach",
  "Oreo", "Bora", "Cream", "Digestive", "Glucose", "Tea Biscuit",
];
const flourItems = ["All Purpose", "Burger"];
const peoplePlanetItems = [
  "Experiences", "Sustainability", "Community", "Innovation", "We Care for All®",
];
const companyItems = ["Investors", "About Us", "Why Choose Us"];
const resourcesItems = ["Research", "Media Kit", "FAQs"];
const whatsNewItems = ["News & Articles", "Updates"];

const socialIcons = [
  {
    label: "Facebook",
    d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
  },
  {
    label: "LinkedIn",
    d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
  },
  {
    label: "Instagram",
    d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  {
    label: "X",
    d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    label: "YouTube",
    d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
];

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="relative w-full bg-[#000500] overflow-hidden">

      {/* ── 1. Contact CTA ── */}
      <div className="relative px-32 pt-32">
        {/* Image extends above the green card */}
        <div className="relative rounded-[48px] bg-[#90D152]" style={{ overflow: "visible" }}>

          {/* Top content row */}
          <div className="relative flex items-end px-16 pt-16 min-h-[406px]">

            {/* Left: text + button */}
            <div className="flex flex-col gap-6 flex-1 pb-16 max-w-[780px]">
              <div className="flex flex-col gap-6">
                <h2
                  className="font-['Outfit'] font-extrabold text-[#404040]"
                  style={{ fontSize: 80, lineHeight: "0.9em", letterSpacing: "-0.02em" }}
                >
                  {t("cta.heading")}
                </h2>
                <p
                  className="font-['Funnel_Display'] font-medium text-[#404040] whitespace-pre-line max-w-[480px]"
                  style={{ fontSize: 20, lineHeight: "1.25em", letterSpacing: "-0.004em" }}
                >
                  {t("cta.subtext")}
                </p>
              </div>
              <Link
                href="#contact"
                className="inline-flex items-center gap-4 px-8 rounded-full bg-white self-start hover:bg-white/90 transition-colors"
                style={{ height: 56 }}
              >
                <span
                  className="font-['Funnel_Display'] font-medium text-[#23B349]"
                  style={{ fontSize: 24, lineHeight: "1.25em", letterSpacing: "-0.004em" }}
                >
                  {t("cta.button")}
                </span>
                <span className="font-['Outfit'] font-normal text-[#23B349]" style={{ fontSize: 20 }}>
                  →
                </span>
              </Link>
            </div>

            {/* Right: photo - absolute, overflows above */}
            <div
              className="absolute right-16 overflow-hidden rounded-[32px]"
              style={{ width: 450, height: 595, top: -120 }}
            >
              <Image
                src="/assets/cta/cta-main.png"
                alt=""
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Newsletter strip (white) */}
          <div
            className="bg-white px-16 py-16 flex items-end justify-between gap-8"
            style={{ borderRadius: "0 0 24px 24px" }}
          >
            <h3
              className="font-['Outfit'] font-bold text-[#23B349] flex-1"
              style={{ fontSize: 64, lineHeight: "0.96em", letterSpacing: "-0.02em" }}
            >
              {t("cta.newsletter.heading")}
            </h3>
            <div className="flex items-center gap-6 flex-shrink-0 self-end">
              <div
                className="flex items-center px-8 rounded-full border border-[#404040]"
                style={{ width: 402, height: 56 }}
              >
                <input
                  type="email"
                  placeholder={t("cta.newsletter.placeholder")}
                  className="bg-transparent w-full font-['Funnel_Display'] font-medium text-[#404040] placeholder:text-[#404040] placeholder:opacity-50 outline-none"
                  style={{ fontSize: 24, lineHeight: "1.25em" }}
                />
              </div>
              <button
                className="flex items-center justify-center rounded-full bg-[#23B349] flex-shrink-0 hover:bg-[#1a9a3d] transition-colors"
                style={{ width: 56, height: 56 }}
              >
                <span className="font-['Outfit'] font-normal text-white" style={{ fontSize: 20 }}>
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── 2. Footer Links ── */}
      <div className="px-32 pt-12">
        <div className="flex gap-6">

          {/* Logo + contact + social */}
          <div className="flex flex-col gap-6 flex-1 min-w-0">
            <div className="relative flex-shrink-0" style={{ width: 158, height: 158 }}>
              <Image
                src="/assets/brand/vita-logo.svg"
                alt="Vita Food Complex"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col gap-4">
              <span
                className="font-['Outfit'] font-medium text-white"
                style={{ fontSize: 16, lineHeight: "1em", letterSpacing: "-0.004em" }}
              >
                {t("contact.phone")}
              </span>
              <span
                className="font-['Outfit'] font-medium text-white"
                style={{ fontSize: 16, lineHeight: "1em", letterSpacing: "-0.004em" }}
              >
                {t("contact.email")}
              </span>
              <span
                className="font-['Outfit'] font-medium text-white whitespace-pre-line"
                style={{ fontSize: 16, lineHeight: "1.4em", letterSpacing: "-0.004em" }}
              >
                {t("contact.address")}
              </span>
            </div>
            <div className="flex items-center gap-3 mt-4">
              {socialIcons.map(({ label, d }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors flex-shrink-0"
                  style={{ width: 55, height: 55 }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                    <path d={d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Biscuits */}
          <div className="flex flex-col gap-6 flex-shrink-0" style={{ width: 257 }}>
            <h4
              className="font-['Funnel_Display'] font-medium text-[#23B349]"
              style={{ fontSize: 20, lineHeight: "1.25em", letterSpacing: "-0.004em" }}
            >
              {t("columns.biscuits")}
            </h4>
            <ul className="flex flex-col gap-4">
              {biscuitItems.map((item) => (
                <li key={item} className="opacity-80">
                  <Link
                    href="#"
                    className="font-['Outfit'] font-medium text-white hover:text-[#23B349] hover:opacity-100 transition-colors"
                    style={{ fontSize: 16, lineHeight: "1em", letterSpacing: "-0.004em" }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Flour + People & Planet */}
          <div className="flex flex-col gap-6 flex-shrink-0" style={{ width: 257 }}>
            <div className="flex flex-col gap-6">
              <h4
                className="font-['Funnel_Display'] font-medium text-[#23B349]"
                style={{ fontSize: 20, lineHeight: "1.25em", letterSpacing: "-0.004em" }}
              >
                {t("columns.flour")}
              </h4>
              <ul className="flex flex-col gap-4">
                {flourItems.map((item) => (
                  <li key={item} className="opacity-80">
                    <Link
                      href="#"
                      className="font-['Outfit'] font-medium text-white hover:text-[#23B349] hover:opacity-100 transition-colors"
                      style={{ fontSize: 16, lineHeight: "1em", letterSpacing: "-0.004em" }}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-6 mt-4">
              <h4
                className="font-['Funnel_Display'] font-medium text-[#23B349]"
                style={{ fontSize: 20, lineHeight: "1.25em", letterSpacing: "-0.004em" }}
              >
                {t("columns.peoplePlanet")}
              </h4>
              <ul className="flex flex-col gap-4">
                {peoplePlanetItems.map((item) => (
                  <li key={item} className="opacity-80">
                    <Link
                      href="#"
                      className="font-['Outfit'] font-medium text-white hover:text-[#23B349] hover:opacity-100 transition-colors"
                      style={{ fontSize: 16, lineHeight: "1em", letterSpacing: "-0.004em" }}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Company + Resources + What's New */}
          <div className="flex flex-col gap-6 flex-shrink-0" style={{ width: 257 }}>
            <div className="flex flex-col gap-6">
              <h4
                className="font-['Funnel_Display'] font-medium text-[#23B349]"
                style={{ fontSize: 20, lineHeight: "1.25em", letterSpacing: "-0.004em" }}
              >
                {t("columns.company")}
              </h4>
              <ul className="flex flex-col gap-4">
                {companyItems.map((item) => (
                  <li key={item} className="opacity-80">
                    <Link
                      href="#"
                      className="font-['Outfit'] font-medium text-white hover:text-[#23B349] hover:opacity-100 transition-colors"
                      style={{ fontSize: 16, lineHeight: "1em", letterSpacing: "-0.004em" }}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-6 mt-4">
              <h4
                className="font-['Funnel_Display'] font-medium text-[#23B349]"
                style={{ fontSize: 20, lineHeight: "1.25em", letterSpacing: "-0.004em" }}
              >
                {t("columns.resources")}
              </h4>
              <ul className="flex flex-col gap-4">
                {resourcesItems.map((item) => (
                  <li key={item} className="opacity-80">
                    <Link
                      href="#"
                      className="font-['Outfit'] font-medium text-white hover:text-[#23B349] hover:opacity-100 transition-colors"
                      style={{ fontSize: 16, lineHeight: "1em", letterSpacing: "-0.004em" }}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-6 mt-4">
              <h4
                className="font-['Funnel_Display'] font-medium text-[#23B349]"
                style={{ fontSize: 20, lineHeight: "1.25em", letterSpacing: "-0.004em" }}
              >
                {t("columns.whatsNew")}
              </h4>
              <ul className="flex flex-col gap-4">
                {whatsNewItems.map((item) => (
                  <li key={item} className="opacity-80">
                    <Link
                      href="#"
                      className="font-['Outfit'] font-medium text-white hover:text-[#23B349] hover:opacity-100 transition-colors"
                      style={{ fontSize: 16, lineHeight: "1em", letterSpacing: "-0.004em" }}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── 3. Bottom Section ── */}
      <div className="relative mt-8 overflow-hidden">
        {/* Decorative floating food images */}
        <div
          className="absolute rounded-2xl overflow-hidden"
          style={{
            right: 128 + 568 + 24,
            top: 0,
            width: 171,
            height: 149,
            boxShadow: "-10px 14px 34px 0px rgba(0,0,0,0.25)",
          }}
        >
          <Image src="/assets/products/product-2.png" alt="" fill className="object-cover" />
        </div>
        <div
          className="absolute rounded-2xl overflow-hidden"
          style={{
            right: 128 + 380 + 24,
            bottom: 120,
            width: 156,
            height: 136,
            boxShadow: "0px 24px 34px 0px rgba(0,0,0,0.25)",
          }}
        >
          <Image src="/assets/products/product-3.png" alt="" fill className="object-cover" />
        </div>
        <div
          className="absolute rounded-2xl overflow-hidden"
          style={{
            right: 128,
            top: 70,
            width: 265,
            height: 265,
            boxShadow: "0px 24px 34px 0px rgba(0,0,0,0.25)",
          }}
        >
          <Image src="/assets/products/product-1.png" alt="" fill className="object-cover" />
        </div>
        <div
          className="absolute rounded-xl overflow-hidden"
          style={{
            left: 0,
            top: 193,
            width: 208,
            height: 187,
            boxShadow: "-50px 44px 54px 0px rgba(0,0,0,0.4)",
          }}
        >
          <Image src="/assets/products/bridge-product-1.png" alt="" fill className="object-cover" />
        </div>

        {/* VITA watermark */}
        <div className="flex items-center justify-start px-32 py-12 pointer-events-none select-none" style={{ height: 380 }}>
          <span
            className="font-['Outfit'] font-bold"
            style={{
              fontSize: 220,
              lineHeight: 1,
              letterSpacing: "-0.02em",
              color: "#C0FF85",
            }}
          >
            VITA
          </span>
        </div>

        {/* White bottom bar */}
        <div
          className="relative bg-white px-32 py-6"
          style={{ boxShadow: "0px -14px 47px 0px rgba(0,71,21,0.2)" }}
        >
          <div className="border-t-2 border-[#23B349] pt-6 flex justify-between items-center">
            <div className="flex items-center" style={{ gap: 68 }}>
              <Link
                href="#"
                className="font-['Outfit'] font-normal text-[#404040] hover:text-[#23B349] transition-colors"
                style={{ fontSize: 14, lineHeight: "1em", letterSpacing: "-0.004em" }}
              >
                {t("legal.terms")}
              </Link>
              <Link
                href="#"
                className="font-['Outfit'] font-normal text-[#404040] hover:text-[#23B349] transition-colors"
                style={{ fontSize: 14, lineHeight: "1em", letterSpacing: "-0.004em" }}
              >
                {t("legal.privacy")}
              </Link>
              <Link
                href="#"
                className="font-['Outfit'] font-normal text-[#404040] hover:text-[#23B349] transition-colors"
                style={{ fontSize: 14, lineHeight: "1em", letterSpacing: "-0.004em" }}
              >
                {t("legal.legalNotice")}
              </Link>
            </div>
            <p
              className="font-['Outfit'] font-normal text-[#404040]"
              style={{ fontSize: 14, lineHeight: "1em", letterSpacing: "-0.004em" }}
            >
              {t("legal.copyright")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
