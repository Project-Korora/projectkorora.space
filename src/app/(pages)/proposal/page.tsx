"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import PageContainer from "../../components/PageContainer";
import PageHeader from "../../components/PageHeader";
import Card from "../../components/Card";
import { useProposalAccess } from "../../components/ProposalAccessProvider";
import LoadingScreen from "../../components/LoadingScreen";

/**
 * The project proposal page.
 *
 * This page outlines the mission overview, technical objectives, and
 * educational impact of Project Kororā. Access is restricted to users
 * who have been granted special access via the key route.
 *
 * @returns {JSX.Element} The rendered proposal page.
 */
export default function ProposalPage() {
    const { hasAccess } = useProposalAccess();
    const router = useRouter();

    useEffect(() => {
        if (!hasAccess) {
            // Use replace instead of push for faster navigation
            // Replace doesn't add to browser history
            router.replace("/");
        }
    }, [hasAccess, router]);

    // Don't render content if no access, show loading screen while redirect happens
    if (!hasAccess) {
        return <LoadingScreen />;
    }

    return (
        <PageContainer>
            <PageHeader
                title="Project Proposal"
                description="Our comprehensive plan for developing New Zealand's first student-led CubeSat with electric propulsion"
            />

            <div className="space-y-8">
                <Card>
                    <h3 className="text-xl font-bold mb-2 text-white">
                        Mission Overview
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                        Project Kororā represents an ambitious initiative to
                        advance New Zealand&apos;s space economy through the
                        development of innovative CubeSat technology featuring
                        electric propulsion systems.
                    </p>
                </Card>

                <Card>
                    <h3 className="text-xl font-bold mb-2 text-white">
                        Technical Objectives
                    </h3>
                    <div className="space-y-4">
                        <p className="text-white/80 leading-relaxed">
                            Our primary technical goals include developing a
                            functional Hall effect thruster, integrating power
                            management systems, and creating robust
                            communication protocols for ground station
                            operations.
                        </p>
                        <p className="text-white/80 leading-relaxed">
                            The satellite will serve as a technology
                            demonstrator, validating electric propulsion systems
                            in the challenging environment of low Earth orbit.
                        </p>
                    </div>
                </Card>

                <Card>
                    <h3 className="text-xl font-bold mb-2 text-white">
                        Educational Impact
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                        This project provides invaluable hands-on experience for
                        students across multiple disciplines, from aerospace
                        engineering to computer science, fostering the next
                        generation of space technology professionals in New
                        Zealand.
                    </p>
                </Card>
            </div>
        </PageContainer>
    );
}
