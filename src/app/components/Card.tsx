"use client";

import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
    color?: string;
}

export default function Card({
    children,
    className = "",
    color = "black",
}: CardProps) {
    const getColorClasses = (color: string) => {
        const colorMap: Record<
            string,
            {
                bg: string;
                border: string;
                glow: string;
                shadow: string;
            }
        > = {
            black: {
                bg: "bg-gradient-to-br from-black/20 via-gray-900/15 to-black/25",
                border: "border-white/20 hover:border-white/40",
                glow: "hover:shadow-white/20",
                shadow: "shadow-black/50",
            },
            blue: {
                bg: "bg-gradient-to-br from-blue-900/20 via-blue-800/15 to-blue-950/25",
                border: "border-blue-400/20 hover:border-blue-300/50",
                glow: "hover:shadow-blue-400/30",
                shadow: "shadow-blue-900/50",
            },
            purple: {
                bg: "bg-gradient-to-br from-purple-900/20 via-purple-800/15 to-purple-950/25",
                border: "border-purple-400/20 hover:border-purple-300/50",
                glow: "hover:shadow-purple-400/30",
                shadow: "shadow-purple-900/50",
            },
            green: {
                bg: "bg-gradient-to-br from-green-900/20 via-green-800/15 to-green-950/25",
                border: "border-green-400/20 hover:border-green-300/50",
                glow: "hover:shadow-green-400/30",
                shadow: "shadow-green-900/50",
            },
            red: {
                bg: "bg-gradient-to-br from-red-900/20 via-red-800/15 to-red-950/25",
                border: "border-red-400/20 hover:border-red-300/50",
                glow: "hover:shadow-red-400/30",
                shadow: "shadow-red-900/50",
            },
            gray: {
                bg: "bg-gradient-to-br from-gray-900/20 via-gray-800/15 to-gray-950/25",
                border: "border-gray-400/20 hover:border-gray-300/50",
                glow: "hover:shadow-gray-400/30",
                shadow: "shadow-gray-900/50",
            },
            indigo: {
                bg: "bg-gradient-to-br from-indigo-900/20 via-indigo-800/15 to-indigo-950/25",
                border: "border-indigo-400/20 hover:border-indigo-300/50",
                glow: "hover:shadow-indigo-400/30",
                shadow: "shadow-indigo-900/50",
            },
            cyan: {
                bg: "bg-gradient-to-br from-cyan-900/20 via-cyan-800/15 to-cyan-950/25",
                border: "border-cyan-400/20 hover:border-cyan-300/50",
                glow: "hover:shadow-cyan-400/30",
                shadow: "shadow-cyan-900/50",
            },
        };
        return colorMap[color] || colorMap.black;
    };

    const colorClasses = getColorClasses(color);

    return (
        <div
            className={`group relative ${colorClasses.bg} backdrop-blur-xl ${colorClasses.border} rounded-xl transition-all duration-300 ease-out hover:scale-[1.02] p-6 ${className}`}
            style={{
                boxShadow: `
                    0 4px 16px -4px rgba(0, 0, 0, 0.4),
                    0 2px 8px -2px rgba(0, 0, 0, 0.3),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1),
                    inset 0 -1px 0 rgba(255, 255, 255, 0.05)
                `,
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `
                    
                    0 0 24px ${
                        colorClasses.glow.includes("blue")
                            ? "rgba(59, 130, 246, 0.3)"
                            : colorClasses.glow.includes("purple")
                            ? "rgba(147, 51, 234, 0.3)"
                            : colorClasses.glow.includes("green")
                            ? "rgba(34, 197, 94, 0.3)"
                            : colorClasses.glow.includes("red")
                            ? "rgba(239, 68, 68, 0.3)"
                            : colorClasses.glow.includes("cyan")
                            ? "rgba(6, 182, 212, 0.3)"
                            : colorClasses.glow.includes("indigo")
                            ? "rgba(99, 102, 241, 0.3)"
                            : colorClasses.glow.includes("gray")
                            ? "rgba(156, 163, 175, 0.3)"
                            : "rgba(255, 255, 255, 0.2)"
                    },
                    inset 0 1px 0 rgba(255, 255, 255, 0.15),
                    inset 0 -1px 0 rgba(255, 255, 255, 0.1)
                `;
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `
                    0 4px 16px -4px rgba(0, 0, 0, 0.4),
                    0 2px 8px -2px rgba(0, 0, 0, 0.3),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1),
                    inset 0 -1px 0 rgba(255, 255, 255, 0.05)
                `;
            }}
        >
            {/* Glass overlay for enhanced depth */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] via-transparent to-white/[0.05] rounded-xl pointer-events-none" />

            {/* Content */}
            <div className="relative z-10">{children}</div>

            {/* Hover glow effect */}
            <div
                className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${colorClasses.glow} blur-xl -z-10`}
            />
        </div>
    );
}
