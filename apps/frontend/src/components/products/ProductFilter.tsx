import { memo } from "react";
import { clsx } from "clsx";

export interface ProductFilterProps {
  categories: string[];
  activeCategory: string;
  onChange: (category: string) => void;
  getLabel: (category: string) => string;
}

export const ProductFilter = memo(
  ({ categories, activeCategory, onChange, getLabel }: ProductFilterProps) => (
    <section className="w-full bg-white px-6 lg:px-20 pb-12">
      <div className="max-w-7xl mx-auto flex justify-center">
        <div
          className="bg-[#f4f4f4] p-1.5 rounded-full flex items-center overflow-x-auto max-w-full"
          role="tablist"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                role="tab"
                aria-selected={isActive}
                onClick={() => onChange(category)}
                className={clsx(
                  "flex items-center gap-2.5 px-8 py-3 rounded-full font-['Outfit'] font-semibold text-[15px] whitespace-nowrap transition-all duration-300",
                  isActive
                    ? "bg-[#23B349] text-white shadow-sm"
                    : "text-[#333333] hover:bg-black/5"
                )}
              >
                {/* 4-point Star (Sparkle) Icon */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className={clsx("transition-colors duration-300", isActive ? "text-white" : "text-[#333333]")}
                >
                  <path d="M12 0C12 0 12 10.5 24 12C12 13.5 12 24 12 24C12 24 12 13.5 0 12C12 10.5 12 0 12 0Z" />
                </svg>
                {getLabel(category)}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  ),
);
ProductFilter.displayName = "ProductFilter";
