"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ClipboardList, MapPin, Package, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import api from "@/lib/api";

interface DistributorFormData {
  businessName: string;
  businessType: string;
  businessId: string;
  contactPerson: string;
  phoneNumber: string;
  email: string;
  warehouseAddress: string;
  city: string;
  fullAddress: string;
  additionalNote: string;
  productInterests: string[];
}

const INITIAL_FORM: DistributorFormData = {
  businessName: "",
  businessType: "",
  businessId: "",
  contactPerson: "",
  phoneNumber: "",
  email: "",
  warehouseAddress: "",
  city: "",
  fullAddress: "",
  additionalNote: "",
  productInterests: [],
};

const PRODUCT_CATEGORIES = [
  { id: "biscuits", label: "Biscuits Products" },
  { id: "flour", label: "Flour Products" },
];

export default function ContactDistributionSection() {
  const t = useTranslations("Distributor");

  const [formData, setFormData] = useState<DistributorFormData>(INITIAL_FORM);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (field: keyof DistributorFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleProductToggle = (productId: string) => {
    setFormData((prev) => ({
      ...prev,
      productInterests: prev.productInterests.includes(productId)
        ? prev.productInterests.filter((p) => p !== productId)
        : [...prev.productInterests, productId],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await api.post("/distributor-applications", formData);
      setStatus("success");
      setFormData(INITIAL_FORM);
    } catch {
      setStatus("error");
    }
  };

  const inputCls =
    "border border-[#D1D5DC] rounded-[10px] p-3 text-[16px] placeholder:text-[#8A8C8A] focus:outline-none focus:border-[#23B349] focus:ring-1 focus:ring-[#23B349]";
  const fontOutfit = { fontFamily: "var(--font-outfit), 'Outfit', sans-serif" };
  const fontFunnel = { fontFamily: "var(--font-funnel-display), 'Funnel Display', sans-serif" };

  return (
    <section className="w-full bg-white py-16 lg:py-24" id="contact-form">
      <div className="mx-auto flex flex-col lg:flex-row items-start lg:justify-between gap-12 lg:gap-16 max-w-[1920px] px-4 sm:px-6 lg:px-[128px]">
        {/* Left Side: Text */}
        <div className="flex flex-col gap-6 w-full lg:max-w-[545px]">
          <h2
            style={{
              fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(48px, 6vw, 80px)",
              lineHeight: "0.9",
              letterSpacing: "-0.02em",
              color: "#23B349",
            }}
          >
            Apply for Distribution Partnership
          </h2>
          <p
            style={{
              fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
              fontWeight: 500,
              fontSize: "clamp(16px, 2vw, 20px)",
              lineHeight: "1.25",
              letterSpacing: "-0.004em",
              color: "#404040",
            }}
          >
            Submit your business profile to become an authorized distributor. Every application is carefully reviewed to ensure strong partnership alignment.
          </p>
        </div>

        {/* Right Side: Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full lg:w-[896px] bg-white border border-[#E8E8E8] shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] rounded-[10px] p-6 sm:p-8 flex flex-col gap-10"
        >
          
          {/* Section 1: Business Information */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 bg-[#C8F7D5] rounded-[10px]">
                <ClipboardList size={18} color="#23B349" strokeWidth={2.5} />
              </div>
              <h3 
                className="font-medium text-[24px] text-[#333733] tracking-[-0.004em]"
                style={fontFunnel}
              >
                1. Business Information
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <label className="flex flex-col gap-2">
                <span className="text-[16px] text-[#404040]" style={fontOutfit}>Business Name *</span>
                <input
                  type="text"
                  required
                  placeholder="Enter your business name"
                  value={formData.businessName}
                  onChange={(e) => handleChange("businessName", e.target.value)}
                  className={inputCls}
                  style={fontOutfit}
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[16px] text-[#404040]" style={fontOutfit}>Business Type *</span>
                <input
                  type="text"
                  required
                  placeholder="e.g., LLC, Corporation"
                  value={formData.businessType}
                  onChange={(e) => handleChange("businessType", e.target.value)}
                  className={inputCls}
                  style={fontOutfit}
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[16px] text-[#404040]" style={fontOutfit}>Business ID *</span>
                <input
                  type="text"
                  required
                  placeholder="Enter business ID"
                  value={formData.businessId}
                  onChange={(e) => handleChange("businessId", e.target.value)}
                  className={inputCls}
                  style={fontOutfit}
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[16px] text-[#404040]" style={fontOutfit}>Business Contact Person *</span>
                <input
                  type="text"
                  required
                  placeholder="Contact person name"
                  value={formData.contactPerson}
                  onChange={(e) => handleChange("contactPerson", e.target.value)}
                  className={inputCls}
                  style={fontOutfit}
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[16px] text-[#404040]" style={fontOutfit}>Phone Number *</span>
                <input
                  type="tel"
                  required
                  placeholder="+251 911 000 0000"
                  value={formData.phoneNumber}
                  onChange={(e) => handleChange("phoneNumber", e.target.value)}
                  className={inputCls}
                  style={fontOutfit}
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[16px] text-[#404040]" style={fontOutfit}>Email Address *</span>
                <input
                  type="email"
                  required
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className={inputCls}
                  style={fontOutfit}
                />
              </label>
            </div>
          </div>

          {/* Section 2: Location Details */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 bg-[#D2FFD6] rounded-[10px]">
                <MapPin size={18} color="#23B349" strokeWidth={2.5} />
              </div>
              <h3 
                className="font-medium text-[24px] text-[#333733] tracking-[-0.004em]"
                style={fontFunnel}
              >
                2. Location Details
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <label className="flex flex-col gap-2">
                <span className="text-[16px] text-[#404040]" style={fontOutfit}>Warehouse Address *</span>
                <input
                  type="text"
                  required
                  placeholder="Enter warehouse address"
                  value={formData.warehouseAddress}
                  onChange={(e) => handleChange("warehouseAddress", e.target.value)}
                  className={inputCls}
                  style={fontOutfit}
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[16px] text-[#404040]" style={fontOutfit}>City *</span>
                <input
                  type="text"
                  required
                  placeholder="Enter city"
                  value={formData.city}
                  onChange={(e) => handleChange("city", e.target.value)}
                  className={inputCls}
                  style={fontOutfit}
                />
              </label>
              <label className="flex flex-col gap-2 sm:col-span-2">
                <span className="text-[16px] text-[#404040]" style={fontOutfit}>Full Address *</span>
                <input
                  type="text"
                  required
                  placeholder="Enter full address"
                  value={formData.fullAddress}
                  onChange={(e) => handleChange("fullAddress", e.target.value)}
                  className={inputCls}
                  style={fontOutfit}
                />
              </label>
              <label className="flex flex-col gap-2 sm:col-span-2">
                <span className="text-[16px] text-[#404040]" style={fontOutfit}>Additional Note</span>
                <textarea
                  rows={3}
                  placeholder="Add any additional notes here (optional)"
                  value={formData.additionalNote}
                  onChange={(e) => handleChange("additionalNote", e.target.value)}
                  className={`${inputCls} resize-none`}
                  style={fontOutfit}
                />
              </label>
            </div>
          </div>

          {/* Section 3: Products Interest */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 bg-[#D3FFDB] rounded-[10px]">
                  <Package size={18} color="#23B349" strokeWidth={2.5} />
                </div>
                <h3 
                  className="font-medium text-[24px] text-[#333733] tracking-[-0.004em]"
                  style={fontFunnel}
                >
                  3. Products Interest
                </h3>
              </div>
              <p className="font-normal text-[14px] text-[#333733]" style={fontOutfit}>
                Select the product categories you are interested in distributing
              </p>
            </div>
            
            <div className="flex flex-col gap-3">
              <span className="text-[16px] text-[#404040]" style={fontOutfit}>Product Categories *</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PRODUCT_CATEGORIES.map((cat) => (
                  <label
                    key={cat.id}
                    className={`flex items-center gap-3 border rounded-[10px] p-3 cursor-pointer transition-colors ${
                      formData.productInterests.includes(cat.id)
                        ? "border-[#23B349] bg-[#23B349]/5"
                        : "border-[#E5E7EB] hover:border-[#23B349]"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={formData.productInterests.includes(cat.id)}
                      onChange={() => handleProductToggle(cat.id)}
                      className="w-4 h-4 rounded-[2px] border-[#8A8C8A] text-[#23B349] focus:ring-[#23B349]"
                    />
                    <span className="font-medium text-[14px] text-[#404040]" style={fontOutfit}>{cat.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Status feedback */}
          {status === "success" && (
            <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-[10px] px-4 py-3">
              <CheckCircle className="w-5 h-5 text-[#23B349] shrink-0" />
              <p className="text-[14px] text-green-800" style={fontOutfit}>
                Application submitted successfully! We&apos;ll review it and get back to you soon.
              </p>
            </div>
          )}
          {status === "error" && (
            <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-[10px] px-4 py-3">
              <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
              <p className="text-[14px] text-red-700" style={fontOutfit}>
                Something went wrong. Please try again.
              </p>
            </div>
          )}

          {/* Submit Action */}
          <div className="flex justify-end pt-6 border-t border-[#E5E7EB] mt-2">
            <button
              type="submit"
              disabled={status === "sending" || status === "success"}
              className="bg-[#23B349] text-white font-medium text-[16px] px-8 py-3 rounded-full hover:bg-[#1f9f41] transition-colors shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2"
              style={fontOutfit}
            >
              {status === "sending" ? (
                <><Loader2 className="w-5 h-5 animate-spin" /> Submitting…</>
              ) : status === "success" ? (
                <><CheckCircle className="w-5 h-5" /> Submitted!</>
              ) : (
                "Submit Application"
              )}
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}
