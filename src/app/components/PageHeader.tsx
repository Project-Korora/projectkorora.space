interface PageHeaderProps {
    title: string;
    description?: string;
    className?: string;
}

/**
 * A header component for pages.
 *
 * This component displays a title and a description in a consistent,
 * centered format at the top of a page.
 *
 * @param {object} props - The properties for the component.
 * @param {string} props.title - The main title for the page header.
 * @param {string} [props.description] - The descriptive text to display below the title (optional).
 * @param {string} [props.className=""] - Additional CSS classes to apply to the header.
 * @returns {JSX.Element} The rendered page header.
 */
export default function PageHeader({
    title,
    description,
    className = "",
}: PageHeaderProps) {
    return (
        <div className={`relative z-1 text-center mb-12 mt-10 ${className}`}>
            <h1 className="text-4xl font-bold mb-6 text-light">{title}</h1>
            {description && (
                <p className="text-xl text-light/80 max-w-5xl mx-auto">
                    {description}
                </p>
            )}
        </div>
    );
}
