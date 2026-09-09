import React from "react";
import aboutus1 from "../../assets/Project/mangalmurti_2.png";
import SocialConnectBar from "../../components/SocialConnectBar";

export default function Hero() {
    return (
        <section className="relative h-screen flex items-end overflow-hidden">
            <img
                src={aboutus1}
                alt="Devprath Constructions"
                className="absolute inset-0 w-full h-full object-cover object-center"
                loading="eager"
            />

            <div className="flex flex-col items-center gap-4 sm:gap-6 absolute left-4 sm:left-8 lg:left-16 bottom-8 sm:bottom-20 z-20">
                <div className="w-[1px] h-8 sm:h-14 bg-black/100" />
                <SocialConnectBar
                    containerClassName="flex flex-col items-center gap-4 sm:gap-6"
                    iconSizeClass="w-5 h-5 sm:w-7 sm:h-7"
                    iconColorClass="text-black/100"
                />
            </div>
        </section>
    );
}