"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const particlesRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const cursorDot = document.querySelector(
            ".cursor-dot"
        ) as HTMLDivElement;
        const innerGlow = document.querySelector(
            ".cursor-inner-glow"
        ) as HTMLDivElement;
        const outerGlow = document.querySelector(
            ".cursor-outer-glow"
        ) as HTMLDivElement;

        let mouseX = 0;
        let mouseY = 0;

        const moveCursor = (e: MouseEvent): void => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            // Main cursor dot - instant follow
            if (cursorDot) {
                gsap.to(cursorDot, {
                    x: mouseX,
                    y: mouseY,
                    duration: 0.05,
                    ease: "power3.out",
                });
            }

            // Inner glow - slight delay
            if (innerGlow) {
                gsap.to(innerGlow, {
                    x: mouseX,
                    y: mouseY,
                    duration: 0.1,
                    ease: "power2.out",
                });
            }

            // Outer glow - slower follow
            if (outerGlow) {
                gsap.to(outerGlow, {
                    x: mouseX,
                    y: mouseY,
                    duration: 0.05,
                    ease: "power2.out",
                });
            }
        };

        const handleMouseDown = () => {
            setIsClicking(true);
            if (cursorDot) {
                gsap.to(cursorDot, {
                    scale: isHovering ? 1.0 : 0.7, // Scale based on hover state
                    opacity: isHovering ? 0.8 : 1, // More visible/white when clicking on button
                    duration: 0.1,
                });
            }
        };

        const handleMouseUp = () => {
            setIsClicking(false);
            if (cursorDot) {
                gsap.to(cursorDot, {
                    scale: isHovering ? 1.5 : 1, // Return to hover state or normal
                    opacity: isHovering ? 0.1 : 1, // Return to hover opacity or normal
                    duration: 0.1,
                });
            }
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isInteractive = target.closest(
                'button, a, input, textarea, select, [role="button"], [onclick], .cursor-pointer'
            );

            if (isInteractive && !isHovering) {
                setIsHovering(true);
                if (cursorDot) {
                    gsap.to(cursorDot, {
                        scale: 1.5,
                        duration: 0.2,
                        opacity: 0.1,
                    });
                }
                if (innerGlow) {
                    gsap.to(innerGlow, {
                        scale: 1.2,
                        opacity: 0.4,
                        duration: 0.2,
                    });
                }
            } else if (!isInteractive && isHovering) {
                setIsHovering(false);
                if (cursorDot) {
                    gsap.to(cursorDot, { scale: 1, duration: 0.2, opacity: 1 });
                }
                if (innerGlow) {
                    gsap.to(innerGlow, {
                        scale: 1,
                        opacity: 0.4,
                        duration: 0.2,
                    });
                }
            }
        };

        // Set initial positions with null checks
        const elements = [cursorDot, innerGlow, outerGlow].filter(Boolean);
        if (elements.length > 0) {
            gsap.set(elements, {
                xPercent: -50,
                yPercent: -50,
            });
        }

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [isHovering]);

    return (
        <div className="max-lg:hidden z-[9999]">
            {/* Outer Glow - Largest, slowest */}
            <div className="cursor-outer-glow fixed pointer-events-none z-[9995]">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-accent/20 via-primary/20 to-secondary/20 blur-md"></div>
            </div>

            {/* Inner Glow */}
            <div className="cursor-inner-glow fixed pointer-events-none z-[9997]">
                <div
                    className={`w-12 h-12 rounded-full transition-all duration-200 ${
                        isHovering
                            ? "bg-accent/60 shadow-[0_0_30px_rgba(159,213,249,0.8)]"
                            : isClicking
                            ? "bg-primary/60 shadow-[0_0_25px_rgba(38,140,192,0.8)]"
                            : "bg-accent/40 shadow-[0_0_20px_rgba(159,213,249,0.6)]"
                    }`}
                ></div>
            </div>

            {/* Main Cursor Dot */}
            <div className="cursor-dot fixed pointer-events-none z-[9999]">
                <div
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        isHovering
                            ? "bg-accent shadow-[0_0_10px_rgba(159,213,249,0.8)]"
                            : isClicking
                            ? "bg-primary shadow-[0_0_10px_rgba(38,140,192,0.8)]"
                            : "bg-light"
                    }`}
                ></div>
            </div>
        </div>
    );
};

export default CustomCursor;
