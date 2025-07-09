import React from "react";

/**
 * Skeleton placeholder for streaming elements or placeholder
 * @param {React.ComponentProps<"div">} props 
 * @returns {JSX.Element}
 */
export default function Skeleton({className, ...remaining}: React.ComponentProps<"div">) {
    return (
        <div
            className = {`bg-light-hover animate-pulse-slow ${className}`}
            {...remaining}
        />
    )
}