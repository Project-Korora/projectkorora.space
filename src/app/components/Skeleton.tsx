import React from "react";

/**
 * Skeleton placeholder for streaming elements or placeholder
 * @param {React.ComponentProps<"div">} props - React component props including className and standard div attributes
 * @returns {JSX.Element} JSX element displaying an animated skeleton placeholder
 */
export default function Skeleton({
    className,
    ...remaining
}: React.ComponentProps<"div">) {
    return (
        <div
            className={`bg-light-hover animate-pulse ${className}`}
            {...remaining}
        />
    );
}
