import Image from "next/image";
import { Link } from "@frontend/navigation";
import { Product } from "@/app/[locale]/products/data";

interface ProductRelatedSectionProps {
  relatedProducts: Product[];
}

// Inline SVG for the starburst background used in related products
const Starburst = ({ color }: { color: string }) => (
  <svg
    viewBox="0 0 100 100"
    className="w-full h-full absolute inset-0 opacity-20"
    preserveAspectRatio="none"
  >
    <path
      fill={color}
      d="M50 0L58.8 15.4L75 8.7L76.5 25.8L93.3 26.5L86.6 42.7L100 50L86.6 57.3L93.3 73.5L76.5 74.2L75 91.3L58.8 84.6L50 100L41.2 84.6L25 91.3L23.5 74.2L6.7 73.5L13.4 57.3L0 50L13.4 42.7L6.7 26.5L23.5 25.8L25 8.7L41.2 15.4L50 0Z"
    />
  </svg>
);

export default function ProductRelatedSection({ relatedProducts }: ProductRelatedSectionProps) {
  return (
    <section className="w-full bg-white px-4 md:px-8 lg:px-24 py-16">
      <div className="max-w-[1664px] mx-auto flex justify-center">
        <div className="flex flex-wrap justify-center gap-10 md:gap-16">
          {relatedProducts.map((relatedProduct) => (
            <Link
              key={relatedProduct.id}
              href={`/products/${relatedProduct.id}`}
              className="group relative flex flex-col items-center w-[180px] md:w-[220px]"
            >
              {/* Background Starburst effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] z-0 scale-90 group-hover:scale-100 transition-transform duration-300">
                <Starburst color={relatedProduct.ui.bgColor} />
              </div>

              {/* Product Image */}
              <div className="relative w-full h-[120px] md:h-[150px] z-10 flex items-center justify-center mb-6">
                <Image
                  src={relatedProduct.media.image}
                  alt={relatedProduct.name}
                  fill
                  className="object-contain group-hover:-translate-y-2 transition-transform duration-300 drop-shadow-xl"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
