import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faRocket,
    faCube,
    faGraduationCap,
    faHandshake,
} from "@fortawesome/free-solid-svg-icons";

export default function FeaturesSection() {
    const features = [
        {
            icon: faRocket,
            title: "Electric Propulsion",
            description:
                "Revolutionary EP thruster technology enabling precise orbital maneuvers and extended mission duration for small satellites.",
            color: "from-blue-500 to-cyan-500",
        },
        {
            icon: faCube,
            title: "3U CubeSat Platform",
            description:
                "Compact, standardized satellite architecture maximizing functionality while maintaining cost-effectiveness and launch compatibility.",
            color: "from-purple-500 to-pink-500",
        },
        {
            icon: faGraduationCap,
            title: "Educational Impact",
            description:
                "Hands-on learning opportunities for students in aerospace engineering, fostering New Zealand's space industry workforce.",
            color: "from-indigo-500 to-purple-500",
        },
        {
            icon: faHandshake,
            title: "Industry Collaboration",
            description:
                "Strategic partnerships with aerospace companies and research institutions accelerating innovation and knowledge transfer.",
            color: "from-pink-500 to-rose-500",
        },
    ];

    return (
        <section className="py-20 relative">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Key{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                            Features
                        </span>
                    </h2>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto">
                        Cutting-edge technology and innovative solutions driving
                        the future of New Zealand&apos;s space capabilities
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <Card
                            key={index}
                            className="group relative transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
                        >
                            {/* Icon */}
                            <div
                                className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl mb-4 text-white group-hover:scale-110 transition-transform duration-300`}
                            >
                                <FontAwesomeIcon
                                    icon={feature.icon}
                                    size="2x"
                                    fixedWidth
                                />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                                {feature.title}
                            </h3>
                            <p className="text-white/70 leading-relaxed">
                                {feature.description}
                            </p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
