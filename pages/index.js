import HeroSection from "../components/HeroSection";
import ProjectSection from "../components/ProjectSection";
import AboutSection from "../components/AboutSection";

export default function Home() {
  return (
    <main className="max-w-[1640px] h-full mx-auto">
      <HeroSection />
      <ProjectSection />
      <AboutSection />
    </main>
  );
}
