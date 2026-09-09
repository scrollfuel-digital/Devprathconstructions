import React from "react";
import heroBgImg from "../../../assets/Project/hero.jpeg";
const HeroSection = () => {
  return (
    <section className="relative w-full h-screen min-h-[500px] overflow-hidden">
      <img
        src={heroBgImg}
        alt="Mangalmurti Residency"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </section>
  );
};

export default HeroSection;