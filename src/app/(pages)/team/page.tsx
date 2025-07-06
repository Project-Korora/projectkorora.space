import PageContainer from "../../components/PageContainer";
import Grid from "../../components/Grid";
import TeamCard from "../../components/TeamCard";

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
            <Grid>
                <TeamCard team="Core" name="John Doe" title="Team Lead" />
            </Grid>
        </PageContainer>
    );
}
