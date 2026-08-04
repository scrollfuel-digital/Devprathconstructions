import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { AMENITIES_CATEGORIES, AMENITIES_ITEMS } from '../../../constants/amenitiesData';
import { smoothEmergenceVariant } from '../../../utils/animations';

const ROTATING_CATEGORY_IDS = ['sports', 'health', 'entertainment', 'special'];

/**
 * AmenitiesSection Component
 * Layout: Left side big landscape category image showcase (7 cols), Right side scrollable container displaying ALL category amenities (5 cols).
 * Automatically updates left category banner as categories transition when "All Amenities" is selected.
 */
export default function AmenitiesSection() {
  const [selectedTab, setSelectedTab] = useState('all');
  const [autoCategoryIdx, setAutoCategoryIdx] = useState(0);
  const scrollContainerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Auto-cycle categories when "All" tab is selected
  useEffect(() => {
    if (selectedTab !== 'all') return;

    const interval = setInterval(() => {
      setAutoCategoryIdx((prevIdx) => (prevIdx + 1) % ROTATING_CATEGORY_IDS.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [selectedTab]);

  // Reset right container scroll position on category change
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedTab, autoCategoryIdx]);

  // Determine currently active category object
  const activeCategoryId =
    selectedTab === 'all' ? ROTATING_CATEGORY_IDS[autoCategoryIdx] : selectedTab;

  const activeCategoryObj =
    AMENITIES_CATEGORIES.find((cat) => cat.id === activeCategoryId) || AMENITIES_CATEGORIES[0];

  // Get ALL amenity items for the active category
  const activeItems = AMENITIES_ITEMS.filter((item) => item.categoryId === activeCategoryId);

  return (
    <section className="py-24 px-6 md:px-20 max-w-[1440px] mx-auto" id="amenities">
      {/* Header & Category Filters */}
      <div className="text-center mb-12">
        <motion.span
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={smoothEmergenceVariant(shouldReduceMotion, 0.1)}
          className="font-label-caps text-xs font-semibold text-[#785926] bg-[#B9935A]/10 px-3.5 py-1 rounded-full border border-[#B9935A]/30 uppercase tracking-widest inline-block"
        >
          Exquisite Living
        </motion.span>

        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={smoothEmergenceVariant(shouldReduceMotion, 0.2)}
          className="font-heading text-3xl md:text-5xl font-bold text-[#1B1C1C] mt-3 mb-8"
        >
          The Signature Amenities
        </motion.h2>

        {/* Category Filter Tabs */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={smoothEmergenceVariant(shouldReduceMotion, 0.3)}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {AMENITIES_CATEGORIES.map((category) => {
            const isActive = selectedTab === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedTab(category.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-[1.5px] transition-all duration-300 cursor-pointer flex items-center gap-2 active:scale-95 shadow-sm ${
                  isActive
                    ? 'bg-[#B9935A] text-white border border-[#B9935A] shadow-md'
                    : 'bg-white/90 text-[#4E453A] border border-[#B9935A]/30 hover:border-[#B9935A] hover:text-[#B9935A]'
                }`}
              >
                <span className="material-symbols-outlined text-sm">{category.icon}</span>
                <span>{category.label}</span>
              </button>
            );
          })}
        </motion.div>
      </div>

      {/* Main Showcase Layout: Left Landscape Card (7 cols) + Right Scrollable Amenity Cards (5 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch md:h-[500px]">
        {/* Left Column: Big Landscape Image Showcase (lg:col-span-7) */}
        <div className="lg:col-span-7 h-[340px] md:h-full relative rounded-2xl overflow-hidden shadow-[0_15px_35px_rgba(185,147,90,0.15)] border border-[#B9935A]/30 bg-[#1B1C1C]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategoryObj.id}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={activeCategoryObj.image}
                alt={activeCategoryObj.label}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

              {/* Landscape Card Overlay Details */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white flex justify-between items-end">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-label-caps text-[10px] font-bold tracking-widest text-[#F0D060] bg-black/40 backdrop-blur-md px-3 py-1 rounded-full uppercase border border-[#B9935A]/40">
                      {selectedTab === 'all' ? 'Auto-Rotating Category' : 'Category Showcase'}
                    </span>
                    <span className="text-xs text-white/90 font-semibold bg-[#B9935A] px-2.5 py-0.5 rounded-full">
                      {activeItems.length} Amenities
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl md:text-4xl font-bold text-white mb-1 leading-tight">
                    {activeCategoryObj.label}
                  </h3>
                  <p className="text-xs md:text-sm text-white/80 max-w-md font-body">
                    {activeCategoryObj.description}
                  </p>
                </div>

                <div className="bg-white/90 backdrop-blur-md text-[#B9935A] p-3.5 rounded-full border border-[#B9935A]/40 shadow-lg shrink-0 hidden sm:block">
                  <span className="material-symbols-outlined text-2xl">{activeCategoryObj.icon}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Column: Scrollable List of ALL Amenity Cards (lg:col-span-5) */}
        <div
          ref={scrollContainerRef}
          className="lg:col-span-5 h-full overflow-y-auto pr-1 space-y-4 custom-scrollbar"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategoryObj.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="space-y-4"
            >
              {activeItems.map((item) => (
                <div
                  key={item.id}
                  className="h-[220px] rounded-2xl bg-white/95 backdrop-blur-md border border-[#B9935A]/30 overflow-hidden shadow-[0_6px_20px_rgba(185,147,90,0.08)] hover:border-[#B9935A] hover:shadow-lg transition-all duration-300 flex flex-col group"
                >
                  {/* Top Portion: Amenity Image */}
                  <div className="h-[125px] relative overflow-hidden bg-[#1B1C1C]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute top-2.5 left-3 text-[9px] font-bold uppercase tracking-widest bg-[#B9935A] text-white px-2.5 py-0.5 rounded-full shadow-sm">
                      {item.categoryName}
                    </span>
                    <div className="absolute bottom-2 right-3 bg-white/90 text-[#B9935A] p-1.5 rounded-lg shadow-md">
                      <span className="material-symbols-outlined text-base">{item.icon}</span>
                    </div>
                  </div>

                  {/* Bottom Portion: Text Details */}
                  <div className="p-3.5 flex-1 flex flex-col justify-between bg-white">
                    <div>
                      <h4 className="font-heading font-bold text-sm md:text-base text-[#1B1C1C] leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#666666] mt-0.5 line-clamp-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#B9935A]">
                      <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>
                        check_circle
                      </span>
                      <span>Township Amenity</span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
