"use client";

import { useState } from "react";
import { X, Check } from "lucide-react";

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "money" | "inkind";
}

export default function DonationModal({ isOpen, onClose, type }: DonationModalProps) {
  const [selectedAmount, setSelectedAmount] = useState<string | null>(null);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const predefinedAmounts = ["500", "1,000", "2,500", "5,000", "10,000"];
  const inKindItems = [
    "Wheat Grains (bags)",
    "Flour Products",
    "Biscuits & Food Items",
    "Student Equipments",
  ];

  const toggleItem = (item: string) => {
    setSelectedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
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
              {type === "money" ? "Monetary Donation" : "In-Kind Donation"}
            </h2>
            <p className="font-['Outfit'] text-[14px] text-[#333733]">
              Your contribution makes a real difference
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <X className="w-4 h-4 text-[#000500]" />
          </button>
        </div>

        {/* Body */}
        <div className="p-8 flex flex-col gap-8">
          {type === "money" ? (
            <div className="flex flex-col gap-6">
              {/* Select Amount */}
              <div className="flex flex-col gap-3">
                <label className="font-['Funnel_Display'] text-[16px] font-medium text-[#000500]">
                  Select Amount (ETB)
                </label>
                <div className="flex flex-wrap gap-4">
                  {predefinedAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => {
                        setSelectedAmount(amount);
                        setCustomAmount("");
                      }}
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

              {/* Custom Amount */}
              <div className="flex flex-col gap-2">
                <label className="font-['Outfit'] text-[14px] text-[#333733]">
                  Or enter custom amount
                </label>
                <input
                  type="number"
                  placeholder="Enter amount in ETB"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                  className="w-full border border-gray-300 rounded-md px-4 py-3 font-['Outfit'] text-[14px] focus:outline-none focus:border-[#23B349] focus:ring-1 focus:ring-[#23B349] transition-all"
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <label className="font-['Funnel_Display'] text-[16px] font-medium text-[#000500]">
                Select Items to Donate
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
                      <span className="font-['Outfit'] text-[14px] font-medium">
                        {item}
                      </span>
                      {isSelected && <Check className="w-5 h-5 text-white" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Divider */}
          <hr className="border-t border-gray-200" />

          {/* Information Form */}
          <div className="flex flex-col gap-5">
            <h3 className="font-['Funnel_Display'] text-[18px] font-bold text-[#000500]">
              Your Information
            </h3>

            <div className="flex flex-col gap-2">
              <label className="font-['Outfit'] text-[14px] text-[#000500]">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-md px-4 py-3 font-['Outfit'] text-[14px] focus:outline-none focus:border-[#23B349] focus:ring-1 focus:ring-[#23B349] transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-['Outfit'] text-[14px] text-[#000500]">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full border border-gray-300 rounded-md px-4 py-3 font-['Outfit'] text-[14px] focus:outline-none focus:border-[#23B349] focus:ring-1 focus:ring-[#23B349] transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-['Outfit'] text-[14px] text-[#000500]">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="+251 XXX XXX XXX"
                className="w-full border border-gray-300 rounded-md px-4 py-3 font-['Outfit'] text-[14px] focus:outline-none focus:border-[#23B349] focus:ring-1 focus:ring-[#23B349] transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-['Outfit'] text-[14px] text-[#000500]">
                Message
              </label>
              <textarea
                placeholder="Say something ..."
                rows={4}
                className="w-full border border-gray-300 rounded-md px-4 py-3 font-['Outfit'] text-[14px] focus:outline-none focus:border-[#23B349] focus:ring-1 focus:ring-[#23B349] transition-all resize-none"
              ></textarea>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-8 pt-0 flex flex-col sm:flex-row gap-4 mt-auto">
          <button
            onClick={onClose}
            className="flex-1 py-4 bg-[#E6E6E6] text-[#000500] font-['Outfit'] text-[18px] rounded-full hover:bg-gray-300 transition-colors"
          >
            Cancel
          </button>
          <button className="flex-1 py-4 bg-[#23B349] text-white font-['Outfit'] text-[18px] rounded-full hover:bg-[#1f9d40] shadow-[0px_8px_12px_-2.4px_rgba(0,0,0,0.1)] transition-colors">
            Donation
          </button>
        </div>
      </div>
    </div>
  );
}
