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

    // Function to get the correct ordinal suffix for a number
    const getOrdinalSuffix = (num: number): string => {
        const j = num % 10;
        const k = num % 100;
        if (j == 1 && k != 11) {
            return "st";
        }
        if (j == 2 && k != 12) {
            return "nd";
        }
        if (j == 3 && k != 13) {
            return "rd";
        }
        return "th";
    };

    useEffect(() => {
        if (isVisible) {
            // Check if this is an ordinal number (number + ordinal suffix like "st", "nd", "rd", "th")
            // OR if it's the "New Zealand CubeSat" statistic which should animate as ordinal
            const isOrdinal =
                (suffix && ["st", "nd", "rd", "th"].includes(suffix)) ||
                label.includes("New Zealand CubeSat");

            // Check if this is a text animation (like "HET")
            const isTextAnimation =
                isNaN(parseInt(number)) && number.length > 1;

            // Simple animation for single character non-numeric values
            if (isNaN(parseInt(number)) && !isTextAnimation) {
                setDisplayNumber(number);
                return;
            }

            // Text animation (letter by letter)
            if (isTextAnimation) {
                const duration = 2000;
                const letterDelay = duration / number.length;
                let currentLetterIndex = 0;

                const timer = setInterval(() => {
                    currentLetterIndex++;
                    if (currentLetterIndex >= number.length) {
                        setDisplayNumber(number);
                        clearInterval(timer);
                    } else {
                        setDisplayNumber(
                            number.substring(0, currentLetterIndex + 1)
                        );
                    }
                }, letterDelay);

                return () => clearInterval(timer);
            }

            const target = parseInt(number);
            const duration = 2000;
            const steps = 60;
            const increment = target / steps;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    // At the end, show the final result with ordinal suffix if needed
                    if (isOrdinal && !suffix) {
                        setDisplayNumber(
                            number + getOrdinalSuffix(parseInt(number))
                        );
                    } else {
                        setDisplayNumber(number);
                    }
                    clearInterval(timer);
                } else {
                    const currentNum = Math.floor(current);
                    if (isOrdinal && currentNum > 0) {
                        // For ordinal numbers, display the current number with its correct suffix
                        setDisplayNumber(
                            currentNum + getOrdinalSuffix(currentNum)
                        );
                    } else {
                        setDisplayNumber(currentNum.toString());
                    }
                }
            }, duration / steps);

            return () => clearInterval(timer);
        }
    }, [isVisible, number, suffix, label]);

    // Check if this is an ordinal number for display logic
    const isOrdinalDisplay =
        (suffix && ["st", "nd", "rd", "th"].includes(suffix)) ||
        label.includes("New Zealand CubeSat");

    return (
        <div ref={ref} className="text-center">
            <div className="text-4xl md:text-6xl font-bold text-light mb-2">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {displayNumber}
                    {!isOrdinalDisplay && suffix}
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
            number: "3",
            label: "New Zealand CubeSat",
            suffix: "",
            description: "A pioneering student-led satellite initiative",
        },
        {
            number: "3",
            label: "CubeSat",
            suffix: "U",
            description: "Compact satellite platform maximizing functionality",
        },
        {
            number: "100",
            label: "Students Involved",
            suffix: "+",
            description:
                "Multidisciplinary team from STEM, law, design, and arts",
        },
        {
            number: "HET",
            label: "Propulsion System",
            description: "Miniature Hall-effect thruster technology",
        },
    ];

    return (
        <section className="py-20 relative">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-light mb-6">
                        Project{" "}
                        <span className="bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent">
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
                    <Card color="secondary" className="text-center">
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

                    <Card color="secondary" className="text-center">
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

                    <Card color="secondary" className="text-center">
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
