import React, { memo, useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { CLIENT_VIDEOS, CLIENT_REVIEWS } from "../constants/clientVoicesData";
import { magicalBehindVariant } from "../constants/magicalBehindVariant";

export const ClientVoices = memo(() => {
  const shouldReduceMotion = useReducedMotion();
  const [videoIndex, setVideoIndex] = useState(0);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  // Observe section visibility for sound and playback
  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionVisible(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    observer.observe(sectionEl);

    return () => observer.disconnect();
  }, []);

  const hasInteractedRef = useRef(false);

  // Safe playback execution to eliminate browser AbortError / autoplay restriction warnings
  const playActiveVideo = useCallback(() => {
    const videoEl = videoRef.current;
    if (!videoEl || !isSectionVisible) return;

    if (hasInteractedRef.current) {
      videoEl.muted = false;
    }
    const playPromise = videoEl.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.play().catch(() => {});
        }
      });
    }
  }, [isSectionVisible]);

  // Trigger play / pause on visibility & videoIndex change
  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    if (isSectionVisible) {
      playActiveVideo();
    } else {
      videoEl.pause();
    }
  }, [isSectionVisible, videoIndex, playActiveVideo]);

  // Persistent audio unmute listener on user interactions (click, touch, keydown)
  useEffect(() => {
    const unlockAudio = () => {
      hasInteractedRef.current = true;
      const videoEl = videoRef.current;
      if (videoEl && isSectionVisible) {
        try {
          videoEl.muted = false;
        } catch (_) {}
      }
    };

    const events = ["pointerdown", "click", "touchstart", "keydown"];
    events.forEach((evt) => window.addEventListener(evt, unlockAudio, { passive: true }));

    return () => {
      events.forEach((evt) => window.removeEventListener(evt, unlockAudio));
    };
  }, [isSectionVisible]);

  // Slow, smooth auto-scroll for testimonials (8s interval)
  useEffect(() => {
    if (!isSectionVisible) return;

    const interval = setInterval(() => {
      setReviewIndex((prev) => (prev + 1) % CLIENT_REVIEWS.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isSectionVisible]);

  const handleNextVideo = useCallback(() => {
    if (videoRef.current) videoRef.current.muted = false;
    setVideoIndex((prev) => (prev + 1) % CLIENT_VIDEOS.length);
  }, []);

  const handlePrevVideo = useCallback(() => {
    if (videoRef.current) videoRef.current.muted = false;
    setVideoIndex((prev) => (prev - 1 + CLIENT_VIDEOS.length) % CLIENT_VIDEOS.length);
  }, []);

  const activeVideo = CLIENT_VIDEOS[videoIndex];

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 bg-[#F8F5EF] border-t border-[#B9935A]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with smooth entrance */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={magicalBehindVariant(shouldReduceMotion)}
          className="mb-12 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#B9935A]/10 border border-[#B9935A]/25 mb-3">
            <span className="material-symbols-outlined text-sm text-[#B9935A]">verified</span>
            <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#785926]">
              Client Reviews &amp; Video
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 font-heading">
            Voices of Our <span className="gold-gradient-text">Homeowners</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-700 font-light">
            Watch authentic homeowner stories and explore verified testimonials from Devprath Constructions buyers.
          </p>
        </motion.div>

        {/* 2-Column Card (Left Video | Right Slow & Smooth 2-Way Reviews Scroller) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={magicalBehindVariant(shouldReduceMotion)}
          className="p-4 sm:p-6 bg-gradient-to-b from-[#B9935A]/20 via-[#B9935A]/5 to-[#B9935A]/20 rounded-[32px] shadow-xl border border-[#B9935A]/30 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
        >
          
          {/* Left Column: Instant-Loading Video Player with Golden Navigation Arrows */}
          <div className="lg:col-span-5 flex flex-col">
            <div
              onClick={() => {
                hasInteractedRef.current = true;
                if (videoRef.current) videoRef.current.muted = false;
              }}
              className="relative rounded-[24px] overflow-hidden bg-black aspect-square w-full shadow-md border border-[#B9935A]/30 group cursor-pointer"
            >
              <video
                ref={videoRef}
                key={activeVideo.src}
                src={activeVideo.src}
                loop
                playsInline
                preload="auto"
                muted
                onCanPlay={playActiveVideo}
                aria-label={activeVideo.title}
                className="w-full h-full object-cover"
              />

              {/* Story Badge on Top-Left */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeVideo.id}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 pointer-events-none z-10"
                >
                  <span className="text-[11px] font-bold uppercase tracking-wider text-white">
                    {activeVideo.title}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Bar: Subtitle + Golden Arrow Navigation */}
            <div className="mt-3.5 px-2 flex items-center justify-between">
              <span className="text-sm sm:text-[15px] font-semibold text-gray-800 truncate">
                {activeVideo.subtitle}
              </span>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={handlePrevVideo}
                  aria-label="Previous video"
                  className="w-8 h-8 rounded-full border border-[#B9935A]/50 text-[#B9935A] hover:bg-[#B9935A] hover:text-white transition-all flex items-center justify-center cursor-pointer active:scale-95 shadow-sm"
                >
                  <span className="material-symbols-outlined text-base">arrow_back</span>
                </button>
                <button
                  type="button"
                  onClick={handleNextVideo}
                  aria-label="Next video"
                  className="w-8 h-8 rounded-full bg-[#B9935A] text-white hover:bg-[#8B6732] transition-all flex items-center justify-center cursor-pointer shadow-sm active:scale-95"
                >
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: 2 Slow, Smooth & Visible Scrolling Feedback Cards */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-4 h-full">
            {[0, 1].map((offset) => {
              const idx = (reviewIndex + offset) % CLIENT_REVIEWS.length;
              const rev = CLIENT_REVIEWS[idx];
              const isTop = offset === 0;

              return (
                <div
                  key={offset}
                  className="bg-white rounded-[24px] p-5 sm:p-6 border border-[#B9935A]/20 shadow-md flex-1 flex flex-col justify-center overflow-hidden transition-all hover:border-[#B9935A]/50 relative"
                >
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.div
                      key={rev.id}
                      initial={{ opacity: 0, y: isTop ? -16 : 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: isTop ? 16 : -16 }}
                      transition={{ duration: 1.25, ease: [0.25, 1, 0.5, 1] }}
                      className="space-y-3"
                    >
                      <div className="flex items-start justify-between gap-3 border-b border-gray-100 pb-2.5">
                        <div>
                          <h4 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug">
                            {rev.name}
                          </h4>
                          <p className="text-sm sm:text-[15px] text-[#B9935A] font-medium mt-0.5">
                            {rev.project}
                          </p>
                        </div>
                        <div className="flex items-center text-[#B9935A] shrink-0 mt-1">
                          {[...Array(rev.rating)].map((_, i) => (
                            <span
                              key={i}
                              className="material-symbols-outlined text-lg sm:text-xl"
                              style={{ fontVariationSettings: "'FILL' 1" }}
                            >
                              star
                            </span>
                          ))}
                        </div>
                      </div>

                      <p className="text-sm sm:text-base text-gray-800 font-light italic leading-relaxed py-1">
                        "{rev.quote}"
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </motion.div>
      </div>
    </section>
  );
});

export default ClientVoices;