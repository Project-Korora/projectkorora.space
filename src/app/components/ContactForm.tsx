"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRight,
    faExclamationCircle,
    faCheckCircle,
    faSpinner,
    faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

// TypeScript Interfaces
interface ContactFormData {
    name: string;
    email: string;
    message: string;
    request_proposal_access?: boolean;
    botcheck?: boolean;
    "h-captcha-response"?: string;
}

interface FormConfig {
    apiKey: string;
    hcaptchaSiteKey: string;
    settings: {
        from_name: string;
        subject: string;
    };
}

// Constants
const FORM_CONFIG: FormConfig = {
    apiKey:
        process.env.PUBLIC_ACCESS_KEY || "753b8080-3081-4116-9c3e-597313a5addf",
    hcaptchaSiteKey: "50b2fe65-b00b-4b9e-ad62-3ba471098be2",
    settings: {
        from_name: "Project Korora",
        subject: "New Message from Project Korora Website",
    },
};

const PLACEHOLDERS = {
    name: "Full Name",
    email: "Email Address",
    message: "Your Message",
} as const;

const VALIDATION_MESSAGES = {
    nameRequired: "Full name is required",
    emailRequired: "Enter your email",
    emailInvalid: "Please enter a valid email",
    messageRequired: "Enter your message",
} as const;

const SUCCESS_MESSAGE =
    "Message sent successfully! We'll get back to you soon.";
const ERROR_MESSAGE = "Something went wrong. Please try again later.";

// CSS Class Constants
const INPUT_BASE_CLASSES =
    "w-full px-4 py-3 bg-dark/30 backdrop-blur-sm border-2 text-light placeholder:text-light/50 rounded outline-none transition-all duration-200 focus:ring-4 focus:ring-primary/20";
const INPUT_ERROR_CLASSES = "border-red-500 focus:border-red-400";
const INPUT_NORMAL_CLASSES =
    "border-light/20 focus:border-primary hover:border-light/30";

/**
 * Error message component for form validation
 * @returns {JSX.Element} JSX element displaying an error message with icon
 */
const ErrorMessage = ({ message }: { message: string }) => (
    <div className="flex items-center space-x-2 text-red-400">
        <FontAwesomeIcon icon={faExclamationCircle} className="w-4 h-4" />
        <span className="text-sm">{message}</span>
    </div>
);

/**
 * Contact form component with hCaptcha integration
 * @returns {JSX.Element} JSX element containing the complete contact form with validation and captcha
 */
export default function Contact() {
    // Note: To enable hCaptcha custom themes, you need to:
    // 1. Add custom=true to the hCaptcha script URL
    // 2. Have custom themes enabled for your hCaptcha account
    // The React component doesn't directly support script URL modification,
    // so custom themes may fall back to standard theme if not properly configured
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors, isSubmitSuccessful, isSubmitting },
    } = useForm<ContactFormData>({
        mode: "onTouched",
    });
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");
    const [captchaToken, setCaptchaToken] = useState<string>("");

    const { submit: onSubmit } = useWeb3Forms({
        access_key: FORM_CONFIG.apiKey,
        settings: FORM_CONFIG.settings,
        onSuccess: (msg) => {
            setIsSuccess(true);
            setMessage(msg);
            reset();
            setCaptchaToken("");
        },
        onError: (msg) => {
            setIsSuccess(false);
            setMessage(msg);
            setCaptchaToken("");
        },
    });

    // Handle hCaptcha verification
    const onCaptchaVerify = (token: string) => {
        setCaptchaToken(token);
        setValue("h-captcha-response", token);
    };

    // Handle hCaptcha expiration
    const onCaptchaExpire = () => {
        setCaptchaToken("");
        setValue("h-captcha-response", "");
    };

    return (
        <div className="space-y-8">
            {/* Form Header */}
            <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold text-light">
                    Send us a message
                </h2>
                <p className="text-light/70">
                    We&apos;d love to hear from you. Get in touch and we&apos;ll
                    get back to you soon.
                </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <input
                    type="checkbox"
                    className="hidden"
                    style={{ display: "none" }}
                    {...register("botcheck")}
                />

                {/* Name Field */}
                <div className="space-y-2">
                    <input
                        type="text"
                        placeholder={PLACEHOLDERS.name}
                        autoComplete="name"
                        className={`${INPUT_BASE_CLASSES} ${
                            errors.name
                                ? INPUT_ERROR_CLASSES
                                : INPUT_NORMAL_CLASSES
                        }`}
                        {...register("name", {
                            required: VALIDATION_MESSAGES.nameRequired,
                            maxLength: 80,
                        })}
                    />
                    {errors.name && (
                        <ErrorMessage message={errors.name.message!} />
                    )}
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                    <label htmlFor="email_address" className="sr-only">
                        Email Address
                    </label>
                    <input
                        id="email_address"
                        type="email"
                        placeholder={PLACEHOLDERS.email}
                        autoComplete="email"
                        className={`${INPUT_BASE_CLASSES} ${
                            errors.email
                                ? INPUT_ERROR_CLASSES
                                : INPUT_NORMAL_CLASSES
                        }`}
                        {...register("email", {
                            required: VALIDATION_MESSAGES.emailRequired,
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: VALIDATION_MESSAGES.emailInvalid,
                            },
                        })}
                    />
                    {errors.email && (
                        <ErrorMessage message={errors.email.message!} />
                    )}
                </div>

                {/* Proposal Access Request */}
                <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                        <input
                            type="checkbox"
                            id="proposal-access"
                            className="mt-0.4 mx-3 w-5 h-5 bg-dark/30 border-2 border-light/20 rounded focus:ring-4 focus:ring-primary/20 text-primary focus:border-primary transition-all duration-200"
                            {...register("request_proposal_access")}
                        />
                        <label
                            htmlFor="proposal-access"
                            className="text-light text-sm leading-relaxed cursor-pointer"
                        >
                            <span className="font-medium">
                                Request access to our detailed proposal document
                            </span>
                        </label>
                    </div>
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                    <textarea
                        placeholder={PLACEHOLDERS.message}
                        rows={5}
                        className={`${INPUT_BASE_CLASSES} resize-y min-h-[120px] ${
                            errors.message
                                ? INPUT_ERROR_CLASSES
                                : INPUT_NORMAL_CLASSES
                        }`}
                        {...register("message", {
                            required: VALIDATION_MESSAGES.messageRequired,
                        })}
                    />
                    {errors.message && (
                        <ErrorMessage message={errors.message.message!} />
                    )}
                </div>

                {/* hCaptcha and Submit Button Row */}
                <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6">
                    {/* hCaptcha Section */}
                    <div className="flex-1 flex justify-center sm:justify-start">
                        <HCaptcha
                            sitekey={FORM_CONFIG.hcaptchaSiteKey}
                            onVerify={onCaptchaVerify}
                            onExpire={onCaptchaExpire}
                            reCaptchaCompat={false}
                            theme="dark"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="w-full sm:w-auto flex justify-end">
                        <Button
                            type="submit"
                            disabled={isSubmitting || !captchaToken}
                            isLoading={isSubmitting}
                            gradientColors={["primary", "secondary"]}
                            size="lg"
                            className="w-full sm:w-auto px-12 group transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                        >
                            {isSubmitting ? (
                                <>
                                    <FontAwesomeIcon
                                        icon={faSpinner}
                                        className="w-5 h-5 animate-spin mr-3"
                                    />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    Send Message
                                    <FontAwesomeIcon
                                        icon={faArrowRight}
                                        className="ml-2 group-hover:translate-x-1 transition-transform"
                                        size="lg"
                                        fixedWidth
                                    />
                                </>
                            )}
                        </Button>
                    </div>
                </div>
            </form>

            {/* Success/Error Messages */}
            {isSubmitSuccessful && isSuccess && (
                <div className="flex items-center justify-center space-x-3 p-4 bg-green-500/20 border border-green-500/30 rounded-[var(--radius)] backdrop-blur-sm">
                    <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="w-6 h-6 text-green-400"
                    />
                    <span className="text-green-400 font-medium">
                        {message || SUCCESS_MESSAGE}
                    </span>
                </div>
            )}
            {isSubmitSuccessful && !isSuccess && (
                <div className="flex items-center justify-center space-x-3 p-4 bg-red-500/20 border border-red-500/30 rounded-[var(--radius)] backdrop-blur-sm">
                    <FontAwesomeIcon
                        icon={faExclamationTriangle}
                        className="w-6 h-6 text-red-400"
                    />
                    <span className="text-red-400 font-medium">
                        {message || ERROR_MESSAGE}
                    </span>
                </div>
            )}
        </div>
    );
}
