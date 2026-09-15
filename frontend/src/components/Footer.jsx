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

const ColumnLabel = ({ children }) => (
  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#B9935A] mb-3">
    {children}
  </p>
);

export const Footer = () => {
  return (
    <footer className="bg-[#F2EDE4] text-[#1F1E1C] font-body pt-6 pb-3 border-t border-[#B9935A]/30">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-6 pb-4 border-b border-[#1F1E1C]/10 lg:items-center">

          {/* Brand Info */}
          <div className="lg:col-span-4">
            <Link to="/" className="mb-3 block">
              <img
                src={logo}
                alt="Devprath Constructions LLP"
                className="h-20 sm:h-24 lg:h-28 w-auto object-contain object-left"
              />
            </Link>
            <p className="text-sm text-[#4A453E] leading-relaxed font-medium max-w-sm lg:max-w-[400px]">
              DEVPRATH CONSTRUCTIONS LLP builds quality homes in Nagpur with strong construction and MahaRERA-compliant transparency.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <ColumnLabel>Explore</ColumnLabel>
            <ul className="space-y-2 text-sm text-[#2C2824] font-semibold">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.path}
                    className="hover:text-[#B9935A] transition-colors duration-200 block"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect With Us */}
          <div className="lg:col-span-3">
            <ColumnLabel>Connect</ColumnLabel>
            <div className="space-y-3 text-sm text-[#2C2824] font-semibold">
              <p className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#B9935A] shrink-0" />
                <span>{OFFICE.hours}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B9935A] shrink-0" />
                <span className="flex items-center gap-2 whitespace-nowrap text-[13px] sm:text-sm">
                  {OFFICE.phones.map((phone, idx) => (
                    <React.Fragment key={phone.href}>
                      {idx > 0 && (
                        <span aria-hidden="true" className="h-3 w-px bg-[#1F1E1C]/20" />
                      )}
                      <a
                        href={phone.href}
                        className="hover:text-[#B9935A] transition-colors duration-200"
                      >
                        {phone.label}
                      </a>
                    </React.Fragment>
                  ))}
                </span>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B9935A] shrink-0" />
                <a
                  href={`mailto:${OFFICE.email}`}
                  className="hover:text-[#B9935A] transition-colors duration-200 break-words"
                >
                  {OFFICE.email}
                </a>
              </p>
            </div>
            <SocialConnectBar
              containerClassName="flex items-center gap-6 mt-5"
              iconSizeClass="w-5 h-5"
            />
          </div>

          {/* Operations Office */}
          <div className="lg:col-span-3">
            <ColumnLabel>Reach Us</ColumnLabel>
            <address className="not-italic text-sm text-[#2C2824] font-semibold leading-relaxed">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B9935A] shrink-0 mt-0.5" />
                <span className="font-medium text-[#3E3A34]">{OFFICE.address}</span>
              </p>
            </address>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[#554F47] font-medium tracking-wide text-center md:text-left">
          <p>© {new Date().getFullYear()} DEVPRATH CONSTRUCTIONS LLP. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-6 uppercase tracking-wider">
            {FOOTER_LEGAL_LINKS.map((legal) => (
              <Link
                key={legal.id}
                to={legal.path}
                className="hover:text-[#B9935A] transition-colors duration-200"
              >
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