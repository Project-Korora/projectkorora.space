"use client";

import React from "react";
import Link from "next/link";

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
}

/**
 * A versatile button component that can be rendered as a button or a link.
 *
 * It supports different variants, sizes, and states (disabled, loading).
 *
 * @param {object} props - The properties for the component.
 * @param {React.ReactNode} props.children - The content to be displayed inside the button.
 * @param {"primary"|"secondary"|"accent"|"outline"|"ghost"} [props.variant="primary"] - The visual style of the button.
 * @param {"sm"|"md"|"lg"} [props.size="md"] - The size of the button.
 * @param {string} [props.href] - If provided, the button will be rendered as a Next.js Link.
 * @param {string} [props.className=""] - Additional CSS classes to apply to the button.
 * @param {boolean} [props.disabled=false] - Whether the button is disabled.
 * @param {boolean} [props.fullWidth=false] - Whether the button should take up the full width of its container.
 * @param {() => void} [props.onClick] - The function to call when the button is clicked.
 * @param {"button"|"submit"|"reset"} [props.type="button"] - The type of the button element.
 * @param {boolean} [props.isLoading=false] - If true, displays a loading spinner.
 * @returns {JSX.Element} The rendered button or link component.
 */
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
}: ButtonProps) {
    // Base classes for all buttons
    const baseClasses =
        "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-[var(--radius)] focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-black";

    // Size classes
    const sizeClasses = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
    };

    // Variant classes
    const variantClasses = {
        primary:
            "bg-primary hover:bg-primary-600 text-white focus:ring-primary-500/50 shadow-md hover:shadow-lg",
        secondary:
            "bg-secondary hover:bg-secondary-600 text-white focus:ring-secondary-500/50 shadow-md hover:shadow-lg",
        accent: "bg-accent hover:bg-accent-600 text-white focus:ring-accent-500/50 shadow-md hover:shadow-lg",
        outline:
            "bg-transparent border-2 border-white/20 hover:border-white/40 text-white hover:bg-white/5 focus:ring-white/20",
        ghost: "bg-transparent hover:bg-white/10 text-white/80 hover:text-white focus:ring-white/20",
    };

    // Loading and disabled classes
    const stateClasses = {
        disabled: "opacity-50 cursor-not-allowed",
        loading: "relative !text-transparent",
        fullWidth: "w-full",
    };

    // Combine all classes
    const buttonClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${disabled ? stateClasses.disabled : ""}
    ${isLoading ? stateClasses.loading : ""}
    ${fullWidth ? stateClasses.fullWidth : ""}
    ${className}
  `;

    // Render as link if href is provided
    if (href) {
        return (
            <Link
                href={href}
                className={buttonClasses}
                onClick={disabled ? (e) => e.preventDefault() : undefined}
            >
                {children}
                {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
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
            onClick={onClick}
            disabled={disabled || isLoading}
        >
            {children}
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                </div>
            )}
        </button>
    );
}
