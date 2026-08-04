import React, { useState, memo } from "react";
import { motion, useReducedMotion } from "framer-motion";

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

const TABS = [
  { id: "all", label: "All Residences" },
  { id: "4bhk", label: "Imperial 4 BHK" },
  { id: "3bhk", label: "Royal 3 BHK" },
];

const magicalBehindVariant = (shouldReduceMotion) => ({
  hidden: {
    opacity: 0,
    scale: shouldReduceMotion ? 1 : 0.88,
    y: shouldReduceMotion ? 0 : 35,
    filter: shouldReduceMotion ? "none" : "blur(6px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.25,
      delay: 0,
      ease: [0.25, 1, 0.5, 1],
    },
  },
});

export const FloorPlansSection = memo(({ onBookConsultation }) => {
  const [activeTab, setActiveTab] = useState("all");
  const shouldReduceMotion = useReducedMotion();

  const filteredUnits =
    activeTab === "all"
      ? UNITS_DATA
      : UNITS_DATA.filter((unit) => unit.id === activeTab);

  return (
    <section
      id="floor-plans"
      className="py-24 bg-[#F8F5EF] relative overflow-hidden border-t border-[#B9935A]/20"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.05 }}
          variants={magicalBehindVariant(shouldReduceMotion)}
          style={{ willChange: "transform, opacity, filter" }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-[3px] text-[#B9935A] mb-3 block">
            Floor Plans &amp; Layouts
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172235] tracking-tight mb-4 font-heading">
            Choice of <span className="gold-gradient-text">Living</span>
          </h2>

          <p className="text-sm text-gray-600 font-light">
            Explore meticulously designed floor plans built for privacy, natural ventilation, and maximum space efficiency.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-[2px] transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[#B9935A] text-white shadow-md"
                      : "bg-white text-[#172235] border border-[#B9935A]/30 hover:border-[#B9935A]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {filteredUnits.map((unit) => (
            <motion.div
              key={unit.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.05 }}
              variants={magicalBehindVariant(shouldReduceMotion)}
              style={{ willChange: "transform, opacity, filter" }}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-[#B9935A]/25 shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
            >
              <div>
                <div className="relative rounded-2xl overflow-hidden bg-gray-100 mb-6 h-64 border border-gray-200 group">
                  <img
                    src={unit.image}
                    alt={unit.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 right-3 bg-[#172235]/85 backdrop-blur-md text-white text-[10px] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                    {unit.facing}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[#172235] mb-1">
                    {unit.title}
                  </h3>
                  <p className="text-xs text-gray-500 mb-4">{unit.subtitle}</p>

                  <div className="grid grid-cols-3 gap-3 py-4 border-y border-gray-100 text-center">
                    <div>
                      <span className="block text-xs font-bold text-[#B9935A]">
                        {unit.area}
                      </span>
                      <span className="text-[10px] text-gray-500 uppercase tracking-wider">
                        Carpet Area
                      </span>
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-[#B9935A]">
                        {unit.bedrooms}
                      </span>
                      <span className="text-[10px] text-gray-500 uppercase tracking-wider">
                        Bedrooms
                      </span>
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-[#B9935A]">
                        {unit.balconies}
                      </span>
                      <span className="text-[10px] text-gray-500 uppercase tracking-wider">
                        Balconies
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <button
                  onClick={onBookConsultation}
                  className="flex-1 rounded-full bg-[#B9935A] py-3.5 text-xs font-semibold uppercase tracking-[2px] text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-[#B9935A] hover:to-[#8B6732] hover:border-transparent shadow-md text-center cursor-pointer"
                >
                  Enquire Layout
                </button>
                <a
                  href="/MANGALMURTI-BROCHURE.pdf"
                  download="MANGALMURTI-BROCHURE.pdf"
                  className="rounded-full bg-white text-[#B9935A] border border-[#B9935A] px-5 py-3.5 text-xs font-semibold uppercase tracking-[2px] transition-all duration-300 hover:bg-[#B9935A] hover:text-white flex items-center gap-1 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-sm">
                    download
                  </span>
                  <span className="hidden sm:inline">Brochure</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default FloorPlansSection;
