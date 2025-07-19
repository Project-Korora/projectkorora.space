"use client";

import React from "react";

/**
 * A loading screen component that displays a circular spinner.
 * Uses device height instead of viewport height for full screen coverage.
 *
 * @returns {JSX.Element} The rendered loading screen.
 */
export default function LoadingScreen() {
    return (
        <div
            className="fixed z-[10000] flex items-center justify-center bg-black"
            style={{
                inset: 0,
                width: "100vw",
                height: "var(--device-height)",
            }}
            role="status"
            aria-live="polite"
        >
            {/* Simple circular spinner */}
            <div
                className="h-16 w-16 rounded-full border-4 border-accent border-t-transparent animate-spin"
                aria-hidden="true"
            />
            <span className="sr-only">Loading…</span>
        </div>
    );
}
