import { ExperienceItemHeader } from "./ExperienceHeader";
import { ExperienceItemAchievements } from "./ExperienceItemAchievements";
import { ExperienceItemTechStack } from "./ExperienceItemTechStack";

export const ExperienceItem = ({
  title,
  level,
  company,
  year,
  description,
  techStack,
  achievements,
}) => {
  return (
    <div className="mb-8 last:mb-0 border-l-2 border-gray-200 pl-4 md:pl-6 py-3 select-none group">
      <ExperienceItemHeader
        company={company}
        level={level}
        title={title}
        year={year}
      />
      <p className="text-base opacity-80 font-light leading-relaxed text-gray-700 my-4">
        {description}
      </p>
      <ExperienceItemTechStack techStack={techStack} />
      <ExperienceItemAchievements achievements={achievements} />
    </div>
  );
};
