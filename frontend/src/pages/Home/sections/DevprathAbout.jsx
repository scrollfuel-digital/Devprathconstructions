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
            <h1 className="mb-5">
              Welcome to
              <br />
              <h2 className="!font-bold !text-gold">
                Devprath Construction LLP
              </h2>
            </h1>

            <p className="mx-auto mt-5 max-w-5xl font-sans text-sm sm:text-center text-justify !font-bold leading-relaxed text-text-light sm:mt-10 ">
              Located in central Nagpur, we combine modern architecture with everyday comfort. Our homes are carefully designed to provide a quality lifestyle. We bring together years of professional experience and a strong promise to build projects that families are truly proud to live in.
            </p>
          </div>
        </ScrollReveal>

        {/* Statistics */}
        <ScrollReveal>
          <div className="my-5 grid w-full max-w-4xl grid-cols-2 gap-y-5 sm:my-10 lg:grid-cols-4">
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`relative flex flex-col items-center px-3 text-center sm:px-5 `}
              >
                <div className="mb-2 font-display text-3xl font-semibold leading-none tracking-tight text-text-dark sm:text-4xl lg:text-[42px]">
                  {stat.number}
                </div>

                <span className="mb-1.5 font-body text-xs font-bold uppercase tracking-[0.18em] text-gold sm:text-sm">
                  {stat.label}
                </span>

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