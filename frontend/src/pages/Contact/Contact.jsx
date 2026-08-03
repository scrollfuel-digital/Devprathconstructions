import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const prefersReducedMotion = useReducedMotion();

  /* -----------------------------------------------------------------------
   * magicalBehindVariant
   * Creates the illusion that each section emerges from behind the page.
   * When the user prefers reduced motion, only a simple fade is applied.
   * --------------------------------------------------------------------- */
  const magicalBehindVariant = {
    hidden: prefersReducedMotion
      ? { opacity: 0 }
      : { opacity: 0, scale: 0.88, y: 35, filter: "blur(6px)" },
    visible: prefersReducedMotion
      ? { opacity: 1 }
      : { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" },
  };

  const magicalTransition = {
    duration: 1.25,
    delay: 0,
    ease: [0.25, 1, 0.5, 1],
  };

  const magicalViewport = { once: false, amount: 0.05 };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

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

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubmitted(true);
      setTimeout(() => {
        setNewsletterSubmitted(false);
        setNewsletterEmail("");
      }, 4000);
    }
  };

  return (
    <div className="bg-[#f8f5ef] text-[#172235] font-sans antialiased min-h-screen pt-28 sm:pt-32 lg:pt-36 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-[#B9935A] selection:text-white relative overflow-hidden">

        {/* Decorative blurred gold orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#B9935A]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-[#B9935A]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#B9935A]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
        {/* =========================================================================
            SECTION 1: CONTACT US CARD & FORM
           ========================================================================= */}
        <motion.section
          variants={magicalBehindVariant}
          initial="hidden"
          whileInView="visible"
          viewport={magicalViewport}
          transition={magicalTransition}
          style={{ willChange: "transform, opacity, filter" }}
          className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-[#c9a063]/25 hover:border-[#c9a063] p-8 sm:p-12 lg:p-16 relative overflow-hidden transition-all duration-500"
        >
          {/* Decorative corner accents */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#c9a063]/10 rounded-bl-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#c9a063]/8 rounded-tr-full pointer-events-none" />

          {/* Main Title & Subtitle Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 relative z-10">
            <span className="text-xs font-bold uppercase tracking-[3px] text-[#c9a063] mb-3 block">GET IN TOUCH</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#172235] leading-tight font-heading">
              Contact <span className="gold-gradient-text">Us</span>
            </h1>
            <p className="text-sm text-gray-600 leading-relaxed font-light mt-4 max-w-xl mx-auto">
              We're here to help! Whether you have questions, feedback, or need support, our team is ready to assist you.
            </p>
          </div>

          {/* Two Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Column: Contact Details */}
            <div className="lg:col-span-5 space-y-8">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172235] tracking-tight font-heading">
                Get in <span className="gold-gradient-text">touch</span>
              </h2>

              <div className="space-y-6 text-sm text-gray-800">
                {/* Email Item */}
                <div>
                  <span className="text-xs text-gray-400 font-normal block mb-1">
                    Email:
                  </span>
                  <a
                    href="mailto:Moneta@gmail.com"
                    className="font-bold text-[#172235] hover:text-[#B9935A] transition-colors duration-300 text-base"
                  >
                    Moneta@gmail.com
                  </a>
                </div>

                {/* Phone Item */}
                <div>
                  <span className="text-xs text-gray-400 font-normal block mb-1">
                    Phone:
                  </span>
                  <a
                    href="tel:12312212323"
                    className="font-bold text-[#172235] hover:text-[#B9935A] transition-colors duration-300 text-base"
                  >
                    (123) 1221 2323
                  </a>
                </div>

                {/* Address Item */}
                <div>
                  <span className="text-xs text-gray-400 font-normal block mb-1">
                    Address:
                  </span>
                  <p className="font-bold text-gray-900 leading-snug text-base">
                    123 Innovation Avenue, Suite 456
                    <br />
                    Tech District, San Francisco, CA 94107
                    <br />
                    United States
                  </p>
                </div>

                {/* Social Links */}
                <div className="pt-2">
                  <span className="text-xs text-gray-400 font-normal block mb-3">
                    Follow Us
                  </span>
                  <div className="flex items-center gap-4 text-gray-900">
                    {/* YouTube Icon */}
                    <a
                      href="#youtube"
                      aria-label="YouTube"
                      className="hover:text-[#B9935A] transition-colors duration-300"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </a>

                    {/* Instagram Icon */}
                    <a
                      href="#instagram"
                      aria-label="Instagram"
                      className="hover:text-[#B9935A] transition-colors duration-300"
                    >
                      <svg
                        className="w-5 h-5 fill-none stroke-current"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    </a>

                    {/* TikTok Icon */}
                    <a
                      href="#tiktok"
                      aria-label="TikTok"
                      className="hover:text-[#B9935A] transition-colors duration-300"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.33a6.33 6.33 0 0 0-1-.08 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.05a8.27 8.27 0 0 0 4.92 1.6V7.2a4.85 4.85 0 0 1-1-.51z" />
                      </svg>
                    </a>

                    {/* Twitter/X Icon */}
                    <a
                      href="#twitter"
                      aria-label="Twitter"
                      className="hover:text-[#B9935A] transition-colors duration-300"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              {formSubmitted ? (
                <div className="bg-[#f8f5ef] border border-[#c9a063]/30 rounded-3xl p-8 text-center space-y-3 shadow-lg">
                  <div className="w-16 h-16 rounded-full bg-[#c9a063]/15 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 text-[#B9935A]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#172235] font-heading">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-xs text-gray-600">
                    Thank you for reaching out. Our team will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  {/* Name & Email Inputs Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#172235] mb-2 uppercase tracking-wider">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        className="w-full bg-white border border-[#c9a063]/20 focus:border-[#B9935A] focus:ring-2 focus:ring-[#B9935A]/20 rounded-xl px-5 py-4 text-sm text-[#172235] placeholder:text-gray-400 focus:outline-none transition-all duration-300 shadow-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#172235] mb-2 uppercase tracking-wider">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your email address"
                        className="w-full bg-white border border-[#c9a063]/20 focus:border-[#B9935A] focus:ring-2 focus:ring-[#B9935A]/20 rounded-xl px-5 py-4 text-sm text-[#172235] placeholder:text-gray-400 focus:outline-none transition-all duration-300 shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-xs font-semibold text-[#172235] mb-2 uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Write something..."
                      className="w-full bg-white border border-[#c9a063]/20 focus:border-[#B9935A] focus:ring-2 focus:ring-[#B9935A]/20 rounded-xl px-5 py-4 text-sm text-[#172235] placeholder:text-gray-400 focus:outline-none transition-all duration-300 resize-none shadow-sm"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#B9935A] hover:bg-[#a6844e] text-white py-4 rounded-full font-bold text-xs uppercase tracking-[2px] transition-all duration-300 shadow-xl hover:shadow-[0_20px_40px_rgba(185,147,90,0.3)] hover:-translate-y-1 active:scale-95"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.section>


      </div>
    </div>
  );
}
