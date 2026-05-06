"use client";

import Image from "next/image";
import { Link } from "@frontend/navigation";
import { useTranslations } from "next-intl";

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
        {links.map(({ label, href }) => (
          <Link key={label} href={href} className={linkClass}>
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
  const tProducts = useTranslations("Products");

  const footerLinks = {
    biscuits: [
      { label: tProducts("items.zoo.name"), id: "zoo" },
      { label: tProducts("items.chewata.name"), id: "chewata" },
      { label: tProducts("items.marie.name"), id: "marie" },
      { label: tProducts("items.marie-cream.name"), id: "marie-cream" },
      { label: tProducts("items.tafach-vanilla.name"), id: "tafach-vanilla" },
      { label: tProducts("items.oreo.name"), id: "oreo" },
      { label: tProducts("items.bora.name"), id: "bora" },
      { label: tProducts("items.cream.name"), id: "cream" },
      { label: tProducts("items.digestive.name"), id: "digestive" },
      { label: tProducts("items.glucose.name"), id: "glucose" },
      { label: tProducts("items.tea-biscuit.name"), id: "tea-biscuit" },
    ],
    flour: [
      { label: tProducts("items.all-purpose.name"), id: "all-purpose" },
      { label: tProducts("items.burger-flour.name"), id: "burger-flour" },
    ],
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

            <Image
              src="/assets/footer/social-icons.svg"
              alt="Social Media"
              width={280}
              height={40}
              className="w-auto h-auto"
            />
          </div>

          {/* Navigation */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-10">
            <FooterColumn
              title={t("columns.biscuits")}
              links={footerLinks.biscuits.map(b => ({ label: b.label, href: `/products/${b.id}` }))}
            />
            <FooterColumn
              title={t("columns.flour")}
              links={footerLinks.flour.map(f => ({ label: f.label, href: `/products/${f.id}` }))}
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
