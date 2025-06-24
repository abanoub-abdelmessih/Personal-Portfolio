import { StackIcon } from "./StackIcon";
import { StackName } from "./StackName";

export const StackItem = ({ name, icon }) => {
  return (
    <div className="group flex items-center gap-2 p-3 border border-gray-200 hover:border-gray-400 hover:translate-x-2 transition-all duration-300 rounded">
      <StackIcon icon={icon} />

      <StackName name={name} />
    </div>
  );
};
