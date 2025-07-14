"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { SwipeHint } from "./SwipeHint";

type CarouselContextProps = {
    carouselRef: ReturnType<typeof useEmblaCarousel>[0];
    carouselApi: ReturnType<typeof useEmblaCarousel>[1];
    scrollPrev: () => void;
    scrollNext: () => void;
    interacted: boolean;
};

type CarouselProps = {
    showHint?: boolean;
    doLoop?: boolean;
};

const carouselContext = React.createContext<CarouselContextProps | null>(null);

/**
 * A hook to access carousel internals in order to extend functionality from other components
 * @throws {Error} if not used within a carousel provider
 * @returns {CarouselContextProps}
 */
function useCarousel() {
    const context = React.useContext(carouselContext);
    if (!context) {
        throw new Error(
            "useCaraousel must be called within parent Carousel component"
        );
    }
    return context;
}

/**
 *
 * @param {React.ComponentProps<"div"> & CarouselProps} props
 * @returns {React.JSX.Element} Top level carousel component
 */
function Carousel({
    className = "",
    children,
    showHint = true,
    doLoop = false,
    ...props
}: React.ComponentProps<"div"> & CarouselProps) {
    const [carouselRef, carouselApi] = useEmblaCarousel({ loop: doLoop });
    const [interacted, setInteracted] = React.useState(false);

    /**
     *  callbacks to scroll the carousel left & right for use with other components
     *  available via useCaraousel
     */
    const scrollPrev = React.useCallback(() => {
        carouselApi?.scrollPrev();
    }, [carouselApi]);

    const scrollNext = React.useCallback(() => {
        carouselApi?.scrollNext();
    }, [carouselApi]);

    // hides hint upon interaction
    React.useEffect(() => {
        if (!carouselApi) return;
        const selectConn = () => {
            setInteracted(true);
        };

        carouselApi.on("pointerDown", selectConn);
    }, [carouselApi]);

    return (
        <carouselContext.Provider
            value={{
                carouselRef,
                carouselApi,
                scrollPrev,
                scrollNext,
                interacted,
            }}
        >
            <div
                className={`relative ${className}`}
                role="region"
                aria-roledescription="carousel"
                {...props}
            >
                {/* render a hint indicating swipe ability  */}
                {!interacted && showHint && (
                    <SwipeHint size="lg" className="z-50" />
                )}
                {children}
            </div>
        </carouselContext.Provider>
    );
}

/**
 * Container holding carousel elements
 * @param {React.ComponentProps<"div">}
 * @returns {React.JSX.Element}
 */
function CarouselDiv({
    className = "",
    ...props
}: React.ComponentProps<"div">) {
    const { carouselRef } = useCarousel();

    return (
        <div ref={carouselRef} className="overflow-hidden">
            <div className={`flex -ml-4 ${className}`} {...props} />
        </div>
    );
}

/**
 * Single carousel element (slide)
 * @param {React.ComponentProps<"div">}
 * @returns {React.JSX.Element}
 */
function CarouselElement({
    className = "",
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div
            role="group"
            aria-roledescription="slide"
            className={`min-w-0 shrink-0 grow-0 basis-full pl-4 ${className}`}
            {...props}
        />
    );
}

export { Carousel, CarouselDiv, CarouselElement, useCarousel };
