interface PageHeaderProps {
    title: string;
    description: string;
    className?: string;
}

export default function PageHeader({
    title,
    description,
    className = "",
}: PageHeaderProps) {
    return (
        <div className={`text-center mb-12 ${className}`}>
            <h1 className="text-4xl font-bold mb-6 text-white">{title}</h1>
            <p className="text-xl text-white/80 max-w-5xl mx-auto">
                {description}
            </p>
        </div>
    );
}
