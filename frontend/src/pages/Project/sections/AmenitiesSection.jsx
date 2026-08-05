import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { AMENITIES_CATEGORIES, AMENITIES_ITEMS } from '../../../constants/amenitiesData';
import { smoothEmergenceVariant } from '../../../utils/animations';

/**
 * AmenitiesSection Component
 * Features mobile-responsive horizontal category tabs, fixed container heights for mobile & desktop,
 * 60fps continuous two-way auto-scrolling column including the Entertainment category,
 * and real-time left landscape image category crossfades.
 */
export default function AmenitiesSection() {
  const [selectedTab, setSelectedTab] = useState('all');
  const [currentCategory, setCurrentCategory] = useState('special');
  const [selectedAmenity, setSelectedAmenity] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(1); // 1 = down, -1 = up
  const scrollRef = useRef(null);
  const categoryRefs = useRef(new Map());
  const shouldReduceMotion = useReducedMotion();

  // Group items by category for "All" tab scrolling layout (includes Entertainment)
  const groupedCategories = AMENITIES_CATEGORIES.filter((c) => c.id !== 'all').map((cat) => ({
    ...cat,
    items: AMENITIES_ITEMS.filter((item) => item.categoryId === cat.id),
  }));

  // Fast, smooth automatic two-way vertical scrolling
  useEffect(() => {
    if (isHovered) return;

    const container = scrollRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      const isAtBottom = container.scrollTop + container.clientHeight >= container.scrollHeight - 8;
      const isAtTop = container.scrollTop <= 0;

      if (isAtBottom && scrollDirection === 1) {
        setScrollDirection(-1);
      } else if (isAtTop && scrollDirection === -1) {
        setScrollDirection(1);
      }

      container.scrollTop += scrollDirection * 1;
    }, 28);

    return () => clearInterval(interval);
  }, [isHovered, selectedTab, scrollDirection]);

  // Track active category in view as right column scrolls
  const handleScroll = () => {
    if (!scrollRef.current || selectedTab !== 'all') return;
    const container = scrollRef.current;
    const containerRect = container.getBoundingClientRect();

    let visibleCatId = currentCategory;
    groupedCategories.forEach((cat) => {
      const el = categoryRefs.current.get(cat.id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top - containerRect.top <= containerRect.height * 0.55 && rect.bottom - containerRect.top > 0) {
          visibleCatId = cat.id;
        }
      }
    });

    if (visibleCatId !== currentCategory) {
      setCurrentCategory(visibleCatId);
      setSelectedAmenity(null);
    }
  };

  // Tab change handler
  const handleTabChange = (tabId) => {
    setSelectedTab(tabId);
    setSelectedAmenity(null);
    if (tabId !== 'all') {
      setCurrentCategory(tabId);
    } else {
      setCurrentCategory('special');
    }
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Determine active category object for left landscape banner
  const activeCategoryObj =
    AMENITIES_CATEGORIES.find((cat) => cat.id === currentCategory) || AMENITIES_CATEGORIES[0];

  // Active showcase banner object (amenity item click overrides category)
  const activeBannerObj = selectedAmenity
    ? {
        id: selectedAmenity.id,
        label: selectedAmenity.title,
        image: selectedAmenity.image,
        description: selectedAmenity.description,
        icon: selectedAmenity.icon,
        badgeTag: selectedAmenity.categoryName || activeCategoryObj.label,
      }
    : {
        id: activeCategoryObj.id,
        label: activeCategoryObj.label,
        image: activeCategoryObj.image,
        description: activeCategoryObj.description,
        icon: activeCategoryObj.icon,
        badgeTag: activeCategoryObj.label,
      };

  const displayedItems =
    selectedTab === 'all'
      ? AMENITIES_ITEMS
      : AMENITIES_ITEMS.filter((item) => item.categoryId === selectedTab);

  return (
    <section className="py-16 md:py-24 px-4 sm:px-8 md:px-20 max-w-[1440px] mx-auto overflow-hidden" id="amenities">
      {/* Header & Category Filters */}
      <div className="text-center mb-8 md:mb-12">
        <motion.span
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={smoothEmergenceVariant(shouldReduceMotion, 0.05)}
          className="font-label-caps text-xs font-semibold text-[#785926] bg-[#B9935A]/10 px-3.5 py-1 rounded-full border border-[#B9935A]/30 uppercase tracking-widest inline-block"
        >
          Exquisite Living
        </motion.span>

        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={smoothEmergenceVariant(shouldReduceMotion, 0.1)}
          className="font-heading text-lg sm:text-3xl md:text-5xl font-bold text-[#1B1C1C] mt-2 md:mt-3 mb-6 md:mb-8 leading-tight whitespace-nowrap"
        >
          The Signature Amenities
        </motion.h2>

        {/* Mobile-Responsive Horizontal Scrollable Category Filter Tabs */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={smoothEmergenceVariant(shouldReduceMotion, 0.15)}
          className="flex items-center justify-start md:justify-center gap-2 md:gap-3 overflow-x-auto pb-2 pt-1 max-w-full [&::-webkit-scrollbar]:hidden [msOverflowStyle:'none'] [scrollbarWidth:'none'] px-1"
        >
          {AMENITIES_CATEGORIES.map((category) => {
            const isActive = selectedTab === category.id;
            return (
              <button
                key={category.id}
                onClick={() => handleTabChange(category.id)}
                className={`px-4 md:px-5 py-2 md:py-2.5 rounded-full text-[11px] md:text-xs font-semibold uppercase tracking-[1.2px] md:tracking-[1.5px] transition-all duration-300 cursor-pointer flex items-center gap-1.5 md:gap-2 active:scale-95 shrink-0 shadow-sm ${
                  isActive
                    ? 'bg-[#B9935A] text-white border border-[#B9935A] shadow-md'
                    : 'bg-white/90 text-[#4E453A] border border-[#B9935A]/30 hover:border-[#B9935A] hover:text-[#B9935A]'
                }`}
              >
                <span className="material-symbols-outlined text-sm">{category.icon}</span>
                <span className="whitespace-nowrap">{category.label}</span>
              </button>
            );
          })}
        </motion.div>
      </div>

      {/* Main Showcase Layout: Left Landscape Card (7 cols) + Right Auto-Scroll Cards (5 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch h-[640px] sm:h-[680px] lg:h-[500px]">
        {/* Left Column: Landscape Image Showcase updating with active scroll category or clicked amenity */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={smoothEmergenceVariant(shouldReduceMotion, 0.2)}
          className="lg:col-span-7 h-[220px] sm:h-[260px] lg:h-full relative rounded-2xl overflow-hidden shadow-[0_15px_35px_rgba(185,147,90,0.15)] border border-[#B9935A]/30 bg-[#1B1C1C] shrink-0"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeBannerObj.id}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={activeBannerObj.image}
                alt={activeBannerObj.label}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

              {/* Landscape Overlay Details */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white flex justify-between items-end">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="font-label-caps text-[9px] sm:text-[10px] font-bold tracking-widest text-[#F0D060] bg-black/40 backdrop-blur-md px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase border border-[#B9935A]/40">
                      {activeBannerObj.badgeTag}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl md:text-4xl font-bold text-white mb-1 leading-tight">
                    {activeBannerObj.label}
                  </h3>
                  <p className="text-[11px] sm:text-xs md:text-sm text-white/80 max-w-md font-body line-clamp-2 sm:line-clamp-none">
                    {activeBannerObj.description}
                  </p>
                </div>

                <div className="bg-white/90 backdrop-blur-md text-[#B9935A] p-2.5 sm:p-3.5 rounded-full border border-[#B9935A]/40 shadow-lg shrink-0 hidden sm:block">
                  <span className="material-symbols-outlined text-xl sm:text-2xl">{activeBannerObj.icon}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Right Column: Bounded Auto-Scrolling Column for Mobile & Desktop */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={smoothEmergenceVariant(shouldReduceMotion, 0.25)}
          ref={scrollRef}
          onScroll={handleScroll}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="lg:col-span-5 h-[390px] sm:h-[400px] lg:h-full overflow-y-auto pr-1 space-y-4 [&::-webkit-scrollbar]:hidden [msOverflowStyle:'none'] [scrollbarWidth:'none'] shrink-0"
        >
          {selectedTab === 'all' ? (
            groupedCategories.map((group) => (
              <div
                key={group.id}
                ref={(el) => categoryRefs.current.set(group.id, el)}
                className="space-y-4"
              >
                {/* Category Header Tag in Right Column */}
                <div className="sticky top-0 z-10 bg-[#F8F5EF]/95 backdrop-blur-md py-1.5 px-3 rounded-lg border border-[#B9935A]/20 flex items-center justify-between shadow-sm">
                  <span className="text-xs font-bold text-[#785926] uppercase tracking-wider">
                    {group.label}
                  </span>
                  <span className="text-[10px] font-semibold text-[#B9935A] bg-[#B9935A]/10 px-2 py-0.5 rounded-full">
                    {group.items.length} items
                  </span>
                </div>

                {/* Group Amenities Cards (Fixed-size layout blocks) */}
                {group.items.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedAmenity(item)}
                    className={`h-[200px] w-full rounded-2xl bg-white/95 backdrop-blur-md border overflow-hidden shadow-[0_6px_20px_rgba(185,147,90,0.08)] hover:border-[#B9935A] hover:shadow-lg transition-colors transition-shadow duration-300 flex flex-col shrink-0 group cursor-pointer ${
                      selectedAmenity?.id === item.id ? 'border-[#B9935A] ring-2 ring-[#B9935A]/30' : 'border-[#B9935A]/30'
                    }`}
                  >
                    <div className="h-[115px] relative overflow-hidden bg-[#1B1C1C] shrink-0">
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

                    <div className="p-3.5 flex-1 flex flex-col justify-between bg-white overflow-hidden">
                      <div>
                        <h4 className="font-heading font-bold text-sm md:text-base text-[#1B1C1C] leading-snug truncate">
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
              </div>
            ))
          ) : (
            <div className="space-y-4">
              {displayedItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedAmenity(item)}
                  className={`h-[200px] w-full rounded-2xl bg-white/95 backdrop-blur-md border overflow-hidden shadow-[0_6px_20px_rgba(185,147,90,0.08)] hover:border-[#B9935A] hover:shadow-lg transition-colors transition-shadow duration-300 flex flex-col shrink-0 group cursor-pointer ${
                    selectedAmenity?.id === item.id ? 'border-[#B9935A] ring-2 ring-[#B9935A]/30' : 'border-[#B9935A]/30'
                  }`}
                >
                  <div className="h-[115px] relative overflow-hidden bg-[#1B1C1C] shrink-0">
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

                  <div className="p-3.5 flex-1 flex flex-col justify-between bg-white overflow-hidden">
                    <div>
                      <h4 className="font-heading font-bold text-sm md:text-base text-[#1B1C1C] leading-snug truncate">
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
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
