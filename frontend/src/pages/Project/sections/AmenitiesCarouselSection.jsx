import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import gymImg from '../../../assets/Township Features/gym.png';
import carromImg from '../../../assets/Township Features/carrom_sport.png';
import poolImg from '../../../assets/Township Features/swimming_pool_persons.png';
import clubhouseImg from '../../../assets/Township Features/Clubhouse_view.jpg';

const AMENITIES_DATA = [
  { id: 'gym', label: 'Gym', image: gymImg },
  { id: 'carrom', label: 'Carrom', image: carromImg },
  { id: 'swimming-pool', label: 'Swimming Pool', image: poolImg },
  { id: 'clubhouse', label: 'Clubhouse', image: clubhouseImg },
];

export default function AmenitiesCarouselSection() {
  const scrollContainerRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const getCardScrollAmount = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return 0;

    const cards = el.querySelectorAll('.amenity-card');
    if (cards.length >= 2) {
      const step = cards[1].offsetLeft - cards[0].offsetLeft;
      if (step > 0) return step;
    }

    const firstCard = cards[0];
    if (firstCard) {
      const gap = parseFloat(window.getComputedStyle(el).columnGap) || 24;
      return firstCard.offsetWidth + gap;
    }

    return 304;
  }, []);

  const updateScrollButtons = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanScrollLeft(el.scrollLeft > 5);
    setCanScrollRight(el.scrollLeft < maxScroll - 5);
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    updateScrollButtons();
    el.addEventListener('scroll', updateScrollButtons, { passive: true });
    window.addEventListener('resize', updateScrollButtons);

    return () => {
      el.removeEventListener('scroll', updateScrollButtons);
      window.removeEventListener('resize', updateScrollButtons);
    };
  }, [updateScrollButtons]);

  const handleScroll = useCallback((direction) => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const cardStep = getCardScrollAmount();
    if (cardStep <= 0) return;

    const maxScroll = el.scrollWidth - el.clientWidth;
    const target =
      direction === 'next'
        ? Math.min(el.scrollLeft + cardStep, maxScroll)
        : Math.max(el.scrollLeft - cardStep, 0);

    el.scrollTo({ left: target, behavior: 'smooth' });
  }, [getCardScrollAmount]);

  return (
    <section
      id="amenities"
      className="py-10 sm:py-14 lg:py-16 bg-[#FAF7F2] border-t border-[#B9935A]/20 relative overflow-hidden"
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex items-end justify-between gap-6 mb-8 sm:mb-10">
          <div>
            <span className="arch-eyebrow mb-3">
              Township Lifestyle
            </span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-tight">
              Township <span className="font-bold text-brand-primary">Amenities.</span>
            </h2>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => handleScroll('prev')}
              disabled={!canScrollLeft}
              aria-label="Previous amenity"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#B9935A]/40 flex items-center justify-center text-[#B9935A] hover:bg-[#B9935A] hover:text-[#FAF7F2] hover:border-[#B9935A] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 shadow-xs active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll('next')}
              disabled={!canScrollRight}
              aria-label="Next amenity"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#B9935A]/40 flex items-center justify-center text-[#B9935A] hover:bg-[#B9935A] hover:text-[#FAF7F2] hover:border-[#B9935A] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 shadow-xs active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 sm:gap-8 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {AMENITIES_DATA.map((amenity) => (
            <div
              key={amenity.id}
              className="amenity-card w-[280px] sm:w-[360px] lg:w-[420px] shrink-0 snap-start group flex flex-col"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#F2EDE4] border border-[#B9935A]/20">
                <img
                  src={amenity.image}
                  alt={amenity.label}
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transform-none"
                  loading="lazy"
                />
              </div>

              <div className="bg-[#F2EDE4] border-x border-b border-[#B9935A]/20 py-4 px-5 sm:px-6">
                <h3 className="text-xl sm:text-2xl tracking-tight">
                  {amenity.label}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}