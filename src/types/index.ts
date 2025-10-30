// Contact Links
export interface ContactLinks {
  href: string;
  label: string;
  icon: React.ReactNode;
}

// Experience
type ExperiencePositionIconType = "design" | "code" | "business" | "education";

type ExperiencePositionItemType = {
  id: string;
  title: string;
  employmentPeriod: string;
  employmentType?: string;
  description?: string;
  icon?: ExperiencePositionIconType;
  skills?: string[];
  isExpanded?: boolean;
};

export type ExperienceItemType = {
  id: string;
  companyName: string;
  companyLogo?: string;
  positions: ExperiencePositionItemType[];
  isCurrentEmployer?: boolean;
};

// Projects
export type Project = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
};
