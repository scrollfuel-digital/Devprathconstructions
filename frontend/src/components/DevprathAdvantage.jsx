import React from "react";

const ADVANTAGES = [
  {
    id: 1,
    icon: "schedule",
    title: "Timely Delivery",
    description:
      "Committing to strict schedules and completing milestone deliveries on or ahead of time without compromising quality.",
  },
  {
    id: 2,
    icon: "workspace_premium",
    title: "Premium Quality",
    description:
      "Sourcing top-tier construction materials and employing cutting-edge structural engineering techniques.",
  },
  {
    id: 3,
    icon: "near_me",
    title: "Strategic Locations",
    description:
      "Handpicking prime land parcels that offer excellent connectivity, high capital appreciation, and tranquil surroundings.",
  },
  {
    id: 4,
    icon: "gavel",
    title: "Clear Title & RERA",
    description:
      "100% legal compliance, transparent documentation, and official RERA certification for total peace of mind.",
  },
];

export const DevprathAdvantage = () => {
  return (
    <section className="py-20 bg-[#FCF9F4] border-t border-[#C9A063]/20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Centered Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[3px] text-[#C9A063] mb-3 block">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172235] tracking-tight mb-4">
            Defining the <span className="gold-gradient-text">Gold Standard</span>
          </h2>
          <p className="text-sm text-gray-600 font-light">
            Every Devprath project embodies four non-negotiable pillars of architectural and operational excellence.
          </p>
        </div>

        {/* 4 Card Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ADVANTAGES.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 rounded-2xl border border-[#C9A063]/20 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-start group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#F8F5EF] border border-[#C9A063]/30 flex items-center justify-center text-[#C9A063] mb-6 group-hover:bg-[#C9A063] group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-3xl">
                  {item.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#172235] mb-3">
                {item.title}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevprathAdvantage;
