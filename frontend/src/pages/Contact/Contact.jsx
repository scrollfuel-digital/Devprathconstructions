import React, { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { SocialConnectBar } from "../../components/SocialConnectBar";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  Check,
  Building2,
  Clock,
  User,
  MessageSquare,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  Sparkles,
  PhoneCall,
  MapPinned,
  CalendarClock,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════════════════════════
   ANIMATED COUNTER — counts from 0 to `end` when visible
   ═══════════════════════════════════════════════════════════════════════════════ */
function AnimatedCounter({ end, suffix = "", duration = 2000 }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let frame;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * end));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [started, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════════
   CONTACT PAGE — Total Redesign
   ═══════════════════════════════════════════════════════════════════════════════ */
export default function Contact() {
  const prefersReducedMotion = useReducedMotion();

  const mv = (delay = 0) => ({
    hidden: prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 40 },
    visible: prefersReducedMotion
      ? { opacity: 1 }
      : { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } },
  });

  /* ---- state ---- */
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [activeOffice, setActiveOffice] = useState("operations");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: "", email: "", phone: "", message: "" });
      }, 4500);
    }
  };

  const copyToClipboard = (text, setter) => {
    navigator.clipboard.writeText(text);
    setter(true);
    setTimeout(() => setter(false), 2200);
  };

  const operationsMapUrl =
    "https://maps.google.com/maps?q=Arpitshrushti%2C%20Behind%20Ganpati%20Temple%2C%20Near%20Tatya%20Tope%20Hall%2C%20Surendra%20Nagar%2C%20Nagpur%20-%20440015&t=&z=15&ie=UTF8&iwloc=&output=embed";
  const registeredMapUrl =
    "https://maps.google.com/maps?q=32%20A%20%2C%20Deep%20Apartment%20%2C%20Pande%20Layout%20%2C%20Khamla%20Road%20%2C%20Nagpur%20-%20440025&t=&z=15&ie=UTF8&iwloc=&output=embed";

  const offices = {
    operations: {
      label: "Operations Office",
      address: "Arpitshrushti, Behind Ganpati Temple, Near Tatya Tope Hall, Surendra Nagar, Nagpur - 440015",
      mapUrl: operationsMapUrl,
      mapsLink: "https://maps.google.com/?q=Arpitshrushti+Surendra+Nagar+Nagpur",
    },
    registered: {
      label: "Registered Office",
      address: "32 A, Deep Apartment, Pande Layout, Khamla Road, Nagpur - 440025",
      mapUrl: registeredMapUrl,
      mapsLink: "https://maps.google.com/?q=Deep+Apartment+Khamla+Road+Nagpur",
    },
  };

  return (
    <div className="bg-[#f8f5ef] text-[#172235] font-sans antialiased selection:bg-[#B9935A] selection:text-white">
      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 1 — DARK HERO BANNER (Full-Width)
         ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#f8f5ef] text-[#172235] overflow-hidden pt-32 sm:pt-40 pb-28 sm:pb-36">
        {/* Ambient background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-[#B9935A]/10 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[400px] rounded-full bg-[#B9935A]/8 blur-[100px]" />
          {/* Grid dots */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: "radial-gradient(#172235 1px, transparent 0)", backgroundSize: "32px 32px" }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
          <motion.div initial="hidden" animate="visible" className="text-center space-y-6">
            {/* Top badge */}
            <motion.div variants={mv()} className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#B9935A]/30 bg-white/80 backdrop-blur-sm shadow-sm">
              <Sparkles className="w-4 h-4 text-[#B9935A]" />
              <span className="text-[11px] font-bold uppercase tracking-[4px] text-[#B9935A]">Contact Devprath</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1 variants={mv(0.1)} className="text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold leading-[1.1] font-heading tracking-tight text-[#172235]">
              Let's Build Your <br className="hidden sm:block" />
              <span className="gold-gradient-text">Dream Together</span>
            </motion.h1>

            <motion.p variants={mv(0.2)} className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-light">
              Whether you're exploring residential properties or planning a construction project,
              our team is here to guide you at every step.
            </motion.p>

            {/* Scroll indicator */}
            <motion.div variants={mv(0.35)} className="pt-6 flex justify-center">
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
                <ChevronDown className="w-6 h-6 text-[#B9935A]/60" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* ---- Stats Row ---- */}
          <motion.div
            variants={mv(0.3)}
            initial="hidden"
            animate="visible"
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-[#B9935A]/20"
          >
            {[
              { value: 10, suffix: "+", label: "Years Experience" },
              { value: 50, suffix: "+", label: "Happy Families" },
              { value: 24, suffix: "hr", label: "Response Time" },
              { value: 2, suffix: "", label: "Nagpur Offices" },
            ].map((s, i) => (
              <div key={i} className="text-center px-4 py-2">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#B9935A] font-heading">
                  <AnimatedCounter end={s.value} suffix={s.suffix} />
                </div>
                <div className="text-[11px] uppercase tracking-[2px] text-gray-500 mt-1 font-semibold">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 2 — QUICK-CONTACT FLOATING STRIP (3 Channels)
         ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative z-20 max-w-5xl mx-auto px-5 sm:px-8 -mt-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {/* Email channel */}
          <div className="bg-white rounded-2xl p-5 shadow-xl border border-[#B9935A]/15 hover:border-[#B9935A]/50 transition-all duration-300 group flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#B9935A]/20 to-[#B9935A]/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5 text-[#B9935A]" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-[10px] font-bold uppercase tracking-[2px] text-gray-400 block">Email</span>
              <a
                href="mailto:devprathconstructions@gmail.com"
                className="text-[13px] font-semibold text-[#172235] hover:text-[#B9935A] transition-colors truncate block"
              >
                devprathconstructions@gmail.com
              </a>
            </div>
            <button
              onClick={() => copyToClipboard("devprathconstructions@gmail.com", setCopiedEmail)}
              title="Copy email"
              className="p-2 rounded-lg text-gray-300 hover:text-[#B9935A] hover:bg-[#B9935A]/10 transition-all cursor-pointer shrink-0 self-center"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Phone channel */}
          <div className="bg-white rounded-2xl p-5 shadow-xl border border-[#B9935A]/15 hover:border-[#B9935A]/50 transition-all duration-300 group flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#B9935A]/20 to-[#B9935A]/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <PhoneCall className="w-5 h-5 text-[#B9935A]" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-[10px] font-bold uppercase tracking-[2px] text-gray-400 block">Phone</span>
              <a href="tel:+919923203281" className="text-[13px] font-semibold text-[#172235] hover:text-[#B9935A] transition-colors block">
                +91 9923203281
              </a>
              <a href="tel:+919921141299" className="text-[11px] text-gray-500 hover:text-[#B9935A] transition-colors block">
                +91 9921141299
              </a>
            </div>
            <button
              onClick={() => copyToClipboard("+91 9923203281, +91 9921141299", setCopiedPhone)}
              title="Copy phone numbers"
              className="p-2 rounded-lg text-gray-300 hover:text-[#B9935A] hover:bg-[#B9935A]/10 transition-all cursor-pointer shrink-0 self-center"
            >
              {copiedPhone ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Working Hours */}
          <div className="bg-[#172235] rounded-2xl p-5 shadow-xl border border-[#B9935A]/25 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#B9935A]/15 flex items-center justify-center shrink-0">
              <CalendarClock className="w-5 h-5 text-[#B9935A]" />
            </div>
            <div className="flex-1">
              <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#B9935A] block">Working Hours</span>
              <span className="text-[13px] font-semibold text-white block">Mon – Sat: 10 AM – 7 PM</span>
            </div>
            <span className="text-[9px] uppercase font-extrabold tracking-wider px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/25 shrink-0">
              Open
            </span>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 3 — FORM + OFFICE DETAILS (Asymmetric 2-col)
         ═══════════════════════════════════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* ─── LEFT: CONTACT FORM (3 cols) ─── */}
          <motion.div
            variants={mv()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="lg:col-span-3 order-2 lg:order-1"
          >
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-[#B9935A]/15 relative overflow-hidden">
              {/* Decorative corner accent */}
              <div className="absolute -top-1 -right-1 w-28 h-28 bg-gradient-to-bl from-[#B9935A]/10 to-transparent rounded-bl-[3rem] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-40 h-1 bg-gradient-to-r from-[#B9935A] to-transparent" />

              <div className="mb-8 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-[3px] text-[#B9935A]">
                  Send a Message
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172235] font-heading leading-tight">
                  Start a Conversation
                </h2>
                <p className="text-sm text-gray-500 font-light">
                  Fill the form below and our team will reach out within 24 hours.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {formSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    className="bg-[#f8f5ef] border border-emerald-200 rounded-2xl p-10 text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-300 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-[#172235] font-heading">Message Sent!</h3>
                    <p className="text-sm text-gray-500">Thank you for reaching out. We'll get back to you shortly.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleFormSubmit}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-[2px] text-[#172235] flex items-center gap-1.5">
                          <User className="w-3 h-3 text-[#B9935A]" /> Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          className="w-full bg-[#f8f5ef]/70 border border-gray-200 focus:border-[#B9935A] focus:ring-2 focus:ring-[#B9935A]/15 rounded-xl px-4 py-3.5 text-sm placeholder:text-gray-400 focus:outline-none transition-all"
                        />
                      </div>
                      {/* Email */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-[2px] text-[#172235] flex items-center gap-1.5">
                          <Mail className="w-3 h-3 text-[#B9935A]" /> Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="you@example.com"
                          className="w-full bg-[#f8f5ef]/70 border border-gray-200 focus:border-[#B9935A] focus:ring-2 focus:ring-[#B9935A]/15 rounded-xl px-4 py-3.5 text-sm placeholder:text-gray-400 focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-[2px] text-[#172235] flex items-center gap-1.5">
                        <Phone className="w-3 h-3 text-[#B9935A]" /> Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className="w-full bg-[#f8f5ef]/70 border border-gray-200 focus:border-[#B9935A] focus:ring-2 focus:ring-[#B9935A]/15 rounded-xl px-4 py-3.5 text-sm placeholder:text-gray-400 focus:outline-none transition-all"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-[2px] text-[#172235] flex items-center gap-1.5">
                        <MessageSquare className="w-3 h-3 text-[#B9935A]" /> Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project or inquiry..."
                        className="w-full bg-[#f8f5ef]/70 border border-gray-200 focus:border-[#B9935A] focus:ring-2 focus:ring-[#B9935A]/15 rounded-xl px-4 py-3.5 text-sm placeholder:text-gray-400 focus:outline-none transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#172235] hover:bg-[#1c293f] text-white py-4 rounded-xl font-bold text-[11px] uppercase tracking-[3px] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.99] flex items-center justify-center gap-2.5 cursor-pointer group"
                    >
                      <span>Send Message</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* ─── RIGHT: OFFICES + SOCIAL (2 cols) ─── */}
          <motion.div
            variants={mv(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="lg:col-span-2 order-1 lg:order-2 space-y-6"
          >
            {/* Registered Office */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#B9935A]/40 shadow-md hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#172235] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Building2 className="w-5 h-5 text-[#B9935A]" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#B9935A]">Registered Office</span>
              </div>
              <p className="text-sm font-medium text-[#172235] leading-relaxed">
                32 A, Deep Apartment,<br />
                Pande Layout, Khamla Road,<br />
                Nagpur - 440025
              </p>
            </div>

            {/* Operations Office */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#B9935A]/40 shadow-md hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#B9935A] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <MapPinned className="w-5 h-5 text-white" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#B9935A]">Operations Office</span>
              </div>
              <p className="text-sm font-medium text-[#172235] leading-relaxed">
                Arpitshrushti, Behind Ganpati Temple,<br />
                Near Tatya Tope Hall, Surendra Nagar,<br />
                Nagpur - 440015
              </p>
            </div>

            {/* Social Channels */}
            <div className="bg-[#172235] rounded-2xl p-6 border border-[#B9935A]/25 space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#B9935A] block">
                Connect With Us
              </span>
              <SocialConnectBar
                containerClassName="flex items-center justify-between w-full"
                iconSizeClass="w-6 h-6"
              />
            </div>

            {/* Quick CTA */}
            <a
              href="https://wa.me/919923203281?text=Hi%20Devprath%20Team,%20I%20am%20interested%20in%20learning%20more%20about%20your%20projects."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between bg-gradient-to-r from-[#B9935A] to-[#8b6732] text-white rounded-2xl px-6 py-5 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[2px] text-white/70 block">Instant Reply</span>
                <span className="text-sm font-bold block mt-0.5">Chat on WhatsApp</span>
              </div>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 4 — FULL-WIDTH INTERACTIVE MAP
         ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white border-t border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 lg:py-20 space-y-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6"
          >
            <motion.div variants={mv()} className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-[3px] text-[#B9935A]">Find Us</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172235] font-heading">
                Visit Our Offices in <span className="gold-gradient-text">Nagpur</span>
              </h2>
            </motion.div>

            {/* Office toggle */}
            <motion.div variants={mv(0.1)} className="inline-flex p-1 rounded-xl bg-[#f8f5ef] border border-gray-200">
              {(["operations", "registered"]).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveOffice(key)}
                  className={`px-5 py-2.5 rounded-lg text-[11px] font-bold uppercase tracking-[1.5px] transition-all cursor-pointer ${
                    activeOffice === key
                      ? "bg-[#172235] text-white shadow-md"
                      : "text-gray-500 hover:text-[#172235]"
                  }`}
                >
                  {offices[key].label}
                </button>
              ))}
            </motion.div>
          </motion.div>

          {/* Address bar */}
          <div className="flex items-center justify-between bg-[#f8f5ef] p-4 rounded-xl border border-gray-200 text-sm">
            <div className="flex items-center gap-3 min-w-0">
              <MapPin className="w-4 h-4 text-[#B9935A] shrink-0" />
              <span className="font-semibold text-[#172235] text-xs sm:text-sm truncate">
                {offices[activeOffice].address}
              </span>
            </div>
            <a
              href={offices[activeOffice].mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-[#B9935A] hover:text-[#172235] text-xs font-bold transition-colors shrink-0 ml-4"
            >
              <span>Open in Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Map iframe */}
          <div className="w-full h-80 sm:h-[420px] rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-gray-100">
            <iframe
              title="Office Location Map"
              src={offices[activeOffice].mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 5 — DARK CTA FOOTER BANNER
         ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#172235] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#B9935A]/6 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 py-20 lg:py-24 text-center space-y-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-5"
          >
            <motion.span variants={mv()} className="text-[10px] font-bold uppercase tracking-[4px] text-[#B9935A] block">
              Prefer Face-To-Face?
            </motion.span>
            <motion.h2 variants={mv(0.1)} className="text-3xl sm:text-4xl font-extrabold text-white font-heading leading-tight">
              Let's Meet Over <span className="gold-gradient-text">Coffee</span>
            </motion.h2>
            <motion.p variants={mv(0.2)} className="text-gray-400 text-sm sm:text-base max-w-lg mx-auto font-light leading-relaxed">
              Visit our Operations Office in Surendra Nagar, Nagpur for a detailed walkthrough of project blueprints, site layouts, and custom floor plan options.
            </motion.p>
          </motion.div>

          <motion.div
            variants={mv(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="tel:+919923203281"
              className="w-full sm:w-auto bg-[#B9935A] hover:bg-[#a6844e] text-white px-8 py-4 rounded-xl text-[11px] font-bold uppercase tracking-[2.5px] transition-all duration-300 shadow-lg hover:shadow-[#B9935A]/20 hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98] inline-flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call to Schedule</span>
            </a>
            <a
              href="https://wa.me/919923203281?text=Hi%20Devprath%20Team,%20I%20would%20like%20to%20schedule%20an%20in-person%20office%20visit."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/15 text-white border border-white/20 px-8 py-4 rounded-xl text-[11px] font-bold uppercase tracking-[2.5px] transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] inline-flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
