"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

export default function Contact() {
    return (
        <div className="space-y-8">
            {/* Section Header */}
            <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold text-light">
                    Have a question or want to get involved?
                </h2>
                <p className="text-light/70">
                    We&apos;d love to hear from you. Click below to send us an email.
                </p>
            </div>

            {/* Email Link Styled Like Form */}
            <div className="space-y-6">
                <div className="flex justify-center">
                    <a
                        href="mailto:projectkorora@gmail.com?subject=Inquiry%20from%20Website"
                        aria-label="Send email to Project Korora"
                        className="inline-block w-full sm:w-auto"
                    >
                        <Button
                            gradientColors={["primary", "secondary"]}
                            size="lg"
                            className="w-full sm:w-auto px-12 group transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                        >
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                className="w-5 h-5 mr-2"
                            />
                            Email Us
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    );
}

