import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { firstSliderImages } from "../../constants/galleryData";

export default function GallerySlider({ onImageClick }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Number of visible cards depending on viewport width
  const visibleCards = 4;
  const totalImages = firstSliderImages.length;
  const maxIndex = totalImages - visibleCards;

  // Auto scroll effect
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(timer);
  }, [isHovered, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      handleNext();
    } else if (touchEndX.current - touchStartX.current > 50) {
      handlePrev();
    }
  };

  return (
    <div
      className="relative w-full overflow-hidden px-1 py-3 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        aria-label="Previous Slide"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#1F1913]/70 hover:bg-[#B9935A] text-white backdrop-blur-md border border-[#B9935A]/30 flex items-center justify-center transition-all duration-300 shadow-xl opacity-90 hover:opacity-100 hover:scale-110 cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        aria-label="Next Slide"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#1F1913]/70 hover:bg-[#B9935A] text-white backdrop-blur-md border border-[#B9935A]/30 flex items-center justify-center transition-all duration-300 shadow-xl opacity-90 hover:opacity-100 hover:scale-110 cursor-pointer"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slider Track */}
      <div className="overflow-hidden rounded-2xl border border-[#B9935A]/20 bg-[#f8f5ef]">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
          }}
        >
          {firstSliderImages.map((img, index) => (
            <div
              key={img.id}
              onClick={() => onImageClick(img, index)}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 shrink-0 p-2 cursor-pointer group/card"
            >
              <div className="relative overflow-hidden rounded-xl border border-[#B9935A]/20 bg-white shadow-md hover:shadow-xl hover:border-[#B9935A] transition-all duration-500 h-48 sm:h-56">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover object-center group-hover/card:scale-105 transition-transform duration-700"
                  loading="lazy"
                />

                {/* Light overlay on hover */}
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#1F1913]/85 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-xs font-semibold text-white truncate drop-shadow-md">
                    {img.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
