"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { ClipboardList, AlertCircle } from "lucide-react";

interface FormSwitchProps {
  activeTab: "feedback" | "complaint";
  onTabChange: (tab: "feedback" | "complaint") => void;
}

export default function FormSwitch({ activeTab, onTabChange }: FormSwitchProps) {
  const t = useTranslations("CustomerCare.switch");

  return (
    <div className="flex justify-center my-12">
      <div className="relative flex bg-[#F3F4F6] p-1.5 rounded-[12px] shadow-inner">
        {/* Active Indicator Overlay */}
        <div
          className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-white rounded-[10px] shadow-sm transition-all duration-300 ease-in-out ${
            activeTab === "complaint" ? "translate-x-full ml-1.5" : "translate-x-0"
          }`}
        />

        {/* Feedback Tab */}
        <button
          onClick={() => onTabChange("feedback")}
          className={`relative z-10 flex items-center gap-2 px-8 py-3 rounded-[10px] transition-colors duration-300 ${
            activeTab === "feedback" ? "text-[#23B349]" : "text-[#6B7280]"
          }`}
        >
          <ClipboardList className="w-5 h-5" />
          <span className="font-outfit font-semibold text-[16px]">{t("feedback")}</span>
        </button>

        {/* Complaint Tab */}
        <button
          onClick={() => onTabChange("complaint")}
          className={`relative z-10 flex items-center gap-2 px-8 py-3 rounded-[10px] transition-colors duration-300 ${
            activeTab === "complaint" ? "text-[#23B349]" : "text-[#6B7280]"
          }`}
        >
          <AlertCircle className="w-5 h-5" />
          <span className="font-outfit font-semibold text-[16px]">{t("complaint")}</span>
        </button>
      </div>
    </div>
  );
}
