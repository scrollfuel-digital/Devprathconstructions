import React from "react";
import { CountUpNumber } from "../../../components/common/CountUpNumber.jsx";
import CTAButton from "../../../components/common/CTAButton.jsx";
import ScrollReveal from "../../../components/common/ScrollReveal.jsx";

import backgroundImage from "../../../assets/home page/background_image.png";

export default function DevprathAbout() {
  const stats = [
    {
      number: (
        <CountUpNumber
          value={2018}
          duration={2600}
          useGrouping={false}
        />
      ),
      label: "Founded",
      detail: "Established 28 November 2018",
    },
    {
      number: (
        <CountUpNumber
          value={20}
          suffix="+"
          duration={2600}
        />
      ),
      label: "Years of Synergy",
      detail: "Partnership of Hemal Nadiyana & Sunil Patil",
    },
    {
      number: (
        <CountUpNumber
          value={9}
          prefix="0"
          duration={2600}
        />
      ),
      label: "Developments",
      detail: "Completed across central Nagpur",
    },
    {
      number: (
        <CountUpNumber
          value={160}
          suffix="+"
          duration={2600}
        />
      ),
      label: "Happy Families",
      detail: "Homeowners across delivered landmarks",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-cream px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      {/* Architectural Watermark */}
      <img
        src={backgroundImage}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-[0.18]"
      />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        {/* Heading + Description */}
        <ScrollReveal>
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-text-dark sm:text-4xl md:text-5xl">
              Welcome to
              <br />
              <span className="font-semibold italic text-gold">
                Devprath Construction LLP
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl font-body text-sm font-light leading-relaxed text-text-light sm:mt-6 sm:text-base">
              Located in central Nagpur, we combine modern architecture with everyday comfort. Our homes are carefully designed to provide a quality lifestyle. We bring together years of professional experience and a strong promise to build projects that families are truly proud to live in.
            </p>
          </div>
        </ScrollReveal>

        {/* Statistics */}
        <ScrollReveal>
          <div className="my-10 grid w-full max-w-4xl grid-cols-2 gap-y-8 sm:my-14 lg:grid-cols-4">
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`relative flex flex-col items-center px-3 text-center sm:px-5 ${idx !== 0 ? "lg:border-l lg:border-text-dark/15" : ""
                  } ${idx % 2 === 1
                    ? "border-l border-text-dark/15 lg:border-l-0"
                    : ""
                  }`}
              >
                <div className="mb-2 font-display text-3xl font-semibold leading-none tracking-tight text-text-dark sm:text-4xl lg:text-[42px]">
                  {stat.number}
                </div>

                <span className="mb-1.5 font-body text-xs font-semibold uppercase tracking-[0.18em] text-gold sm:text-sm">
                  {stat.label}
                </span>

                <p className="max-w-[190px] font-body text-xs font-light leading-snug text-text-light">
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* CTA Buttons */}
        <ScrollReveal>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <CTAButton to="/about-us" label="ABOUT US" />
            <CTAButton to="/contact" label="CONTACT US" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}