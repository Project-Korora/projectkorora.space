"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
                    <span className="text-white">Project</span>
                    <br />
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                        Kororā
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed">
                    New Zealand CubeSat with
                    <span className="text-blue-300 font-semibold">
                        {" "}
                        electric propulsion systems
                    </span>
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                    <Link
                        href="/about"
                        className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
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
                        className="px-8 py-4 border-2 border-white/30 hover:border-white/60 text-white font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm hover:bg-white/10"
                    >
                        View Our Proposal
                    </Link>
                </div>
            </div>
        </section>
    );
}
