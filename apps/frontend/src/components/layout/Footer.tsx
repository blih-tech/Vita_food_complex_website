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
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} width={size} height={size}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TwitterIcon({ className, size = 24 }: { className?: string; size?: number }) {
  // Use X logo instead of old Twitter bird to match the image
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} width={size} height={size}>
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  );
}

function InstagramIcon({ className, size = 24 }: { className?: string; size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} width={size} height={size}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon({ className, size = 24 }: { className?: string; size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} width={size} height={size}>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.14 1 12 1 12s0 3.86.42 5.58a2.78 2.78 0 0 0 1.94 2c1.71.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.86 23 12 23 12s0-3.86-.42-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  );
}

function TikTokIcon({ className, size = 24 }: { className?: string; size?: number }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
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
  "font-['Outfit'] font-medium text-[#23B349] text-[16px] mb-4 tracking-tight";

const linkClass =
  "font-['Outfit'] text-white/90 text-[12px] leading-tight hover:text-[#90D152] transition-colors duration-300";

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div className="flex flex-col mb-8">
      <h4 className={headingClass}>{title}</h4>
      <nav className="flex flex-col gap-2.5">
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
  ];

  const footerLinks = {
    biscuits: biscuitLinks,
    flour: flourLinks,
    company: [
      { label: "Investors", href: "/about#investors" },
      { label: "About Us", href: "/about" },
      { label: "Why Choose Us", href: "/why-choose-vita" },
    ],
    peoplePlanet: [
      { label: "Experiences", href: "/people-planet#experiences" },
      { label: "Sustainability", href: "/sustainability" },
      { label: "Community", href: "/people-planet#community" },
      { label: "Innovation", href: "/innovation" },
      { label: "We Care for All®", href: "/we-care" },
    ],
    resources: [
      { label: "Research", href: "/research" },
      { label: "Media Kit", href: "#" },
      { label: "FAQs", href: "/faqs" },
    ],
    whatsNew: [
      { label: "News & Articles", href: "/news" },
      { label: "Updates", href: "/news" },
    ],
  };

  return (
    <footer className="relative w-full bg-white flex flex-col pt-0">
      {/* Newsletter Section */}
      <div className="relative z-20 pointer-events-none w-full bg-white pb-6 rounded-b-[40px] shadow-[0px_20px_40px_rgba(0,0,0,0.06)]">
        <div className="w-full max-w-[1500px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 pointer-events-auto px-4 sm:px-8 lg:px-[120px] py-6 lg:py-10">
          <h3 className="font-['Outfit'] font-black text-[#23B349] text-[28px] lg:text-[46px] xl:text-[54px] tracking-tight">
            Get the Latest News & Updates...
          </h3>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full lg:w-[320px] border border-gray-300 rounded-full px-6 h-[52px] outline-none text-[15px] text-[#404040]"
            />
            <button className="w-[52px] h-[52px] shrink-0 rounded-full bg-[#23B349] text-white flex items-center justify-center hover:scale-105 transition">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Dark Section */}
      <div className="bg-[#404040] flex flex-col items-center -mt-16 pt-24 pb-0 z-10 relative">
        {/* Links */}
        <div className="w-full max-w-[1400px] px-4 sm:px-8 lg:px-20 pt-10 pb-4 flex flex-col lg:flex-row gap-16 lg:gap-32">
          {/* Contact */}
          <div className="flex flex-col gap-6 lg:w-[350px]">
            <Image
              src="/assets/footer/vita-logo-white.svg"
              alt="Vita Food Complex"
              width={160}
              height={80}
              className="w-auto h-auto object-contain"
            />

            <div className="text-white text-[13px] leading-[1.8] font-['Outfit'] font-light">
              <p>+251 911 123 456</p>
              <p>info@vitafoodcomplex.com</p>
              <br />
              <p>Lideta SC, Woreda 02</p>
              <p>Addis Ababa, AA, Ethiopia</p>
            </div>

            <div className="flex items-center gap-3 mt-2">
              {socialLinks.map((social, i) => {
                const Icon = social.icon;
                if (!social.href && !['Facebook', 'Twitter', 'Instagram', 'YouTube', 'TikTok'].includes(social.label)) return null;
                return (
                  <a
                    key={i}
                    href={social.href || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[38px] h-[38px] rounded-full border border-white flex items-center justify-center text-white hover:bg-[#23B349] hover:border-[#23B349] transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-0">
            {/* Column 1 */}
            <div>
              <FooterColumn title="Biscuits" links={footerLinks.biscuits} />
            </div>

            {/* Column 2 */}
            <div>
              <FooterColumn title="Flour" links={footerLinks.flour} />
              <FooterColumn title="People & Planet" links={footerLinks.peoplePlanet} />
            </div>

            {/* Column 3 */}
            <div>
              <FooterColumn title="Company" links={footerLinks.company} />
              <FooterColumn title="Resources" links={footerLinks.resources} />
              <FooterColumn title="What's New" links={footerLinks.whatsNew} />
            </div>
          </div>
        </div>

        {/* Giant Vita Background Logo */}
        <div className="w-full relative z-0 pointer-events-none mt-4 lg:mt-8 px-0 overflow-hidden">
          <Image
            src="/assets/footer/vita-footer.png"
            alt="Vita Background Logo"
            width={1920}
            height={800}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* Bottom */}
        <div className="relative w-full flex flex-col items-center -mt-8 lg:-mt-[110px] overflow-x-clip z-10">
          {/* Wave Graphic */}
          <div
            className="w-[2270.59px] h-[171.02px] shrink-0 bg-[url('/assets/footer/footer-wave-bg.png')] bg-[length:100%_100%] bg-center bg-no-repeat translate-x-[15.4px]"
            style={{
              filter: "drop-shadow(0px -14px 47px rgba(0, 71, 21, 0.2))",
            }}
          ></div>

          {/* White Bottom Strip */}
          <div className="w-full bg-white relative z-10 -mt-1">
            <div className="max-w-[1400px] mx-auto px-4 lg:px-20 pb-8 pt-0">
              {/* Divider */}
              <div className="w-full h-[1px] bg-[#23B349] mb-4"></div>

              {/* Links & Copy */}
              <div className="flex flex-col md:flex-row justify-between items-center text-[11px] lg:text-[12px] font-['Outfit'] font-light text-[#404040]">
                <div className="flex flex-wrap justify-center md:justify-start gap-6 lg:gap-10 mb-4 md:mb-0">
                  <Link
                    href="#"
                    className="hover:text-[#23B349] transition-colors"
                  >
                    Terms and Conditions
                  </Link>
                  <Link
                    href="#"
                    className="hover:text-[#23B349] transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="#"
                    className="hover:text-[#23B349] transition-colors"
                  >
                    Legal Notice
                  </Link>
                </div>
                <p>
                  © {new Date().getFullYear()} Vita Food Complex. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
