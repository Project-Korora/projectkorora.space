import Image from "next/image";
import Card from "./Card";

interface TeamCardProps {
    team: string;
    lead: string;
    bio: string;
    className?: string;
    image?: string; // Path to the team lead's image
}

export default function TeamCard({
    team,
    lead,
    bio,
    className = "",
    image = "/images/team/placeholder.jpg", // Default placeholder image
}: TeamCardProps) {
    return (
        <Card className={className}>
            {/* Team Lead Image */}
            <div className="mb-4 flex justify-center">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-blue-400/30">
                    <Image
                        src={image}
                        alt={`${lead} - ${team} Team Lead`}
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
            <div className="mb-4 text-center">
                <h3 className="text-xl font-bold mb-2 text-white">
                    {team} Team
                </h3>
                <p className="text-blue-300 font-medium mb-1">Led by {lead}</p>
            </div>
            <p className="text-white/80 leading-relaxed">{bio}</p>
        </Card>
    );
}
