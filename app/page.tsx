import {Metadata} from "next";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import AboutSectionOne from "@/components/About";
import Features from "@/components/Features";
import Video from "../components/OurProcess";
import OurStrength from "@/components/OurStrength";
import TeamSection from "@/components/Teams";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
    title: "Homepage | Genie Solution Company",
    description: "This is Home for Genie Solution Company",
    // other metadata
};

export default function Home() {
    return (
        <main>
            <ScrollUp />
            <Hero />
            <AboutSectionOne />
            <Features />
            <Video />
            <OurStrength />
            <TeamSection />
            <Contact />
        </main>
    );
}
