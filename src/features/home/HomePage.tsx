import MenuPage from "../menu/MenuPage";
import ReservationPage from "../reservation/ReservationPage";
import HeroSection from "./components/HeroSection";
import SpaceSection from "./components/SpaceSection";
import StorySection from "./components/StorySection";

function HomePage() {
  return (
    <main>
      <HeroSection />
      <StorySection />
      <MenuPage />
      <SpaceSection />
      <ReservationPage />
    </main>
  );
}

export default HomePage;