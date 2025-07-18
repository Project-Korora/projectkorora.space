"use client";
import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "./Accordion";
import { AccordionListener } from "./AccordionListener";
import { TeamType } from "@/data/teamData";

/**
 * Renders an accordion for displaying sectional team data
 * @param {Omit<TeamType, "icon">} team - team data excluding icon
 * @param {number} slideIndex - index of slide if relevant
 * @param {boolean} mobile  - if mobile, add listener to close accordion
 * @returns {React.JSX.Element} - elem
 */
function TeamAccordion({
    team,
    slideIndex,
    mobile,
}: {
    team: Omit<TeamType, "icon">;
    slideIndex: number;
    mobile?: boolean;
}) {
    const [accordionValue, setAccordionValue] = React.useState("");

    return (
        <Accordion
            type="single"
            collapsible
            className="w-full"
            value={accordionValue}
            onValueChange={setAccordionValue}
        >
            {/* on mobile include a listener to close accordions on carousel slide change */}
            {mobile && (
                <AccordionListener
                    slideIndex={slideIndex}
                    setAccordionValue={setAccordionValue}
                />
            )}

            {team.sections.map((section, sectionIndex) => (
                <AccordionItem
                    key={sectionIndex}
                    value={`item-${sectionIndex + 1}`}
                >
                    <AccordionTrigger>{section.header}</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p>{section.body}</p>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}

export default TeamAccordion;
