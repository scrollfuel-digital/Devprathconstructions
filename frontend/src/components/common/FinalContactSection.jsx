import React from "react";
import CTAButton from "./CTAButton";
import ScrollReveal from "./ScrollReveal";

export const FinalContactSection = ({
  eyebrow,
  headingLead,
  headingAccent,
  headingBreak = false,
  description,
  buttons,
  footer,
}) => {
  return (
    <section className="relative overflow-hidden border-t border-[#B9935A]/25 bg-[#F2EDE4] py-10 text-[#1F1E1C] sm:py-14 lg:py-16">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[220px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B9935A]/5 blur-3xl sm:h-[300px] sm:w-[500px] lg:h-[350px] lg:w-[600px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 text-center sm:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.25em] text-[#B9935A] sm:text-xs sm:tracking-[0.3em]">
              {eyebrow}
            </span>

            <h2 className="mt-5 font-display text-4xl font-normal leading-[1.1] tracking-tight text-[#1F1E1C] sm:mt-6 sm:text-6xl lg:text-7xl">
              {headingLead}
              {headingBreak ? <br /> : " "}
              <span className="font-light italic text-[#8F6E3B]">{headingAccent}</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl font-body text-sm font-light leading-relaxed text-[#6D675E] sm:mt-6 sm:text-base lg:text-lg">
              {description}
            </p>

            <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:mt-8 sm:flex-row sm:gap-5">
              {buttons.map((btn) => (
                <CTAButton key={btn.to} to={btn.to} label={btn.label} variant={btn.variant} />
              ))}
            </div>

            {footer && (
              <div className="mt-7 text-[9px] uppercase tracking-[0.16em] text-[#948C81] sm:mt-8 sm:text-[11px] sm:tracking-[0.2em]">
                {footer}
              </div>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default FinalContactSection;