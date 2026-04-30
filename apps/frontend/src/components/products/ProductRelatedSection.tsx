import Image from "next/image";
import { Link } from "@frontend/navigation";
import { Product } from "@/app/[locale]/products/data";

interface ProductRelatedSectionProps {
  relatedProducts: Product[];
}


export default function ProductRelatedSection({ relatedProducts }: ProductRelatedSectionProps) {
  return (
    <section className="w-full bg-white px-4 md:px-8 lg:px-32 py-16">
      <div className="max-w-[1664px] mx-auto flex justify-center">
        <div className="flex flex-wrap justify-center gap-10 md:gap-16">
          {relatedProducts.map((relatedProduct) => (
            <Link
              key={relatedProduct.id}
              href={`/products/${relatedProduct.id}`}
              className="group relative flex flex-col items-center w-48 md:w-64"
            >
              {/* Background Vector effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 scale-110 group-hover:scale-125 transition-transform duration-300">
                <Image
                  src="/assets/products/items/related-vector.png"
                  alt="Related Product Background"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 250px, 350px"
                />
              </div>

              {/* Product Image */}
              <div className="relative w-full h-36 md:h-48 z-10 flex items-center justify-center mb-6">
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
