import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faInstagram,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

interface SocialIconsProps {
    className?: string;
    size?: "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";
    variant?: "default" | "mobile";
}

/**
 * Social media icons component.
 *
 * This component displays social media icons with links to various platforms
 * including GitHub, Instagram, LinkedIn, and email contact.
 *
 * @param {object} props - The properties for the component.
 * @param {string} [props.className=""] - Additional CSS classes to apply to the container.
 * @param {"sm" | "md" | "lg"} [props.size="md"] - Size of the icons.
 * @param {"default" | "mobile"} [props.variant="default"] - Display variant for different contexts.
 * @returns {JSX.Element} The rendered social icons component.
 */
export default function SocialIcons({
    className = "",
    size = "xl",
    variant = "default",
}: SocialIconsProps) {
    const socialLinks = [
        {
            name: "GitHub",
            href: "https://github.com/Project-Korora",
            icon: faGithub,
        },
        {
            name: "Instagram",
            href: "https://www.instagram.com/project_nootnoot",
            icon: faInstagram,
        },
        {
            name: "LinkedIn",
            href: "https://linkedin.com/company/project-korora",
            icon: faLinkedin,
        },
        {
            name: "Email",
            href: "mailto:projectkorora@gmail.com",
            icon: faEnvelope,
        },
    ];

    const sizeClasses = {
        sm: "text-sm",
        md: "text-md",
        lg: "text-lg",
        xl: "text-xl",
        xxl: "text-xxl",
        xxxl: "text-xxxl",
    };

    const containerClasses = {
        default: "flex items-center",
        mobile: "flex flex-col space-y-3",
    };

    const linkClasses = {
        default: "text-light hover:text-primary transition-colors duration-200",
        mobile: "text-light hover:text-primary transition-colors duration-200 flex items-center space-x-3",
    };

    return (
        <div
            className={`${containerClasses[variant]} ${className}`}
            role="navigation"
            aria-label="Social media links"
        >
            {socialLinks.map((social) => (
                <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${linkClasses[variant]} ${sizeClasses[size]} p-2 rounded transition-all duration-200`}
                    aria-label={`Visit our ${social.name} page`}
                    title={social.name}
                >
                    <FontAwesomeIcon
                        icon={social.icon}
                        fixedWidth
                        className={variant === "mobile" ? "w-5 h-5" : ""}
                    />
                    {variant === "mobile" && (
                        <span className="text-sm">{social.name}</span>
                    )}
                </a>
            ))}
        </div>
    );
}
