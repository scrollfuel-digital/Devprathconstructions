
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import heroVideo from "../../../assets/videos/home_page_hero.mp4";

export const HeroSection = () => {
  const videoRef = useRef(null);
  const lastTimeRef = useRef(0);
  const [cycleKey, setCycleKey] = useState(0);

  const handleVideoEnded = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }

    setCycleKey((prev) => prev + 1);
  };

  const handleTimeUpdate = (e) => {
    const current = e.target.currentTime;

    if (current < lastTimeRef.current && lastTimeRef.current > 8) {
      setCycleKey((prev) => prev + 1);
    }

    lastTimeRef.current = current;
  };

  // First line animation
  const firstLine = {
    hidden: {
      opacity: 0,
      y: 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Second line animation
  const secondLine = {
    hidden: {
      opacity: 0,
      y: 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.1,
        delay: 1.15,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center text-center overflow-hidden bg-[#1F1E1C]">

      {/* ================= VIDEO ================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          src={heroVideo}
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={handleVideoEnded}
          onTimeUpdate={handleTimeUpdate}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* ================= TEXT ================= */}
      <motion.div
        key={cycleKey}
        initial="hidden"
        animate="visible"
        className="
          relative
          z-10
          w-full
          max-w-6xl
          mx-auto
          px-6
          sm:px-8
          lg:px-10
          flex
          flex-col
          items-center
          justify-center
          text-center
        "
      >
        {/* LINE 1 */}
        <div className="overflow-hidden">
          <motion.h1
            variants={firstLine}
            className="
              !text-white
              font-display
              font-serif
              italic
              font-white
              tracking-wide
              leading-[1.05]
              text-[clamp(1.5rem,4vw,3.2rem)]
              drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]
            "
          >
            Thoughtfully Planned Residences.
          </motion.h1>
        </div>

        {/* LINE 2 */}
        <div className="overflow-hidden mt-2 sm:mt-3">
          <motion.h1
            variants={secondLine}
            className="
              !text-white
              font-display
              font-serif
              italic
              font-black
              tracking-wide
              leading-[1.05]
              text-[clamp(1.5rem,4vw,3.2rem)]
              drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]
            "
          >
            Crafted for Modern Living.
          </motion.h1>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;