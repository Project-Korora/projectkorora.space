"use client";

import Image from "next/image";
import Card from "./Card";

interface TeamCardProps {
    team: string;
    name: string;
    title: string;
    className?: string;
    image?: string; // Path to the team lead's image
}

/**
 * A card component for displaying a team member.
 *
 * This component shows a team member's image, name, and title within a styled card.
 *
 * @param {object} props - The properties for the component.
 * @param {string} props.team - The name of the team the member belongs to.
 * @param {string} props.name - The name of the team member.
 * @param {string} props.title - The title or role of the team member.
 * @param {string} [props.className=""] - Additional CSS classes to apply to the card.
 * @param {string} [props.image="/images/team/placeholder.jpg"] - The path to the member's image.
 * @returns {JSX.Element} The rendered team card.
 */
export default function TeamCard({
    team,
    name,
    title,
    className = "",
    image = "/images/team/placeholder.jpg", // Default placeholder image
}: TeamCardProps) {
    return (
        <Card className={className}>
            {/* Team Name Image */}
            <div className="mb-4 flex justify-center">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-primary-400/30">
                    <Image
                        src={image}
                        alt={`${name} - ${team} Team Lead`}
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
            <div className="mb-4 text-center">
                <h3 className="text-xl font-bold mb-2 text-white">{name}</h3>
                <p className="text-primary-300 font-medium mb-1">
                    {title} of the
                </p>
                <p className="text-primary-300 font-medium mb-1">{team} team</p>
            </div>
        </Card>
    );
}
