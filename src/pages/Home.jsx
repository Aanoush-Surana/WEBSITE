import HeroSection from '../components/home/HeroSection';
import QuickAccess from '../components/home/QuickAccess';
import AchievementPanel from '../components/home/AchievementPanel';
import PlacementSection from '../components/home/PlacementSection';
import NewsNotices from '../components/home/NewsNotices';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <NewsNotices />
      <QuickAccess />
      <AchievementPanel />
      <PlacementSection />
    </main>
  );
}
