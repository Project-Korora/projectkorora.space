"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";
import NavLink from "./NavLink";
import MobileMenuButton from "./MobileMenuButton";

interface NavigationItem {
    name: string;
    href: string;
}

const navigationItems: NavigationItem[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "Proposal", href: "/proposal" },
    { name: "Contact", href: "/contact" },
];

export default function Navigation() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Close mobile menu when window is resized to desktop size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
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
                className="fixed top-0 left-0 right-0 z-[9999] bg-black/80 backdrop-blur-lg border-b border-white/10 w-full"
                role="navigation"
                aria-label="Main navigation"
            >
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <Logo />
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-0">
                            {navigationItems.map((item) => (
                                <NavLink key={item.href} href={item.href}>
                                    {item.name}
                                </NavLink>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <MobileMenuButton
                                isOpen={isMobileMenuOpen}
                                onClick={toggleMobileMenu}
                            />
                        </div>
                    </div>

                    {/* Mobile Navigation Menu */}
                    {isMobileMenuOpen && (
                        <div
                            className="md:hidden"
                            role="menu"
                            aria-label="Mobile navigation menu"
                        >
                            <div className="bg-black/50 backdrop-blur-lg border border-white/10 rounded-lg mt-2 px-2 pt-2 pb-3 space-y-1">
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
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
}
