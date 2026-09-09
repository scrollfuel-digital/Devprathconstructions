import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { magicalBehindVariant } from "../../constants/magicalBehindVariant";

const introParagraphs = [
    "Devprath Constructions LLP is a trusted real estate developer in Nagpur, focused on creating thoughtfully planned residential communities that bring together modern architecture, quality construction, and comfortable living.",
    "Founded on 28th November 2018 by Mr. Hemal H. Nadiyana and Dr. Sunil N. Patil, Devprath Constructions LLP brings together extensive experience in the construction and real estate industry. Their professional journey includes the establishment of V4 Developers in 2005 and the successful completion of several residential and landmark projects in Nagpur.",
    "With a clear focus on quality, thoughtful planning, and customer satisfaction, Devprath Constructions continues to develop residential spaces designed for modern families while maintaining a strong commitment to structural quality, transparency, and responsible construction practices.",
];

const visionPoints = [
    "Redefining residential living in Nagpur with premium, innovative homes.",
    "Delivering uncompromising construction quality and absolute customer satisfaction.",
    "Building thriving, secure communities where modern families can grow.",
];

const missionPoints = [
    "Executing thoughtfully planned projects with smart architectural layouts.",
    "Elevating modern living experiences through premium lifestyle amenities.",
    "Ensuring ethical business practices, transparent communication, and timely delivery.",
];

function BulletList({ points }) {
    return (
        <ul className="space-y-4">
            {points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                    <span className="w-3 h-px bg-[#B9935A] mt-3 flex-shrink-0" />
                    <span className="font-body text-sm sm:text-base text-[#6D675E] font-light leading-relaxed">{point}</span>
                </li>
            ))}
        </ul>
    );
}

function ValueBlock({ title, points, bordered, motionProps }) {
    return (
        <motion.div
            {...motionProps}
            className={
                bordered
                    ? "space-y-5 md:border-l md:pl-12 lg:pl-16 border-t md:border-t-0 pt-8 md:pt-0 border-[#B9935A]/30"
                    : "space-y-5"
            }
        >
            <h3 className="font-display text-2xl sm:text-3xl font-normal text-[#1F1E1C] uppercase tracking-[0.15em] w-fit border-b border-[#B9935A]/30 pb-3">
                {title}
            </h3>
            <BulletList points={points} />
        </motion.div>
    );
}

export default function AboutInfo() {
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
            <div className="w-full max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16">
                {/* Intro copy */}
                <motion.h2
                    {...motionProps}
                    className="font-display text-3xl sm:text-5xl lg:text-6xl font-normal text-[#1F1E1C] tracking-tight text-center mb-10 sm:mb-12"
                >
                    Creating Communities. Building Legacies.
                </motion.h2>

                <div className="max-w-4xl mx-auto text-center space-y-6">
                    {introParagraphs.map((paragraph, idx) => (
                        <motion.p
                            key={idx}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={variants}
                            transition={{ delay: idx * 0.08 }}
                            className="font-body text-sm sm:text-base text-[#6D675E] font-light leading-relaxed"
                        >
                            {paragraph}
                        </motion.p>
                    ))}
                </div>

                {/* Mission & Vision */}
                <div className="mt-16 sm:mt-20 pt-16 sm:pt-20 border-t border-[#B9935A]/20">
                    <motion.h2
                        {...motionProps}
                        className="font-display text-3xl sm:text-5xl lg:text-6xl font-normal text-[#1F1E1C] tracking-[0.05em] uppercase text-center mb-12 sm:mb-16"
                    >
                        Mission &amp; <span className="text-[#B9935A]">Vision</span>
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                        <ValueBlock title="Our Vision" points={visionPoints} motionProps={motionProps} />
                        <ValueBlock
                            title="Our Mission"
                            points={missionPoints}
                            bordered
                            motionProps={motionProps}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}