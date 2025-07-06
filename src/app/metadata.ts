import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
};

export const metadata: Metadata = {
    title: {
        default: "Project Kororā",
        template: "%s | Project Kororā",
    },
    description:
        "Project Kororā aims to develop New Zealand's space economy by creating an accessible initiative for students at Te Herenga Waka. Our mission is to design and develop a CubeSat capable of being launched into space, featuring an innovative electric propulsion (EP) thruster.",
    keywords: [
        "CubeSat",
        "space technology",
        "New Zealand",
        "electric propulsion",
        "satellite",
        "university project",
    ],
    authors: [{ name: "Project Kororā Team" }],
    creator: "Te Herenga Waka Victoria University of Wellington",
    openGraph: {
        title: "Project Kororā",
        description: "Advancing New Zealand's Space Economy Through Innovation",
        type: "website",
    },
}; 