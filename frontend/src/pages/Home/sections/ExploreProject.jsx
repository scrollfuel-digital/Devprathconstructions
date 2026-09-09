import React from "react";
import ScrollReveal from "../../../components/common/ScrollReveal";
import CTAButton from "../../../components/common/CTAButton";

// Replace these with your actual image imports
import mangalmurtiImage from '../../../assets/navbar_holder/ongoing_project.png';
import gaurisutImage from "../../../assets/navbar_holder/completed_project.png";

const ProjectCard = ({
    image,
    imageAlt,
    title,
    description,
    buttonLabel,
    buttonTo,
    delay,
}) => {
    return (
        <ScrollReveal delay={delay} className="w-full">
            <article className="w-full">
                {/* 16:9 Project Image */}
                <ScrollReveal>
                    <div className="relative w-full aspect-video overflow-hidden">
                    <img
                        src={image}
                        alt={imageAlt}
                        loading="lazy"
                        className="block w-full h-full object-cover"
                    />
                </div>
                </ScrollReveal>

                {/* Project Content */}
                <div className="pt-5 sm:pt-6">
                    <ScrollReveal>
                        <h3 className="font-display text-2xl sm:text-3xl font-semibold leading-tight text-brand-maroon">
                            {title}
                        </h3>
                    </ScrollReveal>

                    <ScrollReveal>
                        <p className="mt-2 max-w-xl font-body text-sm sm:text-[15px] font-light leading-relaxed text-text-light">
                            {description}
                        </p>
                    </ScrollReveal>

                    <ScrollReveal>
                        <div className="mt-6">
                            <CTAButton
                                to={buttonTo}
                                label={buttonLabel}
                            />
                        </div>
                    </ScrollReveal>
                </div>
            </article>
        </ScrollReveal>
    );
};

const ExploreProject = () => {
    return (
        <section className="w-full bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-[1200px]">
                {/* Section Heading */}
                <ScrollReveal>
                    <h2 className="mb-10 text-center font-display text-4xl font-normal tracking-tight text-brand-maroon sm:mb-12 sm:text-5xl lg:mb-14 lg:text-6xl">
                        Explore Other{" "}
                        <span className="italic font-light">
                            Projects
                        </span>
                    </h2>
                </ScrollReveal>

                {/* Exactly TWO Projects */}
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-6 lg:gap-8">
                        {/* Mangalmurti Residency */}
                        <ProjectCard
                            image={mangalmurtiImage}
                            imageAlt="Mangalmurti Residency"
                            title="Mangalmurti Residency"
                            description="An ongoing residential development thoughtfully planned around comfortable everyday living and practical residential spaces."
                            buttonLabel="EXPLORE PROJECT"
                            buttonTo="/project"
                            delay={0}
                        />

                        {/* Gaurisut Apartment */}
                        <ProjectCard
                            image={gaurisutImage}
                            imageAlt="Gaurisut Apartment"
                            title="Gaurisut Apartment"
                            description="A completed residential development located in Jaiprakash Nagar, Nagpur. Click button to see more..."
                            buttonLabel="VIEW PROJECT"
                            buttonTo="/completed-projects"
                            delay={150}
                        />
                    </div>
            </div>
        </section>
    );
};

export default ExploreProject;