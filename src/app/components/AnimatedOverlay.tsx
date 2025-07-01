"use client";

import { useEffect, useState } from "react";

export default function AnimatedOverlay() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Small delay to ensure the page has started loading
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className={`fixed inset-0 bg-black/60 backdrop-blur-[2px] transition-opacity duration-[2000ms] ease-out ${
                isLoaded ? "opacity-100" : "opacity-0"
            }`}
            style={{
                pointerEvents: "none", // Allow clicks to pass through
                zIndex: 0, // Above background (-1) but below content (1+)
            }}
        />
    );
}
