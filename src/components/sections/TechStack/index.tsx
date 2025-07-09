import { Heading } from "@/components/ui/Heading";
import { LeftBorderContainer } from "@/components/ui/LeftBorderContainer";
import { technologiesData } from "@/data/technologiesData";
import { StackItem } from "./StackItem";

export const TechStack = () => {
  return (
    <section className="space-y-5 md:space-y-8">
      <Heading title={"Tech Stack"} />
      <LeftBorderContainer>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 select-none">
          {technologiesData.map(({ icon, name }) => (
            <StackItem key={name} icon={icon} name={name} />
          ))}
        </div>
      </LeftBorderContainer>
    </section>
  );
};
