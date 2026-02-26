import WellnessBreadcrumb from '@/components/wellness/WellnessBreadcrumb';
import WaterPoolsSection from '@/components/wellness/WaterPoolsSection';
import GalleryHoursSection from '@/components/wellness/GalleryHoursSection';
import WellnessJourneySection from '@/components/wellness/WellnessJourneySection';
import ServicesSection from '@/components/wellness/ServicesSection';

export default function WellnessSpa() {
  return (
    <div className="bg-background text-foreground antialiased overflow-x-hidden">
      <main className="">
        <WellnessBreadcrumb />
        <WaterPoolsSection />
        <GalleryHoursSection />
        <WellnessJourneySection />
        <ServicesSection />
      </main>
    </div>
  );
}
