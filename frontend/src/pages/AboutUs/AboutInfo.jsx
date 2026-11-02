import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { magicalBehindVariant } from "../../constants/magicalBehindVariant";
import aboutimage from "../../assets/AboutUsImg/HomePage.jpg";

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

const motionProps = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.1 },
};

const ValueBlock = ({ title, points, bordered }) => {
    const shouldReduce = useReducedMotion();
    const variants = magicalBehindVariant(shouldReduce);

    return (
        <motion.div
            {...motionProps}
            variants={variants}
            className={`space-y-5 ${
                bordered
                    ? "md:border-l md:pl-12 lg:pl-16 border-t md:border-t-0 pt-8 md:pt-0 border-[#B9935A]/30"
                    : ""
            }`}
        >
            <h3 className="text-2xl sm:text-3xl uppercase tracking-[0.15em] w-fit border-b border-[#B9935A]/30 pb-3 text-balance">
                {title}
            </h3>

            <ul className="space-y-4">
                {points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                        <span className="w-3 h-px bg-[#B9935A] mt-3 shrink-0" />

                        <span className="font-sans text-lg font-bold text-text-light leading-relaxed">
                            {point}
                        </span>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
};

export function AboutIntro() {
    const shouldReduce = useReducedMotion();
    const variants = magicalBehindVariant(shouldReduce);

    return (
        <section className="pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-10 sm:pb-14 md:pb-16 lg:pb-20 bg-[#FAF7F2]">
            <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center">

                    {/* Left Column: Portrait Image with Light Glassmorphic Overlay Caption */}
                    <motion.div
                        {...motionProps}
                        variants={variants}
                        className="w-full lg:col-span-5 flex justify-center"
                    >
                        <div className="relative aspect-[400/559] w-full max-w-[360px] sm:max-w-[420px] lg:max-w-none rounded-xl sm:rounded-2xl overflow-hidden shadow-md sm:shadow-lg shadow-black/5 bg-[#F2EDE4]">
                            <img
                                src={aboutimage}
                                alt="Grand Launch of Sample Flat at Mangalmurti Residency with Mr. Sunil Duddalwar and Mr. Harikishan Nadiyana"
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />

                            {/* Light Glassmorphic Caption Card */}
                            <div className="absolute inset-x-2.5 bottom-2.5 sm:inset-x-3.5 sm:bottom-3.5 bg-[#FAF7F2]/95 backdrop-blur-md border border-[#B9935A]/35 rounded-lg sm:rounded-xl px-3 py-2 sm:px-4 sm:py-2.5 shadow-sm text-center">
                                <span className="block text-xs sm:text-sm md:text-base font-semibold text-[#1F1E1C] leading-snug tracking-tight text-balance">
                                    Grand Launch of Flat at Mangalmurti&nbsp;Residency
                                </span>

                                <span className="block text-[11px] sm:text-xs md:text-sm font-medium text-[#8F6E3B] leading-snug tracking-tight mt-0.5 sm:mt-1 text-balance">
                                    Mr. Sunil Duddalwar &amp; Mr. Harikishan&nbsp;Nadiyana
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Eyebrow, Heading, and Formatted Narrative */}
                    <motion.div
                        {...motionProps}
                        variants={variants}
                        transition={{ delay: 0.1 }}
                        className="w-full lg:col-span-7 flex flex-col justify-center max-w-xl md:max-w-2xl lg:max-w-none mx-auto lg:mx-0"
                    >
                        <span className="block text-xs sm:text-[13px] font-bold uppercase tracking-[0.18em] text-gold mb-1.5 sm:mb-2">
                            Meet Devprath Constructions
                        </span>

                        <h2 className="leading-tight text-balance mb-3 sm:mb-4">
                            <span className="block font-display whitespace-nowrap text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[46px] tracking-wide uppercase font-bold text-[#1F1E1C] leading-tight">
                                Your Trusted Partner
                            </span>

                            <span className="flex items-baseline gap-2 sm:gap-3 mt-1 sm:mt-1.5 whitespace-nowrap">
                                <span className="block font-display whitespace-nowrap text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[46px] tracking-wide uppercase font-bold text-[#1F1E1C] leading-tight">
                                    in
                                </span>

                                <span className="font-sans text-4xl sm:text-4xl lg:text-4xl tracking-[0.12em] uppercase font-bold text-gold leading-tight">
                                    Building&nbsp;Dreams
                                </span>
                            </span>
                        </h2>

                        <div
                            lang="en"
                            className="space-y-3.5 sm:space-y-4"
                        >
                            {/* Paragraph 1: Editorial Lead */}
                            <p className="font-sans text-sm text-justify leading-relaxed text-text-light font-semibold text-pretty">
                                Devprath Constructions LLP is a partnership firm led by Mr. Hemal Nadiyana and Mr. Sunil Patil — friends and professional partners for over 20 years, bringing 15 years of construction industry expertise to every&nbsp;project.
                            </p>

                            {/* Paragraphs 2 & 3: Architectural Journey Block with Golden Vertical Line */}
                            {/* <div className="border-l-2 border-[#B9935A]/35 pl-4 sm:pl-5 space-y-3 sm:space-y-3.5 my-1"> */}
                                <p className="font-sans text-sm text-justify font-semibold leading-relaxed text-text-light text-pretty">
                                    Mr. Hemal Nadiyana, founder of Devang Developers, and Mr. Sunil Patil jointly founded V4 Developers in 2005, going on to deliver several landmark projects across Nagpur with strong customer trust and&nbsp;recognition.
                                </p>

                                <p className="font-sans text-sm text-justify font-semibold leading-relaxed text-text-light text-pretty">
                                    In 2018, the duo founded Devprath Constructions LLP (registered 28th November 2018) to focus on township developments, bringing innovative, high-quality communities to Nagpur&apos;s real estate&nbsp;market.
                                </p>
                            {/* </div> */}

                            {/* Paragraph 4: Trust & Ethos */}
                            <p className="font-sans text-sm text-justify font-semibold leading-relaxed text-text-light text-pretty pt-0.5">
                                Built on integrity, commitment, and hard work, Devprath Constructions LLP has earned the trust of hundreds of homeowners across&nbsp;Nagpur.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export function MissionVisionSection() {
    const shouldReduce = useReducedMotion();
    const variants = magicalBehindVariant(shouldReduce);

    return (
        <section className="pt-8 sm:pt-12 pb-16 sm:pb-24 bg-[#FAF7F2]">
            <div className="w-full max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 border-t border-[#B9935A]/20 pt-16 sm:pt-20">

                <motion.h2
                    {...motionProps}
                    variants={variants}
                    className="text-3xl sm:text-5xl lg:text-6xl tracking-[0.05em] uppercase text-center mb-12 sm:mb-16"
                >
                    Mission &amp; <span className="font-bold text-gold">Vision</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                    <ValueBlock
                        title="Our Vision"
                        points={visionPoints}
                    />

                    <ValueBlock
                        title="Our Mission"
                        points={missionPoints}
                        bordered
                    />
                </div>
            </div>
        </section>
    );
}

export default AboutIntro;