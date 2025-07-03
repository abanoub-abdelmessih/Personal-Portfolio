import { AboutSection } from "./components/about";
import { ContactSection } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Footer } from "./components/footer";
import { HeroSection } from "./components/hero";
import { StackSection } from "./components/Stack";

const App = () => {
  return (
    <>
      <main className="max-w-screen-lg mx-auto md:py-28 py-10 px-4 font-Inter">
        <HeroSection />
        <AboutSection />
        <StackSection />
        <Experience />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};
export default App;
