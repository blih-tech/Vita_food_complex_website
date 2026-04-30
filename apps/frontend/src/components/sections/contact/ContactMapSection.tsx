import { MapPin, Utensils, Building2, Bed } from "lucide-react";
import { useTranslations } from "next-intl";
import { Map, MapMarker, MarkerContent } from "@frontend/components/ui/map";

export default function ContactMapSection() {
  const t = useTranslations("Contact");

  // Center coordinate for the map (Addis Ababa, Lideta)
  const centerCoords: [number, number] = [38.7400, 9.0300];

  return (
    <section className="w-full flex justify-center px-4 sm:px-8 lg:px-16 xl:px-32 pb-32 max-w-[1920px] mx-auto">
      <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px] rounded-[48px] overflow-hidden bg-[#F3F3F3] shadow-lg">
        
        <Map
          theme="light"
          viewport={{
            center: centerCoords,
            zoom: 12,
            pitch: 45,
          }}
          className="w-full h-full"
        >
          {/* Main Highlighted Location Pin */}
          <MapMarker longitude={38.7400} latitude={9.0300}>
            <MarkerContent className="flex flex-col items-center animate-bounce duration-3000">
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
            </MarkerContent>
          </MapMarker>

          {/* Decorative pins around the map */}
          <MapMarker longitude={38.7200} latitude={9.0500}>
            <MarkerContent>
              <div className="w-8 h-8 bg-[#EF4444] rounded-full flex items-center justify-center shadow-md border-2 border-white">
                <Building2 className="w-4 h-4 text-white" />
              </div>
            </MarkerContent>
          </MapMarker>
          <MapMarker longitude={38.7600} latitude={9.0100}>
            <MarkerContent>
              <div className="w-8 h-8 bg-[#F5A623] rounded-full flex items-center justify-center shadow-md border-2 border-white">
                <Utensils className="w-4 h-4 text-white" />
              </div>
            </MarkerContent>
          </MapMarker>
          <MapMarker longitude={38.7500} latitude={9.0400}>
            <MarkerContent>
              <div className="w-8 h-8 bg-[#3B82F6] rounded-full flex items-center justify-center shadow-md border-2 border-white">
                <Bed className="w-4 h-4 text-white" />
              </div>
            </MarkerContent>
          </MapMarker>
          <MapMarker longitude={38.7100} latitude={9.0200}>
            <MarkerContent>
              <div className="w-8 h-8 bg-[#F5A623] rounded-full flex items-center justify-center shadow-md border-2 border-white">
                <Utensils className="w-4 h-4 text-white" />
              </div>
            </MarkerContent>
          </MapMarker>
          <MapMarker longitude={38.7700} latitude={9.0500}>
            <MarkerContent>
              <div className="w-8 h-8 bg-[#EF4444] rounded-full flex items-center justify-center shadow-md border-2 border-white">
                <Building2 className="w-4 h-4 text-white" />
              </div>
            </MarkerContent>
          </MapMarker>
        </Map>

      </div>
    </section>
  );
}
