import { ReactNode } from "react";

export const LeftBorderContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="border-l-2 border-gray-200 pl-4 md:pl-6 py-2">
      {children}
    </div>
  );
};
