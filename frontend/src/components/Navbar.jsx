import React, { useState } from "react";
import logo from "../assets/logo/logo.png";
import { Link, useLocation } from "react-router-dom";
import CTAButton from "./common/CTAButton";
import { NAV_LINKS } from "../constants/navigationData";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const isLinkActive = (path) => {
    if (path === "/") return pathname === "/";

    if (path === "/about-us") {
      return ["/about-us", "/aboutus"].includes(pathname);
    }

    if (path === "/projects" || path === "/project") {
      return [
        "/projects",
        "/project",
        "/completed-projects",
        "/completed-project",
      ].includes(pathname);
    }

    return pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 z-[9999] w-full border-b border-gold/20 bg-cream/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-16">
        <Link to="/" className="flex shrink-0 items-center">
          <img
            src={logo}
            alt="Devprath Constructions LLP"
            className="h-16 w-auto object-contain sm:h-[68px] lg:h-[72px]"
          />
        </Link>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-7 xl:gap-9">
            {NAV_LINKS.map((item) => (
              <NavItem
                key={item.id}
                item={item}
                isActive={isLinkActive(item.path)}
              />
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <CTAButton
            to="/contact"
            label="ENQUIRE"
          />
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="p-2 text-text-dark lg:hidden"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          <span className="material-symbols-outlined text-3xl">
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-gold/20 bg-cream px-5 py-6 lg:hidden">
          <nav className="flex flex-col">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`border-b border-text-dark/10 py-4 font-body text-xs uppercase tracking-[0.2em] transition-colors ${isLinkActive(item.path)
                  ? "font-semibold text-gold"
                  : "text-text-dark hover:text-gold"
                  }`}
              >
                {item.title}
              </Link>
            ))}

            <CTAButton
              to="/contact"
              label="ENQUIRE →"
              className="mt-5 w-full"
            />
          </nav>
        </div>
      )}
    </header>
  );
}

function NavItem({ item, isActive }) {
  return (
    <li>
      <Link
        to={item.path}
        className={`relative pb-1 font-body text-xs font-medium uppercase tracking-[0.2em] transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:bg-gold after:content-[''] after:transition-all after:duration-300 ${isActive
          ? "font-semibold text-gold after:w-full"
          : "text-text-dark hover:text-gold after:w-0 hover:after:w-full"
          }`}
      >
        {item.title}
      </Link>
    </li>
  );
}












// import React, { useEffect, useState } from "react";
// import logo from "../assets/logo/logo.png";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { NAV_LINKS } from "../constants/navigationData";

// const SCROLL_OFFSET = 50;

// const HERO_ROUTES = [
//   "/",
//   "/about-us",
//   "/aboutus",
//   "/project",
//   "/projects",
//   "/completed-projects",
//   "/completed-project",
// ];

// export default function Navbar({ onBookConsultation }) {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isVisible, setIsVisible] = useState(true);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const location = useLocation();
//   const navigate = useNavigate();

//   const hasHero = HERO_ROUTES.includes(location.pathname);
//   const isTransparent = !isScrolled && hasHero;
//   const shouldShow = isVisible || mobileMenuOpen;

//   useEffect(() => {
//     let lastScrollY = window.scrollY;

//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       const diff = currentScrollY - lastScrollY;

//       setIsScrolled(currentScrollY > SCROLL_OFFSET);

//       if (currentScrollY <= SCROLL_OFFSET) {
//         setIsVisible(true);
//       } else if (diff < 0) {
//         setIsVisible(true);
//       } else if (diff > 6 && currentScrollY > 100) {
//         setIsVisible(false);
//       }

//       lastScrollY = currentScrollY;
//     };

//     handleScroll();
//     window.addEventListener("scroll", handleScroll, { passive: true });

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     setMobileMenuOpen(false);
//     setIsVisible(true);
//     setIsScrolled(window.scrollY > SCROLL_OFFSET);
//   }, [location.pathname]);

//   const handleEnquireClick = () => {
//     if (onBookConsultation) {
//       onBookConsultation();
//     } else {
//       navigate("/contact");
//     }
//   };

//   const isLinkActive = (path) => {
//     const currentPath = location.pathname;

//     if (path === "/") {
//       return currentPath === "/";
//     }

//     if (path === "/about-us") {
//       return ["/about-us", "/aboutus"].includes(currentPath);
//     }

//     if (path === "/projects" || path === "/project") {
//       return [
//         "/projects",
//         "/project",
//         "/completed-projects",
//         "/completed-project",
//       ].includes(currentPath);
//     }

//     return currentPath === path;
//   };

//   return (
//     <header
//       className={`site-header fixed left-0 top-0 z-[9999] w-full transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
//         shouldShow ? "translate-y-0" : "-translate-y-full"
//       } ${
//         isTransparent && !mobileMenuOpen
//           ? "bg-transparent py-0"
//           : "border-b border-gold/20 bg-cream/95 py-0 backdrop-blur-md shadow-sm"
//       } ${
//         isTransparent && !mobileMenuOpen
//           ? "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:-z-10 before:h-40 before:bg-gradient-to-b before:from-black/55 before:via-black/25 before:to-transparent"
//           : ""
//       }`}
//     >
//       <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 sm:px-10 lg:px-16">
//         <Link to="/" className="flex shrink-0 items-center">
//           <img
//             src={logo}
//             alt="Devprath Constructions LLP"
//             className={`w-auto object-contain object-left transition-all duration-300 ${
//               isScrolled
//                 ? "h-66 max-h-[72px] sm:h-40 sm:max-h-[80px] lg:h-44"
//                 : "h-50 max-h-[88px] sm:h-40 sm:max-h-[106px] lg:h-44"
//             }`}
//           />
//         </Link>

//         <nav className="hidden lg:block">
//           <ul className="flex items-center gap-8">
//             {NAV_LINKS.map((item) => (
//               <NavItem
//                 key={item.id}
//                 item={item}
//                 isActive={isLinkActive(item.path)}
//                 isTransparent={isTransparent}
//               />
//             ))}
//           </ul>
//         </nav>

//         <div className="hidden items-center md:flex">
//           <button
//             type="button"
//             onClick={handleEnquireClick}
//             className="border border-gold bg-gold px-6 py-2.5 font-body text-xs font-semibold uppercase tracking-[0.2em] text-cream shadow-sm transition-all duration-300 hover:border-gold-dark hover:bg-gold-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold active:scale-98 active:bg-gold"
//           >
//             Enquire &rarr;
//           </button>
//         </div>

//         <button
//           type="button"
//           onClick={() => setMobileMenuOpen((open) => !open)}
//           className={`cursor-pointer p-2 transition-colors duration-300 focus:outline-none lg:hidden ${
//             isTransparent && !mobileMenuOpen
//               ? "text-cream"
//               : "text-text-dark"
//           }`}
//           aria-label="Toggle menu"
//         >
//           <span className="material-symbols-outlined text-3xl">
//             {mobileMenuOpen ? "close" : "menu"}
//           </span>
//         </button>
//       </div>

//       {mobileMenuOpen && (
//         <div className="flex flex-col gap-4 border-b border-gold/20 bg-cream px-6 py-8 shadow-xl lg:hidden">
//           {NAV_LINKS.map((item) => {
//             const active = isLinkActive(item.path);

//             return (
//               <Link
//                 key={item.id}
//                 to={item.path}
//                 onClick={() => setMobileMenuOpen(false)}
//                 className={`border-b border-text-dark/10 py-2 font-body text-xs uppercase tracking-[0.2em] transition-colors duration-300 ${
//                   active
//                     ? "font-bold text-gold"
//                     : "text-text-dark hover:text-gold"
//                 }`}
//               >
//                 {item.title}
//               </Link>
//             );
//           })}

//           <button
//             type="button"
//             onClick={() => {
//               setMobileMenuOpen(false);
//               handleEnquireClick();
//             }}
//             className="mt-3 w-full cursor-pointer border border-gold bg-gold py-3 text-xs font-semibold uppercase tracking-[0.2em] text-cream transition-colors hover:bg-gold-dark active:bg-gold"
//           >
//             Enquire &rarr;
//           </button>
//         </div>
//       )}
//     </header>
//   );
// }

// function NavItem({ item, isActive, isTransparent }) {
//   const textColor = isTransparent
//     ? isActive
//       ? "text-gold-light font-semibold after:w-full after:bg-gold-light"
//       : "text-cream/90 hover:text-gold-light after:w-0 hover:after:w-full after:bg-gold-light"
//     : isActive
//     ? "text-gold font-semibold after:w-full after:bg-gold"
//     : "text-text-dark hover:text-gold after:w-0 hover:after:w-full after:bg-gold";

//   const baseClasses = `relative pb-1 font-body text-xs font-medium uppercase tracking-[0.2em] transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-px after:content-[''] after:transition-all after:duration-300 ${textColor}`;

//   return (
//     <li>
//       <Link to={item.path} className={baseClasses}>
//         {item.title}
//       </Link>
//     </li>
//   );
// }