import AboutSection from "../components/AboutSection";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <AboutSection />
      <Contact />
    </main>
  );
}
