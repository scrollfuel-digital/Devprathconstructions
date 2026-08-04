/**
 * Shared Smooth Emergence Animation Variant for Framer Motion
 * Used across section components to ensure consistent entrance animations
 * while adhering to reduced-motion preferences.
 */
export const smoothEmergenceVariant = (shouldReduceMotion, delay = 0) => ({
  hidden: {
    opacity: 0,
    scale: shouldReduceMotion ? 1 : 0.96,
    y: shouldReduceMotion ? 0 : 30,
    filter: shouldReduceMotion ? 'none' : 'blur(6px)',
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.2,
      delay: delay,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: -20,
    filter: 'blur(4px)',
    transition: {
      duration: 0.35,
      ease: 'easeOut',
    },
  },
});
