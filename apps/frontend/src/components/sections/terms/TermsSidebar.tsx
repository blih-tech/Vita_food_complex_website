"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { FileText } from "lucide-react";
import api from "@/lib/api";

interface TermSection {
  _id: string;
  sectionId: string;
  title: { en: string; am: string };
  position: number;
}

export default function TermsSidebar() {
  const t = useTranslations("Terms.sidebar");
  const params = useParams();
  const lang = (params?.locale as string) === "am" ? "am" : "en";
  const [sections, setSections] = useState<TermSection[]>([]);
  const [activeItem, setActiveItem] = useState<string>("");

  useEffect(() => {
    api.get<TermSection[]>("/terms")
      .then((res) => {
        setSections(res.data);
        if (res.data.length > 0) setActiveItem(res.data[0].sectionId);
      })
      .catch(() => {});
  }, []);

  const scrollToSection = (id: string) => {
    setActiveItem(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -140;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white rounded-[24px] p-6 lg:p-8 shadow-sm border border-gray-100 flex flex-col gap-6">
      <h3 className="font-['Funnel_Display'] font-bold text-[#1F2937] text-[18px]">
        {t("title")}
      </h3>

      <nav className="flex flex-col gap-2">
        {sections.map((section) => {
          const isActive = activeItem === section.sectionId;
          const label = section.title[lang] || section.title.en;
          return (
            <button
              key={section._id}
              onClick={() => scrollToSection(section.sectionId)}
              className={`flex items-center gap-4 px-4 py-3 rounded-[12px] transition-colors w-full text-left group ${
                isActive ? "bg-[#23B349] text-white" : "hover:bg-gray-50 text-[#333733]"
              }`}
            >
              <FileText
                className={`w-5 h-5 shrink-0 ${isActive ? "text-white" : "text-gray-500 group-hover:text-[#23B349] transition-colors"}`}
              />
              <span className={`font-['Outfit'] text-[15px] leading-tight line-clamp-1 ${isActive ? "font-medium text-white" : "font-normal"}`}>
                {label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
