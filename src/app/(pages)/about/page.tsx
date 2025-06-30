import type { Metadata } from "next";
import Card from "../../components/Card";
import PageContainer from "../../components/PageContainer";
import PageHeader from "../../components/PageHeader";

export const metadata: Metadata = {
    title: "About",
    description:
        "Learn about Project Kororā's mission to advance New Zealand's space economy through innovative CubeSat technology and electric propulsion systems.",
};

export default function AboutPage() {
    return (
        <PageContainer>
            <PageHeader
                title="About Project Kororā"
                description="Learn about our mission to advance New Zealand's space economy through innovative CubeSat technology"
            />

            <Card>
                <div className="space-y-6">
                    <p className="text-white/80 leading-relaxed">
                        Project Kororā aims to develop New Zealand&apos;s space
                        economy by creating an accessible initiative for
                        students at Te Herenga Waka Victoria University of
                        Wellington.
                    </p>

                    <p className="text-white/80 leading-relaxed">
                        Our mission is to design and develop a CubeSat capable
                        of being launched into space, featuring an innovative
                        electric propulsion (EP) thruster that will demonstrate
                        advanced space technology capabilities.
                    </p>

                    <p className="text-white/80 leading-relaxed">
                        This project represents a significant step forward in
                        New Zealand&apos;s space ambitions, providing hands-on
                        experience for students while contributing to the global
                        space technology landscape.
                    </p>
                </div>
            </Card>
        </PageContainer>
    );
}
