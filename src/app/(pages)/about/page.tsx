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
            <PageHeader title="About Project Kororā" description="" />

            <div className="space-y-12">
                {/* Mission Overview Section */}
                <Card className="border-l-4 border-l-primary">
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                        Mission Overview
                    </h2>
                    <div className="space-y-6">
                        <p className="text-white/80 leading-relaxed">
                            Project Kororā is Victoria University of
                            Wellington&apos;s first student-run space mission,
                            aiming to design, build, and propose a CubeSat
                            equipped with a novel miniature Hall-effect
                            thruster. We are a multidisciplinary team of
                            undergraduate and postgraduate students working
                            across science, engineering, and design,
                            collaborating to develop both advanced propulsion
                            technology and strong documentation for future
                            missions.
                        </p>
                        <p className="text-white/80 leading-relaxed">
                            The project addresses two major gaps: First, it
                            responds to the lack of effective propulsion in
                            CubeSat missions, which typically restricts them to
                            a single orbital configuration. Our focus is the
                            design of a Hall-effect thruster capable of
                            operating within the size, power, and thermal
                            constraints of a 3U CubeSat. Second, the project
                            aims to build capacity in New Zealand&apos;s growing
                            new space sector by enabling students to work
                            directly with leading researchers and organisations
                            in the field. We are working alongside the Robinson
                            Research Institute and plan to actively engage with
                            Rocket Lab and other industry partners.
                        </p>
                        <p className="text-white/80 leading-relaxed">
                            Project Kororā is more than just an engineering
                            challenge. It is a systems-level initiative
                            involving orbital mechanics, software, thermal and
                            power systems, mechanical design, radio
                            communications, design, ethics, and policy. The goal
                            for 2025 is to produce a complete, NZSA-compliant
                            mission proposal that can serve as a national
                            demonstration of student-led space capability.
                        </p>
                    </div>
                </Card>

                {/* Project Name Section */}
                <Card className="border-l-4 border-l-secondary">
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                        Our Name
                    </h2>
                    <div className="space-y-6">
                        <p className="text-white/80 leading-relaxed">
                            Our project name comes from the little blue penguin,
                            or kororā, Aotearoa New Zealand&apos;s smallest
                            native penguin. Like its namesake, our satellite is
                            compact but ambitious. With this mission, we hope to
                            help shape the future of student space exploration
                            in Aotearoa and contribute meaningfully to New
                            Zealand&apos;s high-growth aerospace sector.
                        </p>
                    </div>
                </Card>

                {/* 2025 Objectives Section */}
                <Card className="border-l-4 border-l-accent">
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                        Project Objectives for 2025
                    </h2>
                    <ul className="space-y-3 text-white/80">
                        <li className="flex items-start">
                            <span className="text-accent mr-2 font-bold">
                                •
                            </span>
                            Deliver a detailed, NZSA-compliant proposal.
                        </li>
                        <li className="flex items-start">
                            <span className="text-accent mr-2 font-bold">
                                •
                            </span>
                            Form active subteams with clear goals, timelines,
                            and documentation practices.
                        </li>
                        <li className="flex items-start">
                            <span className="text-accent mr-2 font-bold">
                                •
                            </span>
                            Launch a mock version of the CubeSat via weather
                            balloon to test communications, telemetry, and
                            integration under near-space conditions.
                        </li>
                        <li className="flex items-start">
                            <span className="text-accent mr-2 font-bold">
                                •
                            </span>
                            Build relationships with industry, academic experts,
                            and other CubeSat teams internationally.
                        </li>
                        <li className="flex items-start">
                            <span className="text-accent mr-2 font-bold">
                                •
                            </span>
                            Contribute to the long-term development of an
                            accessible, open-source CubeSat platform for future
                            student missions.
                        </li>
                    </ul>
                </Card>

                {/* Team Section */}
                <Card className="border-l-4 border-l-primary-700">
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                        Leadership Team
                    </h2>
                    <p className="text-white/80 leading-relaxed mb-8">
                        The project consists of 9 teams, with the team leads
                        being:
                    </p>

                    <Grid cols={3} className="gap-6">
                        {teamMembers.map((member, index) => (
                            <TeamCard
                                key={index}
                                team={member.team}
                                name={member.name}
                                title={member.title}
                                image={member.image}
                                className="transform hover:scale-105 transition-transform duration-300"
                            />
                        ))}
                    </Grid>
                </Card>

                {/* Conclusion Section */}
                <Card className="border-l-4 border-l-secondary-700">
                    <div className="text-center py-6">
                        <p className="text-white/90 leading-relaxed text-lg font-medium italic">
                            Project Kororā brings together ambition,
                            determination, and community-driven design to push
                            the boundaries of what students can achieve in
                            space.
                        </p>
                    </div>
                </Card>
            </div>
        </PageContainer>
    );
}
