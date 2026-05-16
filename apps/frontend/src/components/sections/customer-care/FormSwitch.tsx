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
    <div className="flex justify-center -mt-[30px] relative z-30">
      <div className="relative flex bg-white p-[1.43px] rounded-[8.57px] shadow-lg border-[1.43px] border-white w-[400px] h-[60px]">
        {/* Active Indicator Overlay */}
        <div
          className={`absolute top-[1.43px] bottom-[1.43px] w-[calc(50%-1.43px)] bg-[#23B349]/10 rounded-[8.57px] transition-all duration-300 ease-in-out ${
            activeTab === "complaint" ? "translate-x-full" : "translate-x-0"
          }`}
        />

        {/* Feedback Tab */}
        <button
          onClick={() => onTabChange("feedback")}
          className={`relative z-10 flex-1 flex items-center justify-center gap-2 rounded-[8.57px] transition-colors duration-300 ${
            activeTab === "feedback" ? "text-[#23B349]" : "text-[#404040]"
          }`}
        >
          <ClipboardList className={`w-6 h-6 ${activeTab === "feedback" ? "text-[#23B349]" : "text-[#D9D9D9]"}`} />
          <span className="font-outfit font-semibold text-[18px] lg:text-[22.86px]">{t("feedback")}</span>
        </button>

        {/* Complaint Tab */}
        <button
          onClick={() => onTabChange("complaint")}
          className={`relative z-10 flex-1 flex items-center justify-center gap-2 rounded-[8.57px] transition-colors duration-300 ${
            activeTab === "complaint" ? "text-[#23B349]" : "text-[#404040]"
          }`}
        >
          <AlertCircle className={`w-6 h-6 ${activeTab === "complaint" ? "text-[#23B349]" : "text-[#D9D9D9]"}`} />
          <span className="font-outfit font-semibold text-[18px] lg:text-[22.86px]">{t("complaint")}</span>
        </button>
      </div>
    </div>
  );
}
