import React from "react";
import whoAreWeImg from "../../../assets/home page/who_are_we.png";
import CTAButton from "../../../components/common/CTAButton";
import ScrollReveal from "../../../components/common/ScrollReveal";

export const CompanyVisionSection = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#FAF7F2]">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Left Column: Dominant Architectural Imagery */}
          <div className="lg:col-span-6 relative">
            <div className="relative group">
              <img
                src={whoAreWeImg}
                alt="Devprath Construction LLP Master Planning"
                className="revealing-image w-full h-[480px] sm:h-[600px] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Right Column: Editorial Architecture Narrative */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-7">
            <ScrollReveal>
            <div>
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#B9935A] block mb-3">
                  Who We Are
                </span>
                <h2 className="font-display text-3xl sm:text-5xl lg:text-[54px] font-normal text-[#1F1E1C] leading-[1.12] tracking-tight">
                  Building Trust Through <br />
                  <span className="italic font-light text-[#8F6E3B]">Excellence.</span>
                </h2>
            </div>
          </ScrollReveal>
            <ScrollReveal>
              <p className="font-body text-base sm:text-lg text-[#6D675E] font-light leading-relaxed">
                Devprath Construction LLP was founded on 28 November 2018. The company represents the partnership of Mr. Hemal Nadiyana and Mr. Sunil Patil, combining over 20 years of professional synergy in real estate, engineering, and master planning.
              </p>
            </ScrollReveal>
            <ScrollReveal>
            <div className="space-y-4 pt-2 border-t border-[#1F1E1C]/10">
                <p className="font-body text-sm sm:text-base text-[#1F1E1C] font-normal leading-relaxed">
                  The company focuses on innovative and high-quality township developments in Nagpur — prioritizing structural permanence, clean spatial flow, natural ventilation, and uncompromised transparency.
                </p>
                <p className="font-body text-xs sm:text-sm text-[#6D675E] font-light italic">
                  "We craft planned environments where multigenerational families flourish with enduring confidence."
                </p>
            </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="pt-2">
                <CTAButton to="/about-us" label="OUR STORY" />
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CompanyVisionSection;