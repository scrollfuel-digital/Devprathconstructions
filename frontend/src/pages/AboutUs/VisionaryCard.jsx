import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import leaderHemal from "../../assets/AboutUsImg/hemal.jpg";
import leaderSunil from "../../assets/AboutUsImg/sunil.jpeg";
import { magicalBehindVariant } from "../../constants/magicalBehindVariant";

const leaders = [
    {
        name: "Dr. Sunil N. Patil",
        role: "Director & Co-Founder",
        image: leaderSunil,
        bio: "Championing structural strength, material standards, and strategic growth. Committed to delivering homes that stand the test of time.",
        quote: "Excellence is never an accident; it is always the result of high\u00A0intention.",
    },
    {
        name: "Mr. Hemal H. Nadiyana",
        role: "Director & Co-Founder",
        image: leaderHemal,
        bio: "Fostering architectural creativity, customer-first service, and modern living space design across all our premier residential developments.",
        quote: "We don't just build apartments; we craft spaces where families\u00A0thrive.",
    },
];

function VisionaryCard({ leader, motionProps }) {
    return (
        <motion.div {...motionProps}>
            <div className="flex items-center gap-5 sm:gap-6 mb-6">
                <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 object-cover shrink-0"
                    loading="lazy"
                />
                <div>
                    <h3 className="text-2xl sm:text-3xl tracking-tight mb-1 text-balance">
                        {leader.name}
                    </h3>
                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-gold block mb-1">
                        {leader.role}
                    </span>
                </div>
            </div>

            <p className="text-sm sm:text-base text-muted font-light leading-relaxed mb-6 text-pretty">
                {leader.bio}
            </p>

            <blockquote className="pt-5 border-t border-[#B9935A]/25">
                <p className="font-display text-lg sm:text-xl text-[#1F1E1C] italic font-normal leading-relaxed text-balance">
                    &ldquo;{leader.quote}&rdquo;
                </p>
            </blockquote>
        </motion.div>
    );
}

export default function VisionarySection() {
    const shouldReduceMotion = useReducedMotion();
    const variants = magicalBehindVariant(shouldReduceMotion);
    const motionProps = {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.1 },
        variants,
    };

    return (
        <section className="py-16 sm:py-24 bg-[#FAF7F2]">
            <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
                <motion.h2
                    {...motionProps}
                    className="text-3xl sm:text-5xl lg:text-6xl tracking-[0.1em] uppercase text-center mb-16 sm:mb-20 text-balance"
                >
                    <span className="font-bold text-gold">Our</span>{" "}
                    <span>Visionaries</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
                    {leaders.map((leader) => (
                        <VisionaryCard key={leader.name} leader={leader} motionProps={motionProps} />
                    ))}
                </div>
            </div>
        </section>
    );
}