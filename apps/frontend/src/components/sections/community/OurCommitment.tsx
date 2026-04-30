import { Link } from "@frontend/navigation";

export default function OurCommitment() {
  return (
    <section className="w-full bg-white py-24 lg:py-32" id="mission">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1664px]">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-24">
          <div className="lg:w-1/3">
            <h2 className="text-4xl md:text-5xl font-['Funnel_Display'] text-[#23B349] font-medium tracking-tight sticky top-32">
              Our Commitment
            </h2>
          </div>
          
          <div className="lg:w-2/3 flex flex-col items-start gap-8">
            <p className="text-2xl md:text-3xl lg:text-[32px] leading-[1.4] font-['Outfit'] text-[#23B349] font-light">
              At Vita, we believe that real impact goes beyond <span className="font-bold text-[#1A1A1A]">products</span>. 
              We are dedicated to creating positive change by <span className="font-bold text-[#1A1A1A]">supporting communities</span>, 
              strengthening local livelihoods, and ensuring access to <span className="font-bold text-[#1A1A1A]">quality nutrition</span> for all. 
              Every step we take is guided by our responsibility to people and <span className="font-bold text-[#1A1A1A]">the future we share</span>.
            </p>
            
            <Link
              href="/about"
              className="inline-flex items-center justify-center bg-[#23B349] text-white px-8 py-4 rounded-[999px] font-['Funnel_Display'] text-[20px] font-medium transition-all hover:bg-[#1f9d40] hover:scale-105 mt-4"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
