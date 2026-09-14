
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const itemAnimation = {
    hidden: {
        opacity: 0,
        y: 16,
    },
    visible: {
        opacity: 1,
        y: 0,
    },
};

export default function CTAButton({
    to,
    href,
    download,
    label = "ABOUT US",
    className = "",
}) {
    const content = (
        <>
            {/* Burgundy hover background */}
            <span
                className="
                    absolute
                    inset-0
                    z-0
                    origin-left
                    scale-x-0
                    bg-brand-primary
                    transition-transform
                    duration-700
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    group-hover:scale-x-100
                "
            />

            {/* Main button */}
            <span
                className="
                    relative
                    z-10
                    flex
                    h-full
                    w-full
                    items-center
                    justify-between
                    border
                    border-brand-primary
                    bg-brand-black1
                    px-6
                    transition-all
                    duration-500
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    group-hover:border-brand-primary
                "
            >
                {/* Label */}
                <span
                    className="
                        relative
                        overflow-hidden
                        font-sans
                        text-[13px]
                        font-bold
                        uppercase
                        tracking-[0.08em]
                        text-brand-primary
                        transition-colors
                        duration-500
                        group-hover:text-white
                    "
                >
                    {label}
                </span>

                {/* Arrow */}
                <span
                    className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        overflow-hidden
                        border
                        border-brand-primary
                        transition-all
                        duration-500
                        group-hover:border-white/40
                        group-hover:bg-white/10
                    "
                >
                    <ArrowUpRight
                        size={17}
                        strokeWidth={1.4}
                        className="
                            text-brand-champagne
                            transition-all
                            duration-500
                            ease-[cubic-bezier(0.22,1,0.36,1)]
                            group-hover:translate-x-[2px]
                            group-hover:-translate-y-[2px]
                            group-hover:text-white
                        "
                    />
                </span>
            </span>

            {/* Burgundy architectural accent */}
            <span
                className="
                    absolute
                    bottom-[-5px]
                    left-0
                    h-[1px]
                    w-1/2
                    bg-brand-primary
                    transition-all
                    duration-700
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    group-hover:w-full
                "
            />
        </>
    );

    const buttonClass = `
        group
        relative
        inline-flex
        h-[56px]
        w-[230px]
        items-center
        justify-center
        overflow-visible
        ${className}
    `;

    return (
        <motion.div
            variants={itemAnimation}
            transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            {to ? (
                <Link to={to} className={buttonClass}>
                    {content}
                </Link>
            ) : (
                <a
                    href={href}
                    download={download}
                    className={buttonClass}
                >
                    {content}
                </a>
            )}
        </motion.div>
    );
}
