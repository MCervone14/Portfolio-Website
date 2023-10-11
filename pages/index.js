import HeroSection from "../components/HeroSection";
import ProjectSection from "../components/ProjectSection";
import AboutSection from "../components/AboutSection";

export default function Home() {
  return (
    <main className="mx-auto">
      <HeroSection />
      <ProjectSection />
      <AboutSection />
    </main>
  );
}
