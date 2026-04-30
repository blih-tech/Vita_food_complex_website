import Image from "next/image";
import { Product } from "@frontend/app/[locale]/products/data";

interface ProductNutritionSectionProps {
  product: Product;
}

export default function ProductNutritionSection({
  product,
}: ProductNutritionSectionProps) {
  return (
    <section className="w-full bg-white px-4 md:px-8 lg:px-32 py-16 lg:py-24 z-10">
      <div className="max-w-[1664px] mx-auto flex flex-col gap-20">
        {/* Nutrition Facts */}
        <div className="w-full flex flex-col">
          {/* Header */}
          <div
            className="w-full h-20 rounded-t-3xl flex items-center px-7"
            style={{ background: product.ui.bgColor }}
          >
            <h2 className="font-['Funnel_Display'] font-bold text-white text-3xl tracking-tight">
              Nutritional Facts
            </h2>
          </div>

          {/* Body */}
          <div className="w-full rounded-b-3xl border-b border-l border-r border-[#E8E8E8] flex flex-col lg:flex-row pt-12 pb-14 gap-12">
            {/* Left Side: Table */}
            <div className="flex-1 flex flex-col pt-5 px-7 lg:px-12 overflow-x-auto">
              {/* Table Header */}
              <div className="flex w-full pb-6 border-b border-[#E8E8E8] items-end min-w-[700px]">
                <div className="w-5/12">
                  <span className="font-['Outfit'] font-bold text-xl md:text-3xl text-black whitespace-nowrap">
                    Nutritional Details
                  </span>
                </div>
                <div className="w-1/3 text-right">
                  <span className="font-['Outfit'] font-normal text-lg md:text-3xl text-black tracking-tight whitespace-nowrap">
                    {product.content?.nutrition?.servingSize}
                  </span>
                </div>
                <div className="w-1/4 text-right">
                  <span className="font-['Outfit'] font-normal text-lg md:text-3xl text-black tracking-tight whitespace-nowrap">
                    % Daily Value
                  </span>
                </div>
              </div>

              {/* Calories Row */}
              <div className="flex w-full py-6 border-b border-[#E8E8E8] items-center min-w-[700px]">
                <span className="font-['Outfit'] font-black text-2xl md:text-3xl uppercase text-black tracking-tighter whitespace-nowrap">
                  CALORIES {product.content?.nutrition?.calories}
                </span>
              </div>

              {/* Nutrition Items */}
              {(product.content?.nutrition?.items || []).map((item, i) => (
                <div
                  key={i}
                  className="flex w-full py-5 border-b border-[#E8E8E8] last:border-0 items-center min-w-[700px]"
                >
                  <div className="w-5/12">
                    <span className="font-['Outfit'] font-medium text-lg md:text-2xl text-black whitespace-nowrap">
                      {item.name}
                    </span>
                  </div>
                  <div className="w-1/3 text-right">
                    <span className="font-['Inter'] font-medium text-lg md:text-2xl text-black tracking-tight whitespace-nowrap">
                      {item.value} {item.unit}
                    </span>
                  </div>
                  <div className="w-1/4 text-right">
                    <span className="font-['Inter'] font-medium text-lg md:text-2xl text-black tracking-tight whitespace-nowrap">
                      {item.dailyValue ? `${item.dailyValue} %` : ""}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side: Badges */}
            <div className="w-full lg:w-96 shrink-0 flex flex-wrap gap-6 px-7 lg:px-0 lg:pr-12 items-start content-start justify-center lg:justify-start">
              {product.content?.certifications?.map((cert, i) => (
                <div
                  key={i}
                  className="relative w-24 h-24 lg:w-32 lg:h-32"
                >
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ingredients & Allergens */}
        <div className="w-full flex flex-col">
          {/* Header */}
          <div
            className="w-full h-20 rounded-t-3xl flex items-center px-7"
            style={{ background: product.ui.bgColor }}
          >
            <h2 className="font-['Funnel_Display'] font-bold text-white text-3xl tracking-tight">
              Ingredients & Allergens
            </h2>
          </div>

          {/* Body */}
          <div className="w-full rounded-b-3xl border-b border-l border-r border-[#E8E8E8] px-7 py-14 lg:px-7 lg:pb-28">
            <div className="flex flex-col gap-10 max-w-7xl">
              <p className="font-['Outfit'] font-normal text-xl md:text-3xl leading-snug tracking-tight text-black">
                Ingredients:{" "}
                {product.content?.ingredients?.list
                  .map((i) => i.name)
                  .join(", ")}
                .
              </p>
              <p className="font-['Outfit'] font-normal text-xl md:text-3xl leading-snug tracking-tight text-black">
                {product.content?.ingredients?.contains &&
                  product.content.ingredients.contains.length > 0 && (
                    <>
                      Contains:{" "}
                      {product.content.ingredients.contains.join(", ")}.
                      <br />
                    </>
                  )}
                {product.content?.ingredients?.mayContain &&
                  product.content.ingredients.mayContain.length > 0 && (
                    <>
                      May Contain:{" "}
                      {product.content.ingredients.mayContain.join(", ")}.
                    </>
                  )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
