import React, { useState } from "react";
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
  ArrowRight,
} from "lucide-react";
import {
  OFFICES,
  CONTACT_CHANNELS,
} from "../../constants/contactData";
import ContactMap from "./components/ContactMap";
import ContactForm from "./components/ContactForm";
import StatsBar from "../../components/common/StatsBar";

export default function Contact() {
  const prefersReducedMotion = useReducedMotion();
  const [activeOffice, setActiveOffice] = useState("operations");

  const mv = (delay = 0) => ({
    hidden: prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 30 },
    visible: prefersReducedMotion
      ? { opacity: 1 }
      : { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } },
  });

  const quickContactCards = [
    {
      id: "email",
      label: "Email",
      value: CONTACT_CHANNELS.email,
      href: `mailto:${CONTACT_CHANNELS.email}`,
      Icon: Mail,
    },
    {
      id: "phone",
      label: "Phone",
      value: CONTACT_CHANNELS.phonePrimary,
      href: `tel:${CONTACT_CHANNELS.phonePrimary}`,
      Icon: PhoneCall,
    },
    {
      id: "hours",
      label: "Working Hours",
      value: CONTACT_CHANNELS.workingHours,
      href: null,
      Icon: CalendarClock,
    },
  ];

  const officeCards = [
    {
      id: "registered",
      label: "Registered Office",
      subtitle: "Devprath Constructions LLP",
      address: OFFICES.registered.address,
      Icon: Building2,
      iconBg: "bg-[#B9935A]/15 text-[#B9935A]",
    },
    {
      id: "operations",
      label: "Operations Office",
      subtitle: "Site & Administrative Hub",
      address: OFFICES.operations.address,
      Icon: MapPinned,
      iconBg: "bg-[#B9935A] text-white shadow-sm",
    },
  ];

  return (
    <div className="bg-[#F8F5EF] text-[#1B1C1C] font-sans antialiased selection:bg-[#B9935A] selection:text-white">
      {/* SECTION 1 — HERO HEADER BANNER */}
      <section className="relative bg-gradient-to-b from-[#F8F5EF] via-[#FCF9F4] to-[#F8F5EF] text-[#1B1C1C] overflow-hidden pt-32 sm:pt-40 pb-24 border-b border-[#B9935A]/20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-[#B9935A]/10 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[400px] rounded-full bg-[#B9935A]/8 blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
          <motion.div initial="hidden" animate="visible" className="text-center space-y-5">
            <motion.div variants={mv()} className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#B9935A]/30 bg-white/80 backdrop-blur-md shadow-sm">
              <Sparkles className="w-4 h-4 text-[#B9935A]" />
              <span className="text-[11px] font-bold uppercase tracking-[4px] text-[#785926]">Contact Devprath</span>
            </motion.div>

            <motion.h1 variants={mv(0.1)} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight font-heading text-[#1B1C1C]">
              We Build <span className="text-[#B9935A]">For You</span>
            </motion.h1>

            <motion.p variants={mv(0.2)} className="text-[#4E453A] text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-light">
              Whether you are exploring residential properties or planning a site visit,
              our team is here to assist you at every step.
            </motion.p>

            <motion.div variants={mv(0.3)} className="pt-4 flex justify-center">
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
                <ChevronDown className="w-6 h-6 text-[#B9935A]" />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div variants={mv(0.35)} initial="hidden" animate="visible">
            <StatsBar className="mt-14" />
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — QUICK CONTACT FLOATING CARDS */}
      <section className="relative z-20 max-w-6xl mx-auto px-5 sm:px-8 -mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5"
        >
          {quickContactCards.map(({ id, label, value, href, Icon }) => (
            <div
              key={id}
              className="bg-white rounded-2xl px-5 sm:px-6 py-4 sm:py-5 shadow-xl border border-[#B9935A]/20 hover:border-[#B9935A] transition-all duration-300 group flex items-center gap-3.5 sm:gap-4 min-w-0"
            >
              <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-xl bg-[#B9935A]/15 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#B9935A]" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[2px] text-[#785926] block leading-none mb-1">{label}</span>
                {href ? (
                  <a
                    href={href}
                    className="text-[11px] sm:text-xs md:text-[13px] font-semibold text-[#1B1C1C] hover:text-[#B9935A] transition-colors whitespace-nowrap block leading-tight mt-0.5"
                  >
                    {value}
                  </a>
                ) : (
                  <span className="text-[11px] sm:text-xs md:text-[13px] font-semibold text-[#1B1C1C] whitespace-nowrap block leading-tight mt-0.5">{value}</span>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* SECTION 3 — FORM & OFFICE INFO */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-stretch">
          <motion.div
            variants={mv()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="lg:col-span-3 order-2 lg:order-1"
          >
            <ContactForm />
          </motion.div>

          <motion.div
            variants={mv(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="lg:col-span-2 order-1 lg:order-2 space-y-6 flex flex-col justify-between"
          >
            {officeCards.map(({ id, label, subtitle, address, Icon, iconBg }) => (
              <div
                key={id}
                onClick={() => setActiveOffice(id)}
                className={`bg-white rounded-2xl p-6 border transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl hover:border-[#B9935A] hover:bg-[#FCF9F4] active:scale-[0.98] ${
                  activeOffice === id
                    ? "border-[#B9935A] ring-2 ring-[#B9935A]/30 bg-[#FCF9F4]"
                    : "border-[#B9935A]/20"
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${iconBg}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#785926] block">
                      {label}
                    </span>
                    <span className="text-xs text-[#666666]">{subtitle}</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm font-medium text-[#1B1C1C] leading-relaxed">
                  {address}
                </p>
              </div>
            ))}

            <div className="bg-white rounded-2xl p-6 border border-[#B9935A]/25 shadow-md hover:shadow-xl hover:border-[#B9935A] transition-all duration-300 space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#785926] block">
                Connect With Us
              </span>
              <SocialConnectBar
                containerClassName="flex items-center justify-between w-full"
                iconSizeClass="w-6 h-6"
              />
            </div>

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

      {/* SECTION 4 — INTERACTIVE SATELLITE MAP */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 pb-24">
        <ContactMap activeOfficeId={activeOffice} onSelectOffice={setActiveOffice} />
      </section>
    </div>
  );
}
