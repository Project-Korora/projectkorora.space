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
            className={`group inline-flex w-12 h-12 text-light bg-transparent text-center items-center justify-center rounded transition ${isOpen ? "text-primary" : "text-light"}`}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
        >
            <svg
                className="w-8 h-8 fill-current pointer-events-none"
                viewBox="0 0 16 16"
            >
                <rect
                    className={`origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)]
                    ${isOpen 
                        ? 'translate-y-0 rotate-45' 
                        : '-translate-y-[5px]'
                    }`}
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                />
                <rect
                    className={`origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)]
                    ${isOpen ? 'opacity-0' : 'opacity-100'}`}
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                />
                <rect
                    className={`origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)]
                    ${isOpen 
                        ? 'translate-y-0 -rotate-45' 
                        : 'translate-y-[5px]'
                    }`}
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                />
            </svg>
        </button>
    );
}