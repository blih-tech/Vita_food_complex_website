"use client";

import { useState } from "react";
import {
  FileText,
  Globe,
  User,
  Users,
  Package,
  ShoppingCart,
  Copyright,
  Lock,
  ShieldAlert,
  Mail,
} from "lucide-react";

const NAV_ITEMS = [
  { id: "acceptance", label: "Acceptance of Terms", icon: FileText },
  { id: "use", label: "Use of Website", icon: Globe },
  { id: "content", label: "User Content", icon: User },
  { id: "guidelines", label: "Community Guidelines", icon: Users },
  { id: "products", label: "Products", icon: Package },
  { id: "orders", label: "Orders", icon: ShoppingCart },
  { id: "ip", label: "Intellectual Property", icon: Copyright },
  { id: "privacy", label: "Privacy", icon: Lock },
  { id: "liability", label: "Liability", icon: ShieldAlert },
  { id: "contact", label: "Contact", icon: Mail },
];

export default function TermsSidebar() {
  const [activeItem, setActiveItem] = useState("acceptance");

  const scrollToSection = (id: string) => {
    setActiveItem(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -140; // Account for fixed header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white rounded-[24px] p-6 lg:p-8 shadow-sm border border-gray-100 flex flex-col gap-6">
      <h3 className="font-['Funnel_Display'] font-bold text-[#1F2937] text-[18px]">
        ON THIS PAGE
      </h3>
      
      <nav className="flex flex-col gap-2">
        {NAV_ITEMS.map((item) => {
          const isActive = activeItem === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex items-center gap-4 px-4 py-3 rounded-[12px] transition-colors w-full text-left group ${
                isActive 
                  ? "bg-[#23B349] text-white" 
                  : "hover:bg-gray-50 text-[#333733]"
              }`}
            >
              <item.icon 
                className={`w-5 h-5 shrink-0 ${isActive ? "text-white" : "text-gray-500 group-hover:text-[#23B349] transition-colors"}`} 
              />
              <span className={`font-['Outfit'] text-[16px] leading-none ${isActive ? "font-medium" : "font-normal"}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
