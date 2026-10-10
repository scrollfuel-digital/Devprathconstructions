import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  PhoneCall,
  RotateCcw,
} from "lucide-react";
import axios from "axios";
import { Turnstile } from "@marsidev/react-turnstile";

const API_URL =
  "https://devprath-backend-latest.onrender.com/api/contact/create-contact";

const WHATSAPP_NUMBER = "919921277699";
const CALL_NUMBER = "+917387460349";

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  message: "",
  turnstileToken: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [submittedData, setSubmittedData] = useState(null);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setFieldErrors((prev) => ({
      ...prev,
      [name]: "",
      ...(name === "phone" ? { phoneNo: "" } : {}),
    }));

    setErrorMessage("");
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    if (!formData.turnstileToken) {
      setErrorMessage("Please complete the security verification.");
      return;
    }

    setLoading(true);
    setErrorMessage("");
    setFieldErrors({});

    // Preserve the inquiry before resetting the form.
    const inquiry = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      message: formData.message.trim(),
    };

    try {
      const response = await axios.post(API_URL, {
        name: inquiry.name,
        email: inquiry.email,
        phoneNo: inquiry.phone,
        message: inquiry.message,
        turnstileToken: formData.turnstileToken,
      });

      // The database submission succeeded.
      if (response.status === 200 || response.status === 201) {
        setSubmittedData(inquiry);
        setFormSubmitted(true);
        setFormData({ ...INITIAL_FORM });
        setFieldErrors({});
        setErrorMessage("");
      } else {
        setErrorMessage(
          "Unable to confirm your inquiry. Please try again."
        );
      }
    } catch (error) {
      if (error.response) {
        const { status, data } = error.response;

        if (status === 400) {
          if (
            data &&
            typeof data === "object" &&
            !data.status &&
            !data.message
          ) {
            setFieldErrors(data);
          } else {
            setErrorMessage(
              data?.message ||
              "Please check your information and try again."
            );
          }
        } else if (status === 500) {
          setErrorMessage(
            "Something went wrong on our server. Please try again later."
          );
        } else {
          setErrorMessage(
            data?.message ||
            "Unable to submit your inquiry. Please try again."
          );
        }
      } else if (error.request) {
        setErrorMessage(
          "Unable to connect to the server. Please check your internet connection."
        );
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsApp = () => {
    if (!submittedData) return;

    const whatsappMessage = [
      "Hello Devprath Constructions,",
      "",
      "I have submitted an inquiry through your website.",
      "",
      `Name: ${submittedData.name}`,
      `Email: ${submittedData.email}`,
      `Phone: ${submittedData.phone}`,
      `Message: ${submittedData.message}`,
      "",
      "Please contact me regarding your property inquiry.",
    ].join("\n");

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}?text=` +
      encodeURIComponent(whatsappMessage);

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleNewInquiry = () => {
    setFormData({ ...INITIAL_FORM });
    setSubmittedData(null);
    setFormSubmitted(false);
    setErrorMessage("");
    setFieldErrors({});
  };

  const textFields = [
    {
      name: "name",
      label: "Full Name",
      type: "text",
      required: true,
      placeholder: "Your full name",
      Icon: User,
      autoComplete: "name",
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      required: true,
      placeholder: "you@example.com",
      Icon: Mail,
      autoComplete: "email",
    },
  ];

  return (
    <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-[#B9935A]/20 relative overflow-hidden h-full flex flex-col justify-between">
      {/* Decorative accents */}
      <div className="absolute -top-1 -right-1 w-28 h-28 bg-gradient-to-bl from-[#B9935A]/15 to-transparent rounded-bl-[3rem] pointer-events-none" />

      <div className="absolute bottom-0 left-0 w-40 h-1 bg-gradient-to-r from-[#B9935A] to-transparent" />

      <div className="relative z-10">
        {/* Heading */}
        <div className="mb-8 space-y-2">
          <span className="arch-eyebrow mb-1">
            Send a Message
          </span>

          <h2 className="text-2xl sm:text-3xl leading-tight">
            Start a Conversation
          </h2>

          <p className="text-xs sm:text-sm text-muted font-light">
            Fill out the form below and our engineering &amp;
            sales team will reach out within 24 hours.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {formSubmitted && submittedData ? (
            /* SUCCESS: DATABASE SAVED + CONTACT OPTIONS */
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-[#F8F5EF] border border-[#B9935A]/30 rounded-2xl p-6 sm:p-8 text-center space-y-5"
            >
              <div className="w-16 h-16 rounded-full bg-[#B9935A]/15 border-2 border-[#B9935A] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8 text-[#8F6E3B]" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-[#1B1C1C]">
                  Inquiry Submitted Successfully!
                </h3>

                <p className="text-sm text-[#4E453A] leading-relaxed">
                  Thank you, {submittedData.name}. Your inquiry
                  has been submitted to our server. Choose how
                  you would like to contact our team.
                </p>
              </div>

              {/* Submitted inquiry summary */}
              <div className="bg-white border border-[#B9935A]/20 rounded-xl p-4 text-left space-y-2">
                <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#8F6E3B]">
                  Your Inquiry
                </p>

                <p className="text-xs text-[#4E453A] break-words">
                  <strong>Name:</strong> {submittedData.name}
                </p>

                <p className="text-xs text-[#4E453A] break-words">
                  <strong>Email:</strong> {submittedData.email}
                </p>

                <p className="text-xs text-[#4E453A] break-words">
                  <strong>Phone:</strong> {submittedData.phone}
                </p>

                <p className="text-xs text-[#4E453A] break-words">
                  <strong>Message:</strong> {submittedData.message}
                </p>
              </div>

              {/* WhatsApp */}
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="w-full bg-[#218C53] hover:bg-[#176D3F] text-white py-4 px-4 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-[1.5px] transition-all flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-5 h-5" />

                  <span>Continue on WhatsApp</span>

                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-xs text-[#6D675E]">
                  WhatsApp: 99212 77699
                </p>
              </div>

              {/* Call */}
              <div className="space-y-2">
                <a
                  href={`tel:${CALL_NUMBER}`}
                  className="w-full bg-[#B9935A] hover:bg-[#785926] text-white py-4 px-4 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-[1.5px] transition-all flex items-center justify-center gap-3"
                >
                  <PhoneCall className="w-5 h-5" />

                  <span>Call Now</span>
                </a>

                <p className="text-xs text-[#6D675E]">
                  Phone: 73874 60349
                </p>
              </div>

              <p className="text-[11px] text-[#81796E] leading-relaxed">
                Your inquiry has been submitted. WhatsApp opens
                with your details pre-filled; press Send to
                share the message with our team.
              </p>

              {/* New inquiry */}
              <button
                type="button"
                onClick={handleNewInquiry}
                className="pt-2 text-xs font-semibold text-[#8F6E3B] hover:text-[#1B1C1C] inline-flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Submit Another Inquiry
              </button>
            </motion.div>
          ) : (
            /* CONTACT FORM */
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleFormSubmit}
              className="space-y-5"
            >
              {/* Name and email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {textFields.map(
                  ({
                    name,
                    label,
                    type,
                    required,
                    placeholder,
                    Icon,
                    autoComplete,
                  }) => (
                    <div key={name} className="space-y-1.5">
                      <label
                        htmlFor={name}
                        className="text-[10px] font-bold uppercase tracking-[2px] text-[#1B1C1C] flex items-center gap-1.5"
                      >
                        <Icon className="w-3.5 h-3.5 text-[#B9935A]" />
                        {label}
                      </label>

                      <input
                        id={name}
                        type={type}
                        name={name}
                        autoComplete={autoComplete}
                        required={required}
                        maxLength={name === "name" ? 100 : 254}
                        value={formData[name]}
                        onChange={handleInputChange}
                        placeholder={placeholder}
                        className="w-full bg-[#F8F5EF]/70 border border-[#B9935A]/25 focus:border-[#B9935A] focus:ring-2 focus:ring-[#B9935A]/15 rounded-xl px-4 py-3 text-xs sm:text-sm placeholder:text-gray-400 focus:outline-none transition-all"
                      />

                      {fieldErrors[name] && (
                        <p className="text-xs text-red-600">
                          {fieldErrors[name]}
                        </p>
                      )}
                    </div>
                  )
                )}
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <label
                  htmlFor="phone"
                  className="text-[10px] font-bold uppercase tracking-[2px] text-[#1B1C1C] flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#B9935A]" />
                  Phone Number
                </label>

                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  inputMode="tel"
                  required
                  maxLength={16}
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 99232 03281"
                  className="w-full bg-[#F8F5EF]/70 border border-[#B9935A]/25 focus:border-[#B9935A] focus:ring-2 focus:ring-[#B9935A]/15 rounded-xl px-4 py-3 text-xs sm:text-sm placeholder:text-gray-400 focus:outline-none transition-all"
                />

                {(fieldErrors.phoneNo || fieldErrors.phone) && (
                  <p className="text-xs text-red-600">
                    {fieldErrors.phoneNo || fieldErrors.phone}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="text-[10px] font-bold uppercase tracking-[2px] text-[#1B1C1C] flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#B9935A]" />
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  maxLength={500}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your residential or commercial inquiry..."
                  className="w-full bg-[#F8F5EF]/70 border border-[#B9935A]/25 focus:border-[#B9935A] focus:ring-2 focus:ring-[#B9935A]/15 rounded-xl px-4 py-3 text-xs sm:text-sm placeholder:text-gray-400 focus:outline-none transition-all resize-none"
                />

                <div className="text-right text-[10px] text-[#81796E]">
                  {formData.message.length}/500
                </div>

                {fieldErrors.message && (
                  <p className="text-xs text-red-600">
                    {fieldErrors.message}
                  </p>
                )}
              </div>

              {/* Cloudflare Turnstile */}
              <div className="overflow-x-auto">
                <Turnstile
                  siteKey="0x4AAAAAAE32Pw9QivldjMWo"
                  options={{
                    theme: "light",
                  }}
                  onSuccess={(token) => {
                    setFormData((prev) => ({
                      ...prev,
                      turnstileToken: token,
                    }));

                    setErrorMessage("");
                  }}
                  onError={() => {
                    setFormData((prev) => ({
                      ...prev,
                      turnstileToken: "",
                    }));

                    setErrorMessage(
                      "Security verification failed. Please try again."
                    );
                  }}
                  onExpire={() => {
                    setFormData((prev) => ({
                      ...prev,
                      turnstileToken: "",
                    }));

                    setErrorMessage(
                      "Security verification expired. Please verify again."
                    );
                  }}
                />
              </div>

              {/* General error */}
              {errorMessage && (
                <div
                  role="alert"
                  className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-xs"
                >
                  {errorMessage}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#B9935A] hover:bg-[#785926] disabled:opacity-60 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold text-[11px] uppercase tracking-[3px] transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.99] flex items-center justify-center gap-2.5 cursor-pointer group"
              >
                <span>
                  {loading ? "Submitting Inquiry..." : "Submit Inquiry"}
                </span>

                {!loading && (
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                )}
              </button>

              <p className="text-[10px] text-[#81796E] leading-relaxed">
                Your inquiry is submitted securely. After successful
                submission, you can choose WhatsApp or a direct call.
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}