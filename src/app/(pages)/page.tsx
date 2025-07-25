import PageContainer from "../components/PageContainer";
import HeroSection from "../components/HeroSection";
import MissionSection from "../components/MissionSection";
import FeaturesSection from "../components/FeaturesSection";
import ImpactSection from "../components/ImpactSection";
import CTASection from "../components/CTASection";

/**
 * The main homepage for Project Kororā.
 *
 * This page serves as the entry point to the website, featuring key sections
 * like the hero, mission, features, stats, and a call-to-action.
 *
 * @returns {JSX.Element} The rendered homepage.
 */
export default function HomePage() {
    return (
        <div className="min-h-screen">
            <HeroSection />
            <PageContainer>
                <MissionSection />
                <FeaturesSection />
                <ImpactSection />
                <CTASection />
            </PageContainer>
        </div>
    );
}
