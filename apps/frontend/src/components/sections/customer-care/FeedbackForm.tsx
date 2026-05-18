"use client";

import React, { useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import api from "@/lib/api";

type RowLang = { primary: string; secondary: string };

type ExtraSurveyField = {
  id: string;
  primary: string;
  secondary: string;
  placeholderEn?: string;
  placeholderAm?: string;
  inputType?: "text" | "textarea";
};

function defaultQuestions(t: ReturnType<typeof useTranslations>): { id: string; row: RowLang }[] {
  return [1, 2, 3, 4, 5, 6, 7].map((n) => ({
    id: `q${n}`,
    row: {
      primary: t(`table.q${n}`),
      secondary: "",
    },
  }));
}

export default function FeedbackForm({
  content,
  locale = "en",
}: {
  content?: Record<string, unknown>;
  locale?: string;
}) {
  const t = useTranslations("CustomerCare.feedback");
  const [ratings, setRatings] = useState<Record<string, number>>({});
  const [experienceText, setExperienceText] = useState("");
  const [employeeText, setEmployeeText] = useState("");
  const [refVals, setRefVals] = useState<Record<string, string>>({});
  const [extraAnswers, setExtraAnswers] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [formSuccess, setFormSuccess] = useState<string | null>(null);

  const lang = locale === "am" ? "am" : "en";
  const branch = content?.[lang] as Record<string, string | undefined> | undefined;

  const cmsRows = content?.feedbackQuestions as RowLang[] | undefined;

  const questions = useMemo(() => {
    if (cmsRows && cmsRows.length > 0) {
      return cmsRows.map((row, idx) => ({ id: `q${idx + 1}`, row }));
    }
    const base = defaultQuestions(t);
    const fallbackAm: Record<string, string> = {
      q1: "የሽያጭ ክፍል የእንግዳ አቀባበል እንዴት ያገኙታል?",
      q2: "ለግዢ ሂደት የሚወስደው ጊዜ",
      q3: "የመጋዘን ሰራተኞች የደንበኞች አያያዝ እንዴት ያገኙታል?",
      q4: "የምርቶች ጥራት እና ደህንነት ሁኔታ",
      q5: "ግዜ እና በሚፈለገው መጠን የማቅረብ ሁኔታ",
      q6: "የምርቱ አጫጫን ሁኔታ ደረጃውን የጠበቀ ነበር",
      q7: "የምርቶች ዋጋ",
    };
    return base.map(({ id, row }) => ({
      id,
      row: { primary: row.primary, secondary: fallbackAm[id] ?? "" },
    }));
  }, [cmsRows, t]);

  const ratingLabels: RowLang[] = useMemo(() => {
    const cms = content?.ratingLabels as RowLang[] | undefined;
    if (cms?.length) return cms;
    return [
      { primary: t("table.vGood"), secondary: "በጣም ጥሩ" },
      { primary: t("table.good"), secondary: "ጥሩ" },
      { primary: t("table.satisfactory"), secondary: "በቂ" },
      { primary: t("table.poor"), secondary: "ዝቅተኛ" },
    ];
  }, [content, t]);

  /** Number of selectable scores (matches rating column count). */
  const scaleMax = Math.max(ratingLabels.length, 2);

  const formTitle = branch?.formTitle ?? t("title");
  /** Second line under title (e.g. Amharic under English title) */
  const formSubtitle =
    branch?.formSubtitleSecondary ??
    (lang === "en" ? "የደንበኞች አስተያየት መመዝገቢያ ቅጽ" : t("subtitle"));

  const tableNoHeader = branch?.tableNoHeader ?? (lang === "am" ? t("table.no") : "No");
  const feedbackCol = branch?.feedbackColumnHeader ?? t("table.header");

  const textareaExperienceLead =
    branch?.textareaExperienceLead ?? t("experience");
  const textareaExperienceParen =
    branch?.textareaExperienceParen ?? "(ከዚህ ቀደም ከምርታችን እና ከአገልግሎታችን ጋር የተያያዘ ልምድ)";
  const textareaExperiencePlaceholder = branch?.textareaExperiencePlaceholder ?? "...";

  const textareaEmployeeLead = branch?.textareaEmployeeLead ?? t("employee");
  const textareaEmployeeParen =
    branch?.textareaEmployeeParen ??
    "(በተለያዩ ቦታዎች ከእርስዎ ጋር ያሉትን ሰራተኞቻችንን እንዴት ይገመግማሉ?)";

  const referenceLead = branch?.referenceTitleLead ?? t("reference.title");
  const referenceParen =
    branch?.referenceTitleParen ?? "(ማጣቀሻ - አማራጭ)";
  const submitBtn = branch?.submitButton ?? t("submit");

  type RefField = {
    key: string;
    primary: string;
    secondary: string;
    type?: string;
    placeholderEn?: string;
    placeholderAm?: string;
  };

  const refFields =
    (content?.referenceFields as RefField[])?.length ?
      (content?.referenceFields as RefField[])
    : ([
          {
            key: "name",
            primary: "Name",
            secondary: "ስም",
            type: "text",
            placeholderEn: "Your name",
            placeholderAm: "ስም",
          },
          {
            key: "address",
            primary: "Address",
            secondary: "አድራሻ",
            type: "text",
            placeholderEn: "Your address",
            placeholderAm: "አድራሻ",
          },
          {
            key: "date",
            primary: "Date",
            secondary: "ቀን",
            type: "date",
            placeholderEn: "",
            placeholderAm: "",
          },
        ] satisfies RefField[]);

  const extraSurveyFields: ExtraSurveyField[] = (content?.extraSurveyFields as ExtraSurveyField[] | undefined) ?? [];

  const handleRatingChange = (questionId: string, rating: number) => {
    setRatings((prev) => ({ ...prev, [questionId]: rating }));
  };

  const lineMain = (row: RowLang) => (lang === "am" ? row.secondary || row.primary : row.primary);
  const lineSub = (row: RowLang) => (lang === "am" ? row.primary : row.secondary);

  const paren = (s: string) => {
    const trimmed = s.trim();
    if (!trimmed) return null;
    return trimmed.startsWith("(") ? trimmed : `(${trimmed})`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    setFormSuccess(null);

    for (const q of questions) {
      const r = ratings[q.id];
      if (r === undefined || r < 1 || r > scaleMax) {
        setFormError(t("submitRatingsRequired"));
        return;
      }
    }

    const reference: Record<string, string> = {};
    for (const f of refFields) {
      reference[f.key] = (refVals[f.key] ?? "").trim();
    }

    const extrasOut: Record<string, string> = {};
    for (const ex of extraSurveyFields) {
      if (ex.id) extrasOut[ex.id] = (extraAnswers[ex.id] ?? "").trim();
    }

    setSubmitting(true);
    try {
      await api.post("/customer-care-submissions", {
        kind: "feedback",
        locale: lang,
        payload: {
          ratings,
          previousExperience: experienceText.trim(),
          employeeEvaluation: employeeText.trim(),
          reference,
          ...(extraSurveyFields.length > 0 ? { extras: extrasOut } : {}),
        },
      });
      setFormSuccess(t("submitSent"));
      setRatings({});
      setExperienceText("");
      setEmployeeText("");
      setRefVals({});
      setExtraAnswers({});
    } catch {
      setFormError(t("submitFailed"));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[1440px] mx-auto bg-white rounded-[14px] border border-[#DCDCDC] shadow-[0px_2px_6px_-4px_rgba(216,216,216,0.1)] overflow-hidden mb-8 sm:mb-16 lg:mb-20"
    >
      <div className="p-4 sm:p-6 lg:p-10 border-b border-black/10">
        <h2 className="font-outfit font-semibold text-[20px] sm:text-[24px] lg:text-[30px] text-[#404040] mb-1 sm:mb-2">
          {formTitle}
        </h2>
        <p className="font-[family-name:var(--font-desta)] text-[14px] sm:text-[16px] lg:text-[20px] text-[#6A7282]">
          {formSubtitle}
        </p>
      </div>

      <div className="p-4 sm:p-6 lg:p-10">
        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <div className="min-w-[600px] sm:min-w-0 px-4 sm:px-0">
            <div className="border border-[#F3F4F6] rounded-[10px] overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
                    <th className="p-2 sm:p-3 lg:p-4 font-outfit font-semibold text-[13px] sm:text-[14px] lg:text-[16px] text-[#404040] border-r border-[#E5E7EB] w-10 sm:w-14 text-center">
                      {tableNoHeader}
                    </th>
                    <th className="p-2 sm:p-3 lg:p-4 font-outfit font-semibold text-[13px] sm:text-[14px] lg:text-[16px] text-[#404040] border-r border-[#E5E7EB]">
                      {feedbackCol}
                    </th>
                    {ratingLabels.map((r, i) => (
                      <th
                        key={i}
                        className="p-2 sm:p-3 lg:p-4 font-outfit font-semibold text-[12px] sm:text-[13px] lg:text-[16px] text-[#404040] border-r border-[#E5E7EB] last:border-r-0 text-center w-20 sm:w-24 lg:w-32"
                      >
                        {lineMain(r)}
                        <br />
                        <span className="text-[10px] sm:text-[11px] lg:text-[12px] font-normal">
                          {lineSub(r)}
                        </span>
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
                        <div>{lineMain(q.row)}</div>
                        {!!lineSub(q.row) && (
                          <div className="text-[11px] sm:text-[12px] lg:text-[13px] text-[#6A7282] mt-0.5">
                            {lineSub(q.row)}
                          </div>
                        )}
                      </td>
                      {ratingLabels.map((_, ratingIdx) => {
                        const rating = ratingIdx + 1;
                        return (
                        <td key={rating} className="p-2 sm:p-3 lg:p-4 border-r border-[#E5E7EB] last:border-r-0 text-center align-middle">
                          <input
                            type="radio"
                            name={q.id}
                            checked={ratings[q.id] === rating}
                            onChange={() => handleRatingChange(q.id, rating)}
                            className="w-4 h-4 sm:w-5 sm:h-5 accent-[#23B349] cursor-pointer"
                          />
                        </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 pb-6 sm:px-6 sm:pb-10 lg:px-10 lg:pb-10 space-y-6 sm:space-y-8 lg:space-y-10">
        <div className="bg-[#FFFFFD] border border-[#F3F4F6] rounded-[10px] p-4 sm:p-5 lg:p-6 space-y-3 sm:space-y-4">
          <label className="block font-inter font-medium text-[14px] sm:text-[16px] lg:text-[18px] text-[#404040]">
            {textareaExperienceLead}{" "}
            {textareaExperienceParen ? (
              <span className="text-[#6A7282] font-normal text-[12px] sm:text-[14px] lg:text-[16px]">
                {paren(textareaExperienceParen)}
              </span>
            ) : null}
          </label>
          <div className="border-b-[1.6px] border-[#F6F6F6] py-2">
            <textarea
              value={experienceText}
              onChange={(e) => setExperienceText(e.target.value)}
              className="w-full bg-transparent font-outfit font-light text-[14px] sm:text-[15px] lg:text-[16px] text-black/50 outline-none placeholder:text-black/50 resize-none h-16 sm:h-20"
              placeholder={textareaExperiencePlaceholder}
            />
          </div>
        </div>

        <div className="bg-[#FFFFFD] border border-[#F3F4F6] rounded-[10px] p-4 sm:p-5 lg:p-6 space-y-3 sm:space-y-4">
          <label className="block font-inter font-medium text-[14px] sm:text-[16px] lg:text-[18px] text-[#404040]">
            {textareaEmployeeLead}{" "}
            {textareaEmployeeParen ? (
              <span className="text-[#6A7282] font-normal text-[12px] sm:text-[14px] lg:text-[16px]">
                {paren(textareaEmployeeParen)}
              </span>
            ) : null}
          </label>
          <div className="border-b-[1.6px] border-[#F6F6F6] py-2">
            <textarea
              value={employeeText}
              onChange={(e) => setEmployeeText(e.target.value)}
              className="w-full bg-transparent font-outfit font-light text-[14px] sm:text-[15px] lg:text-[16px] text-black/50 outline-none placeholder:text-black/50 resize-none h-16 sm:h-20"
              placeholder={textareaExperiencePlaceholder}
            />
          </div>
        </div>

        {extraSurveyFields.length > 0 ?
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {extraSurveyFields.map((field) => (
              <div
                key={field.id}
                className="bg-[#FFFFFD] border border-[#F3F4F6] rounded-[10px] p-4 sm:p-5 lg:p-6 space-y-3 sm:space-y-4"
              >
                <label className="block font-inter font-medium text-[14px] sm:text-[16px] lg:text-[18px] text-[#404040]">
                  {lang === "am" ? field.secondary || field.primary : field.primary}
                  {field.secondary && field.primary && field.secondary !== field.primary ? (
                    <span className="text-[#6A7282] font-normal text-[12px] sm:text-[14px] lg:text-[16px] block sm:inline sm:ml-1 mt-0.5 sm:mt-0">
                      ({lang === "am" ? field.primary : field.secondary})
                    </span>
                  ) : null}
                </label>
                {field.inputType === "textarea" ?
                  <div className="border-b-[1.6px] border-[#F6F6F6] py-2">
                    <textarea
                      value={extraAnswers[field.id] ?? ""}
                      onChange={(e) =>
                        setExtraAnswers((prev) => ({ ...prev, [field.id]: e.target.value }))
                      }
                      className="w-full bg-transparent font-outfit font-light text-[14px] sm:text-[15px] lg:text-[16px] text-black/50 outline-none placeholder:text-black/50 resize-none min-h-[4rem] sm:min-h-[5rem]"
                      placeholder={
                        lang === "am"
                          ? field.placeholderAm ?? field.placeholderEn ?? ""
                          : (field.placeholderEn ?? field.placeholderAm ?? "")
                      }
                    />
                  </div>
                : <div className="border-b-[1.6px] border-[#F6F6F6] py-2">
                    <input
                      type="text"
                      value={extraAnswers[field.id] ?? ""}
                      onChange={(e) =>
                        setExtraAnswers((prev) => ({ ...prev, [field.id]: e.target.value }))
                      }
                      className="w-full bg-transparent font-outfit font-light text-[14px] sm:text-[15px] lg:text-[16px] text-black/50 outline-none placeholder:text-black/50"
                      placeholder={
                        lang === "am"
                          ? field.placeholderAm ?? field.placeholderEn ?? ""
                          : (field.placeholderEn ?? field.placeholderAm ?? "")
                      }
                    />
                  </div>}
              </div>
            ))}
          </div>
        : null}

        <div className="bg-[#FFFFFD] border border-[#F3F4F6] rounded-[10px] p-4 sm:p-5 lg:p-6 space-y-4 sm:space-y-6 lg:space-y-8">
          <h3 className="font-outfit font-semibold text-[15px] sm:text-[16px] lg:text-[18px] text-[#404040]">
            {referenceLead}{" "}
            {referenceParen ? (
              <span className="text-[#6A7282] font-normal text-[12px] sm:text-[14px] lg:text-[16px]">
                {paren(referenceParen)}
              </span>
            ) : null}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 lg:gap-10">
            {refFields.map((f) => (
              <div key={f.key} className="space-y-1 sm:space-y-2">
                <label className="block font-inter font-medium text-[12px] sm:text-[13px] lg:text-[14px] text-[#6A7282]">
                  {lang === "am" ? f.secondary || f.primary : f.primary}
                  {f.secondary && f.primary ? (
                    <span className="font-normal"> ({lang === "am" ? f.primary : f.secondary})</span>
                  ) : null}
                </label>
                <div className="border-b-[1.6px] border-[#F6F6F6] py-2">
                  <input
                    type={f.type ?? "text"}
                    value={refVals[f.key] ?? ""}
                    onChange={(e) =>
                      setRefVals((prev) => ({
                        ...prev,
                        [f.key]: e.target.value,
                      }))
                    }
                    className="w-full bg-transparent font-outfit font-light text-[14px] sm:text-[15px] lg:text-[16px] text-black/50 outline-none placeholder:text-black/50"
                    placeholder={
                      f.key === "name" ?
                        lang === "am"
                          ? (branch?.refPlaceholderName ?? f.placeholderAm ?? f.placeholderEn ?? "")
                        : (branch?.refPlaceholderName ?? f.placeholderEn ?? f.placeholderAm ?? "")
                      : f.key === "address" ?
                        lang === "am"
                          ? (branch?.refPlaceholderAddress ?? f.placeholderAm ?? f.placeholderEn ?? "")
                        : (branch?.refPlaceholderAddress ?? f.placeholderEn ?? f.placeholderAm ?? "")
                      : lang === "am"
                        ? (f.placeholderAm ?? f.placeholderEn ?? "")
                      : (f.placeholderEn ?? f.placeholderAm ?? "")
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-3 pt-4 sm:pt-6 lg:pt-8">
          {formError ?
            <p className="text-sm text-red-600 sm:mr-auto text-center sm:text-left" role="alert">
              {formError}
            </p>
          : null}
          {formSuccess ?
            <p className="text-sm text-[#23B349] sm:mr-auto text-center sm:text-left" role="status">
              {formSuccess}
            </p>
          : null}
          <button
            type="submit"
            disabled={submitting}
            className="bg-[#23B349] text-white px-8 sm:px-10 lg:px-12 py-2.5 sm:py-3 rounded-[99px] font-outfit font-medium text-[14px] sm:text-[15px] lg:text-[16px] hover:bg-[#1f9d40] active:scale-95 transition-all shadow-md disabled:opacity-60 disabled:pointer-events-none"
          >
            {submitting ? t("submitSending") : submitBtn}
          </button>
        </div>
      </div>
    </form>
  );
}
