import React from "react";
import Image from "next/image";

/**
 * OrbitingSatellite Component
 *
 * Creates a satellite that orbits smoothly around a fixed center point on the page.
 * The satellite maintains its upright orientation while following a circular path.
 *

 * Animation Details:
 * The transform chain works as follows:
 * 1. translate(-50%, -50%) - Centers satellite on the orbit center point
 * 2. rotate() - Rotates the satellite around the center (creates orbital motion)
 * 3. translateX() - Moves satellite out to the desired orbit radius
 * 4. rotate(0deg) - Keeps satellite upright during orbit (counter-rotation)
 * 5. rotate(180deg) - Initial satellite orientation (flipped)
 *
 * @returns {JSX.Element} The orbiting satellite component
 */
const OrbitingSatellite: React.FC = () => {
    return (
        // Main container - fills hero section without interfering with interactions
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Satellite element positioned at orbit center with responsive sizing */}
            <div
                className="absolute top-1/2 left-1/2 w-55 h-55 sm:w-90 sm:h-90 md:w-90 md:h-90"
                style={{
                    // Centers the satellite container on the orbit center point
                    transform: "translate(-50%, -50%)",
                    // Smooth orbital animation with custom easing (x1, y1, x2, y2)
                    // duration & cubic-bezier creates natural acceleration/deceleration
                    animation:
                        "orbit 15s infinite cubic-bezier(0.2, 0.1, 0.1, 1)  ",
                }}
            >
                <Image
                    src="/satellite.png"
                    alt="Orbiting satellite"
                    // Base dimensions for Next.js Image optimization
                    width={96}
                    height={96}
                    // Responsive sizing with proper aspect ratio and visual depth
                    // object-contain: Maintains aspect ratio within container
                    // drop-shadow-lg: Adds depth and visibility against background
                    className="w-full h-full object-contain drop-shadow-lg"
                    // High priority loading since it's above the fold
                    priority
                />
            </div>

            {/* CSS keyframes defining orbital motion paths */}
            <style jsx>{`
                /* 
                 * Default orbit animation for mobile devices
                 * Uses full 360-degree rotation for complete circular motion
                 */
                @keyframes orbit {
                    0% {
                        /* Starting position: top of orbit */
                        transform: translate(-50%, -50%) rotate(-90deg)
                            translateX(250px) rotate(0deg) rotate(90deg);
                    }
                    100% {
                        /* Ending position: completed full orbit */
                        transform: translate(-50%, -50%) rotate(270deg)
                            translateX(250px) rotate(0deg) rotate(90deg);
                    }
                }

                /* 
                 * Enhanced orbit for larger screens (768px+)
                 * Larger orbit radius for desktop viewing
                 */
                @media (min-width: 768px) {
                    @keyframes orbit {
                        0% {
                            /* Starting position: top of orbit */
                            transform: translate(-50%, -50%) rotate(-90deg)
                                translateX(400px) rotate(0deg) rotate(90deg);
                        }
                        100% {
                            /* Ending position: completed full orbit */
                            transform: translate(-50%, -50%) rotate(270deg)
                                translateX(400px) rotate(0deg) rotate(90deg);
                        }
                    }
                }
            `}</style>
        </div>
    );
};

export default OrbitingSatellite;
