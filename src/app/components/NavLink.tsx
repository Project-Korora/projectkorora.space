"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

export default function NavLink({
    href,
    children,
    onClick,
    className = "",
}: NavLinkProps) {
    const pathname = usePathname();

    return (
        <Link
            href={href}
            onClick={onClick}
            data-active={pathname === href}
            className={`nav-link ${className}`}
        >
            {children}
        </Link>
    );
}
