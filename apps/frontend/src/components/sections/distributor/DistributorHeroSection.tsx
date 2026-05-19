"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { usePage } from "@/hooks/usePage";

interface DistributorHeroContent {
  label?: string;
  headline?: string;
  subtitle?: string;
  cta?: string;
  image?: string;
}

export default function DistributorHeroSection({ content }: { content?: DistributorHeroContent }) {
  const t = useTranslations("Distributor");
  const locale = useLocale();
  const { page } = usePage("about");

  const sisterSection = page?.sections?.find((s: any) => s.type === "about-sister");
  const sisterContent = sisterSection?.content?.[locale] || sisterSection?.content?.en;
  const cmsLogos: Array<{ src?: string; alt?: string }> = (sisterContent?.logos || []).filter(
    (l: any) => l && typeof l.src === "string" && l.src.trim() !== ""
  );

  const hero = {
    label: content?.label || t("hero.label"),
    headline: content?.headline || t("hero.headline"),
    subtitle: content?.subtitle || t("hero.subtitle"),
    cta: content?.cta || t("hero.cta"),
    image: content?.image || "/assets/distributor/hero-bg.png",
  };

  return (
    <section className="relative w-full overflow-hidden min-h-[600px] sm:min-h-[700px] lg:min-h-[800px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={hero.image}
          alt="Vita distribution warehouse"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 w-full max-w-[900px] pt-[80px]">
        
        {/* Small pill label */}
        <div className="flex items-center gap-2 bg-[#F3F3F3]/80 border border-white/40 backdrop-blur-md rounded-full px-4 py-1.5 mb-6">
          <div className="w-3.5 h-3.5 bg-[#23B349] rounded-[3px] flex items-center justify-center rotate-45">
            <div className="w-1.5 h-1.5 bg-white rounded-[1px] -rotate-45" />
          </div>
          <span className="text-[#1A1A1A] font-['Outfit'] font-medium text-[13px] sm:text-[14px]">
            {hero.label}
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-[40px] sm:text-[56px] lg:text-[72px] mb-6 leading-[1.1] font-bold"
          style={{
            fontFamily: "var(--font-funnel-display), 'Funnel Display', sans-serif",
            letterSpacing: "-0.02em",
            color: "#FFFFFF",
            textShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
          }}
        >
          Become a Distributor <br className="hidden sm:block" /> and Grow With Us
        </h1>

        {/* Subtitle */}
        <p
          className="text-[16px] sm:text-[18px] lg:text-[20px] mb-8 max-w-[760px] leading-relaxed"
          style={{
            fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
            fontWeight: 400,
            color: "rgba(255, 255, 255, 0.9)",
            textShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
          }}
        >
          {hero.subtitle}
        </p>

        {/* CTA Button */}
        <Link
          href="#contact-form"
          className="inline-flex items-center justify-center rounded-full bg-[#23B349] hover:bg-[#1f9d40] transition-colors border border-white/20 px-8 py-3.5 sm:py-4"
        >
          <span
            className="text-[16px] sm:text-[18px]"
            style={{
              fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
              fontWeight: 500,
              color: "#FFFFFF",
            }}
          >
            {hero.cta}
          </span>
        </Link>
      </div>

      {/* Floating Logos at the bottom */}
      <div className="absolute bottom-[10%] left-0 right-0 z-20 flex justify-center items-center gap-6 sm:gap-12 lg:gap-16 px-4 opacity-90 overflow-hidden">
        {cmsLogos.length > 0 ? (
          cmsLogos.map((logo, idx) => (
            <Image
              key={idx}
              src={logo.src as string}
              alt={logo.alt || `Sister Company ${idx + 1}`}
              width={120}
              height={50}
              className={`object-contain w-[70px] sm:w-[120px] filter brightness-0 opacity-90 ${idx % 2 === 0 ? 'sepia saturate-[50] hue-rotate-[30deg]' : 'invert'}`}
            />
          ))
        ) : (
          <>
            <Image src="/assets/sister/arada-coffee-logo.png" alt="Arada Coffee" width={120} height={50} className="object-contain w-[80px] sm:w-[120px] filter brightness-0 sepia saturate-[50] hue-rotate-[30deg] opacity-80" />
            <Image src="/assets/sister/belayab-delivery-logo.png" alt="BelayAb Delivery" width={100} height={50} className="object-contain w-[70px] sm:w-[100px] filter brightness-0 invert opacity-90" />
            <Image src="/assets/sister/arada-coffee-logo.png" alt="Arada Coffee" width={120} height={50} className="object-contain w-[80px] sm:w-[120px] filter brightness-0 sepia saturate-[50] hue-rotate-[30deg] opacity-100" />
            <Image src="/assets/sister/arada-coffee-logo.png" alt="Arada Coffee" width={120} height={50} className="object-contain w-[80px] sm:w-[120px] filter brightness-0 invert opacity-90" />
            <Image src="/assets/sister/belayab-delivery-logo.png" alt="BelayAb Delivery" width={100} height={50} className="object-contain w-[70px] sm:w-[100px] filter brightness-0 sepia saturate-[50] hue-rotate-[30deg] opacity-100" />
            <Image src="/assets/sister/arada-coffee-logo.png" alt="Arada Coffee" width={120} height={50} className="object-contain w-[80px] sm:w-[120px] filter brightness-0 invert opacity-90" />
          </>
        )}
      </div>
    </section>
  );
}
