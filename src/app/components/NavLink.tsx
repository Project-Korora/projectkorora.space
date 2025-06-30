"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    role?: string;
}

export default function NavLink({
    href,
    children,
    onClick,
    className = "",
    role,
}: NavLinkProps) {
    const pathname = usePathname();

    return (
        <Link
            href={href}
            onClick={onClick}
            data-active={pathname === href}
            className={`py-2 px-4 text-lg font-small transition-colors duration-200 text-white/80 hover:text-white hover: data-[active=true]:text-blue-300 ${className}`}
            role={role}
        >
            {children}
        </Link>
    );
}
