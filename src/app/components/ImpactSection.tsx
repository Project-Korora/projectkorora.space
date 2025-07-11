"use client";

import { useEffect, useState, useRef } from "react";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faCog, faGlobe } from "@fortawesome/free-solid-svg-icons";

interface StatProps {
    number: string;
    label: string;
    suffix?: string;
    description: string;
}

/**
 * An animated statistic component.
 *
 * This component displays a number that animates (counts up) when it becomes
 * visible in the viewport. It also shows a label and a description.
 *
 * @param {object} props - The properties for the component.
 * @param {string} props.number - The target number (or string) to display.
 * @param {string} props.label - The label for the statistic.
 * @param {string} [props.suffix=""] - An optional suffix to append to the number (e.g., "+").
 * @param {string} props.description - A description of the statistic.
 * @returns {JSX.Element} The rendered animated statistic.
 */
function AnimatedStat({ number, label, suffix = "", description }: StatProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [displayNumber, setDisplayNumber] = useState("0");
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (isVisible) {
            // Simple animation for non-numeric values
            if (isNaN(parseInt(number))) {
                setDisplayNumber(number);
                return;
            }

            const target = parseInt(number);
            const duration = 2000;
            const steps = 60;
            const increment = target / steps;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    setDisplayNumber(number);
                    clearInterval(timer);
                } else {
                    setDisplayNumber(Math.floor(current).toString());
                }
            }, duration / steps);

            return () => clearInterval(timer);
        }
    }, [isVisible, number]);

    return (
        <div ref={ref} className="text-center">
            <div className="text-4xl md:text-6xl font-bold text-light mb-2">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {displayNumber}
                    {suffix}
                </span>
            </div>
            <div className="text-lg font-semibold text-light mb-2">{label}</div>
            <div className="text-sm text-light/60 max-w-xs mx-auto">
                {description}
            </div>
        </div>
    );
}

/**
 * The stats section for the homepage.
 *
 * This component showcases key project statistics using the AnimatedStat
 * component. It also includes cards highlighting academic excellence,
 * innovation, and industry impact.
 *
 * @returns {JSX.Element} The rendered stats section.
 */
export default function ImpactSection() {
    const stats = [
        {
            number: "1st",
            label: "Student CubeSat",
            description:
                "New Zealand's pioneering student-led satellite initiative",
        },
        {
            number: "3",
            label: "U CubeSat",
            suffix: "U",
            description: "Compact satellite platform maximizing functionality",
        },
        {
            number: "100",
            label: "Students Involved",
            suffix: "+",
            description: "Multidisciplinary team of engineering students",
        },
        {
            number: "EP",
            label: "Propulsion System",
            description: "Advanced electric propulsion technology",
        },
    ];

    return (
        <section className="py-20 relative">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-light mb-6">
                        Project{" "}
                        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Impact
                        </span>
                    </h2>
                    <p className="text-xl text-light/80 max-w-3xl mx-auto">
                        Measurable progress toward advancing New Zealand&apos;s
                        space capabilities and educational excellence
                    </p>
                </div>

                {/* Stats Container */}
                <div className="relative">
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-xl"></div>

                    {/* Stats Grid */}
                    <Card className="p-8 md:p-12">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
                            {stats.map((stat, index) => (
                                <AnimatedStat
                                    key={index}
                                    number={stat.number}
                                    label={stat.label}
                                    suffix={stat.suffix}
                                    description={stat.description}
                                />
                            ))}
                        </div>
                    </Card>
                </div>

                {/* Additional Info */}
                <div className="mt-16 grid md:grid-cols-3 gap-8">
                    <Card color="primary" className="text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/20 rounded-lg mb-4">
                            <FontAwesomeIcon
                                icon={faAward}
                                className="text-light"
                                size="xl"
                                fixedWidth
                            />
                        </div>
                        <h3 className="text-lg font-semibold text-light mb-2">
                            Academic Excellence
                        </h3>
                        <p className="text-light/70 text-sm">
                            Victoria University of Wellington partnership
                        </p>
                    </Card>

                    <Card color="primary" className="text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/20 rounded-lg mb-4">
                            <FontAwesomeIcon
                                icon={faCog}
                                className="text-light"
                                size="xl"
                                fixedWidth
                            />
                        </div>
                        <h3 className="text-lg font-semibold text-light mb-2">
                            Innovation Focus
                        </h3>
                        <p className="text-light/70 text-sm">
                            Cutting-edge space technology development
                        </p>
                    </Card>

                    <Card color="primary" className="text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/20 rounded-lg mb-4">
                            <FontAwesomeIcon
                                icon={faGlobe}
                                className="text-light"
                                size="xl"
                                fixedWidth
                            />
                        </div>
                        <h3 className="text-lg font-semibold text-light mb-2">
                            Industry Impact
                        </h3>
                        <p className="text-light/70 text-sm">
                            Building New Zealand&apos;s space economy
                        </p>
                    </Card>
                </div>
            </div>
        </section>
    );
}
