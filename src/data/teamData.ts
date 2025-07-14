import {
    Code,
    MapPin,
    Rocket,
    Zap,
    Radio,
    Cpu,
    Scale,
    Palette,
    LucideProps,
} from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type TeamType = {
    name: string;
    icon: ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
    description: string;
    sections: { header: string; body: string }[];
};

const teams: TeamType[] = [
    {
        name: "Software Team",
        icon: Code,
        description:
            "Develops all onboard software and digital infrastructure using the PyCubed open-source platform to build robust, fault-tolerant systems.",
        sections: [
            {
                header: "Onboard Software Development",
                body: "Responsible for developing the embedded systems that operate core satellite functions, including propulsion control, telemetry, system diagnostics, and autonomous fault recovery. Code is implemented using the PyCubed platform and is designed for robustness in spaceflight conditions.",
            },
            {
                header: "Internal Tools and Web Infrastructure",
                body: "Maintains internal documentation platforms, collaboration tools, and the mission's public website. These systems facilitate communication across project teams and ensure streamlined information sharing.",
            },
            {
                header: "Digital Infrastructure for Satellite Operations",
                body: "Implements backend software for managing satellite communications, mission data, and command processing.",
            },
        ],
    },
    {
        name: "Mission Design / Mission Control",
        icon: MapPin,
        description:
            "Ensures overall mission feasibility and efficiency through trajectory planning, space environment analysis, and attitude control.",
        sections: [
            {
                header: "Trajectory Planning and Analysis",
                body: "Focuses on determining the satellite's orbital path using simulation tools such as GMAT. Ensures that trajectory designs meet mission constraints related to power, time, and propellant availability.",
            },
            {
                header: "Space Environment Assessment",
                body: "Conducts analysis of space weather phenomena such as solar radiation and geomagnetic disturbances to evaluate their impact on satellite performance, orientation, and subsystem longevity.",
            },
            {
                header: "Attitude Determination and Control Modelling",
                body: "Develops algorithms and models to maintain satellite orientation throughout the mission. Supports the selection and integration of appropriate sensors and actuators in collaboration with avionics and mechanical systems.",
            },
        ],
    },
    {
        name: "Mechanical Team",
        icon: Rocket,
        description:
            "Responsible for the CubeSat's physical structure and propulsion system, ensuring durability and thermal resilience.",
        sections: [
            {
                header: "Satellite Structural Design",
                body: "Designs the mechanical frame and enclosure to withstand launch stresses, orbital thermal cycles, and mechanical loads. The structure provides protection for internal components while meeting CubeSat standards.",
            },
            {
                header: "Propulsion Integration",
                body: "Constructs the mechanical infrastructure required to support a Hall-effect thruster, including gas containment systems, cathode mounts, and secure mechanical interfaces for integration with the satellite frame.",
            },
        ],
    },
    {
        name: "Power Team",
        icon: Zap,
        description:
            "Ensures Kororā can collect, store, and manage power through battery management and solar panel systems.",
        sections: [
            {
                header: "Energy Collection and Storage",
                body: "Develops systems for solar energy harvesting and battery storage to ensure continuous power supply across mission phases, including orbital eclipses and peak operational demands.",
            },
            {
                header: "High-Voltage Power Management",
                body: "Modifies and extends the PyCubed platform to support high-voltage requirements of the Hall-effect thruster. Ensures safe and reliable power conversion and delivery under spaceflight conditions.",
            },
            {
                header: "Power System Integration",
                body: "Coordinates closely with avionics and software teams to manage power distribution across the satellite. Focuses on system efficiency, electrical safety, and mission-wide reliability.",
            },
        ],
    },
    {
        name: "Communications Team",
        icon: Radio,
        description:
            "Enables reliable data transmission between the Kororā CubeSat and Earth through comprehensive uplink and downlink architecture.",
        sections: [
            {
                header: "Radiofrequency Hardware Development",
                body: "Designs and manufactures antennas and RF systems for both the satellite and ground stations. Ensures reliable transmission and reception under varying orbital conditions and link budgets.",
            },
            {
                header: "Communication Protocol Implementation",
                body: "Implements modulation schemes, error correction, and data protocols required for real-time command and telemetry exchange across selected frequency bands.",
            },
            {
                header: "Regulatory Compliance and Ground Testing",
                body: "Manages licensing and regulatory approvals for frequency use and ground station integration. Oversees comprehensive testing to ensure end-to-end communications functionality meets international standards.",
            },
        ],
    },
    {
        name: "Avionics Team",
        icon: Cpu,
        description:
            "Connects the CubeSat's sensors, controllers, and feedback systems for autonomous decision-making capabilities.",
        sections: [
            {
                header: "Sensor Integration and Interfacing",
                body: "Integrates environmental and positional sensors such as gyroscopes, magnetometers, GPS, and sun sensors, required for orientation and autonomous operations.",
            },
            {
                header: "Embedded Signal Processing",
                body: "Processes raw sensor data into usable control signals through custom embedded systems, enabling real-time responsiveness to environmental conditions.",
            },
            {
                header: "System Validation and Coordination",
                body: "Ensures compatibility between avionics hardware and the broader spacecraft system. Validates sensor outputs, interfaces, and feedback loops through coordinated testing with software and mechanical teams.",
            },
        ],
    },
    {
        name: "Law & Policy Team",
        icon: Scale,
        description:
            "Safeguards the legal and ethical foundation of the mission through policy compliance and governance.",
        sections: [
            {
                header: "Legal and Regulatory Compliance",
                body: "Oversees adherence to national and international law.",
            },
            {
                header: "Internal Governance and Policy Development",
                body: "Manages internal policies, operational procedures, and documentation to ensure ethical conduct and regulatory transparency throughout the mission lifecycle.",
            },
            {
                header: "Finance and External Relations",
                body: "Coordinates funding efforts, grant applications, and contractual arrangements.",
            },
        ],
    },
    {
        name: "Design & Marketing Team",
        icon: Palette,
        description:
            "Communicates Project Kororā to the world through visuals, social media, and public-facing assets.",
        sections: [
            {
                header: "Visual Identity and Branding",
                body: "Develops the visual identity of Project Kororā through graphic design, brand standards, and visual assets for both print and digital media.",
            },
            {
                header: "Media Production and Documentation",
                body: "Produces photography, videography, and promotional materials to document key milestones, technical progress, and team collaboration throughout the mission.",
            },
            {
                header: "Outreach and Public Engagement",
                body: "Manages social media, event coverage, and external communications to promote the mission, raise public awareness, and support community and stakeholder engagement.",
            },
        ],
    },
];

export default teams;
