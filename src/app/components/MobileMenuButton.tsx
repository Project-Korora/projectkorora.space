interface MobileMenuButtonProps {
    isOpen: boolean;
    onClick: () => void;
}

export default function MobileMenuButton({
    isOpen,
    onClick,
}: MobileMenuButtonProps) {
    return (
        <button
            onClick={onClick}
            className="text-white hover:text-white/80 focus:outline-none focus:ring-2 focus:ring-white/20 p-2"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
        >
            <svg
                className="h-6 w-6"
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
