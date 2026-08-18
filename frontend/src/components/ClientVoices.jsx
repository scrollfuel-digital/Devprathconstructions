import React, { memo, useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

// All distinct testimonial videos from src/assets/testimonial_videos/
import vid1 from "../assets/testimonial_videos/REVIEW VIDEO.mp4";
import vid2 from "../assets/testimonial_videos/WhatsApp Video 2026-07-05 at 13.23.54.mp4";
import vid3 from "../assets/testimonial_videos/WhatsApp Video 2026-07-11 at 17.37.29 (1).mp4";
import vid4 from "../assets/testimonial_videos/WhatsApp Video 2026-07-12 at 13.27.52 (1).mp4";
import vid5 from "../assets/testimonial_videos/WhatsApp Video 2026-07-12 at 13.27.52.mp4";

import { smoothEmergenceVariant } from "../utils/animations";

/**
 * REVIEWS data structure
 * Each testimonial item is paired with a distinct video from testimonial_videos,
 * client details, and verified badges.
 */
const REVIEWS = [
  {
    id: 1,
    name: "Neha Omprakash Ambulkar",
    quote:
      "I know and hope construction quality will be good as explained at the time of purchase",
    rating: 5,
    project: "Mangalmurti Residency Buyer",
    video: vid1,
    videoTitle: "Homeowner Experience & Quality Review",
    videoSubtitle: "Mangalmurti Residency",
    tag: "Verified Client",
  },
  {
    id: 2,
    name: "Nikhil Thamke",
    quote: "Location is so so good.",
    rating: 5,
    project: "Mangalmurti Residency Buyer",
    video: vid2,
    videoTitle: "Prime Connectivity & Living Story",
    videoSubtitle: "Mangalmurti Residency",
    tag: "Verified Homeowner",
  },
  {
    id: 3,
    name: "Atul Datar",
    quote: "Everything is up to the mark. No suggestions from my side.",
    rating: 5,
    project: "Mangalmurti Residency Buyer",
    video: vid3,
    videoTitle: "Buyer Feedback & Satisfaction",
    videoSubtitle: "Mangalmurti Residency",
    tag: "Verified Buyer",
  },
  {
    id: 4,
    name: "Jayshree Dawrewar",
    quote:
      "The proceedings and Location are very satisfactory, just need more updates on the development so far and plan on how we will be getting the flats and details about it.",
    rating: 5,
    project: "Mangalmurti Residency Buyer",
    video: vid4,
    videoTitle: "Project Timeline & Site Progress",
    videoSubtitle: "Mangalmurti Residency",
    tag: "Verified Client",
  },
  {
    id: 5,
    name: "Archana Ojha",
    quote: "Good job, keep it up!",
    rating: 5,
    project: "Mangalmurti Residency Buyer",
    video: vid5,
    videoTitle: "Client Satisfaction Story",
    videoSubtitle: "Mangalmurti Residency",
    tag: "Verified Homeowner",
  },
];

export const ClientVoices = memo(() => {
  const shouldReduceMotion = useReducedMotion();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev
  const [isMuted, setIsMuted] = useState(true);
  const [videoProgress, setVideoProgress] = useState(0);
  const videoRef = useRef(null);

  // Synchronized navigation handlers
  const handleNext = useCallback(() => {
    setDirection(1);
    setVideoProgress(0);
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setVideoProgress(0);
    setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  }, []);

  const handleSelect = useCallback(
    (targetIndex) => {
      if (targetIndex === currentIndex) return;
      setDirection(targetIndex > currentIndex ? 1 : -1);
      setVideoProgress(0);
      setCurrentIndex(targetIndex);
    },
    [currentIndex]
  );

  // Auto-advance as soon as video completes playing
  const handleVideoEnded = useCallback(() => {
    handleNext();
  }, [handleNext]);

  // Track live video progress percentage for the progress bar
  const handleTimeUpdate = useCallback(() => {
    if (videoRef.current && videoRef.current.duration) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setVideoProgress(progress);
    }
  }, []);

  // Play newly active video on slide change
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay handled gracefully
        });
      }
    }
  }, [currentIndex]);

  const activeItem = REVIEWS[currentIndex];

  // Slow, smooth visual transition variants for both video card and review card
  const videoCardVariants = {
    enter: (dir) => ({
      opacity: 0,
      x: shouldReduceMotion ? 0 : dir > 0 ? 40 : -40,
      scale: shouldReduceMotion ? 1 : 0.95,
      filter: shouldReduceMotion ? "none" : "blur(4px)",
    }),
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: shouldReduceMotion ? 0.3 : 0.85,
        ease: [0.25, 1, 0.5, 1],
      },
    },
    exit: (dir) => ({
      opacity: 0,
      x: shouldReduceMotion ? 0 : dir > 0 ? -40 : 40,
      scale: shouldReduceMotion ? 1 : 0.95,
      filter: shouldReduceMotion ? "none" : "blur(4px)",
      transition: {
        duration: shouldReduceMotion ? 0.25 : 0.75,
        ease: [0.25, 1, 0.5, 1],
      },
    }),
  };

  const reviewCardVariants = {
    enter: (dir) => ({
      opacity: 0,
      x: shouldReduceMotion ? 0 : dir > 0 ? 30 : -30,
      filter: shouldReduceMotion ? "none" : "blur(3px)",
    }),
    center: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: shouldReduceMotion ? 0.3 : 0.85,
        ease: [0.25, 1, 0.5, 1],
      },
    },
    exit: (dir) => ({
      opacity: 0,
      x: shouldReduceMotion ? 0 : dir > 0 ? -30 : 30,
      filter: shouldReduceMotion ? "none" : "blur(3px)",
      transition: {
        duration: shouldReduceMotion ? 0.25 : 0.75,
        ease: [0.25, 1, 0.5, 1],
      },
    }),
  };

  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 bg-[#F8F5EF] border-t border-[#B9935A]/20 overflow-hidden"
    >
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
            Watch authentic video stories and explore verified testimonials directly from buyers of Devprath Constructions.
          </p>
        </motion.div>

        {/* Outer Container surrounding both Video & Slider */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={smoothEmergenceVariant(shouldReduceMotion)}
          className="p-3 sm:p-4 lg:p-5 bg-gradient-to-b from-[#B9935A]/30 via-[#B9935A]/10 to-[#B9935A]/30 rounded-[32px] sm:rounded-[36px] shadow-2xl backdrop-blur-md border border-[#B9935A]/30 w-full relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center w-full">

            {/* Left Column — Square Video Card (5 Cols on Desktop) */}
            <div className="lg:col-span-5 w-full max-w-[360px] sm:max-w-[400px] lg:max-w-none mx-auto">
              <div className="relative rounded-[24px] overflow-hidden bg-[#1A1A1A] aspect-square w-full shadow-inner border border-[#B9935A]/20">
                <AnimatePresence custom={direction} mode="wait">
                  <motion.div
                    key={activeItem.id}
                    custom={direction}
                    variants={videoCardVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0 w-full h-full"
                  >
                    <video
                      ref={videoRef}
                      src={activeItem.video}
                      autoPlay
                      muted={isMuted}
                      playsInline
                      preload="auto"
                      onEnded={handleVideoEnded}
                      onTimeUpdate={handleTimeUpdate}
                      aria-label={`${activeItem.name} Video Story`}
                      className="w-full h-full object-cover"
                    />

                    {/* Subtle Overlay Gradient for Depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
                  </motion.div>
                </AnimatePresence>

                {/* Video Playback Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/40 z-10">
                  <div
                    className="h-full bg-gradient-to-r from-[#B9935A] to-[#f0d060] transition-all duration-150 ease-linear"
                    style={{ width: `${videoProgress}%` }}
                  />
                </div>

                {/* Sound Control Toggle */}
                <button
                  type="button"
                  onClick={() => setIsMuted((prev) => !prev)}
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                  className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/50 hover:bg-[#B9935A] text-white backdrop-blur-md border border-white/20 transition-all duration-300 flex items-center justify-center cursor-pointer shadow-md active:scale-95"
                >
                  <span className="material-symbols-outlined text-base">
                    {isMuted ? "volume_off" : "volume_up"}
                  </span>
                </button>

                {/* Live Synchronized Story Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-[#B9935A]/90 px-2.5 py-1 rounded-full backdrop-blur-sm shadow-sm flex items-center gap-1.5 border border-white/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                    Story #{activeItem.id}
                  </span>
                </div>
              </div>

              {/* Synchronized Caption Below Video */}
              <div className="mt-3 px-3.5 pb-1">
                <AnimatePresence custom={direction} mode="wait">
                  <motion.div
                    key={activeItem.id}
                    custom={direction}
                    variants={reviewCardVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="flex items-center justify-between"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 leading-tight">
                        {activeItem.videoTitle}
                      </h4>
                      <span className="text-[11px] font-semibold text-[#B9935A]">
                        {activeItem.videoSubtitle}
                      </span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#785926] bg-[#B9935A]/15 px-2.5 py-1 rounded-full border border-[#B9935A]/30">
                      {activeItem.tag}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Right Column — Testimonial Review Card (7 Cols on Desktop) */}
            <div className="lg:col-span-7 w-full h-full">
              <div className="bg-white rounded-[24px] p-6 sm:p-8 lg:p-10 border border-[#B9935A]/20 shadow-inner h-full flex flex-col justify-between min-h-[360px] sm:min-h-[380px]">
                
                {/* Review Text Content with Synchronized AnimatePresence */}
                <div className="relative min-h-[200px] flex flex-col justify-center overflow-hidden">
                  <AnimatePresence custom={direction} mode="wait">
                    <motion.div
                      key={activeItem.id}
                      custom={direction}
                      variants={reviewCardVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      className="space-y-4"
                    >
                      {/* Star Rating & Counter */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-[#B9935A]">
                          {[...Array(activeItem.rating)].map((_, i) => (
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

                      {/* Author Profile */}
                      <div className="flex items-center gap-4 py-2 border-b border-[#B9935A]/15">
                        <div className="w-11 h-11 rounded-full p-0.5 bg-gradient-to-tr from-[#B9935A] to-[#d4af37] shrink-0 shadow-md">
                          <div className="w-full h-full rounded-full bg-[#B9935A] flex items-center justify-center text-white">
                            <span className="material-symbols-outlined text-xl">
                              person
                            </span>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-base sm:text-lg font-bold text-gray-900 leading-tight">
                            {activeItem.name}
                          </h4>
                          <span className="text-xs font-semibold text-[#B9935A] tracking-wide">
                            {activeItem.project}
                          </span>
                        </div>
                      </div>

                      {/* Quote Text */}
                      <p className="text-base sm:text-lg lg:text-xl text-gray-900 font-light leading-relaxed italic pt-1">
                        "{activeItem.quote}"
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Navigation Bar & Slide Controls */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-100 mt-6">
                  {/* Indicator Pills */}
                  <div className="flex items-center gap-2">
                    {REVIEWS.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleSelect(idx)}
                        aria-label={`Go to testimonial ${idx + 1}`}
                        className={`h-2.5 rounded-full transition-all duration-500 cursor-pointer ${
                          idx === currentIndex
                            ? "w-8 bg-[#B9935A] shadow-sm"
                            : "w-2.5 bg-[#B9935A]/30 hover:bg-[#B9935A]/60"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Two-Way Synchronized Next / Prev Buttons */}
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={handlePrev}
                      aria-label="Previous Testimonial and Video"
                      className="w-10 h-10 rounded-full border border-[#B9935A]/40 text-[#785926] hover:bg-[#B9935A] hover:text-white hover:border-[#B9935A] active:scale-95 transition-all duration-300 flex items-center justify-center shadow-sm cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-xl">
                        arrow_back
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      aria-label="Next Testimonial and Video"
                      className="w-10 h-10 rounded-full gold-btn-gradient text-white border-none hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center shadow-md cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-xl">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default ClientVoices;
