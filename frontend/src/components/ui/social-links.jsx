import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa6";

const ICONS = {
  facebook: { label: "Facebook", icon: FaFacebook },
  instagram: { label: "Instagram", icon: FaInstagram },
  whatsapp: { label: "WhatsApp", icon: FaWhatsapp },
  mail: { label: "Email", icon: FaEnvelope },
  phone: { label: "Phone", icon: FaPhone },
};

export const SocialLinks = ({ links = [] }) => (
  <div className="absolute top-1/2 -translate-y-1/2 left-0 z-20 flex flex-col gap-2">
    {links.map(({ platform, href }) => {
      const item = ICONS[platform];
      if (!item) return null;
      const Icon = item.icon;
      return (
        <a
          key={platform}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="group flex items-center justify-between w-32 sm:w-36 h-10 sm:h-11 px-3 ml-[-84px] sm:ml-[-96px] hover:ml-0 active:ml-0 transition-all duration-300 rounded-r-lg border border-white/25 border-l-0 bg-black/25 hover:bg-black/50 backdrop-blur-md text-white shadow-md"
        >
          <span className="text-[10px] sm:text-[11px] uppercase tracking-wider font-medium text-white/90">
            {item.label}
          </span>
          <Icon size={18} className="shrink-0 group-hover:scale-110 transition-transform" />
        </a>
      );
    })}
  </div>
);

export default SocialLinks;
