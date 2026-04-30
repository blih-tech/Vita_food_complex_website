import { memo } from "react";
import Image from "next/image";
import { clsx } from "clsx";

const COOKIE_IMAGES = [
  "/assets/products/biscuts/biscut-1.png",
  "/assets/products/biscuts/biscut-2.png",
  "/assets/products/biscuts/biscut-3.png",
  "/assets/products/biscuts/biscut-4.png",
  "/assets/products/biscuts/biscut-5.png",
  "/assets/products/biscuts/biscut-6.png",
];

export const DecorativeCookiesSection = memo(() => (
  <div className="w-full max-w-[1400px] mx-auto flex justify-between items-center px-4 md:px-10 relative z-30 mb-20 h-24 md:h-48 mt-10 md:mt-20">
    {COOKIE_IMAGES.map((src, i) => {
      const curveMt =
        i === 0 || i === 5
          ? "mt-0 md:-mt-12"
          : i === 1 || i === 4
            ? "mt-12 md:mt-16"
            : "mt-24 md:mt-32";
      return (
        <div
          key={src}
          className={clsx(
            "relative w-16 h-16 md:w-32 md:h-32 lg:w-40 lg:h-40 hover:scale-110 transition-transform duration-300 drop-shadow-xl",
            curveMt,
          )}
        >
          <Image
            src={src}
            alt=""
            fill
            sizes="(max-width: 768px) 30vw, 15vw"
            className="object-contain"
          />
        </div>
      );
    })}
  </div>
));
DecorativeCookiesSection.displayName = "DecorativeCookiesSection";
