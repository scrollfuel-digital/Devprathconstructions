import React from "react";

const AMENITIES_LIST = [
  {
    id: 1,
    title: "Infinity Pool",
    category: "Relaxation & Wellness",
    icon: "pool",
    image:
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Designer Clubhouse",
    category: "Social Events & Lounge",
    icon: "deck",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Fitness Center",
    category: "State-of-the-Art Gym",
    icon: "fitness_center",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    title: "Landscaped Park",
    category: "Green Spaces & Jogging",
    icon: "park",
    image:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    title: "Rooftop Sunset Lounge",
    category: "Panoramic Views",
    icon: "nightlife",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    title: "24/7 Concierge & Security",
    category: "Smart Access Control",
    icon: "security",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80",
  },
];

export const LuxuryAmenities = () => {
  return (
    <section id="amenities" className="py-24 bg-[#FCF9F4] border-t border-[#C9A063]/20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[3px] text-[#C9A063] mb-3 block">
            Our Amenities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172235] tracking-tight mb-4">
            Resort-Style <span className="gold-gradient-text">Amenities</span>
          </h2>
          <p className="text-sm text-gray-600 font-light">
            Indulge in a curated collection of world-class leisure and wellness facilities designed for an unparalleled lifestyle.
          </p>
        </div>

        {/* Responsive Grid of Amenity Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {AMENITIES_LIST.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-[#C9A063]/20 bg-white hover:-translate-y-2 transition-all duration-300 flex flex-col justify-end min-h-[320px]"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#172235]/90 via-[#172235]/40 to-transparent" />
              </div>

              {/* Card Content Overlay */}
              <div className="relative z-10 p-6 sm:p-8">
                <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white mb-4 group-hover:bg-[#C9A063] group-hover:border-[#C9A063] transition-colors">
                  <span className="material-symbols-outlined text-2xl">
                    {item.icon}
                  </span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#F0D060] mb-1 block">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-white leading-tight">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LuxuryAmenities;
