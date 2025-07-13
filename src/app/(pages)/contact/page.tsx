import PageContainer from "../../components/PageContainer";
import PageHeader from "../../components/PageHeader";
import Button from "../../components/Button";
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
            <div className="bg-dark/40 backdrop-blur-md shadow-lg text-light px-6 py-12 sm:px-12 lg:px-20 mt-12 mx-auto max-w-5xl space-y-10">
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

                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-light/80 text-lg">
                    <a
                        href="https://www.linkedin.com/company/project-korora/"
                        aria-label="Visit our LinkedIn page"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 hover:text-primary transition"
                    >
                        <i className="fab fa-linkedin text-2xl"></i>
                        <span>Connect with us on LinkedIn</span>
                    </a>

                    <a
                        href="https://www.instagram.com/project_nootnoot?igsh=OXRldDlodnR5ZjVv"
                        aria-label="Visit our Instagram page"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 hover:text-primary transition"
                    >
                        <i className="fab fa-instagram text-2xl"></i>
                        <span>Follow us on Instagram</span>
                    </a>
                </div>
            </div>
        </PageContainer>
    );
}
