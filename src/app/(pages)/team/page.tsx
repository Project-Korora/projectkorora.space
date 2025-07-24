import teamList, { TeamType } from "@/data/teamData";
import Card from "@/app/components/Card";
import { Users } from "lucide-react";
import PageContainer from "@/app/components/PageContainer";
import PageHeader from "@/app/components/PageHeader";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/app/components/Accordion";
import Image from "next/image";

/**
 * The team page for Project Kororā.
 *
 * This page is intended to display the members of the project team.
 *
 * @returns {JSX.Element} The rendered team page.
 */

const advisors = [
    "Dr Tulasi Nandan Parashar – Victoria University of Wellington",
    "Dr Jakub Glowacki – Robinson Research Institute",
    "Dr Randy Pollock - Robinson Research Institute",
    "Robin McNeill – CEO, Space Operations New Zealand Ltd",
];

/**
 * A component that displays information about a team.
 *
 * @param {Object} props - The component props.
 * @param {TeamType} props.team - The team data.
 * @param {number} props.index - The index of the team.
 * @returns {JSX.Element} The rendered team info component.
 */
function TeamInfo({ team, index }: { team: TeamType; index: number }) {
    return (
        <Card key={index} color="dark" className="!mt-0">
            <div className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-primary to-secondary rounded-lg shadow-sm">
                        <team.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">{team.name}</h3>
                    </div>
                </div>

                <div className="w-full rounded-lg overflow-hidden">
                    <Image
                        src={team.photo}
                        alt={`${team.name} team photo`}
                        width={600}
                        height={400}
                        className="w-full h-auto object-contain"
                    />
                </div>

                <p className="leading-relaxed">{team.description}</p>
                <Accordion type="single" collapsible className="w-full">
                    {team.sections.map((section, index) => {
                        return (
                            <AccordionItem
                                key={index}
                                value={`item-${index + 1}`}
                            >
                                <AccordionTrigger>
                                    {section.header}
                                </AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-4 text-balance">
                                    <p>{section.body}</p>
                                </AccordionContent>
                            </AccordionItem>
                        );
                    })}
                </Accordion>
            </div>
        </Card>
    );
}

/**
 * The team page for Project Kororā.
 *
 * This page is intended to display the members of the project team.
 *
 * @returns {JSX.Element} The rendered team page.
 */
export default function TeamPage() {
    return (
        <PageContainer>
            <PageHeader
                title="Meet the Teams"
                description="Project Kororā is powered by over 100 students from across Victoria University of Wellington. Our teams span science, engineering, law, arts, and design, with each group playing a vital role in making Aotearoa New Zealand's first student-led CubeSat mission a reality."
            />

            <Card color="dark" className="!mb-5">
                <div className="text-center mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold flex items-center justify-center gap-3 mb-3">
                        <Users className="h-8 w-8" />
                        Board of Advisors
                    </h2>
                    <p className="text-lg">
                        Kororā is supported by a panel of advisors from across
                        the New Zealand space ecosystem
                    </p>
                </div>
                <div className="hidden md:grid md:grid-cols-2 gap-4">
                    {advisors.map((advisor, index) => (
                        <div key={index} className="bg-white/10 rounded-lg p-4">
                            <p className="font-medium">{advisor}</p>
                        </div>
                    ))}
                </div>
    
                <div className= "grid grid-cols-1 gap-2 md:hidden">
                    {advisors.map((advisor, index) => (
                        <div key={index} className="bg-white/10 rounded-lg p-4">
                            <p className="font-medium">{advisor}</p>
                        </div>
                    ))}
                </div>
            </Card>

            <div className="hidden md:grid md:grid-cols-2 gap-5">
                {teamList.map((team, index) => (
                    <TeamInfo team={team} index={index} key={index} />
                ))}
            </div>

   
             <div className="md:hidden grid grid-cols-1 gap-3">
                {teamList.map((team, index) => (
                        <TeamInfo team={team} index={index} key={index} />
                ))}
            </div>
         
         
        </PageContainer>
    );
}
