import React from "react";
import CTAButton from "../../../components/common/CTAButton";
import ScrollReveal from "../../../components/common/ScrollReveal";

export const FinalCtaSection = ({ onBookConsultation }) => {
  return (
    <section className="relative overflow-hidden border-t border-brand-primary/25 bg-cream py-10 text-black sm:py-28 lg:py-36">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[220px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-primary/5 blur-3xl sm:h-[300px] sm:w-[500px] lg:h-[350px] lg:w-[600px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 text-center sm:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="block text-[10px] !font-bold uppercase tracking-[0.25em] text-brand-primary sm:text-sm sm:tracking-[0.3em]">
              Ready to Discover
            </span>

            <h2 className="mt-5 font-display text-4xl !font-bold leading-[1.1] tracking-tight text-black sm:mt-6 sm:text-6xl lg:text-7xl">
              Find your place in{" "}
              <span className="!font-semibold  text-brand-maroon">
                what we're building.
              </span>
            </h2>

            <p className="mx-auto !mt-5 max-w-5xl font-body text-sm !font-bold leading-relaxed text-muted sm:mt-6 sm:text-base lg:text-lg">
              Whether you are exploring residential homes at Mangalmurti
              Residency or planning a personal site walkthrough, our founding
              principals are here to guide you.
            </p>

            <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:mt-8 sm:flex-row sm:gap-5">
              <CTAButton
                to="/contact"
                label="ENQUIRE NOW"
              />

              <CTAButton
                to="/projects"
                label="EXPLORE PROJECTS"
              />
            </div>

            <div className="mt-7 text-[9px] uppercase tracking-[0.16em] text-muted sm:mt-8 sm:text-[11px] sm:tracking-[0.2em]">
              Devprath Construction LLP · Nagpur, Maharashtra
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
