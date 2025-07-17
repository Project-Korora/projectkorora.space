import PageContainer from "../../components/PageContainer";
import PageHeader from "../../components/PageHeader";
import Button from "../../components/Button";
import ContactForm from "../../components/ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
            <PageHeader title="Contact" />

            {/* Contact Form Section */}
            <div className="bg-dark/40 backdrop-blur-md shadow-lg text-light mt-5 px-6 py-6 max-w-full rounded">
                <ContactForm />
            </div>
        </PageContainer>
    );
}
