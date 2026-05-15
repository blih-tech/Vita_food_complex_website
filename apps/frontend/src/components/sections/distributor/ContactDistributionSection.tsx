"use client";

import { useTranslations } from "next-intl";
import { ClipboardList, MapPin, Package } from "lucide-react";

export default function ContactDistributionSection() {
  const t = useTranslations("Distributor");

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
        <div className="w-full lg:w-[896px] bg-white border border-[#E8E8E8] shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] rounded-[10px] p-6 sm:p-8 flex flex-col gap-10">
          
          {/* Section 1: Business Information */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 bg-[#C8F7D5] rounded-[10px]">
                <ClipboardList size={18} color="#23B349" strokeWidth={2.5} />
              </div>
              <h3 
                className="font-medium text-[24px] text-[#333733] tracking-[-0.004em]"
                style={{ fontFamily: "var(--font-funnel-display), 'Funnel Display', sans-serif" }}
              >
                1. Business Information
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <label className="flex flex-col gap-2">
                <span className="text-[16px] text-[#404040]" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>Business Name *</span>
                <input type="text" placeholder="Enter your business name" className="border border-[#D1D5DC] rounded-[10px] p-3 text-[16px] placeholder:text-[#8A8C8A] focus:outline-none focus:border-[#23B349] focus:ring-1 focus:ring-[#23B349]" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }} />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[16px] text-[#404040]" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>Business Type *</span>
                <input type="text" placeholder="e.g., LLC, Corporation" className="border border-[#D1D5DC] rounded-[10px] p-3 text-[16px] placeholder:text-[#8A8C8A] focus:outline-none focus:border-[#23B349] focus:ring-1 focus:ring-[#23B349]" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }} />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[16px] text-[#404040]" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>Business ID *</span>
                <input type="text" placeholder="Enter business ID" className="border border-[#D1D5DC] rounded-[10px] p-3 text-[16px] placeholder:text-[#8A8C8A] focus:outline-none focus:border-[#23B349] focus:ring-1 focus:ring-[#23B349]" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }} />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[16px] text-[#404040]" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>Business Contact Person *</span>
                <input type="text" placeholder="Contact person name" className="border border-[#D1D5DC] rounded-[10px] p-3 text-[16px] placeholder:text-[#8A8C8A] focus:outline-none focus:border-[#23B349] focus:ring-1 focus:ring-[#23B349]" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }} />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[16px] text-[#404040]" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>Phone Number *</span>
                <input type="tel" placeholder="+1 (555) 000-0000" className="border border-[#D1D5DC] rounded-[10px] p-3 text-[16px] placeholder:text-[#8A8C8A] focus:outline-none focus:border-[#23B349] focus:ring-1 focus:ring-[#23B349]" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }} />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[16px] text-[#404040]" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>Email Address *</span>
                <input type="email" placeholder="email@example.com" className="border border-[#D1D5DC] rounded-[10px] p-3 text-[16px] placeholder:text-[#8A8C8A] focus:outline-none focus:border-[#23B349] focus:ring-1 focus:ring-[#23B349]" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }} />
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
                style={{ fontFamily: "var(--font-funnel-display), 'Funnel Display', sans-serif" }}
              >
                2. Location Details
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <label className="flex flex-col gap-2">
                <span className="text-[16px] text-[#404040]" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>Warehouse Address *</span>
                <input type="text" placeholder="Enter warehouse address" className="border border-[#D1D5DC] rounded-[10px] p-3 text-[16px] placeholder:text-[#8A8C8A] focus:outline-none focus:border-[#23B349] focus:ring-1 focus:ring-[#23B349]" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }} />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[16px] text-[#404040]" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>City *</span>
                <input type="text" placeholder="Enter city" className="border border-[#D1D5DC] rounded-[10px] p-3 text-[16px] placeholder:text-[#8A8C8A] focus:outline-none focus:border-[#23B349] focus:ring-1 focus:ring-[#23B349]" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }} />
              </label>
              <label className="flex flex-col gap-2 sm:col-span-2">
                <span className="text-[16px] text-[#404040]" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>Full Address *</span>
                <input type="text" placeholder="Enter full address" className="border border-[#D1D5DC] rounded-[10px] p-3 text-[16px] placeholder:text-[#8A8C8A] focus:outline-none focus:border-[#23B349] focus:ring-1 focus:ring-[#23B349]" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }} />
              </label>
              <label className="flex flex-col gap-2 sm:col-span-2">
                <span className="text-[16px] text-[#404040]" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>Additional Note</span>
                <textarea rows={3} placeholder="Add any additional notes here (optional)" className="border border-[#D1D5DC] rounded-[10px] p-3 text-[16px] placeholder:text-[#8A8C8A] resize-none focus:outline-none focus:border-[#23B349] focus:ring-1 focus:ring-[#23B349]" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }} />
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
                  style={{ fontFamily: "var(--font-funnel-display), 'Funnel Display', sans-serif" }}
                >
                  3. Products Interest
                </h3>
              </div>
              <p className="font-normal text-[14px] text-[#333733]" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>
                Select the product categories you are interested in distributing
              </p>
            </div>
            
            <div className="flex flex-col gap-3">
              <span className="text-[16px] text-[#404040]" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>Product Categories *</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="flex items-center gap-3 border border-[#E5E7EB] rounded-[10px] p-3 cursor-pointer hover:border-[#23B349] transition-colors">
                  <input type="checkbox" className="w-4 h-4 rounded-[2px] border-[#8A8C8A] text-[#23B349] focus:ring-[#23B349]" />
                  <span className="font-medium text-[14px] text-[#404040]" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>Biscuits Products</span>
                </label>
                <label className="flex items-center gap-3 border border-[#E5E7EB] rounded-[10px] p-3 cursor-pointer hover:border-[#23B349] transition-colors">
                  <input type="checkbox" className="w-4 h-4 rounded-[2px] border-[#8A8C8A] text-[#23B349] focus:ring-[#23B349]" />
                  <span className="font-medium text-[14px] text-[#404040]" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>Flour Products</span>
                </label>
              </div>
            </div>
          </div>

          {/* Submit Action */}
          <div className="flex justify-end pt-6 border-t border-[#E5E7EB] mt-2">
            <button
              type="button"
              className="bg-[#23B349] text-white font-medium text-[16px] px-8 py-3 rounded-full hover:bg-[#1f9f41] transition-colors shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]"
              style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
            >
              Submit Application
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
