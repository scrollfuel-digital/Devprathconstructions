import React from "react";
import { SocialLinks } from "@/components/ui/social-links";
import hero_img from "../../assets/AboutUsImg/mmr2.png";

const ABOUT_SOCIAL_LINKS = [
  { platform: "facebook", href: "https://www.facebook.com/devprathconstructions/" },
  { platform: "instagram", href: "https://www.instagram.com/devprathconstructions/" },
  {
    platform: "whatsapp",
    href: "https://wa.me/919923203281?text=Hi%20Devprath%20Team,%20I%20am%20interested%20in%20Mangalmurti%20Residency",
  },
  { platform: "mail", href: "mailto:devprathconstructions@gmail.com" },
  { platform: "phone", href: "tel:+919921277699" },
];

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] w-full overflow-hidden bg-[var(--text-charcoal)]">

      {/* Full-screen background image */}
      <img
        src={hero_img}
        alt="skyline MMR"
        className="absolute inset-0 -z-30 h-full w-full object-cover object-center"
        fetchpriority="high"
        decoding="async"
      />

      {/* Warm charcoal wash across the whole image (no blue/navy) */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[var(--text-charcoal)]/35" />

      {/* Stronger charcoal gradient at the bottom for text legibility */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-[var(--text-charcoal)]/85 via-[var(--text-charcoal)]/30 to-transparent" />

      {/* Content: centered horizontally and vertically */}
      <div className="container-custom relative flex w-full items-center justify-center text-center">
        <div className="flex max-w-3xl flex-col items-center">
          {/* Gold rule */}
          <div className="mb-1 h-px  w-36 bg-[var(--color-accent)]" />

          <h1
            style={{
              color: "var(--color-bg)",
              fontSize: "clamp(2.75rem, 7vw + 0.5rem, 6rem)",
              lineHeight: 1.05,
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            About Us
          </h1>

          <p
            className="mt-5 max-w-xl text-center"
            style={{ color: "var(--color-accent-light)", fontWeight: 500 }}
          >
            Devprath Constructions LLP, Nagpur
          </p>
        </div>

        {/* Social links, bottom-left on larger screens */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 sm:bottom-20 sm:left-10 sm:translate-x-0">
          <SocialLinks links={ABOUT_SOCIAL_LINKS} />
        </div>
      </div>
    </section>
  );
}