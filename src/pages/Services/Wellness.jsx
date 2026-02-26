
import WaterPoolsSection from '@/components/wellness/WaterPoolsSection';
import GalleryHoursSection from '@/components/wellness/GalleryHoursSection';
import WellnessJourneySection from '@/components/wellness/WellnessJourneySection';
import ServicesSection from '@/components/wellness/ServicesSection';

export default function WellnessSpa() {
  return (
<<<<<<< HEAD
    <div className="bg-background text-foreground antialiased overflow-x-hidden">
      <main className="">

=======
    <div className="bg-background text-foreground antialiased overflow-x-hidden transition-colors duration-300">
      <main className="pt-[72px]">
        <WellnessBreadcrumb />
>>>>>>> 26c2cd6 (feat: add dark mode to wellness page and some update)
        <WaterPoolsSection />
        <GalleryHoursSection />
        <WellnessJourneySection />
        <ServicesSection />
      </main>
    </div>
  );
}
