"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";

export default function FeedbackForm() {
  const t = useTranslations("CustomerCare.feedback");
  const [ratings, setRatings] = useState<Record<string, number>>({});

  const questions = [
    { id: "q1", text: t("table.q1") },
    { id: "q2", text: t("table.q2") },
    { id: "q3", text: t("table.q3") },
    { id: "q4", text: t("table.q4") },
    { id: "q5", text: t("table.q5") },
    { id: "q6", text: t("table.q6") },
    { id: "q7", text: t("table.q7") },
  ];

  const handleRatingChange = (questionId: string, rating: number) => {
    setRatings((prev) => ({ ...prev, [questionId]: rating }));
  };

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

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
              <th className="p-4 font-outfit font-semibold text-[16px] text-[#404040] border-r border-[#E5E7EB] w-16 text-center">
                {t("table.no")}
              </th>
              <th className="p-4 font-outfit font-semibold text-[16px] text-[#404040] border-r border-[#E5E7EB]">
                {t("table.header")}
              </th>
              <th className="p-4 font-outfit font-semibold text-[16px] text-[#404040] border-r border-[#E5E7EB] text-center w-32">
                {t("table.vGood")}
              </th>
              <th className="p-4 font-outfit font-semibold text-[16px] text-[#404040] border-r border-[#E5E7EB] text-center w-32">
                {t("table.good")}
              </th>
              <th className="p-4 font-outfit font-semibold text-[16px] text-[#404040] border-r border-[#E5E7EB] text-center w-32">
                {t("table.satisfactory")}
              </th>
              <th className="p-4 font-outfit font-semibold text-[16px] text-[#404040] text-center w-32">
                {t("table.poor")}
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
                  {q.text}
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

      {/* Additional Fields */}
      <div className="p-8 space-y-8">
        <div>
          <label className="block font-outfit font-semibold text-[16px] text-[#1A1A1A] mb-3">
            {t("experience")}
          </label>
          <textarea
            className="w-full border-b-2 border-[#E5E7EB] focus:border-[#23B349] py-2 outline-none transition-colors resize-none h-24"
            placeholder="..."
          />
        </div>

        <div>
          <label className="block font-outfit font-semibold text-[16px] text-[#1A1A1A] mb-3">
            {t("employee")}
          </label>
          <textarea
            className="w-full border-b-2 border-[#E5E7EB] focus:border-[#23B349] py-2 outline-none transition-colors resize-none h-24"
            placeholder="..."
          />
        </div>

        <div>
          <label className="block font-outfit font-semibold text-[16px] text-[#1A1A1A] mb-3">
            {t("suggestion")}
          </label>
          <textarea
            className="w-full border-b-2 border-[#E5E7EB] focus:border-[#23B349] py-2 outline-none transition-colors resize-none h-24"
            placeholder="..."
          />
        </div>

        <div>
          <label className="block font-outfit font-semibold text-[16px] text-[#1A1A1A] mb-3">
            {t("additional")}
          </label>
          <textarea
            className="w-full border-b-2 border-[#E5E7EB] focus:border-[#23B349] py-2 outline-none transition-colors resize-none h-24"
            placeholder="..."
          />
        </div>

        {/* Reference Section */}
        <div className="pt-8 border-t border-[#E5E7EB]">
          <h3 className="font-outfit font-semibold text-[18px] text-[#1A1A1A] mb-6">
            {t("reference.title")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <label className="block font-outfit text-[14px] text-[#6B7280] mb-1">
                {t("reference.name")}
              </label>
              <input
                type="text"
                className="w-full border-b-2 border-[#E5E7EB] focus:border-[#23B349] py-2 outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block font-outfit text-[14px] text-[#6B7280] mb-1">
                {t("reference.address")}
              </label>
              <input
                type="text"
                className="w-full border-b-2 border-[#E5E7EB] focus:border-[#23B349] py-2 outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block font-outfit text-[14px] text-[#6B7280] mb-1">
                {t("reference.date")}
              </label>
              <input
                type="date"
                className="w-full border-b-2 border-[#E5E7EB] focus:border-[#23B349] py-2 outline-none transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end pt-8">
          <button className="bg-[#23B349] text-white px-10 py-4 rounded-full font-outfit font-semibold text-[18px] hover:bg-[#1f9d40] transition-all shadow-lg shadow-[#23B349]/20">
            {t("submit")}
          </button>
        </div>
      </div>
    </div>
  );
}
