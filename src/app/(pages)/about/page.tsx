import type { Metadata } from "next";

import PageContainer from "../../components/PageContainer";
import PageHeader from "../../components/PageHeader";
import MarkdownContent from "../../components/MarkdownContent";
import Card from "@/app/components/Card";

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
            image: "/images/teamleads/zac.jpg",
        },
        {
            name: "Alex Fausett",
            team: "Mechanical & Thermal",
            title: "Co-Founder and Leader",
            image: "/images/teamleads/alex_f.jpg",
        },
        {
            name: "Fyfa Main",
            team: "Software",
            title: "Leader",
            image: "/images/teamleads/fyfa.jpg",
        },
        {
            name: "Reuben Wilson",
            team: "Communications",
            title: "Leader",
            image: "/images/teamleads/reuben.jpg",
        },
        {
            name: "Kai Bennett",
            team: "Avionics",
            title: "Leader",
            image: "/images/teamleads/kai.jpg",
        },
        {
            name: "Mario Pankusz",
            team: "Power Systems",
            title: "Leader",
            image: "/images/teamleads/mario.jpg",
        },
        {
            name: "Ben Van Der Weerd",
            team: "Incident Response",
            title: "Leader",
            image: "/images/teamleads/ben.jpg",
        },
        {
            name: "Alex McKeown",
            team: "Design",
            title: "Leader",
            image: "/images/teamleads/placeholder.jpg",
        },
        {
            name: "Arunan and Ivy Hampton",
            team: "Law, Policy and Finance",
            title: "Leader",
            image: "/images/teamleads/placeholder.jpg",
        },
    ];

    return (
        <PageContainer>
            <PageHeader title="About Project Kororā" description="" />

            {/* Mission Overview */}
            <Card color="dark">
                <MarkdownContent file="missionOverview.md" />
            </Card>

            {/* Full Team Photo Section */}
            <Card color="dark" className="!p-0 overflow-hidden">
                <img
                    src="/images/fullteam.jpg"
                    alt="Project Kororā Full Team Photo"
                    className="w-full h-auto object-cover"
                />
            </Card>

            {/* Our Name */}
            <Card color="dark">
                <MarkdownContent file="ourName.md" />
            </Card>

            {/* Leadership Team */}
            <Card color="dark">
                <h2 className="text-3xl font-bold mb-8">Leadership Team</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="flex items-center gap-6">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-30 h-30 rounded-full object-cover border border-light/20 flex-shrink-0"
                            />
                            <div>
                                <h3 className="text-xl font-semibold ">
                                    {member.name}
                                </h3>
                                <p className="/70">
                                    {member.title} of the {member.team} team
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
        </PageContainer>
    );
}
