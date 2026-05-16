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

  const handleRatingChange = (questionId: string, rating: number) => {
    setRatings((prev) => ({ ...prev, [questionId]: rating }));
  };

  return (
    <div className="max-w-[1440px] mx-auto bg-white rounded-[14px] border border-[#DCDCDC] shadow-[0px_2px_6px_-4px_rgba(216,216,216,0.1)] overflow-hidden mb-20 mt-12">
      {/* Header */}
      <div className="p-10 border-b border-black/10">
        <h2 className="font-outfit font-semibold text-[30px] text-[#404040] mb-2">
          Customer feedback recording form
        </h2>
        <p className="font-[family-name:var(--font-desta)] text-[20px] text-[#6A7282]">
          የደንበኞች አስተያየት መመዝገቢያ ቅጽ
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto p-10">
        <div className="border border-[#F3F4F6] rounded-[10px] overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
                <th className="p-4 font-outfit font-semibold text-[16px] text-[#404040] border-r border-[#E5E7EB] w-16 text-center">
                  No
                </th>
                <th className="p-4 font-outfit font-semibold text-[16px] text-[#404040] border-r border-[#E5E7EB]">
                  Feed back
                </th>
                <th className="p-4 font-outfit font-semibold text-[16px] text-[#404040] border-r border-[#E5E7EB] text-center w-32">
                  V.Good<br/><span className="text-[12px] font-normal">በጣም ጥሩ</span>
                </th>
                <th className="p-4 font-outfit font-semibold text-[16px] text-[#404040] border-r border-[#E5E7EB] text-center w-32">
                  Good<br/><span className="text-[12px] font-normal">ጥሩ</span>
                </th>
                <th className="p-4 font-outfit font-semibold text-[16px] text-[#404040] border-r border-[#E5E7EB] text-center w-32">
                  Satisfactory<br/><span className="text-[12px] font-normal">በቂ</span>
                </th>
                <th className="p-4 font-outfit font-semibold text-[16px] text-[#404040] text-center w-32">
                  Poor<br/><span className="text-[12px] font-normal">ዝቅተኛ</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {questions.map((q, idx) => (
                <tr key={q.id} className="border-b border-[#E5E7EB] hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-outfit text-[15px] text-[#404040] border-r border-[#E5E7EB] text-center">
                    {idx + 1}
                  </td>
                  <td className="p-4 font-outfit text-[15px] text-[#404040] border-r border-[#E5E7EB]">
                    <div>{q.text}</div>
                    <div className="text-[13px] text-[#6A7282]">{q.am}</div>
                  </td>
                  {[1, 2, 3, 4].map((rating) => (
                    <td
                      key={rating}
                      className={`p-4 border-r border-[#E5E7EB] last:border-r-0 text-center`}
                    >
                      <input
                        type="radio"
                        name={q.id}
                        checked={ratings[q.id] === rating}
                        onChange={() => handleRatingChange(q.id, rating)}
                        className="w-5 h-5 accent-[#23B349] cursor-pointer"
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Additional Fields */}
      <div className="p-10 space-y-10">
        <div className="bg-[#FFFFFD] border border-[#F3F4F6] rounded-[10px] p-6 space-y-4">
          <label className="block font-inter font-medium text-[18px] text-[#404040]">
            Previous experience regarding with our product and service <span className="text-[#6A7282] font-normal text-[16px]">(ከዚህ ቀደም ከምርታችን እና ከአገልግሎታችን ጋር የተያያዘ ልምድ)</span>
          </label>
          <div className="border-b-[1.6px] border-[#F6F6F6] py-2">
            <textarea
              className="w-full bg-transparent font-outfit font-light text-[16px] text-black/50 outline-none placeholder:text-black/50 resize-none h-20"
              placeholder="..."
            />
          </div>
        </div>

        <div className="bg-[#FFFFFD] border border-[#F3F4F6] rounded-[10px] p-6 space-y-4">
          <label className="block font-inter font-medium text-[18px] text-[#404040]">
            How do you evaluate our employee with you in different place <span className="text-[#6A7282] font-normal text-[16px]">(በተለያዩ ቦታዎች ከእርስዎ ጋር ያሉትን ሰራተኞቻችንን እንዴት ይገመግማሉ?)</span>
          </label>
          <div className="border-b-[1.6px] border-[#F6F6F6] py-2">
            <textarea
              className="w-full bg-transparent font-outfit font-light text-[16px] text-black/50 outline-none placeholder:text-black/50 resize-none h-20"
              placeholder="..."
            />
          </div>
        </div>

        {/* Reference Section */}
        <div className="bg-[#FFFFFD] border border-[#F3F4F6] rounded-[10px] p-6 space-y-8">
          <h3 className="font-outfit font-semibold text-[18px] text-[#404040]">
            Reference (optional) <span className="text-[#6A7282] font-normal text-[16px]">(ማጣቀሻ - አማራጭ)</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="space-y-2">
              <label className="block font-inter font-medium text-[14px] text-[#6A7282]">
                Name <span className="font-normal">(ስም)</span>
              </label>
              <div className="border-b-[1.6px] border-[#F6F6F6] py-2">
                <input
                  type="text"
                  className="w-full bg-transparent font-outfit font-light text-[16px] text-black/50 outline-none placeholder:text-black/50"
                  placeholder="Your name"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block font-inter font-medium text-[14px] text-[#6A7282]">
                Address <span className="font-normal">(አድራሻ)</span>
              </label>
              <div className="border-b-[1.6px] border-[#F6F6F6] py-2">
                <input
                  type="text"
                  className="w-full bg-transparent font-outfit font-light text-[16px] text-black/50 outline-none placeholder:text-black/50"
                  placeholder="Your address"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block font-inter font-medium text-[14px] text-[#6A7282]">
                Date <span className="font-normal">(ቀን)</span>
              </label>
              <div className="border-b-[1.6px] border-[#F6F6F6] py-2">
                <input
                  type="date"
                  className="w-full bg-transparent font-outfit font-light text-[16px] text-black/50 outline-none placeholder:text-black/50"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end pt-8">
          <button className="bg-[#23B349] text-white px-12 py-3 rounded-[99px] font-outfit font-medium text-[16px] hover:bg-[#1f9d40] transition-all shadow-md">
            Submit Feedback
          </button>
        </div>
      </div>
    </div>
  );
}
