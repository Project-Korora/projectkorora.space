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
            <PageHeader
                title="Contact"
                description="Get in touch with the Project Kororā team"
            />

            <div className="bg-dark/40 backdrop-blur-md shadow-lg text-light px-6 py-12 sm:px-12 lg:px-20 mt-12 mx-auto max-w-5xl space-y-10 rounded">
                <h3 className="text-xl sm:text-2xl font-semibold text-center">
                    Have a question or want to get involved?
                </h3>

                <div className="text-center space-y-2 text-light/80">
                    <p className="text-lg">Contact us at</p>
                    <a
                        href="mailto:projectkorora@gmail.com"
                        className="text-accent text-xl font-bold hover:underline break-all"
                    >
                        projectkorora@gmail.com
                    </a>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                    <Button
                        href="/proposal"
                        gradientColors={["primary", "secondary"]}
                        size="lg"
                        className="group transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-secondary/20"
                    >
                        <span className="flex items-center">
                            View Our Proposal
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                className="ml-2 group-hover:translate-x-1 transition-transform"
                                size="lg"
                                fixedWidth
                            />
                        </span>
                    </Button>
                </div>
            </div>

            {/* Contact Form Section */}
            <div className="bg-dark/40 backdrop-blur-md shadow-lg text-light mt-5 px-6 py-6 max-w-full rounded">
                <ContactForm />
            </div>
        </PageContainer>
    );
}
