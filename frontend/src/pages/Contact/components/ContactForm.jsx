import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Mail, Phone, MessageSquare, ArrowRight, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);

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
        setFormData({ name: "", email: "", phone: "", message: "" });
      }, 4500);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-[#B9935A]/20 relative overflow-hidden h-full flex flex-col justify-between">
      {/* Decorative Golden Corner & Accent */}
      <div className="absolute -top-1 -right-1 w-28 h-28 bg-gradient-to-bl from-[#B9935A]/15 to-transparent rounded-bl-[3rem] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-40 h-1 bg-gradient-to-r from-[#B9935A] to-transparent" />

      <div>
        <div className="mb-8 space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-[3px] text-[#B9935A] block">
            Send a Message
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B1C1C] font-heading leading-tight">
            Start a Conversation
          </h2>
          <p className="text-xs sm:text-sm text-[#4E453A] font-light">
            Fill out the form below and our engineering & sales team will reach out within 24 hours.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {formSubmitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              className="bg-[#F8F5EF] border border-[#B9935A]/30 rounded-2xl p-8 text-center space-y-4 my-8"
            >
              <div className="w-16 h-16 rounded-full bg-[#B9935A]/15 border-2 border-[#B9935A] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8 text-[#B9935A]" />
              </div>
              <h3 className="text-xl font-bold text-[#1B1C1C] font-heading">Message Sent!</h3>
              <p className="text-xs text-[#4E453A]">
                Thank you for reaching out to Devprath Constructions. We will get back to you shortly.
              </p>
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
                  <label className="text-[10px] font-bold uppercase tracking-[2px] text-[#1B1C1C] flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#B9935A]" /> Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className="w-full bg-[#F8F5EF]/70 border border-[#B9935A]/25 focus:border-[#B9935A] focus:ring-2 focus:ring-[#B9935A]/15 rounded-xl px-4 py-3 text-xs sm:text-sm placeholder:text-gray-400 focus:outline-none transition-all"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-[2px] text-[#1B1C1C] flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#B9935A]" /> Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@example.com"
                    className="w-full bg-[#F8F5EF]/70 border border-[#B9935A]/25 focus:border-[#B9935A] focus:ring-2 focus:ring-[#B9935A]/15 rounded-xl px-4 py-3 text-xs sm:text-sm placeholder:text-gray-400 focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-[2px] text-[#1B1C1C] flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#B9935A]" /> Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 99232 03281"
                  className="w-full bg-[#F8F5EF]/70 border border-[#B9935A]/25 focus:border-[#B9935A] focus:ring-2 focus:ring-[#B9935A]/15 rounded-xl px-4 py-3 text-xs sm:text-sm placeholder:text-gray-400 focus:outline-none transition-all"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-[2px] text-[#1B1C1C] flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-[#B9935A]" /> Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your residential or commercial inquiry..."
                  className="w-full bg-[#F8F5EF]/70 border border-[#B9935A]/25 focus:border-[#B9935A] focus:ring-2 focus:ring-[#B9935A]/15 rounded-xl px-4 py-3 text-xs sm:text-sm placeholder:text-gray-400 focus:outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#B9935A] hover:bg-[#785926] text-white py-4 rounded-xl font-bold text-[11px] uppercase tracking-[3px] transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.99] flex items-center justify-center gap-2.5 cursor-pointer group"
              >
                <span>Send Message</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
