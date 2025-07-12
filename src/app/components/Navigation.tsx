"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";
import NavLink from "./NavLink";
import MobileMenuButton from "./MobileMenuButton";
import SocialIcons from "./SocialIcons";
import { useProposalAccess } from "./ProposalAccessProvider";

interface NavigationItem {
    name: string;
    href: string;
    requiresAccess?: boolean;
}

const baseNavigationItems: NavigationItem[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "Proposal", href: "/proposal", requiresAccess: true },
    { name: "Contact", href: "/contact" },
    { name: "Theme", href: "/theme" },
];

/**
 * The main navigation component for the application.
 *
 * This component includes the logo, desktop navigation links, social icons,
 * and a mobile menu button that toggles a dropdown menu for smaller screens.
 * It handles the state for the mobile menu.
 *
 * @returns {JSX.Element} The rendered navigation component.
 */
export default function Navigation() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { hasAccess } = useProposalAccess();

    // Filter navigation items based on access
    const navigationItems = baseNavigationItems.filter(
        (item) => !item.requiresAccess || hasAccess
    );

    // Close mobile menu when window is resized to desktop size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1000) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Close mobile menu on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header role="banner">
            <nav
                className="fixed top-0 left-0 right-0 z-[9999] bg-dark/80 backdrop-blur-lg border-b border-light/10 w-full"
                role="navigation"
                aria-label="Main navigation"
            >
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <Logo />
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden min-[1000px]:flex items-center">
                            {navigationItems.map((item) => (
                                <NavLink key={item.href} href={item.href}>
                                    {item.name}
                                </NavLink>
                            ))}
                        </div>

                        {/* Desktop Social Icons */}
                        <div className="hidden min-[1000px]:flex items-center">
                            <SocialIcons size="xl" />
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="min-[1000px]:hidden flex items-center">
                            <MobileMenuButton
                                isOpen={isMobileMenuOpen}
                                onClick={toggleMobileMenu}
                            />
                        </div>
                    </div>

                    {/* Mobile Navigation Menu */}
                    {isMobileMenuOpen && (
                        <div
                            className="min-[1000px]:hidden"
                            role="menu"
                            aria-label="Mobile navigation menu"
                        >
                            <div className="bg-dark/50 backdrop-blur-lg border border-light/10 rounded-lg mt-2 px-2 pt-2 pb-3 space-y-1 mb-3">
                                {navigationItems.map((item) => (
                                    <NavLink
                                        key={item.href}
                                        href={item.href}
                                        onClick={closeMobileMenu}
                                        className="block text-base font-medium"
                                        role="menuitem"
                                    >
                                        {item.name}
                                    </NavLink>
                                ))}

                                {/* Mobile Social Icons */}
                                <div className="pt-4 mt-4 border-t border-light/10">
                                    <SocialIcons variant="mobile" size="sm" />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
}
