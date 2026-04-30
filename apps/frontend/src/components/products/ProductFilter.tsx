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
          className="bg-gray-100 p-1.5 rounded-full flex gap-2 overflow-x-auto max-w-full"
          role="tablist"
        >
          {categories.map((category) => (
            <button
              key={category}
              role="tab"
              aria-selected={activeCategory === category}
              onClick={() => onChange(category)}
              className={clsx(
                "px-8 py-3 rounded-full font-['Outfit'] font-bold text-sm whitespace-nowrap transition-all duration-300",
                activeCategory === category
                  ? "bg-[#23B349] text-white shadow-md"
                  : "text-gray-500 hover:text-black",
              )}
            >
              {getLabel(category)}
            </button>
          ))}
        </div>
      </div>
    </section>
  ),
);
ProductFilter.displayName = "ProductFilter";
