import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRight,
    faUsers,
    faIndustry,
    faFlask,
    faMapMarkerAlt,
    faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

/**
 * A call-to-action (CTA) section for the homepage.
 *
 * This component is designed to encourage user engagement, providing prominent
 * links to the team and contact pages, and highlighting key opportunities
 * for students, industry, and researchers.
 *
 * @returns {JSX.Element} The rendered CTA section.
 */
export default function CTASection() {
    return (
        <section className="py-20 relative">
            <div className="max-w-6xl mx-auto">
                {/* Main CTA Container */}
                <div className="relative">
                    {/* Background Effects */}
                    <div className="absolute inset-0 bg-primary/20 rounded blur-xl"></div>
                    <div className="absolute inset-0 bg-secondary/40 rounded"></div>

                    {/* Content */}
                    <Card className="p-8 md:p-16 text-center">
                        {/* Header */}
                        <div className="mb-12">
                            <h2 className="text-4xl md:text-6xl font-bold text-light mb-6 leading-tight">
                                Join the <br />
                                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                                    Space Revolution
                                </span>
                            </h2>
                            <p className="text-xl md:text-2xl text-light/80 max-w-4xl mx-auto leading-relaxed">
                                Be part of New Zealand&apos;s pioneering journey
                                into space technology. Whether you&apos;re a
                                student, researcher, or industry professional,
                                there&apos;s a place for you in Project Kororā.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                            <Button
                                href="/team"
                                gradientColors={["primary", "secondary"]}
                                size="lg"
                                className="group transition-all duration-300 transform hover:scale-105"
                            >
                                <span className="flex items-center">
                                    Meet Our Team
                                    <FontAwesomeIcon
                                        icon={faArrowRight}
                                        className="ml-2 group-hover:translate-x-1 transition-transform"
                                        size="lg"
                                        fixedWidth
                                    />
                                </span>
                            </Button>
                            <Button
                                href="/contact"
                                variant="outline"
                                size="lg"
                                className="backdrop-blur-sm"
                            >
                                Get Involved
                            </Button>
                        </div>

                        {/* Features Grid */}
                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            <div className="text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-accent rounded mb-4">
                                    <FontAwesomeIcon
                                        icon={faUsers}
                                        className="text-light"
                                        size="2x"
                                        fixedWidth
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-light mb-2">
                                    For Students
                                </h3>
                                <p className="text-light/70">
                                    Gain hands-on experience in aerospace
                                    engineering and space technology
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-accent rounded mb-4">
                                    <FontAwesomeIcon
                                        icon={faIndustry}
                                        className="text-light"
                                        size="2x"
                                        fixedWidth
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-light mb-2">
                                    For Industry
                                </h3>
                                <p className="text-light/70">
                                    Partner with us to advance New
                                    Zealand&apos;s space technology capabilities
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-accent rounded mb-4">
                                    <FontAwesomeIcon
                                        icon={faFlask}
                                        className="text-light"
                                        size="2x"
                                        fixedWidth
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-light mb-2">
                                    For Researchers
                                </h3>
                                <p className="text-light/70">
                                    Collaborate on cutting-edge space research
                                    and electric propulsion systems
                                </p>
                            </div>
                        </div>

                        {/* Bottom Info */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-light/60">
                            <div className="flex items-center">
                                <FontAwesomeIcon
                                    icon={faMapMarkerAlt}
                                    className="mr-2"
                                    size="lg"
                                    fixedWidth
                                />
                                <span>Wellington, New Zealand</span>
                            </div>
                            <div className="flex items-center">
                                <FontAwesomeIcon
                                    icon={faCalendarAlt}
                                    className="mr-2"
                                    size="lg"
                                    fixedWidth
                                />
                                <span>Victoria University of Wellington</span>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}
