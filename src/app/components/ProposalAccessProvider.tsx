"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from "react";

interface ProposalAccessContextType {
    hasAccess: boolean;
    grantAccess: () => void;
    revokeAccess: () => void;
}

const ProposalAccessContext = createContext<ProposalAccessContextType | null>(
    null
);

const STORAGE_KEY = "kororā_proposal_access_key";

/**
 * Context provider for managing access to the proposal page.
 *
 * This component manages whether a user has access to view the proposal page
 * and persists this state in localStorage across browser sessions.
 *
 * @param {object} props - The properties for the component.
 * @param {ReactNode} props.children - The child components to be wrapped.
 * @returns {JSX.Element} The context provider component.
 */
export function ProposalAccessProvider({ children }: { children: ReactNode }) {
    const [hasAccess, setHasAccess] = useState(false);
    const [isHydrated, setIsHydrated] = useState(false);

    // Check localStorage on mount
    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored === "true") {
            setHasAccess(true);
        }
        setIsHydrated(true);
    }, []);

    const grantAccess = () => {
        setHasAccess(true);
        localStorage.setItem(STORAGE_KEY, "true");
    };

    const revokeAccess = () => {
        setHasAccess(false);
        localStorage.removeItem(STORAGE_KEY);
    };

    // Don't render children until hydration is complete to prevent hydration mismatch
    if (!isHydrated) {
        return null;
    }

    return (
        <ProposalAccessContext.Provider
            value={{ hasAccess, grantAccess, revokeAccess }}
        >
            {children}
        </ProposalAccessContext.Provider>
    );
}

/**
 * Hook to access the proposal access context.
 *
 * @returns {ProposalAccessContextType} The proposal access context.
 * @throws {Error} If used outside of ProposalAccessProvider.
 */
export function useProposalAccess() {
    const context = useContext(ProposalAccessContext);
    if (!context) {
        throw new Error(
            "useProposalAccess must be used within a ProposalAccessProvider"
        );
    }
    return context;
}
