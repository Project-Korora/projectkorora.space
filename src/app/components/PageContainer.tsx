import { ReactNode } from "react";

interface PageContainerProps {
    children: ReactNode;
    className?: string;
}

/**
 * A container component for page content.
 *
 * This component provides consistent padding and a max-width wrapper
 * for the main content of a page.
 *
 * @param {object} props - The properties for the component.
 * @param {React.ReactNode} props.children - The content to be rendered inside the container.
 * @param {string} [props.className=""] - Additional CSS classes to apply to the container.
 * @returns {JSX.Element} The rendered page container.
 */
export default function PageContainer({
    children,
    className = "",
}: PageContainerProps) {
    return (
        <div className={`min-h-screen p-3 ${className}`}>
            <div className="max-w-5xl mx-auto">{children}</div>
        </div>
    );
}
