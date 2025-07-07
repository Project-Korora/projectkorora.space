"use client";

import React from "react";
import Image from "next/image";

interface BackgroundImageProps {
    src: string;
    alt?: string;
    quality?: number;
    priority?: boolean;
}

/**
 * A full-screen background image component.
 *
 * This component displays an image that covers the entire background of the page,
 * positioned fixed and behind all other content. It uses Next.js's Image component
 * for optimization.
 *
 * @param {object} props - The properties for the component.
 * @param {string} props.src - The source URL for the image. Defaults to "/background.jpg".
 * @param {string} [props.alt="Background image"] - The alt text for the image.
 * @param {number} [props.quality=90] - The quality of the optimized image (1-100).
 * @param {boolean} [props.priority=true] - Whether to prioritize loading this image.
 * @returns {JSX.Element} The rendered background image component.
 */
export default function BackgroundImage({
    src = "/background.jpg",
    alt = "Background image",
    quality = 90,
    priority = true,
}: BackgroundImageProps) {
    return (
        <div
            className="fixed top-0 left-0 w-full h-full z-[-10] overflow-hidden"
            style={{
                pointerEvents: "none",
            }}
        >
            <Image
                src={src}
                alt={alt}
                fill
                quality={quality}
                sizes="100vw"
                priority={priority}
                className="object-cover"
            />
        </div>
    );
}
