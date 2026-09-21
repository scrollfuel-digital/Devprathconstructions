import React from "react";
import aboutHeroVideo from "../../assets/videos/about_hero_animation_.mp4";
import heroTextImg from "../../assets/AboutUsImg/home_page_text.png";
import { SocialLinks } from "@/components/ui/social-links";

const ABOUT_SOCIAL_LINKS = [
    { platform: "facebook", href: "https://www.facebook.com/devprathconstructions/" },
    { platform: "instagram", href: "https://www.instagram.com/devprathconstructions/" },
    { platform: "whatsapp", href: "https://wa.me/919923203281?text=Hi%20Devprath%20Team,%20I%20am%20interested%20in%20Mangalmurti%20Residency." },
    { platform: "mail", href: "mailto:devprathconstructions@gmail.com" },
    { platform: "phone", href: "tel:+919923203281" },
];

export default function Hero() {
    return (
        <section className="relative w-full h-[100dvh] overflow-hidden">
            <video
                src={aboutHeroVideo}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
            />

            {/* Subtle low-opacity overlay over video */}
            <div className="absolute inset-0 bg-black/20 pointer-events-none z-[1]" />

            <img
                src={heroTextImg}
                alt="Devprath Constructions"
                style={{ filter: "drop-shadow(0 0 1.5px #000) drop-shadow(0 2px 8px rgba(0,0,0,0.9))" }}
                className="absolute bottom-16 right-4 sm:bottom-8 sm:right-10 md:bottom-12 md:right-14 w-40 sm:w-60 md:w-72 lg:w-80 object-contain z-10 pointer-events-none brightness-125 select-none"
            />

            <SocialLinks links={ABOUT_SOCIAL_LINKS} />
        </section>
    );
}