import HeroSection from "../components/HeroSection";
import ProjectSection from "../components/ProjectSection";

export default function Home() {
  return (
    <main className="max-w-[1640px] mx-auto">
      <HeroSection />
      <ProjectSection />
    </main>
  );
}
