import Image from "next/image";
import { MapPin, Utensils, ShoppingCart, Building2, Bed } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ContactMapSection() {
  const t = useTranslations("Contact");
  
  return (
    <section className="w-full flex justify-center px-4 sm:px-6 lg:px-8 pb-32">
      <div className="relative w-full max-w-[1664px] h-[500px] sm:h-[600px] lg:h-[700px] rounded-[48px] overflow-hidden bg-[#F3F3F3] shadow-lg">
        {/* Map Image Placeholder */}
        {/* Using object-cover to ensure the map fills the entire area seamlessly */}
        <Image
          src="/assets/company/company_vision.jpg" // Replace with real map image path like /assets/contact/map.png
          alt="Vita Food Complex Location Map"
          fill
          className="object-cover opacity-80 mix-blend-multiply" 
          sizes="(max-width: 1920px) 100vw, 1664px"
        />

        {/* Highlighted Location Pin */}
        <div className="absolute top-[50%] left-[70%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center animate-bounce duration-3000">
          <div className="bg-white rounded-full px-4 py-2 shadow-lg mb-2 flex flex-col items-center min-w-[160px] relative">
            <span className="font-['Outfit'] text-[12px] text-[#8A8C8A]">
              {t("map.locatedAt")}
            </span>
            <span className="font-['Funnel_Display'] text-[14px] font-bold text-[#23B349]">
              {t("map.locationName")}
            </span>
            {/* Tooltip triangle */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45" />
          </div>
          <div className="bg-white rounded-full p-2 shadow-lg relative z-10">
            <div className="bg-[#23B349] text-white p-2 rounded-full">
              <MapPin className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Other generic pins on the map (decorative) */}
        <div className="absolute top-[20%] left-[20%] w-8 h-8 bg-[#EF4444] rounded-full flex items-center justify-center shadow-md border-2 border-white">
          <Building2 className="w-4 h-4 text-white" />
        </div>
        <div className="absolute top-[35%] left-[10%] w-8 h-8 bg-[#F5A623] rounded-full flex items-center justify-center shadow-md border-2 border-white">
          <Utensils className="w-4 h-4 text-white" />
        </div>
        <div className="absolute top-[70%] left-[15%] w-8 h-8 bg-[#EF4444] rounded-full flex items-center justify-center shadow-md border-2 border-white">
          <Building2 className="w-4 h-4 text-white" />
        </div>
        <div className="absolute top-[65%] left-[28%] w-8 h-8 bg-[#3B82F6] rounded-full flex items-center justify-center shadow-md border-2 border-white">
          <Bed className="w-4 h-4 text-white" />
        </div>
        <div className="absolute top-[40%] left-[45%] w-8 h-8 bg-[#3B82F6] rounded-full flex items-center justify-center shadow-md border-2 border-white">
          <Bed className="w-4 h-4 text-white" />
        </div>
        <div className="absolute top-[80%] left-[55%] w-8 h-8 bg-[#F5A623] rounded-full flex items-center justify-center shadow-md border-2 border-white">
          <Utensils className="w-4 h-4 text-white" />
        </div>
        <div className="absolute top-[25%] left-[60%] w-8 h-8 bg-[#F5A623] rounded-full flex items-center justify-center shadow-md border-2 border-white">
          <Utensils className="w-4 h-4 text-white" />
        </div>
        <div className="absolute top-[15%] left-[80%] w-8 h-8 bg-[#3B82F6] rounded-full flex items-center justify-center shadow-md border-2 border-white">
          <Bed className="w-4 h-4 text-white" />
        </div>
        <div className="absolute top-[65%] left-[85%] w-8 h-8 bg-[#EF4444] rounded-full flex items-center justify-center shadow-md border-2 border-white">
          <Building2 className="w-4 h-4 text-white" />
        </div>
        <div className="absolute top-[85%] left-[75%] w-8 h-8 bg-[#EF4444] rounded-full flex items-center justify-center shadow-md border-2 border-white">
          <Building2 className="w-4 h-4 text-white" />
        </div>
      </div>
    </section>
  );
}
