import React, { useEffect, useRef } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

/**
 * ScrollToTop Sub-component
 * Automatically scrolls window and Lenis engine to top (0, 0) on route change.
 */
function ScrollToTop({ lenisRef }) {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // 1. If no hash, immediately scroll to top
    if (!hash) {
      window.scrollTo(0, 0);
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true, force: true });
      }
      return;
    }

    // 2. If a hash exists (e.g. #site-walkthrough):
    // Immediately snap the scroll to 0 so the incoming page starts fresh
    window.scrollTo(0, 0);
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true, force: true });
    }

    // 3. Poll for the target element to mount, compute its absolute Y position, and smoothly scroll
    let attempts = 0;
    const interval = setInterval(() => {
      attempts++;
      const targetElement = document.querySelector(hash);

      if (targetElement) {
        clearInterval(interval);

        // Absolute page offset from top (minus 90px breathing room for the navbar)
        const targetY = targetElement.getBoundingClientRect().top + window.scrollY - 90;

        if (lenisRef.current) {
          lenisRef.current.scrollTo(targetY, { duration: 1.2, force: true });
        } else {
          window.scrollTo({ top: targetY, behavior: 'smooth' });
        }
      } else if (attempts >= 20) {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [pathname, hash, lenisRef]);

  return null;
}

function AppLayout({ lenisRef }) {
  const { pathname } = useLocation();
  const isAdminRoute = pathname.startsWith('/resource/admin') || pathname.startsWith('/admin');

  return (
    <>
      <ScrollToTop lenisRef={lenisRef} />
      {!isAdminRoute && <Navbar />}
      <AppRoutes />
      {!isAdminRoute && <Footer />}
    </>
  );
}

/**
 * Main App Component
 * Initializes Lenis smooth scrolling engine and renders pages via React Router.
 */
export function App() {
  const lenisRef = useRef(null);

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
      prevent: (node) => !!node?.closest?.('[data-lenis-prevent]'),
    });

    lenisRef.current = lenis;

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <BrowserRouter>
      <AppLayout lenisRef={lenisRef} />
    </BrowserRouter>
  );
}

export default App;
