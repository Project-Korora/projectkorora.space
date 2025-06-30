import { ReactNode } from "react";

interface GridProps {
    children: ReactNode;
    cols?: number;
    gap?: number;
    className?: string;
}

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
