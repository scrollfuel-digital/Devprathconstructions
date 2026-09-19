import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "../../../components/common/ScrollReveal.jsx";
import backgroundImage from "../../../assets/home page/background_image.png";
import video1 from "../../../assets/videos/Amruta Deshpande.mp4";
import video2 from "../../../assets/videos/Gangatai Ade.mp4";
import video3 from "../../../assets/videos/Todkar_family_review.mp4";
import video6 from "../../../assets/videos/video_6.mp4";
import video7 from "../../../assets/videos/video_7.mp4";
import video8 from "../../../assets/videos/video_8.mp4";
import video9 from "../../../assets/videos/video_9.mp4";
import video10 from "../../../assets/videos/video_10.mp4";
import video11 from "../../../assets/videos/video_11.mp4";
import video12 from "../../../assets/videos/video_12.mp4";
// import video13 from "../../../assets/videos/video_13.mp4";
import video14 from "../../../assets/videos/video_14.mp4";
import video15 from "../../../assets/videos/video_15.mp4";
import video16 from "../../../assets/videos/video_16.mp4";
import video17 from "../../../assets/videos/video_17.mp4";
// import video18 from "../../../assets/videos/video_18.mp4";
import video19 from "../../../assets/videos/video_19.mp4";

const VIDEO_ITEMS = [
  { src: video1, label: "Amruta Deshpande" },
  { src: video2, label: "Gangatai Ade" },
  { src: video3, label: "Todkar Family" },
  // { src: video4, label: "Vijay Karwande" },
  { src: video6, label: "Video 6" },
  { src: video7, label: "Video 7" },
  { src: video8, label: "Video 8" },
  { src: video9, label: "Video 9" },
  { src: video10, label: "Video 10" },
  { src: video11, label: "Video 11" },
  { src: video12, label: "Video 12" },
  // { src: video13, label: "Video 13" },
  { src: video14, label: "Video 14" },
  { src: video15, label: "Video 15" },
  { src: video16, label: "Video 16" },
  { src: video17, label: "Video 17" },
  // { src: video18, label: "Video 18" },
  { src: video19, label: "Video 19" },
];

function VideoCard({ src, label }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <div className="group relative aspect-[9/16] w-[75vw] sm:w-[calc(50%-10px)] md:w-[calc(33.333%-14px)] lg:w-[calc(25%-15px)] shrink-0 snap-start overflow-hidden bg-text-dark/5">
      <video
        ref={videoRef}
        src={src}
        loop
        playsInline
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="h-full w-full object-cover"
      />

      <button
        type="button"
        onClick={togglePlay}
        aria-label={playing ? `Pause ${label}` : `Play ${label}`}
        className={`absolute inset-0 flex items-center justify-center bg-text-dark/10 transition-opacity duration-300 ${playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"
          }`}
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/80 text-white sm:h-16 sm:w-16">
          {playing ? (
            <span className="flex gap-1">
              <span className="h-4 w-1 bg-white" />
              <span className="h-4 w-1 bg-white" />
            </span>
          ) : (
            <span className="ml-1 h-0 w-0 border-y-8 border-l-[14px] border-y-transparent border-l-white" />
          )}
        </span>
      </button>
    </div>
  );
}

export default function DiscoverLifeSection() {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    const slider = sliderRef.current;
    if (!slider) return;
    const scrollAmount = slider.clientWidth;
    slider.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full overflow-hidden bg-cream px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <img
        src={backgroundImage}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-[0.18]"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8 sm:mb-12">
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold leading-tight tracking-tight text-text-dark">
              Built on Trust.
              <br />
              <span className="font-bold text-brand-primary">
                Remembered for Life.
              </span>
            </h2>

            {/* Scroller Controls */}
            <div className="flex items-center gap-3 shrink-0 self-end sm:self-auto">
              <button
                type="button"
                onClick={() => scroll("left")}
                aria-label="Scroll left"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-cream text-text-dark hover:bg-gold hover:text-white transition-all cursor-pointer shadow-sm active:scale-95"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                aria-label="Scroll right"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-cream text-text-dark hover:bg-gold hover:text-white transition-all cursor-pointer shadow-sm active:scale-95"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div
            ref={sliderRef}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 scrollbar-none"
          >
            {VIDEO_ITEMS.map((item) => (
              <VideoCard key={item.label} {...item} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}