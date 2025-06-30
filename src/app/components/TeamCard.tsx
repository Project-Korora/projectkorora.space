import Card from "./Card";

interface TeamCardProps {
    team: string;
    lead: string;
    bio: string;
    className?: string;
}

export default function TeamCard({
    team,
    lead,
    bio,
    className = "",
}: TeamCardProps) {
    return (
        <Card className={className}>
            <div className="mb-4">
                <h3 className="text-xl font-bold mb-2 text-white">
                    {team} Team
                </h3>
                <p className="text-blue-300 font-medium mb-1">Led by {lead}</p>
            </div>
            <p className="text-white/80 leading-relaxed">{bio}</p>
        </Card>
    );
}
