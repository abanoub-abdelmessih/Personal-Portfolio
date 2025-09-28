import Heading from "@/components/Heading";
import { SkillsData } from "@/data/data";

function Skills() {
  return (
    <section>
      {/* Skills Title */}
      <Heading title="Skills" />

      {/* Skills Content */}
      <main className="flex flex-wrap gap-2">
        {SkillsData.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-secondary/30 border-2 border-border rounded-full text-sm hover:border-primary/50 hover:bg-secondary/80 duration-300 inline-flex items-center justify-center"
          >
            {skill}
          </span>
        ))}
      </main>
    </section>
  );
}

export default Skills;
