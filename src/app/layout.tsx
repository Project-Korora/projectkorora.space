"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

// Font Awesome configuration
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

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

// Moved metadata to a separate file since we're now using "use client"
// The metadata is defined in src/app/metadata.ts

/**
 * The root layout for the entire application.
 *
 * This component sets up the global fonts, body styling, and the main
 * page structure including the navigation and footer. It also includes the
 * background image that persists across all pages.
 *
 * @param {object} props - The properties for the component.
 * @param {React.ReactNode} props.children - The child components to be rendered within the layout.
 * @returns {JSX.Element} The rendered root layout.
 */
export default function RootLayout({
    children,
}: Readonly<{
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
                className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased flex flex-col min-h-screen relative`}
            >
                {/* Background video - bottom layer */}
                <video
                    src="/Background.mp4"
                    autoPlay
                    muted
                    playsInline
                    preload="auto"
                    onEnded={(e) => {
                        const video = e.currentTarget;
                        video.currentTime = video.duration;
                        video.pause();
                    }}
                    className="fixed inset-0 w-screen h-screen object-cover pointer-events-none"
                />

                {/* Content layers - top layer */}
                <div className="relative z-10 flex flex-col min-h-screen">
                    <Navigation />
                    <main className="flex-1 pt-16 pointer-events-auto">
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    );
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased flex flex-col min-h-screen`}
            >
                <Navigation />
                <main className="flex-1 pt-16">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
