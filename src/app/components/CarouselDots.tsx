"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCarousel } from "./Carousel";
import Button from "./Button";

type CarouselDotsProps = {
    className?: string;
};

/**
 * dot pagination component for carousel navigation
 * Shows dots representing each slide 
 * @param {CarouselDotsProps} props - Component props 
 * @returns {JSX.Element} - JSX Element 
 */
function CarouselDots({ className = "" }: CarouselDotsProps) {
    const { carouselApi } = useCarousel();
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [slideCount, setSlideCount] = React.useState(0);

    React.useEffect(() => {
        if (!carouselApi) return;
        const updateSlideCount = () => {
            setSlideCount(carouselApi.scrollSnapList().length);
        };
        const updateSelectedIndex = () => {
            setSelectedIndex(carouselApi.selectedScrollSnap());
        };

        updateSlideCount();
        updateSelectedIndex();

        carouselApi.on("select", updateSelectedIndex);
        carouselApi.on("reInit", updateSlideCount);

        return () => {
            carouselApi.off("select", updateSelectedIndex);
            carouselApi.off("reInit", updateSlideCount);
        };
    }, [carouselApi]);

    if (slideCount <= 1) return null;

    return (
        <div 
            className={`flex items-center justify-center gap-4 mt-4 ${className}`}
            role="tablist"
            aria-label="Carousel pagination"
        >
            <Button
                onClick={() => carouselApi?.scrollPrev()}
                disabled={selectedIndex === 0}
                size = "sm"
                variant="outline"
                className=""
                aria-label="Previous slide"
            >
                <ChevronLeft size={12} />
            </Button>

            <div className="flex gap-2">
                {Array.from({ length: slideCount }).map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                            index === selectedIndex 
                                ? "bg-primary" 
                                : "bg-light hover:bg-light/40"
                        }`}
                        onClick={() => carouselApi?.scrollTo(index)}
                        role="tab"
                        aria-selected={index === selectedIndex}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
            <Button
                onClick={() => {carouselApi?.scrollNext()}}
                disabled={selectedIndex === slideCount - 1}
                size = "sm"
                variant="outline"
                className=""
                aria-label="Next slide"
            >
                <ChevronRight size={12} />
            </Button>
        </div>
    );
}

export { CarouselDots };