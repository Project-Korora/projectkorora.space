"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";
import clsx from "clsx";

interface AccordionProps {
    hideMobileDefault?: boolean;
}

/**
 * Root accordion component that manages the state and structure of accordion items
 * @param {React.ComponentProps<typeof AccordionPrimitive.Root>} props - All props from AccordionPrimitive.Root component
 * @returns {JSX.Element} Accordion root element with proper data attributes
 */
function Accordion({
    hideMobileDefault,
    ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root> & AccordionProps) {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    {
        /* cannot destructure normally due to multiple | single typing */
    }
    if (isMobile && hideMobileDefault) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { defaultValue, ...remaining } = props;
        return <AccordionPrimitive.Root data-slot="accordion" {...remaining} />;
    }

    return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

/**
 * Individual accordion item component with consistent styling
 * @param {React.ComponentProps<typeof AccordionPrimitive.Item>} props - Component props including className and all AccordionPrimitive.Item props
 * @returns {JSX.Element} Styled accordion item with border and spacing
 */
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

/**
 * Clickable trigger for accordion items with chevron icon and hover states
 * @param {React.ComponentProps<typeof AccordionPrimitive.Trigger>} props - Component props including className, children, and all AccordionPrimitive.Trigger props
 * @returns {JSX.Element} Styled accordion trigger with animation and accessibility features
 */
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

/**
 * Collapsible content area for accordion items with smooth animations
 * @param {React.ComponentProps<typeof AccordionPrimitive.Content>} props - Component props including className, children, and all AccordionPrimitive.Content props
 * @returns {JSX.Element} Animated accordion content with proper spacing and text styling
 */
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
