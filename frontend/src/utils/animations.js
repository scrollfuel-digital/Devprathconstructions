/**
 * Smooth, high-performance entrance animation variant for Framer Motion.
 * Uses lightweight opacity and transform transitions for instant, silky-smooth emergence
 * without GPU paint delays or layout jank.
 */
export const smoothEmergenceVariant = (shouldReduceMotion, delay = 0) => ({
  hidden: {
    opacity: 0,
    y: shouldReduceMotion ? 0 : 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: delay,
      ease: [0.25, 1, 0.5, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -15,
    transition: {
      duration: 0.25,
      ease: 'easeOut',
    },
  },
});

export const magicalBehindVariant = (shouldReduceMotion) => ({
  hidden: {
    opacity: 0,
    scale: shouldReduceMotion ? 1 : 0.88,
    y: shouldReduceMotion ? 0 : 35,
    filter: shouldReduceMotion ? "none" : "blur(6px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.25,
      delay: 0,
      ease: [0.25, 1, 0.5, 1],
    },
  },
});

