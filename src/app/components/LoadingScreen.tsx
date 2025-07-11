"use client";

import React from "react";

export default function LoadingScreen() {
    return (
        <div
            className="fixed inset-0 z-[10000] flex items-center justify-center bg-black"
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
