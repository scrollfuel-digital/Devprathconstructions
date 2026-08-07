/**
 * Centralized Navigation Data for Navbar & Footer
 * Eliminates redundant hardcoded links and JSX duplication.
 */

export const NAV_LINKS = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "About", path: "/about-us" },
  { id: 3, title: "Projects", path: "/projects" },
  { id: 4, title: "Gallery", path: "/gallery" },
  { id: 5, title: "Blog", path: "/blog" },
];

export const FOOTER_QUICK_LINKS = [
  { id: "q-1", title: "Home", path: "/" },
  { id: "q-2", title: "Projects", path: "/projects" },
  { id: "q-3", title: "About Us", path: "/about-us" },
  { id: "q-4", title: "Gallery", path: "/gallery" },
  { id: "q-5", title: "Contact Us", path: "/contact" },
  { id: "q-6", title: "Blogs", path: "/blog" },
];

export const FOOTER_LANDMARK_PROJECTS = [
  { id: "p-1", title: "Mangalmurti Residency (Nagpur)", path: "/projects" },
  { id: "p-2", title: "Commercial Outlets", path: "/projects#phases" },
  { id: "p-3", title: "Luxury 2BHK Homes", path: "/projects#phases" },
];

export const FOOTER_LEGAL_LINKS = [
  { id: "l-1", title: "Privacy Policy", path: "/privacy" },
  { id: "l-2", title: "Terms of Service", path: "/terms" },
];
