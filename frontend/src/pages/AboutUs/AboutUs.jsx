import React from "react";
import Hero from "./Hero";
import AboutInfo from "./AboutInfo";
import VisionarySection from "./VisionaryCard";

export default function About() {
    return (
        <div className="bg-[#FAF7F2] text-[#1F1E1C] font-body overflow-x-hidden min-h-screen">
            <Hero />
            <AboutInfo />
            <VisionarySection />
        </div>
    );
}