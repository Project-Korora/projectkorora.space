"use client";

import { ReactNode } from "react";

type CardColor =
    | "default"
    | "primary"
    | "secondary"
    | "accent"
    | "light"
    | "dark";

interface CardProps {
    children: ReactNode;
    className?: string;
    color?: CardColor;
}

// Utility class fragments keyed by colour token
const TOKEN: Record<CardColor, { bg: string; border: string; glow: string }> = {
    default: {
        bg: "bg-[color:color-mix(in_srgb,var(--color-dark)_var(--opacity-card),transparent)]",
        border: "border-[var(--color-dark)]/(var(--opacity-card)) hover:border-[var(--color-dark-hover)]/[calc(var(--opacity-card)*1.5)]",
        glow: "bg-[var(--color-dark-hover)]/20",
    },
    primary: {
        bg: "bg-[color:color-mix(in_srgb,var(--color-primary)_var(--opacity-card),transparent)]",
        border: "border-[var(--color-primary)]/(var(--opacity-card)) hover:border-[var(--color-primary-hover)]/[calc(var(--opacity-card)*1.5)]",
        glow: "bg-[var(--color-primary-hover)]/20",
    },
    secondary: {
        bg: "bg-[color:color-mix(in_srgb,var(--color-secondary)_var(--opacity-card),transparent)]",
        border: "border-[var(--color-secondary)]/(var(--opacity-card)) hover:border-[var(--color-secondary-hover)]/[calc(var(--opacity-card)*1.5)]",
        glow: "bg-[var(--color-secondary-hover)]/20",
    },
    accent: {
        bg: "bg-[color:color-mix(in_srgb,var(--color-accent)_var(--opacity-card),transparent)]",
        border: "border-[var(--color-accent)]/(var(--opacity-card)) hover:border-[var(--color-accent-hover)]/[calc(var(--opacity-card)*1.5)]",
        glow: "bg-[var(--color-accent-hover)]/20",
    },
    light: {
        bg: "bg-[color:color-mix(in_srgb,var(--color-light)_var(--opacity-card),transparent)]",
        border: "border-[var(--color-light)]/(var(--opacity-card)) hover:border-[var(--color-light-hover)]/[calc(var(--opacity-card)*1.5)]",
        glow: "bg-[var(--color-light-hover)]/20",
    },
    dark: {
        bg: "bg-[color:color-mix(in_srgb,var(--color-dark)_var(--opacity-card),transparent)]",
        border: "border-[var(--color-dark)]/(var(--opacity-card)) hover:border-[var(--color-dark-hover)]/[calc(var(--opacity-card)*1.5)]",
        glow: "bg-[var(--color-dark-hover)]/20",
    },
};

/**
 * A styled card component with a frosted glass effect and interactive glow.
 *
 * This component serves as a container for content, applying consistent styling
 * based on the application's design tokens. It can be customized with different
 * color themes.
 *
 * @param {object} props - The properties for the component.
 * @param {React.ReactNode} props.children - The content to be displayed inside the card.
 * @param {string} [props.className=""] - Additional CSS classes to apply to the card.
 * @param {"default"|"primary"|"secondary"|"accent"|"light"|"dark"} [props.color="default"] - The color theme of the card.
 * @returns {JSX.Element} The rendered card component.
 */
export default function Card({
    children,
    className = "",
    color = "default",
}: CardProps) {
    const { bg, border, glow } = TOKEN[color] ?? TOKEN.default;

    return (
        <div
            className={`group relative p-6 rounded-[var(--radius)] backdrop-blur-[var(--backdrop-blur)] transition-transform duration-300 ease-out hover:scale-[1.02] ${bg} ${border} ${className}`}
            style={{
                /* subtle depth + inner highlight */
                boxShadow:
                    "0 4px 14px -4px rgba(0,0,0,.35), 0 1px 3px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.08), inset 0 -1px 0 rgba(255,255,255,.04)",
            }}
        >
            {/* frosted glass highlight */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-light)]/5 via-transparent to-[var(--color-light)]/5 rounded-[inherit] pointer-events-none" />

            {/* content */}
            <div className="relative z-10">{children}</div>

            {/* coloured glow */}
            <div
                className={`absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 blur-md mix-blend-screen pointer-events-none transition-opacity duration-300 ${glow}`}
            />
        </div>
    );
}
