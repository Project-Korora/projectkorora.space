import Link from "next/link";

/**
 * The footer component for the application.
 *
 * This component displays the copyright notice and provides links to important
 * pages like Privacy Policy, Terms of Use, and Accessibility.
 *
 * @returns {JSX.Element} The rendered footer component.
 */
export default function Footer() {
    return (
        <>
            {/* Spacer above footer */}
            <div className="h-24"></div>

            <footer className="bg-black/40 backdrop-blur-xl border-t border-white/10 py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        {/* Copyright */}
                        <p className="text-white/60 text-sm">
                            © {new Date().getFullYear()} Project Kororā. All
                            rights reserved.
                        </p>

                        {/* Links */}
                        <div className="flex flex-wrap justify-center gap-6">
                            <Link
                                href="/privacy"
                                className="text-white/60 hover:text-white/90 text-sm transition-colors duration-200"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="/terms"
                                className="text-white/60 hover:text-white/90 text-sm transition-colors duration-200"
                            >
                                Terms of Use
                            </Link>
                            <Link
                                href="/accessibility"
                                className="text-white/60 hover:text-white/90 text-sm transition-colors duration-200"
                            >
                                Accessibility
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
