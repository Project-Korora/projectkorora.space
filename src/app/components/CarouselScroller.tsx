"use client";
import React from "react";
import { useCarousel } from "./Carousel";

interface ScrollerProps {
    delay?: number;
}

/**
 * Auto-scrolling carousel component that advances slides at regular intervals
 * @param {number} delay - Time in milliseconds between automatic slide transitions (default: 4000ms)
 * @returns {null} null - This component renders no UI, only manages auto-scroll behavior
 */
export default function CarouselScroller({ delay = 4000 }: ScrollerProps) {
    const { interacted, carouselApi } = useCarousel();

    React.useEffect(() => {
        if (!interacted) {
            const interval = setInterval(() => {
                if (!carouselApi) return;
                const idx = carouselApi.selectedScrollSnap();
                const count = carouselApi.scrollSnapList().length;
                const targIdx = idx + 1 >= count ? 0 : idx + 1;
                carouselApi.scrollTo(targIdx);
            }, delay);
            return () => clearInterval(interval);
        }
    }, [interacted, carouselApi, delay]);

    return null;
}
