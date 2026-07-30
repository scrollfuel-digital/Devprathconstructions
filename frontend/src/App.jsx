import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Home from './pages/Home';

/**
 * Main App Component
 * Initializes Lenis smooth scrolling engine and renders the Home page.
 */
export function App() {
  useEffect(() => {
    // Initialize Lenis Smooth Scroll engine
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return <Home />;
}

export default App;
