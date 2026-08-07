import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Building2,
  MapPin,
  ShieldCheck,
  TrendingUp,
  Users,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";
import { magicalBehindVariant } from "./magicalBehindVariant";

const cards = [
  {
    number: "01",
    icon: Building2,
    title: "Premium Construction",
    subtitle: "Engineering Perfection",
    description:
      "Built with superior materials and reliable construction practices to ensure structural durability, safety, and lasting quality.",
    highlight: "BIS Certified Materials",
  },
  {
    number: "02",
    icon: MapPin,
    title: "Strategic Locations",
    subtitle: "Prime Nagpur Real Estate",
    description:
      "Projects situated in growth corridors with convenient access to schools, medical hubs, commercial centers, and expressways.",
    highlight: "High Connectivity",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Transparent Process",
    subtitle: "100% Legal Clarity",
    description:
      "Complete transparency throughout your home-buying journey with RERA compliance, clear documentation, and zero hidden costs.",
    highlight: "RERA Registered",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Long-Term Investment",
    subtitle: "High Value Appreciation",
    description:
      "Thoughtfully developed residences in prime micro-markets offering high rental yields and long-term capital growth.",
    highlight: "Strong ROI Potential",
  },
  {
    number: "05",
    icon: Users,
    title: "Customer-First Service",
    subtitle: "Dedicated Support",
    description:
      "Personalized guidance from your initial inquiry through booking, construction updates, legal formalities, and key handover.",
    highlight: "End-to-End Assistance",
  },
  {
    number: "06",
    icon: Sparkles,
    title: "Modern Lifestyle Living",
    subtitle: "Smart Architecture",
    description:
      "Vastu-compliant homes designed for modern families featuring natural light, maximum ventilation, and contemporary amenities.",
    highlight: "Thoughtful Design",
  },
];

const AUTOPLAY_INTERVAL_MS = 4000;

export default function WhyChooseSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const animationVariant = magicalBehindVariant(shouldReduceMotion);
  const magicalInViewProps = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: false, amount: 0.05 },
    variants: animationVariant,
    style: { willChange: "transform, opacity, filter" },
  };

  const getCardsPerView = () => {
    if (typeof window === "undefined") return 1;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640) return 2;
    return 1;
  };

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());
  const totalSlides = Math.ceil(cards.length / cardsPerView);

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
      setActiveIndex(0);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goToSlide = useCallback(
    (index) => {
      setActiveIndex(((index % totalSlides) + totalSlides) % totalSlides);
    },
    [totalSlides]
  );

  const goNext = useCallback(() => {
    goToSlide(activeIndex + 1);
  }, [activeIndex, goToSlide]);

  const goPrev = useCallback(() => {
    goToSlide(activeIndex - 1);
  }, [activeIndex, goToSlide]);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalSlides);
    }, AUTOPLAY_INTERVAL_MS);

    return () => clearInterval(timer);
  }, [isPaused, totalSlides]);

  return (
    <motion.div
      className="relative w-full py-1"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      {...magicalInViewProps}
    >
      {/* Slider Viewport */}
      <motion.div className="overflow-hidden rounded-3xl py-1 px-1" {...magicalInViewProps}>
        <div
          ref={trackRef}
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div key={slideIndex} className="w-full flex-shrink-0 flex gap-5">
              {cards
                .slice(
                  slideIndex * cardsPerView,
                  slideIndex * cardsPerView + cardsPerView
                )
                .map((card) => {
                  const Icon = card.icon;

                  return (
                    <div key={card.title} className="flex-1 px-1 py-1">
                      <div className="group relative h-full rounded-2xl bg-white/90 backdrop-blur-md border border-[#c9a063]/25 p-6 shadow-[0_10px_25px_rgba(23,34,53,0.05)] hover:shadow-[0_18px_35px_rgba(201,160,99,0.18)] hover:border-[#c9a063] hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between overflow-hidden">

                        {/* Top Decorative Card Number & Accent Gradient */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#c9a063]/10 via-transparent to-transparent rounded-bl-full pointer-events-none group-hover:from-[#c9a063]/20 transition-all duration-500" />

                        <div>
                          {/* Card Header Row */}
                          <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#c9a063]/15 to-[#c9a063]/5 border border-[#c9a063]/30 flex items-center justify-center text-[#c9a063] group-hover:bg-[#c9a063] group-hover:text-white group-hover:border-[#c9a063] transition-all duration-500 shadow-sm group-hover:shadow-[0_0_15px_rgba(201,160,99,0.35)]">
                              <Icon className="w-6 h-6 transition-transform duration-500 group-hover:scale-110" />
                            </div>

                            <span className="text-2xl font-extrabold tracking-tight text-[#c9a063]/40 group-hover:text-[#c9a063] transition-colors duration-500 font-heading">
                              {card.number}
                            </span>
                          </div>

                          {/* Category Tag */}
                          <span className="inline-block text-[11px] font-bold uppercase tracking-[2px] text-[#c9a063] mb-1.5">
                            {card.subtitle}
                          </span>

                          {/* Card Title */}
                          <h3 className="text-2xl font-bold text-[#172235] mb-2 group-hover:text-[#c9a063] transition-colors duration-300">
                            {card.title}
                          </h3>

                          {/* Description */}
                          <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            {card.description}
                          </p>
                        </div>

                        {/* Bottom Highlight Badge */}
                        <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#172235]">
                          <span className="flex items-center gap-1.5 text-gray-700 font-medium">
                            <span className="w-2 h-2 rounded-full bg-[#c9a063] animate-pulse" />
                            {card.highlight}
                          </span>

                          <span className="w-7 h-7 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#c9a063]/10 group-hover:text-[#c9a063] transition-all duration-300">
                            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Navigation Controls Row */}
      <motion.div className="flex items-center justify-between mt-5 px-2" {...magicalInViewProps}>
        {/* Left: Progress Bar Indicator */}
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-500 ${activeIndex === index
                    ? "w-8 bg-[#c9a063] shadow-[0_0_10px_rgba(201,160,99,0.5)]"
                    : "w-2 bg-gray-300 hover:bg-[#c9a063]/50"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <span className="text-xs font-medium text-gray-500 ml-2">
            0{activeIndex + 1} / 0{totalSlides}
          </span>
        </div>

        {/* Right: Prev & Next Arrow Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={goPrev}
            aria-label="Previous Slide"
            className="w-10 h-10 rounded-full bg-[#172235] border border-[#c9a063]/40 text-white flex items-center justify-center hover:bg-[#c9a063] hover:border-[#c9a063] transition-all duration-300 shadow-md active:scale-95 group cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
          </button>

          <button
            onClick={goNext}
            aria-label="Next Slide"
            className="w-10 h-10 rounded-full bg-[#172235] border border-[#c9a063]/40 text-white flex items-center justify-center hover:bg-[#c9a063] hover:border-[#c9a063] transition-all duration-300 shadow-md active:scale-95 group cursor-pointer"
          >
            <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
