import { AboutSection } from "./components/about";
import { HeroSection } from "./components/hero";
import { StackSection } from "./components/Stack";

const App = () => {
  return (
    <main className="max-w-screen-lg mx-auto md:py-28 py-10 px-4 font-Inter">
      <HeroSection />
      <AboutSection />
      <StackSection />
    </main>
  );
};
export default App;
