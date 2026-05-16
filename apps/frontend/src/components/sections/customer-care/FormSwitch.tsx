"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface FormSwitchProps {
  activeTab: "feedback" | "complaint";
  onTabChange: (tab: "feedback" | "complaint") => void;
}

export default function FormSwitch({ activeTab, onTabChange }: FormSwitchProps) {
  const t = useTranslations("CustomerCare.switch");

  return (
    <div className="flex justify-center relative z-30">
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
          <div className={`relative w-6 h-6 transition-opacity duration-300 ${activeTab === "feedback" ? "opacity-100" : "opacity-40 grayscale"}`}>
            <Image
              src="/assets/images/customer-care/feedback-icon.svg"
              alt="Feedback"
              fill
              className="object-contain"
            />
          </div>
          <span className="font-outfit font-semibold text-[18px] lg:text-[22.86px]">{t("feedback")}</span>
        </button>

        {/* Complaint Tab */}
        <button
          onClick={() => onTabChange("complaint")}
          className={`relative z-10 flex-1 flex items-center justify-center gap-2 rounded-[8.57px] transition-colors duration-300 ${
            activeTab === "complaint" ? "text-[#23B349]" : "text-[#404040]"
          }`}
        >
          <div className={`relative w-6 h-6 transition-opacity duration-300 ${activeTab === "complaint" ? "opacity-100" : "opacity-40 grayscale"}`}>
            <Image
              src="/assets/images/customer-care/complaint-icon.svg"
              alt="Complaint"
              fill
              className="object-contain"
            />
          </div>
          <span className="font-outfit font-semibold text-[18px] lg:text-[22.86px]">{t("complaint")}</span>
        </button>
      </div>
    </div>
  );
}
