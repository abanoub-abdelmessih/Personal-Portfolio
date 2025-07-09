import { HeroButtons } from "./HeroButtons";
import { HeroDetails } from "./HeroDetails";
import { HeroImage } from "./HeroImage";

export const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row gap-10 lg:gap-16 items-center md:items-start">
      <HeroImage />
      <div className="space-y-8 md:grow">
        <HeroDetails />
        <HeroButtons />
      </div>
    </section>
  );
};
