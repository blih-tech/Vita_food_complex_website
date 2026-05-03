"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

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
   Data
   ───────────────────────────────────────────── */

const footerLinks = {
  biscuits: [
    "Zoo",
    "Chewata",
    "Marie",
    "Marie Cream",
    "Tafach",
    "Oreo",
    "Bora",
    "Cream",
    "Digestive",
    "Glucose",
    "Tea Biscuit",
  ],
  flour: ["All Purpose", "Burger"],
  company: [
    { label: "Investors", href: "/about#investors" },
    { label: "About Us", href: "/about" },
    { label: "Why Choose Us", href: "/why-choose-vita" },
  ],
  resources: [
    { label: "Research", href: "/research" },
    { label: "Media Kit", href: "#" },
    { label: "FAQs", href: "/faqs" },
  ],
  whatsNew: ["News & Articles", "Updates"],
  peoplePlanet: [
    "Experiences",
    "Sustainability",
    "Community",
    "Innovation",
    "We Care for All®",
  ],
};

const mapLinks = (arr: string[], href: string): FooterLink[] =>
  arr.map((label) => ({ label, href }));

const Link = ({ children, href, className }: { children: React.ReactNode; href: string; className?: string }) => (
  <a href={href} className={className}>{children}</a>
);

/* ─────────────────────────────────────────────
   Component
   ───────────────────────────────────────────── */

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="relative w-full bg-white flex flex-col pt-16 lg:pt-24">
      {/* CTA + Newsletter */}
      <div className="relative px-4 sm:px-6 lg:px-12 pt-16 z-20">
        <div className="w-full max-w-[1500px] mx-auto flex flex-col rounded-[40px] shadow-[0px_20px_40px_rgba(0,0,0,0.06)] overflow-hidden">
          {/* CTA Section — Green background with Elephant */}
          <div className="relative bg-[#90D152] py-16 px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-between">
            <div className="flex flex-col gap-6 max-w-[650px] z-10 text-left">
              <h2 className="font-[family-name:var(--font-outfit)] font-black text-[#404040] text-[40px] md:text-[60px] lg:text-[76px] leading-[0.9] tracking-tighter">
                Let&apos;s Work Together
              </h2>

              <p className="font-[family-name:var(--font-funnel-display)] font-medium text-[#404040]/80 text-[16px] md:text-[20px] lg:text-[22px] leading-relaxed">
                Question, business inquiry, or partnership idea?
                <br />
                Our team is ready to connect and support you
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-4 bg-white px-10 py-4 rounded-full font-bold text-[#23B349] hover:scale-105 transition-transform w-fit shadow-lg"
              >
                <span>Connect with us</span>
                <span className="text-[20px]">→</span>
              </Link>
            </div>

            {/* Elephant Character */}
            <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] mt-12 lg:mt-0">
              <Image
                src="/assets/footer/cta-person.png"
                alt="Vita Elephant"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="bg-white py-10 px-8 lg:px-16 flex flex-col xl:flex-row items-center justify-between gap-8">
            <h3 className="font-[family-name:var(--font-outfit)] font-black text-[#23B349] text-[28px] md:text-[40px] lg:text-[48px] leading-tight">
              Get the Latest News & Updates...
            </h3>

            <div className="flex items-center gap-4 w-full max-w-[600px]">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-8 h-[64px] outline-none font-medium focus:border-[#23B349] transition-colors"
              />
              <button className="w-[64px] h-[64px] rounded-full bg-[#23B349] text-white flex items-center justify-center text-[24px] hover:scale-105 transition-transform shadow-lg">
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dark Footer Section */}
      <div className="bg-[#404040] -mt-[180px] pt-[240px] pb-12 rounded-t-[100px] flex flex-col items-center">
        <div className="w-full max-w-[1400px] px-8 lg:px-20 flex flex-col lg:flex-row gap-20">
          {/* Brand Info */}
          <div className="flex flex-col gap-10 lg:w-[350px]">
            <Image
              src="/assets/footer/vita-logo-white.svg"
              alt="Vita Food Complex"
              width={140}
              height={60}
              className="object-contain"
            />

            <div className="text-white/70 font-[family-name:var(--font-outfit)] space-y-2 text-[15px]">
              <p>+251 911 123 456</p>
              <p>info@vitafoodcomplex.com</p>
              <p className="whitespace-pre-line">
                Lideta SC, Woreda 02{"\n"}
                Addis Ababa, Ethiopia
              </p>
            </div>

            <Image
              src="/assets/footer/social-icons.svg"
              alt="Social Media"
              width={250}
              height={40}
              className="object-contain"
            />
          </div>

          {/* Nav Links */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-12">
            <FooterColumn title="Biscuits" links={mapLinks(footerLinks.biscuits, "/products")} />
            <FooterColumn title="Flour" links={mapLinks(footerLinks.flour, "/products")} />
            <FooterColumn title="Company" links={footerLinks.company} />
            <FooterColumn title="Resources" links={footerLinks.resources} />
          </div>
        </div>

        {/* Giant Logo Watermark */}
        <div className="w-full mt-20 opacity-10 pointer-events-none">
          <Image
            src="/assets/footer/vita-footer.png"
            alt="Vita"
            width={1600}
            height={400}
            className="w-full h-auto grayscale brightness-200"
          />
        </div>
      </div>
    </footer>
  );
}
