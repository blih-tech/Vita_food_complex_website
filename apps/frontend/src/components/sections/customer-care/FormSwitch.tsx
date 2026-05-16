"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface FormSwitchProps {
  activeTab: "feedback" | "complaint";
  onTabChange: (tab: "feedback" | "complaint") => void;
  content?: Record<string, unknown>;
  locale?: string;
}

export default function FormSwitch({
  activeTab,
  onTabChange,
  content,
  locale = "en",
}: FormSwitchProps) {
  const t = useTranslations("CustomerCare.switch");
  const lang = locale === "am" ? "am" : "en";
  const branch = content?.[lang] as Record<string, string | undefined> | undefined;

  const feedbackLabel = branch?.feedbackTab ?? t("feedback");
  const complaintLabel = branch?.complaintTab ?? t("complaint");

  return (
    <div className="flex justify-center relative z-30">
      <div className="relative flex bg-white p-[1.43px] rounded-[8.57px] shadow-lg border-[1.43px] border-white w-[320px] h-[52px] sm:w-[380px] sm:h-[56px] lg:w-[400px] lg:h-[60px]">
        <div
          className={`absolute top-[1.43px] bottom-[1.43px] w-[calc(50%-1.43px)] bg-[#23B349]/10 rounded-[8.57px] transition-all duration-300 ease-in-out ${
            activeTab === "complaint" ? "translate-x-full" : "translate-x-0"
          }`}
        />

        <button
          type="button"
          onClick={() => onTabChange("feedback")}
          className={`relative z-10 flex-1 flex items-center justify-center gap-1.5 sm:gap-2 rounded-[8.57px] transition-colors duration-300 ${
            activeTab === "feedback" ? "text-[#23B349]" : "text-[#404040]"
          }`}
        >
          <div
            className={`relative w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 transition-opacity duration-300 ${activeTab === "feedback" ? "opacity-100" : "opacity-40 grayscale"}`}
          >
            <Image
              src="/assets/images/customer-care/feedback-icon.svg"
              alt=""
              fill
              className="object-contain"
            />
          </div>
          <span className="font-outfit font-semibold text-[15px] sm:text-[17px] lg:text-[22.86px] whitespace-nowrap">
            {feedbackLabel}
          </span>
        </button>

        <button
          type="button"
          onClick={() => onTabChange("complaint")}
          className={`relative z-10 flex-1 flex items-center justify-center gap-1.5 sm:gap-2 rounded-[8.57px] transition-colors duration-300 ${
            activeTab === "complaint" ? "text-[#23B349]" : "text-[#404040]"
          }`}
        >
          <div
            className={`relative w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 transition-opacity duration-300 ${activeTab === "complaint" ? "opacity-100" : "opacity-40 grayscale"}`}
          >
            <Image
              src="/assets/images/customer-care/complaint-icon.svg"
              alt=""
              fill
              className="object-contain"
            />
          </div>
          <span className="font-outfit font-semibold text-[15px] sm:text-[17px] lg:text-[22.86px] whitespace-nowrap">
            {complaintLabel}
          </span>
        </button>
      </div>
    </div>
  );
}
