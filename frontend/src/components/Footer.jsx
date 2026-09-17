import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import logo from "../assets/logo/logo.png";
import SocialConnectBar from "./SocialConnectBar";
import { FOOTER_QUICK_LINKS, FOOTER_LEGAL_LINKS } from "../constants/navigationData";

const OFFICE = {
  address:
    "Arpitshrushti, Behind Ganpati Temple, Near Tatya Tope Hall, Surendra Nagar, Nagpur - 440015",
  hours: "Mon-Fri, 10:30 AM - 07:00 PM",
  phones: [
    { label: "+91 99211 41299", href: "tel:+919921141299" },
    { label: "+91 99232 03281", href: "tel:+919923203281" },
  ],
  email: "devprathconstructions@gmail.com",
};

export const Footer = () => {
  return (
    <footer className="bg-[#F2EDE4] text-[#1F1E1C] font-body pt-8 sm:pt-10 pb-5 border-t border-[#B9935A]/30">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-6 border-b border-[#1F1E1C]/10 items-start">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start justify-start">
            <Link to="/" className="mb-3 block">
              <img
                src={logo}
                alt="Devprath Constructions LLP"
                className="h-16 sm:h-20 w-auto object-contain object-left"
              />
            </Link>
            <p className="text-xs sm:text-sm text-[#4A453E] leading-relaxed font-medium max-w-sm">
              DEVPRATH CONSTRUCTIONS LLP crafts quality residential landmarks with uncompromised structural engineering, transparent MahaRERA compliance, and enduring architectural design in Nagpur.
            </p>
          </div>

          {/* Navigation (2 cols) */}
          <div className="lg:col-span-2 lg:pt-1">
            <ul className="space-y-2 text-xs sm:text-sm text-[#2C2824] font-semibold">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.id}>
                  <Link to={link.path} className="hover:text-[#B9935A] transition-colors duration-200 block">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect With Us (3 cols) */}
          <div className="lg:col-span-3 lg:pt-1">
            <p className="text-xs sm:text-sm text-[#4A453E] font-medium leading-relaxed mb-4">
              Follow Devprath Constructions for site progress updates, project launches, and architectural milestones.
            </p>
            <SocialConnectBar
              containerClassName="flex items-center justify-between w-full pt-1"
              iconSizeClass="w-5 h-5"
            />
          </div>

          {/* Operations Office (3 cols) */}
          <div className="lg:col-span-3 lg:pt-1">
            <address className="not-italic text-xs sm:text-sm text-[#2C2824] font-semibold leading-relaxed space-y-2.5">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B9935A] shrink-0 mt-0.5" />
                <span className="font-medium text-[#3E3A34]">{OFFICE.address}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#B9935A] shrink-0" />
                <span>{OFFICE.hours}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B9935A] shrink-0" />
                <span>
                  {OFFICE.phones.map((phone, idx) => (
                    <React.Fragment key={phone.href}>
                      {idx > 0 && " · "}
                      <a href={phone.href} className="hover:text-[#B9935A] transition-colors duration-200">
                        {phone.label}
                      </a>
                    </React.Fragment>
                  ))}
                </span>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B9935A] shrink-0" />
                <a href={`mailto:${OFFICE.email}`} className="hover:text-[#B9935A] transition-colors duration-200">
                  {OFFICE.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs text-[#554F47] font-medium tracking-wide">
          <p>© {new Date().getFullYear()} DEVPRATH CONSTRUCTIONS LLP. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-6 uppercase tracking-wider text-[11px]">
            {FOOTER_LEGAL_LINKS.map((legal) => (
              <Link key={legal.id} to={legal.path} className="hover:text-[#B9935A] transition-colors duration-200">
                {legal.title}
              </Link>
            ))}
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;