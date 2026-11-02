import React from "react";
import Hero from "./Hero1";
import { AboutIntro, MissionVisionSection } from "./AboutInfo";
// import VisionarySection from "./VisionaryCard";
import LeadershipSection from "./LeadershipSection";

export default function About() {
    return (
        <div className="bg-[#FAF7F2] text-[#1F1E1C] font-body overflow-x-hidden min-h-screen">
            <Hero />
            <AboutIntro />
            {/* <VisionarySection /> */}
             <LeadershipSection />
            <MissionVisionSection />
        </div>
    );
}