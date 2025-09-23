import { ContactLinks } from "@/types";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

function IconBar({ DataArray }: { DataArray: ContactLinks[] }) {
  return (
    <div className="flex gap-1.5 p-2 border border-gray-200 rounded-full bg-gray-100">
      {DataArray.map(({ icon, href, label }) => (
        <Tooltip key={href}>
          <TooltipTrigger>
            <Link
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-white rounded-full transition-all duration-300 hover:shadow-md hover:scale-105"
            >
              {icon}
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <span>{label}</span>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}
export default IconBar;
