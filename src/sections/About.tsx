import Heading from "@/components/Heading";
import { AboutData } from "@/data/data";

function About() {
  return (
    <section>
      <Heading title="About Me" />
      <p className="text-lg leading-relaxed text-gray-700 font-light tracking-wide text-balance">
        {AboutData}
      </p>
    </section>
  );
}
export default About;
