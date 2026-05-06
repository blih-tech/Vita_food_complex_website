import { memo } from "react";
import Image from "next/image";
import { Product } from "@frontend/app/[locale]/products/data";
import { ProductCard } from "./ProductCard";
import { useTranslations } from "next-intl";

const EmptyState = memo(() => {
  const t = useTranslations("ProductsPage");
  return (
    <div className="w-full flex flex-col items-center justify-center py-20 text-center">
      <div className="w-24 h-24 relative opacity-40 mb-6">
        <Image
          src="/assets/products/biscuts/biscut-1.png"
          alt=""
          fill
          className="object-contain grayscale"
        />
      </div>
      <h3 className="font-['Funnel_Display'] font-bold text-2xl text-gray-400 mb-2">
        {t("emptyState")}
      </h3>
    </div>
  );
});
EmptyState.displayName = "EmptyState";

export const ProductGrid = memo(({ items }: { items: Product[] }) => (
  <section className="w-full px-6 lg:px-20 pb-24 bg-white">
    <div className="max-w-7xl mx-auto">
      {items.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-20 lg:gap-y-32 xl:gap-x-8 justify-items-center pt-8">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  </section>
));
ProductGrid.displayName = "ProductGrid";
