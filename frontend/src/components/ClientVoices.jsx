import React, { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import homePageTestimonialVideo from "../assets/videos/home_page_testimonial.mp4";
import { smoothEmergenceVariant, magicalBehindVariant } from "../utils/animations";

const REVIEWS = [
  {
    id: 1,
    name: "Neha Omprakash Ambulkar",
    quote:
      "I know and hope construction quality will be good as explained at the time of purchase",
  },
  {
    id: 2,
    name: "Nikhil Thamke",
    quote: "Location is so so good.",
  },
  {
    id: 3,
    name: "Atul Datar",
    quote: "Everything is up to the mark. No suggestions from my side.",
  },
  {
    id: 4,
    name: "Jayshree Dawrewar",
    quote:
      "The proceedings and Location are very satisfactory, just need more updates on the development so far and plan on how we will be getting the flats and details about it.",
  },
  {
    id: 5,
    name: "Archana ojha",
    quote: "Good job,keep it up!",
  },
];

// Duplicate list to guarantee seamless 100% infinite marquee loop
const MARQUEE_REVIEWS = [...REVIEWS, ...REVIEWS];

export const ClientVoices = memo(() => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#F8F5EF] border-t border-[#B9935A]/20 overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-20">
        
        {/* Section Header with Two-Way Scroll Emergence */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={smoothEmergenceVariant(shouldReduceMotion)}
          className="mb-12 md:mb-16 text-center max-w-3xl mx-auto"
        >
          <span className="text-xs font-bold uppercase tracking-[3px] text-[#B9935A] mb-3 block font-sans">
            Client Reviews & Video
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172235] tracking-tight mb-4 font-heading leading-tight">
            Voices of Our <span className="gold-gradient-text">Homeowners</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-700 font-light max-w-2xl mx-auto leading-relaxed">
            Watch real client experiences and read genuine feedback directly from buyers of Mangalmurti Residency.
          </p>
        </motion.div>

        {/* 2-Column Layout: Video on Left, Infinite Testimonials on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Column — Autoplay Muted Video Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={magicalBehindVariant(shouldReduceMotion)}
            style={{ willChange: "transform, opacity, filter" }}
            className="lg:col-span-5 w-full"
          >
            <div className="relative rounded-3xl overflow-hidden border border-[#B9935A]/30 shadow-2xl bg-[#172235] h-[360px] sm:h-[420px] lg:h-[460px] group">
              <video
                src={homePageTestimonialVideo}
                autoPlay
                loop
                muted
                playsInline
                aria-label="Devprath Client Testimonial Video"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Subtle Ambient Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#172235]/85 via-transparent to-black/20 pointer-events-none" />

              {/* Floating Top Badge */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#B9935A]/30 shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#B9935A] animate-ping" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#785926]">
                  Verified Video Story
                </span>
              </div>

              {/* Floating Bottom Info */}
              <div className="absolute bottom-5 left-5 right-5 text-white pointer-events-none">
                <h4 className="text-base sm:text-lg font-bold font-heading text-white leading-tight">
                  Mangalmurti Residency Experience
                </h4>
                <p className="text-xs text-gray-300 font-light mt-1">
                  Hear directly from happy families about quality, timeline & lifestyle.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Infinite Horizontal Testimonial Slider */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={smoothEmergenceVariant(shouldReduceMotion, 0.15)}
            className="lg:col-span-7 w-full overflow-hidden"
          >
            <div className="w-full overflow-hidden py-3">
              <div className="animate-infinite-marquee flex items-stretch gap-4 sm:gap-5">
                {MARQUEE_REVIEWS.map((item, index) => (
                  <div
                    key={`${item.id}-${index}`}
                    className="w-[300px] sm:w-[350px] shrink-0 bg-white p-5 sm:p-6 rounded-3xl border border-[#B9935A]/25 shadow-md flex flex-col justify-between cursor-pointer hover:shadow-xl transition-shadow duration-300"
                  >
                    <div>
                      {/* Profile Header */}
                      <div className="flex items-center gap-3.5 mb-4">
                        <div className="w-11 h-11 rounded-full bg-[#d8d8d8] flex items-center justify-center text-[#333333] shrink-0 shadow-inner">
                          <span className="material-symbols-outlined text-2xl">
                            person
                          </span>
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-[#172235] leading-tight">
                            {item.name}
                          </h4>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#B9935A]">
                            Homeowner
                          </span>
                        </div>
                      </div>

                      {/* Quote Text */}
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-light">
                        "{item.quote}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
});

export default ClientVoices;
