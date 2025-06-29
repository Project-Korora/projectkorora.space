import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

// Configure Geist Sans with optimization
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
    display: "swap", // Improves loading performance
    weight: ["400", "500", "600", "700"], // Specify weights you'll use
});

// Configure Geist Mono with optimization
const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500", "600", "700"],
});

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

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
            >
                <Navigation />
                <main>{children}</main>
            </body>
        </html>
    );
}
