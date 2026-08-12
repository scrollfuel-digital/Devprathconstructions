import React, { memo, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import homePageTestimonialVideo from "../assets/videos/Todkar_family_review.mp4";
import { smoothEmergenceVariant, magicalBehindVariant } from "../utils/animations";

const REVIEWS = [
  {
    id: 1,
    name: "Neha Omprakash Ambulkar",
    quote:
      "I know and hope construction quality will be good as explained at the time of purchase",
    rating: 5,
    project: "Mangalmurti Residency Buyer",
  },
  {
    id: 2,
    name: "Nikhil Thamke",
    quote: "Location is so so good.",
    rating: 5,
    project: "Mangalmurti Residency Buyer",
  },
  {
    id: 3,
    name: "Atul Datar",
    quote: "Everything is up to the mark. No suggestions from my side.",
    rating: 5,
    project: "Mangalmurti Residency Buyer",
  },
  {
    id: 4,
    name: "Jayshree Dawrewar",
    quote:
      "The proceedings and Location are very satisfactory, just need more updates on the development so far and plan on how we will be getting the flats and details about it.",
    rating: 5,
    project: "Mangalmurti Residency Buyer",
  },
  {
    id: 5,
    name: "Archana ojha",
    quote: "Good job,keep it up!",
    rating: 5,
    project: "Mangalmurti Residency Buyer",
  },
];

export const ClientVoices = memo(() => {
  const shouldReduceMotion = useReducedMotion();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  }, []);

  // Autoplay functionality: switches slide every 5 seconds unless paused on hover
  useEffect(() => {
    if (isAutoplayPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoplayPaused, handleNext]);

  const activeReview = REVIEWS[currentIndex];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#F8F5EF] border-t border-[#B9935A]/20 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={smoothEmergenceVariant(shouldReduceMotion)}
          className="mb-12 md:mb-16 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B9935A]/10 border border-[#B9935A]/25 mb-4">
            <span className="material-symbols-outlined text-sm text-[#B9935A]">
              verified
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[2.5px] text-[#785926] font-sans">
              Client Reviews & Video
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4 font-heading leading-tight">
            Voices of Our <span className="gold-gradient-text">Homeowners</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-700 font-light max-w-2xl mx-auto leading-relaxed">
            Watch authentic video stories and explore verified testimonials directly from buyers of Mangalmurti Residency.
          </p>
        </motion.div>

        {/* Grid Layout: 1:1 Video Card on Left, Interactive Luxury Slider on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">

          {/* Left Column — 1:1 Square Video Card (5 Columns on Desktop) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={magicalBehindVariant(shouldReduceMotion)}
            style={{ willChange: "transform, opacity, filter" }}
            className="lg:col-span-5 w-full max-w-[360px] sm:max-w-[400px] lg:max-w-none mx-auto"
          >
            <div className="p-2.5 bg-gradient-to-b from-[#B9935A]/30 via-[#B9935A]/10 to-[#B9935A]/30 rounded-[32px] shadow-2xl backdrop-blur-md border border-[#B9935A]/30">
              <div className="relative rounded-[24px] overflow-hidden bg-[#1A1A1A] aspect-square w-full group shadow-inner">
                <video
                  src={homePageTestimonialVideo}
                  controls
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  aria-label="Devprath Client Testimonial Video"
                  className="w-full h-full object-cover"
                />

                {/* Floating Top Badge */}
                <div className="absolute top-3.5 left-3.5 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#785926]/90 backdrop-blur-md border border-[#B9935A]/40 shadow-lg pointer-events-none z-10">
                  <span className="w-2 h-2 rounded-full bg-[#E8D5B7] animate-ping" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#E8D5B7]">
                    Verified Video Story
                  </span>
                </div>
              </div>

              {/* Caption Text Below Video */}
              <div className="mt-3 px-3.5 pb-1 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-gray-900 leading-tight">
                    Todkar Family Review
                  </h4>
                  <span className="text-[11px] font-semibold text-[#B9935A]">
                    Mangalmurti Residency
                  </span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#785926] bg-[#B9935A]/15 px-2.5 py-1 rounded-full border border-[#B9935A]/30">
                  Verified Client
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Interactive Luxury Testimonial Slider (7 Columns on Desktop) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={smoothEmergenceVariant(shouldReduceMotion, 0.15)}
            className="lg:col-span-7 w-full"
            onMouseEnter={() => setIsAutoplayPaused(true)}
            onMouseLeave={() => setIsAutoplayPaused(false)}
          >
            <div className="p-2.5 bg-gradient-to-b from-[#B9935A]/30 via-[#B9935A]/10 to-[#B9935A]/30 rounded-[32px] shadow-2xl backdrop-blur-md border border-[#B9935A]/30 h-full">
              <div className="bg-white rounded-[24px] p-6 sm:p-8 lg:p-10 border border-[#B9935A]/20 shadow-inner h-full flex flex-col justify-between min-h-[360px]">
                
                {/* Slide Content with AnimatePresence */}
                <div className="relative min-h-[190px] flex flex-col justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeReview.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="space-y-4"
                    >
                      {/* Star Rating & Counter */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-[#B9935A]">
                          {[...Array(activeReview.rating)].map((_, i) => (
                            <span
                              key={i}
                              className="material-symbols-outlined text-lg"
                              style={{ fontVariationSettings: "'FILL' 1" }}
                            >
                              star
                            </span>
                          ))}
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider text-[#B9935A] bg-[#B9935A]/10 px-3 py-1 rounded-full border border-[#B9935A]/20">
                          0{currentIndex + 1} / 0{REVIEWS.length}
                        </span>
                      </div>

                      {/* Quote Text */}
                      <p className="text-base sm:text-lg lg:text-xl text-gray-900 font-light leading-relaxed italic">
                        {activeReview.quote}
                      </p>

                      {/* Author Profile */}
                      <div className="flex items-center gap-4 pt-4 border-t border-[#B9935A]/15">
                        <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-[#B9935A] to-[#d4af37] shrink-0 shadow-md">
                          <div className="w-full h-full rounded-full bg-[#B9935A] flex items-center justify-center text-white">
                            <span className="material-symbols-outlined text-2xl">
                              person
                            </span>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-base sm:text-lg font-bold text-gray-900 leading-tight">
                            {activeReview.name}
                          </h4>
                          <span className="text-xs font-semibold text-[#B9935A] tracking-wide">
                            {activeReview.project}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Slider Navigation Bar */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-100 mt-6">
                  {/* Pagination Dots */}
                  <div className="flex items-center gap-2">
                    {REVIEWS.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                          idx === currentIndex
                            ? "w-8 bg-[#B9935A]"
                            : "w-2.5 bg-[#B9935A]/30 hover:bg-[#B9935A]/60"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Next / Prev Controls */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={handlePrev}
                      aria-label="Previous Testimonial"
                      className="w-10 h-10 rounded-full border border-[#B9935A]/40 text-[#785926] hover:bg-[#B9935A] hover:text-white hover:border-[#B9935A] transition-all duration-300 flex items-center justify-center shadow-sm"
                    >
                      <span className="material-symbols-outlined text-xl">
                        arrow_back
                      </span>
                    </button>
                    <button
                      onClick={handleNext}
                      aria-label="Next Testimonial"
                      className="w-10 h-10 rounded-full gold-btn-gradient text-white border-none hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center shadow-md cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-xl">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
});

export default ClientVoices;
