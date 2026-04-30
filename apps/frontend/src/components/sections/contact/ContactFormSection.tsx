"use client";

import { useState } from "react";
import { Mail, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ContactFormSection() {
  const t = useTranslations("Contact");
  
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    message: "",
    agreeToTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted", formData);
  };

  return (
    <section className="relative w-full pt-40 pb-20 flex justify-center">

      <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-32 max-w-[1920px] relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-8 justify-between">
        
        {/* Left Side Content */}
        <div className="lg:w-1/2 flex flex-col justify-center pt-10 lg:pt-20">
          <span className="font-['Outfit'] font-semibold text-[#1A1A1A] text-[16px] uppercase tracking-wider mb-2">
            {t("title")}
          </span>
          <h1 className="font-['Funnel_Display'] font-extrabold text-[#23B349] text-[64px] sm:text-[80px] lg:text-[100px] leading-[0.9] tracking-[-0.02em] mb-6">
            {t("heading")}
          </h1>
          <p className="font-['Outfit'] text-[16px] sm:text-[18px] text-[#1A1A1A]/80 max-w-[420px] leading-relaxed">
            {t("description")}
          </p>
        </div>

        {/* Right Side Form Card */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <div className="bg-white rounded-[32px] p-8 sm:p-10 shadow-[0px_20px_60px_rgba(35,179,73,0.08)] w-full max-w-[560px]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              {/* Full Name */}
              <div className="flex flex-col gap-2">
                <label className="font-['Funnel_Display'] text-[16px] font-medium text-[#1A1A1A]">
                  {t("form.fullName")}
                </label>
                <input
                  type="text"
                  placeholder={t("form.fullNamePlaceholder")}
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full border border-gray-200 rounded-[12px] px-4 py-3.5 font-['Outfit'] text-[15px] focus:outline-none focus:border-[#23B349] focus:ring-1 focus:ring-[#23B349] transition-all"
                  required
                />
              </div>

              {/* Phone Number */}
              <div className="flex flex-col gap-2">
                <label className="font-['Funnel_Display'] text-[16px] font-medium text-[#1A1A1A]">
                  {t("form.phone")}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Phone className="w-5 h-5 text-[#23B349]" />
                  </div>
                  <input
                    type="tel"
                    placeholder={t("form.phonePlaceholder")}
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    className="w-full border border-gray-200 rounded-[12px] pl-12 pr-4 py-3.5 font-['Outfit'] text-[15px] focus:outline-none focus:border-[#23B349] focus:ring-1 focus:ring-[#23B349] transition-all"
                    required
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="flex flex-col gap-2">
                <label className="font-['Funnel_Display'] text-[16px] font-medium text-[#1A1A1A]">
                  {t("form.email")}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="w-5 h-5 text-[#23B349]" />
                  </div>
                  <input
                    type="email"
                    placeholder={t("form.emailPlaceholder")}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border border-gray-200 rounded-[12px] pl-12 pr-4 py-3.5 font-['Outfit'] text-[15px] focus:outline-none focus:border-[#23B349] focus:ring-1 focus:ring-[#23B349] transition-all"
                    required
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="font-['Funnel_Display'] text-[16px] font-medium text-[#1A1A1A]">
                  {t("form.message")}
                </label>
                <textarea
                  placeholder={t("form.messagePlaceholder")}
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full border border-gray-200 rounded-[12px] px-4 py-3.5 font-['Outfit'] text-[15px] focus:outline-none focus:border-[#23B349] focus:ring-1 focus:ring-[#23B349] transition-all resize-none"
                  required
                />
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-center gap-3 pt-2">
                <input
                  type="checkbox"
                  id="terms"
                  checked={formData.agreeToTerms}
                  onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                  className="w-5 h-5 rounded border-gray-300 text-[#23B349] focus:ring-[#23B349]"
                  required
                />
                <label htmlFor="terms" className="font-['Outfit'] text-[13px] sm:text-[14px] text-[#1A1A1A]/80 cursor-pointer">
                  {t("form.agreeText")} <span className="text-[#23B349] hover:underline">{t("form.terms")}</span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#23B349] text-white py-4 rounded-full font-['Funnel_Display'] text-[18px] font-medium hover:bg-[#1f9d40] hover:shadow-lg hover:-translate-y-0.5 transition-all mt-2"
              >
                {t("form.submit")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
