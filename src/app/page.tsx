import HeroSection from '@/components/HeroSection';
import EngineSection from '@/components/EngineSection';
import JourneySection from '@/components/JourneySection';
import InvitationSection from '@/components/InvitationSection';
import { appData } from '@/data/appData';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <EngineSection apps={appData.apps} />
      <JourneySection 
        businessModel={appData.businessModel}
        targetAudience={appData.targetAudience}
        promotionalVideoUrl={appData.promotionalVideoUrl}
      />
      <InvitationSection 
        invitationMessage={appData.invitationMessage}
        xAccountUrl={appData.xAccountUrl}
      />
    </div>
  );
}
