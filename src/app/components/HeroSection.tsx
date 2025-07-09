"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

/**
 * The hero section for the homepage.
 *
 * This component serves as the main entry view, featuring the project title,
 * a brief description, and primary calls-to-action. It includes a subtle
 * parallax effect on scroll.
 *
 * @returns {JSX.Element} The rendered hero section.
 */
export default function HeroSection() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Hero Content */}
            <div
                className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
                style={{ transform: `translateY(${scrollY * 0.2}px)` }}
            >
                {/* Main Title with Gradient */}
                <h1 className="text-7xl md:text-7xl lg:text-9xl font-bold mb-6 leading-tight">
                    <span className="text-light">Project</span>
                    <br />
                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Kororā
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="text-xl md:text-2xl text-light/80 mb-8 max-w-4xl mx-auto leading-relaxed">
                    New Zealand CubeSat with
                    <span className="text-primary font-semibold">
                        {" "}
                        electric propulsion systems
                    </span>
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                    <Link
                        href="/about"
                        className="group px-8 py-4 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-light font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/25"
                    >
                        <span className="flex items-center">
                            Explore Our Mission
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                className="ml-2 group-hover:translate-x-1 transition-transform"
                                size="lg"
                                fixedWidth
                            />
                        </span>
                    </Link>
                    <Link
                        href="/proposal"
                        className="px-8 py-4 border-2 border-light/30 hover:border-light/60 text-light font-semibold transition-all duration-300 backdrop-blur-sm hover:bg-light/10"
                    >
                        View Our Proposal
                    </Link>
                </div>
            </div>
        </section>
    );
}
