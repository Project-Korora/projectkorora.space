"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import LoadingScreen from "./components/LoadingScreen";
import { ProposalAccessProvider } from "./components/ProposalAccessProvider";
import CustomCursor from "./components/CustomCursor";
import Image from "next/image";

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
    const [isLoading, setIsLoading] = useState(true);
    const [videoEnded, setVideoEnded] = useState(false);
    const pathname = usePathname();

    /* ① lock --device-height to physical screen size once */
    useEffect(() => {
        // `window.screen.height` = full device height in CSS px, unaffected by
        // browser chrome showing/hiding
        const cssPx = `${window.screen.height}px`;
        document.documentElement.style.setProperty("--device-height", cssPx);

        const handleLoad = () => setIsLoading(false);

        if (document.readyState === "complete") {
            setIsLoading(false);
        } else {
            window.addEventListener("load", handleLoad);
        }

        return () => {
            window.removeEventListener("load", handleLoad);
        };
    }, []);

    // Reset scroll position on page navigation
    useEffect(() => {
        // Scroll to top when pathname changes (page navigation)
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, [pathname]);

    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
                <link
                    rel="icon"
                    href="/favicon/favicon-16x16.png"
                    sizes="16x16"
                    type="image/png"
                />
                <link
                    rel="icon"
                    href="/favicon/favicon-32x32.png"
                    sizes="32x32"
                    type="image/png"
                />
                <link
                    rel="apple-touch-icon"
                    href="/favicon/apple-touch-icon.png"
                />
                <link rel="manifest" href="/favicon/site.webmanifest" />
            </head>
            <body
                className={`
                    ${geistSans.variable} ${geistMono.variable}
                    font-sans antialiased flex flex-col h-device    /* ② use it here */
                `}
            >
                {/* Background video */}
                <video
                    src="/Background.mp4"
                    poster="/background.jpg"
                    autoPlay
                    muted
                    playsInline
                    preload="auto"
                    onEnded={() => setVideoEnded(true)}
                    style={{
                        position: "fixed",
                        inset: 0,
                        width: "100vw",
                        height: "var(--device-height)",
                        objectFit: "cover",
                        pointerEvents: "none",
                    }}
                    aria-hidden="true"
                >
                    {/* Fallback for unsupported browsers */}
                    <Image
                        src="/background.jpg"
                        alt="Background"
                        fill
                        style={{
                            objectFit: "cover",
                            pointerEvents: "none",
                        }}
                        aria-hidden="true"
                    />
                </video>

                {/* Poster image after video ends */}
                {videoEnded && (
                    <div
                        style={{
                            position: "fixed",
                            inset: 0,
                            width: "100vw",
                            height: "var(--device-height)",
                            pointerEvents: "none",
                        }}
                    >
                        <Image
                            src="/background.jpg"
                            alt="Background"
                            fill
                            style={{
                                objectFit: "cover",
                            }}
                            aria-hidden="true"
                        />
                    </div>
                )}

                {/* Content layers - top layer */}
                {isLoading && <LoadingScreen />}
                <CustomCursor />
                <ProposalAccessProvider>
                    <div className="relative z-10 flex flex-col h-device">
                        <Navigation />
                        <main className="flex-1 pt-16 pointer-events-auto">
                            {children}
                        </main>
                        <Footer />
                    </div>
                </ProposalAccessProvider>
            </body>
        </html>
    );
}
