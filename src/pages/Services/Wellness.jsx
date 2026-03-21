import GalleryHoursSection from '@/components/wellness/GalleryHoursSection';
import ServicesSection from '@/components/wellness/ServicesSection';
import WaterPoolsSection from '@/components/wellness/WaterPoolsSection';
import WellnessJourneySection from '@/components/wellness/WellnessJourneySection';
export default function WellnessSpa() {
  return (
    <div className="text-foreground antialiased overflow-x-hidden transition-colors duration-300">
      <main className="">
        <WaterPoolsSection />
        <GalleryHoursSection />
        <WellnessJourneySection />
        <ServicesSection />
      </main>
    </div>
  );
}
