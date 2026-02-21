import HeroCarousel from "../../components/home/HeroCarousel";
import AboutSection from "../../components/home/AboutSection";
import RoomCardsSection from "../../components/home/RoomCardsSection";
import RoomsPlatformsSection from "../../components/home/RoomsPlatformsSection";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <HeroCarousel />
      <AboutSection />
      <RoomCardsSection />
      <RoomsPlatformsSection />
      {/* Content will go here */}
    </div>
  )
}
