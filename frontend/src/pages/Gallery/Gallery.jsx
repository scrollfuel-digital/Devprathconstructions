import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import GalleryHero from "./GalleryHero";
import GalleryLightbox from "./GalleryLightbox";
import {
  firstSliderImages,
  galleryEventSections,
} from "../../constants/galleryData";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Buttery smooth emergence variant for cards and sections
const cardEmergenceVariant = (shouldReduceMotion, delay = 0) => ({
  hidden: {
    opacity: 0,
    y: shouldReduceMotion ? 0 : 35,
    scale: shouldReduceMotion ? 1 : 0.94,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  },
});

export default function Gallery() {
  const shouldReduceMotion = useReducedMotion();

  // State for Top Spotlight Stage (firstSliderImages)
  const [spotlightIdx, setSpotlightIdx] = useState(0);

  // State for Scoped Lightbox Modal
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(0);
  const [lightboxImages, setLightboxImages] = useState(firstSliderImages);

  // Ref array for thumbnail auto-scroll sync
  const thumbnailRefs = useRef([]);

  // Auto-scroll selected thumbnail into view when spotlightIdx changes
  useEffect(() => {
    if (thumbnailRefs.current[spotlightIdx]) {
      thumbnailRefs.current[spotlightIdx].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [spotlightIdx]);

  const activeSpotlight = firstSliderImages[spotlightIdx] || firstSliderImages[0];

  const handleSpotlightPrev = () => {
    setSpotlightIdx((prev) => (prev === 0 ? firstSliderImages.length - 1 : prev - 1));
  };

  const handleSpotlightNext = () => {
    setSpotlightIdx((prev) => (prev === firstSliderImages.length - 1 ? 0 : prev + 1));
  };

  // Open Lightbox for Spotlight Stage (scoped to 19 images)
  const handleOpenSpotlightLightbox = (idx = spotlightIdx) => {
    setLightboxImages(firstSliderImages);
    setLightboxIdx(idx);
    setLightboxOpen(true);
  };

  // Open Lightbox for Event Section (scoped to section's 3 images)
  const handleOpenSectionLightbox = (secImages, idx) => {
    setLightboxImages(secImages);
    setLightboxIdx(idx);
    setLightboxOpen(true);
  };

  return (
    <div className="bg-[#f8f5ef] text-[#1F1913] font-sans min-h-screen selection:bg-[#B9935A] selection:text-white">
      {/* Header Section */}
      <GalleryHero />

      <div className="container-custom pb-28 relative z-10 space-y-24">
        {/* =========================================================================
            SECTION 1: SAMPLE FLAT & INTERIORS SPOTLIGHT STAGE (firstSliderImages)
           ========================================================================= */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={cardEmergenceVariant(shouldReduceMotion, 0.1)}
          className="space-y-6"
        >
          <div className="flex items-center justify-end pb-2 max-w-4xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B9935A] bg-[#B9935A]/10 px-3.5 py-1.5 rounded-full border border-[#B9935A]/30 w-fit shadow-sm">
              {spotlightIdx + 1} / {firstSliderImages.length} Interior Renders
            </span>
          </div>

          {/* Reduced Dimensions Spotlight Window with Smooth Image Blur & Zoom Transitions */}
          <div
            onClick={() => handleOpenSpotlightLightbox(spotlightIdx)}
            className="relative max-w-4xl mx-auto h-[280px] sm:h-[380px] lg:h-[430px] rounded-3xl overflow-hidden border border-[#B9935A]/30 shadow-xl hover:shadow-2xl hover:shadow-[#B9935A]/15 hover:border-[#B9935A] bg-white group cursor-pointer transition-all duration-500"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeSpotlight.id}
                src={activeSpotlight.src}
                alt={activeSpotlight.alt || activeSpotlight.title}
                initial={{ opacity: 0, scale: 1.04, filter: "blur(4px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.96, filter: "blur(4px)" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </AnimatePresence>

            {/* Dark Bottom Gradient for Text Legibility */}
            <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

            {/* Stage Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleSpotlightPrev();
              }}
              aria-label="Previous Spotlight Photo"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/60 hover:bg-[#B9935A] text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer shadow-xl"
            >
              <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleSpotlightNext();
              }}
              aria-label="Next Spotlight Photo"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/60 hover:bg-[#B9935A] text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer shadow-xl"
            >
              <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>

            {/* Caption Bar with Subtle Upward Slide */}
            <div className="absolute bottom-6 left-6 right-6 z-20 flex items-end justify-between gap-3">
              <div className="transform transition-transform duration-300 group-hover:-translate-y-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#F0D060] bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-[#B9935A]/40 inline-block mb-1">
                  Sample Flat Visual
                </span>
                <h3 className="text-lg sm:text-2xl font-bold text-white font-heading drop-shadow-md">
                  {activeSpotlight.title}
                </h3>
              </div>
            </div>
          </div>

          {/* Synced Auto-Scrolling Filmstrip Thumbnail Track with Smooth Lift Effect */}
          <div className="max-w-4xl mx-auto overflow-x-auto pb-4 pt-2 flex items-center gap-3 scrollbar-thin scrollbar-thumb-[#B9935A]">
            {firstSliderImages.map((img, idx) => {
              const isSelected = idx === spotlightIdx;
              return (
                <button
                  key={img.id}
                  ref={(el) => (thumbnailRefs.current[idx] = el)}
                  onClick={() => setSpotlightIdx(idx)}
                  className={`relative w-28 sm:w-36 h-20 sm:h-24 rounded-2xl overflow-hidden border shrink-0 transition-all duration-300 cursor-pointer hover:-translate-y-1 ${
                    isSelected
                      ? "border-[#B9935A] ring-2 ring-[#B9935A] scale-105 shadow-xl"
                      : "border-[#B9935A]/20 opacity-60 hover:opacity-100 hover:border-[#B9935A]"
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <span className="absolute bottom-1 left-1.5 right-1.5 text-[9px] font-bold text-white truncate text-left drop-shadow-md">
                    {img.title}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.section>

        {/* =========================================================================
            SECTION 2: ELEGANT EVENT SHOWCASE (Section-Scoped Lightbox & Micro-Animated Cards)
           ========================================================================= */}
        <div className="space-y-24">
          {galleryEventSections.map((sec, secIdx) => (
            <section key={sec.id} className="space-y-8">
              {/* Event Section Header with Two-Tone Metallic Gold Highlights & Generous Bottom Padding */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardEmergenceVariant(shouldReduceMotion, 0.1 * secIdx)}
                className="text-center max-w-3xl mx-auto space-y-2 pb-3 sm:pb-5"
              >
                <div className="flex items-center justify-center gap-3">
                  <span className="h-[1.5px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-[#B9935A] shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-[3px] text-[#B9935A] block font-sans">
                    {sec.badge}
                  </span>
                  <span className="h-[1.5px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-[#B9935A] shrink-0" />
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1F1913] font-heading tracking-wide">
                  {sec.goldPos === "left" ? (
                    <>
                      <span className="gold-gradient-text">{sec.titleGold}</span>
                      {sec.titleRest}
                    </>
                  ) : (
                    <>
                      {sec.titleRest}
                      <span className="gold-gradient-text">{sec.titleGold}</span>
                    </>
                  )}
                </h2>
              </motion.div>

              {/* Responsive 3-Column Frameless Cards with Lift, Zoom & Glow Micro-Animations */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-start">
                {sec.images.map((img, imgIdx) => (
                  <motion.div
                    key={img.id}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={cardEmergenceVariant(shouldReduceMotion, 0.12 * imgIdx)}
                    onClick={() => handleOpenSectionLightbox(sec.images, imgIdx)}
                    className={`group relative rounded-2xl overflow-hidden bg-white border border-[#B9935A]/25 shadow-md hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#B9935A]/15 hover:border-[#B9935A] transition-all duration-500 cursor-pointer w-full ${img.aspect || "aspect-[4/3]"}`}
                  >
                    {/* Image with Smooth Zoom Transition */}
                    <img
                      src={img.src}
                      alt={img.title}
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />

                    {/* Dark Bottom Overlay with Smooth Caption Slide-Up */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                      <h4 className="text-base font-bold text-white font-heading leading-snug drop-shadow-md transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                        {img.title}
                      </h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Scoped Lightbox Modal */}
      <GalleryLightbox
        isOpen={lightboxOpen}
        currentImage={lightboxImages[lightboxIdx]}
        currentIndex={lightboxIdx}
        totalCount={lightboxImages.length}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setLightboxIdx((prev) => (prev === 0 ? lightboxImages.length - 1 : prev - 1))}
        onNext={() => setLightboxIdx((prev) => (prev === lightboxImages.length - 1 ? 0 : prev + 1))}
      />
    </div>
  );
}
