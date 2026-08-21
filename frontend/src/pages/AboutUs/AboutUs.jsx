import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import aboutus1 from "../../assets/AboutUsImg/img1.png";
import aboutus2 from "../../assets/AboutUsImg/secimg.png";
import leaderSunil from "../../assets/AboutUsImg/sunil.png";
import leaderHemal from "../../assets/AboutUsImg/hemal.png";
import { magicalBehindVariant } from "../../constants/magicalBehindVariant";

import {
  Eye,
  Target,
  Award,
  ShieldCheck,
  Lightbulb,
  HeartHandshake,
  Star,
  CheckCircle2,
  Building2,
} from "lucide-react";

export default function About() {
  const shouldReduceMotion = useReducedMotion();
  const animationVariant = magicalBehindVariant(shouldReduceMotion);
  const magicalInViewProps = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: false, amount: 0.05 },
    variants: animationVariant,
    style: { willChange: "transform, opacity, filter" },
  };

  const coreValues = [
    {
      icon: Award,
      title: "Uncompromising Quality",
      desc: "Exceptional homes begin with premium materials, structural integrity, and rigorous engineering standards.",
    },
    {
      icon: ShieldCheck,
      title: "Absolute Integrity",
      desc: "Complete transparency, ethical business practices, and clear legal documentation at every step.",
    },
    {
      icon: Lightbulb,
      title: "Architectural Innovation",
      desc: "Thoughtfully planned modern designs that maximize natural light, ventilation, and living space.",
    },
    {
      icon: HeartHandshake,
      title: "Customer Commitment",
      desc: "Your satisfaction is our cornerstone. We walk alongside you from initial booking to key handover.",
    },
    {
      icon: Star,
      title: "Enduring Excellence",
      desc: "Striving to exceed expectations in property finish, community amenities, and long-term resale value.",
    },
  ];

  const brandPillars = [
    {
      id: "vision",
      title: "OUR VISION",
      Icon: Eye,
      points: [
        "Redefining residential living in Nagpur through planned modern communities.",
        "Delivering high-quality construction, structural durability, and lasting comfort.",
        "Creating secure, vibrant micro-townships where families thrive for generations.",
      ],
    },
    {
      id: "mission",
      title: "OUR MISSION",
      Icon: Target,
      points: [
        "Developing quality residential projects with durable construction and on-time completion.",
        "Designing master-planned layouts with functional spaces, ventilation, and amenities.",
        "Upholding ethical standards, complete transparency, and clear legal documentation.",
      ],
    },
  ];

  return (
    <div className="bg-[#f8f5ef] text-[#172235] selection:bg-[#c9a063] selection:text-white font-sans overflow-hidden pt-20">

      {/* =========================================================================
          OUR STORY & ARCHITECTURAL PHILOSOPHY (TWO COLUMN SHOWCASE)
         ========================================================================= */}
      <section id="our-story" className="py-20 lg:py-28 bg-[#f8f5ef] relative">
        <div className="container-custom">
          {/* Centered Top Header Alignment */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <motion.span
              className="text-xs font-bold uppercase tracking-[3px] text-[#c9a063] mb-3 block"
              {...magicalInViewProps}
            >
              ABOUT DEVPRATH CONSTRUCTIONS
            </motion.span>

            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172235] leading-tight mb-5 font-heading"
              {...magicalInViewProps}
            >
              Creating Homes That <span className="gold-gradient-text">Inspire Generations</span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg text-gray-700 font-light leading-relaxed max-w-2xl mx-auto"
              {...magicalInViewProps}
            >
              Devprath Constructions LLP develops vibrant residential communities in Nagpur that merge modern aesthetics, meticulous spatial planning, and superior structural engineering.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">

            {/* Left Image Stack Framing */}
            <motion.div className="lg:col-span-6 relative flex flex-col justify-center" {...magicalInViewProps}>
              <div className="relative rounded-3xl overflow-hidden border border-[#c9a063]/30 group">
                <img
                  src={aboutus1}
                  alt="Devprath Architectural Excellence"
                  className="w-full h-[480px] sm:h-[560px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#172235]/70 via-transparent to-transparent" />

                {/* Floating Bottom Badge (Right boundary constrained to sm:right-32 so text wraps to next lines without touching aboutus2) */}
                <div className="absolute bottom-6 left-4 sm:left-6 right-4 sm:right-32 bg-[#f8f5ef]/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-[#c9a063]/30 shadow-lg z-10">
                  <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#c9a063]/15 flex items-center justify-center shrink-0">
                      <Building2 className="text-[#c9a063] w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm sm:text-base font-bold text-[#172235]">
                        Crafted for Generations
                      </h4>
                      <p className="text-[11px] sm:text-xs text-gray-600 leading-snug sm:leading-relaxed mt-0.5">
                        Developing premier residential communities with enduring quality and architectural excellence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Inset Secondary Image (Restored to original bottom-right position: -bottom-3 -right-3) */}
              <div className="hidden sm:block absolute -bottom-3 -right-3 w-44 h-44 rounded-2xl overflow-hidden border-4 border-[#f8f5ef] z-20 hover:scale-105 transition-transform duration-300 shadow-xl">
                <img
                  src={aboutus2}
                  alt="Modern Construction Details"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Right Story Content */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <motion.span
                  className="text-xs font-bold uppercase tracking-[3px] text-[#c9a063] mb-3 block"
                  {...magicalInViewProps}
                >
                  OUR PHILOSOPHY
                </motion.span>

                <motion.h2
                  className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#172235] leading-tight mb-5 font-heading"
                  {...magicalInViewProps}
                >
                  Building Trust &amp; <span className="gold-gradient-text">Unmatched Quality</span>
                </motion.h2>

                <motion.p
                  className="text-base sm:text-lg text-gray-700 leading-relaxed font-light mb-8 sm:mb-10"
                  {...magicalInViewProps}
                >
                  We view homeownership as one of life’s most significant milestones. By maintaining uncompromising construction standards and open client relationships, we ensure every homeowner experiences peace of mind, lasting value, and absolute pride of ownership.
                </motion.p>
              </div>

              {/* Side-by-Side Vision & Mission Cards (Data-driven mapped array for 100% visual symmetry) */}
              <div className="grid md:grid-cols-2 gap-6 mt-auto items-stretch">
                {brandPillars.map(({ id, title, Icon, points }) => (
                  <motion.div
                    key={id}
                    className="bg-[#f8f5ef] rounded-2xl p-6 sm:p-7 border border-[#c9a063]/30 relative overflow-hidden flex flex-col justify-between h-full shadow-sm hover:shadow-md transition-shadow"
                    {...magicalInViewProps}
                  >
                    <div className="absolute top-0 right-0 w-20 h-20 bg-[#c9a063]/10 rounded-bl-full pointer-events-none" />

                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-[#c9a063]/15 flex items-center justify-center text-[#c9a063] shrink-0">
                          <Icon className="w-5 h-5 text-[#c9a063]" />
                        </div>
                        <h3 className="text-base font-bold text-[#172235] font-heading uppercase tracking-wide">
                          {title}
                        </h3>
                      </div>

                      <ul className="space-y-3 text-xs sm:text-sm font-medium">
                        {points.map((pt, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#c9a063] shrink-0 mt-0.5" />
                            <span className="leading-relaxed text-[#172235]">
                              {pt}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          LEADERSHIP & FOUNDERS SPOTLIGHT
         ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#f8f5ef] relative">
        <div className="container-custom">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span
              className="text-xs font-bold uppercase tracking-[3px] text-[#c9a063] mb-3 block"
              {...magicalInViewProps}
            >
              LEADERSHIP & VISION
            </motion.span>

            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172235] leading-tight mb-5 font-heading"
              {...magicalInViewProps}
            >
              Guided by <span className="gold-gradient-text">Visionary Leadership</span>
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg text-gray-700 font-light leading-relaxed max-w-2xl mx-auto"
              {...magicalInViewProps}
            >
              Meet the driving force behind Devprath Constructions LLP — dedicated directors bringing engineering discipline, innovation, and passion to Nagpur’s real estate landscape.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-14 max-w-5xl mx-auto">

            {/* Founder 1: Hemal */}
            <motion.div
              className="group flex flex-col items-center text-center p-6 sm:p-8 rounded-3xl transition-all duration-500"
              {...magicalInViewProps}
            >
              {/* Profile Image - Borderless & Shadowless */}
              <div className="w-52 h-52 sm:w-60 sm:h-60 lg:w-64 lg:h-64 rounded-3xl overflow-hidden mb-6">
                <img
                  src={leaderHemal}
                  alt="Mr. Hemal H. Nadiyana"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Title & Role */}
              <span className="text-xs font-bold uppercase tracking-[2.5px] text-[#c9a063] mb-1.5 block">
                Director &amp; Co-Founder
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#172235] font-heading mb-3">
                Mr. Hemal H. Nadiyana
              </h3>

              {/* Bio Paragraph */}
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light mb-5 max-w-md">
                Fostering architectural creativity, customer-first service, and modern living space design across all our premier residential developments.
              </p>

              {/* Quote Capsule */}
              <div className="flex items-start justify-center text-xs sm:text-sm font-semibold text-[#172235] bg-[#c9a063]/10 px-5 py-3.5 rounded-2xl max-w-md w-full text-center">
                <span className="italic text-gray-700">"We don't just build apartments; we craft spaces where families thrive."</span>
              </div>
            </motion.div>

            {/* Founder 2: Sunil */}
            <motion.div
              className="group flex flex-col items-center text-center p-6 sm:p-8 rounded-3xl transition-all duration-500"
              {...magicalInViewProps}
            >
              {/* Profile Image - Borderless & Shadowless */}
              <div className="w-52 h-52 sm:w-60 sm:h-60 lg:w-64 lg:h-64 rounded-3xl overflow-hidden mb-6">
                <img
                  src={leaderSunil}
                  alt="Dr. Sunil N. Patil"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Title & Role */}
              <span className="text-xs font-bold uppercase tracking-[2.5px] text-[#c9a063] mb-1.5 block">
                Director &amp; Co-Founder
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#172235] font-heading mb-3">
                Dr. Sunil N. Patil
              </h3>

              {/* Bio Paragraph */}
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light mb-5 max-w-md">
                Championing structural strength, material standards, and strategic growth. Committed to delivering homes that stand the test of time.
              </p>

              {/* Quote Capsule */}
              <div className="flex items-start justify-center text-xs sm:text-sm font-semibold text-[#172235] bg-[#c9a063]/10 px-5 py-3.5 rounded-2xl max-w-md w-full text-center">
                <span className="italic text-gray-700">"Excellence is never an accident; it is always the result of high intention."</span>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          OUR CORE VALUES SECTION (5 LUXURY CARDS)
         ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#f8f5ef] relative">
        <div className="container-custom">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span
              className="text-xs font-bold uppercase tracking-[3px] text-[#c9a063] mb-3 block"
              {...magicalInViewProps}
            >
              OUR CORE VALUES
            </motion.span>

            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172235] leading-tight mb-5 font-heading"
              {...magicalInViewProps}
            >
              The Principles That <span className="gold-gradient-text">Define Us</span>
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg text-gray-700 font-light leading-relaxed max-w-2xl mx-auto"
              {...magicalInViewProps}
            >
              Our guiding values shape every blueprint we draw, every brick we lay, and every relationship we nurture.
            </motion.p>
          </div>

          {/* 5 Card Grid Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreValues.map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative bg-[#f8f5ef] rounded-2xl p-7 border border-[#c9a063]/25 shadow-[0_10px_25px_rgba(23,34,53,0.05)] hover:shadow-[0_20px_40px_rgba(201,160,99,0.18)] hover:border-[#c9a063] hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between"
                  {...magicalInViewProps}
                >
                  <div>
                    {/* Icon Container */}
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#c9a063]/15 to-[#c9a063]/5 border border-[#c9a063]/30 flex items-center justify-center text-[#c9a063] mb-6 group-hover:bg-[#c9a063] group-hover:text-white transition-all duration-500 shadow-sm">
                      <IconComp className="w-7 h-7" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-[#172235] mb-3 group-hover:text-[#c9a063] transition-colors duration-300 font-heading">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-[15px] text-gray-700 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
