import { useEffect, useRef, useState } from "react";

const ScrollReveal = ({
  children,
  className = "",
  duration = 2000,
  delay = 0.50,
  distance = 135,
  threshold = 0.25,
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element); // reveal once, then stop watching
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={ref} className={className}>
      <div
        className={`scroll-reveal ${isVisible ? "is-visible" : ""}`}
        style={{
          "--reveal-duration": `${duration}ms`,
          "--reveal-delay": `${delay}ms`,
          "--reveal-distance": `${distance}px`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ScrollReveal;