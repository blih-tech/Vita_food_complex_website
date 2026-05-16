"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import api from "@/lib/api";

export default function ComplaintForm({
  content,
  locale = "en",
}: {
  content?: Record<string, unknown>;
  locale?: string;
}) {
  const t = useTranslations("CustomerCare.complaint");
  const lang = locale === "am" ? "am" : "en";
  const branch = content?.[lang] as Record<string, string | undefined> | undefined;

  const [customerName, setCustomerName] = useState("");
  const [city, setCity] = useState("");
  const [woreda, setWoreda] = useState("");
  const [phone, setPhone] = useState("");
  const [productType, setProductType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [complaintDetail, setComplaintDetail] = useState("");
  const [complainantName, setComplainantName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [formSuccess, setFormSuccess] = useState<string | null>(null);

  const formTitle = branch?.formTitle ?? t("title");
  const formSubtitle =
    branch?.formSubtitleSecondary ??
    (lang === "en" ? "የደንበኛ ቅሬታ ማቅረቢያ ቅጽ" : t("subtitle"));

  const paren = (s: string) => {
    const trimmed = s.trim();
    if (!trimmed) return null;
    return trimmed.startsWith("(") ? trimmed : `(${trimmed})`;
  };

  const customerNameLead = branch?.customerNameLead ?? `1. ${t("form.customerName")}`;
  const customerNameParen = branch?.customerNameParen ?? "";
  const customerNamePlaceholder = branch?.customerNamePlaceholder ?? "Enter full name";

  const addressLead = branch?.addressLead ?? `2. ${t("form.address")}`;
  const addressParen = branch?.addressParen ?? "";
  const cityLabel = branch?.cityLabel ?? t("form.city");
  const cityParen = branch?.cityParen ?? "";
  const cityPlaceholder = branch?.cityPlaceholder ?? "City name";
  const woredaLabel = branch?.woredaLabel ?? t("form.woreda");
  const woredaParen = branch?.woredaParen ?? "";
  const woredaPlaceholder = branch?.woredaPlaceholder ?? "Woreda";
  const phoneLabel = branch?.phoneLabel ?? t("form.phone");
  const phoneParen = branch?.phoneParen ?? "";
  const phonePlaceholder = branch?.phonePlaceholder ?? "Phone number";

  const productDetailsLead = branch?.productDetailsLead ?? `3. ${t("form.productDetails")}`;
  const productTypeLabel = branch?.productTypeLabel ?? t("form.productType");
  const productTypeParen = branch?.productTypeParen ?? "";
  const productTypePlaceholder = branch?.productTypePlaceholder ?? "e.g. Flour, Biscuit";
  const quantityLabel = branch?.quantityLabel ?? t("form.quantity");
  const quantityParen = branch?.quantityParen ?? "";
  const quantityPlaceholder = branch?.quantityPlaceholder ?? "Quantity";

  const detailLead = branch?.detailLead ?? `4. ${t("form.detail")}`;
  const detailParen = branch?.detailParen ?? "";
  const detailPlaceholder = branch?.detailPlaceholder ?? "Please describe the issue in detail...";

  const complainantLead = branch?.complainantLead ?? "Complainant Name";
  const complainantParen = branch?.complainantParen ?? "(ቅሬታ አቅራቢው ስም)";
  const complainantPlaceholder = branch?.complainantPlaceholder ?? "Print name";

  const submitBtn = branch?.submitButton ?? t("form.submit");

  const addrRows = [
    {
      label: cityLabel,
      parenRaw: cityParen,
      placeholder: cityPlaceholder,
      value: city,
      onChange: setCity,
      type: "text" as const,
    },
    {
      label: woredaLabel,
      parenRaw: woredaParen,
      placeholder: woredaPlaceholder,
      value: woreda,
      onChange: setWoreda,
      type: "text" as const,
    },
    {
      label: phoneLabel,
      parenRaw: phoneParen,
      placeholder: phonePlaceholder,
      value: phone,
      onChange: setPhone,
      type: "tel" as const,
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    setFormSuccess(null);
    setSubmitting(true);
    try {
      await api.post("/customer-care-submissions", {
        kind: "complaint",
        locale: lang,
        payload: {
          customerName,
          city,
          woreda,
          phone,
          productType,
          quantity,
          complaintDetail,
          complainantName,
        },
      });
      setFormSuccess(t("submitSent"));
      setCustomerName("");
      setCity("");
      setWoreda("");
      setPhone("");
      setProductType("");
      setQuantity("");
      setComplaintDetail("");
      setComplainantName("");
    } catch {
      setFormError(t("submitFailed"));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto bg-white rounded-[14px] border border-[#DCDCDC] shadow-[0px_2px_6px_-4px_rgba(216,216,216,0.1)] overflow-hidden mb-8 sm:mb-16 lg:mb-20">
      <div className="p-4 sm:p-6 lg:p-10 border-b border-black/10">
        <h2 className="font-outfit font-semibold text-[20px] sm:text-[24px] lg:text-[30px] text-[#404040] mb-1 sm:mb-2">
          {formTitle}
        </h2>
        <p className="font-[family-name:var(--font-desta)] text-[14px] sm:text-[16px] lg:text-[20px] text-[#6A7282]">
          {formSubtitle}
        </p>
      </div>

      <form className="p-4 sm:p-6 lg:p-10 space-y-5 sm:space-y-7 lg:space-y-10" onSubmit={handleSubmit}>
        <div className="bg-[#FFFFFD] border border-[#F3F4F6] rounded-[10px] p-4 sm:p-5 lg:p-6 space-y-3 sm:space-y-4">
          <label className="block font-inter font-medium text-[14px] sm:text-[16px] lg:text-[18px] text-[#404040]">
            {customerNameLead}{" "}
            {customerNameParen ? (
              <span className="text-[#6A7282] font-normal text-[12px] sm:text-[14px] lg:text-[16px]">
                {paren(customerNameParen)}
              </span>
            ) : null}
          </label>
          <div className="border-b-[1.6px] border-[#F6F6F6] py-2 sm:py-3">
            <input
              type="text"
              required
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="w-full bg-transparent font-outfit font-light text-[14px] sm:text-[16px] lg:text-[18px] text-black/50 outline-none placeholder:text-black/50"
              placeholder={customerNamePlaceholder}
            />
          </div>
        </div>

        <div className="bg-[#FFFFFD] border border-[#F3F4F6] rounded-[10px] p-4 sm:p-5 lg:p-6 space-y-4 sm:space-y-6 lg:space-y-8">
          <label className="block font-inter font-medium text-[14px] sm:text-[16px] lg:text-[18px] text-[#404040]">
            {addressLead}{" "}
            {addressParen ? (
              <span className="text-[#6A7282] font-normal text-[12px] sm:text-[14px] lg:text-[16px]">
                {paren(addressParen)}
              </span>
            ) : null}
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 lg:gap-10">
            {addrRows.map((row, i) => (
              <div key={i} className="space-y-1 sm:space-y-2">
                <label className="block font-inter font-medium text-[12px] sm:text-[13px] lg:text-[14px] text-[#6A7282]">
                  {row.label}
                  {row.parenRaw ? (
                    <span className="font-normal"> {paren(row.parenRaw)}</span>
                  ) : null}
                </label>
                <div className="border-b-[1.6px] border-[#F6F6F6] py-2">
                  <input
                    type={row.type}
                    required
                    value={row.value}
                    onChange={(e) => row.onChange(e.target.value)}
                    className="w-full bg-transparent font-outfit font-light text-[14px] sm:text-[15px] lg:text-[16px] text-black/50 outline-none placeholder:text-black/50"
                    placeholder={row.placeholder}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#FFFFFD] border border-[#F3F4F6] rounded-[10px] p-4 sm:p-5 lg:p-6 space-y-4 sm:space-y-6 lg:space-y-8">
          <label className="block font-inter font-medium text-[14px] sm:text-[16px] lg:text-[18px] text-[#404040]">
            {productDetailsLead}
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-10">
            <div className="space-y-1 sm:space-y-2">
              <label className="block font-inter font-medium text-[12px] sm:text-[13px] lg:text-[14px] text-[#6A7282]">
                {productTypeLabel}
                {productTypeParen ? (
                  <span className="font-normal"> {paren(productTypeParen)}</span>
                ) : null}
              </label>
              <div className="border-b-[1.6px] border-[#F6F6F6] py-2">
                <input
                  type="text"
                  required
                  value={productType}
                  onChange={(e) => setProductType(e.target.value)}
                  className="w-full bg-transparent font-outfit font-light text-[14px] sm:text-[15px] lg:text-[16px] text-black/50 outline-none placeholder:text-black/50"
                  placeholder={productTypePlaceholder}
                />
              </div>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <label className="block font-inter font-medium text-[12px] sm:text-[13px] lg:text-[14px] text-[#6A7282]">
                {quantityLabel}
                {quantityParen ? <span className="font-normal"> {paren(quantityParen)}</span> : null}
              </label>
              <div className="border-b-[1.6px] border-[#F6F6F6] py-2">
                <input
                  type="text"
                  required
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-full bg-transparent font-outfit font-light text-[14px] sm:text-[15px] lg:text-[16px] text-black/50 outline-none placeholder:text-black/50"
                  placeholder={quantityPlaceholder}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#FFFFFD] border border-[#F3F4F6] rounded-[10px] p-4 sm:p-5 lg:p-6 space-y-3 sm:space-y-4">
          <label className="block font-inter font-medium text-[14px] sm:text-[16px] lg:text-[18px] text-[#404040]">
            {detailLead}{" "}
            {detailParen ? (
              <span className="text-[#6A7282] font-normal text-[12px] sm:text-[14px] lg:text-[16px]">
                {paren(detailParen)}
              </span>
            ) : null}
          </label>
          <div className="border border-[#F6F6F6] rounded-[10px] p-3 sm:p-4 lg:p-5">
            <textarea
              required
              value={complaintDetail}
              onChange={(e) => setComplaintDetail(e.target.value)}
              className="w-full bg-transparent font-outfit font-light text-[14px] sm:text-[15px] lg:text-[16px] text-black/50 outline-none placeholder:text-black/50 resize-none h-24 sm:h-28 lg:h-32"
              placeholder={detailPlaceholder}
            />
          </div>
        </div>

        <div className="space-y-1 sm:space-y-2 w-full sm:max-w-[450px]">
          <label className="block font-inter font-medium text-[12px] sm:text-[13px] lg:text-[14px] text-[#404040]">
            {complainantLead}{" "}
            {complainantParen ? (
              <span className="text-[#6A7282] font-normal">{paren(complainantParen)}</span>
            ) : null}
          </label>
          <div className="border-b-[1.6px] border-[#F6F6F6] py-2">
            <input
              type="text"
              required
              value={complainantName}
              onChange={(e) => setComplainantName(e.target.value)}
              className="w-full bg-transparent font-outfit font-light text-[14px] sm:text-[15px] lg:text-[16px] text-black/50 outline-none placeholder:text-black/50"
              placeholder={complainantPlaceholder}
            />
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
            className="bg-[#23B349] text-white px-8 sm:px-10 lg:px-12 py-2.5 sm:py-3 rounded-[99px] font-outfit font-medium text-[14px] sm:text-[15px] lg:text-[16px] hover:bg-[#1f9d40] active:scale-95 transition-all shadow-md disabled:opacity-60 disabled:pointer-events-none self-end"
          >
            {submitting ? t("submitSending") : submitBtn}
          </button>
        </div>
      </form>
    </div>
  );
}
