import React from "react";
import SocialConnectBar from "../../components/SocialConnectBar";
import { Mail, PhoneCall, CalendarClock } from "lucide-react";
import { CONTACT_CHANNELS } from "../../constants/contactData";
import ContactMap from "./components/ContactMap";
import ContactForm from "./components/ContactForm";
import CTAButton from "../../components/common/CTAButton";

export default function Contact() {

  const quickContactItems = [
    {
      id: "email",
      label: "Direct Email",
      value: CONTACT_CHANNELS.email,
      href: `mailto:${CONTACT_CHANNELS.email}`,
      Icon: Mail,
    },
    {
      id: "phone",
      label: "Phone Inquiry",
      value: CONTACT_CHANNELS.phonePrimary,
      href: `tel:${CONTACT_CHANNELS.phonePrimary}`,
      Icon: PhoneCall,
    },
    {
      id: "hours",
      label: "Operational Hours",
      value: CONTACT_CHANNELS.workingHours,
      href: null,
      Icon: CalendarClock,
    },
  ];

  return (
    <div className="bg-[#FAF7F2] text-[#1F1E1C] font-body min-h-screen selection:bg-[#B9935A] selection:text-white">
      {/* SECTION 1 — HERO HEADER BANNER */}
      <section className="pt-36 sm:pt-44 pb-14 sm:pb-20 border-b border-[#B9935A]/20 bg-[#FAF7F2]">
        <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <span className="arch-eyebrow text-center mb-4">
              Contact Devprath
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.08] mb-6">
              We Build <span className="font-bold text-brand-primary">For You.</span>
            </h1>
            <p className="text-base sm:text-lg text-muted font-light leading-relaxed">
              Whether you are exploring residential properties at Mangalmurti Residency or planning a private site consultation, our leadership and sales team are here to guide you.
            </p>
          </div>

          {/* Quick Contact Row */}
          <div className="mt-12 pt-8 border-t border-[#B9935A]/20 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {quickContactItems.map(({ id, label, value, href, Icon }) => (
              <div key={id} className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[#B9935A]/30 bg-[#F2EDE4] flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-4 h-4 text-[#B9935A]" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8F6E3B] block mb-1">
                    {label}
                  </span>
                  {href ? (
                    <a
                      href={href}
                      className="text-xs sm:text-sm font-medium text-[#1F1E1C] hover:text-[#B9935A] transition-colors leading-snug block"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-xs sm:text-sm font-medium text-[#1F1E1C] leading-snug block">
                      {value}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 — FORM & INQUIRIES */}
      <section className="py-20 sm:py-28 lg:py-32">
        <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right Column: Direct Channels & Instant Inquiry */}
            <div className="lg:col-span-5 space-y-8">
              <div className="border border-[#B9935A]/25 bg-[#F2EDE4]/60 p-6 sm:p-8">
                <span className="font-body text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B9935A] block mb-3">
                  Direct Inquiries
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-normal text-[#1F1E1C] mb-4">
                  Contact Us Directly
                </h3>
                <p className="font-body text-xs sm:text-sm text-[#6D675E] font-light leading-relaxed mb-6">
                  For urgent site visits, checking documents, or asking for project details, you can reach our partners directly on WhatsApp.
                </p>
                <div className="pt-5">
                  <CTAButton
                  href={CONTACT_CHANNELS.whatsappUrl}
                  label="CHAT ON WHATSAPP"
                  className="!w-full !h-11 text-xs"
                />
                </div>
              </div>

              <div className="border border-[#B9935A]/25 bg-[#F2EDE4]/60 p-6 sm:p-8">
                <span className="font-body text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B9935A] block mb-3">
                  Social Channels
                </span>
                <p className="font-body text-xs sm:text-sm text-[#6D675E] font-light leading-relaxed mb-5">
                   Follow Devprath Constructions on social media for regular construction updates.
                </p>
                <SocialConnectBar
                  containerClassName="flex items-center justify-between w-full pt-5"
                  iconSizeClass="w-5 h-5"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — INTERACTIVE ARCHITECTURAL MAP */}
      <section id="contact-map" className="py-16 sm:py-24 border-t border-[#B9935A]/20 bg-[#FAF7F2]">
        <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <ContactMap />
        </div>
      </section>
    </div>
  );
}
