"use client";

import { useState } from "react";
import Logo from "./Logo";
import NavLink from "./NavLink";
import MobileMenuButton from "./MobileMenuButton";

const navigationItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Proposal", href: "/proposal" },
    { name: "Team", href: "/team" },
];

export default function Navigation() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 glass-card border-b border-white/10">
            <div className="content-container px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Logo />
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {navigationItems.map((item) => (
                            <NavLink key={item.href} href={item.href}>
                                {item.name}
                            </NavLink>
                        ))}
                    </div>

                    <div className="md:hidden flex items-center">
                        <MobileMenuButton
                            isOpen={isMobileMenuOpen}
                            onClick={() =>
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }
                        />
                    </div>
                </div>

                {isMobileMenuOpen && (
                    <div className="md:hidden">
                        <div className="glass-card mt-2 px-2 pt-2 pb-3 space-y-1">
                            {navigationItems.map((item) => (
                                <NavLink
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block text-base font-medium"
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
