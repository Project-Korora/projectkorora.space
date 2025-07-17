"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";
import clsx from "clsx";

interface AccordionProps {
    hideMobileDefault?: boolean
}

function Accordion({
    hideMobileDefault,
    ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root> & AccordionProps) {
    const isMobile = window?.innerWidth < 768
    {/* cannot destructure normally due to multiple | single typing */}
    if (isMobile && hideMobileDefault) {
        const {defaultValue, ...remaining} = props
        return <AccordionPrimitive.Root data-slot="accordion" {...remaining} />;
    }

    return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
    className,
    ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
    return (
        <AccordionPrimitive.Item
            data-slot="accordion-item"
            className={`border-b border-light/20 last:border-b-0 rounded-md mb-2 ${className}`}
            {...props}
        />
    );
}

function AccordionTrigger({
    className,
    children,
    ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
    return (
        <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger
                data-slot="accordion-trigger"
                className={clsx(
                    "flex flex-1 items-start justify-between gap-4 py-4",
                    "text-left text-light font-medium",
                    "rounded-[--radius] transition-all outline-none",
                    "hover:text-light-hover",
                    "disabled:pointer-events-none disabled:opacity-50",
                    "[&[data-state=open]>svg]:rotate-180",
                    className
                )}
                {...props}
            >
                {children}
                <ChevronDownIcon className="text-light/70 pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
            </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
    );
}

function AccordionContent({
    className,
    children,
    ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
    return (
        <AccordionPrimitive.Content
            data-slot="accordion-content"
            className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden"
            {...props}
        >
            <div className={`pt-0 pb-4 text-light/90 ${className || ""}`}>
                {children}
            </div>
        </AccordionPrimitive.Content>
    );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
