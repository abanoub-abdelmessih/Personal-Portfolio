import { AboutSection } from "@/components/sections/About";
import { ContactSection } from "@/components/sections/Contact";
import { HeroSection } from "@/components/sections/Hero";
import { TechStack } from "@/components/sections/TechStack";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TechStack />
      <ContactSection />
    </>
  );
}
