import Head from "next/head";
import HeroSection from "../components/HeroSection";
import Project from "../components/Project";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Project />
    </>
  );
}
