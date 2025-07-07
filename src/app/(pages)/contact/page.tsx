import PageContainer from "../../components/PageContainer";
import PageHeader from "../../components/PageHeader";

/**
 * The contact page for Project Kororā.
 *
 * This page provides information on how to get in touch with the team.
 *
 * @returns {JSX.Element} The rendered contact page.
 */
export default function ContactPage() {
    return (
        <PageContainer>
            <PageHeader
                title="Contact"
                description="Get in touch with the Project Kororā team"
            />
        </PageContainer>
    );
}
