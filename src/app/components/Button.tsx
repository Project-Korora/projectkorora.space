"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";

interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "accent" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    href?: string;
    className?: string;
    disabled?: boolean;
    fullWidth?: boolean;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    isLoading?: boolean;
    gradientColors?: string[];
    gradientDirection?: "r" | "l" | "t" | "b" | "tl" | "tr" | "bl" | "br";
}

export default function Button({
    children,
    variant = "primary",
    size = "md",
    href,
    className = "",
    disabled = false,
    fullWidth = false,
    onClick,
    type = "button",
    isLoading = false,
    gradientColors,
    gradientDirection = "r",
}: ButtonProps) {
    // Base classes for all buttons
    const baseClasses =
        "inline-flex items-center justify-center font-medium transition-all duration-200 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-black";

    // Size classes
    const sizeClasses = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
    };

    // Variant classes
    const variantClasses = {
        primary:
            "bg-primary hover:bg-primary-hover text-light focus-visible:ring-primary/50 shadow-md hover:shadow-lg",
        secondary:
            "bg-secondary hover:bg-secondary-hover text-light focus-visible:ring-secondary/50 shadow-md hover:shadow-lg",
        accent: "bg-accent hover:bg-accent-hover text-light focus-visible:ring-accent/50 shadow-md hover:shadow-lg",
        outline:
            "bg-transparent border-2 border-light/20 hover:border-light/40 text-light hover:bg-light/5 focus-visible:ring-light/20",
        ghost: "bg-transparent hover:bg-light/10 text-light/80 hover:text-light focus-visible:ring-light/20",
    };

    // Build gradient classes
    const buildGradientStyles = (
        colors?: string[],
        direction: "r" | "l" | "t" | "b" | "tl" | "tr" | "bl" | "br" = "r"
    ) => {
        if (!colors || colors.length < 2) return { className: "", style: {} };

        // Build CSS gradient strings
        const directionMap = {
            r: "to right",
            l: "to left",
            t: "to top",
            b: "to bottom",
            tl: "to top left",
            tr: "to top right",
            bl: "to bottom left",
            br: "to bottom right",
        };

        const cssDirection = directionMap[direction];

        // Build base gradient colors
        let baseColors = `var(--color-${colors[0]})`;
        if (colors.length > 2) {
            colors.slice(1, -1).forEach((c) => {
                baseColors += `, var(--color-${c})`;
            });
        }
        baseColors += `, var(--color-${colors[colors.length - 1]})`;

        // Build hover gradient colors
        let hoverColors = `var(--color-${colors[0]}-hover)`;
        if (colors.length > 2) {
            colors.slice(1, -1).forEach((c) => {
                hoverColors += `, var(--color-${c}-hover)`;
            });
        }
        hoverColors += `, var(--color-${colors[colors.length - 1]}-hover)`;

        return {
            className:
                "text-light focus-visible:ring-light/20 shadow-md hover:shadow-lg [background:var(--gradient-base)] hover:[background:var(--gradient-hover)] transition-all duration-200",
            style: {
                "--gradient-base": `linear-gradient(${cssDirection}, ${baseColors})`,
                "--gradient-hover": `linear-gradient(${cssDirection}, ${hoverColors})`,
            } as React.CSSProperties,
        };
    };

    const gradientStyles = buildGradientStyles(
        gradientColors,
        gradientDirection
    );

    // State classes
    const stateClasses = {
        disabled: "opacity-50 cursor-not-allowed",
        loading: "relative !text-transparent",
        fullWidth: "w-full",
    };

    // Combine classes using clsx
    const buttonClasses = clsx(
        baseClasses,
        sizeClasses[size],
        gradientStyles.className || variantClasses[variant],
        disabled && stateClasses.disabled,
        isLoading && stateClasses.loading,
        fullWidth && stateClasses.fullWidth,
        className
    );

    // Render as link if href is provided
    if (href) {
        return (
            <Link
                href={href}
                className={clsx(
                    buttonClasses,
                    disabled && "pointer-events-none"
                )}
                style={gradientStyles.style}
                tabIndex={disabled ? -1 : undefined}
                onClick={disabled ? (e) => e.preventDefault() : undefined}
                aria-disabled={disabled}
                aria-busy={isLoading}
            >
                {children}
                {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div
                            className="w-5 h-5 border-2 border-light/30 border-t-light rounded animate-spin"
                            aria-hidden="true"
                        />
                    </div>
                )}
            </Link>
        );
    }

    // Otherwise render as button
    return (
        <button
            type={type}
            className={buttonClasses}
            style={gradientStyles.style}
            onClick={onClick}
            disabled={disabled || isLoading}
            aria-busy={isLoading}
        >
            {children}
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div
                        className="w-5 h-5 border-2 border-light/30 border-t-light rounded animate-spin"
                        aria-hidden="true"
                    />
                </div>
            )}
        </button>
    );
}
