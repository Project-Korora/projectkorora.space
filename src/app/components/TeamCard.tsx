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
                <h3 className="card-title">{team} Team</h3>
                <p className="card-subtitle">Led by {lead}</p>
            </div>
            <p className="card-text">{bio}</p>
        </Card>
    );
}
