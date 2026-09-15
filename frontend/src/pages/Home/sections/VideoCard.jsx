import React, { useRef, useState } from "react";
import ScrollReveal from "../../../components/common/ScrollReveal.jsx";
import backgroundImage from "../../../assets/home page/background_image.png";
import video1 from "../../../assets/videos/Amruta Deshpande.mp4";
import video2 from "../../../assets/videos/Gangatai Ade.mp4";
import video3 from "../../../assets/videos/Todkar_family_review.mp4";
import video4 from "../../../assets/videos/Vijay Karwande.mp4";

const VIDEO_ITEMS = [
  { src: video1, label: "Amruta Deshpande" },
  { src: video2, label: "Gangatai Ade" },
  { src: video3, label: "Todkar Family" },
  { src: video4, label: "Vijay Karwande" },
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
    <div className="group relative aspect-[9/16] w-[86%] shrink-0 snap-start overflow-hidden bg-text-dark/5 sm:w-full">
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
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const index = Math.round(slider.scrollLeft / slider.clientWidth);
    setActiveIndex(Math.min(index, VIDEO_ITEMS.length - 1));
  };

  const scrollToVideo = (index) => {
    sliderRef.current?.children[index]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
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

      <div className="relative z-10 mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="mx-auto max-w-3xl text-center font-display text-5xl !font-bold leading-tight tracking-tight text-text-dark sm:text-6xl md:text-8xl">
            Built on Trust.
            <br />
            <span className="font-bold text-brand-primary">
              Remembered for Life.
            </span>
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div
            ref={sliderRef}
            onScroll={handleScroll}
            className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 scrollbar-none sm:mt-14 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible lg:grid-cols-4"
          >
            {VIDEO_ITEMS.map((item) => (
              <VideoCard key={item.label} {...item} />
            ))}
          </div>

          <div className="mt-5 flex justify-center gap-2 sm:hidden">
            {VIDEO_ITEMS.map((item, index) => (
              <button
                key={item.label}
                type="button"
                aria-label={`Show ${item.label}`}
                onClick={() => scrollToVideo(index)}
                className={`h-1.5 rounded-full transition-all ${index === activeIndex ? "w-5 bg-gold" : "w-1.5 bg-gold/30"
                  }`}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}