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

const carouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
    const context = React.useContext(carouselContext)
    if (!context) {
        throw new Error("useCaraousel must be called within parent Carousel component")
    }
    return context
}

function Carousel({
    className = "",
    children,
    ...props
}: React.ComponentProps<"div">) {
    const [carouselRef, carouselApi] = useEmblaCarousel()
    const [hintVisible, setHintVisible] = React.useState(true)
    
    const scrollPrev = React.useCallback(() => {
        carouselApi?.scrollPrev()
    }, [carouselApi])

    const scrollNext = React.useCallback(() => {
        carouselApi?.scrollNext()
    }, [carouselApi])

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


{/* expose useCarausel incase other components need access to the context */}
export {
    Carousel,
    CarouselDiv,
    CarouselElement,
    useCarousel
}