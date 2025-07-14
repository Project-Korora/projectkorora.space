import {
    Carousel,
    CarouselDiv,
    CarouselElement,
} from "@/app/components/Carousel";

import teamList, { TeamType } from "@/data/teamData";
import Card from "@/app/components/Card";
import { Users } from "lucide-react";
import Skeleton from "@/app/components/Skeleton";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/app/components/Accordion";
import CarouselScroller from "@/app/components/CarouselScroller";
/**
 * The team page for Project Kororā.
 *
 * This page is intended to display the members of the project team.
 * NOTE: This is currently a placeholder and needs to be populated
 * with actual team member data.
 *
 * @returns {JSX.Element} The rendered team page.
 */

const advisors = [
    "Dr Tulasi Nandan Parashar – Victoria University of Wellington",
    "Dr Jakub Glowacki – Robinson Research Institute",
    "Dr Randy Pollock - Robinson Research Institute",
    "Robin McNeill – CEO, Space Operations New Zealand Ltd",
];

function TeamInfo({
    team,
    index,
    className,
}: {
    className: string;
    team: TeamType;
    index: number;
}) {
    return (
        <Card
            key={index}
            color="secondary"
            className={`${className} transition-colors duration-700 ease-out`}
        >
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-br from-primary to-secondary rounded-lg shadow-sm">
                            <team.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white/80 group-hover:text-light transition-colors">
                                {team.name}
                            </h3>
                        </div>
                    </div>
                </div>

                <Skeleton className="w-full h-48 rounded-lg overflow-hidden"></Skeleton>

                <p className="text-white/80 leading-relaxed">
                    {team.description}
                </p>
                <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue="item-1"
                >
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
                                    <p>{section.body.repeat(3)}</p>
                                </AccordionContent>
                            </AccordionItem>
                        );
                    })}
                </Accordion>
            </div>
        </Card>
    );
}

export default function TeamPage() {
    return (
        <div className="min-h-screen">
            <div className="container mx-auto px-4 py-12">
                <div className="text-center mb-8">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-light">
                        Meet the teams
                    </h1>
                    <p className="text-xl text-light/80 max-w-4xl mx-auto leading-snug">
                        Project Kororā is powered by over{" "}
                        <span className="font-semibold text-accent">
                            100 students
                        </span>{" "}
                        from across Victoria University of Wellington. Our teams
                        span science, engineering, law, arts, and design, with
                        each group playing a vital role in making Aotearoa New
                        Zealand's first student-led CubeSat mission a reality.
                    </p>
                </div>

                <div className="mb-8">
                    <Card
                        color="secondary"
                        className="text-white bg-secondary/50"
                    >
                        <div className="text-center mb-6">
                            <h2 className="text-2xl md:text-3xl font-bold flex items-center justify-center gap-3 mb-3">
                                <Users className="h-8 w-8" />
                                Board of Advisors
                            </h2>
                            <p className="text-blue-100 text-lg">
                                Kororā is supported by a panel of advisors from
                                across the New Zealand space ecosystem
                            </p>
                        </div>
                        <div className="hidden md:grid md:grid-cols-2 gap-4">
                            {advisors.map((advisor, index) => (
                                <div
                                    key={index}
                                    className="bg-white/10 rounded-lg p-4"
                                >
                                    <p className="text-white font-medium">
                                        {advisor}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <Carousel
                            className="md:hidden"
                            doLoop={true}
                            showHint={false}
                        >
                            <CarouselDiv>
                                {advisors.map((advisor, index) => (
                                    <CarouselElement key={index}>
                                        <div
                                            key={index}
                                            className="bg-white/10 rounded-lg p-4"
                                        >
                                            <p className="text-white font-medium">
                                                {advisor}
                                            </p>
                                        </div>
                                    </CarouselElement>
                                ))}
                            </CarouselDiv>
                            <CarouselScroller />
                        </Carousel>
                    </Card>
                </div>

                <div className="hidden md:grid md:grid-cols-2  gap-8">
                    {teamList.map((team, index) => (
                        <TeamInfo
                            team={team}
                            index={index}
                            key={index}
                            className="bg-primary/10 hover:bg-primary/20"
                        ></TeamInfo>
                    ))}
                </div>

                <Carousel className="md:hidden">
                    <CarouselDiv>
                        {teamList.map((team, index) => (
                            <CarouselElement key={index}>
                                <TeamInfo
                                    team={team}
                                    index={index}
                                    className="bg-primary/20"
                                ></TeamInfo>
                            </CarouselElement>
                        ))}
                    </CarouselDiv>
                </Carousel>
            </div>
        </div>
    );
}
