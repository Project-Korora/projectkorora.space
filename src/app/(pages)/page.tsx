import PageContainer from "../components/PageContainer";
import HeroSection from "../components/HeroSection";
import MissionSection from "../components/MissionSection";
import FeaturesSection from "../components/FeaturesSection";
import StatsSection from "../components/StatsSection";
import CTASection from "../components/CTASection";

export default function HomePage() {
    return (
        <div className="min-h-screen">
            <HeroSection />
            <PageContainer>
                <MissionSection />
                <FeaturesSection />
                <StatsSection />
                <CTASection />
            </PageContainer>
        </div>
    );
}
