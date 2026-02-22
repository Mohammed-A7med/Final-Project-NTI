import WellnessBreadcrumb from '@/components/wellness/WellnessBreadcrumb';
import WaterPoolsSection from '@/components/wellness/WaterPoolsSection';
import GalleryHoursSection from '@/components/wellness/GalleryHoursSection';
import WellnessJourneySection from '@/components/wellness/WellnessJourneySection';
import ServicesSection from '@/components/wellness/ServicesSection';

export default function WellnessSpa() {
  return (
    <div className="bg-white text-primaryDark antialiased overflow-x-hidden">
      <main className="pt-[72px]">
        <WellnessBreadcrumb />
        <WaterPoolsSection />
        <GalleryHoursSection />
        <WellnessJourneySection />
        <ServicesSection />
      </main>
    </div>
  );
}
