export const magicalBehindVariant = (shouldReduceMotion) => ({
  hidden: shouldReduceMotion
    ? {
        opacity: 0,
        scale: 1,
        y: 0,
        filter: "blur(0px)",
      }
    : {
        opacity: 0,
        scale: 0.88,
        y: 35,
        filter: "blur(6px)",
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
