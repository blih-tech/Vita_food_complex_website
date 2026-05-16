"use client";

import React from "react";
import { useTranslations } from "next-intl";

export default function ComplaintForm() {
  const t = useTranslations("CustomerCare.complaint");

  return (
    <div className="max-w-[1200px] mx-auto bg-white rounded-[14px] border border-[#E5E7EB] shadow-sm overflow-hidden mb-20">
      {/* Header */}
      <div className="p-8 border-b border-[#E5E7EB]">
        <h2 className="font-outfit font-semibold text-[30px] text-[#1A1A1A] mb-2">
          {t("title")}
        </h2>
        <p className="font-outfit text-[16px] text-[#404040]">
          {t("subtitle")}
        </p>
      </div>

      <form className="p-8 space-y-10">
        {/* Customer Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <label className="block font-outfit font-semibold text-[16px] text-[#1A1A1A] mb-3">
              {t("form.customerName")}
            </label>
            <input
              type="text"
              required
              className="w-full border-b-2 border-[#E5E7EB] focus:border-[#23B349] py-2 outline-none transition-colors"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label className="block font-outfit font-semibold text-[16px] text-[#1A1A1A] mb-3">
              {t("form.phone")}
            </label>
            <input
              type="tel"
              required
              className="w-full border-b-2 border-[#E5E7EB] focus:border-[#23B349] py-2 outline-none transition-colors"
              placeholder="+251 XXX XXX XXX"
            />
          </div>
        </div>

        {/* Address Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <label className="block font-outfit font-semibold text-[16px] text-[#1A1A1A] mb-3">
              {t("form.city")}
            </label>
            <input
              type="text"
              required
              className="w-full border-b-2 border-[#E5E7EB] focus:border-[#23B349] py-2 outline-none transition-colors"
              placeholder="Enter city"
            />
          </div>
          <div>
            <label className="block font-outfit font-semibold text-[16px] text-[#1A1A1A] mb-3">
              {t("form.woreda")}
            </label>
            <input
              type="text"
              required
              className="w-full border-b-2 border-[#E5E7EB] focus:border-[#23B349] py-2 outline-none transition-colors"
              placeholder="Enter woreda"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="pt-6 border-t border-[#E5E7EB]">
          <h3 className="font-outfit font-semibold text-[18px] text-[#1A1A1A] mb-8">
            {t("form.productDetails")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <label className="block font-outfit font-semibold text-[16px] text-[#1A1A1A] mb-3">
                {t("form.productType")}
              </label>
              <input
                type="text"
                required
                className="w-full border-b-2 border-[#E5E7EB] focus:border-[#23B349] py-2 outline-none transition-colors"
                placeholder="e.g. Flour, Biscuit"
              />
            </div>
            <div>
              <label className="block font-outfit font-semibold text-[16px] text-[#1A1A1A] mb-3">
                {t("form.quantity")}
              </label>
              <input
                type="text"
                required
                className="w-full border-b-2 border-[#E5E7EB] focus:border-[#23B349] py-2 outline-none transition-colors"
                placeholder="Enter quantity or number"
              />
            </div>
          </div>
        </div>

        {/* Complaint Detail */}
        <div>
          <label className="block font-outfit font-semibold text-[16px] text-[#1A1A1A] mb-3">
            {t("form.detail")}
          </label>
          <textarea
            required
            className="w-full border-b-2 border-[#E5E7EB] focus:border-[#23B349] py-2 outline-none transition-colors resize-none h-32"
            placeholder="Please describe your complaint or problem in detail..."
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end pt-8">
          <button
            type="submit"
            className="bg-[#23B349] text-white px-10 py-4 rounded-full font-outfit font-semibold text-[18px] hover:bg-[#1f9d40] transition-all shadow-lg shadow-[#23B349]/20"
          >
            {t("form.submit")}
          </button>
        </div>
      </form>
    </div>
  );
}
