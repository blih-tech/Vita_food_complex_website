import Image from "next/image";
import { Link } from "@frontend/navigation";

export interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  bgColor: string;
  nameColor?: string;
}

export function ProductCard({
  id,
  name,
  image,
  bgColor,
  nameColor = 'white',
}: ProductCardProps) {
  return (
    <Link
      href={`/products/${id}`}
      className="group relative rounded-[32px] overflow-hidden cursor-pointer h-[280px] md:h-[320px] transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2 border border-black/5 block w-full"
      style={{ backgroundColor: bgColor }}
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/20 blur-3xl rounded-full pointer-events-none z-0" />
      
      {/* Product Image */}
      <div className="absolute inset-0 flex items-center justify-center p-8 pb-16 z-10">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain p-6 group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl"
        />
      </div>

      {/* Bottom Bar: Logo & Name */}
      <div className="absolute bottom-0 left-0 w-full p-6 flex items-end justify-between z-20 bg-gradient-to-t from-black/20 to-transparent">
        {/* Brand Logo Placeholder */}
        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md shadow-sm">
           <span className="font-['Outfit'] font-black text-[10px] uppercase" style={{ color: nameColor }}>
             VITA
           </span>
        </div>
        {/* Product Name */}
        <h3 
          className="font-['Funnel_Display'] font-black text-2xl tracking-wide drop-shadow-sm" 
          style={{ color: nameColor }}
        >
          {name}
        </h3>
      </div>
    </Link>
  );
}
