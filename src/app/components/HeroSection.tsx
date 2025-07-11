"use client";

import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

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
    const heroContentRef = useRef<HTMLDivElement>(null);

    // Simplified parallax with better mobile performance
    useEffect(() => {
        let ticking = false;

        const updateParallax = () => {
            if (heroContentRef.current) {
                // Get scroll position - check body first since html has overflow:hidden
                const scrollTop =
                    document.body.scrollTop ||
                    window.scrollY ||
                    document.documentElement.scrollTop;

                // Use transform3d for GPU acceleration
                const translateY = scrollTop * 0.2;
                heroContentRef.current.style.transform = `translate3d(0, ${translateY}px, 0)`;
            }
            ticking = false;
        };

        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(updateParallax);
                ticking = true;
            }
        };

        // Listen to both window and body scroll since html has overflow:hidden
        window.addEventListener("scroll", handleScroll, { passive: true });
        document.body.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.body.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Hero Content */}
            <div
                ref={heroContentRef}
                className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
                style={{ willChange: "transform" }}
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
                    <Button
                        href="/about"
                        gradientColors={["primary", "secondary"]}
                        size="lg"
                        className="group transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-secondary/20"
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
                    </Button>
                    <Button href="/proposal" variant="outline" size="lg">
                        View Our Proposal
                    </Button>
                </div>
            </div>
        </section>
    );
}
