import Heading from "@/components/Heading";
import { AboutData } from "@/data/data";

function About() {
  return (
    <section>
      {/* About Title */}
      <Heading title="About Me" />

      {/* About Content */}
      <main>
        <p className="text-lg leading-relaxed text-foreground/90 font-light tracking-wide text-balance">
          {AboutData}
        </p>
      </main>
    </section>
  );
}
export default About;
