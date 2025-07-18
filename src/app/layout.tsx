"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import LoadingScreen from "./components/LoadingScreen";

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
 * background video with iOS autoplay detection and static image fallback.
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
    const [autoplayFailed, setAutoplayFailed] = useState(false);
    const [autoplayDetected, setAutoplayDetected] = useState(false);
    const [fallbackImageLoaded, setFallbackImageLoaded] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const pathname = usePathname();

    /* ① lock --device-height to physical screen size once */
    useEffect(() => {
        // `window.screen.height` = full device height in CSS px, unaffected by
        // browser chrome showing/hiding
        const cssPx = `${window.screen.height}px`;
        document.documentElement.style.setProperty("--device-height", cssPx);

        // Preload fallback image on iOS to prevent glitchy loading
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
        if (isIOS) {
            const img = document.createElement("img");
            img.src = "/background.jpg";
            img.onload = () => {
                // Image is preloaded and cached, but we'll still wait for the actual Image component onLoad
                console.log("Fallback image preloaded");
            };
        }
    }, []);

    // Handle loading state - wait for autoplay detection and fallback image on iOS
    useEffect(() => {
        const handleLoad = () => {
            const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

            if (!isIOS) {
                // Non-iOS: hide loading immediately
                setIsLoading(false);
            } else if (autoplayDetected) {
                // iOS: wait for autoplay detection
                if (autoplayFailed) {
                    // If autoplay failed, also wait for fallback image to load
                    if (fallbackImageLoaded) {
                        setIsLoading(false);
                    }
                } else {
                    // Autoplay succeeded, can hide loading
                    setIsLoading(false);
                }
            }
        };

        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
        }

        return () => {
            window.removeEventListener("load", handleLoad);
        };
    }, [autoplayDetected, autoplayFailed, fallbackImageLoaded]);

    // Reset scroll position on page navigation
    useEffect(() => {
        // Scroll to top when pathname changes (page navigation)
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, [pathname]);

    // Autoplay detection for iOS battery saver mode handling
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Wait for video to be ready
        const handleCanPlay = async () => {
            try {
                // Attempt to play the video - this returns a promise
                const playPromise = video.play();

                if (playPromise !== undefined) {
                    await playPromise;
                    // If we get here, autoplay succeeded
                    setAutoplayFailed(false);
                }
            } catch {
                // Autoplay was prevented (likely due to iOS Low Power Mode)
                console.log(
                    "Video autoplay prevented, falling back to static image"
                );
                setAutoplayFailed(true);
                // Pause the video to ensure it's in a stopped state
                video.pause();
            } finally {
                // Mark autoplay detection as complete
                setAutoplayDetected(true);
            }
        };

        // Check if video is already ready
        if (video.readyState >= 3) {
            handleCanPlay();
        } else {
            video.addEventListener("canplay", handleCanPlay, { once: true });
        }

        return () => {
            video.removeEventListener("canplay", handleCanPlay);
        };
    }, []);

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
                {/* Background video - only show when autoplay works */}
                {!autoplayFailed && (
                    <video
                        ref={videoRef}
                        src="/Background.mp4"
                        poster="/background.jpg"
                        autoPlay
                        muted
                        playsInline
                        controls={false}
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
                )}

                {/* Static background image fallback for when autoplay fails or video ends */}
                {(autoplayFailed || videoEnded) && (
                    <div
                        style={{
                            position: "fixed",
                            inset: 0,
                            width: "100vw",
                            height: "var(--device-height)",
                            pointerEvents: "none",
                            zIndex: 1,
                        }}
                    >
                        <Image
                            src="/background.jpg"
                            alt="Background"
                            fill
                            priority
                            style={{
                                objectFit: "cover",
                            }}
                            onLoad={() => setFallbackImageLoaded(true)}
                            aria-hidden="true"
                        />
                    </div>
                )}

                {/* Content layers - top layer */}
                {isLoading && <LoadingScreen />}
                <div className="relative z-10 flex flex-col h-device">
                    <Navigation />
                    <main className="flex-1 pt-16 pointer-events-auto">
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
