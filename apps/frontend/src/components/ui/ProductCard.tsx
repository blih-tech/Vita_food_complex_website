import Image from "next/image";
import { Link } from "@frontend/navigation";

export interface ProductCardProps {
  id: string;
  name: string;
  media: {
    image: string;
    tagIcon?: string;
  };
  ui: {
    bgColor: string;
    nameColor?: string;
  };
}

export function ProductCard({
  id,
  name,
  media,
  ui,
}: ProductCardProps) {
  return (
    <Link
      href={`/products/${id}`}
      className="
        group relative
        w-full aspect-539/500
        flex flex-col mt-8
      "
    >
      {/* --- Background Container (Clipped) --- */}
      <div
        className="absolute inset-0 rounded-[16px] overflow-hidden transition-shadow duration-500"
        style={{ background: ui.bgColor }}
      >
        {/* Top Gradient Overlay */}
        <div className="absolute inset-0 top-0 h-[50%] bg-gradient-to-b from-black to-transparent mix-blend-overlay opacity-50 pointer-events-none z-0" />

        {/* Bottom Gradient Overlay */}
        <div className="absolute inset-0 top-[25%] h-[75%] bg-gradient-to-t from-black to-transparent mix-blend-overlay opacity-80 pointer-events-none z-0" />

        {/* Top Ellipse Highlight */}
        <div className="absolute top-[-10%] left-[20%] w-[60%] h-[60%] bg-white mix-blend-soft-light opacity-70 blur-[100px] pointer-events-none z-0" />

        {/* Bottom Ellipse Highlight */}
        <div className="absolute bottom-[10%] left-[20%] w-[60%] h-[40%] bg-white mix-blend-soft-light opacity-70 blur-[50px] pointer-events-none z-0" />
      </div>

      {/* --- Product Image & Shadow (Allowed to Overflow) --- */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pb-[40px] pointer-events-none">
        {/* Synthetic drop shadow under product */}
        <div className="absolute top-[65%] w-[60%] h-[40px] bg-[#404040] mix-blend-multiply opacity-20 blur-[18px] rotate-[-5deg] scale-y-50 transition-all duration-500" />

        <div className="relative w-[70%] h-[90%] -mt-[35%]">
          <Image
            src={media.image}
            alt={name}
            fill
            className="
              object-contain
              scale-[1.0] group-hover:scale-[1.1] group-hover:-rotate-3
              transition-transform duration-500 ease-out drop-shadow-2xl
            "
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </div>

      {/* --- Product Info Bar (Bottom) --- */}
      <div className="absolute bottom-0 left-0 w-full p-6 flex flex-row items-center justify-between z-20 pointer-events-none">
        {/* Brand Logo / Tag Icon */}
        <div className="relative w-[80px] md:w-[120px] h-[40px] md:h-[60px]">
          <Image
            src={media.tagIcon || media.image}
            alt={`${name} icon`}
            fill
            className="object-contain drop-shadow-[0_14px_24px_rgba(0,0,0,0.15)] origin-left transition-transform duration-300"
            sizes="(max-width: 768px) 80px, 120px"
          />
        </div>

        {/* Product Name */}
        <h3
          className="
            font-['Outfit']
            font-bold
            text-[2.5rem] xl:text-[1rem] 2xl:text-[2rem]
            leading-[0.96]
            tracking-[-0.08rem]
          "
          style={{
            color: ui.nameColor || "#FFFFFF",
            fontFeatureSettings: "'liga' off",
          }}
        >
          {name}
        </h3>
      </div>
    </Link>
  );
}
