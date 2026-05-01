import Image from "next/image";

export default function ProductTestimonials() {
  return (
    <section className="w-full bg-gradient-to-b from-[#1FA03B] to-[#126723] px-4 md:px-8 lg:px-32 py-24 pb-48 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-4 border-white"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full border-4 border-white"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <p className="font-['Outfit'] text-white/80 text-sm tracking-widest uppercase mb-2">
          Testimonials
        </p>
        <h2 className="font-['Outfit'] font-black text-white text-5xl md:text-7xl mb-16">
          Our client
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-8">
          {/* Testimonial Card 1 */}
          <div className="bg-transparent flex flex-col md:flex-row items-center md:items-start text-left gap-6 max-w-xl mx-auto">
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden shrink-0 border-4 border-white/20">
              <div className="w-full h-full bg-[#E5D5B8] flex items-end justify-center">
                <Image
                  src="/assets/hero/client-1.png"
                  alt="Client"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="text-white">
              <p className="font-['Outfit'] text-lg italic mb-4 leading-relaxed">
                &quot;I love the Vita products! They are my go-to snack every day.
                The quality is consistently high and the taste is unparalleled.
                My family enjoys them as much as I do.&quot;
              </p>
              <div className="flex items-center gap-2 mb-1">
                <div className="flex text-yellow-400 text-lg">★★★★★</div>
              </div>
              <p className="font-['Outfit'] font-bold text-white">
                Yohannes T.
              </p>
              <p className="font-['Outfit'] text-white/70 text-sm">
                Loyal Customer
              </p>
            </div>
          </div>

          {/* Testimonial Card 2 */}
          <div className="bg-transparent flex flex-col md:flex-row items-center md:items-start text-left gap-6 max-w-xl mx-auto hidden lg:flex">
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden shrink-0 border-4 border-white/20">
              <div className="w-full h-full bg-[#E5D5B8] flex items-end justify-center">
                <Image
                  src="/assets/hero/client-2.png"
                  alt="Client"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="text-white">
              <p className="font-['Outfit'] text-lg italic mb-4 leading-relaxed">
                &quot;I love the Vita products! They are my go-to snack every day.
                The quality is consistently high and the taste is unparalleled.
                My family enjoys them as much as I do.&quot;
              </p>
              <div className="flex items-center gap-2 mb-1">
                <div className="flex text-yellow-400 text-lg">★★★★★</div>
              </div>
              <p className="font-['Outfit'] font-bold text-white">Abeba M.</p>
              <p className="font-['Outfit'] text-white/70 text-sm">
                Loyal Customer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
