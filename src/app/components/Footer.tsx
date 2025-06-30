import Logo from "./Logo";

export default function Footer() {
    return (
        <footer className="bg-black/80 backdrop-blur-lg border-t border-white/10 mt-25">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    {/* Brand Section */}

                    <div>
                        <Logo />
                        <p className="mt-2 text-sm text-white/60">
                            A student-led initiative at Te Herenga Waka Victoria
                            University of Wellington
                        </p>
                    </div>

                    {/* Resources Section */}
                    <div className="flex flex-col items-start md:items-end gap-4">
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="/privacy"
                                className="text-white/60 hover:text-white/80 text-sm transition-colors duration-200"
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="/terms"
                                className="text-white/60 hover:text-white/80 text-sm transition-colors duration-200"
                            >
                                Terms of Use
                            </a>
                            <a
                                href="/accessibility"
                                className="text-white/60 hover:text-white/80 text-sm transition-colors duration-200"
                            >
                                Accessibility
                            </a>
                            <a
                                href="/sitemap.xml"
                                className="text-white/60 hover:text-white/80 text-sm transition-colors duration-200"
                            >
                                Sitemap
                            </a>
                        </div>
                        <p className="text-white/60 text-sm">
                            © {new Date().getFullYear()} Project Kororā. All
                            rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
