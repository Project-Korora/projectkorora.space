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

/**
 * A navigation link component.
 *
 * This component wraps Next.js's Link component, providing styling that
 * indicates the currently active page.
 *
 * @param {object} props - The properties for the component.
 * @param {string} props.href - The URL the link points to.
 * @param {React.ReactNode} props.children - The content to be displayed inside the link.
 * @param {() => void} [props.onClick] - Function to call on click, useful for closing mobile menus.
 * @param {string} [props.className=""] - Additional CSS classes to apply to the link.
 * @param {string} [props.role] - The ARIA role for the link.
 * @returns {JSX.Element} The rendered navigation link.
 */
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
            className={`py-2 px-4 text-lg font-small transition-colors duration-200 text-light hover:text-primary data-[active=true]:text-primary ${className}`}
            role={role}
        >
            {children}
        </Link>
    );
}
