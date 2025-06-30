import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Particles from "./components/Particles";

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
    children,
}: Readonly<{
    children: React.ReactNode;
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link
                    rel="icon"
                    href="/favicon-16x16.png"
                    sizes="16x16"
                    type="image/png"
                />
                <link
                    rel="icon"
                    href="/favicon-32x32.png"
                    sizes="32x32"
                    type="image/png"
                />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased flex flex-col min-h-screen`}
            >
                {/* Particles background covering the whole screen */}
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100vh",
                        zIndex: -1,
                    }}
                >
                    <Particles
                        particleColors={["#ffffff", "#ffffff"]}
                        particleCount={500}
                        particleSpread={10}
                        speed={0.03}
                        particleBaseSize={100}
                        sizeRandomness={0}
                        cameraDistance={10}
                        moveParticlesOnHover={false}
                        alphaParticles={true}
                        disableRotation={false}
                    />
                </div>
                <Navigation />
                <main className="flex-1 pt-16">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
