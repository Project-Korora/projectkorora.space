"use client";
import React from "react";
import Card from "./Card";
import Button from "./Button";

interface ColorBoxProps {
    color: string;
    name: string;
    textColor?: string;
}

const ColorBox = ({ color, name, textColor = "text-light" }: ColorBoxProps) => (
    <div
        className={`p-4 rounded backdrop-blur min-h-[80px] flex items-center justify-center ${color} w-full`}
    >
        <p className={`${textColor} font-mono text-xs font-bold`}>{name}</p>
    </div>
);

/**
 * A showcase component for the project's design system.
 *
 * This component displays all the theme colors, button styles, typography,
 * and card variations, serving as a living style guide for developers.
 *
 * @returns {JSX.Element} The rendered theme showcase.
 */
export default function ThemeShowcase() {
    return (
        <div className="space-y-12 py-8">
            {/* Main Theme Colors */}
            <section>
                <h2 className="text-2xl font-bold text-light mb-4">
                    Primary Color
                </h2>
                <div className="grid grid-cols-2 gap-4">
                    <ColorBox color="bg-primary" name="primary" />
                    <ColorBox color="bg-primary-hover" name="primary-hover" />
                </div>
            </section>

            {/* Secondary Colors */}
            <section>
                <h2 className="text-2xl font-bold text-light mb-4">
                    Secondary Color
                </h2>
                <div className="grid grid-cols-2 gap-4">
                    <ColorBox color="bg-secondary" name="secondary" />
                    <ColorBox
                        color="bg-secondary-hover"
                        name="secondary-hover"
                    />
                </div>
            </section>

            {/* Accent Colors */}
            <section>
                <h2 className="text-2xl font-bold text-light mb-4">
                    Accent Color
                </h2>
                <div className="grid grid-cols-2 gap-4">
                    <ColorBox color="bg-accent" name="accent" />
                    <ColorBox color="bg-accent-hover" name="accent-hover" />
                </div>
            </section>

            {/* Gradients */}
            <section>
                <h2 className="text-2xl font-bold text-light mb-4">
                    Gradients
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {/* base gradients */}
                    <ColorBox
                        color="bg-gradient-to-r from-primary to-secondary"
                        name="primary ➜ secondary"
                    />
                    <ColorBox
                        color="bg-gradient-to-r from-primary to-accent"
                        name="primary ➜ accent"
                    />
                    <ColorBox
                        color="bg-gradient-to-r from-secondary to-accent"
                        name="secondary ➜ accent"
                    />

                    {/* hover-state gradients */}
                    <ColorBox
                        color="bg-gradient-to-r from-primary-hover to-secondary-hover"
                        name="primary-hover ➜ secondary-hover"
                    />
                    <ColorBox
                        color="bg-gradient-to-r from-primary-hover to-accent-hover"
                        name="primary-hover ➜ accent-hover"
                    />
                    <ColorBox
                        color="bg-gradient-to-r from-secondary-hover to-accent-hover"
                        name="secondary-hover ➜ accent-hover"
                    />
                </div>
            </section>

            {/* Light Colors */}
            <section>
                <h2 className="text-2xl font-bold text-light mb-4">
                    Light Color
                </h2>
                <div className="grid grid-cols-2 gap-4">
                    <ColorBox
                        color="bg-light"
                        name="light"
                        textColor="text-dark"
                    />
                    <ColorBox
                        color="bg-light-hover"
                        name="light-hover"
                        textColor="text-dark"
                    />
                </div>
            </section>

            {/* Dark Colors */}
            <section>
                <h2 className="text-2xl font-bold text-light mb-4">
                    Dark Color
                </h2>
                <div className="grid grid-cols-2 gap-4">
                    <ColorBox color="bg-dark" name="dark" />
                    <ColorBox color="bg-dark-hover" name="dark-hover" />
                </div>
            </section>

            {/* Buttons */}
            <section>
                <h2 className="text-2xl font-bold text-light mb-4">Buttons</h2>
                <Card>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-bold text-light mb-3">
                                Button Variants
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                <Button variant="primary">Primary</Button>
                                <Button variant="secondary">Secondary</Button>
                                <Button variant="accent">Accent</Button>
                                <Button variant="outline">Outline</Button>
                                <Button variant="ghost">Ghost</Button>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-light mb-3">
                                Button Sizes
                            </h3>
                            <div className="flex flex-wrap items-center gap-4">
                                <Button size="sm">Small</Button>
                                <Button size="md">Medium</Button>
                                <Button size="lg">Large</Button>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-light mb-3">
                                Button States
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                <Button disabled>Disabled</Button>
                                <Button isLoading>Loading</Button>
                            </div>
                        </div>
                    </div>
                </Card>
            </section>

            {/* Typography */}
            <section>
                <h2 className="text-2xl font-bold text-light mb-4">
                    Typography
                </h2>
                <Card>
                    <div className="space-y-4">
                        <div>
                            <h1 className="text-4xl font-bold text-light">
                                Heading 1
                            </h1>
                            <p className="text-light/60 text-sm">
                                text-4xl font-bold
                            </p>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-light">
                                Heading 2
                            </h2>
                            <p className="text-light/60 text-sm">
                                text-3xl font-bold
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-light">
                                Heading 3
                            </h3>
                            <p className="text-light/60 text-sm">
                                text-2xl font-bold
                            </p>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-light">
                                Heading 4
                            </h4>
                            <p className="text-light/60 text-sm">
                                text-xl font-bold
                            </p>
                        </div>
                        <div>
                            <h5 className="text-lg font-bold text-light">
                                Heading 5
                            </h5>
                            <p className="text-light/60 text-sm">
                                text-lg font-bold
                            </p>
                        </div>
                        <div>
                            <p className="text-base text-light">Body Text</p>
                            <p className="text-light/60 text-sm">text-base</p>
                        </div>
                        <div>
                            <p className="text-sm text-light">Small Text</p>
                            <p className="text-light/60 text-sm">text-sm</p>
                        </div>
                        <div>
                            <p className="font-mono text-base text-light">
                                Monospace Text
                            </p>
                            <p className="text-light/60 text-sm">
                                font-mono text-base
                            </p>
                        </div>
                    </div>
                </Card>
            </section>

            {/* Cards and UI Elements */}
            <section>
                <h2 className="text-2xl font-bold text-light mb-4">
                    Cards & UI
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* Default (surface) card */}
                    <Card>
                        <h3 className="text-xl font-bold text-light mb-2">
                            Default Card
                        </h3>
                        <p className="text-light/80">
                            Uses radius + blur tokens from globals.css.
                        </p>
                    </Card>

                    {/* Primary themed card */}
                    <Card color="primary">
                        <h3 className="text-xl font-bold text-light mb-2">
                            Primary Card
                        </h3>
                        <p className="text-light/80">
                            Background & glow driven by{" "}
                            <code>--color-primary</code>.
                        </p>
                    </Card>

                    {/* Secondary themed card */}
                    <Card color="secondary">
                        <h3 className="text-xl font-bold text-light mb-2">
                            Secondary Card
                        </h3>
                        <p className="text-light/80">
                            Styled with <code>--color-secondary</code>{" "}
                            variables.
                        </p>
                    </Card>

                    {/* Accent themed card */}
                    <Card color="accent">
                        <h3 className="text-xl font-bold text-light mb-2">
                            Accent Card
                        </h3>
                        <p className="text-light/80">
                            Styled with <code>--color-accent</code> variables.
                        </p>
                    </Card>
                </div>
            </section>

            {/* Animation */}
            <section>
                <h2 className="text-2xl font-bold text-light mb-4">
                    Animation
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex justify-center">
                        <div className="animate-pulse-slow bg-primary rounded-full h-16 w-16"></div>
                    </div>
                    <div className="flex justify-center">
                        <div className="animate-float bg-secondary rounded-full h-16 w-16"></div>
                    </div>
                </div>
            </section>
        </div>
    );
}
