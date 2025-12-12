import { Toaster } from './components/ui/sonner';
import { AgencyHeader } from './components/agency/AgencyHeader';
import { HeroSlider } from './components/agency/HeroSlider';
import { AboutSection } from './components/agency/AboutSection';
import { CoursesSection } from './components/agency/CoursesSection';
import { OfficesSection } from './components/agency/OfficesSection';
import { InterviewsSection } from './components/agency/InterviewsSection';
import { ActivitiesSection } from './components/agency/ActivitiesSection';
import { AchievementsSection } from './components/agency/AchievementsSection';
import { ContactSection } from './components/agency/ContactSection';
import { AgencyFooter } from './components/agency/AgencyFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <AgencyHeader />
      <main>
        <HeroSlider />
        <AboutSection />
        <CoursesSection />
        <OfficesSection />
        <InterviewsSection />
        <ActivitiesSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <AgencyFooter />
      <Toaster />
    </div>
  );
}