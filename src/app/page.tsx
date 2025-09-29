import { Footer } from "@/components/Footer";
import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";

export default function Home() {
  return (
    <>
      {/* Header */}
      <Hero />

      {/* Main Content */}
      <main className="space-y-16">
        <About />
        <Skills />
        <Experience />
        <Projects />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
