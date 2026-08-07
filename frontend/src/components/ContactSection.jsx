import React, { useState, memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SocialConnectBar } from "./SocialConnectBar";

// Depth-Blur Motion Variant for Smooth Emergence
const magicalBehindVariant = (shouldReduceMotion) => ({
  hidden: {
    opacity: 0,
    scale: shouldReduceMotion ? 1 : 0.88,
    y: shouldReduceMotion ? 0 : 35,
    filter: shouldReduceMotion ? "none" : "blur(6px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.35,
      delay: 0,
      ease: [0.25, 1, 0.5, 1],
    },
  },
});

const formStaggerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const formFieldVariant = (shouldReduceMotion) => ({
  hidden: {
    opacity: 0,
    y: shouldReduceMotion ? 0 : 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
});

const HQ_INFO_ITEMS = [
  { id: "phone", icon: "call", title: "Phone Call", content: "+91 9923203281, +91 9921141299" },
  { id: "email", icon: "mail", title: "Email Us", content: "devprathconstructions@gmail.com" },
  { id: "hours", icon: "schedule", title: "Working Time", content: "Mon-Fri 10.30:AM-07.00:PM" },
  { id: "address", icon: "location_on", title: "SITE ADD", content: "Plot No. 365/2, Opp. MIDAS Hospital, Parsodi, Wardha Road, Nagpur" },
];

export const ContactSection = memo(() => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Mangalmurti Residency - 3 BHK",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const shouldReduceMotion = useReducedMotion();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          interest: "Mangalmurti Residency - 3 BHK",
        });
      }, 4000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-[#F8F5EF] relative overflow-hidden border-t border-[#B9935A]/20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column - Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15, margin: "0px 0px -30px 0px" }}
            variants={magicalBehindVariant(shouldReduceMotion)}
            style={{ willChange: "transform, opacity, filter" }}
            className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#B9935A]/25 shadow-xl relative"
          >
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-[3px] text-[#B9935A] mb-2 block">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172235] tracking-tight mb-2 font-heading">
                Experience <span className="gold-gradient-text">Devprath</span>
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 font-light">
                Fill out your contact details and our senior property advisor will reach out to you within 2 business hours.
              </p>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-[#B9935A]/10 border border-[#B9935A] text-center"
              >
                <span className="material-symbols-outlined text-[#B9935A] text-5xl mb-3 block">
                  check_circle
                </span>
                <h4 className="text-xl font-bold text-[#172235]">
                  Enquiry Received!
                </h4>
                <p className="text-xs text-gray-600 mt-2 font-light">
                  Thank you for your interest. Our representative will contact you shortly with full project details.
                </p>
              </motion.div>
            ) : (
              <motion.form
                variants={formStaggerVariant}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Name */}
                <motion.div variants={formFieldVariant(shouldReduceMotion)}>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#172235] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#B9935A] focus:ring-4 focus:ring-[#B9935A]/15 focus:outline-none text-sm transition-all duration-300 bg-white text-gray-900 shadow-sm"
                  />
                </motion.div>

                {/* Email & Phone */}
                <motion.div
                  variants={formFieldVariant(shouldReduceMotion)}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                >
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#172235] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#B9935A] focus:ring-4 focus:ring-[#B9935A]/15 focus:outline-none text-sm transition-all duration-300 bg-white text-gray-900 shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#172235] mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 99232 03281"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#B9935A] focus:ring-4 focus:ring-[#B9935A]/15 focus:outline-none text-sm transition-all duration-300 bg-white text-gray-900 shadow-sm"
                    />
                  </div>
                </motion.div>

                {/* Project Preference */}
                <motion.div variants={formFieldVariant(shouldReduceMotion)}>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#172235] mb-2">
                    Project Preference
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#B9935A] focus:ring-4 focus:ring-[#B9935A]/15 focus:outline-none text-sm transition-all duration-300 bg-white text-gray-900 shadow-sm"
                  >
                    <option value="Mangalmurti Residency - 3 BHK">
                      Mangalmurti Residency — 3 BHK (Royal)
                    </option>
                    <option value="Mangalmurti Residency - 4 BHK">
                      Mangalmurti Residency — 4 BHK (Imperial)
                    </option>
                    <option value="Penthouse Collection">
                      The Penthouse Collection
                    </option>
                    <option value="Commercial Leasing">
                      Commercial &amp; Corporate Spaces
                    </option>
                  </select>
                </motion.div>

                {/* Submit Button */}
                <motion.div variants={formFieldVariant(shouldReduceMotion)}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-full bg-[#B9935A] py-4 text-xs font-semibold uppercase tracking-[3px] text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-[#B9935A] hover:to-[#8B6732] hover:shadow-xl active:scale-95 flex items-center justify-center gap-2 cursor-pointer shadow-md mt-4 disabled:opacity-80"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Enquiry</span>
                        <span className="material-symbols-outlined text-base">
                          arrow_forward
                        </span>
                      </>
                    )}
                  </button>
                </motion.div>
              </motion.form>
            )}
          </motion.div>

          {/* Right Column - HQ Information & Shared Social Connect Bar */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2, margin: "0px 0px -30px 0px" }}
                variants={magicalBehindVariant(shouldReduceMotion)}
                style={{ willChange: "transform, opacity, filter" }}
              >
                <span className="text-xs font-bold uppercase tracking-[3px] text-[#B9935A] mb-2 block">
                  Visit Our Office
                </span>
                <h3 className="text-2xl font-bold text-[#172235] mb-6 font-heading">
                  Corporate Headquarters
                </h3>
              </motion.div>

              {/* HQ Info Items */}
              <div className="space-y-4 text-sm text-gray-700">
                {HQ_INFO_ITEMS.map((item) => (
                  <motion.div
                    key={item.id}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.25, margin: "0px 0px -40px 0px" }}
                    variants={magicalBehindVariant(shouldReduceMotion)}
                    style={{ willChange: "transform, opacity, filter" }}
                    className="flex items-start gap-4 p-3.5 rounded-2xl bg-white/60 border border-[#B9935A]/15 shadow-sm transition-colors hover:bg-white"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#B9935A]/15 text-[#B9935A] flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-xl">
                        {item.icon}
                      </span>
                    </div>
                    <div>
                      <h5 className="font-bold text-[#172235]">{item.title}</h5>
                      <p className="text-xs text-gray-600 leading-relaxed mt-0.5">
                        {item.content}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social & Contact Bar using Reusable SocialConnectBar Component */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.25, margin: "0px 0px -40px 0px" }}
              variants={magicalBehindVariant(shouldReduceMotion)}
              style={{ willChange: "transform, opacity, filter" }}
              className="mt-6 pt-4 border-t border-[#B9935A]/20"
            >
              <SocialConnectBar containerClassName="flex items-center justify-between w-full px-6 sm:px-10" iconSizeClass="w-7 h-7" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
});

export default ContactSection;
