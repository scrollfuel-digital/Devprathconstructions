import React, { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import SocialConnectBar from "../../components/SocialConnectBar";
import {
  Mail,
  PhoneCall,
  Building2,
  MapPinned,
  CalendarClock,
  Sparkles,
  ChevronDown,
  Copy,
  Check,
  ArrowRight,
} from "lucide-react";
import {
  OFFICES,
  CONTACT_CHANNELS,
} from "../../constants/contactData";
import ContactMap from "./components/ContactMap";
import ContactForm from "./components/ContactForm";
import StatsBar from "../../components/common/StatsBar";

/**
 * Contact Page Component
 * Modular, production-grade contact hub with signature golden theme (#B9935A)
 * and interactive Leaflet satellite map with Devprath office markers.
 */
export default function Contact() {
  const prefersReducedMotion = useReducedMotion();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [activeOffice, setActiveOffice] = useState("operations");

  const mv = (delay = 0) => ({
    hidden: prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 30 },
    visible: prefersReducedMotion
      ? { opacity: 1 }
      : { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } },
  });

  const copyToClipboard = (text, setter) => {
    navigator.clipboard.writeText(text);
    setter(true);
    setTimeout(() => setter(false), 2200);
  };

  return (
    <div className="bg-[#F8F5EF] text-[#1B1C1C] font-sans antialiased selection:bg-[#B9935A] selection:text-white">
      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 1 — HERO HEADER BANNER
         ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-b from-[#F8F5EF] via-[#FCF9F4] to-[#F8F5EF] text-[#1B1C1C] overflow-hidden pt-32 sm:pt-40 pb-24 border-b border-[#B9935A]/20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-[#B9935A]/10 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[400px] rounded-full bg-[#B9935A]/8 blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
          <motion.div initial="hidden" animate="visible" className="text-center space-y-5">
            {/* Top Badge */}
            <motion.div variants={mv()} className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#B9935A]/30 bg-white/80 backdrop-blur-md shadow-sm">
              <Sparkles className="w-4 h-4 text-[#B9935A]" />
              <span className="text-[11px] font-bold uppercase tracking-[4px] text-[#785926]">Contact Devprath</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 variants={mv(0.1)} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight font-heading text-[#1B1C1C]">
              Let's Build Your <br className="hidden sm:block" />
              <span className="text-[#B9935A]">Dream Together</span>
            </motion.h1>

            <motion.p variants={mv(0.2)} className="text-[#4E453A] text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-light">
              Whether you are exploring luxury residential properties or planning a custom site visit,
              our expert team is here to assist you at every step.
            </motion.p>

            <motion.div variants={mv(0.3)} className="pt-4 flex justify-center">
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
                <ChevronDown className="w-6 h-6 text-[#B9935A]" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Stats Row */}
          <motion.div variants={mv(0.35)} initial="hidden" animate="visible">
            <StatsBar className="mt-14" />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 2 — QUICK CONTACT FLOATING CARDS
         ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative z-20 max-w-5xl mx-auto px-5 sm:px-8 -mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5"
        >
          {/* Email Card */}
          <div className="bg-white rounded-2xl p-5 shadow-xl border border-[#B9935A]/20 hover:border-[#B9935A] transition-all duration-300 group flex items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 min-w-0 flex-1">
              <div className="w-11 h-11 rounded-xl bg-[#B9935A]/15 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5 text-[#B9935A]" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#785926] block">Email</span>
                <a
                  href={`mailto:${CONTACT_CHANNELS.email}`}
                  className="text-[12px] sm:text-[13px] font-semibold text-[#1B1C1C] hover:text-[#B9935A] transition-colors truncate block"
                >
                  {CONTACT_CHANNELS.email}
                </a>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(CONTACT_CHANNELS.email, setCopiedEmail)}
              title="Copy email address"
              className="p-2 rounded-lg text-gray-400 hover:text-[#B9935A] hover:bg-[#B9935A]/10 transition-all cursor-pointer shrink-0"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-[#B9935A]" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Phone Card */}
          <div className="bg-white rounded-2xl p-5 shadow-xl border border-[#B9935A]/20 hover:border-[#B9935A] transition-all duration-300 group flex items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 min-w-0 flex-1">
              <div className="w-11 h-11 rounded-xl bg-[#B9935A]/15 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <PhoneCall className="w-5 h-5 text-[#B9935A]" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#785926] block">Phone</span>
                <a
                  href={`tel:${CONTACT_CHANNELS.phonePrimary}`}
                  className="text-[12px] sm:text-[13px] font-semibold text-[#1B1C1C] hover:text-[#B9935A] transition-colors block"
                >
                  {CONTACT_CHANNELS.phonePrimary}
                </a>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(`${CONTACT_CHANNELS.phonePrimary}, ${CONTACT_CHANNELS.phoneSecondary}`, setCopiedPhone)}
              title="Copy phone numbers"
              className="p-2 rounded-lg text-gray-400 hover:text-[#B9935A] hover:bg-[#B9935A]/10 transition-all cursor-pointer shrink-0"
            >
              {copiedPhone ? <Check className="w-4 h-4 text-[#B9935A]" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Working Hours Card */}
          <div className="bg-white rounded-2xl p-5 shadow-xl border border-[#B9935A]/20 flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-[#B9935A]/15 flex items-center justify-center shrink-0">
              <CalendarClock className="w-5 h-5 text-[#B9935A]" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#785926] block">Working Hours</span>
              <span className="text-[12px] sm:text-[13px] font-semibold text-[#1B1C1C] block">{CONTACT_CHANNELS.workingHours}</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 3 — FORM & OFFICE INFO (2-Column Grid)
         ═══════════════════════════════════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-stretch">
          {/* Left: Contact Form (3 cols) */}
          <motion.div
            variants={mv()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="lg:col-span-3 order-2 lg:order-1"
          >
            <ContactForm />
          </motion.div>

          {/* Right: Offices & Social Links (2 cols) */}
          <motion.div
            variants={mv(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="lg:col-span-2 order-1 lg:order-2 space-y-6 flex flex-col justify-between"
          >
            {/* Registered Office Card */}
            <div
              onClick={() => setActiveOffice("registered")}
              className={`bg-white rounded-2xl p-6 border transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl hover:border-[#B9935A] hover:bg-[#FCF9F4] active:scale-[0.98] ${
                activeOffice === "registered"
                  ? "border-[#B9935A] ring-2 ring-[#B9935A]/30 bg-[#FCF9F4]"
                  : "border-[#B9935A]/20"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#B9935A]/15 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-[#B9935A]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#785926] block">
                    Registered Office
                  </span>
                  <span className="text-xs text-[#666666]">Devprath Constructions LLP</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm font-medium text-[#1B1C1C] leading-relaxed">
                {OFFICES.registered.address}
              </p>
            </div>

            {/* Operations Office Card */}
            <div
              onClick={() => setActiveOffice("operations")}
              className={`bg-white rounded-2xl p-6 border transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl hover:border-[#B9935A] hover:bg-[#FCF9F4] active:scale-[0.98] ${
                activeOffice === "operations"
                  ? "border-[#B9935A] ring-2 ring-[#B9935A]/30 bg-[#FCF9F4]"
                  : "border-[#B9935A]/20"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#B9935A] flex items-center justify-center shadow-sm">
                  <MapPinned className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#785926] block">
                    Operations Office
                  </span>
                  <span className="text-xs text-[#666666]">Site &amp; Administrative Hub</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm font-medium text-[#1B1C1C] leading-relaxed">
                {OFFICES.operations.address}
              </p>
            </div>

            {/* Social Media Card */}
            <div className="bg-white rounded-2xl p-6 border border-[#B9935A]/25 shadow-md hover:shadow-xl hover:border-[#B9935A] transition-all duration-300 space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#785926] block">
                Connect With Us
              </span>
              <SocialConnectBar
                containerClassName="flex items-center justify-between w-full"
                iconSizeClass="w-6 h-6"
              />
            </div>

            {/* Instant WhatsApp CTA */}
            <a
              href={CONTACT_CHANNELS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between bg-[#B9935A] hover:bg-[#785926] text-white rounded-2xl px-6 py-5 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 cursor-pointer"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[2px] text-white/80 block">Instant Inquiry</span>
                <span className="text-sm font-bold block mt-0.5">Chat on WhatsApp</span>
              </div>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 4 — INTERACTIVE SATELLITE MAP (Full Width)
         ═══════════════════════════════════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 pb-24">
        <ContactMap activeOfficeId={activeOffice} onSelectOffice={setActiveOffice} />
      </section>
    </div>
  );
}
