import type { Metadata } from "next";
import Card from "../../components/Card";
import PageContainer from "../../components/PageContainer";
import PageHeader from "../../components/PageHeader";
import Grid from "../../components/Grid";
import TeamCard from "../../components/TeamCard";

export const metadata: Metadata = {
    title: "About",
    description:
        "Learn about Project Kororā's mission to advance New Zealand's space economy through innovative CubeSat technology and electric propulsion systems.",
};

/**
 * The about page for Project Kororā.
 *
 * This page provides a comprehensive overview of the project's mission,
 * the significance of its name, the objectives for 2025, and introduces
 * the leadership team.
 *
 * @returns {JSX.Element} The rendered about page.
 */
export default function AboutPage() {
    const teamMembers = [
        {
            name: "Zhen Hong Chai",
            team: "Attitude Determination & Mission Design",
            title: "Co-Founder and Leader",
            image: "/images/team/zac.jpg",
        },
        {
            name: "Alex Fausett",
            team: "Mechanical & Thermal",
            title: "Co-Founder and Leader",
            image: "/images/team/alex_f.jpg",
        },
        {
            name: "Fyfa Main",
            team: "Software",
            title: "Leader",
            image: "/images/team/fyfa.jpg",
        },
        {
            name: "Reuben Wilson",
            team: "Communications",
            title: "Leader",
            image: "/images/team/reuben.jpg",
        },
        {
            name: "Kai Bennett",
            team: "Avionics",
            title: "Leader",
            image: "/images/team/kai.jpg",
        },
        {
            name: "Mario Pankusz",
            team: "Power Systems",
            title: "Leader",
            image: "/images/team/mario.jpg",
        },

        {
            name: "Ben Van Der Weerd",
            team: "Incident Response",
            title: "Leader",
            image: "/images/team/placeholder.jpg",
        },
        {
            name: "Alex McKeown",
            team: "Design",
            title: "Leader",
            image: "/images/team/placeholder.jpg",
        },
        {
            name: "Arunan and Ivy Hampton",
            team: "Law, Policy and Finance team",
            title: "Leader",
            image: "/images/team/placeholder.jpg",
        },
    ];

    return (
        <PageContainer>
            
            <div className="mt-16 mb-8 text-center">
            <h1 className="text-6xl font-bold text-white">About Project Kororā</h1>
            </div>
            
                <div className="bg-black/40 backdrop-blur-md shadow-md text-white space-y-12 p-10 sm:p-12 lg:p-16 mt-10 mx-auto max-w-6xl">

                {/* Mission Overview */}
                <section>
                    <h2 className="text-3xl font-bold mb-4">Mission Overview</h2>
                    <div className="space-y-6 text-white/80">
                        <p>
                            Project Kororā is Victoria University of Wellington's first student-run space mission,
                            aiming to design, build, and propose a CubeSat equipped with a novel miniature Hall-effect
                            thruster. We are a multidisciplinary team of undergraduate and postgraduate students working
                            across science, engineering, and design, collaborating to develop both advanced propulsion
                            technology and strong documentation for future missions.
                        </p>
                        <p>
                            The project addresses two major gaps: First, it responds to the lack of effective propulsion
                            in CubeSat missions, which typically restricts them to a single orbital configuration. Our
                            focus is the design of a Hall-effect thruster capable of operating within the size, power,
                            and thermal constraints of a 3U CubeSat. Second, the project aims to build capacity in New
                            Zealand's growing new space sector by enabling students to work directly with leading
                            researchers and organisations in the field. We are working alongside the Robinson Research
                            Institute and plan to actively engage with Rocket Lab and other industry partners.
                        </p>
                        <p>
                            Project Kororā is more than just an engineering challenge. It is a systems-level initiative
                            involving orbital mechanics, software, thermal and power systems, mechanical design, radio
                            communications, design, ethics, and policy. The goal for 2025 is to produce a complete,
                            NZSA-compliant mission proposal that can serve as a national demonstration of student-led
                            space capability.
                        </p>
                    </div>
                </section>

                {/* Our Name */}
                <section>
                    <h2 className="text-3xl font-bold mt-15 mb-4">Our Name</h2>
                    <p className="text-white/80">
                        Our project name comes from the little blue penguin, or kororā, Aotearoa New Zealand's smallest
                        native penguin. Like its namesake, our satellite is compact but ambitious. With this mission, we
                        hope to help shape the future of student space exploration in Aotearoa and contribute meaningfully
                        to New Zealand's high-growth aerospace sector.
                    </p>
                </section>

                {/* 2025 Objectives */}
                <section>
                    <h2 className="text-3xl font-bold mt-15 mb-4">Project Objectives for 2025</h2>
                    <ul className="list-disc list-inside text-white/80 space-y-2">
                        <li>Deliver a detailed, NZSA-compliant proposal.</li>
                        <li>Form active subteams with clear goals, timelines, and documentation practices.</li>
                        <li>
                            Launch a mock version of the CubeSat via weather balloon to test communications, telemetry,
                            and integration under near-space conditions.
                        </li>
                        <li>
                            Build relationships with industry, academic experts, and other CubeSat teams internationally.
                        </li>
                        <li>
                            Contribute to the long-term development of an accessible, open-source CubeSat platform for
                            future student missions.
                        </li>
                    </ul>
                </section>

                {/* Leadership Team */}
                <div className="space-y-10 mt-15">
                {teamMembers.map((member, index) => (
                    <div key={index} className="flex items-center gap-6">
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-30 h-30 rounded-full object-cover border border-white/20"
                        />
                        <div>
                            <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                            <p className="text-white/70">{member.title} of the {member.team} team</p>
                        </div>
                    </div>
                ))}
            </div>


                {/* Closing Quote */}
                <section className="text-center mt-10 pt-4">
                    <p className="text-white/90 text-lg font-medium italic">
                        Project Kororā brings together ambition, determination, and community-driven design to push
                        the boundaries of what students can achieve in space.
                    </p>
                </section>
            </div>
        </PageContainer>
    );
}