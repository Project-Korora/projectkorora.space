import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSatellite } from "@fortawesome/free-solid-svg-icons";

export default function MissionSection() {
    return (
        <section className="py-20 relative">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Our{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                            Mission
                        </span>
                    </h2>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto">
                        Advancing New Zealand&apos;s space capabilities through
                        student-led innovation and cutting-edge CubeSat
                        technology
                    </p>
                </div>

                {/* Mission Grid */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-white">
                                Pioneering Space Technology
                            </h3>
                            <p className="text-white/80 leading-relaxed">
                                Project Kororā represents New Zealand&apos;s
                                first comprehensive student-led CubeSat
                                initiative, designed to develop our
                                nation&apos;s space economy through innovative
                                electric propulsion systems and advanced
                                satellite technology.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-white">
                                Educational Excellence
                            </h3>
                            <p className="text-white/80 leading-relaxed">
                                Based at Te Herenga Waka—Victoria University of
                                Wellington, our project provides hands-on
                                experience in aerospace engineering, fostering
                                the next generation of space industry
                                professionals in Aotearoa.
                            </p>
                        </div>
                    </div>

                    {/* Visual Element */}
                    <div className="relative">
                        <Card color="blue" className="p-8">
                            {/* Satellite Icon */}
                            <div className="text-center mb-6">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mb-4">
                                    <FontAwesomeIcon
                                        icon={faSatellite}
                                        className="text-white"
                                        size="3x"
                                        fixedWidth
                                    />
                                </div>
                                <h4 className="text-xl font-semibold text-white mb-2">
                                    CubeSat Technology
                                </h4>
                                <p className="text-white/70 text-sm">
                                    Developing next-generation small satellites
                                    with innovative electric propulsion
                                    capabilities
                                </p>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-4 text-center">
                                <div>
                                    <div className="text-2xl font-bold text-cyan-400">
                                        3U
                                    </div>
                                    <div className="text-white/60 text-sm">
                                        CubeSat Size
                                    </div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-blue-400">
                                        EP
                                    </div>
                                    <div className="text-white/60 text-sm">
                                        Propulsion
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
