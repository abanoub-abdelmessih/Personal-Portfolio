import { StackIcon } from "./StackIcon";
import { StackToolTip } from "./StackToolTip";

export const StackItem = ({ name, icon }) => {
  return (
    <div className="group relative text-black/70 hover:text-black duration-300">
      <StackIcon icon={icon} />

      <StackToolTip name={name} />
    </div>
  );
};
