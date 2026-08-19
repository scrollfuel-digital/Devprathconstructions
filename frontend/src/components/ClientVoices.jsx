import React, { memo, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import todkarVideo from "../assets/videos/Todkar_family_review.mp4";

const REVIEWS = [
  {
    id: 1,
    name: "Neha Omprakash Ambulkar",
    quote: "I know and hope construction quality will be good as explained at the time of purchase.",
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
    quote: "The proceedings and Location are very satisfactory, just need more updates on the development so far and plan on how we will be getting the flats and details about it.",
    rating: 5,
    project: "Mangalmurti Residency Buyer",
  },
  {
    id: 5,
    name: "Archana Ojha",
    quote: "Good job, keep it up!",
    rating: 5,
    project: "Mangalmurti Residency Buyer",
  },
];

export const ClientVoices = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const activeReview = REVIEWS[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-[#F8F5EF] border-t border-[#B9935A]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#B9935A]/10 border border-[#B9935A]/25 mb-3">
            <span className="material-symbols-outlined text-sm text-[#B9935A]">verified</span>
            <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#785926]">
              Client Reviews & Video
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 font-heading">
            Voices of Our <span className="gold-gradient-text">Homeowners</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-700 font-light">
            Watch authentic homeowner stories and explore verified testimonials from Devprath Constructions buyers.
          </p>
        </div>

        {/* 2-Column Card (Left Video | Right Reviews Slider) */}
        <div className="p-4 sm:p-6 bg-gradient-to-b from-[#B9935A]/20 via-[#B9935A]/5 to-[#B9935A]/20 rounded-[32px] shadow-xl border border-[#B9935A]/30 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Video Player with Unmute & Controls */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative rounded-[24px] overflow-hidden bg-black aspect-square w-full shadow-md border border-[#B9935A]/30 group">
              <video
                ref={videoRef}
                src={todkarVideo}
                autoPlay
                muted={isMuted}
                loop
                controls
                playsInline
                preload="metadata"
                aria-label="Todkar Family Review Video"
                className="w-full h-full object-cover"
              />

              {/* Story Badge on Top-Left */}
              <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 pointer-events-none z-10">
                <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                  Todkar Family Review
                </span>
              </div>

              {/* Mute/Unmute Toggle Button Top-Right */}
              <button
                type="button"
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute video" : "Mute video"}
                className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 hover:bg-[#B9935A] text-white backdrop-blur-md border border-white/20 transition-all flex items-center justify-center cursor-pointer shadow-md active:scale-95"
              >
                <span className="material-symbols-outlined text-base">
                  {isMuted ? "volume_off" : "volume_up"}
                </span>
              </button>
            </div>

            <div className="mt-3 px-2 flex items-center justify-between text-xs text-gray-800 font-medium">
              <span>Mangalmurti Residency Homeowner</span>
              <span className="text-[#785926] font-semibold">Verified Video</span>
            </div>
          </div>

          {/* Right Column: Clean Reviews Slider */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-white rounded-[24px] p-6 sm:p-8 border border-[#B9935A]/20 shadow-md h-full flex flex-col justify-between">
              
              {/* Review Content */}
              <div className="min-h-[190px] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeReview.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex text-[#B9935A]">
                        {[...Array(activeReview.rating)].map((_, i) => (
                          <span key={i} className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                            star
                          </span>
                        ))}
                      </div>
                      <span className="text-xs font-bold text-[#B9935A] bg-[#B9935A]/10 px-2.5 py-0.5 rounded-full border border-[#B9935A]/20">
                        0{currentIndex + 1} / 0{REVIEWS.length}
                      </span>
                    </div>

                    <div className="border-b border-gray-100 pb-3">
                      <h4 className="text-base font-bold text-gray-900">{activeReview.name}</h4>
                      <p className="text-xs text-[#B9935A] font-medium">{activeReview.project}</p>
                    </div>

                    <p className="text-base sm:text-lg text-gray-800 font-light italic leading-relaxed">
                      "{activeReview.quote}"
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-4">
                <div className="flex items-center gap-1.5">
                  {REVIEWS.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentIndex(idx)}
                      aria-label={`Slide ${idx + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === currentIndex ? "w-6 bg-[#B9935A]" : "w-2 bg-[#B9935A]/30 hover:bg-[#B9935A]/60"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous review"
                    className="w-9 h-9 rounded-full border border-[#B9935A]/40 text-[#785926] hover:bg-[#B9935A] hover:text-white transition-all flex items-center justify-center cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-lg">arrow_back</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next review"
                    className="w-9 h-9 rounded-full gold-btn-gradient text-white flex items-center justify-center cursor-pointer hover:shadow-md transition-all"
                  >
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
});

export default ClientVoices;
