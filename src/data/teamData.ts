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
    name:string,
    members:string, 
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>,
    description: string,
    sections: {header: string, body: string}[]
}

const teams: TeamType[] = [
    {
        name: "Software Team",
        members: "40+ members",
        icon: Code,
        description:
            "Develops all onboard software and digital infrastructure using the PyCubed open-source platform to build robust, fault-tolerant systems.",
        sections: [
            { header: "Team Header 1", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
            { header: "Team Header 2", body: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
            { header: "Team Header 3", body: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        ],
    },
    {
        name: "Mission Design / Mission Control",
        members: "16 members",
        icon: MapPin,
        description:
            "Ensures overall mission feasibility and efficiency through trajectory planning, space environment analysis, and attitude control.",
        sections: [
            { header: "Mission Header 1", body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris." },
            { header: "Mission Header 2", body: "Nisi ut aliquip ex ea commodo consequat." },
            { header: "Mission Header 3", body: "Nisi ut aliquip ex ea commodo consequat." },
        ],
    },
    {
        name: "Mechanical Team",
        members: "19 members",
        icon: Rocket,
        description:
            "Responsible for the CubeSat's physical structure and propulsion system, ensuring durability and thermal resilience.",
        sections: [
            { header: "Mechanical Header 1", body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum." },
            { header: "Mechanical Header 2", body: "Excepteur sint occaecat cupidatat non proident." },
            { header: "Mechanical Header 3", body: "Excepteur sint occaecat cupidatat non proident." },
        ],
    },
    {
        name: "Power Team",
        members: "10 members",
        icon: Zap,
        description:
            "Ensures Kororā can collect, store, and manage power through battery management and solar panel systems.",
        sections: [
            { header: "Power Header 1", body: "Sunt in culpa qui officia deserunt mollit anim id est laborum." },
            { header: "Power Header 2", body: "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio." },
            { header: "Power Header 3", body: "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio." },
        ],
    },
    {
        name: "Communications Team",
        members: "9 members",
        icon: Radio,
        description:
            "Enables reliable data transmission between the Kororā CubeSat and Earth through comprehensive uplink and downlink architecture.",
        sections: [
            { header: "Comms Header 1", body: "Suspendisse potenti. Morbi mattis ullamcorper velit." },
            { header: "Comms Header 2", body: "Phasellus gravida semper nisi. Nullam vel sem." },
              { header: "Comms Header 3", body: "Phasellus gravida semper nisi. Nullam vel sem." },
        ],
    },
    {
        name: "Avionics Team",
        members: "12 members",
        icon: Cpu,
        description:
            "Connects the CubeSat's sensors, controllers, and feedback systems for autonomous decision-making capabilities.",
        sections: [
            { header: "Avionics Header 1", body: "Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus." },
            { header: "Avionics Header 2", body: "Aenean vulputate eleifend tellus. Aenean leo ligula." },
        ],
    },
    {
        name: "Law & Policy Team",
        members: "9 members",
        icon: Scale,
        description:
            "Safeguards the legal and ethical foundation of the mission through policy compliance and governance.",
        sections: [
            { header: "Policy Header 1", body: "Porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante." },
            { header: "Policy Header 2", body: "Fusce fermentum. Nullam cursus lacinia erat." },
             { header: "Policy Header 3", body: "Porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante." },
        ],
    },
    {
        name: "Design & Marketing Team",
        members: "8 members",
        icon: Palette,
        description:
            "Communicates Project Kororā to the world through visuals, social media, and public-facing assets.",
        sections: [
            { header: "Design Header 1", body: "Praesent congue erat at massa. Sed cursus turpis vitae tortor." },
            { header: "Design Header 2", body: "Donec posuere vulputate arcu. Phasellus accumsan cursus velit." },
             { header: "Design Header 3", body: "Donec posuere vulputate arcu. Phasellus accumsan cursus velit." },
        ],
    },
];


export default teams
