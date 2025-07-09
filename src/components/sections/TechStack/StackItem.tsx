import { ReactNode } from "react";

export const StackItem = ({
  icon,
  name,
}: {
  icon: ReactNode;
  name: string;
}) => {
  return (
    <div className="group flex items-center gap-2 p-3 border border-gray-200 hover:border-gray-400 hover:translate-x-1 transition-all duration-300 rounded">
      <span className="text-xl opacity-70 group-hover:opacity-100 transition-opacity">
        {icon}
      </span>
      <span className="text-sm font-light">{name}</span>
    </div>
  );
};
