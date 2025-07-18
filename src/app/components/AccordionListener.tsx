"use client"

import { useEffect } from "react";
import { useCarousel } from "./Carousel";

type AccordionListenerProps = {
    slideIndex: number;
    setAccordionValue: (val: string) => void;
};
/**
 * Component that listens to current selected carousel slide
 * Closes accordion to preserve size on if current slide is not selected
 * @param {AccordionListenerProps} props listener props
 * @returns {null} no visual element
 */
export function AccordionListener({
    slideIndex,
    setAccordionValue,
}: AccordionListenerProps) {
    const { carouselApi } = useCarousel();

    useEffect(() => {
        if (!carouselApi) return;

        const handleSelect = () => {
            const currentIndex = carouselApi.selectedScrollSnap();
            if (currentIndex !== slideIndex) {
                setAccordionValue(""); // close accordion if slide is not active
            }
        };

        carouselApi.on("select", handleSelect);
        return () => {
            carouselApi.off("select", handleSelect);
        };
    }, [carouselApi, slideIndex, setAccordionValue]);

    return null;
}
