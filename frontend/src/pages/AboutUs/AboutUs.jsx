import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import aboutus1 from "../../assets/AboutUsImg/img1.png";
import aboutus2 from "../../assets/AboutUsImg/secimg.png";
import leaderSunil from "../../assets/AboutUsImg/sunil.png";
import leaderHemal from "../../assets/AboutUsImg/hemal.png";
import WhyChooseSlider from "./WhyChooseSlider";
import { magicalBehindVariant } from "./magicalBehindVariant";

import {
  Eye,
  Target,
  Award,
  ShieldCheck,
  Lightbulb,
  HeartHandshake,
  Star,
  Sparkles,
  CheckCircle2,
  Building2,
  ArrowRight,
  MapPin,
  Quote,
  Check,
  Building,
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

  const stats = [
    { value: "10+", label: "Years of Excellence", sub: "Building Trust in Nagpur" },
    { value: "500+", label: "Happy Families", sub: "Delivered Dream Homes" },
    { value: "100%", label: "RERA Compliant", sub: "Legal & Legal Clarity" },
    { value: "1.2M+", label: "Sq. Ft. Delivered", sub: "Premium Construction" },
  ];

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

  const missionPoints = [
    "Superior BIS-certified construction quality",
    "Smart, Vastu-compliant architectural planning",
    "Curated luxury amenities & green open spaces",
    "Ethical business & 100% legal clarity",
    "Transparent pricing with zero hidden charges",
    "Timely project execution & handover",
    "Dedicated customer service team",
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
              className="text-base text-gray-600 font-light leading-relaxed max-w-2xl mx-auto"
              {...magicalInViewProps}
            >
              Devprath Constructions LLP develops vibrant residential communities in Nagpur that merge modern aesthetics, meticulous spatial planning, and superior structural engineering.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Image Stack Framing */}
            <motion.div className="lg:col-span-6 relative" {...magicalInViewProps}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#c9a063]/30 group">
                <img
                  src={aboutus1}
                  alt="Devprath Architectural Excellence"
                  className="w-full h-[480px] sm:h-[560px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#172235]/70 via-transparent to-transparent" />

                {/* Floating Bottom Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-[#f8f5ef]/95 backdrop-blur-md p-6 rounded-2xl border border-[#c9a063]/30 shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#c9a063]/15 flex items-center justify-center shrink-0">
                      <Building2 className="text-[#c9a063] w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#172235]">
                        Crafted for Generations
                      </h4>
                      <p className="text-xs text-gray-600">
                        Zero compromise on material strength, aesthetics, and structural safety.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Inset Secondary Image (Desktop overlap) */}
              <div className="hidden sm:block absolute -bottom-8 -right-8 w-48 h-48 rounded-2xl overflow-hidden border-4 border-[#f8f5ef] shadow-2xl z-20 hover:scale-105 transition-transform duration-300">
                <img
                  src={aboutus2}
                  alt="Modern Construction Details"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Right Story Content */}
            <div className="lg:col-span-6">
              <motion.span
                className="text-xs font-bold uppercase tracking-[3px] text-[#c9a063] mb-3 block"
                {...magicalInViewProps}
              >
                OUR PHILOSOPHY
              </motion.span>

              <motion.h2
                className="text-2xl sm:text-3xl font-extrabold text-[#172235] leading-tight mb-6 font-heading"
                {...magicalInViewProps}
              >
                Building Trust & <span className="gold-gradient-text">Unmatched Quality</span>
              </motion.h2>

              <motion.p
                className="text-base text-gray-600 leading-relaxed font-light mb-10"
                {...magicalInViewProps}
              >
                We view homeownership as one of life’s most significant milestones. By maintaining uncompromising construction standards and open client relationships, we ensure every homeowner experiences peace of mind, lasting value, and absolute pride of ownership.
              </motion.p>

              <motion.div className="grid grid-cols-2 gap-4 mb-8 sm:grid-cols-4" {...magicalInViewProps}>
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-[#c9a063]/25 bg-[#f8f5ef] px-4 py-4 shadow-[0_10px_25px_rgba(23,34,53,0.05)]"
                  >
                    <p className="text-xl sm:text-2xl font-extrabold text-[#172235] font-heading">{stat.value}</p>
                    <p className="text-[11px] font-semibold text-[#172235] mt-1">{stat.label}</p>
                    <p className="text-[10px] text-gray-500 mt-1">{stat.sub}</p>
                  </div>
                ))}
              </motion.div>

              {/* Side-by-Side Vision & Mission Cards */}
              <div className="grid md:grid-cols-2 gap-6">

                {/* Vision Card */}
                <motion.div
                  className="bg-[#f8f5ef] text-white rounded-2xl p-6 border border-[#c9a063]/40 shadow-xl relative overflow-hidden group"
                  {...magicalInViewProps}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#c9a063]/10 rounded-bl-full pointer-events-none" />

                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#c9a063]/20 flex items-center justify-center text-[#c9a063]">
                      <Eye className="w-5 h-5 text-[#c9a063]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#172235] font-heading">
                      Our Vision
                    </h3>
                  </div>

                  <p className="text-md text-gray-500 ">
                    To redefine residential living in Nagpur by delivering iconic homes that harmonize luxury, engineering excellence, and customer trust.
                  </p>
                </motion.div>

                {/* Mission Card */}
                <motion.div
                  className="bg-[#f8f5ef] rounded-2xl p-6 border border-[#c9a063]/30 shadow-md"
                  {...magicalInViewProps}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#c9a063]/10 flex items-center justify-center text-[#c9a063]">
                      <Target className="w-5 h-5 text-[#c9a063]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#172235] font-heading">
                      Our Mission
                    </h3>
                  </div>

                  <motion.ul className="space-y-2 text-xs text-gray-600 font-medium" {...magicalInViewProps}>
                    {missionPoints.slice(0, 4).map((pt, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#c9a063] shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </motion.ul>
                </motion.div>

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
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172235] mb-5 font-heading"
              {...magicalInViewProps}
            >
              Guided by <span className="gold-gradient-text">Visionary Leadership</span>
            </motion.h2>

            <motion.p className="text-base text-gray-600 font-light leading-relaxed" {...magicalInViewProps}>
              Meet the driving force behind Devprath Constructions LLP — dedicated directors bringing engineering discipline, innovation, and passion to Nagpur’s real estate landscape.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">

            {/* Founder 1: Hemal */}
            <motion.div
              className="group rounded-3xl bg-[#f8f5ef] border border-[#c9a063]/30 px-9 py-13 sm:px-12 sm:py-16 lg:px-14 min-h-[380px] sm:min-h-[420px] shadow-lg hover:shadow-2xl hover:border-[#c9a063] transition-all duration-500 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 justify-center"
              {...magicalInViewProps}
            >
              {/* Profile Image & Title/Name below image */}
              <div className="flex flex-col items-center text-center shrink-0">
                <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-60 lg:h-60 rounded-2xl overflow-hidden border-2 border-[#c9a063]/40 shadow-md mb-3.5">
                  <img
                    src={leaderHemal}
                    alt="Mr. Hemal H. Nadiyana"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#172235] font-heading max-w-[230px]">
                  Mr. Hemal H. Nadiyana
                </h3>
                <span className="text-xs font-bold uppercase tracking-widest text-[#c9a063] mt-1">
                  Director & Co-Founder
                </span>
              </div>

              {/* Bio & Quote Details */}
              <div className="flex flex-col justify-center sm:border-l sm:border-[#c9a063]/20 sm:pl-7">
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal mb-6">
                  Fostering architectural creativity, customer-first service, and modern living space design across all our premier residential developments.
                </p>

                <div className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-[#172235]">
                  <Quote className="w-4 h-4 sm:w-5 sm:h-5 text-[#c9a063] shrink-0 mt-0.5" />
                  <span className="italic text-gray-500">"We don't just build apartments; we craft spaces where families thrive."</span>
                </div>
              </div>
            </motion.div>

            {/* Founder 2: Sunil */}
            <motion.div
              className="group rounded-3xl bg-[#f8f5ef] border border-[#c9a063]/30 px-9 py-13 sm:px-12 sm:py-16 lg:px-14 min-h-[380px] sm:min-h-[420px] shadow-lg hover:shadow-2xl hover:border-[#c9a063] transition-all duration-500 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 justify-center"
              {...magicalInViewProps}
            >
              {/* Profile Image & Title/Name below image */}
              <div className="flex flex-col items-center text-center shrink-0">
                <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-60 lg:h-60 rounded-2xl overflow-hidden border-2 border-[#c9a063]/40 shadow-md mb-3.5">
                  <img
                    src={leaderSunil}
                    alt="Dr. Sunil N. Patil"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#172235] font-heading max-w-[230px]">
                  Dr. Sunil N. Patil
                </h3>
                <span className="text-xs font-bold uppercase tracking-widest text-[#c9a063] mt-1">
                  Director & Co-Founder
                </span>
              </div>

              {/* Bio & Quote Details */}
              <div className="flex flex-col justify-center sm:border-l sm:border-[#c9a063]/20 sm:pl-7">
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal mb-6">
                  Championing structural strength, material standards, and strategic growth. Committed to delivering homes that stand the test of time.
                </p>

                <div className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-[#172235]">
                  <Quote className="w-4 h-4 sm:w-5 sm:h-5 text-[#c9a063] shrink-0 mt-0.5" />
                  <span className="italic text-gray-500">"Excellence is never an accident; it is always the result of high intention."</span>
                </div>
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
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172235] mb-5 font-heading"
              {...magicalInViewProps}
            >
              The Principles That <span className="gold-gradient-text">Define Us</span>
            </motion.h2>

            <motion.p className="text-base text-gray-600 font-light leading-relaxed" {...magicalInViewProps}>
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
                    <h3 className="text-lg font-bold text-[#172235] mb-3 group-hover:text-[#c9a063] transition-colors duration-300 font-heading">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-[11px] font-semibold text-[#c9a063]">
                    <span>Pillar 0{index + 1}</span>
                    <div className="w-2 h-2 rounded-full bg-[#c9a063] opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          WHY CHOOSE DEVPRATH SECTION (SLIDER EMBED)
         ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#f8f5ef] relative overflow-hidden">
        <div className="container-custom">

          <div className="text-center max-w-3xl mx-auto mb-8">
            <motion.span
              className="text-xs font-bold uppercase tracking-[3px] text-[#c9a063] mb-2 block"
              {...magicalInViewProps}
            >
              WHY CHOOSE DEVPRATH CONSTRUCTIONS LLP
            </motion.span>

            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172235] mb-3 font-heading"
              {...magicalInViewProps}
            >
              Experience The <span className="gold-gradient-text">Devprath Advantage</span>
            </motion.h2>

            <motion.p className="text-base text-gray-600 font-light leading-relaxed" {...magicalInViewProps}>
              Selecting your developer is one of the most critical decisions when investing in property. Here is why homeowners place their trust in Devprath Constructions.
            </motion.p>
          </div>

          {/* Embedded Slider Component */}
          <WhyChooseSlider />

        </div>
      </section>


    </div>
  );
}
