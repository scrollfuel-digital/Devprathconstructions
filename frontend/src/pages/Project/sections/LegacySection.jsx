import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { COMPLETED_PROJECTS } from '../../../constants/completedProjects';
import ProjectCard from '../../../components/cards/ProjectCard';
import ProjectDetailModal from '../../../components/modals/ProjectDetailModal';
import { smoothEmergenceVariant } from '../../../utils/animations';

/**
 * LegacySection Component
 * Continuous infinite marquee scroll showcase for completed projects with detail modal view.
 */
export default function LegacySection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const shouldReduceMotion = useReducedMotion();

  const marqueeProjects = [...COMPLETED_PROJECTS, ...COMPLETED_PROJECTS];

  return (
    <section className="py-24 overflow-hidden relative" id="legacy">
      <div className="px-6 md:px-20 max-w-[1440px] mx-auto mb-10 text-center">
        <motion.span
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={smoothEmergenceVariant(shouldReduceMotion, 0.1)}
          className="font-label-caps text-xs font-semibold text-[#785926] bg-[#B9935A]/10 px-3 py-1 rounded-full border border-[#B9935A]/30 uppercase tracking-widest inline-block"
        >
          Building Trust &amp; Heritage
        </motion.span>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={smoothEmergenceVariant(shouldReduceMotion, 0.25)}
          className="font-heading text-3xl md:text-5xl font-bold text-[#1B1C1C] mt-3"
        >
          A Legacy of Excellence
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={smoothEmergenceVariant(shouldReduceMotion, 0.4)}
          className="text-[#666666] text-sm md:text-base mt-2 max-w-xl mx-auto"
        >
          Click any project card to view full project specifications and details.
        </motion.p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
        variants={smoothEmergenceVariant(shouldReduceMotion, 0.55)}
        className="relative w-full overflow-hidden py-4"
      >
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#F8F5EF] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#F8F5EF] to-transparent z-20 pointer-events-none" />

        <div className="animate-infinite-marquee flex gap-6 px-4">
          {marqueeProjects.map((project, index) => (
            <ProjectCard
              key={`${project.id}-${index}`}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </motion.div>

      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
