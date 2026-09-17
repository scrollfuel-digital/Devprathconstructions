import React, { useRef, useState } from "react";
import heroVideo from "../../../assets/videos/home_page_hero.mp4";

export const HeroSection = () => {
  const videoRef = useRef(null);
  const lastTimeRef = useRef(0);
  const [cycleKey, setCycleKey] = useState(0);

  const handleVideoEnded = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => { });
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

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center text-center overflow-hidden bg-[#1F1E1C]">
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

      <div
        key={cycleKey}
        className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8 lg:px-10 flex flex-col items-center justify-center text-center"
      >
        <h1
          className="font-display font-serif tracking-tight leading-none"
          style={{
            fontSize: "clamp(1rem, 3.8vw, 2rem)",
            // textShadow: "0 1px 2px rgba(0,0,0,0.55), 0 0 1px rgba(0,0,0,0.4)",
          }}
        >
          <div className="inline-block overflow-hidden  text-white hero-showup">
            <h1 className="inline-block italic font-black tracking-wide">
              Thoughtfully Planned Residences.
            </h1>
          </div>
          <br />
          <div className="inline-block overflow-hidden text-white hero-reveal">
            <h1 className="inline-block italic font-black hero-slidein tracking-wide">
              Crafted for Modern Living.
            </h1>
          </div>
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;