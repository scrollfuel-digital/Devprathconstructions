import React, { useState } from "react";

const UNITS_DATA = [
  {
    id: "4bhk",
    title: "Imperial 4 BHK",
    subtitle: "Ultra-Spacious Luxury Penthouse Unit",
    area: "1,850 sq. ft.",
    bedrooms: "4 Bedrooms",
    bathrooms: "4 Bathrooms",
    balconies: "3 Balconies",
    facing: "East Facing Skyline View",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "3bhk",
    title: "Royal 3 BHK",
    subtitle: "Premium Contemporary Family Residence",
    area: "1,420 sq. ft.",
    bedrooms: "3 Bedrooms",
    bathrooms: "3 Bathrooms",
    balconies: "2 Balconies",
    facing: "North-East Park View",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
  },
];

export const FloorPlans = ({ onBookConsultation }) => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredUnits =
    activeTab === "all"
      ? UNITS_DATA
      : UNITS_DATA.filter((unit) => unit.id === activeTab);

  return (
    <section id="floor-plans" className="py-24 bg-[#F8F5EF] relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Centered Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-[3px] text-[#C9A063] mb-3 block">
            Floor Plans &amp; Layouts
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172235] tracking-tight mb-4">
            Choice of <span className="gold-gradient-text">Living</span>
          </h2>
          <p className="text-sm text-gray-600 font-light">
            Explore meticulously designed floor plans built for privacy, natural ventilation, and maximum space efficiency.
          </p>

          {/* Unit Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-[2px] transition-all cursor-pointer ${
                activeTab === "all"
                  ? "bg-[#C9A063] text-white shadow-lg"
                  : "bg-white text-[#172235] border border-[#C9A063]/30 hover:border-[#C9A063]"
              }`}
            >
              All Residences
            </button>
            <button
              onClick={() => setActiveTab("4bhk")}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-[2px] transition-all cursor-pointer ${
                activeTab === "4bhk"
                  ? "bg-[#C9A063] text-white shadow-lg"
                  : "bg-white text-[#172235] border border-[#C9A063]/30 hover:border-[#C9A063]"
              }`}
            >
              Imperial 4 BHK
            </button>
            <button
              onClick={() => setActiveTab("3bhk")}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-[2px] transition-all cursor-pointer ${
                activeTab === "3bhk"
                  ? "bg-[#C9A063] text-white shadow-lg"
                  : "bg-white text-[#172235] border border-[#C9A063]/30 hover:border-[#C9A063]"
              }`}
            >
              Royal 3 BHK
            </button>
          </div>
        </div>

        {/* Floor Plan Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {filteredUnits.map((unit) => (
            <div
              key={unit.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-[#C9A063]/25 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with 3D Plan Preview */}
                <div className="relative rounded-2xl overflow-hidden bg-gray-100 mb-6 h-64 border border-gray-200 group">
                  <img
                    src={unit.image}
                    alt={unit.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 right-3 bg-[#172235]/80 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {unit.facing}
                  </div>
                </div>

                {/* Card Title & Specs */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[#172235] mb-1">
                    {unit.title}
                  </h3>
                  <p className="text-xs text-gray-500 mb-4">{unit.subtitle}</p>

                  <div className="grid grid-cols-3 gap-3 py-4 border-y border-gray-100 text-center">
                    <div>
                      <span className="block text-xs font-bold text-[#C9A063]">
                        {unit.area}
                      </span>
                      <span className="text-[10px] text-gray-500 uppercase tracking-wider">
                        Carpet Area
                      </span>
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-[#C9A063]">
                        {unit.bedrooms}
                      </span>
                      <span className="text-[10px] text-gray-500 uppercase tracking-wider">
                        Bedrooms
                      </span>
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-[#C9A063]">
                        {unit.balconies}
                      </span>
                      <span className="text-[10px] text-gray-500 uppercase tracking-wider">
                        Balconies
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 pt-2">
                <button
                  onClick={onBookConsultation}
                  className="flex-1 rounded-full bg-[#C9A063] py-3 text-xs font-semibold uppercase tracking-[2px] text-white transition-all hover:bg-[#B88C4D] text-center"
                >
                  Enquire Layout
                </button>
                <button
                  onClick={() => alert("Brochure download request received. Our sales team will email you immediately.")}
                  className="rounded-full bg-[#F8F5EF] border border-[#C9A063]/40 px-5 py-3 text-xs font-semibold uppercase tracking-[2px] text-[#172235] hover:bg-[#C9A063] hover:text-white transition-all flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-sm">download</span>
                  <span className="hidden sm:inline">Brochure</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FloorPlans;
