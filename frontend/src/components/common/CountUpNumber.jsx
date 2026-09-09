'use client';

import { useEffect, useRef, useState } from 'react';

export function CountUpNumber({
  value,
  duration = 1600,
  decimals = 0,
  prefix = '',
  suffix = '',
  className = '',
  useGrouping = true,
}) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Skip animation for users who prefer reduced motion
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      setDisplay(value);
      return;
    }

    let raf = 0;
    let start = 0;
    const easeOut = (t) => 1 - Math.pow(1 - t, 3);
    
    const step = (now) => {
      if (!start) start = now;
      const progress = Math.min((now - start) / duration, 1);
      setDisplay(value * easeOut(progress));
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          start = 0;
          cancelAnimationFrame(raf);
          raf = requestAnimationFrame(step);
        } else {
          cancelAnimationFrame(raf);
          setDisplay(0);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  const format = (n) =>
    n.toLocaleString(undefined, {
      useGrouping,
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });

  return (
    <span 
      ref={ref} 
      className={`tabular-nums ${className}`} 
      aria-label={`${prefix}${format(value)}${suffix}`}
    >
      <span aria-hidden="true">
        {prefix}{format(display)}{suffix}
      </span>
    </span>
  );
}