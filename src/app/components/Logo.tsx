import Link from "next/link";
import Image from "next/image";

/**
 * The project logo component.
 *
 * This component displays the project's logo image and name, linked to the homepage.
 *
 * @returns {JSX.Element} The rendered logo component.
 */
export default function Logo() {
    return (
        <Link
            href="/"
            className="group flex items-center space-x-2 text-white text-xl font-bold"
        >
            <Image
                src="/logo.png"
                alt="Logo"
                width={40}
                height={40}
                className="rounded-full"
                priority
            />
            <span>Project</span>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Kororā
            </span>
        </Link>
    );
}
