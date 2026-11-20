import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import logo from "../assets/logo/logo.png";
import SocialConnectBar from "./SocialConnectBar";
import { FOOTER_QUICK_LINKS } from "../constants/navigationData";
// bla bal bla
const OFFICE = {
  address:
    "32-A, Deep Apartment, Pande Layout, Khamla Road, Nagpur",
  hours: "Mon-sat, 11:00 AM - 07:00 PM",
  phones: [
    { label: "+91 99212 77699", href: "tel:+919921277699" },
    { label: "+91 96890 96257", href: "tel:+919689096257" },
  ],
  email: "devprathconstructions@gmail.com",
};

/* ---------- small building blocks (Tailwind only) ---------- */

const ColumnLabel = ({ children }) => (
  <div className="mb-5 sm:mb-6">
    <h3 className="text-sm font-semibold tracking-wide text-[#1F1E1C]">
      {children}
    </h3>
    {/* gold rule stretches when the column is hovered */}
    <span className="mt-2 block h-[2px] w-8 bg-[#B9935A] transition-all duration-500 ease-out group-hover/col:w-14 motion-reduce:transition-none" />
  </div>
);

/* Icon in a soft circle that fills gold on hover */
const InfoRow = ({ icon: Icon, children, align = "center" }) => (
  <div
    className={`group/row flex gap-3.5 ${align === "start" ? "items-start" : "items-center"
      }`}
  >
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#B9935A]/10 text-[#B9935A] transition-all duration-300 group-hover/row:scale-110 group-hover/row:bg-[#B9935A] group-hover/row:text-white motion-reduce:transition-none motion-reduce:group-hover/row:scale-100">
      <Icon className="h-4 w-4" />
    </span>
    <div className="text-sm font-medium leading-relaxed text-[#4A453E]">
      {children}
    </div>
  </div>
);

/* Link with gold underline that grows from the left */
const HoverLink = ({ as: Tag = "a", className = "", children, ...props }) => (
  <Tag
    {...props}
    className={`relative inline-block transition-all duration-300 hover:translate-x-1 hover:text-[#B9935A] focus-visible:translate-x-1 focus-visible:text-[#B9935A] focus-visible:outline-none after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#B9935A] after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:after:scale-x-100 motion-reduce:transition-none motion-reduce:hover:translate-x-0 motion-reduce:after:transition-none ${className}`}
  >
    {children}
  </Tag>
);

/* ---------- footer ---------- */

export const Footer = () => {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  // Reveal once when the footer scrolls into view
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // delay must be a full static class so Tailwind can detect it
  const reveal = (delay) =>
    `transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${delay} ${shown ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
    }`;

  return (
    <footer
      ref={ref}
      className="relative overflow-hidden bg-[#F2EDE4] font-body text-[#1F1E1C]"
    >
      {/* gold line that draws across the top */}
      <span
        className={`absolute inset-x-0 top-0 h-[2px] origin-left bg-gradient-to-r from-[#B9935A] via-[#B9935A]/60 to-transparent transition-transform duration-[1200ms] ease-out motion-reduce:scale-x-100 motion-reduce:transition-none ${shown ? "scale-x-100" : "scale-x-0"
          }`}
      />

      <div className="mx-auto w-full max-w-[1400px] px-5 pb-6  sm:px-10 sm:pt-8 lg:px-14  xl:px-20">
        <div className="grid grid-cols-1 items-start gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-x-10">
          {/* Brand */}
          <div className={`sm:col-span-2 lg:col-span-4 ${reveal("delay-0")}`}>
            <Link to="/" className="group/logo block w-fit">
              <img
                src={logo}
                alt="Devprath Constructions LLP"
                className="h-24 w-auto max-w-[300px] object-contain object-left transition-transform duration-500 group-hover/logo:scale-[1.04] sm:h-28 sm:max-w-[360px]"
              />
            </Link>
            <p className="max-w-sm text-[#4A453E] !font-bold text-xl sm:text-xl ">
              Devprath Constructions LLP builds quality homes in Nagpur with
              strong construction and MahaRERA-compliant transparency.
            </p>
            <div className="mt-7 w-full max-w-[240px]">
              <SocialConnectBar
                containerClassName="w-full flex items-center justify-between"
                iconSizeClass="w-5 h-5 sm:w-6 sm:h-6"
              />
            </div>
          </div>

          {/* Explore */}
          <div className={`group/col lg:col-span-2 ${reveal("delay-100")}`}>
            <ColumnLabel>Explore</ColumnLabel>
            <ul className="space-y-4">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.id} className="text-sm font-bold text-[#4A453E]">
                  <HoverLink as={Link} to={link.path}>
                    {link.title}
                  </HoverLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={`group/col lg:col-span-3 ${reveal("delay-200")}`}>
            <ColumnLabel>Contact</ColumnLabel>
            <div className="space-y-5 ">
              {OFFICE.phones.map((phone) => (
                <InfoRow key={phone.href} icon={Phone}>
                  <HoverLink href={phone.href} className="text-sm font-bold text-[#4A453E]">
                    {phone.label}
                  </HoverLink>
                </InfoRow>
              ))}
              <InfoRow icon={Mail}>
                <HoverLink href={`mailto:${OFFICE.email}`} className="text-sm font-bold text-[#4A453E]">
                  {OFFICE.email}
                </HoverLink>
              </InfoRow>
            </div>
          </div>

          {/* Visit */}
          <div className={`group/col lg:col-span-3 ${reveal("delay-300")}`}>
            <ColumnLabel>Visit us</ColumnLabel>
            <address className="space-y-5 not-italic">
              <InfoRow icon={MapPin} align="start">
                <span className="text-sm font-bold text-[#4A453E]">
                  {OFFICE.address}
                </span>
              </InfoRow>
              <InfoRow icon={Clock} >
                <span className="text-sm font-bold text-[#4A453E]">
                  {OFFICE.hours}
                </span>

              </InfoRow>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className={`mt-4 border-t border-[#1F1E1C]/10 pt-6 text-center ${reveal(
            "delay-500"
          )}`}
        >
          <p className="!text-[13px] !font-bold tracking-wide text-[#554F47] sm:text-xs">
            © {new Date().getFullYear()} Devprath Constructions LLP. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;