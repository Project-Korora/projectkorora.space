import type { Metadata } from "next";

import PageContainer from "../../components/PageContainer";
import PageHeader from "../../components/PageHeader";
import MarkdownContent from "../../components/MarkdownContent";

export const metadata: Metadata = {
    title: "About Project Kororā",
    description: "Learn about New Zealand's pioneering CubeSat mission",
};

/**
 * The About page component.
 *
 * This page provides detailed information about Project Kororā, including
 * the mission overview, objectives, and team information.
 *
 * @returns {JSX.Element} The rendered about page.
 */
export default async function AboutPage() {
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

            <div className="bg-dark/40 backdrop-blur shadow-md text-light space-y-12 p-10 sm:p-12 lg:p-16 mt-10 mx-auto max-w-6xl rounded">
                {/* About Project Kororā content */}
                <div className="max-w-4xl mx-auto mb-12">
                    <MarkdownContent file="about.md" />
                </div>

                {/* Leadership Team */}
                <div className="space-y-10 mt-15">
                    <h2 className="text-3xl font-bold text-light mb-8">
                        Leadership Team
                    </h2>
                    {teamMembers.map((member, index) => (
                        <div key={index} className="flex items-center gap-6">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-30 h-30 rounded object-cover border border-light/20"
                            />
                            <div>
                                <h3 className="text-xl font-semibold text-light">
                                    {member.name}
                                </h3>
                                <p className="text-light/70">
                                    {member.title} of the {member.team} team
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </PageContainer>
    );
}
