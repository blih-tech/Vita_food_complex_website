"use client";

import { useState } from "react";
import { X, Check, Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import api from "@/lib/api";

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "money" | "inkind";
}

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

const EMPTY_FORM: FormState = { fullName: "", email: "", phone: "", message: "" };

export default function DonationModal({ isOpen, onClose, type }: DonationModalProps) {
  const [selectedAmount, setSelectedAmount] = useState<string | null>(null);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const t = useTranslations("PeoplePlanet.modal");

  if (!isOpen) return null;

  const predefinedAmounts = ["500", "1,000", "2,500", "5,000", "10,000"];
  const inKindItems: string[] = t.raw("inKindItems");

  const toggleItem = (item: string) => {
    setSelectedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleClose = () => {
    setSubmitted(false);
    setSelectedAmount(null);
    setCustomAmount("");
    setSelectedItems([]);
    setForm(EMPTY_FORM);
    setError(null);
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) handleClose();
  };

  const handleSubmit = async () => {
    if (!form.fullName.trim() || !form.email.trim() || !form.phone.trim()) {
      setError("Please fill in all required fields.");
      return;
    }
    if (type === "money" && !selectedAmount && !customAmount) {
      setError("Please select or enter a donation amount.");
      return;
    }
    if (type === "inkind" && selectedItems.length === 0) {
      setError("Please select at least one item to donate.");
      return;
    }
    setError(null);
    setSubmitting(true);
    try {
      await api.post("/donations", {
        type,
        fullName: form.fullName.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        message: form.message.trim(),
        ...(type === "money" ? { amount: customAmount || selectedAmount } : { items: selectedItems }),
      });
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-[24px] shadow-2xl w-full max-w-[800px] max-h-[90vh] overflow-y-auto flex flex-col animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-gray-200 sticky top-0 bg-white z-10">
          <div>
            <h2 className="font-['Funnel_Display'] text-[24px] font-semibold text-[#000500] leading-none mb-2">
              {type === "money" ? t("monetaryTitle") : t("inkindTitle")}
            </h2>
            <p className="font-['Outfit'] text-[14px] text-[#333733]">
              {t("subtitle")}
            </p>
          </div>
          <button
            onClick={handleClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <X className="w-4 h-4 text-[#000500]" />
          </button>
        </div>

        {/* Success state */}
        {submitted ? (
          <div className="flex flex-col items-center justify-center gap-6 p-12 text-center">
            <div className="w-20 h-20 rounded-full bg-[#23B349]/10 flex items-center justify-center">
              <Check className="w-10 h-10 text-[#23B349]" />
            </div>
            <div>
              <h3 className="font-['Funnel_Display'] text-[24px] font-bold text-[#000500] mb-2">
                Thank You, {form.fullName.split(" ")[0]}!
              </h3>
              <p className="font-['Outfit'] text-[16px] text-[#333733] max-w-md">
                {type === "money"
                  ? `Your donation of ${customAmount || selectedAmount} ETB has been received. We will be in touch shortly.`
                  : `Your in-kind donation request has been received. We will contact you to arrange the details.`}
              </p>
            </div>
            <button
              onClick={handleClose}
              className="px-8 py-3 bg-[#23B349] text-white rounded-full font-['Outfit'] text-[16px] hover:bg-[#1f9d40] transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            {/* Body */}
            <div className="p-8 flex flex-col gap-8">
              {type === "money" ? (
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-3">
                    <label className="font-['Funnel_Display'] text-[16px] font-medium text-[#000500]">
                      {t("selectAmount")}
                    </label>
                    <div className="flex flex-wrap gap-4">
                      {predefinedAmounts.map((amount) => (
                        <button
                          key={amount}
                          onClick={() => { setSelectedAmount(amount); setCustomAmount(""); }}
                          className={`px-6 py-3 rounded-md border font-['Outfit'] text-[14px] transition-colors min-w-[120px] ${
                            selectedAmount === amount
                              ? "bg-[#23B349] text-white border-[#23B349]"
                              : "bg-gray-100 text-[#333733] border-transparent hover:bg-gray-200"
                          }`}
                        >
                          {amount} ETB
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-['Outfit'] text-[14px] text-[#333733]">
                      {t("customAmount")}
                    </label>
                    <input
                      type="number"
                      placeholder={t("amountPlaceholder")}
                      value={customAmount}
                      onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null); }}
                      className="w-full border border-gray-300 rounded-md px-4 py-3 font-['Outfit'] text-[14px] focus:outline-none focus:border-[#23B349] focus:ring-1 focus:ring-[#23B349] transition-all"
                    />
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <label className="font-['Funnel_Display'] text-[16px] font-medium text-[#000500]">
                    {t("selectItems")}
                  </label>
                  <div className="flex flex-col gap-3">
                    {inKindItems.map((item) => {
                      const isSelected = selectedItems.includes(item);
                      return (
                        <button
                          key={item}
                          onClick={() => toggleItem(item)}
                          className={`flex items-center justify-between px-4 py-4 rounded-md border transition-colors ${
                            isSelected
                              ? "bg-[#23B349] text-white border-[#23B349]"
                              : "bg-gray-50 text-[#333733] border-transparent hover:bg-gray-100"
                          }`}
                        >
                          <span className="font-['Outfit'] text-[14px] font-medium">{item}</span>
                          {isSelected && <Check className="w-5 h-5 text-white" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              <hr className="border-t border-gray-200" />

              {/* Information Form */}
              <div className="flex flex-col gap-5">
                <h3 className="font-['Funnel_Display'] text-[18px] font-bold text-[#000500]">
                  {t("yourInfo")}
                </h3>

                <div className="flex flex-col gap-2">
                  <label className="font-['Outfit'] text-[14px] text-[#000500]">
                    {t("fullName")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder={t("namePlaceholder")}
                    value={form.fullName}
                    onChange={(e) => setForm((f) => ({ ...f, fullName: e.target.value }))}
                    className="w-full border border-gray-300 rounded-md px-4 py-3 font-['Outfit'] text-[14px] focus:outline-none focus:border-[#23B349] focus:ring-1 focus:ring-[#23B349] transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-['Outfit'] text-[14px] text-[#000500]">
                    {t("email")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder={t("emailPlaceholder")}
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className="w-full border border-gray-300 rounded-md px-4 py-3 font-['Outfit'] text-[14px] focus:outline-none focus:border-[#23B349] focus:ring-1 focus:ring-[#23B349] transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-['Outfit'] text-[14px] text-[#000500]">
                    {t("phone")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder={t("phonePlaceholder")}
                    value={form.phone}
                    onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                    className="w-full border border-gray-300 rounded-md px-4 py-3 font-['Outfit'] text-[14px] focus:outline-none focus:border-[#23B349] focus:ring-1 focus:ring-[#23B349] transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-['Outfit'] text-[14px] text-[#000500]">
                    {t("message")}
                  </label>
                  <textarea
                    placeholder={t("messagePlaceholder")}
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="w-full border border-gray-300 rounded-md px-4 py-3 font-['Outfit'] text-[14px] focus:outline-none focus:border-[#23B349] focus:ring-1 focus:ring-[#23B349] transition-all resize-none"
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-500 bg-red-50 rounded-lg px-4 py-3">{error}</p>
                )}
              </div>
            </div>

            {/* Footer Actions */}
            <div className="p-8 pt-0 flex flex-col sm:flex-row gap-4 mt-auto">
              <button
                onClick={handleClose}
                className="flex-1 py-4 bg-[#E6E6E6] text-[#000500] font-['Outfit'] text-[18px] rounded-full hover:bg-gray-300 transition-colors"
              >
                {t("cancel")}
              </button>
              <button
                onClick={handleSubmit}
                disabled={submitting}
                className="flex-1 py-4 bg-[#23B349] text-white font-['Outfit'] text-[18px] rounded-full hover:bg-[#1f9d40] shadow-[0px_8px_12px_-2.4px_rgba(0,0,0,0.1)] transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {submitting && <Loader2 className="w-5 h-5 animate-spin" />}
                {t("donation")}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
