import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ParagraphProps {
  children: ReactNode;
  className?: string;
}

export const Paragraph = ({ children, className = "" }: ParagraphProps) => {
  return (
    <p
      className={twMerge(
        "text-base md:text-lg leading-relaxed font-light mt-6 opacity-75",
        className
      )}
    >
      {children}
    </p>
  );
};
