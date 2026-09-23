import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import axios from "axios";

const API_URL =
  "https://devprath-backend-latest.onrender.com/api/contact/create-contact";
  // "https://devprath-native.onrender.com/api/contact/create-contact";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

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

    // Remove error for the field when user starts correcting it
    setFieldErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setErrorMessage("");
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setErrorMessage("");
    setFieldErrors({});

    try {
      const response = await axios.post(API_URL, {
        name: formData.name,
        email: formData.email,
        phoneNo: formData.phone,
        message: formData.message,
      });

      if (response.status === 201) {
        setFormSubmitted(true);

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });

        setTimeout(() => {
          setFormSubmitted(false);
        }, 4500);
      }
    } catch (error) {
      if (error.response) {
        const { status, data } = error.response;

        if (status === 400) {
          // Field validation errors
          if (
            data &&
            typeof data === "object" &&
            !data.status &&
            !data.message
          ) {
            setFieldErrors(data);
          } else {
            // Malformed request body
            setErrorMessage(
              data?.message || "Please check your information and try again."
            );
          }
        } else if (status === 500) {
          setErrorMessage(
            "Something went wrong on our server. Please try again later."
          );
        } else {
          setErrorMessage("Unable to submit your request. Please try again.");
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

  const textFields = [
    {
      name: "name",
      label: "Full Name",
      type: "text",
      required: true,
      placeholder: "Your full name",
      Icon: User,
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      required: true,
      placeholder: "you@example.com",
      Icon: Mail,
    },
  ];

  return (
    <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-[#B9935A]/20 relative overflow-hidden h-full flex flex-col justify-between">
      {/* Decorative Golden Accent */}
      <div className="absolute -top-1 -right-1 w-28 h-28 bg-gradient-to-bl from-[#B9935A]/15 to-transparent rounded-bl-[3rem] pointer-events-none" />

      <div className="absolute bottom-0 left-0 w-40 h-1 bg-gradient-to-r from-[#B9935A] to-transparent" />

      <div>
        <div className="mb-8 space-y-2">
          <span className="arch-eyebrow mb-1">
            Send a Message
          </span>

          <h2 className="text-2xl sm:text-3xl leading-tight">
            Start a Conversation
          </h2>

          <p className="text-xs sm:text-sm text-muted font-light">
            Fill out the form below and our engineering &amp; sales team will
            reach out within 24 hours.
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

              <h3 className="text-xl font-bold text-[#1B1C1C] font-heading">
                Message Sent!
              </h3>

              <p className="text-xs text-[#4E453A]">
                Thank you for reaching out to Devprath Constructions. We will
                get back to you shortly.
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
                {textFields.map(
                  ({
                    name,
                    label,
                    type,
                    required,
                    placeholder,
                    Icon,
                  }) => (
                    <div key={name} className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-[2px] text-[#1B1C1C] flex items-center gap-1.5">
                        <Icon className="w-3.5 h-3.5 text-[#B9935A]" />
                        {label}
                      </label>

                      <input
                        type={type}
                        name={name}
                        required={required}
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
                <label className="text-[10px] font-bold uppercase tracking-[2px] text-[#1B1C1C] flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#B9935A]" />
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 99232 03281"
                  className="w-full bg-[#F8F5EF]/70 border border-[#B9935A]/25 focus:border-[#B9935A] focus:ring-2 focus:ring-[#B9935A]/15 rounded-xl px-4 py-3 text-xs sm:text-sm placeholder:text-gray-400 focus:outline-none transition-all"
                />

                {fieldErrors.phoneNo && (
                  <p className="text-xs text-red-600">
                    {fieldErrors.phoneNo}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-[2px] text-[#1B1C1C] flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-[#B9935A]" />
                  Message
                </label>

                <textarea
                  name="message"
                  rows={4}
                  required
                  maxLength={500}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your residential or commercial inquiry..."
                  className="w-full bg-[#F8F5EF]/70 border border-[#B9935A]/25 focus:border-[#B9935A] focus:ring-2 focus:ring-[#B9935A]/15 rounded-xl px-4 py-3 text-xs sm:text-sm placeholder:text-gray-400 focus:outline-none transition-all resize-none"
                />

                {fieldErrors.message && (
                  <p className="text-xs text-red-600">
                    {fieldErrors.message}
                  </p>
                )}
              </div>

              {/* General Error */}
              {errorMessage && (
                <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-xs">
                  {errorMessage}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#B9935A] hover:bg-[#785926] disabled:opacity-60 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold text-[11px] uppercase tracking-[3px] transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.99] flex items-center justify-center gap-2.5 cursor-pointer group"
              >
                <span>{loading ? "Sending..." : "Send Message"}</span>

                {!loading && (
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                )}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}