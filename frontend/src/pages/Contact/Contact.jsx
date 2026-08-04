import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SocialConnectBar } from "../../components/SocialConnectBar";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  Check,
  Sparkles,
  Building2,
  Clock,
  User,
  MessageSquare,
  ArrowUpRight,
  ShieldCheck,
  Compass,
} from "lucide-react";

export default function Contact() {
  const prefersReducedMotion = useReducedMotion();

  const magicalBehindVariant = {
    hidden: prefersReducedMotion
      ? { opacity: 0 }
      : { opacity: 0, scale: 0.96, y: 25, filter: "blur(4px)" },
    visible: prefersReducedMotion
      ? { opacity: 1 }
      : { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" },
  };

  const magicalTransition = {
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1],
  };

  const magicalViewport = { once: true, amount: 0.1 };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [activeTab, setActiveTab] = useState("operations"); // "operations" | "registered"

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: "", email: "", message: "" });
      }, 4000);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("devprathconstructions@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+91 9923203281, +91 9921141299");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const operationsMapUrl =
    "https://maps.google.com/maps?q=Arpitshrushti%2C%20Behind%20Ganpati%20Temple%2C%20Near%20Tatya%20Tope%20Hall%2C%20Surendra%20Nagar%2C%20Nagpur%20-%20440015&t=&z=15&ie=UTF8&iwloc=&output=embed";

  const registeredMapUrl =
    "https://maps.google.com/maps?q=32%20A%20%2C%20Deep%20Apartment%20%2C%20Pande%20Layout%20%2C%20Khamla%20Road%20%2C%20Nagpur%20-%20440025&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <div className="bg-[#f8f5ef] text-[#172235] font-sans antialiased min-h-screen pt-28 sm:pt-32 lg:pt-36 pb-24 px-4 sm:px-6 lg:px-8 selection:bg-[#B9935A] selection:text-white relative overflow-hidden">
      {/* Decorative Luxury Background Elements */}
      <div className="absolute top-12 left-1/4 w-[450px] h-[450px] bg-gradient-to-tr from-[#B9935A]/15 to-amber-200/20 rounded-full blur-[100px] pointer-events-none -z-0" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-[#172235]/5 via-[#B9935A]/10 to-transparent rounded-full blur-[120px] pointer-events-none -z-0" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#B9935A]/8 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Background Subtle Architectural Pattern Lines */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-0"
        style={{
          backgroundImage: `radial-[#172235] 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 relative z-10">
        {/* =========================================================================
            HERO TITLE & HEADER SECTION
           ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#B9935A]/30 backdrop-blur-md shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#B9935A] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-[3px] text-[#B9935A]">
              Get In Touch
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#172235] leading-tight font-heading">
            Contact <span className="gold-gradient-text">Us</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-light max-w-2xl mx-auto">
            We're here to help! Whether you have questions, feedback, or need
            support, our team is ready to assist you.
          </p>

          {/* Quick Highlight Pills */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-3 text-xs font-medium text-gray-600">
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/70 border border-[#B9935A]/20">
              <Clock className="w-3.5 h-3.5 text-[#B9935A]" />
              <span>Prompt Response Guaranteed</span>
            </div>
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/70 border border-[#B9935A]/20">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B9935A]" />
              <span>Dedicated Support Team</span>
            </div>
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/70 border border-[#B9935A]/20">
              <Compass className="w-3.5 h-3.5 text-[#B9935A]" />
              <span>Nagpur, Maharashtra</span>
            </div>
          </div>
        </motion.div>

        {/* =========================================================================
            MAIN SECTION: CONTACT DETAILS & FORM GRID
           ========================================================================= */}
        <motion.section
          variants={magicalBehindVariant}
          initial="hidden"
          whileInView="visible"
          viewport={magicalViewport}
          transition={magicalTransition}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          {/* -----------------------------------------------------------------------
              LEFT COLUMN: CONTACT INFO CARDS (5 COLS)
             ----------------------------------------------------------------------- */}
          <div className="lg:col-span-5 space-y-5">
            {/* Email Card */}
            <div className="bg-white/85 backdrop-blur-md rounded-2xl p-6 border border-[#B9935A]/20 hover:border-[#B9935A] shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#B9935A]/20 to-[#B9935A]/5 flex items-center justify-center border border-[#B9935A]/30 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5 text-[#B9935A]" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider block">
                      Email Us
                    </span>
                    <a
                      href="mailto:devprathconstructions@gmail.com"
                      className="font-bold text-[#172235] hover:text-[#B9935A] transition-colors duration-300 text-sm sm:text-base break-all"
                    >
                      devprathconstructions@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  title="Copy Email"
                  className="p-2 rounded-lg text-gray-400 hover:text-[#B9935A] hover:bg-[#B9935A]/10 transition-all cursor-pointer flex-shrink-0"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white/85 backdrop-blur-md rounded-2xl p-6 border border-[#B9935A]/20 hover:border-[#B9935A] shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#B9935A]/20 to-[#B9935A]/5 flex items-center justify-center border border-[#B9935A]/30 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5 text-[#B9935A]" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider block">
                      Call Us Directly
                    </span>
                    <a
                      href="tel:+919923203281"
                      className="font-bold text-[#172235] hover:text-[#B9935A] transition-colors duration-300 text-sm sm:text-base block"
                    >
                      +91 9923203281, +91 9921141299
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  title="Copy Phone Numbers"
                  className="p-2 rounded-lg text-gray-400 hover:text-[#B9935A] hover:bg-[#B9935A]/10 transition-all cursor-pointer flex-shrink-0"
                >
                  {copiedPhone ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Registered Office Card */}
            <div className="bg-white/85 backdrop-blur-md rounded-2xl p-6 border border-[#B9935A]/20 hover:border-[#B9935A] shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-start gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#172235]/10 to-[#172235]/5 flex items-center justify-center border border-[#172235]/20 group-hover:scale-105 transition-transform flex-shrink-0 mt-0.5">
                  <Building2 className="w-5 h-5 text-[#172235]" />
                </div>
                <div>
                  <span className="text-xs text-[#B9935A] font-bold uppercase tracking-wider block mb-1">
                    Registered Office Address
                  </span>
                  <p className="font-semibold text-[#172235] leading-relaxed text-sm">
                    32 A , Deep Apartment ,<br />
                    Pande Layout , Khamla Road ,<br />
                    Nagpur - 440025
                  </p>
                </div>
              </div>
            </div>

            {/* Operations Office Card */}
            <div className="bg-white/85 backdrop-blur-md rounded-2xl p-6 border border-[#B9935A]/20 hover:border-[#B9935A] shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-start gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#B9935A]/25 to-[#B9935A]/10 flex items-center justify-center border border-[#B9935A]/40 group-hover:scale-105 transition-transform flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-[#B9935A]" />
                </div>
                <div>
                  <span className="text-xs text-[#B9935A] font-bold uppercase tracking-wider block mb-1">
                    Operations Office Address
                  </span>
                  <p className="font-semibold text-[#172235] leading-relaxed text-sm">
                    Arpitshrushti , Behind Ganpati Temple ,<br />
                    Near Tatya Tope Hall , Surendra Nagar ,<br />
                    Nagpur - 440015
                  </p>
                </div>
              </div>
            </div>

            {/* Social Channels Bar matching Home Page layout exactly (no card box) */}
            <div className="mt-6 pt-4 border-t border-[#B9935A]/20">
              <SocialConnectBar containerClassName="flex items-center justify-between w-full px-6 sm:px-10" iconSizeClass="w-7 h-7" />
            </div>
          </div>

          {/* -----------------------------------------------------------------------
              RIGHT COLUMN: CONTACT FORM (7 COLS)
             ----------------------------------------------------------------------- */}
          <div className="lg:col-span-7">
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl border border-[#B9935A]/30 relative overflow-hidden">
              {/* Corner Ambient Glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#B9935A]/10 rounded-bl-full pointer-events-none" />

              <div className="mb-8 space-y-2">
                <span className="text-xs font-bold uppercase tracking-[2px] text-[#B9935A]">
                  Send Us A Message
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172235] font-heading">
                  How Can We Help You?
                </h2>
                <p className="text-xs sm:text-sm text-gray-500">
                  Fill out the form below and our experts will reach out to you
                  shortly.
                </p>
              </div>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#f8f5ef] border border-[#B9935A]/40 rounded-2xl p-8 text-center space-y-4 shadow-inner my-6"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-9 h-9 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#172235] font-heading">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 max-w-sm mx-auto">
                    Thank you for reaching out. Our team will get back to you
                    shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  {/* Name & Email Inputs Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Your Name */}
                    <div className="space-y-2">
                      <label className="block text-xs font-semibold text-[#172235] uppercase tracking-wider flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-[#B9935A]" />
                        Your Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your name"
                          className="w-full bg-[#f8f5ef]/60 border border-[#B9935A]/25 focus:border-[#B9935A] focus:bg-white focus:ring-2 focus:ring-[#B9935A]/20 rounded-xl px-4 py-3.5 text-sm text-[#172235] placeholder:text-gray-400 focus:outline-none transition-all duration-300 shadow-sm"
                        />
                      </div>
                    </div>

                    {/* Email Address */}
                    <div className="space-y-2">
                      <label className="block text-xs font-semibold text-[#172235] uppercase tracking-wider flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-[#B9935A]" />
                        Email Address
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Your email address"
                          className="w-full bg-[#f8f5ef]/60 border border-[#B9935A]/25 focus:border-[#B9935A] focus:bg-white focus:ring-2 focus:ring-[#B9935A]/20 rounded-xl px-4 py-3.5 text-sm text-[#172235] placeholder:text-gray-400 focus:outline-none transition-all duration-300 shadow-sm"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-[#172235] uppercase tracking-wider flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-[#B9935A]" />
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Write something..."
                      className="w-full bg-[#f8f5ef]/60 border border-[#B9935A]/25 focus:border-[#B9935A] focus:bg-white focus:ring-2 focus:ring-[#B9935A]/20 rounded-xl px-4 py-3.5 text-sm text-[#172235] placeholder:text-gray-400 focus:outline-none transition-all duration-300 resize-none shadow-sm"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#B9935A] to-[#8b6732] hover:from-[#a6844e] hover:to-[#785926] text-white py-4 rounded-xl font-bold text-xs uppercase tracking-[2.5px] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#B9935A]/20 hover:-translate-y-0.5 active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.section>

        {/* =========================================================================
            SECTION 2: INTERACTIVE GOOGLE MAPS OFFICE SELECTOR
           ========================================================================= */}
        <motion.section
          variants={magicalBehindVariant}
          initial="hidden"
          whileInView="visible"
          viewport={magicalViewport}
          transition={magicalTransition}
          className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl border border-[#B9935A]/20 p-6 sm:p-8 lg:p-10 space-y-6"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-gray-200/80 pb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-[2px] text-[#B9935A] block mb-1">
                Locate Us On Map
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#172235] font-heading">
                Our Office Locations in Nagpur
              </h2>
            </div>

            {/* Tab Selector */}
            <div className="inline-flex p-1 rounded-xl bg-[#f8f5ef] border border-[#B9935A]/20">
              <button
                onClick={() => setActiveTab("operations")}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === "operations"
                    ? "bg-[#172235] text-white shadow-md"
                    : "text-gray-600 hover:text-[#172235]"
                }`}
              >
                Operations Office
              </button>
              <button
                onClick={() => setActiveTab("registered")}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === "registered"
                    ? "bg-[#172235] text-white shadow-md"
                    : "text-gray-600 hover:text-[#172235]"
                }`}
              >
                Registered Office
              </button>
            </div>
          </div>

          {/* Location Info Header & Map Embed */}
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-[#f8f5ef] p-4 rounded-xl border border-[#B9935A]/15 text-xs text-gray-700">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#B9935A] flex-shrink-0" />
                <span className="font-medium">
                  {activeTab === "operations"
                    ? "Arpitshrushti, Behind Ganpati Temple, Near Tatya Tope Hall, Surendra Nagar, Nagpur - 440015"
                    : "32 A, Deep Apartment, Pande Layout, Khamla Road, Nagpur - 440025"}
                </span>
              </div>
              <a
                href={
                  activeTab === "operations"
                    ? "https://maps.google.com/?q=Arpitshrushti+Surendra+Nagar+Nagpur"
                    : "https://maps.google.com/?q=Deep+Apartment+Khamla+Road+Nagpur"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1 text-[#B9935A] hover:text-[#172235] font-bold transition-colors ml-4 flex-shrink-0"
              >
                <span>Open in Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Embedded Google Map Frame */}
            <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden shadow-inner border border-gray-200 relative bg-gray-100">
              <iframe
                title="Office Location Map"
                src={activeTab === "operations" ? operationsMapUrl : registeredMapUrl}
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
        </motion.section>
      </div>
    </div>
  );
}
