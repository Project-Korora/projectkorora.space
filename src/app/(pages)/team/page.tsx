import PageContainer from "../../components/PageContainer";
import Grid from "../../components/Grid";
import TeamCard from "../../components/TeamCard";
import {
    Carousel,
    CarouselDiv,
    CarouselElement,
} from "@/app/components/Carousel";

import teamList from "@/data/teamData";
import PageHeader from "@/app/components/PageHeader";
/**
 * The team page for Project Kororā.
 *
 * This page is intended to display the members of the project team.
 * NOTE: This is currently a placeholder and needs to be populated
 * with actual team member data.
 *
 * @returns {JSX.Element} The rendered team page.
 */
export default function TeamPage() {
    return (
        <PageContainer>
            <PageHeader
                title="Teams"
                description="Our groups working to help Project Kororā succeed"
            />
            <Grid className="hidden md:grid">
                <TeamCard team="Core" name="John Doe" title="Team Lead" />
            </Grid>

            <Carousel className="md:hidden">
                <CarouselDiv>
                    {teamList.map((team, index) => (
                        <CarouselElement key={index}>
                            <TeamCard
                                team={team.team}
                                name={team.name}
                                title={team.title}
                            />
                        </CarouselElement>
                    ))}
                </CarouselDiv>
            </Carousel>
        </PageContainer>
    );
}
