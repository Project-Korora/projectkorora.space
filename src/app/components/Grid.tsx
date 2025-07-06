import { ReactNode } from "react";

interface GridProps {
    children: ReactNode;
    cols?: number;
    gap?: number;
    className?: string;
}

/**
 * A flexible grid component for layout.
 *
 * This component creates a CSS grid layout, allowing for a configurable
 * number of columns and gap size.
 *
 * @param {object} props - The properties for the component.
 * @param {React.ReactNode} props.children - The content to be rendered inside the grid.
 * @param {number} [props.cols=2] - The number of columns in the grid.
 * @param {number} [props.gap=3] - The gap size between grid items (in 0.25rem units).
 * @param {string} [props.className=""] - Additional CSS classes to apply to the grid container.
 * @returns {JSX.Element} The rendered grid component.
 */
export default function Grid({
    children,
    cols = 2,
    gap = 3,
    className = "",
}: GridProps) {
    return (
        <div
            className={`grid grid-cols-1 md:grid-cols-[var(--cols)] ${className}`}
            style={
                {
                    "--cols": `repeat(${cols}, minmax(0, 1fr))`,
                    gap: `${gap * 0.25}rem`,
                } as React.CSSProperties
            }
        >
            {children}
        </div>
    );
}
