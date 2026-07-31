import React from "react";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Mr. Rajendra Kulkarni",
    role: "Resident • Imperial 4 BHK",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    quote:
      "Buying our home with Devprath was the single best decision we made. The construction finish, acoustic insulation, and timely handover exceeded all our expectations.",
    stars: 5,
  },
  {
    id: 2,
    name: "Sonia & Aniket Verma",
    role: "Homeowner • Royal 3 BHK",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    quote:
      "The transparency throughout the process was incredible. Every RERA milestone was updated on time, and the clubhouse amenities feel like a luxury 5-star resort.",
    stars: 5,
  },
  {
    id: 3,
    name: "Dr. Vikram Deshmukh",
    role: "Investor • Penthouse Suite",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    quote:
      "Devprath's commitment to structural safety and prime location selection ensures high appreciation value. Truly the gold standard in luxury real estate.",
    stars: 5,
  },
];

export const ClientVoices = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#FCF9F4] border-t border-[#C9A063]/20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[3px] text-[#C9A063] mb-3 block">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172235] tracking-tight mb-4">
            Voices of Our <span className="gold-gradient-text">Community</span>
          </h2>
          <p className="text-sm text-gray-600 font-light">
            Hear directly from discerning homeowners who chose Devprath for their dream residences.
          </p>
        </div>

        {/* 3 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 rounded-3xl border border-[#C9A063]/20 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 5 Star Rating */}
                <div className="flex items-center gap-1 text-[#C9A063] mb-4">
                  {[...Array(item.stars)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-lg fill-1">
                      star
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm text-gray-700 italic leading-relaxed mb-6 font-light">
                  "{item.quote}"
                </p>
              </div>

              {/* User Profile */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border border-[#C9A063]/40"
                />
                <div>
                  <h4 className="text-sm font-bold text-[#172235]">
                    {item.name}
                  </h4>
                  <span className="text-[11px] text-gray-500 font-medium">
                    {item.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientVoices;
