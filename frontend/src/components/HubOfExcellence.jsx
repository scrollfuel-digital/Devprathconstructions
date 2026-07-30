import React from "react";

const LOCATIONS = [
  {
    id: 1,
    title: "City Center Mall",
    time: "5 Mins",
    icon: "shopping_bag",
  },
  {
    id: 2,
    title: "Mumbai-Nagpur Expressway",
    time: "10 Mins",
    icon: "alt_route",
  },
  {
    id: 3,
    title: "Top International Schools",
    time: "8 Mins",
    icon: "school",
  },
  {
    id: 4,
    title: "Super-Specialty Hospital",
    time: "6 Mins",
    icon: "local_hospital",
  },
  {
    id: 5,
    title: "Nashik Airport & Station",
    time: "15 Mins",
    icon: "flight_takeoff",
  },
];

export const HubOfExcellence = () => {
  return (
    <section id="location" className="py-24 bg-[#F8F5EF] border-t border-[#C9A063]/20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column - Connectivity List */}
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-[3px] text-[#C9A063] mb-3 block">
              Prime Location
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172235] tracking-tight mb-6">
              Everything Within <span className="gold-gradient-text">Reach</span>
            </h2>
            <p className="text-sm text-gray-600 font-light mb-8">
              Situated in Nashik's most coveted residential precinct, Mangalmurti Residency offers seamless connectivity to top retail, educational, healthcare, and transit hubs.
            </p>

            <div className="space-y-4">
              {LOCATIONS.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 rounded-2xl bg-white border border-[#C9A063]/20 hover:border-[#C9A063]/60 transition-all shadow-sm group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#F8F5EF] text-[#C9A063] flex items-center justify-center group-hover:bg-[#C9A063] group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-xl">
                        {item.icon}
                      </span>
                    </div>
                    <span className="text-sm font-bold text-[#172235]">
                      {item.title}
                    </span>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#C9A063]/15 text-[#C9A063]">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Map Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#C9A063]/30 bg-[#172235] text-white p-8 h-[480px] flex flex-col justify-between group">
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#C9A063_1px,transparent_1px)] [background-size:16px_16px]" />
              
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-[#F0D060]">
                  Location Map Preview
                </span>
                <span className="text-xs text-gray-300">
                  20.0059° N, 73.7898° E
                </span>
              </div>

              {/* Pin Center Graphic */}
              <div className="relative z-10 flex flex-col items-center justify-center my-auto">
                <div className="w-16 h-16 rounded-full bg-[#C9A063]/20 border border-[#C9A063] flex items-center justify-center text-[#F0D060] animate-bounce">
                  <span className="material-symbols-outlined text-3xl">
                    location_on
                  </span>
                </div>
                <h4 className="text-xl font-bold text-white mt-3">
                  Mangalmurti Residency
                </h4>
                <p className="text-xs text-gray-300">
                  Prime Avenue, Nashik, MH
                </p>
              </div>

              {/* Map Action Button */}
              <div className="relative z-10 pt-4">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-full bg-[#C9A063] py-3.5 text-xs font-semibold uppercase tracking-[2px] text-white transition-all hover:bg-[#B88C4D] flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-base">directions</span>
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HubOfExcellence;
