import Image from "next/image";
import { Product } from "@frontend/app/[locale]/products/data";
import { useTranslations } from "next-intl";

interface ProductNutritionSectionProps {
  product: Product;
}

const NUTRITION_TRANSLATION_KEY_MAP: Record<string, string> = {
  fat: "fat",
  carbohydrate: "carbohydrate",
  protein: "protein",
  cholesterol: "cholesterol",
  sodium: "sodium",
  potassium: "potassium",
  calcium: "calcium",
  iron: "iron",
};

const INGREDIENT_TRANSLATION_KEY_MAP: Record<string, string> = {
  "whole milk powder": "whole milk powder",
  "canola oil": "canola oil",
  "potassium sorbate": "potassium sorbate",
  "citric acid": "citric acid",
  "artificial flavours": "artificial flavours",
  "tree nuts (pistachio)": "tree nuts (pistachio)",
};

export default function ProductNutritionSection({
  product,
}: ProductNutritionSectionProps) {
  const t = useTranslations("Nutrition");

  const renderNutritionItemLabel = (name: string) => {
    const key = NUTRITION_TRANSLATION_KEY_MAP[name.toLowerCase()];
    if (!key) return name;
    return t(`items.${key}`);
  };

  const renderIngredientLabel = (name: string) => {
    const key = INGREDIENT_TRANSLATION_KEY_MAP[name.toLowerCase()] ?? name.toLowerCase();
    try {
      return t(`ingredientsList.${key}`);
    } catch {
      return name;
    }
  };

  const isBora = product.id === "bora";
  const headerBgColor = product.ui.bgColor;

  const tintBgStyle = {
    background: isBora
      ? "rgba(18, 18, 18, 0.05)"
      : "rgba(35, 179, 73, 0.06)",
  };

  const servingSize = product.content?.nutrition?.servingSize || "Per 1 Piece (70 g)";
  const calories = product.content?.nutrition?.calories || 120;

  return (
    <section className="w-full bg-white px-4 md:px-8 lg:px-16 xl:px-32 pt-8 sm:pt-10 md:pt-12 pb-16 lg:pb-24 z-10">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-16">
        
        {/* Main Nutrition Facts card container */}
        <div className="w-full rounded-[32px] border border-neutral-100 shadow-[0_10px_35px_rgba(0,0,0,0.03)] bg-white overflow-hidden">
          
          {/* Header */}
          <div
            className="w-full py-5 px-6 sm:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 transition-colors duration-500"
            style={{ background: headerBgColor }}
          >
            <h2 className="font-['Funnel_Display'] font-black text-white text-3xl tracking-tight leading-none">
              {t("title")}
            </h2>
            <span className="font-['Outfit'] font-medium text-white/90 text-sm sm:text-base tracking-wide">
              Per serving: {servingSize.replace(/Per\s+1\s+Piece\s+\(/i, "").replace(/\)/, "")}
            </span>
          </div>

          {/* Grid Layout: Left Table (75%) and Right Certifications Panel (25%) */}
          <div className="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-neutral-100">
            
            {/* Left Nutrition Panel: 75% width */}
            <div className="flex-1 p-6 sm:p-8 md:p-10 flex flex-col gap-6">
              
              {/* Calories Summary Strip */}
              <div 
                className="w-full flex items-center justify-between px-6 py-4 rounded-2xl"
                style={tintBgStyle}
              >
                <span className="font-['Outfit'] font-extrabold text-lg text-neutral-800 tracking-tight uppercase">
                  {t("calories")}
                </span>
                <span 
                  className="font-['Outfit'] font-black text-3xl sm:text-4xl tracking-tighter"
                  style={{ color: isBora ? "#1C1C1C" : "#23B349" }}
                >
                  {calories}
                </span>
              </div>

              {/* Table */}
              <div className="w-full overflow-x-auto">
                <table className="w-full min-w-[500px] border-collapse">
                  <thead>
                    <tr className="border-b border-neutral-100 text-left text-neutral-400 font-['Outfit'] font-semibold text-xs sm:text-sm tracking-wider uppercase">
                      <th className="pb-3 w-5/12">Nutrient</th>
                      <th className="pb-3 w-4/12 text-right">Amount per serving</th>
                      <th className="pb-3 w-3/12 text-right">% Daily Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100 font-['Outfit']">
                    {(product.content?.nutrition?.items || []).map((item, i) => (
                      <tr 
                        key={i}
                        className="hover:bg-neutral-50/50 transition-colors duration-200"
                      >
                        {/* Nutrient Name */}
                        <td className="py-3.5 font-medium text-neutral-800 text-sm sm:text-base">
                          {renderNutritionItemLabel(item.name)}
                        </td>
                        {/* Amount */}
                        <td className="py-3.5 text-right font-semibold text-neutral-800 text-sm sm:text-base">
                          {item.value} {item.unit}
                        </td>
                        {/* % Daily Value */}
                        <td className="py-3.5 text-right font-bold text-neutral-900 text-sm sm:text-base">
                          {item.dailyValue ? `${item.dailyValue}%` : "—"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right Certifications Panel: 25% width */}
            <div className="w-full lg:w-[360px] shrink-0 p-6 sm:p-8 md:p-10 bg-neutral-50/30 flex flex-col gap-6">
              <div>
                <h3 className="font-['Outfit'] font-bold text-lg text-neutral-800 tracking-tight mb-1">
                  Quality Certifications
                </h3>
                <p className="font-['Outfit'] text-xs text-neutral-400">
                  Certified quality and food-safety standards
                </p>
              </div>

              {/* Grid 2x2 of Logos */}
              <div className="grid grid-cols-2 gap-4">
                {(product.content?.certifications || []).map((cert, i) => (
                  <div
                    key={i}
                    className="relative flex items-center justify-center bg-white border border-neutral-100 rounded-xl p-3 aspect-square shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:shadow-md transition-all duration-300 group"
                    title={cert.name}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={cert.image}
                        alt={cert.name}
                        fill
                        className="object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Ingredients & Allergens Container */}
        <div className="w-full rounded-[32px] border border-neutral-100 shadow-[0_10px_35px_rgba(0,0,0,0.03)] bg-white overflow-hidden">
          {/* Header */}
          <div
            className="w-full py-5 px-6 sm:px-8 transition-colors duration-500"
            style={{ background: headerBgColor }}
          >
            <h2 className="font-['Funnel_Display'] font-black text-white text-3xl tracking-tight leading-none">
              {t("ingredientsTitle")}
            </h2>
          </div>

          {/* Body */}
          <div className="w-full p-6 sm:p-8 md:p-10 flex flex-col gap-6">
            <p className="font-['Outfit'] font-normal text-base sm:text-lg md:text-xl leading-relaxed text-neutral-800">
              <strong className="font-bold text-neutral-900">{t("ingredients")}:</strong>{" "}
              {product.content?.ingredients?.list
                .map((i) => renderIngredientLabel(i.name))
                .join(", ")}
              .
            </p>
            
            {(product.content?.ingredients?.contains || product.content?.ingredients?.mayContain) && (
              <div className="p-5 bg-neutral-50/50 rounded-2xl border border-neutral-100/50 flex flex-col gap-3">
                {product.content?.ingredients?.contains &&
                  product.content.ingredients.contains.length > 0 && (
                    <p className="font-['Outfit'] text-sm sm:text-base text-neutral-700">
                      <strong className="font-bold text-red-600 uppercase tracking-wider text-xs mr-2">
                        {t("contains")}
                      </strong>
                      {product.content.ingredients.contains
                        .map((c) => renderIngredientLabel(c))
                        .join(", ")}
                      .
                    </p>
                  )}
                {product.content?.ingredients?.mayContain &&
                  product.content.ingredients.mayContain.length > 0 && (
                    <p className="font-['Outfit'] text-sm sm:text-base text-neutral-700">
                      <strong className="font-bold text-neutral-500 uppercase tracking-wider text-xs mr-2">
                        {t("mayContain")}
                      </strong>
                      {product.content.ingredients.mayContain
                        .map((m) => renderIngredientLabel(m))
                        .join(", ")}
                      .
                    </p>
                  )}
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
