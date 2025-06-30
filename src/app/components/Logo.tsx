import Link from "next/link";
import Image from "next/image";

export default function Logo() {
    return (
        <Link
            href="/"
            className="flex items-center space-x-3 text-white text-xl font-bold hover:text-white/80 transition-colors duration-200"
        >
            <Image
                src="/logo.png"
                alt="Logo"
                width={50}
                height={50}
                className="rounded-full"
                priority
            />
            <span>Project Kororā</span>
        </Link>
    );
}
