"use client"

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"

type CarouselContextProps = {
    carouselRef: ReturnType<typeof useEmblaCarousel>[0]
    carouselApi: ReturnType<typeof useEmblaCarousel>[1]
    scrollPrev: () => void
    scrollNext: () => void
}

type CarouselProps = {
    showHint?: boolean
}

const carouselContext = React.createContext<CarouselContextProps | null>(null)

/**
 * A hook to access carousel internals in order to extend functionality from other components
 * @throws {Error} if not used within a carousel provider
 * @returns {CarouselContextProps}
 */
function useCarousel() {
    const context = React.useContext(carouselContext)
    if (!context) {
        throw new Error("useCaraousel must be called within parent Carousel component")
    }
    return context
}

/**
 * 
 * @param {React.ComponentProps<"div"> & CarouselProps} props
 * @returns {React.JSX.Element} Top level carousel component
 */
function Carousel({
    className = "",
    children,
    showHint=true,
    ...props
}: React.ComponentProps<"div"> & CarouselProps) {
    const [carouselRef, carouselApi] = useEmblaCarousel()
    const [hintVisible, setHintVisible] = React.useState(showHint)


    /**
    *  callbacks to scroll the carousel left & right for use with other components
    *  available via useCaraousel
    */
    const scrollPrev = React.useCallback(() => {
        carouselApi?.scrollPrev()
    }, [carouselApi])

    const scrollNext = React.useCallback(() => {
        carouselApi?.scrollNext()
    }, [carouselApi])

    // hides hint upon interaction 
    React.useEffect(() => {
        if (!carouselApi) return;
        const selectConn = () => {
            setHintVisible(false)
        }

        carouselApi.on('pointerDown', selectConn)
    }, [carouselApi])

    return (
        <carouselContext.Provider
            value={{
                carouselRef,
                carouselApi,
                scrollPrev,
                scrollNext,
            }}
        >
            <div
                className={`relative ${className}`}
                role="region"
                aria-roledescription="carousel"
                {...props}
            >
                {/* render a hint indicating swipe ability  */}
                {hintVisible && (
                    <div className="pointer-events-none absolute inset-0 z-10 pb-2 flex items-end justify-between px-4">
                        <ChevronLeft className="h-6 w-6 shrink-0 animate-pulse" aria-hidden="true" />
                        <span className="mx-2 text-xs font-medium pb-1 uppercase tracking-wide">Swipe</span>
                        <ChevronRight className="h-6 w-6 shrink-0 animate-pulse" aria-hidden="true" />
                    </div>
                )}
                {children}
            </div>
        </carouselContext.Provider>
    )
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
    const { carouselRef } = useCarousel()

    return (
        <div ref={carouselRef} className="overflow-hidden">
            <div
                className={`flex -ml-4 ${className}`}
                {...props}
            />
        </div>
    )
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
    )
}


export {
    Carousel,
    CarouselDiv,
    CarouselElement,
    useCarousel
}