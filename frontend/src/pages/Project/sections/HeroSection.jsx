import React from "react";
import projectHeroVideo from "../../../assets/videos/Reception_Devprath.mp4";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen min-h-[500px] overflow-hidden">
      <video
        src={projectHeroVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </section>
  );
};

export default HeroSection;