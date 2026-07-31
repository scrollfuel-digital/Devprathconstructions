import React, { useState, memo } from "react";
import { motion, useReducedMotion } from "framer-motion";

// Magical Depth-Blur Motion Variant (Emerging from Background, Zero Delay, Unhurried Slow Pace)
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
  {
    id: "phone",
    icon: "call",
    title: "Phone Call",
    content: "+91 9923203281, +91 9921141299",
  },
  {
    id: "email",
    icon: "mail",
    title: "Email Us",
    content: "devprathconstructions@gmail.com",
  },
  {
    id: "hours",
    icon: "schedule",
    title: "Working Time",
    content: "Mon-Fri 10.30:AM-07.00:PM",
  },
  {
    id: "address",
    icon: "location_on",
    title: "SITE ADD",
    content: "Plot No. 365/2, Opp. MIDAS Hospital, Parsodi, Wardha Road, Nagpur",
  },
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
          
          {/* Left Column - Split-Screen Form (Magical Emergence) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15, margin: "0px 0px -30px 0px" }}
            variants={magicalBehindVariant(shouldReduceMotion)}
            style={{ willChange: "transform, opacity, filter" }}
            className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#B9935A]/25 shadow-xl relative"
          >
            {/* Header Text of Contact Form */}
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
                {/* Full Name Field */}
                <motion.div variants={formFieldVariant(shouldReduceMotion)}>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#172235] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#B9935A] focus:ring-4 focus:ring-[#B9935A]/15 focus:outline-none text-sm transition-all duration-300 bg-white text-gray-900 shadow-sm"
                  />
                </motion.div>

                {/* Email & Phone Fields */}
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
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
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
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#B9935A] focus:ring-4 focus:ring-[#B9935A]/15 focus:outline-none text-sm transition-all duration-300 bg-white text-gray-900 shadow-sm"
                    />
                  </div>
                </motion.div>

                {/* Project Preference Selection */}
                <motion.div variants={formFieldVariant(shouldReduceMotion)}>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#172235] mb-2">
                    Project Preference
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) =>
                      setFormData({ ...formData, interest: e.target.value })
                    }
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

                {/* Dynamic Interactive Submit Button */}
                <motion.div variants={formFieldVariant(shouldReduceMotion)}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-full bg-[#B9935A] py-4 text-xs font-semibold uppercase tracking-[3px] text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-[#B9935A] hover:to-[#8B6732] hover:border-transparent hover:shadow-xl active:scale-95 flex items-center justify-center gap-2 cursor-pointer shadow-md mt-4 disabled:opacity-80"
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

          {/* Right Column - HQ Information & Social Connect Action Box */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              {/* Right Column Header */}
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

              {/* 4 HQ Info Items - Independent Per-Item Viewport Observers */}
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

            {/* Social Media & Direct Quick Connect Block (All Matching SVG Icons) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.25, margin: "0px 0px -40px 0px" }}
              variants={magicalBehindVariant(shouldReduceMotion)}
              style={{ willChange: "transform, opacity, filter" }}
              className="mt-6 pt-4 border-t border-[#B9935A]/20"
            >
              <div className="flex items-center gap-6 flex-wrap">
                {/* Facebook Link */}
                <a
                  href="https://www.facebook.com/devprathconstructions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  title="Follow us on Facebook"
                  className="inline-flex items-center justify-center text-[#172235] hover:text-[#B9935A] transition-all duration-300 hover:scale-115 shrink-0"
                >
                  <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* Instagram Link */}
                <a
                  href="https://www.instagram.com/devprathconstructions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  title="Follow us on Instagram"
                  className="inline-flex items-center justify-center text-[#172235] hover:text-[#B9935A] transition-all duration-300 hover:scale-115 shrink-0"
                >
                  <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* WhatsApp Link */}
                <a
                  href="https://wa.me/919923203281?text=Hi%20Devprath%20Team,%20I%20am%20interested%20in%20Mangalmurti%20Residency."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  title="Chat on WhatsApp (+91 99232 03281)"
                  className="inline-flex items-center justify-center text-[#172235] hover:text-[#25D366] transition-all duration-300 hover:scale-115 shrink-0"
                >
                  <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.151 4.204 4.234-1.111zm12.355-6.59c-.273-.137-1.616-.797-1.866-.888-.25-.092-.432-.137-.615.137-.182.273-.706.888-.865 1.07-.159.183-.318.205-.591.069-.273-.137-1.155-.426-2.201-1.359-.814-.726-1.363-1.623-1.523-1.896-.159-.273-.017-.421.12-.557.123-.122.273-.318.41-.477.136-.159.182-.273.273-.456.091-.182.046-.341-.023-.477-.068-.137-.615-1.482-.843-2.029-.222-.533-.448-.46-.615-.468-.159-.008-.341-.01-.523-.01s-.477.068-.727.341c-.25.273-.956.934-.956 2.28 0 1.346.979 2.646 1.116 2.828.137.182 1.927 2.943 4.668 4.126 2.741 1.183 2.741.789 3.242.744.501-.046 1.616-.66 1.844-1.298.228-.637.228-1.183.159-1.298-.068-.115-.25-.183-.523-.32z"/>
                  </svg>
                </a>

                {/* Email Link (Clean Vector SVG, Working mailto:) */}
                <a
                  href="mailto:devprathconstructions@gmail.com"
                  aria-label="Email"
                  title="Email devprathconstructions@gmail.com"
                  className="inline-flex items-center justify-center text-[#172235] hover:text-[#B9935A] transition-all duration-300 hover:scale-115 shrink-0"
                >
                  <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </a>

                {/* Call / Phone Link (Clean Vector SVG, Working tel:) */}
                <a
                  href="tel:+919923203281"
                  aria-label="Call Us"
                  title="Call +91 99232 03281"
                  className="inline-flex items-center justify-center text-[#172235] hover:text-[#B9935A] transition-all duration-300 hover:scale-115 shrink-0"
                >
                  <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
});

export default ContactSection;
