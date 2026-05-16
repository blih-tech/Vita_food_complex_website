"use client";

import React from "react";
import { useTranslations } from "next-intl";

export default function ComplaintForm() {
  const t = useTranslations("CustomerCare.complaint");

  return (
    <div className="max-w-[1440px] mx-auto bg-white rounded-[14px] border border-[#DCDCDC] shadow-[0px_2px_6px_-4px_rgba(216,216,216,0.1)] overflow-hidden mb-20">
      {/* Header */}
      <div className="p-10 border-b border-black/10">
        <h2 className="font-outfit font-semibold text-[30px] text-[#404040] mb-2">
          Customer Complaint Registration Form
        </h2>
        <p className="font-[family-name:var(--font-desta)] text-[20px] text-[#6A7282]">
          የደንበኛ ቅሬታ ማቅረቢያ ቅጽ
        </p>
      </div>

      <form className="p-10 space-y-10">
        {/* 1. Customer Name */}
        <div className="bg-[#FFFFFD] border border-[#F3F4F6] rounded-[10px] p-6 space-y-4">
          <label className="block font-inter font-medium text-[18px] text-[#404040]">
            1. Customer Name <span className="text-[#6A7282] font-normal text-[16px]">(የደንበኛው ስም)</span>
          </label>
          <div className="border-b-[1.6px] border-[#F6F6F6] py-3">
            <input
              type="text"
              required
              className="w-full bg-transparent font-outfit font-light text-[18px] text-black/50 outline-none placeholder:text-black/50"
              placeholder="Enter full name"
            />
          </div>
        </div>

        {/* 2. Address */}
        <div className="bg-[#FFFFFD] border border-[#F3F4F6] rounded-[10px] p-6 space-y-8">
          <label className="block font-inter font-medium text-[18px] text-[#404040]">
            2. Address <span className="text-[#6A7282] font-normal text-[16px]">(አድራሻ)</span>
          </label>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="space-y-2">
              <label className="block font-inter font-medium text-[14px] text-[#6A7282]">
                City <span className="font-normal">(ከተማ)</span>
              </label>
              <div className="border-b-[1.6px] border-[#F6F6F6] py-2">
                <input
                  type="text"
                  required
                  className="w-full bg-transparent font-outfit font-light text-[16px] text-black/50 outline-none placeholder:text-black/50"
                  placeholder="City name"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block font-inter font-medium text-[14px] text-[#6A7282]">
                Woreda <span className="font-normal">(ወረዳ)</span>
              </label>
              <div className="border-b-[1.6px] border-[#F6F6F6] py-2">
                <input
                  type="text"
                  required
                  className="w-full bg-transparent font-inter font-light text-[16px] text-black/50 outline-none placeholder:text-black/50"
                  placeholder="Woreda"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block font-inter font-medium text-[14px] text-[#6A7282]">
                Phone <span className="font-normal">(ስልክ)</span>
              </label>
              <div className="border-b-[1.6px] border-[#F6F6F6] py-2">
                <input
                  type="tel"
                  required
                  className="w-full bg-transparent font-outfit font-light text-[16px] text-black/50 outline-none placeholder:text-black/50"
                  placeholder="Phone number"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 3. Product Details */}
        <div className="bg-[#FFFFFD] border border-[#F3F4F6] rounded-[10px] p-6 space-y-8">
          <label className="block font-outfit font-medium text-[18px] text-[#404040]">
            3. Product Details
          </label>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-2">
              <label className="block font-inter font-medium text-[14px] text-[#6A7282]">
                Product Type Purchased <span className="font-normal">(የገዙት የምርት ዓይነት)</span>
              </label>
              <div className="border-b-[1.6px] border-[#F6F6F6] py-2">
                <input
                  type="text"
                  required
                  className="w-full bg-transparent font-outfit font-light text-[16px] text-black/50 outline-none placeholder:text-black/50"
                  placeholder="e.g. Flour, Biscuit"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block font-inter font-medium text-[14px] text-[#6A7282]">
                Quantity/Number <span className="font-normal">(ብዛት/በቁጥር)</span>
              </label>
              <div className="border-b-[1.6px] border-[#F6F6F6] py-2">
                <input
                  type="text"
                  required
                  className="w-full bg-transparent font-outfit font-light text-[16px] text-black/50 outline-none placeholder:text-black/50"
                  placeholder="Quantity"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 4. Detail of Complaint */}
        <div className="bg-[#FFFFFD] border border-[#F3F4F6] rounded-[10px] p-6 space-y-4">
          <label className="block font-inter font-medium text-[18px] text-[#404040]">
            4. Detail of Complaint / Encountered Problem <span className="text-[#6A7282] font-normal text-[16px]">(ቅሬታዎን/ ያጋጠሞትን ችግር /በዝርዝር ይግለፁ)</span>
          </label>
          <div className="border border-[#F6F6F6] rounded-[10px] p-5">
            <textarea
              required
              className="w-full bg-transparent font-outfit font-light text-[16px] text-black/50 outline-none placeholder:text-black/50 resize-none h-32"
              placeholder="Please describe the issue in detail..."
            />
          </div>
        </div>

        {/* Complainant Name */}
        <div className="space-y-2 max-w-[450px]">
          <label className="block font-inter font-medium text-[14px] text-[#404040]">
            Complainant Name <span className="text-[#6A7282] font-normal">(ቅሬታ አቅራቢው ስም)</span>
          </label>
          <div className="border-b-[1.6px] border-[#F6F6F6] py-2">
            <input
              type="text"
              required
              className="w-full bg-transparent font-outfit font-light text-[16px] text-black/50 outline-none placeholder:text-black/50"
              placeholder="Print name"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end pt-8">
          <button
            type="submit"
            className="bg-[#23B349] text-white px-12 py-3 rounded-[99px] font-outfit font-medium text-[16px] hover:bg-[#1f9d40] transition-all shadow-md"
          >
            Submit Complaint
          </button>
        </div>
      </form>
    </div>
  );
}
