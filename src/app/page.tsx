import Link from "next/link";

export default function HomePage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6">
            <h1 className="text-4xl font-bold mb-8">Welcome to Our Website</h1>

            <nav className="space-y-4">
                <div className="flex flex-col items-center space-y-4">
                    <Link
                        href="/about"
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
                    >
                        About
                    </Link>
                    <Link
                        href="/contact"
                        className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200"
                    >
                        Contact
                    </Link>
                    <Link
                        href="/proposal"
                        className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200"
                    >
                        Proposal
                    </Link>
                    <Link
                        href="/team"
                        className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200"
                    >
                        Team
                    </Link>
                </div>
            </nav>
        </div>
    );
}
