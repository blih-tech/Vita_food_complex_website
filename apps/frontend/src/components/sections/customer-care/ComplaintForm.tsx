"use client";

import React from "react";
import { useTranslations } from "next-intl";

export default function ComplaintForm() {
  const t = useTranslations("CustomerCare.complaint");

  return (
    <div className="w-full max-w-[1440px] mx-auto bg-white rounded-[14px] border border-[#DCDCDC] shadow-[0px_2px_6px_-4px_rgba(216,216,216,0.1)] overflow-hidden mb-8 sm:mb-16 lg:mb-20">
      {/* Header */}
      <div className="p-4 sm:p-6 lg:p-10 border-b border-black/10">
        <h2 className="font-outfit font-semibold text-[20px] sm:text-[24px] lg:text-[30px] text-[#404040] mb-1 sm:mb-2">
          Customer Complaint Registration Form
        </h2>
        <p className="font-[family-name:var(--font-desta)] text-[14px] sm:text-[16px] lg:text-[20px] text-[#6A7282]">
          የደንበኛ ቅሬታ ማቅረቢያ ቅጽ
        </p>
      </div>

      <form className="p-4 sm:p-6 lg:p-10 space-y-5 sm:space-y-7 lg:space-y-10">
        {/* 1. Customer Name */}
        <div className="bg-[#FFFFFD] border border-[#F3F4F6] rounded-[10px] p-4 sm:p-5 lg:p-6 space-y-3 sm:space-y-4">
          <label className="block font-inter font-medium text-[14px] sm:text-[16px] lg:text-[18px] text-[#404040]">
            1. Customer Name{" "}
            <span className="text-[#6A7282] font-normal text-[12px] sm:text-[14px] lg:text-[16px]">
              (የደንበኛው ስም)
            </span>
          </label>
          <div className="border-b-[1.6px] border-[#F6F6F6] py-2 sm:py-3">
            <input
              type="text"
              required
              className="w-full bg-transparent font-outfit font-light text-[14px] sm:text-[16px] lg:text-[18px] text-black/50 outline-none placeholder:text-black/50"
              placeholder="Enter full name"
            />
          </div>
        </div>

        {/* 2. Address */}
        <div className="bg-[#FFFFFD] border border-[#F3F4F6] rounded-[10px] p-4 sm:p-5 lg:p-6 space-y-4 sm:space-y-6 lg:space-y-8">
          <label className="block font-inter font-medium text-[14px] sm:text-[16px] lg:text-[18px] text-[#404040]">
            2. Address{" "}
            <span className="text-[#6A7282] font-normal text-[12px] sm:text-[14px] lg:text-[16px]">
              (አድራሻ)
            </span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 lg:gap-10">
            {[
              { label: "City", am: "ከተማ", placeholder: "City name" },
              { label: "Woreda", am: "ወረዳ", placeholder: "Woreda" },
              { label: "Phone", am: "ስልክ", placeholder: "Phone number", type: "tel" },
            ].map(({ label, am, placeholder, type }) => (
              <div key={label} className="space-y-1 sm:space-y-2">
                <label className="block font-inter font-medium text-[12px] sm:text-[13px] lg:text-[14px] text-[#6A7282]">
                  {label} <span className="font-normal">({am})</span>
                </label>
                <div className="border-b-[1.6px] border-[#F6F6F6] py-2">
                  <input
                    type={type ?? "text"}
                    required
                    className="w-full bg-transparent font-outfit font-light text-[14px] sm:text-[15px] lg:text-[16px] text-black/50 outline-none placeholder:text-black/50"
                    placeholder={placeholder}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Product Details */}
        <div className="bg-[#FFFFFD] border border-[#F3F4F6] rounded-[10px] p-4 sm:p-5 lg:p-6 space-y-4 sm:space-y-6 lg:space-y-8">
          <label className="block font-outfit font-medium text-[14px] sm:text-[16px] lg:text-[18px] text-[#404040]">
            3. Product Details
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-10">
            <div className="space-y-1 sm:space-y-2">
              <label className="block font-inter font-medium text-[12px] sm:text-[13px] lg:text-[14px] text-[#6A7282]">
                Product Type Purchased <span className="font-normal">(የገዙት የምርት ዓይነት)</span>
              </label>
              <div className="border-b-[1.6px] border-[#F6F6F6] py-2">
                <input
                  type="text"
                  required
                  className="w-full bg-transparent font-outfit font-light text-[14px] sm:text-[15px] lg:text-[16px] text-black/50 outline-none placeholder:text-black/50"
                  placeholder="e.g. Flour, Biscuit"
                />
              </div>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <label className="block font-inter font-medium text-[12px] sm:text-[13px] lg:text-[14px] text-[#6A7282]">
                Quantity/Number <span className="font-normal">(ብዛት/በቁጥር)</span>
              </label>
              <div className="border-b-[1.6px] border-[#F6F6F6] py-2">
                <input
                  type="text"
                  required
                  className="w-full bg-transparent font-outfit font-light text-[14px] sm:text-[15px] lg:text-[16px] text-black/50 outline-none placeholder:text-black/50"
                  placeholder="Quantity"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 4. Detail of Complaint */}
        <div className="bg-[#FFFFFD] border border-[#F3F4F6] rounded-[10px] p-4 sm:p-5 lg:p-6 space-y-3 sm:space-y-4">
          <label className="block font-inter font-medium text-[14px] sm:text-[16px] lg:text-[18px] text-[#404040]">
            4. Detail of Complaint / Encountered Problem{" "}
            <span className="text-[#6A7282] font-normal text-[12px] sm:text-[14px] lg:text-[16px]">
              (ቅሬታዎን/ ያጋጠሞትን ችግር /በዝርዝር ይግለፁ)
            </span>
          </label>
          <div className="border border-[#F6F6F6] rounded-[10px] p-3 sm:p-4 lg:p-5">
            <textarea
              required
              className="w-full bg-transparent font-outfit font-light text-[14px] sm:text-[15px] lg:text-[16px] text-black/50 outline-none placeholder:text-black/50 resize-none h-24 sm:h-28 lg:h-32"
              placeholder="Please describe the issue in detail..."
            />
          </div>
        </div>

        {/* Complainant Name */}
        <div className="space-y-1 sm:space-y-2 w-full sm:max-w-[450px]">
          <label className="block font-inter font-medium text-[12px] sm:text-[13px] lg:text-[14px] text-[#404040]">
            Complainant Name{" "}
            <span className="text-[#6A7282] font-normal">(ቅሬታ አቅራቢው ስም)</span>
          </label>
          <div className="border-b-[1.6px] border-[#F6F6F6] py-2">
            <input
              type="text"
              required
              className="w-full bg-transparent font-outfit font-light text-[14px] sm:text-[15px] lg:text-[16px] text-black/50 outline-none placeholder:text-black/50"
              placeholder="Print name"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end pt-4 sm:pt-6 lg:pt-8">
          <button
            type="submit"
            className="bg-[#23B349] text-white px-8 sm:px-10 lg:px-12 py-2.5 sm:py-3 rounded-[99px] font-outfit font-medium text-[14px] sm:text-[15px] lg:text-[16px] hover:bg-[#1f9d40] active:scale-95 transition-all shadow-md"
          >
            Submit Complaint
          </button>
        </div>
      </form>
    </div>
  );
}
