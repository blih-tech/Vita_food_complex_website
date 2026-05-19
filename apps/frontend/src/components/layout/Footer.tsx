"use client";

import Image from "next/image";
import { Link } from "@frontend/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useMemo, useState } from "react";
import { useSettings } from "@/hooks/useSettings";
import api from "@/lib/api";

// Custom Social Icons since this version of Lucide doesn't include brand icons
function FacebookIcon({ className, size = 24 }: { className?: string; size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} width={size} height={size}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TwitterIcon({ className, size = 24 }: { className?: string; size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} width={size} height={size}>
      <path d="M22 4s-1 2.1-3 2.4c1.1.8 1.8 1.8 1.8 3 0 1.2-.7 2.1-1.8 3-.5 1.1-1.2 2-2.2 2.5-1 4.5-5 8-11 8-3.3 0-6.1-1-8-3 1.4.1 2.8-.2 4-1-2.2-.4-4.1-1.7-4.8-3.8.3.1.6.1.9.1.5 0 1-.1 1.4-.2-2.3-.5-4-2.5-4-4.9v-.1c.7.4 1.5.6 2.4.6-1.4-.9-2.3-2.4-2.3-4.1 0-.9.2-1.8.7-2.5 2.5 3.1 6.2 5.1 10.4 5.3-.2-.4-.3-.8-.3-1.3 0-2.6 2.1-4.7 4.7-4.7 1.4 0 2.6.6 3.4 1.5.9-.2 1.8-.5 2.6-1-.3.9-.9 1.6-1.7 2.1 1.1-.1 2.1-.4 3-.8z" />
    </svg>
  );
}

function InstagramIcon({ className, size = 24 }: { className?: string; size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} width={size} height={size}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon({ className, size = 24 }: { className?: string; size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} width={size} height={size}>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.14 1 12 1 12s0 3.86.42 5.58a2.78 2.78 0 0 0 1.94 2c1.71.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.86 23 12 23 12s0-3.86-.42-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  );
}

function LinkedinIcon({ className, size = 24 }: { className?: string; size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} width={size} height={size}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

// Custom TikTok icon
function TikTokIcon({ className, size = 24 }: { className?: string; size?: number }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
      width={size}
      height={size}
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   Types
   ───────────────────────────────────────────── */

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

/* ─────────────────────────────────────────────
   Reusable Components
   ───────────────────────────────────────────── */

const headingClass =
  "font-['Funnel_Display'] font-medium text-[#23B349] text-[16px] lg:text-[18px] tracking-tight";

const linkClass =
  "font-['Outfit'] text-white text-[13px] lg:text-[14px] leading-tight hover:text-[#90D152] transition-colors duration-300";

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div className="flex flex-col gap-5">
      <h4 className={headingClass}>{title}</h4>
      <nav className="flex flex-col gap-3">
        {links.map(({ label, href }, i) => (
          <Link key={`${href}-${i}`} href={href} className={linkClass}>
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Component
   ───────────────────────────────────────────── */

export default function Footer() {
  const t = useTranslations("Footer");
  const { settings } = useSettings();
  const locale = useLocale();
  const [products, setProducts] = useState<
    Array<{
      _id: string;
      slug: string;
      name: { en: string; am: string };
      category: "Biscuit" | "Flour";
      available?: boolean;
    }>
  >([]);

  useEffect(() => {
    api
      .get<
        Array<{
          _id: string;
          slug: string;
          name: { en: string; am: string };
          category: "Biscuit" | "Flour";
          available?: boolean;
        }>
      >("/products")
      .then((res) => {
        const items = Array.isArray(res.data)
          ? res.data.filter((p) => p.available !== false)
          : [];
        setProducts(items);
      })
      .catch(() => setProducts([]));
  }, []);

  const [biscuitLinks, flourLinks] = useMemo(() => {
    const biscuits = products
      .filter((p) => p.category === "Biscuit")
      .map((p) => ({
        label: locale === "am" ? p.name.am || p.name.en : p.name.en,
        href: `/products/${p.slug}`,
      }));
    const flour = products
      .filter((p) => p.category === "Flour")
      .map((p) => ({
        label: locale === "am" ? p.name.am || p.name.en : p.name.en,
        href: `/products/${p.slug}`,
      }));
    return [biscuits, flour];
  }, [locale, products]);

  const socialLinks = [
    { icon: FacebookIcon, href: settings?.socialLinks?.facebook, label: "Facebook" },
    { icon: TwitterIcon, href: settings?.socialLinks?.twitter, label: "Twitter" },
    { icon: InstagramIcon, href: settings?.socialLinks?.instagram, label: "Instagram" },
    { icon: YoutubeIcon, href: settings?.socialLinks?.youtube, label: "YouTube" },
    { icon: TikTokIcon, href: settings?.socialLinks?.tiktok, label: "TikTok" },
    { icon: LinkedinIcon, href: settings?.socialLinks?.linkedin, label: "LinkedIn" },
  ];

  const footerLinks = {
    biscuits: biscuitLinks,
    flour: flourLinks,
    company: [
      { label: t("links.investors"), href: "/about#investors" },
      { label: t("links.aboutUs"), href: "/about" },
      { label: t("links.whyChooseUs"), href: "/why-choose-vita" },
    ],
    resources: [
      { label: t("links.research"), href: "/research" },
      { label: t("links.mediaKit"), href: "#" },
      { label: t("links.faqs"), href: "/faqs" },
    ],
  };
  return (
    <footer className="relative w-full bg-white flex flex-col pt-16 lg:pt-24">
      {/* CTA + Newsletter */}
      <div className="relative px-4 sm:px-6 lg:px-12 pt-16 z-20 pointer-events-none">
        <div className="w-full max-w-[1500px] mx-auto flex flex-col rounded-[40px] shadow-[0px_20px_40px_rgba(0,0,0,0.06)] pointer-events-auto">
          {/* CTA */}
          <div className="relative bg-[#90D152] rounded-t-[40px] pt-10 lg:pt-[50px] pb-10 lg:pb-[50px] px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-between">
            <div className="flex flex-col gap-3 max-w-[550px] z-10">
              <h2 className="font-['Outfit'] font-black text-[#404040] text-[40px] sm:text-[56px] lg:text-[76px] leading-[0.9] tracking-[-0.02em]">
                {t("ctaHeading")}
              </h2>

              <p className="font-['Funnel_Display'] text-[#404040] text-[15px] lg:text-[18px] opacity-90">
                {t("ctaSubtext")}
              </p>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full hover:scale-[1.02] transition"
              >
                <span className="text-[#23B349] text-[14px]">
                  {t("ctaButton")}
                </span>
                <span className="text-[#23B349] group-hover:translate-x-1 transition">
                  →
                </span>
              </Link>
            </div>

            <div className="hidden lg:block absolute right-0 bottom-0 w-[420px] h-[480px] xl:w-[480px] xl:h-[520px] pointer-events-none">
              <Image
                src="/assets/footer/cta-person.png"
                alt="Fun characters"
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-contain object-bottom"
              />
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-white rounded-b-[40px] py-8 px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
            <h3 className="font-['Outfit'] font-black text-[#23B349] text-[28px] lg:text-[52px]">
              {t("newsletterHeading")}
            </h3>

            <div className="flex items-center gap-4 w-full md:w-auto">
              <input
                type="email"
                placeholder={t("emailPlaceholder")}
                className="flex-1 border border-gray-300 rounded-full px-6 h-[56px] outline-none"
              />
              <button className="w-[56px] h-[56px] rounded-full bg-[#23B349] text-white hover:scale-105 transition">
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dark Section */}
      <div className="bg-[#404040] lg:-mt-[160px] rounded-t-[120px] flex flex-col items-center">
        {/* Links */}
        <div className="w-full max-w-[1400px] px-4 lg:px-20 pt-[120px] lg:pt-[240px] pb-12 flex flex-col lg:flex-row gap-16">
          {/* Contact */}
          <div className="flex flex-col gap-8 lg:w-[350px]">
            <Image
              src="/assets/footer/vita-logo-white.svg"
              alt="Vita Food Complex"
              width={120}
              height={120}
              className="w-auto h-auto"
            />

            <div className="text-white/90 text-[13px]">
              <p>{t("contactInfo.phone")}</p>
              <p>{t("contactInfo.email")}</p>
              <p>
                {t.rich("contactInfo.address", {
                  br: () => <br />,
                })}
              </p>
            </div>

            <div className="flex items-center gap-4">
              {socialLinks.map((social, i) => {
                const Icon = social.icon;
                if (!social.href) return null;
                return (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#23B349] hover:border-[#23B349] transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-10">
            <FooterColumn
              title={t("columns.biscuits")}
              links={footerLinks.biscuits}
            />
            <FooterColumn
              title={t("columns.flour")}
              links={footerLinks.flour}
            />
            <FooterColumn title={t("columns.company")} links={footerLinks.company} />
            <FooterColumn title={t("columns.resources")} links={footerLinks.resources} />
          </div>
        </div>

        {/* Giant Vita Background Logo */}
        <div className="w-full flex justify-center mt-10 lg:mt-4 relative z-0 pointer-events-none ">
          <Image
            src="/assets/footer/vita-footer.png"
            alt="Vita Background Logo"
            width={1200}
            height={500}
            className="w-full  h-auto object-contain"
            priority
          />
        </div>

        {/* Bottom */}
        <div className="relative w-full flex flex-col items-center -mt-16 lg:-mt-32 overflow-x-clip z-10">
          {/* Wave Graphic */}
          <div
            className="w-[2270.59px] h-[171.02px] shrink-0 bg-[url('/assets/footer/footer-wave-bg.png')] bg-[length:100%_100%] bg-center bg-no-repeat translate-x-[15.4px]"
            style={{
              filter: "drop-shadow(0px -14px 47px rgba(0, 71, 21, 0.2))",
            }}
          ></div>

          {/* White Bottom Strip */}
          <div className="w-full bg-white relative z-10 -mt-1">
            <div className="max-w-[1400px] mx-auto px-4 lg:px-20 pb-10 pt-2">
              {/* Divider */}
              <div className="w-full h-[1px] bg-[#23B349] opacity-40 mb-6"></div>

              {/* Links & Copy */}
              <div className="flex flex-col md:flex-row justify-between items-center text-[13px] font-['Outfit'] text-[#404040]">
                <div className="flex flex-wrap justify-center md:justify-start gap-8 mb-4 md:mb-0">
                  <Link
                    href="#"
                    className="hover:text-[#23B349] transition-colors"
                  >
                    {t("legal.terms")}
                  </Link>
                  <Link
                    href="#"
                    className="hover:text-[#23B349] transition-colors"
                  >
                    {t("legal.privacy")}
                  </Link>
                  <Link
                    href="#"
                    className="hover:text-[#23B349] transition-colors"
                  >
                    {t("legal.legalNotice")}
                  </Link>
                </div>
                <p>
                  {t("legal.copyright")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
