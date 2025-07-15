"use client";
import React from "react";

interface SwipeHintProps {
    className?: string;
    size?: "sm" | "md" | "lg";
    color?: string;
    duration?: number;
}

const sizes = {
        sm: {
            container: "w-[30vw] h-[8vw] max-w-[120px] max-h-[32px] -translate-x-1/2 -translate-y-[4vw]",
            circle: "w-[5vw] h-[5vw] max-w-[20px] max-h-[20px] min-w-[16px] min-h-[16px] mt-[1vw]",
            distance: "min(25vw, 100px)",
        },
        md: {
            container: "w-[40vw] h-[10vw] max-w-[160px] max-h-[40px] -translate-x-1/2 -translate-y-[5vw]",
            circle: "w-[6vw] h-[6vw] max-w-[30px] max-h-[30px] min-w-[20px] min-h-[20px] mt-[0.8vw]",
            distance: "min(35vw, 140px)",
        },
        lg: {
            container: "w-[50vw] h-[12vw] max-w-[200px] max-h-[48px] -translate-x-1/2 -translate-y-[6vw]",
            circle: "w-[8vw] h-[8vw] max-w-[40px] max-h-[40px] min-w-[24px] min-h-[24px] mt-[0.6vw]",
            distance: "min(40vw, 180px)",
        },
    }

export function SwipeHint({
    className = "",
    size = "md",
    color = "border-primary",
    duration = 1.25,
}: SwipeHintProps) {
    const config = sizes[size];

    return (
        <div
            className={`absolute left-1/2 top-1/2 pointer-events-none ${config.container} ${className}`}
        >
            <div
                className={`border-4 ${color} rounded-full ${config.circle} animate-swipe-hint`}
                style={
                    {
                        "--swipe-distance": config.distance,
                        "--animation-duration": `${duration}s`,
                        boxShadow: "0 0 2vw 0.5vw #268cc0, 0 0 1vw 0.2vw #268cc0",
                    } as React.CSSProperties & {
                        "--swipe-distance": string;
                        "--animation-duration": string;
                    }
                }
            />
            <style jsx>{`
                @keyframes swipe-hint {
                    0% {
                        transform: translateX(var(--swipe-distance));
                        opacity: 0;
                    }
                    20% {
                        transform: translateX(var(--swipe-distance));
                        opacity: 1;
                    }
                    100% {
                        transform: translateX(0px);
                        opacity: 0;
                    }
                }

                .animate-swipe-hint {
                    animation: swipe-hint var(--animation-duration) ease-out infinite;
                }

                @media (max-width: 480px) {
                    .animate-swipe-hint {
                        box-shadow: 0 0 3vw 1vw #268cc0 !important;
                    }
                }

                @media (min-width: 1200px) {
                    .animate-swipe-hint {
                        box-shadow: 0 0 10px 3px #268cc0 !important;
                    }
                }
            `}</style>
        </div>
    );
}
