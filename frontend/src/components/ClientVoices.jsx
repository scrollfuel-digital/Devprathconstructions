import React, { memo } from "react";

const REVIEWS = [
  {
    id: 1,
    name: "Neha Omprakash Ambulkar",
    quote:
      "I know and hope construction quality will be good as explained at the time of purchase",
  },
  {
    id: 2,
    name: "Nikhil Thamke",
    quote: "Location is so so good.",
  },
  {
    id: 3,
    name: "Atul Datar",
    quote: "Everything is up to the mark. No suggestions from my side.",
  },
  {
    id: 4,
    name: "Jayshree Dawrewar",
    quote:
      "The proceedings and Location are very satisfactory, just need more updates on the development so far and plan on how we will be getting the flats and details about it.",
  },
  {
    id: 5,
    name: "Archana ojha",
    quote: "Good job,keep it up!",
  },
];

// Duplicate list to guarantee seamless 100% infinite marquee loop
const MARQUEE_REVIEWS = [...REVIEWS, ...REVIEWS];

export const ClientVoices = memo(() => {
  return (
    <section id="testimonials" className="py-24 bg-[#F8F5EF] border-t border-[#B9935A]/20 overflow-hidden">
      {/* Section Header */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 text-center">
        <span className="text-xs font-bold uppercase tracking-[3px] text-[#B9935A] mb-3 block">
          Client Reviews
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172235] tracking-tight mb-4 font-heading">
          Voices of Our <span className="gold-gradient-text">Homeowners</span>
        </h2>
        <p className="text-sm text-gray-600 font-light max-w-2xl mx-auto">
          Read genuine feedback directly from buyers and residents of Mangalmurti Residency.
        </p>
      </div>

      {/* Infinite Horizontal Marquee Scroll */}
      <div className="w-full overflow-hidden py-4">
        <div className="animate-infinite-marquee flex items-stretch gap-6 px-4">
          {MARQUEE_REVIEWS.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="w-[340px] sm:w-[420px] shrink-0 bg-white p-7 rounded-3xl border border-[#B9935A]/25 shadow-md flex flex-col justify-between cursor-pointer hover:shadow-xl transition-shadow duration-300"
            >
              <div>
                {/* Profile Header (Clean Grey Avatar, No 99 Quote Overlay) */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-13 h-13 rounded-full bg-[#d8d8d8] flex items-center justify-center text-[#333333] shrink-0 shadow-inner">
                    <span className="material-symbols-outlined text-3xl">
                      person
                    </span>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-[#172235] leading-tight">
                      {item.name}
                    </h4>
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-sm text-gray-700 leading-relaxed font-light">
                  "{item.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default ClientVoices;
