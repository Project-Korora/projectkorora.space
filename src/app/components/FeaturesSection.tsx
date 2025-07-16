import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faRocket,
    faCube,
    faGraduationCap,
    faHandshake,
} from "@fortawesome/free-solid-svg-icons";

/**
 * The features section for the homepage.
 *
 * This component displays the key features of the project in a grid of cards,
 * highlighting aspects like electric propulsion, the CubeSat platform,
 * educational impact, and industry collaboration.
 *
 * @returns {JSX.Element} The rendered features section.
 */
export default function FeaturesSection() {
    const features = [
        {
            icon: faRocket,
            title: "Hall-Effect Thruster",
            description:
                "Revolutionary miniature Hall-effect thruster technology enabling precise orbital maneuvers and extended mission duration for CubeSats.",
            color: "from-primary to-secondary",
        },
        {
            icon: faCube,
            title: "3U CubeSat Platform",
            description:
                "Compact, standardized satellite architecture maximizing functionality while maintaining cost-effectiveness and launch compatibility.",
            color: "from-primary to-secondary",
        },
        {
            icon: faGraduationCap,
            title: "Inclusive Education",
            description:
                "Open-source platforms and workshops creating accessible pathways for students from all backgrounds—STEM, law, design, and arts—to explore space technology.",
            color: "from-primary to-secondary",
        },
        {
            icon: faHandshake,
            title: "Industry Collaboration",
            description:
                "Strategic partnerships with aerospace companies and research institutions accelerating innovation and knowledge transfer.",
            color: "from-primary to-secondary",
        },
    ];

    return (
        <section className="py-20 relative">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-light mb-6">
                        Key{" "}
                        <span className="bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent">
                            Features
                        </span>
                    </h2>
                    <p className="text-xl text-light/70 max-w-3xl mx-auto">
                        Cutting-edge technology and innovative solutions driving
                        the future of New Zealand&apos;s space capabilities
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <Card
                            key={index}
                            className="group relative transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10 text-center h-full flex flex-col"
                        >
                            {/* Icon */}
                            <div
                                className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${feature.color} rounded mb-4 text-light group-hover:scale-110 transition-transform duration-300`}
                            >
                                <FontAwesomeIcon
                                    icon={feature.icon}
                                    size="2x"
                                    fixedWidth
                                />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col flex-grow">
                                <h3 className="text-xl font-semibold text-light mb-3 group-hover:text-primary transition-colors duration-300">
                                    {feature.title}
                                </h3>
                                <p className="text-light/70 leading-relaxed flex-grow">
                                    {feature.description}
                                </p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
