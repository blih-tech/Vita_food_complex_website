import React from 'react';

export function FeedbackSection() {
  return (
    <section className="w-full bg-white px-6 lg:px-24 py-16 pb-24 flex justify-center relative z-10">
      <div className="w-full max-w-4xl bg-[#23B349] rounded-[40px] p-8 md:p-16 flex flex-col items-center text-center shadow-xl relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

        <h2 className="font-['Outfit'] font-black text-4xl md:text-5xl text-white mb-4 relative z-10">
          Give US Your Feedback
        </h2>
        <p className="font-['Outfit'] text-white/90 mb-10 max-w-lg relative z-10">
          Your opinion matters! Please share your thoughts and ideas to help us improve our service.
        </p>

        <form className="w-full max-w-2xl flex flex-col gap-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full px-6 py-4 rounded-full font-['Outfit'] text-gray-800 bg-white focus:outline-none focus:ring-4 focus:ring-white/30 transition-all placeholder:text-gray-400"
            />
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full px-6 py-4 rounded-full font-['Outfit'] text-gray-800 bg-white focus:outline-none focus:ring-4 focus:ring-white/30 transition-all placeholder:text-gray-400"
            />
          </div>
          <div className="relative">
            <textarea 
              placeholder="Write your comment or ideas that helps us to improve our service..." 
              className="w-full px-6 py-4 rounded-[32px] font-['Outfit'] text-gray-800 bg-white focus:outline-none focus:ring-4 focus:ring-white/30 min-h-[140px] resize-none transition-all placeholder:text-gray-400 pb-16"
            ></textarea>
            <button 
              type="button" 
              className="absolute bottom-3 right-3 bg-black text-white px-8 py-3 rounded-full font-['Outfit'] font-bold text-sm hover:bg-gray-800 transition-colors shadow-md"
            >
              APPLY
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
