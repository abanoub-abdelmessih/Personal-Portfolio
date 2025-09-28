import { ContactLinks } from "@/types";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

function IconBar({ DataArray }: { DataArray: ContactLinks[] }) {
  return (
    <div className="flex gap-1.5 p-2 border-2 border-border rounded-full bg-zinc-900/80">
      {DataArray.map(({ icon, href, label }) => (
        <Tooltip key={href}>
          <TooltipTrigger asChild>
            <Link
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-all duration-300 hover:shadow-md hover:scale-105"
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
