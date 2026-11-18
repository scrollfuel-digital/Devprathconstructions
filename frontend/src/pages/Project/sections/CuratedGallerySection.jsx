import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import lobbyImg from '../../../assets/Project/hero.jpeg';
import poolDeckImg from '../../../assets/Township Features/Pool_deck (1).jpg';
import clubhouseImg from '../../../assets/Township Features/Clubhouse_view.jpg';

export const GALLERY_ITEMS = [
  {
    id: 'entrance-lobby',
    title: 'Double-Height Entrance Lobby',
    category: 'Common Arrival Sanctuary · Wing B & C Portico',
    image: lobbyImg,
    aspect: 'col-span-12 md:col-span-6 aspect-[16/9]',
  },
  {
    id: 'pool-deck',
    title: 'Landscaped Podium & Pool Deck',
    category: 'Township Amenities · Central Open Greens',
    image: poolDeckImg,
    aspect: 'col-span-12 md:col-span-6 aspect-[16/9]',
  },
  {
    id: 'clubhouse-deck',
    title: 'Resident Clubhouse & Recreation Promenade',
    category: 'Lifestyle Architecture · Social & Wellness Hub',
    image: clubhouseImg,
    aspect: 'col-span-12 h-[280px] sm:h-[400px] md:h-[480px] lg:h-[560px]',
  },
];

export default function CuratedGallerySection() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section id="gallery" className="py-10 sm:py-14 lg:py-16 bg-[#F2EDE4] border-t border-[#B9935A]/20 relative">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">

        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-tight">
            Curated <span className="font-bold text-brand-primary">Gallery.</span>
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              className={`${item.aspect} flex flex-col justify-between group cursor-pointer`}
              onClick={() => setSelectedPhoto(item)}
            >
              <div className="relative overflow-hidden w-full h-full bg-[#FAF7F2] border border-[#B9935A]/20">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#1F1E1C]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="absolute bottom-4 right-4 bg-[#1F1E1C]/85 backdrop-blur-md px-3 py-1.5 border border-[#B9935A]/40 text-[#FAF7F2] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-body text-[10px] uppercase tracking-[0.2em] font-semibold text-[#D1B481]">
                    Expand View +
                  </span>
                </div>
              </div>

              <div className="pt-3.5 flex items-baseline justify-between gap-4">
                <h3 className="font-body text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#1F1E1C] font-semibold transition-colors duration-300 group-hover:text-[#B9935A]">
                  {item.title}
                </h3>
                <span className="font-sans text-sm text-justify font-bold leading-relaxed text-text-light text-pretty hidden sm:inline">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-8 bg-[#1F1E1C]/90 backdrop-blur-md cursor-zoom-out"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col bg-[#FAF7F2] border border-[#B9935A] p-4 sm:p-6 shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 mb-3 border-b border-[#1F1E1C]/15">
                <div>
                  <h4 className="font-display text-lg sm:text-2xl text-[#1F1E1C] font-normal">
                    {selectedPhoto.title}
                  </h4>
                  <p className="font-sans text-sm text-justify font-bold leading-relaxed text-text-light text-pretty">
                    {selectedPhoto.category}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="self-start sm:self-auto font-body text-xs uppercase tracking-[0.2em] text-[#1F1E1C] hover:text-[#B9935A] px-3 py-1.5 border border-[#1F1E1C]/20 cursor-pointer transition-colors"
                >
                  Close &times;
                </button>
              </div>
              <div className="relative w-full h-[55vh] sm:h-[70vh] overflow-hidden bg-[#1F1E1C]">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-contain object-center"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}