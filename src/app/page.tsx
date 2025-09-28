import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Hero from "@/sections/Hero";
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
      </main>
    </>
  );
}
