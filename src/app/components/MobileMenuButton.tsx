interface MobileMenuButtonProps {
    isOpen: boolean;
    onClick: () => void;
}

/**
 * A button for toggling the mobile navigation menu.
 *
 * This component displays a hamburger icon that animates to a close icon
 * when the menu is open.
 *
 * @param {object} props - The properties for the component.
 * @param {boolean} props.isOpen - Whether the mobile menu is currently open.
 * @param {() => void} props.onClick - The function to call when the button is clicked.
 * @returns {JSX.Element} The rendered mobile menu button.
 */
export default function MobileMenuButton({
    isOpen,
    onClick,
}: MobileMenuButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`${
                isOpen
                    ? "text-primary font-bold"
                    : "text-white hover:text-white/80"
            } focus:outline-none p-2`}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
        >
            <svg
                className="h-10 w-10" //Controls the size of the hamburger menu button
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                {isOpen ? (
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                    />
                ) : (
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                )}
            </svg>
        </button>
    );
}
