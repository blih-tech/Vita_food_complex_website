import React from 'react';

export function FeedbackSection() {
  return (
    <section className="w-full bg-white px-6 lg:px-24 py-16 pb-24 flex justify-center relative z-10">
      <div className="w-full max-w-[1100px] bg-[#23B349] rounded-[40px] p-8 md:p-12 lg:p-20 flex flex-col items-center text-center shadow-xl relative overflow-hidden">
        
        <h2 className="font-['Funnel_Display'] font-black text-6xl md:text-7xl lg:text-[100px] text-white mb-6 leading-[0.9] tracking-tighter drop-shadow-sm">
          Give US Your <br /> Feed back
        </h2>
        
        <p className="font-['Outfit'] text-white md:text-xl lg:text-[22px] mb-12 max-w-4xl leading-snug drop-shadow-sm">
          Share your feedback on our distribution, products, and more to help us improve your experience!
        </p>

        <form className="w-full max-w-5xl flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Left Column */}
            <div className="flex flex-col gap-4 md:gap-6">
              <div className="bg-white rounded-[24px] p-5 md:p-6 text-left flex flex-col gap-1.5 shadow-sm">
                <label className="font-['Outfit'] font-bold text-[#333333] text-[15px] md:text-[17px]">Full Name*</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full font-['Outfit'] text-[15px] md:text-[17px] text-[#888888] bg-transparent focus:outline-none placeholder:text-[#BBBBBB]"
                />
              </div>
              <div className="bg-white rounded-[24px] p-5 md:p-6 text-left flex flex-col gap-1.5 shadow-sm">
                <label className="font-['Outfit'] font-bold text-[#333333] text-[15px] md:text-[17px]">Email Address*</label>
                <input 
                  type="email" 
                  placeholder="johndoe@example.com" 
                  className="w-full font-['Outfit'] text-[15px] md:text-[17px] text-[#888888] bg-transparent focus:outline-none placeholder:text-[#BBBBBB]"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="bg-white rounded-[24px] p-5 md:p-6 text-left flex flex-col gap-1.5 shadow-sm relative min-h-[200px] md:min-h-full">
              <label className="font-['Outfit'] font-bold text-[#333333] text-[15px] md:text-[17px]">Message*</label>
              <textarea 
                className="w-full h-full font-['Outfit'] text-[15px] md:text-[17px] text-[#888888] bg-transparent focus:outline-none resize-none pb-12"
              ></textarea>
              <button 
                type="button" 
                className="absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-[#E5E5E5] text-[#888888] px-8 py-2.5 rounded-full font-['Outfit'] font-bold text-[15px] hover:bg-[#D5D5D5] transition-colors"
              >
                Send
              </button>
            </div>
          </div>

          {/* Checkbox line */}
          <div className="flex items-start gap-3 mt-4 text-left px-1">
            <div className="relative flex items-center justify-center w-[22px] h-[22px] mt-0.5 shrink-0 border-[1.5px] border-white rounded-[6px]">
              <input type="checkbox" className="absolute opacity-0 w-full h-full cursor-pointer peer" />
              <svg className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5L5 9L13 1" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="font-['Outfit'] text-white text-[13px] md:text-[15px] leading-snug">
              *Yes, I want to receive updates, promotions, and offers from Vita Food Complex. I know I can unsubscribe anytime.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
