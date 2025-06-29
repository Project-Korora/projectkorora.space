import PageContainer from "../components/PageContainer";
import PageHeader from "../components/PageHeader";
import Card from "../components/Card";

export default function ProposalPage() {
    return (
        <PageContainer>
            <PageHeader
                title="Project Proposal"
                description="Our comprehensive plan for developing New Zealand's first student-led CubeSat with electric propulsion"
            />

            <div className="space-y-8">
                <Card>
                    <h3 className="card-title">Mission Overview</h3>
                    <p className="card-text">
                        Project Kororā represents an ambitious initiative to
                        design, build, and deploy a CubeSat featuring innovative
                        electric propulsion technology. This project will
                        demonstrate New Zealand&apos;s growing capabilities in
                        space technology while providing invaluable hands-on
                        experience for students.
                    </p>
                </Card>

                <Card>
                    <h3 className="card-title">Technical Objectives</h3>
                    <div className="space-y-4">
                        <p className="card-text">
                            Our primary technical goals include developing a
                            functional Hall effect thruster, integrating power
                            management systems, and creating robust
                            communication protocols for ground station
                            operations.
                        </p>
                        <p className="card-text">
                            The satellite will serve as a technology
                            demonstrator, validating electric propulsion systems
                            in the challenging environment of low Earth orbit.
                        </p>
                    </div>
                </Card>

                <Card>
                    <h3 className="card-title">Educational Impact</h3>
                    <p className="card-text">
                        This project provides students across multiple
                        disciplines with real-world experience in aerospace
                        engineering, software development, project management,
                        and space systems integration, preparing them for
                        careers in New Zealand&apos;s emerging space industry.
                    </p>
                </Card>
            </div>
        </PageContainer>
    );
}
