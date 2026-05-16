"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";

export default function FeedbackForm() {
  const t = useTranslations("CustomerCare.feedback");
  const [ratings, setRatings] = useState<Record<string, number>>({});

  const questions = [
    { id: "q1", text: t("table.q1"), am: "የሽያጭ ክፍል የእንግዳ አቀባበል እንዴት ያገኙታል?" },
    { id: "q2", text: t("table.q2"), am: "ለግዢ ሂደት የሚወስደው ጊዜ" },
    { id: "q3", text: t("table.q3"), am: "የመጋዘን ሰራተኞች የደንበኞች አያያዝ እንዴት ያገኙታል?" },
    { id: "q4", text: t("table.q4"), am: "የምርቶች ጥራት እና ደህንነት ሁኔታ" },
    { id: "q5", text: t("table.q5"), am: "ግዜ እና በሚፈለገው መጠን የማቅረብ ሁኔታ" },
    { id: "q6", text: t("table.q6"), am: "የምርቱ አጫጫን ሁኔታ ደረጃውን የጠበቀ ነበር" },
    { id: "q7", text: t("table.q7"), am: "የምርቶች ዋጋ" },
  ];

  const ratingLabels = [
    { en: "V.Good", am: "በጣም ጥሩ" },
    { en: "Good", am: "ጥሩ" },
    { en: "Satisfactory", am: "በቂ" },
    { en: "Poor", am: "ዝቅተኛ" },
  ];

  const handleRatingChange = (questionId: string, rating: number) => {
    setRatings((prev) => ({ ...prev, [questionId]: rating }));
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto bg-white rounded-[14px] border border-[#DCDCDC] shadow-[0px_2px_6px_-4px_rgba(216,216,216,0.1)] overflow-hidden mb-8 sm:mb-16 lg:mb-20">
      {/* Header */}
      <div className="p-4 sm:p-6 lg:p-10 border-b border-black/10">
        <h2 className="font-outfit font-semibold text-[20px] sm:text-[24px] lg:text-[30px] text-[#404040] mb-1 sm:mb-2">
          Customer feedback recording form
        </h2>
        <p className="font-[family-name:var(--font-desta)] text-[14px] sm:text-[16px] lg:text-[20px] text-[#6A7282]">
          የደንበኞች አስተያየት መመዝገቢያ ቅጽ
        </p>
      </div>

      {/* Rating Table — horizontal scroll on mobile, full table on desktop */}
      <div className="p-4 sm:p-6 lg:p-10">
        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <div className="min-w-[600px] sm:min-w-0 px-4 sm:px-0">
            <div className="border border-[#F3F4F6] rounded-[10px] overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
                    <th className="p-2 sm:p-3 lg:p-4 font-outfit font-semibold text-[13px] sm:text-[14px] lg:text-[16px] text-[#404040] border-r border-[#E5E7EB] w-10 sm:w-14 text-center">
                      No
                    </th>
                    <th className="p-2 sm:p-3 lg:p-4 font-outfit font-semibold text-[13px] sm:text-[14px] lg:text-[16px] text-[#404040] border-r border-[#E5E7EB]">
                      Feed back
                    </th>
                    {ratingLabels.map((r, i) => (
                      <th key={i} className="p-2 sm:p-3 lg:p-4 font-outfit font-semibold text-[12px] sm:text-[13px] lg:text-[16px] text-[#404040] border-r border-[#E5E7EB] last:border-r-0 text-center w-20 sm:w-24 lg:w-32">
                        {r.en}<br /><span className="text-[10px] sm:text-[11px] lg:text-[12px] font-normal">{r.am}</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {questions.map((q, idx) => (
                    <tr key={q.id} className="border-b border-[#E5E7EB] last:border-b-0 hover:bg-gray-50 transition-colors">
                      <td className="p-2 sm:p-3 lg:p-4 font-outfit text-[13px] sm:text-[14px] lg:text-[15px] text-[#404040] border-r border-[#E5E7EB] text-center align-top">
                        {idx + 1}
                      </td>
                      <td className="p-2 sm:p-3 lg:p-4 font-outfit text-[13px] sm:text-[14px] lg:text-[15px] text-[#404040] border-r border-[#E5E7EB]">
                        <div>{q.text}</div>
                        <div className="text-[11px] sm:text-[12px] lg:text-[13px] text-[#6A7282] mt-0.5">{q.am}</div>
                      </td>
                      {[1, 2, 3, 4].map((rating) => (
                        <td key={rating} className="p-2 sm:p-3 lg:p-4 border-r border-[#E5E7EB] last:border-r-0 text-center align-middle">
                          <input
                            type="radio"
                            name={q.id}
                            checked={ratings[q.id] === rating}
                            onChange={() => handleRatingChange(q.id, rating)}
                            className="w-4 h-4 sm:w-5 sm:h-5 accent-[#23B349] cursor-pointer"
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Fields */}
      <div className="px-4 pb-6 sm:px-6 sm:pb-10 lg:px-10 lg:pb-10 space-y-6 sm:space-y-8 lg:space-y-10">
        <div className="bg-[#FFFFFD] border border-[#F3F4F6] rounded-[10px] p-4 sm:p-5 lg:p-6 space-y-3 sm:space-y-4">
          <label className="block font-inter font-medium text-[14px] sm:text-[16px] lg:text-[18px] text-[#404040]">
            Previous experience regarding with our product and service{" "}
            <span className="text-[#6A7282] font-normal text-[12px] sm:text-[14px] lg:text-[16px]">
              (ከዚህ ቀደም ከምርታችን እና ከአገልግሎታችን ጋር የተያያዘ ልምድ)
            </span>
          </label>
          <div className="border-b-[1.6px] border-[#F6F6F6] py-2">
            <textarea
              className="w-full bg-transparent font-outfit font-light text-[14px] sm:text-[15px] lg:text-[16px] text-black/50 outline-none placeholder:text-black/50 resize-none h-16 sm:h-20"
              placeholder="..."
            />
          </div>
        </div>

        <div className="bg-[#FFFFFD] border border-[#F3F4F6] rounded-[10px] p-4 sm:p-5 lg:p-6 space-y-3 sm:space-y-4">
          <label className="block font-inter font-medium text-[14px] sm:text-[16px] lg:text-[18px] text-[#404040]">
            How do you evaluate our employee with you in different place{" "}
            <span className="text-[#6A7282] font-normal text-[12px] sm:text-[14px] lg:text-[16px]">
              (በተለያዩ ቦታዎች ከእርስዎ ጋር ያሉትን ሰራተኞቻችንን እንዴት ይገመግማሉ?)
            </span>
          </label>
          <div className="border-b-[1.6px] border-[#F6F6F6] py-2">
            <textarea
              className="w-full bg-transparent font-outfit font-light text-[14px] sm:text-[15px] lg:text-[16px] text-black/50 outline-none placeholder:text-black/50 resize-none h-16 sm:h-20"
              placeholder="..."
            />
          </div>
        </div>

        {/* Reference Section */}
        <div className="bg-[#FFFFFD] border border-[#F3F4F6] rounded-[10px] p-4 sm:p-5 lg:p-6 space-y-4 sm:space-y-6 lg:space-y-8">
          <h3 className="font-outfit font-semibold text-[15px] sm:text-[16px] lg:text-[18px] text-[#404040]">
            Reference (optional){" "}
            <span className="text-[#6A7282] font-normal text-[12px] sm:text-[14px] lg:text-[16px]">
              (ማጣቀሻ - አማራጭ)
            </span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 lg:gap-10">
            {[
              { label: "Name", am: "ስም", type: "text", placeholder: "Your name" },
              { label: "Address", am: "አድራሻ", type: "text", placeholder: "Your address" },
              { label: "Date", am: "ቀን", type: "date", placeholder: "" },
            ].map(({ label, am, type, placeholder }) => (
              <div key={label} className="space-y-1 sm:space-y-2">
                <label className="block font-inter font-medium text-[12px] sm:text-[13px] lg:text-[14px] text-[#6A7282]">
                  {label} <span className="font-normal">({am})</span>
                </label>
                <div className="border-b-[1.6px] border-[#F6F6F6] py-2">
                  <input
                    type={type}
                    className="w-full bg-transparent font-outfit font-light text-[14px] sm:text-[15px] lg:text-[16px] text-black/50 outline-none placeholder:text-black/50"
                    placeholder={placeholder}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end pt-4 sm:pt-6 lg:pt-8">
          <button className="bg-[#23B349] text-white px-8 sm:px-10 lg:px-12 py-2.5 sm:py-3 rounded-[99px] font-outfit font-medium text-[14px] sm:text-[15px] lg:text-[16px] hover:bg-[#1f9d40] active:scale-95 transition-all shadow-md">
            Submit Feedback
          </button>
        </div>
      </div>
    </div>
  );
}
