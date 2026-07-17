import MenuPage from "../menu/MenuPage";
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
    </main>
  );
}

export default HomePage;