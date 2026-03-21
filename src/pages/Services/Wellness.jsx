import WellnessBreadcrumb from '@/components/wellness/WellnessBreadcrumb';
import WaterPoolsSection from '@/components/wellness/WaterPoolsSection';
import GalleryHoursSection from '@/components/wellness/GalleryHoursSection';
import WellnessJourneySection from '@/components/wellness/WellnessJourneySection';
import ServicesSection from '@/components/wellness/ServicesSection';

<<<<<<< HEAD
import WaterPoolsSection from '@/components/wellness/WaterPoolsSection';
import GalleryHoursSection from '@/components/wellness/GalleryHoursSection';
import WellnessJourneySection from '@/components/wellness/WellnessJourneySection';
import ServicesSection from '@/components/wellness/ServicesSection';
export default function WellnessSpa() {
  return (
    <div className="text-foreground antialiased overflow-x-hidden transition-colors duration-300">
      <main className="">
=======
export default function WellnessSpa() {
  return (
    <div className="bg-white text-primaryDark antialiased overflow-x-hidden">
      <main className="pt-[72px]">
        <WellnessBreadcrumb />
>>>>>>> 6516e33e20989d8435ebffe3133495eeaea09786
        <WaterPoolsSection />
        <GalleryHoursSection />
        <WellnessJourneySection />
        <ServicesSection />
      </main>
    </div>
  );
}
