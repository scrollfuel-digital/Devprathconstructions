import React from "react";
import CTAButton from "./CTAButton";
import ScrollReveal from "./ScrollReveal";

export const FinalContactSection = ({
  eyebrow,
  headingLead,
  headingAccent,
  headingBreak = false,
  description,
  buttons = [],
  footer,
}) => {
  return (
    <section className="relative overflow-hidden border-t border-[#B9935A]/25 bg-[#F2EDE4] py-14 text-[#1F1E1C] sm:py-16 lg:py-20">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[220px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B9935A]/5 blur-3xl sm:h-[300px] sm:w-[500px] lg:h-[350px] lg:w-[600px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 text-center sm:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            {eyebrow && (
              <span className="arch-eyebrow text-center mb-3 sm:mb-4 block">
                {eyebrow}
              </span>
            )}

            <h2 className="mx-auto max-w-3xl text-center font-display text-4xl font-bold leading-[1.15] tracking-tight text-[#1F1E1C] sm:text-5xl lg:text-6xl">
              {headingLead}
              {headingBreak ? <br /> : " "}
              <span className="font-bold text-brand-primary">{headingAccent}</span>
            </h2>

            <p className="lead-body !mx-auto !mt-5 max-w-2xl text-center sm:mt-6 sm:text-base lg:text-lg">
              {description}
            </p>

            <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:mt-8 sm:flex-row sm:gap-5">
              {buttons.map((btn) => (
                <CTAButton key={btn.to || btn.label} to={btn.to} label={btn.label} variant={btn.variant} />
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