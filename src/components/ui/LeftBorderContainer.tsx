import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const LeftBorderContainer = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn("border-l-2 border-gray-200 pl-4 md:pl-6 py-2", className)}
    >
      {children}
    </div>
  );
};
