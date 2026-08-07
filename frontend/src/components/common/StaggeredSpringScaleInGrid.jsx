import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { PHASE_HIGHLIGHTS } from '../../constants/phasesData';
import entranceLobbyImg from '../../assets/Township Features/Grand Entrance Lobby.png';
import ecoFriendlyImg from '../../assets/Township Features/Eco-friendly.png';
import landscapeImg from '../../assets/Township Features/Landscaped Vicinity.png';
import backupImg from '../../assets/Township Features/Backup.png';

/**
 * 4 High-Res Asset Images matching township feature items
 */
const DEFAULT_IMAGES = [
  entranceLobbyImg,
  ecoFriendlyImg,
  landscapeImg,
  backupImg,
];

/**
 * Per-Card Spring Physics Variant (Two-Way Scroll Emergence)
 */
const cardSpringVariants = {
  hidden: {
    opacity: 0,
    scale: 0.75,
    y: 30,
  },
  visible: (idx) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 240,
      damping: 20,
      mass: 0.8,
      delay: (idx % 4) * 0.1,
    },
  }),
};

const reducedMotionCardVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.35 },
  },
};

/**
 * GridCard Sub-component
 * Features:
 * 1. Independent per-card scroll emergence (`whileInView`, `viewport={{ once: false, amount: 0.2 }}`)
 * 2. Animated smooth card scale growth (`scale: 1.08`) on hover/tap
 * 3. Golden star sparkle badge
 * 4. Interactive bottom-to-top sharp image slide-up + text vanish effect (PC hover & mobile tap)
 */
function GridCard({ item, index, shouldReduceMotion }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const bgImage = item.image || DEFAULT_IMAGES[index % DEFAULT_IMAGES.length];
  const activeVariants = shouldReduceMotion ? reducedMotionCardVariants : cardSpringVariants;
  const isImageShown = isClicked || isHovered;

  return (
    <motion.div
      custom={index}
      variants={activeVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      whileHover={{ scale: 1.08, y: -8 }}
      whileTap={{ scale: 1.05, y: -4 }}
      transition={{
        type: 'spring',
        stiffness: 280,
        damping: 18,
        mass: 0.7,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsClicked((prev) => !prev)}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#B9935A]/30 bg-white/95 p-6 shadow-md transition-shadow transition-colors duration-300 hover:border-[#B9935A] hover:shadow-[0_25px_55px_rgba(185,147,90,0.32)] min-h-[210px] cursor-pointer select-none z-10 hover:z-30 transform-gpu"
    >
      {/* Radial Glow Accent */}
      <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[radial-gradient(circle,_rgba(185,147,90,0.25)_0%,_transparent_70%)] pointer-events-none z-0" />

      {/* Layer 1: Bottom-to-Top Sharp Image Slide-Up Overlay */}
      <motion.div
        initial={false}
        animate={{ y: isImageShown ? '0%' : '100%' }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-20 pointer-events-none overflow-hidden rounded-2xl transform-gpu"
      >
        <img
          src={bgImage}
          alt={item.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#F0D060] drop-shadow-md">
            {item.title}
          </span>
        </div>
      </motion.div>

      {/* Layer 2: Main Text & Icon Content (Fades out smoothly on hover/tap) */}
      <motion.div
        animate={{ opacity: isImageShown ? 0 : 1 }}
        transition={{ duration: 0.25 }}
        className="relative z-10 flex flex-col justify-between h-full transform-gpu"
      >
        <div>
          {/* Header Icon & Star Badge */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#B9935A]/12 text-[#B9935A] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#B9935A] group-hover:text-white">
              <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
            </div>

            {/* Star Indicator */}
            <div className="flex items-center gap-1">
              <span
                className="material-symbols-outlined text-[16px] text-[#B9935A] animate-pulse"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                auto_awesome
              </span>
              <span className="text-[11px] font-semibold text-[#B9935A]/80 font-label-caps uppercase tracking-wider">
                0{index + 1}
              </span>
            </div>
          </div>

          {/* Title */}
          <h4 className="font-heading text-base sm:text-lg font-bold text-[#1B1C1C] transition-colors duration-300 group-hover:text-[#B9935A]">
            {item.title}
          </h4>

          {/* Description */}
          <p className="mt-2 font-body text-xs leading-relaxed text-[#5A5245] font-light">
            {item.description}
          </p>
        </div>

        {/* Golden Bottom Accent Bar */}
        <div className="mt-4 h-[2px] w-6 rounded-full bg-[#B9935A]/30 transition-all duration-500 group-hover:w-full group-hover:bg-[#B9935A]" />
      </motion.div>
    </motion.div>
  );
}

/**
 * StaggeredSpringScaleInGrid Component
 * Displays a 2x4 grid (2 rows, 4 columns) with independent two-way scroll spring emergence,
 * section headline scroll animations, animated card hover growth, and sharp bottom-to-top image slide-up.
 */
export default function StaggeredSpringScaleInGrid({
  items = PHASE_HIGHLIGHTS,
  title = 'Township Features',
  subtitle = 'Crafted for luxury, security, and sustainable micro-township living in Nagpur.',
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="w-full py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Headline Header with Two-Way Scroll Emergence */}
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 text-center max-w-2xl mx-auto transform-gpu"
          >
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-label-caps text-xs font-bold uppercase tracking-[3px] text-[#B9935A] block mb-2"
            >
              World-Class Experience
            </motion.span>
            {title && (
              <motion.h3
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="font-heading text-base sm:text-2xl md:text-4xl font-bold text-[#1B1C1C] leading-tight whitespace-nowrap"
              >
                {title}
              </motion.h3>
            )}
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-xs sm:text-sm text-[#4E453A] mt-2 font-light"
              >
                {subtitle}
              </motion.p>
            )}
          </motion.div>
        )}

        {/* 2x4 Grid with Independent Per-Card Scroll Emergence */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-3 px-1">
          {items.map((item, idx) => (
            <GridCard
              key={item.id || item.title || idx}
              item={item}
              index={idx}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
