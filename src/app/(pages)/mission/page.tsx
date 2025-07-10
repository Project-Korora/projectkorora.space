"use client";

import { useRouter } from "next/navigation";
import { useProposalAccess } from "../../components/ProposalAccessProvider";
import LoadingScreen from "../../components/LoadingScreen";

/**
 * Special access mission page that unlocks the proposal page.
 *
 * This page grants access to the proposal page and immediately redirects
 * to the home page. Shows loading screen during redirect for smooth UX.
 *
 * @returns {JSX.Element} LoadingScreen component while redirecting.
 */
export default function MissionPage() {
    const { grantAccess } = useProposalAccess();
    const router = useRouter();

    // Grant access immediately on component mount
    grantAccess();

    // Use replace instead of push for faster navigation
    // Replace doesn't add to browser history
    router.replace("/");

    // Show loading screen while redirect happens
    return <LoadingScreen />;
}
