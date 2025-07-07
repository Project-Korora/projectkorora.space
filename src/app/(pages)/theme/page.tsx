import React from "react";
import PageContainer from "../../components/PageContainer";
import PageHeader from "../../components/PageHeader";
import ThemeShowcase from "../../components/ThemeShowcase";

/**
 * The theme guide and component showcase page.
 *
 * This page displays the design system tokens and a showcase of the
 * reusable UI components for the project.
 * This page is for developers to reference the design system and components.
 * It is not intended to be a user-facing page.
 *
 * @returns {JSX.Element} The rendered theme page.
 */
export default function ThemePage() {
    return (
        <PageContainer>
            <PageHeader
                title="Theme Guide"
                description="Design system and component showcase for Project Kororā"
            />

            <ThemeShowcase />
        </PageContainer>
    );
}
