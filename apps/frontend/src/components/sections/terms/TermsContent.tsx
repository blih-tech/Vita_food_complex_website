"use client";

import { Info, AlertCircle, Shield, Mail, Phone, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

function SectionCard({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <div id={id} className="bg-white border border-[#E8E8E8] rounded-[24px] p-8 lg:p-10 mb-8 scroll-mt-[160px]">
      <div className="border-b border-[#E8E8E8] pb-4 mb-6">
        <h2 className="font-['Funnel_Display'] font-bold text-[24px] text-[#000500] leading-tight">
          {title}
        </h2>
      </div>
      <div className="flex flex-col gap-6 font-['Outfit'] text-[16px] text-[#333733] leading-relaxed">
        {children}
      </div>
    </div>
  );
}

export default function TermsContent() {
  const t = useTranslations("Terms.content");

  return (
    <div className="flex flex-col">
      {/* 1. Acceptance of Terms */}
      <SectionCard id="acceptance" title={t("acceptance.title")}>
        <p>
          {t("acceptance.p1")}
        </p>
        <p>
          {t("acceptance.p2")}
        </p>
        
        {/* Highlight Box */}
        <div className="bg-[#FFF695]/50 border border-[#FFF265] rounded-[10px] p-6 flex items-start gap-4 mt-2">
          <Info className="w-6 h-6 text-[#F59E0B] shrink-0 mt-0.5" />
          <div className="flex flex-col gap-2">
            <h4 className="font-['Funnel_Display'] font-bold text-[#78350F] text-[14px] leading-tight">
              {t("acceptance.notice.title")}
            </h4>
            <p className="font-['Outfit'] text-[#78350F] text-[14px] leading-relaxed">
              {t("acceptance.notice.text")}
            </p>
          </div>
        </div>
      </SectionCard>

      {/* 2. Use of Website */}
      <SectionCard id="use" title={t("use.title")}>
        <p>
          {t("use.p1")}
        </p>
        <ul className="list-disc pl-6 flex flex-col gap-3">
          {(t.raw("use.list") as string[]).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </SectionCard>

      {/* 3. User Content */}
      <SectionCard id="content" title={t("content.title")}>
        <p>
          {t("content.p1")}
        </p>
        <p>
          {t("content.p2")}
        </p>
      </SectionCard>

      {/* 4. Community Guidelines */}
      <SectionCard id="guidelines" title={t("guidelines.title")}>
        <p>
          {t("guidelines.p1")}
        </p>
        <ul className="list-disc pl-6 flex flex-col gap-3">
          {(t.raw("guidelines.list") as string[]).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p>
          {t("guidelines.p2")}
        </p>
      </SectionCard>

      {/* 5. Product Information */}
      <SectionCard id="products" title={t("products.title")}>
        <p>
          {t("products.p1")}
        </p>
        <p>
          {t("products.p2")}
        </p>
        
        {/* Highlight Box */}
        <div className="bg-[#FFFBEB] border border-[#FFF695]/50 rounded-[10px] p-6 flex items-start gap-4 mt-2">
          <AlertCircle className="w-5 h-5 text-[#F59E0B] shrink-0 mt-0.5" />
          <div className="flex flex-col gap-2">
            <h4 className="font-['Funnel_Display'] font-bold text-[#78350F] text-[14px] leading-tight">
              {t("products.allergen.title")}
            </h4>
            <p className="font-['Inter'] text-[#78350F] text-[14px] leading-relaxed">
              {t("products.allergen.text")}
            </p>
          </div>
        </div>
      </SectionCard>

      {/* 6. Orders and Purchases */}
      <SectionCard id="orders" title={t("orders.title")}>
        <p>
          {t("orders.p1")}
        </p>
        <ul className="list-disc pl-6 flex flex-col gap-3">
          {(t.raw("orders.list") as string[]).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p>
          {t("orders.p2")}
        </p>
        <p>
          {t("orders.p3")}
        </p>
      </SectionCard>

      {/* 7. Intellectual Property */}
      <SectionCard id="ip" title={t("ip.title")}>
        <p>
          {t("ip.p1")}
        </p>
        <p>
          {t("ip.p2")}
        </p>
        <p>
          {t("ip.p3")}
        </p>
      </SectionCard>

      {/* 8. Privacy Policy */}
      <SectionCard id="privacy" title={t("privacy.title")}>
        <p>
          {t("privacy.p1")}
        </p>
        <ul className="list-disc pl-6 flex flex-col gap-3">
          {(t.raw("privacy.list") as string[]).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p>
          {t("privacy.p2")}
        </p>
      </SectionCard>

      {/* 9. Limitation of Liability */}
      <SectionCard id="liability" title={t("liability.title")}>
        <p>
          {t("liability.p1")}
        </p>
        <ul className="list-disc pl-6 flex flex-col gap-3">
          {(t.raw("liability.list") as string[]).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p>
          {t("liability.p2")}
        </p>
        
        {/* Highlight Box */}
        <div className="bg-[#FFFBEB] border border-[#FFF695]/50 rounded-[12px] p-6 flex items-start gap-4 mt-2">
          <Shield className="w-6 h-6 text-[#F59E0B] shrink-0 mt-0.5" />
          <div className="flex flex-col gap-2">
            <h4 className="font-['Funnel_Display'] font-bold text-[#78350F] text-[14px] leading-tight">
              {t("liability.safety.title")}
            </h4>
            <p className="font-['Outfit'] text-[#78350F] text-[14px] leading-relaxed">
              {t("liability.safety.text")}
            </p>
          </div>
        </div>
      </SectionCard>

      {/* 10. Contact Us */}
      <SectionCard id="contact" title={t("contact.title")}>
        <p>
          {t("contact.p1")}
        </p>
        
        {/* Contact Card */}
        <div className="bg-gradient-to-tr from-[#23B349] to-[#C5E047] rounded-[24px] p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 mt-6 shadow-sm">
          <div className="flex flex-col gap-6 items-start">
            <h3 className="font-['Funnel_Display'] font-bold text-white text-[32px] leading-none">
              {t("contact.cta")}
            </h3>
            <button className="bg-white text-[#23B349] font-['Outfit'] font-medium text-[16px] px-8 py-3.5 rounded-full hover:scale-105 transition-transform flex items-center gap-2">
              {t("contact.button")} <span className="font-bold">→</span>
            </button>
          </div>

          <div className="flex flex-col md:flex-row flex-wrap gap-x-12 gap-y-6">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 bg-white/20 rounded-[10px] flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-['Funnel_Display'] font-medium text-white text-[20px] leading-none">
                  {t("contact.email")}
                </span>
                <span className="font-['Outfit'] font-medium text-[#E6E6E6] text-[16px] leading-tight">
                  legal@vitafoodcomplex.com
                </span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 bg-white/20 rounded-[10px] flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-['Funnel_Display'] font-medium text-white text-[20px] leading-none">
                  {t("contact.phone")}
                </span>
                <span className="font-['Outfit'] font-medium text-[#E6E6E6] text-[16px] leading-tight">
                  +251 911 123 456
                </span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 bg-white/20 rounded-[10px] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-['Funnel_Display'] font-medium text-white text-[20px] leading-none">
                  {t("contact.address")}
                </span>
                <span className="font-['Outfit'] font-medium text-[#E6E6E6] text-[16px] leading-tight">
                  Bole, Addis Ababa, Ethiopia
                </span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-[#545854] text-[14px] leading-[1.86] mt-4">
          {t("contact.p2")}
        </p>
      </SectionCard>
    </div>
  );
}
